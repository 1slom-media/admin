import { SvgIcon } from "@mui/material";
import React from "react";

const HeadSetIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.23202 5.54465C10.7482 3.60914 14.2518 3.60914 16.768 5.54465C18.3388 6.75295 19.3165 8.56404 19.4767 10.5217C18.8936 10.1897 18.219 9.99997 17.5 9.99997C15.2909 9.99997 13.5 11.7908 13.5 14C13.5 16.2091 15.2909 18 17.5 18C18.0435 18 18.5617 17.8916 19.0341 17.6952C18.6301 18.4838 17.9811 19.1414 17.1584 19.5528C16.5702 19.8469 15.9216 20 15.2639 20H12.5C11.9477 20 11.5 20.4477 11.5 21C11.5 21.5523 11.9477 22 12.5 22H15.2639C16.2321 22 17.1869 21.7746 18.0528 21.3416C20.0474 20.3443 21.3484 18.3639 21.4876 16.158C21.4958 16.1065 21.5 16.0537 21.5 16V11.093C21.5 8.2988 20.2022 5.66307 17.9874 3.9594C14.7523 1.47089 10.2477 1.47089 7.0126 3.9594C4.79784 5.66307 3.5 8.2988 3.5 11.093V14C3.5 14 3.5 14 3.5 14C3.5 16.2091 5.29086 18 7.5 18C9.70914 18 11.5 16.2091 11.5 14C11.5 11.7908 9.70914 9.99997 7.5 9.99997C6.78103 9.99997 6.10636 10.1897 5.52332 10.5217C5.68346 8.56404 6.66124 6.75295 8.23202 5.54465ZM19.5 14C19.5 12.8954 18.6046 12 17.5 12C16.3954 12 15.5 12.8954 15.5 14C15.5 15.1045 16.3954 16 17.5 16C18.6046 16 19.5 15.1045 19.5 14ZM5.5 14C5.5 12.8954 6.39543 12 7.5 12C8.60457 12 9.5 12.8954 9.5 14C9.5 15.1045 8.60457 16 7.5 16C6.39543 16 5.5 15.1045 5.5 14Z"
        fill={props?.color ? props?.color : "#7E92A2"}
      />
    </SvgIcon>
  );
};

export default HeadSetIcon;
