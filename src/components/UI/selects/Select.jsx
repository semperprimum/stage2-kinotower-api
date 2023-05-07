import React from 'react';
import {IoMdArrowDropdown} from "react-icons/io";

const Select = ({ children, onChange }) => {

    return (
        <span className="relative border border-slate-300 inline-flex rounded items-center">
      <select
          className="pr-40 bg-white rounded pl-2 py-2 text-slate-500 appearance-none bg-transparent text-xs"
          placeholder="Select"
          onChange={onChange}
      >
        {children}
      </select>
      <IoMdArrowDropdown className="absolute text-slate-500 right-2 pointer-events-none" />
    </span>
    );
};


export default Select;