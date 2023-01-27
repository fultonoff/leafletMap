import L from 'leaflet'
import mountainPng from '../images/39927908-mountain.png'

const leafIcon = L.Icon.extend({
    options: {
        iconSize: [35, 23],
        iconAnchor:[17, 1],
        tooltipAnchor: [15, -5]
    }
})

export const mountainIcon = new leafIcon({
    iconUrl: mountainPng
})