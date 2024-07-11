"use client";

import React from "react";
import { PhoneInputT } from "./ui/PhoneInputT";

import { useState } from "react";
import Select from "react-tailwindcss-select";

const ServiceTypeOptions = [
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" },
  { value: "Honeybe", label: "🐝 Honeybe" },
  { value: "Honeye", label: "🐝 Honeye" },
];
const projectOptions = [
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" },
  { value: "Honeybe", label: "🐝 Honeybe" },
  { value: "Honeye", label: "🐝 Honeye" },
];
const Form = ({ object }) => {
  const [services, setServices] = useState(null);
  const [project, setProject] = useState(null);

  const handleServiceChange = (value) => {
    console.log("value:", value);
    setServices(value);
  };

  const handleProjectChange = (value) => {
    console.log("project value:", value);
    setProject(value);
  };

  return (
    <form
      action=""
      className=" bg-primaryDark text-white p-5 flex flex-col py-12 w-full  rounded-[20px]"
    >
      <h3 className=" text-[28px] text-center font-semibold">{object.title}</h3>
      <div className=" flex flex-col my-2">
        <label htmlFor="name">{object.fullName}</label>
        <input
          type="text"
          name="name"
          required
          placeholder="full name"
          id="name"
          className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
        />
      </div>
      <div className=" flex flex-col my-2">
        <label htmlFor="email">{object.email}</label>
        <input
          type="email"
          name="name"
          placeholder="email"
          required
          id="email"
          className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
        />
      </div>
      <div className=" flex flex-col my-2">
        <label htmlFor="phone">{object.phone}</label>
        <PhoneInputT />
      </div>
      <div className=" flex flex-col my-2">
        <label htmlFor="phone">{object.service}</label>
        <div className="select">
          <Select
            primaryColor={"orange"}
            value={services}
            onChange={handleServiceChange}
            options={ServiceTypeOptions}
            isMultiple={true}
            isSearchable={true}
          />
        </div>
      </div>
      <div className=" flex flex-col my-2">
        <label htmlFor="phone">{object.project}</label>
        <div className="select">
          <Select
            primaryColor={"orange"}
            value={project}
            onChange={handleProjectChange}
            options={projectOptions}
            isMultiple={true}
            isSearchable={true}
            classNames="py-3"
          />
        </div>
      </div>

      <button className=" bg-secondary py-3 px-10 mt-5 rounded-full font-bold ">
        {object.btn}
      </button>
    </form>
  );
};

export default Form;
