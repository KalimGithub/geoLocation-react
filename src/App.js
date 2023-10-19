import React, { useState, useEffect } from "react";

import summer from "./images/summer.jpg"
import winter from "./images/winter.jpg"




const App = () => {

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [hemisphere, setHemisphere] = useState("")
    const [month, setMonth] = useState(new Date().getMonth()+1)

    function geoLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {               

                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
                
                if(position.coords.latitude>0){
                    setHemisphere("Northern Hemisphere")
                }else if(position.coords.latitude<0){
                    setHemisphere("Southern Hemisphere")
                }else{
                    setHemisphere("Equator")
                }
            })
        }
        

    }

    useEffect(() => {
        geoLocation()
        console.log(latitude);
        console.log(longitude);
    },[])
    
    return(
        <div id="card">
            <h1>React Geolocation</h1>
            <h2>Latitude: {latitude}</h2>
            <h2>Longitude: {longitude}</h2>
            <h2>Hemisphere: {hemisphere}</h2>
            {/* <button onClick={geoLocation}>Get Location</button> */}


            {

                hemisphere && ((hemisphere=="Northern Hemisphere"&& month>=4 && month<=10)|| (hemisphere == "Southern Hemisphere" && month<=3 && month>=10) ) &&
                <div>
                    <h1>Welcome to Summer Season </h1>
                    <img src={summer} alt="summer"/>
                </div>
            }
            {

                hemisphere && ((hemisphere == "Northern Hemisphere" && month<=3 && month>=10) || (hemisphere == "Southern Hemisphere" && month>=3 && month<=10)) &&
                <div>
                    <h1>Welcome to Winter Season</h1>
                    <img src={winter} alt={winter}/>
                </div>
            }

        </div>
    )
}

export default App