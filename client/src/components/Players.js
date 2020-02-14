import React from 'react';

//Styling
import {
    Col, Card, CardHeader, CardBody,
    CardTitle, CardFooter} from 'reactstrap';

const Players = ({data}) => {
    console.log(data);
    return (
        <Col>
            <Card className='cards'>
                <CardHeader>{data.name}</CardHeader>
                <CardBody>
                    <CardTitle>Country: {data.country}</CardTitle>
                </CardBody>
                <CardFooter>Popularity by Searches: {data.searches}</CardFooter>
            </Card> 
        </Col>
    );
};

export default Players;