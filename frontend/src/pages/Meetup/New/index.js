import React from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import Form from '~/components/Form'
import Button from '~/components/Button'
import DatePicker from '~/components/DatePicker'
import BannerInput from '~/components/BannerInput'
import { createMeetupRequest } from '~/store/modules/meetup/actions'

const schema = Yup.object().shape({
  banner_id: Yup.number().required('A imagem é obrigatória'),
  title: Yup.string().required('O titulo é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.string().required('A data é obrigatória'),
  localization: Yup.string().required('A localização é obrigatória'),
})
export default function MeetupNew() {
  const dispatch = useDispatch()

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data))
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição Completa" />

        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="localization" placeholder="Localização" />

        <div className="button-container">
          <Button
            icon="MdAddCircleOutline"
            color="#D44059"
            width={180}
            type="submit"
          >
            Salvar Meetup
          </Button>
        </div>
      </Form>
    </>
  )
}
