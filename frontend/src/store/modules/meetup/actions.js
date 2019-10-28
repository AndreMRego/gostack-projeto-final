export function addMeetupRequest(id) {
  return {
    type: '@meetup/ADD_REQUEST',
    payload: {
      id,
    },
  }
}

export function addMeetupSuccess(meetup) {
  return {
    type: '@meetup/ADD_SUCCESS',
    payload: {
      meetup,
    },
  }
}

export function addMeetupsRequest() {
  return {
    type: '@meetup/ADD_MEETUPS_REQUEST',
  }
}

export function addMeetupsSuccess(meetups) {
  return {
    type: '@meetup/ADD_MEETUPS_SUCCESS',
    payload: { meetups },
  }
}

export function createMeetupRequest(meetup) {
  return {
    type: '@meetup/CREATE_REQUEST',
    payload: {
      meetup,
    },
  }
}

export function createMeetupSuccess() {
  return {
    type: '@meetup/CREATE_SUCCESS',
  }
}

export function updateMeetupRequest(id, meetup) {
  return {
    type: '@meetup/UPDATE_REQUEST',
    payload: {
      id,
      meetup,
    },
  }
}

export function deleteMeetupRequest(id) {
  return {
    type: '@meetup/DELETE_REQUEST',
    payload: { id },
  }
}
export function deleteMeetupSuccess(id) {
  return {
    type: '@meetup/DELETE_SUCCESS',
    payload: { id },
  }
}
