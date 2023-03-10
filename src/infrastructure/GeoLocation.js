import { useState, useEffect} from 'react';

const GeoLocation =()=>{

    const [location, setLocation]=useState({
        loaded: false,
        coordinates: {lat: "", lng: ""}
    });

    console.log(location)
    const onSuccess = (location) =>{
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }

    const onError = (error)=>{
        setLocation({
            loaded: true,
            error
        })
    }

    useEffect(()=>{
        if (!("geolocation" in navigator)){
            onError({
                code: 0,
                message: 'Geolocation is not supported'
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    },[])

    return (
        <div>
            longitude: {location.coordinates.lng} latitude: {location.coordinates.lat}
        </div>
    )
}

export default GeoLocation;