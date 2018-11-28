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

let buildings = ["Gateway plaza", "Gateway Outline", "Olympic Village: Fort Douglas"]

let content = { "Gateway plaza": "this is some HTML<br /><img src='images/skier-big-mountain.jpg' width='100' height='100' /><br /><img src='https://www.telegraph.co.uk/content/dam/Travel/ski/skier-big-mountain.jpg' width='100' height='100' />",
                "Gateway Outline": "more HTML",

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