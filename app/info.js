import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native'
import v from './theme/variables'
import theme from './theme'
import ssh from './api/ssh'

type Props = {};
export default class Info extends Component<Props> {

	state = {
		loading: false
	}

	getInfo() {
		this.setState({ loading: true })
		ssh.getInfo()
			.then((result) => {
				console.log(result);
				this.setState({ loading: false, result: result })
            })
            .catch((err) => {
				alert('error');
				console.log(err);
            })
		}

	render() {
		return (
			<View style={[theme.container, theme.grid.center]}>
				<TouchableOpacity style={[theme.button.md, theme.color.primary]} onPress={() => this.getInfo()}>
					<Text style={[theme.fontColor.white]}>Get Modem Info</Text>
				</TouchableOpacity>

				{ this.state.loading && <ActivityIndicator size="large" color={v.colors.primary} /> }

				<Text>{this.state.result}</Text>
			</View>
		);
	}
}
