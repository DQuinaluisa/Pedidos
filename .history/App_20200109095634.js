import React from 'react';
import Navigator from './routes/login';

import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'
Amplify.configure(config)

export default function App() {
  return (
    <Navigator/>
  );
}
