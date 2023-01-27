import L from 'leaflet'
import iconUrl from './../images/marker-icon.png'
import iconShadow from './../images/marker-shadow.png'


const {
    iconSize,
    popupAnchor,
    shadowSize,
    tooltipAnchor,
} = L.Marker.prototype.options.icon.options


export const defaultIcon = L.icon({
    iconSize,
    iconShadow,
    popupAnchor,
    shadowSize,
    tooltipAnchor,
    iconUrl
})