import React from 'react';
import App from './App';

export class AppContainer extends React.Component {
    state = {
        value1: null,
        value2: null,
        answer: ''
    }

    add = (value1, value2) => {
        this.setState({answer: (value1 + value2)});
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: parseInt(event.target.value)});
    }    
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { value1, value2 } = this.state;
        this.add(value1, value2)
    }

    render(){
        return (
            <App  
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                answer={this.state.answer}
            />
        );
    }
}

export default AppContainer;