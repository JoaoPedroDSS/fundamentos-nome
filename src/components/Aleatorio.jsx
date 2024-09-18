import React from "react";  

export default function Aleatorio(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}