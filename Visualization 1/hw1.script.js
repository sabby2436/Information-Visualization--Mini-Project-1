var data=[{data:[{target:{id:'Cyprus',name:'Cyprus'},count:0.005},
{target:{id:'Thailand',name:'Thailand'},count:0.025},
{target:{id:'Slovenia',name:'Slovenia'},count:0.15},
{target:{id:'Iceland',name:'Iceland'},count:0.17},
 {target:{id:'Estonia',name:'Estonia'},count:0.27},
{target:{id:'Colombia',name:'Colombia'},count:0.19},
{target:{id:'Hungary',name:'Hungary'},count:0.32},
 {target:{id:'Slovac Republic',name:'Slovac Republic'},count:0.4},
 {target:{id:'Poland',name:'Poland'},count:0.4},
{target:{id:'Chile',name:'Chile'},count:0.56},
{target:{id:'Brazil',name:'Brazil'},count:1.13},
{target:{id:'Liechtenstein',name:'Liechtenstein'},count:4.4},
{target:{id:'Chech Republic',name:'Chech Republic'},count:8.9},
{target:{id:'Greece',name:'Greece'},count:32.6},
{target:{id:'New Zealand',name:'New Zealand'},count:52.6},
{target:{id:'UAE',name:'UAE'},count:60},
{target:{id:'Portugal',name:'Portugal'},count:70},
{target:{id:'Taiwan',name:'Taiwan'},count:84},
{target:{id:'Qatar',name:'Qatar'},count:105},
{target:{id:'Luxembourg',name:'Luxembourg'},count:115},
{target:{id:'Ireland',name:'Ireland'},count:300},
{target:{id:'Korea',name:'Korea'},count:1300},
{target:{id:'Kuwait',name:'Kuwait'},count:1370},
{target:{id:'Saudi Arabia',name:'Saudi Arabia'},count:1700},
{target:{id:'Spain',name:'Spain'},count:2015},
{target:{id:'Belgium',name:'Belgium'},count:2144},
{target:{id:'Australia',name:'Australia'},count:2447},
{target:{id:'Switzerland',name:'Switzerland'},count:2845},
{target:{id:'Denmark',name:'Denmark'},count:2952},
{target:{id:'Italy',name:'Italy'},count:3835.65},
{target:{id:'Norway',name:'Norway'},count:4416.8},
{target:{id:'Sweden',name:'Sweden'},count:6364.04},
{target:{id:'Canada',name:'Canada'},count:7466.33},
{target:{id:'France',name:'France'},count:15456.4},
{target:{id:'United Kingdom',name:'United Kingdom'},count:23690.5},
{target:{id:'Germany',name:'Germany'},count:47218.4},
{target:{id:'Japan',name:'Japan'},count:114182.2},
{target:{id:'United States',name:'United States'},count:116176.3},
{target:{id:'Latvia',name:'Latvia'},count:0},
{target:{id:'Lithuania',name:'Lithuania'},count:0},
{target:{id:'South Africa',name:'South Africa'},count:0},

{target:{id:'India',name:'India'},count:0}],source:'Donated'},
          
{data:[{target:{id:'Cyprus',name:'Cyprus'},count:968.15},
{target:{id:'Thailand',name:'Thailand'},count:49041.3},
{target:{id:'Slovenia',name:'Slovenia'},count:225.43},
{target:{id:'Iceland',name:'Iceland'},count:17},
{target:{id:'Estonia',name:'Estonia'},count:251.3},
{target:{id:'Colombia',name:'Colombia'},count:25530},
{target:{id:'Hungary',name:'Hungary'},count:2925.3},
 {target:{id:'Slovac Republic',name:'Slovac Republic'},count:821},
{target:{id:'Poland',name:'Poland'},count:24517.2},
{target:{id:'Chile',name:'Chile'},count:7334},
 {target:{id:'Brazil',name:'Brazil'},count:36607},
{target:{id:'Liechtenstein',name:'Liechtenstein'},count:20},
{target:{id:'Chech Republic',name:'Chech Republic'},count:2142},
{target:{id:'Greece',name:'Greece'},count:520},
{target:{id:'New Zealand',name:'New Zealand'},count:225},
{target:{id:'UAE',name:'UAE'},count:500},
{target:{id:'Portugal',name:'Portugal'},count:176},
{target:{id:'Taiwan',name:'Taiwan'},count:3333},
{target:{id:'Qatar',name:'Qatar'},count:770},
{target:{id:'Luxembourg',name:'Luxembourg'},count:555},
{target:{id:'Ireland',name:'Ireland'},count:930},
{target:{id:'Korea',name:'Korea'},count:25294.3},
{target:{id:'Kuwait',name:'Kuwait'},count:7771},
{target:{id:'Saudi Arabia',name:'Saudi Arabia'},count:4877},
{target:{id:'Spain',name:'Spain'},count:561},
{target:{id:'Belgium',name:'Belgium'},count:185},
{target:{id:'Australia',name:'Australia'},count:2572},
{target:{id:'Switzerland',name:'Switzerland'},count:0.3},
{target:{id:'Denmark',name:'Denmark'},count:166},
{target:{id:'Italy',name:'Italy'},count:2400.8},
{target:{id:'Norway',name:'Norway'},count:370},
{target:{id:'Sweden',name:'Sweden'},count:70},
{target:{id:'Canada',name:'Canada'},count:4068.6},
{target:{id:'France',name:'France'},count:237.5},
{target:{id:'United Kingdom',name:'United Kingdom'},count:957.3},
{target:{id:'Germany',name:'Germany'},count:0},
{target:{id:'Japan',name:'Japan'},count:2081.1},
{target:{id:'United States',name:'United States'},count:105},
{target:{id:'Latvia',name:'Latvia'},count:423.4},
{target:{id:'Lithuania',name:'Lithuania'},count:520},
{target:{id:'South Africa',name:'South Africa'},count:18655.5},
{target:{id:'India',name:'India'},count:133980}],source:'Received'}];

var UNIT_LABEL_WIDTH = 100;
var UNIT_LABEL_HEIGHT = 25;
var GUTTER_WIDTH = 25;

var chartContainer = '.chart-container';
var chartLegendContainer = '.chart-legend-container';

var margins = {
    left: UNIT_LABEL_WIDTH,
    bottom: UNIT_LABEL_HEIGHT,
    right: GUTTER_WIDTH
};

var sizes = {
    width: 956,
    height: 650
};
    
var width = sizes.width - margins.left - margins.right;
var height = sizes.height - margins.bottom;

var series = data.map(function (d) {
        return d.source;
    });

var dataset = data.map(function (d) {
        return d.data.map(function (o, i) {
            // Structure it so that your numeric axis (the stacked amount) is y
            return {
                y: o.count,
                x: o.target.name
            };
        });
    });

d3.layout.stack()(dataset);

var dataset = dataset.map(function (group) {
    return group.map(function (d) {
        // Invert the x and y values, and y0 becomes x0
        return {
            x: d.y,
            y: d.x,
            x0: d.y0
        };
    });
});

var svg = d3.select(chartContainer)
        .append('svg')
        .attr('width', width + margins.left + margins.right)
        .attr('height', height + margins.bottom)
        .append('g')
        .attr('transform', 'translate(' + margins.left + ', 0)');

var units = dataset[0].map(function (d) {
        return d.y;
    });

var yScale = d3.scale.ordinal()
        .domain(units)
        .rangeRoundBands([0, height], .1);

var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

var xMax = d3.max(dataset, function (group) { 
        var groupMax = d3.max(group, function (d) {
            return d.x + d.x0;
        });
        return groupMax;
    });

var xScale = d3.scale.linear()
        .domain([0, xMax])
        .range([0, width]);

var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient('bottom'); 

var colors = function(i) {
    return i ? '#ff00a7' : '#00c5ff';
};

var groups = svg.selectAll('g')
        .data(dataset)
        .enter()
        .append('g')
        .style('fill', function (d, i) {
        return colors(i);
    });

groups.selectAll('rect')
        .data(function (d) {return d;})
        .enter()
        .append('rect')
        .attr('x', function (d) {
            return xScale(d.x0);
        })
        .attr('y', function (d, i) {return yScale(d.y);})
        .attr('height', function (d) {return yScale.rangeBand();})
        .attr('width', function (d) {return xScale(d.x);})
        .on('mouseover', function (d) {
            var xPos = parseFloat(d3.select(this).attr('x')) / 2 + width / 2;
            var yPos = parseFloat(d3.select(this).attr('y')) + yScale.rangeBand() / 2;
            d3.select('#tooltip')
                .style('left', xPos + 'px')
                .style('top', yPos + 'px')
                .select('#value')
                .text(d.x);
            d3.select('#tooltip').classed('hidden', false);
        })
        .on('mouseout', function () {
            d3.select('#tooltip').classed('hidden', true);
        });

svg.append('g')
    .attr('class', 'bc-x-axis bc-axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis);

svg.append('g')
    .attr('class', 'bc-y-axis bc-axis')
    .call(yAxis);

// Legend
var legendContainer = d3.select(chartLegendContainer)
    .append('div')
    .attr('class', 'bc-legend');

legendContainer
    .append('span')
    .attr('class', 'bc-legend-label')
    .html(series[0]);

series.forEach(function (s, i) {
    legendContainer.append('span')
        .attr('class', 'bc-legend-color')
        .style('background-color', colors(i));
});

legendContainer
    .append('span')
    .attr('class', 'bc-legend-label')
    .html(series[1]);



