import React from "react";
import "./Header.css";
import "../index.css"

const Header = () => {
  
 const handleClick = () => {
    document.body.classList.toggle("dark-theme");
    const header=document.querySelector('.head')
    const form=document.querySelector('.search-country')
    const listItem=document.querySelectorAll('.country-prev')
    const conDetails=document.querySelector('.Country-details')
    const backBtn=document.querySelector('.back')
    const regionName=document.querySelector('.region-name')
    header.classList.toggle('dark-theme')
    form.classList.toggle('dark-theme')
    if (regionName){
      regionName.classList.toggle('dark-theme')
    }
    if (listItem){
      listItem.forEach((item)=>{
        item.classList.toggle('dark-theme')
      })
    }
    if (conDetails){
      conDetails.classList.toggle('dark-theme') 
      backBtn.classList.toggle('dark-theme')
    }   
   };

  return (
    <header className="head">
      <h1 id="header">Where in the World ?</h1>
      <button id="mode" onClick={handleClick}>
        <span id="mode-img">
          <i className="fas fa-moon"></i>
        </span>{" "}
        Mode
      </button>
    </header>
  );
};

export default Header;
