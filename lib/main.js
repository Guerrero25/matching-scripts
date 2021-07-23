const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

/* Scripts */
const { createCalibrationImage } = require("../scripts/createCalibrationImage");
const { createMatchablePicture } = require("../scripts/createMatchablePicture");
const { createFolderStructure } = require("../scripts/createFolderStructure");

yargs(hideBin(process.argv))
  .scriptName("matching-scripts")
  .command(
    "calibrate",
    "Generate a calibration image with the current date-time",
    {},
    createCalibrationImage
  )
  .command(
    "match",
    "Generate new pictures which match with random photoshoots",
    {
      photoshoots: {
        alias: "p",
        default: "all",
        describe: "The list of photoshoot IDs separated by comma",
      },
    },
    createMatchablePicture
  )
  .command(
    "init",
    "Generate the folder structure to use the command line",
    {},
    createFolderStructure
  )
  .help()
  .alias("help", "h")
  .alias("version", "v")
  .strict().argv;
