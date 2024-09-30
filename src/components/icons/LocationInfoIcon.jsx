import { SvgIcon } from "@mui/material";
import React from "react";

const LocationInfoIcon = (props) => {
  return (
    <SvgIcon
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35 16.6667C35 28.3334 20 38.3334 20 38.3334C20 38.3334 5 28.3334 5 16.6667C5 12.6885 6.58035 8.87319 9.3934 6.06015C12.2064 3.2471 16.0218 1.66675 20 1.66675C23.9782 1.66675 27.7936 3.2471 30.6066 6.06015C33.4196 8.87319 35 12.6885 35 16.6667Z"
        stroke="#0085FF"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 21.6667C22.7614 21.6667 25 19.4282 25 16.6667C25 13.9053 22.7614 11.6667 20 11.6667C17.2386 11.6667 15 13.9053 15 16.6667C15 19.4282 17.2386 21.6667 20 21.6667Z"
        stroke="#0085FF"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
};

export default LocationInfoIcon;
