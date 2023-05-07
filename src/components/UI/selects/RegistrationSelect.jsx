import React from 'react';
import {IoMdArrowDropdown} from "react-icons/io";

const RegistrationSelect = ({children, onChange, name}) => {
    return (
        <span className="relative border border-slate-300 inline-flex rounded items-center">
            <select name={name || ""} onChange={onChange} className="pr-[18.7rem] rounded bg-white pl-3 py-2 border border-slate-400 text-slate-400 appearance-none bg-transparent"
                    placeholder="Select">
                {children}
            </select>
            <IoMdArrowDropdown className="absolute text-slate-500 right-2 pointer-events-none"/>
            </span>
    );
};

export default RegistrationSelect;