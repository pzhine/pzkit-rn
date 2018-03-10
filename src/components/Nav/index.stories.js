import React from 'react'
import { NativeRouter } from 'react-router-native'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import styles from '../../../storybook/styles'

import Nav from './'

storiesOf('Nav', module)
  .addDecorator(story => (
    <NativeRouter>
      <View style={styles.container}>{story()}</View>
    </NativeRouter>
  ))
  .add('default', () => <Nav />)
