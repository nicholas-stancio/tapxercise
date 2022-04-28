import React from 'react';
import axios from 'axios';

export default class ScoreBoard extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://www.nss-productions.com/tapxercise`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        console.log(this.state.persons)
        return (
            <ul>
                {
                    this.state.persons
                        .map(person =>
                            <li key={person._id}>{person.userName}{person.score}</li>
                        )
                }
            </ul>
        )
    }
}

