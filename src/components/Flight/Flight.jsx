import React, { useState } from 'react'
import {Button, Card} from 'react-bootstrap'
import "./flight.scss"

const Flight = () => {

    const [companyTitle, SetTitle] = useState('Title');
    const [code, SetFlightNumber]  = useState('Flight#')
    const [departureTime, SetDepartureTime] = useState('Time');
    const [journey, SetJourney] = useState('journey');

    return(
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/flight.png" />
            <Card.Body>
                <Card.Title>{companyTitle} {code}</Card.Title>
                <Card.Text> {journey} ⭢ {journey}</Card.Text>
                <Card.Text> {departureTime}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </>
    )
}

export default Flight