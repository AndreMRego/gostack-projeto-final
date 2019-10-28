import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import Form from '~/components/Form'

import Button from '~/components/Button'
import DatePicker from '~/components/DatePicker'
import BannerInput from '~/components/BannerInput'

import {
  addMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions'

const schema = Yup.object().shape({
  banner_id: Yup.number().required('A imagem é obrigatória'),
  title: Yup.string().required('O titulo é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.string().required('A data é obrigatória'),
  localization: Yup.string().required('A localização é obrigatória'),
})

export default function MeetupEdit({ match }) {
  const { id } = match.params
  const meetup = useSelector(state => state.meetup.meetup)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addMeetupRequest(id))
  }, [dispatch, id])

  function handleSubmit(data) {
    dispatch(updateMeetupRequest(id, data))
  }

  return (
    <>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        {meetup.banner && <BannerInput name="banner_id" />}
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição Completa" />

        {meetup.date && <DatePicker name="date" placeholder="Data do meetup" />}
        <Input name="localization" placeholder="Localização" />

        <div className="button-container">
          <Button
            icon="MdAddCircleOutline"
            color="#D44059"
            width={180}
            type="submit"
          >
            Atualizar Meetup
          </Button>
        </div>
      </Form>
    </>
  )
}
MeetupEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
}
