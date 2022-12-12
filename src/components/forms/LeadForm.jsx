import React from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RBcomp from './com/radioButton';
import { useState, useEffect } from "react";
import LeadGenPossibilityRadio from './com/LeadGenPossibilityRadio';
import { getdropdownlist, getLeadFormRBoptions } from '../services/export'
import InputData from './com/InputData';
import DropDown from './com/DropDown';


export default function LeadForm() {
  const [formData, setFormData] = useState([]);

  const radioButtonOptions = getLeadFormRBoptions();
  const dropDownItems = getdropdownlist();


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
        <h1 className="text-center">Lead Generation</h1>

        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>

          <InputData handleChange={handleChange}></InputData>

          {/* <div className="col-md-6">
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
            // value = "abc"
            ></input>
          </div> */}

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


          <div className="col-md-4">
            <label htmlFor="firstName" className="form-label">
              Tag
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


          <div>
            <h4>schedule Activity :</h4>
            <select className="form-select" onChange={handleChange} id="alterBefore">
              <option value="10">
                Alert before 10 mins
              </option>

              <option value="30">
                Alert before 30 mins
              </option>

              <option value="60">
                Alert before 60 mins
              </option>
            </select>
          </div>


          {/* <DropDown 
          handleChange = {handleChange}
          dropdownlist = {dropDownItems} 
          heading = "schedule Activity :"
          >

          </DropDown> */}



          <div>
            <input className="m-5"
              type="time"
              onChange={handleChange}
              required 
            ></input>
            <input onChange={handleChange} id="date" type="date" required />
          </div>




          <div className="input-group">
            <span className="input-group-text">Notes</span>
            <textarea id="notes" onChange={handleChange} className="form-control" aria-label="With textarea"></textarea>
          </div>



          <div className="col-md-12 mb-5">
            <button className="btn btn-primary" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
