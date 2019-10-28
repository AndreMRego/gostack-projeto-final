import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import { format, subDays, addDays } from 'date-fns'
import pt from 'date-fns/locale/pt'

import Icon from 'react-native-vector-icons/MaterialIcons'

import api from '~/services/api'

import Background from '~/components/Background'
import Meetup from '~/components/Meetup'

import { Container, DateFilter, DateText, MeetupList } from './styles'

export default function Dashboard({ navigation }) {
  const [date, setDate] = useState(new Date())
  const [meetups, setMeetups] = useState([])
  const [page, setPage] = useState(1)

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM", { locale: pt }),
    [date]
  )

  function handlePrev() {
    setDate(subDays(date, 1))
  }

  function handleNext() {
    setDate(addDays(date, 1))
  }

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {
          date: format(date, 'yyyy-MM-dd'),
        },
      })

      setMeetups(response.data)
    }
    loadMeetups()
  }, [date])

  const paginate = useCallback(async () => {
    const newPage = page + 1
    const response = await api.get('meetups', {
      params: {
        date: format(date, 'yyyy-MM-dd'),
        page: newPage,
      },
    })

    if (response.data.length > 0) {
      setMeetups([...meetups, response.data])
    }

    setPage(newPage)
  }, [date, page, meetups])

  async function handleSubscription(id) {
    try {
      const response = await api.post(`meetups/${id}/subscriptions`)
      if (response.status) {
        Alert.alert('Sucesso!', 'Inscrição realizada com sucesso')
      }
      navigation.navigate('Subscription')
    } catch (error) {
      Alert.alert('Falha na inscrição', 'Não foi possível realizar a inscrição')
    }
  }
  return (
    <Background>
      <Container>
        <DateFilter>
          <TouchableOpacity onPress={handlePrev}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </TouchableOpacity>
          <DateText>{dateFormatted}</DateText>
          <TouchableOpacity onPress={handleNext}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </DateFilter>

        <MeetupList
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              onAction={() => handleSubscription(item.id)}
              data={item}
              titleButton="Realizar inscrição"
            />
          )}
          onEndReached={paginate}
          onEndReachedThreshold={0.5}
        />
      </Container>
    </Background>
  )
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={20} color={tintColor} />
  ),
}
