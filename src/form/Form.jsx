import React, { useState } from "react";
import "./Form.css";
const axios = require("axios");

const Form = () => {
  const [state, changeState] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });

  const HandleEvent = (event) => {
    //this 'event' belongs to that input tag whose onChange method is invoked.

    const name = event.target.name;
    const value = event.target.value;

    changeState((prevState) => {
      return {
        ...prevState, //spread opeartor -- use to add a complete object/array inside other object/array
        [name]: value, //A new way to update an existing item in an object
      };
    });

    console.log(state.email);
  };

  const HandleSubmit = (event) => {
    const { fullname, email, phone, address } = state;
    axios
      .post("http://localhost:8000/students", {
        name: fullname,
        email: email,
        phone: phone,
        address: address,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    //alert(`${fullname} ${email} ${phone} ${address}`); //access the data like this
    event.preventDefault(); //Used to prevent the submit button to go to next page when clicked.
  };

  return (
    <div className="container">
      <form className="form" onSubmit={HandleSubmit}>
        <label>Full Name :</label>
        <br />
        <input
          type="text"
          name="fullname"
          value={state.fullname}
          onChange={HandleEvent}
        />
        <br />
        <br />

        <label>Email :</label>
        <br />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={HandleEvent}
        />
        <br />
        <br />

        <label>Phone :</label>
        <br />
        <input
          type="tel"
          name="phone"
          value={state.phone}
          onChange={HandleEvent}
        />
        <br />
        <br />

        <label>Address :</label>
        <br />
        <input
          type="text"
          name="address"
          value={state.address}
          onChange={HandleEvent}
        />
        <br />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;

/*
Working of <form> and <input> tags:
As we press a key in the input field onChange is invoked and the function related to
it is called. The function updates the state using event.target.value(updated value)
and hence the value of 'value' attribute is updated and reflected on the input tag.

From here we can see that the 'value' attribute is used to take data from input tag
as well as to give data to the input tag.
*/

//-----Line--> '[name]:value'---- explanation

/*

var ob ={
    name:'abhijeet',
    gender:'male',    
}

var ob1 ={
    ...ob,
    ['name']:'abhi'
}

console.log(ob1);

OUTPUT:

{name: "abhi", gender: "male"}
gender: "male"
name: "abhi"

*/

// axios
//       .post("http://localhost:8000/students", {
//         name: fullname,
//         email: email,
//         phone: phone,
//         address: address,
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
