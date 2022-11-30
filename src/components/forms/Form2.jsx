import { React, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import "../../CSS/form.css";
import DatePicker from "react-date-picker";
import { useNavigate, useLocation } from "react-router-dom";

const Page2 = (props) => {
  const navigate = useNavigate();
    const lead_data = useLocation().state.lead_data;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (cp_data) => {
    console.log(lead_data);

    cp_data = {...lead_data,...cp_data}
    console.log(cp_data)


        navigate("/Page3", { state: { cp_data } });
  };

  const onChangeValue = (event) => {
    console.log(event);
  };

  return (
    <div>
      <div className="container">
        {/* form stars */}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="heading">
            <h1>Contact Person's Information</h1>
          </div>

          <div className="inputs text-start">
            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Contact Name</label>
              </div>
              <input
                type={"text"}
                {...register("CP name")}
                placeholder="Enter Contact name please"
                maxLength={32}
              />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Job position</label>
              </div>
              <input
                type={"text"}
                {...register("CP Job position")}
                placeholder="Enter Job position"
                maxLength={32}
              />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Address</label>
              </div>

              <input
                className="address"
                type={"text"}
                {...register("CP address")}
                placeholder="Enter delivery address here"
              />
            </div>

            <div>
              <p>Country :</p>
              <select onChange={(event) => console.log()}>
                <option {...register("cp country")} value="bangladesh">
                  bangladesh
                </option>

                <option {...register("cp country")} value="USA">
                  USA
                </option>

                <option {...register("cp country")} value="England">
                  England
                </option>
              </select>
            </div>

            <div>
              <p>City :</p>
              <select onChange={(event) => console.log()}>
                <option {...register("cp city")} value="Dhaka">
                  Dhaka
                </option>

                <option {...register("cp city")} value="Chittagong">
                  Chittagong
                </option>

                <option {...register("cp city")} value="Syhlet">
                  Syhlet
                </option>
              </select>
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Email</label>
              </div>

              <input
                type={"email"}
                {...register("CP email")}
                placeholder="Enter a valid mail address"
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Phone</label>
              </div>

              <input
                type={"text"}
                defaultValue={"+88"}
                {...register("cp number")}
                placeholder="Type your Phone no here"
                maxLength={11}
              />
            </div>
            <h2>Sales Persons Information</h2>
            <div>
              <p>Salesperson :</p>
              <select onChange={(event) => console.log()}>
                <option {...register("sp name")} value="Person 1">
                  Person 1
                </option>

                <option {...register("sp name")} value="Person 2">
                  Person 2
                </option>

                <option {...register("sp name")} value="Person 3">
                  Person 3
                </option>
              </select>
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Reffered By</label>
              </div>
              <input
                type={"text"}
                {...register("Reffered By")}
                placeholder="Reffered By"
                maxLength={32}
              />
            </div>
          </div>

          <input className="button" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Page2;
