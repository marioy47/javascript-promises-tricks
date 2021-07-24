// src/call-api-async-await.js
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

(async () => {
  try {
    const contents = await readConfig("photos.txt");
    const res = await superagent.get(contents);
    console.log(res.body);
  } catch (err) {
    console.log("An error ocurred", err);
  }
})();
