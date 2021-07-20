const { readdir, readFile } = require("fs/promises");
const path = require("path");

const photoshoots = require("./models/photoshoots.json");

const { random } = require("../lib/getRandom");
const getFileWithExifInfo = require("../lib/getFileWithExifInfo");

const imageBaseDirection = "./images/base/pictures";

module.exports = () => {
  readdir(path.join(".", imageBaseDirection))
    .then((files) => {
      console.log("Creating pictures...");

      return Promise.all(
        files.map((fileName) => {
          const photoshoot = photoshoots[random(0, photoshoots.length)];

          return readFile(path.join(".", imageBaseDirection, fileName)).then(
            (fileBuffer) => getFileWithExifInfo(fileBuffer, photoshoot)
          );
        })
      );
    })
    .then(() => {
      console.log("Completed");
    })
    .catch(console.error);
};
