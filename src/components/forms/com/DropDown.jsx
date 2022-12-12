import React from 'react'

export default function DropDown({heading,dropdownlist,handleChange}) {
    return (
        <React.Fragment>
            <h4>{heading}</h4>
            <select  className="form-select" onChange={handleChange} id="alterBefore">
            {dropdownlist.map((item) => {
                return (
                    
                        <option  key={item.id} value={item.value}>
                            {item.option}
                        </option>
                );
            })}

            </select>

        </React.Fragment>
    )
}
