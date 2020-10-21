import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Airport from './components/Airport/Airport'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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


const App = () => {

  const [airports, setAirPorts] = useState(null);

  useEffect(()=>{
    setAirPorts(getAirPortInfo());
  },[]);

  function getAirPorts(){
    return (
        <>
          {
            airports != null && airports.map((airport,index) => <Col><Airport info={airport}/></Col> )
          }
        </>
    )
  }
  
  return (
    <div className="App">
      <Container fluid>
        <Row >
          {getAirPorts()}
        </Row>
      </Container>
    </div>
  );
}


export default App;
