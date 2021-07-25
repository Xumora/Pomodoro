import React, { Component } from 'react';

export default class Pomodoro extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { time: new Date() }
    // }

    // componentDidMount() {
    //     this.timer = setInterval(() => {
    //         console.log(this.state.time);
    //         this.setState((state) => {
    //             return { time: new Date() };
    //         })
    //     }, 1000)
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timer);
    // }

    // componentDidUpdate() {
    //     console.log("componentDidUpdate");

    //     if (this.state.step >= 30 && this.state.step < 70 && this.state.color != "yellow")
    //         this.setState((state) => { return { color: "yellow" } });
    //     else if (this.state.step >= 70 && this.state.color != "green")
    //         this.setState((state) => { return { color: "green" } });
    // }

    // renderTime = (time) => {
    //     return time < 10 ? "0" + time : time
    // }

    render() {
        return (
            <div>
                <h1>{this.renderTime(this.state.time.getHours())}:{this.renderTime(this.state.time.getMinutes())}:{this.renderTime(this.state.time.getSeconds())}</h1>
            </div>
        )
    }
}