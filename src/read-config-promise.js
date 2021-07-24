const fs = require("fs");
const path = require("path");

/**
 * @param {string} filename - File name in the `config/` directory
 * @throws {Promise} - If the file could not be find or opened
 */
function readConfig(filename) {
  return new Promise((resolve, reject) => {
    const config = path.dirname(__dirname) + `/config/${filename}`;

    fs.readFile(`${config}`, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data.trim());
    });
  });
}

readConfig("photos.txt")
  .then((contents) => {
    console.log(`The config contents are "${contents}"`);
  })
  .catch((err) => {
    console.error(`The configuration file could not be read:`, err);
  });
