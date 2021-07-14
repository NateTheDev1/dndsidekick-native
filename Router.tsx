import React from 'react'
import { NativeRouter, Route } from 'react-router-native'
import Landing from './screens/Landing'

export const Router = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Landing} />
    </NativeRouter>
  )
}
