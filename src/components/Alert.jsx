import React from 'react'

export default function Alert({ alertMessage }) {
    return (
        <div className="container my-3">
           <div className={`alert alert-${alertMessage.type} alert-dismissible fade show`} role="alert" style={alertMessage.msg === "" ? { display: "none" } : null}>
              <strong>{alertMessage.msg}</strong>
              <button type="button" className="btn-close" style={alertMessage.msg === "" ? { display: "none" } : null} data-bs-dismiss="alert" aria-label="Close"></button>
           </div>
        </div>
        
    )
}