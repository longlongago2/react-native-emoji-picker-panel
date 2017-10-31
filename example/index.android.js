/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import EmojiPicker from 'react-native-emoji-picker-panel';

export default class Emoji extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emoji: '',
        };
        this.handleEmojiSelected = this._handleEmojiSelected.bind(this);
    }

    _handleEmojiSelected(emoji) {
        this.setState({ emoji });
    }

    render() {
        const { emoji } = this.state;
        return (
            <View>
                <Text>{emoji}</Text>
                <EmojiPicker
                    onEmojiSelected={this.handleEmojiSelected}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('emoji', () => Emoji);
