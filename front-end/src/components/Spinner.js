import React from 'react'

const Spinner = () => {
  return (
    <div className="modal fade" id="loadingModal" tabIndex="-1" role="dialog" aria-labelledby="loadingModalCenterTitle" aria-hidden="true"
    data-backdrop="static"
    data-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="spinner-border text-primary" role="status" style={{margin: "auto"}}>
            <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Spinner