import { useEffect } from "react";

const MyDate = () => {
  
  const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const date = new Date();
  
  return (
    <>
      <div>
        <div className="d-flex align-items-center">
          <p className="mb-0 fw-bold date-title">{`${monthsOfTheYear[date.getMonth()]}, ${date.getFullYear()}`}</p>
        </div>
        <div className="d-flex">
          <p className="mb-0 date-body">{`${daysOfTheWeek[date.getDay()]}, ${monthsOfTheYear[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`}</p>
        </div>
      </div>
    </>
 )
}

export default MyDate;