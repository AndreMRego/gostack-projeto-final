import styled from 'styled-components/native'

import Button from '~/components/Button'

export const Container = styled.View`
  border-radius: 4px;
  background: #fff;
  margin-bottom: 20px;
`
export const Image = styled.Image`
  height: 150px;
  border-radius: 4px;
`

export const Body = styled.View`
  margin: 20px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;

  margin-bottom: 10px;
`

export const Info = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 10px;
`
export const Text = styled.Text`
  color: #999;
  font-size: 13px;
  margin-left: 5px;
`

export const SubsButton = styled(Button)`
  margin-right: 5px;
  background: #d44059;
`
