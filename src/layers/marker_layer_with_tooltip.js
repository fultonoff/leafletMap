
import React from "react";
import {Marker, Tooltip, useMap} from 'react-leaflet'
import { defaultIcon } from "../icons/defaultIcon";
import {cities} from '../data/cities'
import { mountainIcon } from "../icons/mountainIcon";



export const MarkerLayerWithTooltip = ({data})=>{
  const leafletMap = useMap()
    return data.features.map((feature, index)=>{
        const {coordinates} = feature.geometry
        const {name, elevation, continent} = feature.properties

        return(

          <>
          
            <Marker key={index + 2} position={[coordinates[1], coordinates[0]]} icon={mountainIcon}
            eventHandlers={{
              click:(e)=> leafletMap.panTo(e.latlng)
            }}>
      <Tooltip>
       <h3>Mt. {name}</h3>
       Continent: <b>{continent}</b> <br />
       Elevation: <b>{elevation}</b> 
      </Tooltip>
    </Marker>
          </>

        ) 
    })
    
}