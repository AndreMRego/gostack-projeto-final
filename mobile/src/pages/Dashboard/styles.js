import styled from 'styled-components/native'
import { FlatList } from 'react-native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const DateFilter = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const DateText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  padding: 0 20px;
`

export const MeetupList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})`
  margin-top: 15px;
`
