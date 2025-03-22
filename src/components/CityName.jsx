export default function CityName({props}) {
    return(
        <>
            <div id='city'> <h3>city name : {props?.name??"Not Available"} </h3> </div> 
            <div id='country'> <h3>country : {props.sys?.country??"Not Available"} </h3> </div>
        </>
    )
}