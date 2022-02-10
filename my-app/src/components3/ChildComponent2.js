import React, { Component } from 'react'

export default class ChildComponent2 extends Component {
    componentWillUnmount() {
        alert('This component will unmount.')
    }
    render() {

        // React.createElement('h1', null, ... ) //prima tri elementa: tag, klasa, itd
        return <>I am a child component</>
    }
}