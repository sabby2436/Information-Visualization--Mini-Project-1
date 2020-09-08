// The svg
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// Map and projection
var projection = d3.geoMercator()
    .center([2, 47])                // GPS of location to zoom on
    .scale(78)                       // This is like the zoom
    .translate([ width/2, height/2 ])

// Create data for circles:
var markers = [
  {long: 16.372780, lat: 48.209209, group: "A", size: 2}, // Austria
  
  {long: -51.925282, lat: -14.235004, group: "A", size: 1600},
  {long: -57.803041, lat: -8.090944, group: "B", size: 1060},
  {long: -52.803041, lat: -8.090944, group: "C", size: 932},
  {long: -57.803041, lat: -16.090944, group: "D", size: 844},
  {long: -48.803041, lat: -16.090944, group: "E", size: 484},
  // Brazil
  
  {long: -71.542969, lat: -35.675148, group: "A", size: 766},
  {long: -71.542969, lat: -28.675148, group: "B", size: 437},
  {long: -71.542969, lat: -36.675148, group: "C", size: 233},
  {long: -71.542969, lat: -37.675148, group: "D", size: 500},
  {long: -71.542969, lat: -30.675148, group: "E", size: 234},//Chile
  
  {long: -74.297333, lat: 4.570868, group: "A", size: 970},
  {long: -70.804515, lat: 2.811371, group: "B", size: 850},
  {long: -73.6188933, lat: 3.337954, group: "C", size: 1551},
  {long: -72.297333, lat: 4.570868, group: "D", size: 600},
  {long: -75.297333, lat: 3.570868, group: "E", size: 360}, //Clombia
  
  {long: 33.429859, lat: 35.126411, group: "A", size: 7},
  {long: 33.429859, lat: 35.126411, group: "B", size: 42},
  {long: 33.429859, lat: 35.126411, group: "C", size: 3},
  {long: 33.429859, lat: 35.126411, group: "D", size: 24},
  {long: 33.429859, lat: 35.126411, group: "E", size: 10},
  
  {long: 15.472962, lat: 49.817493, group: "A", size: 20},
   {long: 15.472962, lat: 48.817493, group: "B", size: 130},
   {long: 14.472962, lat: 49.817493, group: "C", size: 20},
   {long: 16.472962, lat: 49.817493, group: "D", size: 60},
   {long: 15.472962, lat: 50.817493, group: "E", size: 30}, 
  
  {long: 25.013607, lat: 58.595272, group: "A", size: 20},
  {long: 25.013607, lat: 58.595272, group: "B", size: 80},
  {long: 25.013607, lat: 58.595272, group: "C", size: 30},
  {long: 25.013607, lat: 58.595272, group: "D", size: 30},
  {long: 25.013607, lat: 58.595272, group: "E", size: 20},
  
  
  {long: 25.748152, lat: 61.924110, group: "B", size: 18},
  
  {long: 10.451526, lat: 51.165691, group: "B", size: 30},
  
  {long: 19.503304, lat: 47.162495, group: "A", size: 20},
  {long: 18.451526, lat: 47.162495, group: "B", size: 120},
  {long: 19.451526, lat: 46.162495, group: "C", size: 20},
  {long: 19.451526, lat: 48.162495, group: "D", size: 60},
  {long: 18.451526, lat: 47.162495, group: "E", size: 40},
  
  {long: 78.962883, lat: 20.593683, group: "A", size: 1600},
  {long: 76.962883, lat: 20.593683, group: "B", size: 1000},
  {long: 78.962883, lat: 24.593683, group: "C", size: 1100},
  {long: 76.962883, lat: 22.593683, group: "D", size: 776},
  {long: 74.962883, lat: 25.593683, group: "E", size: 810},
  
  {long: 127.978462, lat: 37.663998, group: "A", size: 28},
  {long: 127.978462, lat: 36.663998, group: "B", size: 100},
  {long: 126.978462, lat: 35.663998, group: "C", size: 10},
  {long: 125.978462, lat: 37.663998, group: "D", size: 70},
  {long: 127.978462, lat: 39.663998, group: "E", size: 28},
  
  {long: 47.481766, lat: 29.311661, group: "A", size: 10},
  {long: 47.481766, lat: 29.311661, group: "B", size: 48},
  {long: 47.481766, lat: 29.311661, group: "D", size: 28},
  {long: 47.481766, lat: 29.311661, group: "E", size: 8},
  
  {long: 23.881275, lat: 55.169437, group: "A", size: 20},
  {long: 22.881275, lat: 55.169437, group: "B", size: 90},
  {long: 23.881275, lat: 54.169437, group: "C", size: 30},
  {long: 23.881275, lat: 56.169437, group: "D", size: 30},
  {long: 24.881275, lat: 55.169437, group: "E", size: 30},
  
  {long: 19.145136, lat: 51.919437, group: "A", size: 30},
  {long: 19.145136, lat: 50.919437, group: "B", size: 150},
  {long: 18.145136, lat: 51.919437, group: "C", size: 30},
  {long: 19.145136, lat: 52.919437, group: "D", size: 70},
  {long: 20.145136, lat: 51.919437, group: "E", size: 70},
  
  {long: 51.183884, lat: 25.354826, group: "A", size: 10},
  {long: 50.183884, lat: 24.354826, group: "B", size: 40},
  {long: 51.183884, lat: 26.354826, group: "C", size: 20},
  {long: 50.183884, lat: 23.354826, group: "D", size: 10},
  
  
  {long: 24.966761, lat: 45.943161, group: "A", size: 70},
  {long: 24.966761, lat: 44.943161, group: "B", size: 210},
  {long: 22.966761, lat: 45.943161, group: "C", size: 60},
  {long: 24.966761, lat: 43.943161, group: "D", size: 60},
  {long: 24.966761, lat: 46.943161, group: "E", size: 90},
  
  
  {long: 45.079163, lat: 23.885942, group: "A", size: 110},
  {long: 45.079163, lat: 21.885942, group: "B", size: 70},
  {long: 45.079163, lat: 24.885942, group: "C", size: 10},
  {long: 44.079163, lat: 23.885942, group: "D", size: 70},
  {long: 43.079163, lat: 23.885942, group: "E", size: 20},
  
  {long: 22.937506, lat: -30.559483, group: "A", size: 1111},
  {long: 21.937506, lat: -30.559483, group: "B", size: 1100},
  {long: 22.937506, lat: -31.559483, group: "C", size: 1170},
  {long: 23.937506, lat: -30.559483, group: "D", size: 600},
  {long: 24.937506, lat: -30.559483, group: "E", size: 500},
  
 
  {long: 100.992538, lat: 15.870032, group: "A", size: 1500},
  {long: 101.992538, lat: 15.870032, group: "B", size: 400},
  {long: 100.992538, lat: 13.870032, group: "C", size: 300},
  {long: 100.992538, lat: 14.870032, group: "D", size: 600},
  {long: 100.992538, lat: 16.870032, group: "E", size: 260}
  
];

// Load external data and boot
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", function(data){

    // Filter data
    data.features = data.features.filter( function(d){return d.properties.name} )

    // Create a color scale
    var color = d3.scaleOrdinal()
      .domain(["A", "B", "C", "D","E"])
      .range([ "#f0ff00", "#12e736", "#b000ff","#ff00a7","#00c5ff" ])

    // Add a scale for bubble size
    var size = d3.scaleLinear()
      .domain([10,1000])  // What's in the data
      .range([ 8, 20])  // Size in pixel

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
        .attr("class" , function(d){ return d.group })
        .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
        .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
        .attr("r", function(d){ return size(d.size) })
        .style("fill", function(d){ return color(d.group) })
        .attr("stroke", function(d){ return color(d.group) })
        .attr("stroke-width", 1)
        .attr("fill-opacity", .7)


    // This function is gonna change the opacity and size of selected and unselected circles
    function update(){

      // For each check box:
      d3.selectAll(".checkbox").each(function(d){
        cb = d3.select(this);
        grp = cb.property("value")

        // If the box is check, I show the group
        if(cb.property("checked")){
          svg.selectAll("."+grp).transition().duration(1000).style("opacity", 1).attr("r", function(d){ return size(d.size) })

        // Otherwise I hide it
        }else{
          svg.selectAll("."+grp).transition().duration(1000).style("opacity", 0).attr("r", 0)
        }
      })
    }

    // When a button change, I run the update function
    d3.selectAll(".checkbox").on("change",update);

    // And I initialize it at the beginning
    update()
  
  svg.append("circle").attr("cx",200).attr("cy",110).attr("r", 6).style("fill", "#f0ff00")
  svg.append("circle").attr("cx",200).attr("cy",130).attr("r", 6).style("fill", "#12e736")
svg.append("circle").attr("cx",200).attr("cy",150).attr("r", 6).style("fill", "#b000ff")
  svg.append("circle").attr("cx",200).attr("cy",170).attr("r", 6).style("fill", "#ff00a7")
  svg.append("circle").attr("cx",200).attr("cy",190).attr("r", 6).style("fill", "#00c5ff")
  
 svg.append("text").attr("x", 220).attr("y", 110).text("Sectors not specified").style("font-size", "15px").attr("alignment-baseline","middle") 
svg.append("text").attr("x", 220).attr("y", 130).text("Social services").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 220).attr("y", 150).text("Strengthening civil society").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("text").attr("x", 220).attr("y", 170).text("Higher education").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("text").attr("x", 220).attr("y", 190).text("Multisector aid").style("font-size", "15px").attr("alignment-baseline","middle")

})
