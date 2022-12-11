import React from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RBcomp from './com/radioButton';
import { useState, useEffect } from "react";
import LeadGenPossibilityRadio from './com/LeadGenPossibilityRadio';


export default function LeadForm() {
  const [formData, setFormData] = useState([]);
  let reg = [];
  let item = { 'possibility': null };

const handleRadioOptions = (i) =>{
  console.log(i)
   item['possibility'] = i;
  reg = [item,...reg];

};

const handleChange = (i) => {
  // console.log(i.target.id);
  // console.log(i.target.value);
  // setFormData({[i.target.id ]: i.target.value},...formData);
  setFormData({...formData, [i.target.id ]: i.target.value})
  // setValues({ ...values, [name]: value });
  

};




  const radioButtonOptions = [
    { id: 1, value: "high" },
    { id: 2, value: "medium" },
    { id: 3, value: "low" },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  const onSubmit = (lead_data) => {
     let l = [...item,...lead_data];
    console.log(l)

    // console.log(lead_data);
    // console.log(item);
  };

 function onSubmit2(e) {
   
   console.log(formData);
 }


  return (
    <div className="col-md-6 m-5 border border-success rounded shadow p-2 mx-auto">
      <div className="container mt-5">
        <h1 className="text-center">Lead Generation</h1>

        <form className="row g-3" onSubmit={handleSubmit(onSubmit2)}>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              Customer Name
            </label>
            <input
              // {...register("Customer_Name")}
              type="text"
              className="form-control"
              id="Customer_Name"
              required
              onChange={handleChange}
            ></input>
          </div>

          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              Organization
            </label>
            <input
              type="text"
              // {...register("Organization")}
              className="form-control"
              id="Organization"
              required
              onChange={handleChange}
            ></input>
          </div>

          <div className="col-md-6">
            <label htmlFor="emailinfo" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              // {...register("email")}
              className="form-control"
              id="emailinfo"
              required
              onChange={handleChange}
            ></input>
          </div>

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
          
          <div>
            <RBcomp
              OptionList={radioButtonOptions}
              handleRadioOptions={handleChange}
            ></RBcomp>
          </div>

          <div className="col-md-12 mb-5">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
