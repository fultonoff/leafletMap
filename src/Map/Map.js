import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import {cities} from '../data/cities'
import { mountains } from "../data/highest_point";
import { MarkerLayer } from "../layers/marker_layer";
import { MarkerLayerWithTooltip } from "../layers/marker_layer_with_tooltip";



export const Map = ()=>{
  const [radiusFilter, setRadiusFilter] = useState(null)
  const getRadiusFilter = ()=> radiusFilter

    const position = [51.505, -0.09]
    const scrollWheelZoom = true

   
        
return(
  (<MapContainer center={[0,0]} zoom={1} scrollWheelZoom={scrollWheelZoom}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MarkerLayer data={cities} setRadiusFilter={setRadiusFilter} getRadiusFilter={getRadiusFilter}/>
    <MarkerLayerWithTooltip data={mountains}/>
  </MapContainer>)
)
}