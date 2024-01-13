import { useState, useEffect } from "react";

const Sunrise = ({ infoToPass }) => {

  const [currentTimestamp, setCurrentTimestamp] = useState('');
  const [sunriseTimeStamp, setSunriseTimestamp] = useState('');

  useEffect(() => {
    setCurrentTimestamp(infoToPass.dt);
    setSunriseTimestamp(infoToPass.sunset);
  })

  return (
<>
</>
  )
}

export default Sunrise;