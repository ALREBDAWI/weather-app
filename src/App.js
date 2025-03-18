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
      onKeyDown={(e) => e.key === 'Enter' && searchlocation()} // call api on clicking Enter key
      />
      <button onClick={searchlocation}>submit</button> 
      {/* make sure that data exists first */}
      <div id='city'> <h3>city name : {data?.name??"Not Available"} </h3> </div> 
      <div id='country'> <h3>country : {data.sys?.country??"Not Available"} </h3> </div>
      <div id='temp'> temprature : {data.main?.temp??'Not Available'} </div>   
      <div id='humidity'>humidity : {data.main?.humidity !=null ? `${data.main.humidity}%` : 'Not Available'}</div>
    </div>
  );
}

export default App;
