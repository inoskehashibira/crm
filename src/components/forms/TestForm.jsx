import React from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



export default function TestForm() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (lead_data) => {
    console.log(lead_data);
   
  };


  return (
    <div className="col-md-6 m-5 border border-success rounded shadow p-2 mx-auto">
      <div className="container mt-5">
        <h1 className="text-center">Contact me!!</h1>
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              {" "}
              First Name
            </label>
            <input
              {...register("firstName")}
              type="text"
              className="form-control"
              id="firstName"
              required
            ></input>
          </div>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              {" "}
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName")}
              className="form-control"
              id="lastName"
              required
            ></input>
          </div>
          <div className="col-md-8">
            <label htmlFor="emailinfo" className="form-label">
              {" "}
              E-mail
            </label>
            <input
              type="email"
              {...register("emailinfo")}
              className="form-control"
              id="emailinfo"
              required
            ></input>
          </div>
          <div className="col-md-4">
            <label htmlFor="Phone_Number" className="form-label">
              {" "}
              Phone Number
            </label>
            <input
              type="text"
              {...register("Phone_Number")}
              className="form-control"
              id="Phone_Number"
              placeholder="+88"
              required
            ></input>
          </div>
          <div className="col-md-12 mb-5">
            <button className="btn btn-primary" type="submit">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
