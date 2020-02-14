import React, { Component } from 'react';
import axios from 'axios';
import Players from './Players';

class PlayerCards extends Component {
    state = {
        soccerPlayer: []
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then(res => {
            this.setState({
                soccerPlayer: res.data
            })
        })
        .catch(err => {
            console.error(err.response); 
        })
    }


    render() {
        console.log('Array of Players: ',this.state.soccerPlayer)

        return (
            <div>
                <h1>United Stated National Womens Soccer Players!</h1>
                {this.state.soccerPlayer.map(data =>
                    <Players key={data.id} data={data}/>
                )}
            </div>
        );
    }
}

export default PlayerCards;