import React from "react";
import "./subscribe.css";

export const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <fieldset id="sub-group" className="subscribe-radio-container">
        <label>
          <input type="radio" value="value1" name="sub-group" />
          <span>Weekly</span>
        </label>
        <label>
          <input type="radio" value="value2" name="sub-group" />
          <span>Monthly</span>
        </label>
        <label>
          <input type="radio" value="value3" name="sub-group" />
          <span>Yearly</span>
        </label>
      </fieldset>
    </div>
  );
};
