"use client";
import React, {useState} from 'react';
import styled from 'styled-components';

const Switch = ({ onToggle }) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };

  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle}/>
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 2.8em;
    height: 1.45em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    --background: #28096b;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background);
    transition: .5s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1em;
    width: 1em;
    border-radius: 50%;
    left: 15%;
    bottom: 15%;
    box-shadow: inset 8px -4px 0px 0px #ffdf20;
    background: var(--background);
    transition: .5s;
  }

  input:checked + .slider {
    background-color: #522ba7;
  }

  input:checked + .slider:before {
    transform: translateX(100%);
    box-shadow: inset 15px -4px 0px 15px #ffdf20;
  }`;

export default Switch;
