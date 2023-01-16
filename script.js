// set the dimensions and margins of the graph
const margin = { top: 30, right: 30, bottom: 70, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// To do: Test if the data exists, catch this error
console.log("I am about to load the data");
const csvData = "./data.csv";

// d3.csv(
//     csvData,
//     function (data) {
//     }
// )

if (1 + 1 == 3) {
  // change above condition to check if data exists
  // if data does not exist, we print some error essage about that
  //   message = "Could not find the data to load";
  //   console.log("Error");
  //   console.log(message);
} else {
  d3.csv(
    csvData,
    // "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv",
    function (data) {
      //   d3.csv("/.csvdata.csv", function (data) {
      // X axis

      const xValue = (d) => d.TOTALS;
      const yValue = (d) => d.consumer_and_business_subscribers;
      const x = d3
        .scaleBand()
        .range([0, width])
        .domain([0, d3.max(data, xValue)]);

      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

      // Add Y axis
      const y = d3
        .scaleLinear()
        .domain(data.map(yValue))
        .range([0, height])
        .padding(0.5);

      svg.append("g").call(d3.axisLeft(y));

      // Line

      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line()
            .x(function (d) {
              return x(d.TOTALS);
            })
            .y(function (d) {
              return y(d.consumer_and_business_subscribers);
            })
        );
    }
  );
}
