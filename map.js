'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoieWFyZGVueiIsImEiOiJjam5hejlmMGkwMWV6M3BsOWJxcHNhZDJpIn0.yUUMMk4ixslNceyxLrAwzg';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/yardenz/cjp1b65uf10z22sntfg71uhxv',
center: [-111.860474, 40.760394],
zoom: 12.5
});


// console.log(map)

map.on('load', function() {             // 'load' event handler

    // console.log('developments-1dhpe2 copy')
    // let features = map.queryRenderedFeatures({ layers: ['developments-1dhpe2 copy'] })
    // for (let feature of features) {
    //     console.log(feature)
    // }

    // console.log('developments-1dhpe2 copy 1')
    // features = map.queryRenderedFeatures({ layers: ['developments-1dhpe2 copy 1'] })
    // for (let feature of features) {
    //     console.log(feature)
    // }

})

    // below this is imagery for the 2002 map//
let buildings = ["Gateway plaza", "Gateway Outline", "Olympic Village: Fort Douglas", "Arena", "Salt Palace", "Medals Plaza", "Rice Eccles Stadium"]

let content = { "Gateway plaza": "A water-flake shaped fountain was named as the Olympic Plaza. <br /><img src='images/2002/gateway.png' width='450' height='350' <br />",
                "Gateway Outline": "Identifed as a site for redevelopment by the city government the Gateway was developed by The Boyer Co. a private developer for $375 million. Both as a strategy for urban renewal of a formerly industrial area and as a strategy for business to invest in downtown prior to the Olympics. <br /><img src='images/Pie Charts/Gateway.png' width='400' height='400' />",
                "Olympic Village: Fort Douglas": "more HTML",
                "Arena": "more HTML",
                "Salt Palace": "more HTML",
                "Medals Plaza": "more HTML",
                "Rice Eccles Stadium": "more HTML",

                }


map.on('click', 'developments-1dhpe2 copy', function (e) {
    for (let building of e.features) {
        console.log(building.properties.NAME)
        for (let building_name of buildings) {
            if (building_name == building.properties.NAME) {
                 new mapboxgl.Popup()
                     .setLngLat(e.lngLat)
                     .setHTML(content[building.properties.NAME])
                     .addTo(map)
                break
            }
        }
    }
 })



// https://www.mapbox.com/help/custom-markers-gl-js/




//  // Change the cursor to a pointer when the mouse is over the states layer.
//  map.on('mouseenter', 'states-layer', function () {
//      map.getCanvas().style.cursor = 'pointer';
//  });

//  // Change it back to a pointer when it leaves.
//  map.on('mouseleave', 'states-layer', function () {
//      map.getCanvas().style.cursor = '';
//  });