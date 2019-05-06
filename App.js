import React, {Component} from 'react'


import Connect from './app/connect'
import Info from './app/info'

type Props = {};
export default class App extends Component<Props> {

  state = {
    connected: false
  }

  connected() {
    this.setState({ connected: true })
  }

  disconected() {
    this.setState({ connected: false })
  }

  render() {
    return this.state.connected ? <Info onDisconnect={() => this.disconected()} /> : <Connect onConnect={() => this.connected()} />
  }
}