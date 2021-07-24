const fs = require("fs");
const path = require("path");

/**
 * @param {string} filename - File name in the `config/` directory
 * @returns {string} - The file contents
 * @throws {Error} - If the file could not be find or opened
 */
function readConfig(filename) {
  const config = path.dirname(__dirname) + `/config/${filename}`;
  let photosUrl = null;

  fs.readFile(`${config}`, "utf8", (err, data) => {
    if (err) {
      throw new Error(`Could not read the file ${config}`);
    }
    photosUrl = data.trim();
  });

  return photosUrl;
}

console.log(readConfig("photos.txt"));
