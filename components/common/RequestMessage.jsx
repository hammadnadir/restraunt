import React from "react";

function RequestMessage({ image , message ,color }) {
  
  return (
    <div className="flex items-center z-10 ">
      <img className="" src={image} alt="message"/>
      &nbsp;&nbsp;&nbsp;&nbsp;<p className={`${color} font-bold text-[14px] xl:text-[18px]`}>{message}</p>
    </div>
  );
}
export default RequestMessage;