import React from 'react'
import styled from 'styled-components/native'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {HomeScreen, PatientScreen} from './screens'

const AppNavigator = createStackNavigator(
  {
  Home: {
    screen: HomeScreen
  },
  Patient: {
    screen: PatientScreen
  }
  },
  {
    initialRouteName: 'Patient'
  }
  );
  

export default createAppContainer(AppNavigator);