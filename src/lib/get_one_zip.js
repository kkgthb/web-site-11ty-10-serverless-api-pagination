const fetch = require("node-fetch");

module.exports = async function (which_zip) {
  let raw_data_fixed = {
    "post code": "65806",
    country: "United States",
    "country abbreviation": "US",
    places: [
      {
        "place name": "Springfield",
        longitude: "-93.2971",
        state: "Missouri",
        "state abbreviation": "MO",
        latitude: "37.2031",
      },
    ],
  };
  let url = `https://api.zippopotam.us/us/${which_zip}`
  const raw_data_downloaded = await fetch(url).then((data) => data.json());
  let the_data = {};
  the_data["post_code"] = raw_data_downloaded["post code"];
  the_data["place_name"] = raw_data_downloaded["places"][0]["place name"];
  console.error(JSON.stringify(the_data));
  return the_data;
};