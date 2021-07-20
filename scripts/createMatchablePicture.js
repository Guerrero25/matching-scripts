const { readdir, readFile } = require("fs/promises");
const path = require("path");

const { random } = require("../lib/getRandom");
const getFileWithExifInfo = require("../lib/getFileWithExifInfo");

const imageBaseDirection = "images/base/pictures";

module.exports = () => {
  readdir(path.join(process.cwd(), imageBaseDirection))
    .then((files) => {
      const photoshoots = require(path.join(
        process.cwd(),
        "models/photoshoots.json"
      ));

      console.log("Creating pictures...");

      return Promise.all(
        files.map((fileName) => {
          const photoshoot = photoshoots[random(0, photoshoots.length)];

          return readFile(
            path.join(process.cwd(), imageBaseDirection, fileName)
          ).then((fileBuffer) => getFileWithExifInfo(fileBuffer, photoshoot));
        })
      );
    })
    .then(() => {
      console.log("Completed");
    })
    .catch(console.error);
};
