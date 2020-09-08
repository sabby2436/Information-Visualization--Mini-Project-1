// The svg

var width = 1200;
var height = 500;
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");
/*
d3.queue()
  .defer(d3.json,"world.topojson")
  .await(ready)
  
 var projection = d3.geoMercator()                       
    .translate([ width/2, height/2 ])

  var path = d3.geoPath()
          .projection(projection)
  function ready(data,error){
  console.log(data)
  
  
  
  
  var countries = topojson.features(data, data.object.countries)
  
  svg.selectAll(".country")
     .data(countries)
     .enter().append("path")
     .attr("class", "country")
     .attr("d",path)
     
  
}
*/


// Map and projection
var projection = d3.geoMercator()                       
    .translate([ width/2, height/2 ])
    .scale(78)


// Create data for circles:
var markers = [
  
  
  {long: 32.73178, lat:35.140026, group: "A", size: 5599}, // Cyprus
  {long: 33.973617, lat: 35.058506, group: "B", size: 968154947},
  {long: -95.712891, lat: 37.090240, group: "A", size: 116176338066},
  {long: -120.833471, lat: 42.423457, group: "B", size: 104524992},
  {long: 100.992538, lat: 15.870032, group: "B", size: 49041317440},
  {long: 99.477448, lat: 18.479609, group: "A", size: 25461},
  {long: 14.995463, lat: 46.151241, group: "B", size: 225435200},
  {long: 15.201935, lat: 46.225453, group: "A", size: 150028},
  {long: -19.020836, lat: 64.96, group: "B", size: 18060045},
  {long: -15.989932, lat: 65.793769, group: "A", size: 172501},
  {long: -74.063644, lat: 4.624335, group: "A", size: 190795},
  {long: -74.7, lat: 1.624335, group: "B", size: 25530536307},
  {long: 25.013607, lat: 58.59527, group: "B", size: 251349503},
  {long: 25.866511, lat: 58.596887, group: "A", size: 278942},
  {long: 19.503304, lat: 47.162495, group: "B", size: 2925327491},
  {long: 21.296815, lat: 47.798397, group: "A", size: 324552},
  {long: 14.420460, lat: 50.087810, group: "A", size: 395774},
  {long: 16.902753, lat: 49.653405, group: "B", size: 821195623},
  {long: 21.296815, lat: 47.798397, group: "A", size: 324552},
  
  
  
  {long: 19.145136, lat: 51.919437, group: "A", size: 403184},
  {long: 15.675634, lat: 52.589701, group: "B", size: 24517225188},
  
  {long: -71.542969, lat: -35.675148 , group: "A", size: 564349},
  {long: -70.497698, lat: -34.529187, group: "B", size: 7334129130},
  
  {long: -51.925282, lat: -14.235004, group: "A", size: 1134440},
  {long: -52.526082, lat: -2.108899, group: "B", size: 36607258078},
  
  {long: 9.555373, lat: 47.166000, group: "A", size: 4370700},
  {long: 12.842477, lat: 47.219568, group: "B", size: 18393083},
  
  {long: 15.472962, lat: 49.817493, group: "A", size: 8930435},
  {long: 15.662166, lat: 49.926472, group: "B", size: 2141913341},
  
  {long: 21.824312, lat: 39.074207, group: "A", size: 32667185},
  {long: 22.005755, lat: 37.300275, group: "B", size: 519377906},
  
  {long: 174.910589, lat: -41.574361, group: "A", size: 56749885},
  {long: 174.910589, lat: -43.574361, group: "B", size: 225588310},
  
  {long: 55.022025, lat: 24.477150, group: "A", size: 67636986},
  {long: 52.999191, lat: 23.765237, group: "B", size: 300206472},
  
  {long: -8.224454, lat: 39.399872, group: "A", size: 68900866},
  {long: -8.018853, lat: 39.385264, group: "B", size: 175242606},
  
  {long: 120.960518, lat: 23.697809, group: "A", size: 83737498},
  {long: 120.875646, lat: 20.857195, group: "B", size: 3399554410},
  
  {long: 51.183884, lat: 25.354826, group: "A", size: 104519053},
  {long: 51.253326, lat: 26.056783, group: "B", size: 733783749},
  
  {long: -8.243890, lat: 53.412910, group: "A", size: 295144458},
  {long: -9.181079, lat: 52.133488, group: "B", size: 934638729},
  
  {long: 6.129583, lat: 49.815273, group: "A", size: 111554022},
  {long: 5.939013, lat: 49.968889, group: "B", size: 555039832},
  
  {long: 25.748152, lat: 61.924110, group: "A", size: 665953415},
  {long: 27.175633, lat: 66.548263, group: "B", size: 180695493},
  
  {long: 16.372780, lat: 48.209209, group: "A", size: 784068952},
  {long: 14.640861, lat: 48.048710, group: "B", size: 770267419},
  
  {long: 127.978462, lat: 37.663998, group: "A", size: 1299047720},
  {long: 127.533126, lat: 35.424868, group: "B", size: 25294323453},
  
  {long: 47.481766, lat: 29.311661, group: "A", size: 1369078319},
  {long: 42.288419, lat: 33.063924, group: "B", size: 7771540076},
  
  {long: 45.079163, lat: 23.885942, group: "A", size: 1698410689},
  {long: 38.524732, lat: 26.431228, group: "B", size: 4877749103},
  
  {long: -3.749220, lat: 40.463669, group: "A", size: 2014695904},
  {long: -2.275943, lat: 38.891033, group: "B", size: 561711808},
  
  {long: 4.469936, lat: 50.503887, group: "A", size: 6364045876},
  {long: 5.475989, lat: 50.219095, group: "B", size: 184346233},
  
  {long: 133.775131, lat: -25.274399, group: "A", size: 2446616312},
  {long: 145.411821, lat: -33.284620, group: "B", size: 2572618261},
  
  {long: 8.227512, lat: 46.818188, group: "A", size: 2844087953},
  {long: 7.076486, lat: 46.528635, group: "B", size: 326783},
  
  {long: 9.501785, lat: 56.263920, group: "A", size: 2952416405},
  {long: 8.704766, lat: 55.739482, group: "B", size: 166310586},
  
  {long: -106.346771, lat: 56.130367, group: "A", size: 7466338200},
  {long: -132.842503, lat: 62.915233, group: "B", size: 4068652966},
  
  {long: 138.252930, lat: 36.204823, group: "A", size: 114182254172},
  {long: 140.818974, lat: 41.446947, group: "B", size: 2081102258},
  
  {long: -3.435973, lat: 55.378052, group: "A", size: 23690539376},
  {long: -3.419489, lat: 57.231503, group: "B", size: 957343964},
  
  {long: 60.472023, lat: 60.472023, group: "A", size: 4416814418},
  {long: 6.744476, lat: 57.704147, group: "B", size: 368001981},
  
  {long: 2.349, lat: 48.864, group: "A", size: 15456459635},
  {long: -1.397, lat: 43.664, group: "B", size: 237540854},
  
  {long: 9.501785, lat: 56.263920, group: "A", size: 2952416405},
  {long: 10.160082, lat: 56.583692, group: "B", size: 166310586},
  
  {long: 8.227512, lat: 46.818188, group: "A", size: 2844087953},
  {long: 9.695047, lat: 46.724800, group: "B", size: 326783},
  
  {long: 10.451526, lat: 51.165691, group: "A", size: 47218438821},
  {long: 9.235939, lat: 53.80065, group: "B", size: 60164},
  
  
  
  
  {long: 25.279860, lat: 54.689461, group: "B", size: 514143300},
  
  {long: 24.603189, lat: 56.879635, group: "B", size: 423495000},
  
  {long: 76.195396, lat: 26.861660, group: "B", size: 133980500000},//India
  
  {long: 22.937506, lat: -30.559483, group: "B", size: 18655560000},
  
  
  
  
  
  
  // nice
];

// Load external data and boot
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", function(data){

    // Filter data
    data.features = data.features.filter( function(d){return d.properties.name} )

    // Create a color scale
    var color = d3.scaleOrdinal()
      .domain(["A", "B" ])
      .range([ "#1DDE4C", "#C70039"])

    // Add a scale for bubble size
    var size = d3.scaleLinear()
      .domain([0,133980500000])  // What's in the data
      .range([ 4, 20])  // Size in pixel

    // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
          .attr("fill", "#b8b8b8")
          .attr("d", d3.geoPath()
              .projection(projection)
          )
        .style("stroke", "black")
        .style("opacity", .3)

    // Add circles:
    svg
      .selectAll("myCircles")
      .data(markers)
      .enter()
      .append("circle")
        .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
        .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
        .attr("r", function(d){ return size(d.size) })
        .style("fill", function(d){ return color(d.group) })
        .attr("stroke", function(d){ return color(d.group) })
        .attr("stroke-width", 1)
        .attr("fill-opacity", 0.7)
  
    svg.append("circle").attr("cx",200).attr("cy",130).attr("r", 6).style("fill", "#1DDE4C")
svg.append("circle").attr("cx",200).attr("cy",160).attr("r", 6).style("fill", "#C70039")
svg.append("text").attr("x", 220).attr("y", 130).text("Donor").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 220).attr("y", 160).text("Recipient").style("font-size", "15px").attr("alignment-baseline","middle")

})