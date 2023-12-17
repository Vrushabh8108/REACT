import React from "react";
import ReactDOM from "react-dom/client";
//-----------------------------------------Creating Simple Functional Component------------------------------------------------------------------
// const ele = <h1>Hello World</h1>;

// const FunComponent = () => {
//   return (

//     <div>
//         {ele}
//       <h1>Hello, I am a functional component!</h1>
//       <p>This is some JSX content rendered by the component.</p>
//     </div>

//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FunComponent />);

//-----------------------------------------------------------------------------------------------------------------
const data = [
    {
        "id": "772202",
        "name": "Starbucks Coffee",
        "cloudinaryImageId": "0c958153eeb436db6d515ca36e47e8a4",
        "locality": "Reserve Bank Enclave",
        "areaName": "Paschim Vihar",
        "costForTwo": "₹400 for two",
        "cuisines": ["Beverages", "Cafe", "Snacks", "Desserts", "Bakery", "Ice Cream"]
    },
    {
        "id": "365223",
        "name": "Samosa Fusion",
        "cloudinaryImageId": "cryv5c0c5mwn8fnmy35y",
        "locality": "SEC 3",
        "areaName": "Rohini",
        "costForTwo": "₹200 for two",
        "cuisines": ["Snacks", "Pizzas", "Burgers"]
    },
    {
        "id": "26723",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "Sector 3",
        "areaName": "Rohini",
        "costForTwo": "₹400 for two",
        "cuisines": ["Burgers", "Biryani", "American", "Snacks", "Fast Food"]
    },
    {
        "id": "253731",
        "name": "McDonald's",
        "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
        "locality": "Sector 3",
        "areaName": "Rohini",
        "costForTwo": "₹400 for two",
        "cuisines": ["American"]
    }
];

  
  const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://img.freepik.com/free-vector/fast-free-delivery-logo-with-bike-man-courier_1308-46678.jpg?w=996&t=st=1702802717~exp=1702803317~hmac=f4e8b59af97807f66eae37dbb420f7405f711d9e047896ab58cfae3f6765e35a" alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  }
  
  const RestroCard = (props) => {     
    return (
      <div className="res-card">
        <img className="res-logo" alt="ResLogo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.resData.cloudinaryImageId} />
        <h2 style={{ marginBottom: '10px' }}>{props.resData.name}</h2>
        <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>{props.resData.cuisines.join(", ")}</h4>
        <h4 style={{ marginTop: '5px' }}>{props.resData.areaName}</h4>
      </div>
    );
  }
  
  const Body = () => {
    return (
      <div className="body">
        <div className="searchBox">
          <h1>Search</h1>
        </div>
        <div className="res-container">
            {
                data.map(x=>(<RestroCard resData={x} key={x.id}/>
                ))
            }
          
        </div>
      </div>
    );
  }
  
  const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Body />
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout />);