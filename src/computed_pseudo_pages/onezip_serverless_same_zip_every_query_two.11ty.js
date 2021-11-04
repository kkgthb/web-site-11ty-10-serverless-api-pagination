const single_zip_lib = require("../lib/get_one_zip.js");

class OneZipServerlessB {
  async data() {
    const the_zip_code = "65807";
    const single_zip = await single_zip_lib(the_zip_code);
    const place_name = JSON.stringify(single_zip.place_name).replace(/^"+|"+$/g, '');
    const post_code = JSON.stringify(single_zip.post_code).replace(/^"+|"+$/g, '');
    return {
      tags: ["pages"],
      layout: "layouts/standard_header_footer.liquid",
      permalink: {
        firstrequestrender: "/zip_url_js_sametwo/:url_zip/index.html",
      },
      title: `${place_name} (fresh hot API data but always the same query, predetermined by template)`,
      post_code: post_code,
    };
  }

  render(dataFromData) {
    return `<h1 class="font-bold text-2xl">City of <b class="text-red-800">${
      dataFromData.title
    }</b>.</h1><p>Zip code is "<b class="text-green-800">${
      dataFromData.post_code
    }</b>.</p><p>Last rebuild:  <i class="text-purple-800">${this.nowstampstring()}</i>.</p>`;
  }
}

module.exports = OneZipServerlessB;