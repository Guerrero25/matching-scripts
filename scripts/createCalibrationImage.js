const sharp = require("sharp");
const { readFile } = require("fs/promises");
const path = require("path");

const format = require("date-fns/format");

const imageDirection = "images/base/calibration_image_base.jpg";
const outputFile = "images/build/calibration.jpg";

module.exports = () => {
  console.log("Creating calibration picture...");

  readFile(path.join(process.cwd(), imageDirection))
    .then((file) =>
      sharp(file)
        .withMetadata({
          exif: {
            IFD0: {
              DateTime: format(new Date(), "yyyy:MM:dd HH:mm:ss"),
            },
          },
        })
        .toFile(path.join(process.cwd(), outputFile))
    )
    .then(() => {
      console.log("Completed");
    })
    .catch(console.error);
};
