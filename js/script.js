// Created by: Jaejun Lee
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict";

function myButtonClicked() {
  const age = document.getElementById("age").value
  const day = document.getElementById("days").value 

  
  if ((day == "tuesday") || (day == "thursday") || (age > 12 && age < 21)) {
    document.getElementById("answers").innerHTML = "You're eligible for student pricing!"
  }
  else {
    document.getElementById("answers").innerHTML = "You must pay regular price."
  }
}
