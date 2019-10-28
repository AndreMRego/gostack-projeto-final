import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import Form from '~/components/Form'
import Button from '~/components/Button'
import { updateProfileRequest } from '~/store/modules/user/actions'

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword ? field.required('A nova senha é obrigatória') : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('A confirmação da senha é obrigatória')
          .oneOf([Yup.ref('password')], 'As senhas digitadas não correspodem.')
      : field
  ),
})

export default function Profile() {
  const profile = useSelector(state => state.user.profile)
  const dispatch = useDispatch()

  function updateProfile(data) {
    dispatch(updateProfileRequest(data))
  }

  return (
    <>
      <Form initialData={profile} schema={schema} onSubmit={updateProfile}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <div className="button-container">
          <Button
            icon="MdAddCircleOutline"
            color="#f94d6a"
            width={162}
            type="submit"
          >
            Salvar perfil
          </Button>
        </div>
      </Form>
    </>
  )
}
