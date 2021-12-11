import React from "react";

const InputGroup = ({ total, name, setID }) => {
  console.log();
  return (
    <div className="input-group mb-3">
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option key={index} value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
