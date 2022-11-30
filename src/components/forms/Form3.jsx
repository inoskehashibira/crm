import { React, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import "../../CSS/form.css";
import DatePicker from "react-date-picker";
import { useNavigate, useLocation } from "react-router-dom";
import {ref1} from '../../firebase'
import { ref } from "firebase/database";

const Page3 = (props) => {
  const navigate = useNavigate();
   const cp_data = useLocation().state.cp_data;


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (MI_data) => {
    console.log(cp_data);
    MI_data = { ...cp_data, ...MI_data };
    console.log(MI_data);

    ref1.push(MI_data);
    

  };


  return (
    <div>
      <div className="container">
        {/* form stars */}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="heading">
            <h1>Marketting Information</h1>
          </div>

          <div className="inputs text-start">
            <div className="label">
              <div className="heading">
                <label className="fieldlabels">
                  Model-year/Manufacture year
                </label>
              </div>
              <input
                type={"text"}
                {...register("MI Model-year")}
                placeholder="Model-year"
                maxLength={32}
              />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Color</label>
              </div>
              <input
                type={"text"}
                {...register("MI Color")}
                placeholder="color"
                maxLength={32}
              />
            </div>

            {/* Radio button starts */}
            <div className="">
              <input type="checkbox" value="1" {...register("Office price")} />
              Office Price Provided
              <input
                type="checkbox"
                value="1"
                {...register("Discount price")}
              />
              Discount Price Provided
            </div>
            {/* Radio button Ends */}

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Quotation Status</label>
              </div>
              <input type={"text"} {...register("Quotation Status")} />
            </div>

            <div>
              <input
                type="number"
                placeholder="0"
                onChange={(e) =>
                  register("Quotation sent time", { value: e.target.value })
                }
                step="1"
              />{" "}
              times
            </div>

            <h2>Booking Details</h2>
            <div className="">
              Booked:{" "}
              <input type="checkbox" value="1" {...register("Booked")} />
            </div>

            <h3>Booked Vehicle Details: </h3>
            <div className="label">
              <div className="heading">
                <label className="fieldlabels"> Engine No:</label>
              </div>
              <input
                className="Note"
                type={"text"}
                {...register("chasis_no")}
                placeholder="Note"
              />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels"> Chasis No:</label>
              </div>
              <input
                className="Note"
                type={"text"}
                {...register("engine_no")}
                placeholder="Note"
              />
            </div>

            <div>
              {/* <DatePicker
                onChange={(value) => register("date", { value: value })}
                value={new Date()}
              /> */}
              <p>Booking Validity :</p>
              <input
                type="datetime-local"
                onChange={(e) =>
                  register("dateTime", { value: e.target.value })
                }
              ></input>
            </div>
          </div>

          <input className="button" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Page3;
