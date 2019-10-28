import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { MeetupItem } from './styles'
import { MdChevronRight } from 'react-icons/md'

import Button from '~/components/Button'
import { addMeetupsRequest } from '~/store/modules/meetup/actions'

export default function Meetups({ history }) {
  const meetups = useSelector(state => state.meetup)
  const { data } = meetups

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addMeetupsRequest())
  }, [dispatch])

  function newMeetup() {
    history.push(`meetups/new`)
  }
  function detailsMeetup(id) {
    history.push(`meetups/details/${id}`)
  }

  return (
    <>
      <header>
        <strong>Meus Meetups</strong>
        <Button
          icon="MdAddCircleOutline"
          color="#D44059"
          width={172}
          type="button"
          onClick={newMeetup}
        >
          Novo Meetup
        </Button>
      </header>

      <ul>
        {data.map(meetup => (
          <MeetupItem key={meetup.id} onClick={() => detailsMeetup(meetup.id)}>
            <strong>{meetup.title}</strong>
            <span>
              {meetup.dateFormatted} <MdChevronRight color="#FFF" size={24} />
            </span>
          </MeetupItem>
        ))}
      </ul>
    </>
  )
}

Meetups.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}
