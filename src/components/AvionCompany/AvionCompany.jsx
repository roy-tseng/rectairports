import React, {useState} from "react"
import {Button, Card} from 'react-bootstrap'

const AvionCompany = (props) =>{

    const [airlineTitle, SetTitle] = useState(props.info.航空公司)
    const [airlineDescription, SetDecription] = useState(props.info.內容說明)
    const [airlineCode, SetCode] = useState(props.info.代號)
    const [airlinePosition, SetPosition] = useState(props.info.機場位置)
    const [airlineTel, setTel] = useState(props.info.機場服務電話)

    return(
            <>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/company.png" />
                <Card.Body>
                    <Card.Title>{airlineTitle}</Card.Title>
                    <Card.Text>{airlinePosition}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{airlineTel}</small>
                </Card.Footer>
                </Card><p/>
            </>
    )
}

export default AvionCompany