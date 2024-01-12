import { useState, useEffect } from "react";

const ConditionTab = ( { infoToPass }) => {
  
  useEffect(() => {
    console.log(infoToPass)
  })
  
  return (
    <div className="d-flex condition-tab">
      <p>Icon</p>
      <p>{(infoToPass === undefined) ? null : infoToPass.speed }</p>
      <p>Previous weather</p>
    </div>
  )
}

export default ConditionTab;