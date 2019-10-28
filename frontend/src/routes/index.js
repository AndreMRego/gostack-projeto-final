import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

import Meetups from '~/pages/Meetup'
import MeetupDetail from '~/pages/Meetup/Details'
import MeetupNew from '~/pages/Meetup/New'
import MeetupEdit from '~/pages/Meetup/Edit'
import Profile from '~/pages/Profile'

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/meetups" exact component={Meetups} isPrivate />
      <Route path="/meetups/details/:id" component={MeetupDetail} isPrivate />
      <Route path="/meetups/new" component={MeetupNew} isPrivate />
      <Route path="/meetups/:id" component={MeetupEdit} isPrivate />

      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  )
}
