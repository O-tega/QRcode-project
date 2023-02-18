import React, { useRef, useState } from 'react'
import { MapContainer as LeafletMap, TileLayer} from 'react-leaflet'
import MapConfig from './MapConfig';


const Maps=()=>{
    const[center, setCenter] = useState({lat:"7.290491", lng:"5.1514401"});
    const ZOOM_LEVEL = 9
    const mapRef = useRef()



    return(
        <div>
            <LeafletMap
            center = {center}
            zoom = {ZOOM_LEVEL}
            ref = {mapRef}
            >
            <TileLayer url={MapConfig.maptiler.url} attribution={MapConfig.maptiler.attribution} />
            </LeafletMap>
        </div>
    )
}


export default Maps;