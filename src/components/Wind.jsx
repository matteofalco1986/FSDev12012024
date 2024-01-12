const Wind = ({ infoToPass }) => {
  return (
    <div className="d-flex justify-content-between condition-tab">
      <p>Icon</p>
      <div>
        <h5>Wind Speed</h5>
        <p className="condition-detail">{(infoToPass === undefined) ? null : infoToPass.speed} km/h</p>
      </div>
      <p>Previous weather</p>
    </div>
  )
}

export default Wind