import React, { Component } from 'react';
import { showMessage, hideMessage } from "react-native-flash-message";
import { colors } from './constant'
class SharedClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modelShow: false
        }

    }
    static navigationOptions = {
        header: null

    }

    HideSnakBar() {
    }

    ShowSnakBar({ message, type, delay }) {
        setTimeout(() => {
            showMessage({
                message: '',
                description: message,
                type: type
            });
        }, delay ? delay : 500)


    }


}
export default SharedClass

