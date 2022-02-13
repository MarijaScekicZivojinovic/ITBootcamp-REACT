import React, { Component } from 'react'

export default class ChildComponent1 extends Component {
    state = {
        favouriteColor: "red"
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favouriteColor: "blue" });
        }, 3000);
    }

    // getSnapshotBeforeUpdate prima dva argumenta
    getSnapshotBeforeUpdate(previousProps, previousState) {
        document.getElementById('div1').innerHTML = 'Before the update, the favourite colour was ' + previousState.favouriteColor;
        return null;
    }

    componentDidUpdate() {
        document.getElementById('div2').innerHTML = 'The updated favourite colour is ' + this.state.favouriteColor;
    }
    render() {
        return <div>
            <h1>My favourite color is {this.state.favouriteColor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
        </div>;
    }
}