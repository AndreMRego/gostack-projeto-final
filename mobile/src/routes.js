import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import Header from '~/components/Header'
import Dashboard from './pages/Dashboard'
import Subscription from './pages/Subscription'
import Profile from './pages/Profile'

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createStackNavigator(
          {
            New: createBottomTabNavigator(
              {
                Dashboard,
                Subscription,
                Profile,
              },
              {
                tabBarOptions: {
                  keyboardHidesTabBar: true,
                  activeTintColor: '#FFF',
                  labelStyle: {
                    fontSize: 12,
                  },
                  inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                  style: {
                    backgroundColor: '#2B1A2F',
                  },
                },
              }
            ),
          },
          {
            defaultNavigationOptions: {
              header: Header,
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  )
