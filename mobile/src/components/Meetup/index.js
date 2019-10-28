import React, { useMemo } from 'react'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Image, Body, Title, Info, Text, SubsButton } from './styles'

export default function Meetup({ data, titleButton, onAction }) {
  const dateFormatted = useMemo(
    () =>
      format(parseISO(data.date), "d 'de' MMMM, 'às' HH'h'mm", {
        locale: pt,
      }),
    [data.date]
  )
  return (
    <Container>
      <Image
        source={{
          uri: data.banner
            ? data.banner.url
            : `https://api.adorable.io/avatar/50/${data.title}.png`,
        }}
      />
      <Body>
        <Title>{data.title}</Title>
        <Info>
          <Icon name="event" size={14} color="#999" />
          <Text>{dateFormatted}</Text>
        </Info>
        <Info>
          <Icon name="location-on" size={14} color="#999" />
          <Text>{data.localization}</Text>
        </Info>
        <Info>
          <Icon name="person" size={14} color="#999" />
          <Text>Organizador: {data.user && data.user.name}</Text>
        </Info>

        <SubsButton onPress={onAction}>{titleButton}</SubsButton>
      </Body>
    </Container>
  )
}
