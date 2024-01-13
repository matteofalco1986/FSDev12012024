import Forecast from "./Forecast";
import Conditions from "./Conditions";
import CurrentWeather from "./CurrentWeather";
import MyDate from "./MyDate";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const Search = () => {


  // Urls e token info
  const geoCodingUrl = 'http://api.openweathermap.org/geo/1.0/direct?';
  const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?';
  const weatherForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
  const apiKey = 'c960be15bdd96654462f22709940623b';

  // Variables
  const [searchQuery, setSearchQuery] = useState('');
  const [weatherToPass, setWeatherToPass] = useState({})
  const [forecastToPass, setForecastToPass] = useState({})
  let lat = '53.9591';
  let lon = '-1.0815';
  let weatherData = {};
  let forecastData = {};

  // Caricamento default al montaggio del componente
  useEffect(() => {
    fetchWeatherData(lat, lon);
    fetchForecastData(lat, lon);
  }, [])

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
      // console.log(data);

    } catch (err) {
      console.error('Error: ', err);
    }
  }

  const fetchForecastData = async (_lat, _lon) => {
    try {
      const res = await fetch(`${weatherForecastUrl}lat=${_lat}&lon=${_lon}&units=metric&APPID=${apiKey}`);
      if (!res.ok) {
        throw new Error('Network connection was not ok');
      }
      const data = await res.json();
      forecastData = data;
      setForecastToPass(data);
      // console.log(data);

    } catch (err) {
      console.error('Error: ', err);
    }
  }

  const retrieveData = async (e) => {
    e.preventDefault();
    await fetchCoordinates(searchQuery);
    await fetchWeatherData(lat, lon);
    await fetchForecastData(lat, lon);

  }

  return (
    <>
      <div>
        <Container className="searchBar">
          <Row>
            <Col xs={12} md={6}>
              <Form className="d-flex align-items-center" onSubmit={retrieveData}>
                <Form.Control placeholder="Search for a place..." onChange={(e) => {
                  setSearchQuery(e.target.value);
                }} />
                <Button variant="primary" type="submit" className="d-none">Submit request</Button>
              </Form>
            </Col>
            <Col xs={12} md={6} className="current-date">
              <MyDate />
            </Col>
          </Row>
        </Container>
        <CurrentWeather weatherInfo={weatherToPass} />
        <Conditions weatherInfo={weatherToPass} />
        <Forecast forecastInfo={forecastToPass} />
      </div>

    </>
  )
}

export default Search;