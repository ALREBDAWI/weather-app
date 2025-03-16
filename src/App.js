import './App.css';
import React, { useState } from 'react';
import axios from 'axios';  //axios is a library to manage api calls


function App() {

    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    
    
    const searchlocation = async () => {
        if(!location){
          console.error('location is not provided')
        } try {
            const api_key = process.env.REACT_APP_API_KEY   
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`
            const response = await axios.get(url);
              setData(response.data);       
            
        } catch (error) {
          console.error("Error fetching data:", error)
        }

    }
   

  
  return (
    <div className="App">
      <h1>weather app</h1>
      <input
      type="text"
      value={location}  
      onChange={(e) => setLocation(e.target.value)} //use input value to set state
      />
      <button onClick={searchlocation}>submit</button> 
      <div id='city'>city</div>
      <div id='temp'> temprature : {data.main.feels_like} </div>
      <div id='humidity'>humidity :</div>
    </div>
  );
}

export default App;
