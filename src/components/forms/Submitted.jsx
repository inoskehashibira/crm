import { React, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import "../../CSS/form.css";
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router-dom";

const Submitted = (props) => {


 

  return (
    <div>
      <div className="container">
        <div className="">
          <h1>Your Lead has been generated<br/>
          Thanks
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Submitted;
