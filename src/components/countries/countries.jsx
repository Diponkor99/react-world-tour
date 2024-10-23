import { useEffect } from "react";
import { useState } from "react";
import Country from "../../country/country";
import './countries.css'
const Countries = () => {
    const [countries ,setCountries]=useState([])
    const [visited,setVisited]=useState([])
    const [flag,setflag]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(Response=>Response.json())
        .then(data=>setCountries(data))
    },[])
    const hideleVisiedCount=(country)=>{
        console.log("count the visited country")
        const newVisited=[...visited , country]
        setVisited(newVisited)
    }

    const hidelnflag=(flags)=>{
        const newflags=[...flag,flags]
        setflag(newflags)
    }

    return (
        
        <div >
            <h3>Countries:{countries.length}</h3>
            <div>
                <h3>Count Country: {visited.length}</h3>
                <ul>
                {visited.map(count=> <li>{count.name.common}</li>)}
                {flag.map(data=> <img className="flag-style" src={data.flags.png}></img>)}
                
                </ul>
                
             </div>
          <div className="style-countiner">
          {
              countries.map(data=><Country  key={data.ccn3} VisitedCount={hideleVisiedCount}
                flag={hidelnflag}
                country={data}></Country>)  
            }
          </div>
        </div>
    );
};

export default Countries;