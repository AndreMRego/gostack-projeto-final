import styled from 'styled-components/native'

import Input from '~/components/Input'
import Button from '~/components/Button'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`

export const Link = styled.TouchableOpacity`
  margin-top: 20px;
`

export const LinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  opacity: 0.6;
`
