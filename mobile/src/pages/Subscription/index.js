import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { withNavigationFocus } from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome'

import api from '~/services/api'

import Meetup from '~/components/Meetup'
import Background from '~/components/Background'
import { Container, MeetupList } from './styles'

function Subscription({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([])

  async function loadSubscriptions() {
    const response = await api.get('subscriptions')
    setSubscriptions(response.data)
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions()
    }
  }, [isFocused])

  async function handleCancelation(id) {
    try {
      const response = await api.delete(`subscriptions/${id}`)
      if (response.status) {
        Alert.alert('Sucesso!', 'Inscrição cancelada com sucesso')
        
        const newSubscriptions = [...subscriptions]
        const subscription = newSubscriptions.findIndex(s => s.id === id)
        if (subscription >= 0) {
          newSubscriptions.splice(subscription, 1)
          setSubscriptions(newSubscriptions)
        }
      }
    } catch (error) {
      Alert.alert(
        'Falha no cancelamento',
        'Não foi possível cancelar a inscrição'
      )
    }
  }

  return (
    <Background>
      <Container>
        <MeetupList
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              onAction={() => handleCancelation(item.id)}
              data={item.meetup}
              titleButton="Cancelar inscrição"
            />
          )}
        />
      </Container>
    </Background>
  )
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="tag" size={20} color={tintColor} />
  ),
}

export default withNavigationFocus(Subscription)
