import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";


class Forecast extends React.Component {

  state = {
    isLoading: true,
    isError: false,
    passedInfo: null,
    days: [0, 1, 2, 3, 4, 5, 6, 7]
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
        <h2>Today's Forecast</h2>
        <Row className="forecast-row">
          {this.state.isLoading && (
            this.state.days.map((i) => {
              return (
                <Col key={i} xs={6} md={3} lg={1} className="forecast-col">
                  <div className="card-component">
                    <Spinner className="mt-3" variant="danger" />
                  </div>
                </Col>
              )
            })
          )}
          {!this.state.isLoading && !this.state.isError && (
            this.state.passedInfo.list.filter((item, i) => i < 8)
              .map((item, i) => {
                return (
                  <Col key={i} xs={6} lg={1} className="forecast-col">
                    <div className="card-component">
                      <img src={"http://openweathermap.org/img/w/" + item.weather[0].icon + '.png'} alt="weather ion" />
                      <p className="forecast-conditions">{item.weather[0].description}</p>
                      <p className="forecast-time">{item.dt_txt.slice(11, 16)}</p>
                      <div className="d-flex justify-content-center min-max-small-container">
                        <p className="min-max-small">L:{Math.floor(item.main.temp_min)}&deg;</p>
                        <p className="min-max-small">H:{Math.floor(item.main.temp_max)}&deg;</p>
                      </div>
                    </div>
                  </Col>
                )
              })
          )}
        </Row>
        <h2>5 Days Forecast</h2>
        <Row className="forecast-row">
          {this.state.isLoading && (
            this.state.days.map((i) => {
              return (
                <Col key={i} xs={6} md={3} lg={1} className="forecast-col">
                  <div className="card-component">
                    <Spinner className="mt-3" variant="danger" />
                  </div>
                </Col>
              )
            })
          )}
          {!this.state.isLoading && !this.state.isError && (
            this.state.passedInfo.list.filter((item, i) => (i === 8 || i % 8 === 0))
              .map((item, i) => {
                return (
                  <Col key={i} xs={6} lg={1} className="forecast-col five-days-forecast">
                    <div className="card-component">
                      <img src={"http://openweathermap.org/img/w/" + item.weather[0].icon + '.png'} alt="weather ion" />
                      <p className="forecast-time">{item.dt_txt.slice(0, 10)}</p>
                      <p className="forecast-conditions">{item.weather[0].description}</p>
                    </div>
                    <div className="d-flex justify-content-center min-max-small-container pb-3">
                      <p className="min-max-small">L:{Math.floor(item.main.temp_min)}&deg;</p>
                      <p className="min-max-small">H:{Math.floor(item.main.temp_max)}&deg;</p>
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
