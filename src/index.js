// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

let time = new Date().getHours();

let greet = "";
let style = {

}

if(time>=1 && time<12)
{
  greet ="Good Morning";
  style.color= "green";
} else if(time>=12 && time<19)
{
  greet = "Good Afternoon"
  style.color= "orange";
} else {
  greet = "Good Night";
  style.color="black";
}

// let x = "Hello";
// let y = "Good Morning";
// let k = "Good Afternoon";
// let z = "Good Night";

ReactDOM.render(
<>
   <div>
       <h1>Hello Sir <span style={style}>{greet}</span></h1>
   </div>
    
</>,


document.getElementById("root")


)