import React, { useRef, useState } from 'react'
import { MapContainer as LeafletMap, Marker, TileLayer} from 'react-leaflet'
import MapConfig from './MapConfig';
import "leaflet/dist/leaflet.css"
import L from 'leaflet';


const Maps=()=>{
    const[center, setCenter] = useState({lat:"7.290491", lng:"5.1514401"});
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
						position={["7.290491", "5.1514401" ]}
                        icon={markerIcon}
					/>
				</LeafletMap>
			</div>
		);
}


export default Maps;