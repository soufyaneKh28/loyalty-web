import React from "react";
import { PhoneInputT } from "./ui/PhoneInputT";

const Form = () => {
  return (
    <form
      action=""
      className=" bg-primaryDark text-white p-5 flex flex-col py-12 w-full  rounded-[20px]"
    >
      <h3 className=" text-[28px] text-center font-semibold">Contact Us</h3>
      <div className=" flex flex-col my-2">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="full name"
          id="name"
          className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
        />
      </div>
      <div className=" flex flex-col my-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="name"
          placeholder="email"
          id="email"
          className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
        />
      </div>
      <div className=" flex flex-col my-2">
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          name="name"
          placeholder="phone"
          id="phone"
          className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
        />
      </div>
      <div className=" flex flex-col my-2">
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          name="name"
          placeholder="phone"
          id="phone"
          className=" p-3 mt-1 rounded-[10px] outline-none border-none text-primaryDark"
        />
      </div>
      <div className=" flex flex-col my-2">
        <label htmlFor="phone">Phone</label>
        <PhoneInputT />
      </div>
      <button className=" bg-secondary py-3 px-10 mt-5 rounded-full ">
        Submit
      </button>
    </form>
  );
};

export default Form;
