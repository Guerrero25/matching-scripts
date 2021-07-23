const { readdir, readFile } = require("fs/promises");
const path = require("path");

const { random } = require("../lib/getRandom");
const getFileWithExifInfo = require("../lib/getFileWithExifInfo");

const imageBaseDirection = "images/base/pictures";

exports.createMatchablePicture = ({
  photoshoots: wantedPhotoshoots = "",
} = {}) => {
  readdir(path.join(process.cwd(), imageBaseDirection))
    .then((files) => {
      const wantedPhotoshootsList =
        wantedPhotoshoots === "all" ? [] : wantedPhotoshoots.split(",");
      const photoshoots = require(path.join(
        process.cwd(),
        "models/photoshoots.json"
      )).filter(
        (photoshoot) =>
          wantedPhotoshootsList.length === 0 ||
          wantedPhotoshootsList.includes(photoshoot.id)
      );

      console.log("Creating pictures...");

      return Promise.all(
        files.map((fileName) => {
          const photoshoot = photoshoots[random(0, photoshoots.length - 1)];

          return readFile(
            path.join(process.cwd(), imageBaseDirection, fileName)
          )
            .then((fileBuffer) => getFileWithExifInfo(fileBuffer, photoshoot))
            .catch(console.error);
        })
      );
    })
    .then(() => {
      console.log("Completed");
    })
    .catch(console.error);
};
