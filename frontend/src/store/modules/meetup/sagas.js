import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'
import history from '~/services/history'

import {
  addMeetupSuccess,
  addMeetupsSuccess,
  deleteMeetupSuccess,
} from './actions'

function* addMeetup({ payload }) {
  try {
    const { id } = payload
    const meetup = yield call(api.get, `meetups/${id}`)

    if (meetup.status) {
      yield put(addMeetupSuccess(meetup.data))
    }
  } catch (error) {
    toast.error('Não foi possível carregar dados do meetup')
    history.push('/meetups')
  }
}
function* addMeetups() {
  try {
    const meetups = yield call(api.get, 'organizing')

    if (meetups.status) {
      yield put(addMeetupsSuccess(meetups.data))
    }
  } catch (error) {
    toast.error('Não foi possível carregar os meetups')
  }
}

function* createMeetup({ payload }) {
  try {
    const { meetup } = payload

    const response = yield call(api.post, `meetups`, {
      ...meetup,
      date: new Date(meetup.date),
    })

    if (response.status) {
      toast.success('Meetup criado com sucesso!')
      history.push('/meetups')
    }
  } catch (error) {
    toast.error('Não foi possível criar o meetup')
  }
}

function* updateMeetup({ payload }) {
  try {
    const { id, meetup } = payload

    const response = yield call(api.put, `meetups/${id}`, {
      ...meetup,
      date: new Date(meetup.date),
    })

    if (response.status) {
      toast.success('Meetup atualizado com sucesso!')
      history.push('/meetups')
    }
  } catch (error) {
    toast.error('Não foi possível atualizar o meetup')
  }
}

function* deleteMeetup({ payload }) {
  try {
    const { id } = payload
    const response = yield call(api.delete, `meetups/${id}`)

    if (response.status) {
      yield put(deleteMeetupSuccess(id))
      toast.success('O Meetup foi cancelado com sucesso!')
      history.push('/meetups')
    }
  } catch (error) {
    toast.error('Não foi possível cancelar o Meetup')
  }
}

export default all([
  takeLatest('@meetup/ADD_REQUEST', addMeetup),
  takeLatest('@meetup/ADD_MEETUPS_REQUEST', addMeetups),
  takeLatest('@meetup/UPDATE_REQUEST', updateMeetup),
  takeLatest('@meetup/CREATE_REQUEST', createMeetup),
  takeLatest('@meetup/DELETE_REQUEST', deleteMeetup),
])
