import Forecast from "./Forecast";
import Conditions from "./Conditions";
import CurrentWeather from "./CurrentWeather";
import MyDate from "./MyDate";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const Search = () => {

  // Urls e token info
  const geoCodingUrl = 'http://api.openweathermap.org/geo/1.0/direct?';
  const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?';
  const weatherForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
  const apiKey = 'c960be15bdd96654462f22709940623b';

  // Variables
  const [searchQuery, setSearchQuery] = useState('');
  const [weatherToPass, setWeatherToPass] = useState({})
  let lat = '';
  let lon = '';
  let weatherData = {};


  const fetchCoordinates = async (_searchQuery) => {
    try {
      const res = await fetch(`${geoCodingUrl}q=${_searchQuery}&limit=1&appid=${apiKey}`);
      if (!res.ok) {
        throw new Error('Network connection was not ok');
      }
      const data = await res.json();
      lat = data[0].lat.toString();
      lon = data[0].lon.toString();
    } catch (err) {
      console.error('Error: ', err);
    }
  }

  const fetchWeatherData = async (_lat, _lon) => {
    try {
      const res = await fetch(`${weatherUrl}lat=${_lat}&lon=${_lon}&units=metric&APPID=${apiKey}`);
      if (!res.ok) {
        throw new Error('Network connection was not ok');
      }
      const data = await res.json();
      // console.log(data);
      weatherData = data;
      setWeatherToPass(data);

    } catch (err) {
      console.error('Error: ', err);
    }
  }

  const retrieveData = async (e) => {
    e.preventDefault();
    await fetchCoordinates(searchQuery);
    await fetchWeatherData(lat, lon);

  }

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <MyDate />
            </Col>
            <Col xs={12} md={6}>
              <Form className="d-flex align-items-center" onSubmit={retrieveData}>
                <Form.Control placeholder="Search for a place..." onChange={(e) => {
                  setSearchQuery(e.target.value);
                }} />
                <Button variant="primary" type="submit" className="d-none">Submit request</Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Conditions weatherInfo={weatherToPass} />
        <Forecast />
        <CurrentWeather />
      </div>

    </>
  )
}

export default Search;