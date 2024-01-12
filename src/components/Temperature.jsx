const Temperature = ({ infoToPass }) => {
  return (
    <>
      <div className="d-flex justify-content-between condition-tab">
        <p>Icon</p>
        <div>
          <h5>Temperature</h5>
          <p className="condition-detail">{(infoToPass === undefined) ? null : infoToPass.temp}&#8451;</p>
        </div>
        <p>Previous weather</p>
      </div>
    </>
  )
}

export default Temperature