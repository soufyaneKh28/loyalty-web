import React from "react";

const CallTo = ({ object }) => {
  return (
    <div className=" container mt-[-50px]">
      <div className="">
        <form
          action=""
          className=" bg-secondary flex flex-col justify-between md:flex-row items-center px-5 py-8 rounded-[10px]"
        >
          <div className="text  ">
            <h2 className=" text-white text-[32px] font-bold text-center">
              {object.callto.title}
            </h2>
            <p className=" text-white text-center md:text-start">
              {object.callto.subTitle}
            </p>
          </div>
          <div className=" flex flex-col w-full mt-6 md:mt-0 max-w-[400px] flex-1 md:ms-5">
            <input type="phone" className=" w-full py-2 px-2 rounded-[10px]" />
            <button
              type="submit"
              className=" bg-primaryDark text-white py-3 mt-3 rounded-full"
            >
              {object.callto.btn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallTo;
