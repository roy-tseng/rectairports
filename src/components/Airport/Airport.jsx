import React, {useEffect, useState} from 'react'
import AvionCompany from '../AvionCompany/AvionCompany'
import FetchHelpers from '../../helpers/FetchHelper'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Card, Button, Badge} from 'react-bootstrap'

const Airport = (props) => {

    const [name, SetName] = useState(props.info.name);
    const [buildings, setBuildings] = useState(props.info.buildings);
    const [country, setCountry] = useState(props.info.country);
    const [isLoaded, setLoad]=useState(false)
    const [coordinate, setCoordinate] = useState(props.info.coordinate);
    const [airlines, setAirLines] = useState(null);
    const [enterTitle, setEnterTitle] = useState('進入');

    /*
    useEffect(async () =>{
                let response = await FetchHelpers.FetchJSONHelper('https://quality.data.gov.tw/dq_download_json.php?nid=33008&md5_url=1fdb19b0e8274afb70f64370207d886d')
                setAirLines(response);
                setLoad(true);
                console.log(response);
            
        },[]
    )
    */
    

    function getAirLines(){
        return (
            <>
                <Container fluid>
                <Row >
                    {
                        airlines != null && airlines.map((airline,index) => <Col><AvionCompany info={airline}/></Col> )
                    }
                </Row>
                </Container>
            </>
        )
    }

    return (
        <>
             <>
             <p/>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/building.png" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{country}</Card.Text>
                    <Button variant="primary">
                    {enterTitle} <Badge variant="light">航廈數 {buildings.length}</Badge>
                    <span className="sr-only">unread messages</span>
                    </Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{coordinate}</small>
                </Card.Footer>
                </Card>
            </>
        </>
    )
}

export default Airport