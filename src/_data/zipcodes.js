//const fetch = require("node-fetch");
module.exports = async function () {
  //let url = "https://api.zippopotam.us/us/mo/springfield";
  //return await fetch(url).then((data) => data.json());
  let the_data = [
    {
      "place name": "Springfield",
      longitude: "-93.2912",
      "post code": "65803",
      latitude: "37.2593",
    },
    {
      "place name": "Springfield",
      longitude: "-93.2522",
      "post code": "65804",
      latitude: "37.1654",
    },
    {
      "place name": "Springfield",
      longitude: "-93.3437",
      "post code": "65805",
      latitude: "37.2581",
    },
    {
      "place name": "Springfield",
      longitude: "-93.2971",
      "post code": "65806",
      latitude: "37.2031",
    },
    {
      "place name": "Springfield",
      longitude: "-93.3085",
      "post code": "65807",
      latitude: "37.1668",
    },
    {
      "place name": "Springfield",
      longitude: "-93.3437",
      "post code": "65808",
      latitude: "37.2581",
    },
    {
      "place name": "Springfield",
      longitude: "-93.2057",
      "post code": "65809",
      latitude: "37.1852",
    },
    {
      "place name": "Springfield",
      longitude: "-93.2896",
      "post code": "65810",
      latitude: "37.1136",
    },
    {
      "place name": "Springfield",
      longitude: "-93.3437",
      "post code": "65814",
      latitude: "37.2581",
    },
    {
      "place name": "Springfield",
      longitude: "-93.3437",
      "post code": "65817",
      latitude: "37.2581",
    },
    {
      "place name": "Springfield",
      longitude: "-93.3437",
      "post code": "65890",
      latitude: "37.2581",
    },
    {
      "place name": "Springfield",
      longitude: "-93.2784",
      "post code": "65897",
      latitude: "37.1987",
    },
    {
      "place name": "Springfield",
      longitude: "-93.2951",
      "post code": "65898",
      latitude: "37.1803",
    },
    {
      "place name": "Springfield",
      longitude: "-93.2596",
      "post code": "65899",
      latitude: "37.1815",
    },
  ]
    .map((zip) => {
      var output = {};
      for (const key in zip) {
        output[key.replace(/\s+/, "_")] = zip[key];
      }
      return output;
    })
    .map((zip, i) => {
      zip.place_name = `${i} ${zip.place_name}`;
      return zip;
    });
  console.error(JSON.stringify(the_data));
  return the_data;
};