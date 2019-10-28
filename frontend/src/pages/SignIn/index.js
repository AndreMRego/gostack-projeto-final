import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import Form from '~/components/Form'
import Button from '~/components/Button'
import { signInRequest } from '~/store/modules/auth/actions'

import logo from '~/assets/images/logo.svg'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
})

export default function SignIn() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password))
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <Button color="#f94d6a" type="submit">
          {loading ? 'Carregando...' : 'Entrar'}
        </Button>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  )
}
