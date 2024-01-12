const Humidity = ({ infoToPass }) => {
  return (
    <div className="d-flex justify-content-between condition-tab">
      <p>Icon</p>
      <div>
        <h5>Humidity</h5>
        <p className="condition-detail">{(infoToPass === undefined) ? null : infoToPass.humidity} &#37;</p>
      </div>
      <p>Previous weather</p>
    </div>
  )
}

export default Humidity