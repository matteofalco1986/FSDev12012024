import { Card, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";


const Forecast = ({ forecastInfo }) => {



  return (
    <Container>
      <Row>
        {forecastInfo.list !== undefined && (
          forecastInfo.list.map(item => {
            <Col xs={6} md={4} lg={3} xl={2}>
              <p>Mappato tutto</p>
            </Col>
          }))
        }
      </Row>
    </Container>
  )
}

export default Forecast;