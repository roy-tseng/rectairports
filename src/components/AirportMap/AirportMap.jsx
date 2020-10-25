import React, {useState, useEffect} from 'react'
import Airport from '../../components/Airport/Airport'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function getAirPortInfo() {
    
    let info = [ 
      {
        name:"桃園機場",
        buildings:["第一航廈","第二航廈"],
        code:"",
        country: "台灣",
        coordinate:'41°24\'12.2"N 2°10\'26.5"E\''
      },
      {
        name:"松山機場",
        buildings:["第一航廈","第二航廈"],
        code:"",
        country: "台灣",
        coordinate:'41°24\'12.2"N 2°10\'26.5"E\''
      }
    ];

    return info;
}

const AirportMap = () => {
    
    const [airports, setAirPorts] = useState(null);

    useEffect(()=>{
      setAirPorts(getAirPortInfo());
    },[]);

    function getAirPorts(){
      return (
          <>
            {
              airports != null && airports.map((airport,index) => <Col><Airport key={index} {...airport}/></Col> )
            }
          </>
      )
    }
    
    return (
      <Router>
        <Container fluid>
          <Row >
            {getAirPorts()}
          </Row>
        </Container>
        <Route path="/airport" component={Airport} />
      </Router>
    );
}

export default AirportMap