import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";


class Forecast extends React.Component {

  state = {
    isLoading: true,
    isError: false,
    passedInfo: null
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.forecastInfo !== this.props.forecastInfo) {
      this.setState({
        isLoading: false,
        passedInfo: this.props.forecastInfo
      })
      console.log(prevProps.forecastInfo)
      console.log(this.props.forecastInfo)
    }
  }

  render() {
    return (
      <Container>
        <Row className="forecast-row">
          {this.state.isLoading && (
            <Spinner variant="danger" />
          )}
          {!this.state.isLoading && !this.state.isError && (
            this.state.passedInfo.list.filter((item, i) => i < 8)
              .map((item, i) => {
                return (
                  <Col key={i} xs={6} lg={1}>
                    <div className="card-component">
                      <img src={"http://openweathermap.org/img/w/" + item.weather[0].icon + '.png'} alt="weather ion" />
                      <p className="forecast-conditions">{item.weather[0].description}</p>
                      <p className="forecast-time">{item.dt_txt.slice(11, 16)}</p>
                    </div>
                  </Col>

                )
              })
          )}
        </Row>
      </Container>
    )
  }
};

export default Forecast;
