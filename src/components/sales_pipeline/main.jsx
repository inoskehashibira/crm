import { useState, useEffect } from "react";

import Product from "./product";
import InputForm from "./InputForm";

function Main() {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [flag, setflag] = useState(false);
    const [customerList, setcustomerList] = useState([]);
  const handleButtonPopUp = () => {
    setButtonPopUp(!buttonPopUp);
  };
  useEffect(() => {
      // const dataFromChild = (data) => {
      //   setcustomerList(data);
      //   console.log(customerList);
      //   console.log(data);
      //   setflag(true)
      // };
  }, []);

  
  const dataFromChild = (data) => {
    setcustomerList(data);
    console.log(customerList);
    console.log(data);
  };

  return (
    <div className="m-4">
      <button onClick={handleButtonPopUp} className="btn btn-warning mx-5">
        Create
      </button>

      <InputForm
        trigger={buttonPopUp}
        handleButtonPopUp={handleButtonPopUp}
        sendData={dataFromChild}
      />
      <div className="container my-4 p-3">
        <div className="row">
          <div className="col-sm">
            <h5 className="border-3 border-dark border-bottom p-2">New</h5>
            {customerList.map((item) =>
              item.inputState == "New" ? (
                <Product
                  key={item.phone}
                  name={item.name}
                  car_model={item.car_model}
                  phone={item.phone}
                  
                ></Product>
              ) : (
                false
              )
            )}
          </div>
          <div className="col-sm">
            <h5 className="border-3 border-dark border-bottom p-2">
              Qualified
            </h5>
            {customerList.map((item) =>
              item.inputState == "Qualified" ? (
                <Product
                  key={item.phone}
                  name={item.name}
                  car_model={item.car_model}
                  phone={item.phone}
                  
                ></Product>
              ) : (
                false
              )
            )}
          </div>
          <div className="col-sm">
            <h5 className="border-3 border-dark border-bottom p-2">
              Intermediate
            </h5>
            {customerList.map((item) =>
              item.inputState == "Intermediate" ? (
                <Product
                  key={item.phone}
                  name={item.name}
                  car_model={item.car_model}
                  phone={item.phone}
                  
                ></Product>
              ) : (
                false
              )
            )}
          </div>
          <div className="col-sm">
            <h5 className="border-3 border-dark border-bottom p-2">Won</h5>
            {customerList.map((item) =>
              item.inputState == "Won" ? (
                <Product
                  key={item.phone}
                  name={item.name}
                  car_model={item.car_model}
                  phone={item.phone}
                  
                ></Product>
              ) : (
                false
              )
            )}
          </div>
          <div className="col-sm">
            <h5 className="border-3 border-dark border-bottom p-2">
              Delivered
            </h5>
            {customerList.map((item) =>
              item.inputState == "Delivered" ? (
                <Product
                  key={item.phone}
                  name={item.name}
                  car_model={item.car_model}
                  phone={item.phone}
                  
                ></Product>
              ) : (
                false
              )
            )}
          </div>
          <div className="col-sm">
            <h5 className="border-3 border-dark border-bottom p-2">Lost</h5>
            {customerList.map((item) =>
              item.inputState == "Lost" ? (
                <Product
                  key={item.phone}
                  name={item.name}
                  car_model={item.car_model}
                  phone={item.phone}
                  
                ></Product>
              ) : (
                false
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
