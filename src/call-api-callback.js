// src/call-api-callback.js
const fs = require("fs");
const path = require("path");
const superagent = require("superagent");

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
    superagent.get(contents).end((err, res) => {
      if (err) {
        console.log("An error ocurred getting api data", err);
        return;
      }
      console.log("Api call result", res.body);
    });
  },
  (err) => {
    console.error(`The configuration file could not be read:`, err);
  }
);
