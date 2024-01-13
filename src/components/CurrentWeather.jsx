import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const CurrentWeather = ({ weatherInfo }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [passedInfo, setPassedInfo] = useState(null);

  useEffect(() => {
    setIsLoading(true);
  }, [])

  useEffect(() => {
    setPassedInfo(weatherInfo)
    setIsLoading(false)
  })


  return (
    <Container className="current-weather">
      {isLoading && !isError && (
        <div className="d-flex justify-content-center">
          <Spinner variant="danger" />
        </div>
      )}
      {!isLoading && !isError && (
        <>
          <div className="main-weather">
            <div className="">
              <p className="location">{(passedInfo.sys === undefined) ? '' : `${passedInfo.name}, ${passedInfo.sys.country}`}</p>
              <p className="d-none">{(passedInfo.dt === undefined) ? '' : passedInfo.dt}</p>
            </div>
            <div>
              <p className="main-temp">{(passedInfo.main === undefined) ? '' : Math.floor(passedInfo.main.temp)}&#8451;</p>
              <p className="weather-conditions">{(passedInfo.main === undefined) ? '' : passedInfo.weather[0].main}</p>
            </div>
            <div className="d-flex justify-content-center min-max-temp">
              <p className="min-max-detail">L:{(passedInfo.main === undefined) ? null : Math.floor(passedInfo.main.temp_min)}&deg;</p>
              <p className="min-max-detail">H:{(passedInfo.main === undefined) ? null : Math.floor(passedInfo.main.temp_max)}&deg;</p>
            </div>
          </div>
        </>
      )}
    </Container>
  )
}

export default CurrentWeather;