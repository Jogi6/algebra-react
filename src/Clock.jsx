import { Component } from "react";

export default class Clock extends Component {
    state = {
        date: new Date()
    };

    componentDidMount = () => {
        this.intId = setInterval(() =>{
            this.setState({date: new Date()});
        }, 1000)
    };

    shouldComponentUpdate = (nextProps, nextState) =>{
        if(nextState.date.getSeconds() % 2 == 0){
            return true;
        }
        return false;
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log(prevState.date.getSeconds());
    }

    componentWillUnmount = () => {
        clearInterval(this.intId);
    };

    render () {
        const {date} = this.state;
        return <div><h1>{date.toLocaleTimeString("hr")}</h1></div>
    };
}