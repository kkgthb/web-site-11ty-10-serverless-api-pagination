class ZipBuildTime {
  data() {
    return {
      pagination: {
        data: "zipcodes",
        size: 1,
        alias: "documentData",
        addAllPagesToCollections: true,
      },
      tags: ["zips", "pages"],
      layout: "layouts/standard_header_footer.liquid",
      permalink: (arbitraryParameterName) => {
        return `/zip_build/${arbitraryParameterName.pagination.items[0].post_code}/index.html`;
      },
      eleventyComputed: {
        title: (arbitraryParameterName) =>
          `${arbitraryParameterName.documentData.place_name} (built at site-build time)`,
      },
    };
  }

  render(dataFromData) {
    return `<h1 class="font-bold text-2xl">City of <b class="text-red-800">${
      dataFromData.title
    }</b></h1><p>Zip code is "<b class="text-green-800">${
      dataFromData.documentData.post_code
    }</b>."</p><p>Last rebuild:  <i class="text-purple-800">${this.nowstampstring()}</i>.</p>`;
  }
}

module.exports = ZipBuildTime;
