import React from 'react';
import './App.css';

const officeSpaces = [
  {
    name:"Office X",
    rent:  50000,
    address: "Mumbai",
    image: '/officeX.jpg'
  },
  {
    name:"Office Y",
    rent:  80000,
    address: "Delhi",
    image: '/officeY.jpg'
  },
  {
    name:"Office Z",
    rent:  55000,
    address: "Banglore",
    image: '/officeZ.jpg'
  },
  {
    name:"Office A",
    rent:  70000,
    address: "Pune",
    image: '/officeA.jpg'
  },
  {
    name:"Office B",
    rent: 45000,
    address: "Goa",
    image: '/officeB.jpg'
  },
]

const App = () => {
  return (
    
    <div className='container'>
      <h1>Office Space, at Affordable Range</h1>
      
      <div className='box'>
          {officeSpaces.map((office, index)=>(
        <div key={index} className = "office">
          <img src={office.image} alt="Office Space" width="90%"/>
          <h2>Name: {office.name}</h2>
          <h3 className={office.rent<=60000 ? "textRed" : "textGreen"}>
            Rent: Rs. {office.rent}
          </h3>
          <h3>Address: {office.rent}</h3>
        </div>
      ))}
      </div>
            
    </div>
  );
}

export default App;
