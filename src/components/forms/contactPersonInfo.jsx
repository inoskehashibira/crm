import React from 'react'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
export default function ContactPersonInfo() {

  const [formData, setFormData] = useState([]);



  const handleChange = (i) => {
    console.log(i.target.value)

    setFormData({ ...formData, [i.target.id]: i.target.value })
  };


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  function onSubmit() {

    console.log(formData);
  }



  return (
    <div className="col-md-6 m-5 border border-success rounded shadow p-2 mx-auto">
      <div className="container mt-5">
        <h1 className="text-center">Contact Person's Information</h1>

        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>



          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              Contact Name
            </label>
            <input
              // {...register("Customer_Name")}
              type="text"
              className="form-control"
              id="Contact_Name"
              required
              onChange={handleChange}
            // value = "abc"
            ></input>
          </div>

          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              Job Position
            </label>
            <input
              type="text"
              // {...register("Organization")}
              className="form-control"
              id="cp_Job_position"
              required
              onChange={handleChange}
            ></input>
          </div>

          <div className="col-md-6">
            <label htmlFor="Address" className="form-label">
              Address
            </label>
            <input
              type="text"
              // {...register("Organization")}
              className="form-control"
              id="cp_Address"
              required
              onChange={handleChange}
            ></input>
          </div>




          {/* <div>
            <RBcomp
              OptionList={radioButtonOptions}
              handleRadioOptions={handleChange}
            ></RBcomp>
          </div> */}


          <div className="row mt-1 mb-1" >
            <div className="col">
              <label htmlFor="Address" className="form-label">
                City
              </label>
              <select className="form-select " onChange={handleChange} id="city">
                <option value="Dhaka">
                  Dhaka
                </option>

                <option value="Chittagong">
                  Chittagong
                </option>

                <option value="Syhlet">
                  Syhlet
                </option>
              </select>
            </div>


            <div className='col'>
              <label htmlFor="Address" className="form-label">
                Country
              </label>
              <select className="form-select" onChange={handleChange} id="country">
                <option value="Bangladesh">
                  Bangladesh
                </option>

                <option value="Nepal">
                  Nepal
                </option>

                <option value="Pakistan">
                  Pakistan
                </option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col">

              <div className="col-md-6">
                <label htmlFor="emailinfo" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  // {...register("email")}
                  className="form-control"
                  id="cp_email"
                  required
                  onChange={handleChange}
                ></input>
              </div>
            </div>


            <div className='col'>

              <div className="col-md-4">
                <label htmlFor="Phone_Number" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  // {...register("Phone_Number")}
                  className="form-control"
                  id="Phone_Number"
                  placeholder="+88"
                  required
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>

          <h2 className="text-center">Sale's Person Information</h2>

          <div className="col">
            <label htmlFor="SalesPerson" className="form-label">
              SalesPerson
            </label>
            <select className="form-select " onChange={handleChange} id="salesPersonName">
              <option value="person 1">
                Person 1
              </option>

              <option value="Person 2">
                Person 2
              </option>

              <option value="Person 3">
                Person 3
              </option>
            </select>
          </div>


          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
            Referred By:
            </label>
            <input
              type="text"
              // {...register("Organization")}
              className="form-control"
              id="Referred_by"
              required
              onChange={handleChange}
            ></input>
          </div>





          <div className="col-md-12 mb-5">
            <button className="btn btn-primary" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
