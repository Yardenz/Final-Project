'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoieWFyZGVueiIsImEiOiJjam5hejlmMGkwMWV6M3BsOWJxcHNhZDJpIn0.yUUMMk4ixslNceyxLrAwzg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/yardenz/cjp1b65uf10z22sntfg71uhxv',
  center: [-111.860474, 40.760394],
  zoom: 12.5
});

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-111.84784250574066, 40.76081427914224]
    },
    properties: {
      title: 'Mapbox',
      description: 'venue'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-111.82938498915924, 40.767940013487504]
    },
    properties: {
      title: 'Mapbox',
      description: 'venue'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-111.8956617923561, 40.76925318507409]
    },
    properties: {
      title: 'Mapbox',
      description: 'venue'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-111.89686156910057, 40.7714713123857]
    },
    properties: {
      title: 'Mapbox',
      description: 'venue'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-111.90070791219831, 40.76895921083829]
    },
    properties: {
      title: 'Mapbox',
      description: 'venue'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-111.90547173162831, 40.770375620198365]
    },
    properties: {
      title: 'Mapbox',
      description: 'venue'
    }
  }]
};

geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
});
// const map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/yardenz/cjp1b65uf10z22sntfg71uhxv',
// center: [-111.860474, 40.760394],
// zoom: 12.5
// });

// console.log(map)
let current_location = [-73.96216, 40.80779]

// update the variable whenever a geolocation event fires

// for testing purposes, also update the variable whenever you click on the map
map.on('click', function(event) {
    current_location = [event.lngLat.lng, event.lngLat.lat]
    console.log('clicked', current_location)        
})

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

let content = { "Gateway plaza": "<strong>Gateway Legacy Plaza </strong><p><a <br /> A water-flake shaped fountain was named as the Olympic Legacy Plaza. <br /><img src='images/2002/gateway olympic legacy plaza.jpg' width='360' height='320' <br />",
                "Gateway Outline": "<strong>Gateway Shopping Center </strong><p><a <br /> Identified as a site for redevelopment by the city gvoernment, the Gateway was developed by The Boyer Co. a private developer for $375 million. Both as a strategy for urban renewal of a formerly industrial area, and as a strategy to bring to the downtown area prior to the Olympics. <br /> <br /> Swipe between the images below to see the site's transformation from 1997 to 2002 <br /> <iframe frameborder='0' class='juxtapose' width='450' height='341' src='https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=18f0f256-ff0f-11e8-9dba-0edaf8f81e27'></iframe> <br /> <br /> <img src='images/Pie Charts/gateway.png' width='352' height='200' <br />",
                "Olympic Village: Fort Douglas": "<strong>Olympic Village </strong><p><a <br /> The University and SLOC acquired land from the Federal government, formerly an army base, and built 21 new building for 3,500 Athletes. The newly built University housing was leased to SLOC by the University as athlete housing for the Olympics and Paralympics. <br /><img src='images/2002/olympic village.jpg' <br /><img src='images/Pie Charts/Olympic Village.png' width='352' height='200' <br />", 
                "Arena": "<strong>Olympic Ice Ring </strong><p><a <br /> The Delta Center served as an indoor sports arena and underwent construction in 2002 to house an ice sheet and become the site of ice skating sports for the 2002 Olympics. <br /><img src='images/2002/ice arena.png' width='474' height='250' <br /><img src='images/Pie Charts/Ice Arena.png' width='352' height='200' <br />",
                "Salt Palace": "<strong> The Salt Palace </strong><p><a <br /> The Salt Palace is a convention center that served as the main media center during the Olympics for the various international media press that arrived to cover the Olympics. <br /> <br /> Drag the cursor in the image below to see the Sale Palace in 1997 and in 2002. Notice the expansion in the southern section of the venue for by 2002 <iframe frameborder='0' class='juxtapose' width='450' height='341' src='https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=6bd740a2-ff13-11e8-9dba-0edaf8f81e27'></iframe> <br /> <br /> Below is an image of the Salt Lake as it is today, an active convention center in the down town area. <br /><img src='images/2017.2018/salt palace.png' width='450' height='252' <br /><img src='images/Pie Charts/Salt Palace.png' width='352' height='200' <br />",
                "Medals Plaza": "<strong> Medals Plaza </strong><p><a <br /> This area served as the medals plaza and sight for the Olympic Super Store. The structures built allowed for performances and entertainment during the Olympics. <br /><img src='images/2002/Medals Plaza.png' width='400' height='250' <br /><img src='images/Pie Charts/Medals Plaza.png' width='352' height='200' br />",
                "Rice Eccles Stadium": "<strong> Rice Eccles Stadium </strong><p><a <br /> In February 2002, the Rice Eccles Stadium was designated as the Olympic Cauldron Park and was the site of the opening and closing ceremonies for the Winter Olympics. Renovations for the 2002 Olypmpics saw the expansion of the Stadium and today it is the home of the University of Utah football team. <br /><img src='images/2002/arena 2002 2.jpg' width='362' height='235' <br /><img src='images/Pie Charts/Rice Eccles Stadium.png' width='352' height='200' <br />",

                }
    //below is partial imagery for the 2018 map//
    
    // let content = { "Gateway plaza": "Sold in part to an investment comapny in 2005, and again in 2013 and 2018, the Gateway is losing stores and visitors. This is thought to partly result from the Mormon Church's opening of the large City Creek shopping mall (2012) further east in the downtown area. <br /><img src ='images/2017.2018/gateway plaza.jpg' br />"}

    //below is partial imagery for the 1997 map//

    //let content = {"Olympic Village: Fort Douglas":  "Today, Fort Douglas remains student housing within the expanding University of Utah Campus. <br /><img src='images/1997/Fort Douglas 1997.jpg' width='400' height='250' <br /><img src='images/1997/Fort Douglas.png' width='450' height='350' <br />"


//      }

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

// map.on('click', 'developments-1dhpe2 copy', function (e) {
//     for (let building of e.features) {
//         console.log(building.properties.NAME)
//         for (let building_name of buildings) {
//             if (building_name == building.properties.NAME) {
//                  new mapboxgl.Popup()
//                      .setLngLat(e.lngLat)
//                      .setHTML(content[building.properties.NAME])
//                      .addTo(map)
//                 break
//             }
//         }
//     }
//  })



// https://www.mapbox.com/help/custom-markers-gl-js/



//  // Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'developments-1dhpe2 copy', function () {
      map.getCanvas().style.cursor = 'pointer';
  });

//  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'developments-1dhpe2 copy', function () {
      map.getCanvas().style.cursor = '';
 });
