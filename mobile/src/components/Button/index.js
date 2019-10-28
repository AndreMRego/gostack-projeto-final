import React from 'react'
import { ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

import { Container, Text } from './styles'

export default function Button({ children, color, loading, ...rest }) {
  return (
    <Container color={color} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
}

Button.defaultProps = {
  color: '#d44059',
  loading: false,
}
