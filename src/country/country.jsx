
import { useState } from 'react';
import './country.css'
import CounteryDatelis from '../components/counteryDatelis/CounteryDatelis';


const Country = ({country,VisitedCount,flag}) => {
    // console.log(country)
   const{name , flags, area, population,cca3}=country;
    const [visited ,setVisited]=useState(false)
    const hindleVisited=()=>{
        setVisited(!visited)
    }

    return (
        <div style={{color:visited ? 'black':'white'}} className={`box ${visited && 'color'}` }>
            <h3 >Name: {name?.common} </h3>
           <img src={flags.png} alt="" />
           <p>Area: {area}</p>
           <p>Population: {population}</p>
           <p><small>Code: {cca3}</small></p>
           <button style={{marginRight:'10px',}} onClick={()=>{VisitedCount(country)}}>Mark Visited</button>

           <button style={{marginRight:'10px',}} onClick={()=>{flag(country)}}>Add flag</button>

           <button onClick={hindleVisited}>{visited ? "Visited":"Going"}</button>
           <br />
           {visited ? 'I have visited the Country':"I want to a visted"}
           <hr />
          <CounteryDatelis
          country={country}
          VisitedCount={VisitedCount}
          flag={flag}
          ></CounteryDatelis>
        </div>
       
    );
};

export default Country;