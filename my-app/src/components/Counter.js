import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0,
        imageURL: 'https://picsum.photos/200',
        tags: ["tag1", "tag2", "tag3"],
        // classes je povezano sa Change classes
        // classes: warning
    }

    // constructor() {
    //     super();
    //     console.log('Constructor', this)
    //     this.formatCount = this.formatCount.bind(this)
    // }

    handleIncrement = () => {
        console.log('handleIncrement')

        this.setState({ counter: this.state.counter + 1 })
        // this.checkSuccess()
    }

    handleDecrement = () => {
        console.log('handleDecrement')

        this.setState({ counter: this.state.counter - 1 })
        // this.checkSuccess()
    }

    // stil mozemo da dodamo i ovde, a posle ga pozivamo samo u jednoj {}
    styles = {
        fontSize: "10px",
        fontWeight: 'bold',
        color: 'green'
    }

    // formatCount() {
    //     //destructuring
    //     const { counter } = this.state
    //     console.log(counter)
    // }

    formatCount = () => {
        //destructuring
        const { counter } = this.state
        // console.log(this.state.counter)
        // console.log(counter);
        return counter === 0 ? "Zero" : counter
    }

    getClass = () => {
        return this.state.counter <= 0 ? 'warning' : 'success'
    }

    // changeClass = () => {
    //     const { classes } = this.state
    //     const { counter } = this.state
    //     counter <= 0 ? this.setState({ classes: 'warning' }) : this.setState({ classes: 'success' })
    // }

    // checkSuccess = () => {
    //     return this.state.counter === 0 ? 
    //     <p className="warning">{this.state.counter}</p> : 
    //     <p className="success">{this.state.counter}</p>
    // }

    render() {
        // za inline css, trebaju nam dve {{}} pa unutra zapisujemo, ali umesto font-size pisacemo fontSize, ili samo jednu {} a unutra this.nekistilkojijedefinisaniznad
        return (
            <>
                <h2 style={this.styles}>Pozdrav iz Child komponente!</h2>
                <p style={{ fontSize: 30, color: 'blue' }}>Ja sam paragraf!</p>

                {/* ovo je komentar */}

                <img src={this.state.imageURL} />

                {/* <button onClick={this.formatCount}>-</button> */}
                <button onClick={this.handleDecrement}>-</button>
                {/* <p>Count: {this.state.counter} </p> */}
                <p className={this.getClass()}>Nas counter je: {this.formatCount()} </p>
                <button onClick={this.handleIncrement}>+</button>
                {/* drugi nacin: */}
                {/* <p className={this.state.counter <= 0 ? 'warning' : 'success'}>Nas counter je: {this.formatCount()}</p> */}

                <h1>Tagovi: </h1>
                {/* umesto array.forEach mozemo ovako: */}
                {
                    this.state.tags.map((tag, index) => (
                        <p key={index}># {tag}</p>
                    ))
                }
                {/* <p>{this.state.tags[0]}</p>
                <p>{this.state.tags[1]}</p>
                <p>{this.state.tags[2]}</p> */}
                {/* {this.checkSuccess} */}
            </>
        );
    }
}

export default Counter;