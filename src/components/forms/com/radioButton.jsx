import React from "react";

export default function RBcomp({ OptionList, handleRadioOptions }) {
  const OnChange = (e) => {
    handleRadioOptions(e);
  };

  return (
    <React.Fragment>
      <p>Possibility: </p>
      {OptionList.map((item) => {
        return (
          <div className="form-check form-check-inline" key={item.id}>
            <input
              className="form-check-input "
              type="radio"
              id="possibility"
              value={item.value}
              onChange={OnChange}
              name="same" //if name is not same then only all will be selected
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              {item.value}
            </label>
          </div>



        );
      })}
    </React.Fragment>
  );
}
