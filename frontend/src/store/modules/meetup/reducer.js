import produce from 'immer'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

const INITIAL_STATE = {
  data: [],
  meetup: {},
  loading: false,
  errorMessage: '',
  error: false,
}

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/ADD_REQUEST': {
        draft.loading = true
        break
      }
      case '@meetup/ADD_SUCCESS': {
        const { meetup } = action.payload
        const meetupFormatted = {
          ...meetup,
          date: parseISO(meetup.date),
          dateFormatted: format(
            parseISO(meetup.date),
            "d 'de' MMMM, 'às' HH'h'mm",
            {
              locale: pt,
            }
          ),
        }
        draft.meetup = meetupFormatted
        draft.loading = false

        break
      }
      case '@meetup/ADD_MEETUPS_REQUEST': {
        draft.loading = true
        break
      }
      case '@meetup/ADD_MEETUPS_SUCCESS': {
        const { meetups } = action.payload
        const formatDate = meetups.map(meetup => ({
          ...meetup,
          dateFormatted: format(
            parseISO(meetup.date),
            "d 'de' MMMM, 'às' HH'h'mm",
            {
              locale: pt,
            }
          ),
        }))
        draft.data = formatDate
        draft.loading = false

        break
      }
      case '@meetup/DELETE_SUCCESS': {
        const meetupIndex = draft.data.findIndex(
          p => p.id === action.payload.id
        )
        if (meetupIndex >= 0) {
          draft.data.splice(meetupIndex, 1)
        }
        break
      }
      case '@meetup/CREATE_REQUEST': {
        draft.loading = true
        break
      }
      case '@meetup/CREATE_SUCCESS': {
        draft.loading = false
        break
      }

      default:
        return state
    }
  })
}
