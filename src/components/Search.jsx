import Forecast from "./Forecast";
import Conditions from "./Conditions";
import CurrentWeather from "./CurrentWeather";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Search = () => {

  const geoCodingUrl = 'http://api.openweathermap.org/geo/1.0/direct?';
  const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?';
  const weatherForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
  const apiKey = 'c960be15bdd96654462f22709940623b';

  const [searchQuery, setSearchQuery] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const fetchCoordinates = async (searchQuery) => {
    try {
      const res = await fetch(`${geoCodingUrl}q=${searchQuery}&limit=1&appid=${apiKey}`);
      if (!res.ok) {
        throw new Error('Network connection was not ok');
      }
      const data = await res.json();
      console.log(data[0]);
    } catch (err) {
      console.error('Error: ', err);
    }
  }

  const fetchWeather = async (lat, lon) => {

  }

  return (
    <>
      <Form onSubmit={(e) => {
        e.preventDefault();
        fetchCoordinates(searchQuery);
      }}>
        <Form.Control placeholder="Search for a place..." onChange={(e) => {
          setSearchQuery(e.target.value);
          console.log(searchQuery);
        }} />
        <Button variant="primary" type="submit" className="d-none">Submit request</Button>
      </Form>
    </>
  )
}

export default Search;