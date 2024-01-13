import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";

const CurrentWeather = ({ weatherInfo }) => {

  return (
    <Container className="current-weather">
      <div className="main-weather">
        <div className="">
          <p className="location">{(weatherInfo.sys === undefined) ? '' : `${weatherInfo.name}, ${weatherInfo.sys.country}`}</p>
          <p className="d-none">{(weatherInfo.dt === undefined) ? '' : weatherInfo.dt}</p>
        </div>
        <div>
          <p className="main-temp">{(weatherInfo.main === undefined) ? '' : Math.floor(weatherInfo.main.temp)}&#8451;</p>
          <p className="weather-conditions">{(weatherInfo.main === undefined) ? '' : weatherInfo.weather[0].main}</p>
        </div>
        <div className="d-flex justify-content-center min-max-temp">
          <p className="min-max-detail">L:{(weatherInfo.main === undefined) ? null : Math.floor(weatherInfo.main.temp_min)}&deg;</p>
          <p className="min-max-detail">H:{(weatherInfo.main === undefined) ? null : Math.floor(weatherInfo.main.temp_max)}&deg;</p>
        </div>
      </div>
      <p>Sunrise &amp; Sunset</p>
      <div className="d-flex justify-content-between condition-tab sunhours-tab">
        <div className="d-flex internal-icon">
          <div className="sunrise weather-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-sunrise" viewBox="0 0 16 16">
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
            </svg>
          </div>
          <div>
            <h5>Sunrise</h5>
            {/* <p className="condition-detail">{weatherInfo.sys.sunrise}</p> */}
          </div>
        </div>
        <p>Previous weather</p>
      </div>
      <div className="d-flex justify-content-between condition-tab sunhours-tab">
        <div className="d-flex internal-icon">
          <div className="sunset weather-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-sunset" viewBox="0 0 16 16">
              <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
            </svg>
          </div>
          <div>
            <h5>Sunset</h5>
            {/* <p className="condition-detail">{weatherInfo.sys.sunset}</p> */}
          </div>
        </div>
        <p>Previous weather</p>
      </div>
    </Container>
  )
}

export default CurrentWeather;