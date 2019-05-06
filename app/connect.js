import React, {Component} from 'react'
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native'
import v from './theme/variables'
import theme from './theme'
import ssh from './api/ssh'

type Props = {};
export default class Connect extends Component<Props> {

    state = {
        connecting: false
    }

    connectModem() {
        this.setState({ connecting: true })
        ssh.connectModem()
          .then(() => {
            this.setState({ connecting: false })
            this.props.onConnect()
            alert('Connected')
          })
      }

    render() {
        return (
            <View style={[theme.container, theme.grid.center]}>
                <TouchableOpacity style={[theme.button.md, theme.color.primary]} onPress={() => this.connectModem()}>
                    <Text style={[theme.fontColor.white]}>Connect Modem</Text>
                </TouchableOpacity>

                { this.state.connecting && <ActivityIndicator size="large" color={v.colors.primary} /> }
            </View>
        );
    }
}