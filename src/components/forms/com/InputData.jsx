import React from 'react'

export default function InputData({handleChange}) {

  return (
    <React.Fragment>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              Customer Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Customer_Name"
              required
              onChange={handleChange}
            ></input>
          </div>
    </React.Fragment>
    
    )
}
