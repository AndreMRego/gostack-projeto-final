import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import Form from '~/components/Form'
import Button from '~/components/Button'
import { signUpRequest } from '~/store/modules/auth/actions'

import logo from '~/assets/images/logo.svg'

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, ' No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
})
export default function SignUp() {
  const dispatch = useDispatch()

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password))
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <Button color="#f94d6a" type="submit">
          Criar conta
        </Button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  )
}
