import React from 'react'

const product = ({ name, car_model, phone }) => {
  return (
    <div className="border border-warning my-3 px-4 py-2">
      <h6>{name}</h6>
      <p>{car_model}</p>
      <p>{phone}</p>
    </div>
  );
};
export default product;
