import React, { useEffect } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import CodePush from 'react-native-code-push'
import OneSignal from 'react-native-onesignal'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import './config/ReactotronConfig'

import { store, persistor } from './store'
import App from './App'

function Index() {
  useEffect(() => {
    OneSignal.init('2c142f46-2743-4ac0-a7d5-f6e6c3f712c8')

    OneSignal.addEventListener('received', onReceived)
    OneSignal.addEventListener('opened', onOpened)
    OneSignal.addEventListener('ids', onIds)

    return () => {
      OneSignal.removeEventListener('received', onReceived)
      OneSignal.removeEventListener('opened', onOpened)
      OneSignal.removeEventListener('ids', onIds)
    }
  }, [])

  const onReceived = data => {}

  const onOpened = notification => {}

  const onIds = id => {}

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#22202C" />
        <App />
      </PersistGate>
    </Provider>
  )
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index)
