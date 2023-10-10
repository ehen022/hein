var vg_1 = "vis2.json";

vegaEmbed("#bubble_chart", vg_1).then(function(result) {
// Access the Vega view instance
 //https://vega.github.io/vega/docs/api/view/) as result.view

    }) .catch(console.error);
    var vg_2="chloropeth.json";
vegaEmbed("#world_map", vg_2).then(function(result) {
      // Access the Vega view instance
       //https://vega.github.io/vega/docs/api/view/) as result.view
      
          }) .catch(console.error);
