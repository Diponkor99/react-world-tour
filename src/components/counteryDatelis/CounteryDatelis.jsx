import CountryData from "../countryData/countryData";
const CounteryDatelis = ({country,VisitedCount,flag}) => {
    
    return (
        <div>
            <h3>country name:{country.name.common}</h3>
            <CountryData 
            country={country}
            VisitedCount={VisitedCount}
            flag={flag}
            ></CountryData>
            
        </div>
    );
};

export default CounteryDatelis;