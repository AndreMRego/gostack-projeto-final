import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { MdEvent, MdRoom } from 'react-icons/md'
import { Content } from '../styles'

import Button from '~/components/Button'
import {
  addMeetupRequest,
  deleteMeetupRequest,
} from '~/store/modules/meetup/actions'

export default function MeetupDetails({ match, history }) {
  const meetup = useSelector(state => state.meetup.meetup)
  const { id } = match.params
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addMeetupRequest(id))
  }, [dispatch, id])

  function editMeetup() {
    history.push(`/meetups/${id}`)
  }

  function cancelMeetup() {
    dispatch(deleteMeetupRequest(id))
  }

  return (
    <>
      {meetup && (
        <>
          <header>
            <strong>{meetup.title}</strong>
            <div>
              <Button
                icon="MdCreate"
                color="#4DBAF9"
                width={116}
                type="button"
                onClick={editMeetup}
              >
                Editar
              </Button>
              <Button
                icon="MdDeleteForever"
                color="#D44059"
                width={138}
                type="button"
                onClick={cancelMeetup}
              >
                Cancelar
              </Button>
            </div>
          </header>

          <Content>
            {meetup.banner && (
              <img src={meetup.banner.url} alt={meetup.banner.name} />
            )}
            <p>{meetup.description}</p>
            <div>
              <span>
                <MdEvent size={20} color="#FFF" />
                {meetup.dateFormatted}
              </span>
              <span>
                <MdRoom size={20} color="#FFF" />
                {meetup.localization}
              </span>
            </div>
          </Content>
        </>
      )}
    </>
  )
}

MeetupDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}
