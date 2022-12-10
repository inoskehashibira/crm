import { React, useState, useContext } from "react";
import { useForm } from "react-hook-form";
// import "../../CSS/form.css";
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router-dom";

const Page1 = (props) => {

const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (lead_data) => {
    console.log(lead_data);
    navigate("/Page2", { state: { lead_data } });

   
  };

  const onChangeValue = (event)=> {
    console.log(event);

  }


  return (
    <div>
      <div className="container">
        {/* form stars */}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="heading">
            <h1>Lead Generation</h1>
          </div>

          <div className="inputs text-start">
            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Customer Name</label>
              </div>
              <input
                type={"text"}
                {...register("Customer name")}
                placeholder="Enter customer name please"
                maxLength={32}
              />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Organization Name</label>
              </div>
              <input
                type={"text"}
                {...register("Organization")}
                placeholder="Enter Organization name please"
                maxLength={32}
              />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Phone</label>
              </div>

              <input
                type={"text"}
                defaultValue={"+88"}
                {...register("number")}
                placeholder="Type your Phone no here"
                maxLength={11}
              />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Email</label>
              </div>

              <input
                type={"email"}
                {...register("email")}
                placeholder="Enter a valid mail address"
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            {/* Radio button starts */}
            <div>
              <h4>possibility:</h4>
              <input
                type="radio"
                {...register("possibility")}
                value="High"
              />{" "}
              High
              <input
                type="radio"
                {...register("possibility")}
                value="Medium"
              />{" "}
              Medium
              <input
                type="radio"
                {...register("possibility")}
                value="Low"
              />{" "}
              Low
            </div>
            {/* Radio button Ends */}

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Tag</label>
              </div>
              <input type={"text"} {...register("Tag")} />
            </div>

            <div>
              <h4>schedule Activity :</h4>
              <select onChange={(event) => console.log(event.target.value)}>
                <option {...register("Alert_time")} value="10">
                  Alert before 10 mins
                </option>

                <option {...register("Alert_time")} value="30">
                  Alert before 30 mins
                </option>

                <option {...register("Alert_time")} value="60">
                  Alert before 60 mins
                </option>
              </select>
            </div>
            <div>
              {/* <DatePicker
                onChange={(value) => register("date", { value: value })}
                value={new Date()}
              /> */}
              <input
                type="datetime-local"
                onChange={(e) =>
                  register("dateTime", { value: e.target.value })
                }
              ></input>
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Note</label>
              </div>
              <input
                className="Note"
                type={"text"}
                {...register("note")}
                placeholder="Note"
              />
            </div>
          </div>

          <input className="button" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Page1;
