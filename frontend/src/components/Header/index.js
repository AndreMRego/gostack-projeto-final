import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '~/assets/images/logo.svg'
import { Container, Content, Profile } from './styles'

import { signOut } from '~/store/modules/auth/actions'

export default function Header() {
  const profile = useSelector(state => state.user.profile)
  const dispatch = useDispatch()

  function handleSignOut() {
    dispatch(signOut())
  }
  return (
    <Container>
      <Content>
        <Link to="/meetups">
          <img src={logo} alt="MeetApp" />
        </Link>

        <Profile>
          <div>
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu Perfil</Link>
          </div>
          <button type="button" onClick={handleSignOut}>
            Sair
          </button>
        </Profile>
      </Content>
    </Container>
  )
}
