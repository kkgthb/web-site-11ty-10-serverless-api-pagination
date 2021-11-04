module.exports = async function (which_zip_doesnt_matter) {
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
  let the_data = {};
  the_data["post_code"] = raw_data_fixed["post code"];
  the_data["place_name"] = raw_data_fixed["places"][0]["place name"];
  //console.error(JSON.stringify(the_data));
  return the_data;
};
