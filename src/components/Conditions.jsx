import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Temperature from "./Temperature";
import Wind from "./Wind";
import RainChance from "./RainChance";
import Humidity from "./Humidity";

const Conditions = ({ weatherInfo }) => {

  const [infoToPass, setInfoTopass] = useState(weatherInfo);
  useEffect(() => {
    setInfoTopass(weatherInfo)
  })

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={3}>
          <Wind infoToPass={infoToPass.wind}/>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Temperature infoToPass={infoToPass.main}/>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Temperature infoToPass={infoToPass.main}/>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Humidity infoToPass={infoToPass.main}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Conditions;