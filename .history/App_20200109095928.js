import React from 'react';
import Navigator from './routes/login';

import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'
Amplify.configure(config)

class App extends React.Component {
  render() {
  return (
    <Navigator/>
  );
}


export default withAuthenticator(App, { includeGreetings: true })
