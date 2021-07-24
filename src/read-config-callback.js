// src/read-config-callback.js
const fs = require("fs");
const path = require("path");

/**
 * @param {string} filename - File name in the `config/` directory
 * @param {Function} callback - Function to execute when the config is read
 * @param {Function} error - Function to execute if an error ocurrs
 * @returns {string} - The file contents
 * @throws {Error} - If the file could not be find or opened
 */
function readConfig(filename, callback, error) {
  const config = path.dirname(__dirname) + `/config/${filename}`;

  fs.readFile(`${config}`, "utf8", (err, data) => {
    if (err) {
      error(err);
    }
    callback(data.trim());
  });
}

readConfig(
  "photos.txt",
  (contents) => {
    console.log(`The config contents are "${contents}"`);
    // Execute additoinal callbacks here
  },
  (err) => {
    console.error(`The configuration file could not be read:`, err);
  }
);
