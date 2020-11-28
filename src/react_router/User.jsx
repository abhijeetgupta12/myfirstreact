import React from "react";
import { useParams } from "react-router-dom";

const User = (props) => {
  const { fname, lname } = useParams();
  return (
    <h1>
      {props.name} Page {fname} {lname}
    </h1>
  );
};

export default User;

/*
useParams is a react-router-dom hook which is used to access the parameters sent with the link.
*/
