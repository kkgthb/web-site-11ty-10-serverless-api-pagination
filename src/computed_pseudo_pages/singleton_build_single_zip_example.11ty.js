const single_zip_lib = require("../lib/fixed_one_zip_example.js");

class SingleBuildZipExample {
  async data() {
    const single_zip = await single_zip_lib("doesnt_matter");
    return {
      tags: ["pages"],
      layout: "layouts/standard_header_footer.liquid",
      permalink: "/single_build_zip_example/index.html",
      title: `${single_zip.place_name}-hardcoded (built at site-build time)`,
      post_code: single_zip.post_code,
    };
  }

  render(dataFromData) {
    return `<h1 class="font-bold text-2xl">City of "${
      dataFromData.title
    }"</h1><p>Zip code is "<b>${
      dataFromData.post_code
    }</b>."</p><p>Last rebuild:  <i class="text-purple-800">${this.nowstampstring()}</i>.</p>`;
  }
}

module.exports = SingleBuildZipExample;
