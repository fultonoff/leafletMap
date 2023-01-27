
import React from "react";
import {Marker, Popup} from 'react-leaflet'
import { defaultIcon } from "../icons/defaultIcon";
import {cities} from '../data/cities'



export const MarkerLayer = ({data})=>{
    return data.features.map((feature, index)=>{
        const {coordinates} = feature.geometry

        return(
            <Marker key={index} position={[coordinates[1], coordinates[0]]} icon={defaultIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>

        ) 
    })
    
}