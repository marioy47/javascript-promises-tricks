// src/call-api-callback.js
const fs = require("fs");
const path = require("path");
const superagent = require("superagent");

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
    return superagent.get(contents);
  })
  .then((res) => {
    console.log(res.body);
  })
  .catch((err) => {
    console.error(`An error ocurred:`, err);
  });
