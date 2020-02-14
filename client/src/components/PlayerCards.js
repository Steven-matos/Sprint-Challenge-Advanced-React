import React, { Component } from 'react';
import axios from 'axios';
import Players from './Players';

//Styles
import {Container, Row} from 'reactstrap';

class PlayerCards extends Component {
    state = {
        soccerPlayer: []
    }

    //Retreives data from the API and sets it to state
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
        return (
            <Container className="themed-container" fluid="sm">
            <Row xs="3">
                {this.state.soccerPlayer.map(data =>
                    <Players key={data.id} data={data}/>
                )}
            </Row>
            </Container>
        );
    }
}

export default PlayerCards;