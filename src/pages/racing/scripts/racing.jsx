import React from "react";
import axios from "axios";
export default function Racing() {
  const getRaces = () => {
    axios
      .get("https://api.trollskogen.nu/users")
      .then(response => {
        console.log(response);
        return "success";
      })
      .catch(err => {
        console.log(err);
      });
  };
  return <div>testelistest {getRaces()}</div>;
}
