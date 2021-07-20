const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

/* Scripts */
const createCalibrationImage = require("../scripts/createCalibrationImage");
const createMatchablePicture = require("../scripts/createMatchablePicture");

yargs(hideBin(process.argv))
  .scriptName("smiler-scripts")
  .command(
    "calibrate",
    "Generate a calibration image with the current date-time",
    {},
    createCalibrationImage
  )
  .command(
    "match",
    "Generate new pictures which match with random photoshoots",
    {},
    createMatchablePicture
  )
  .help()
  .alias("help", "h")
  .alias("version", "v")
  .strict().argv;
