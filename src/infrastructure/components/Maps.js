import React, { useRef, useState, useEffect } from 'react'
import { MapContainer as LeafletMap, Marker, TileLayer} from 'react-leaflet'
import MapConfig from './MapConfig';
import "leaflet/dist/leaflet.css"
import L from 'leaflet';


const Maps=(props)=>{
	console.log(props.lat, props.lng)
	let lng = props.lng
	let lat = props.lat
	const loc = {lat, lng };
    const[center, setCenter] = useState(loc);
    const ZOOM_LEVEL = 9
    const mapRef = useRef()
    const markerIcon = new L.Icon({
        iconUrl: require("../../public/location.png"),
        iconSize: [35, 45],

    })

    return (
			<div className='leaflet-container'>
				<LeafletMap
					className='flex justify-center'
					center={center}
					zoom={ZOOM_LEVEL}
					ref={mapRef}>
					<TileLayer
						url={MapConfig.maptiler.url}
						attribution={
							MapConfig.maptiler
								.attribution
						}
					/>
					<Marker
						position={[
							lat,
							lng,
						]}
						icon={markerIcon}
					/>
				</LeafletMap>
			</div>
		);
}


export default Maps;