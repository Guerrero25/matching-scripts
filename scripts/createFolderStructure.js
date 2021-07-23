const { mkdir, copyFile } = require("fs/promises");
const path = require("path");

const { imageDirection } = require("./createCalibrationImage");

const imageBaseDir = "images/base/pictures";
const imageBuildDir = "images/build/pictures";
const modelsDir = "models";

const templateCalibrationImageDir = "templates/picture.jpg";
const templatePhotoshootsModelsDir = "templates/photoshoots.json";

const modelPhotoshootDir = "models/photoshoots.json";

const currentWorkingDir = process.cwd();

exports.createFolderStructure = () => {
  console.log("Creating folder structure...");

  Promise.all([
    mkdir(path.join(currentWorkingDir, imageBaseDir), { recursive: true }),
    mkdir(path.join(currentWorkingDir, imageBuildDir), { recursive: true }),
    mkdir(path.join(currentWorkingDir, modelsDir), { recursive: true }),
  ])
    .then(() =>
      Promise.all([
        copyFile(
          path.join(__dirname, "..", templateCalibrationImageDir),
          path.join(currentWorkingDir, imageDirection)
        ),
        copyFile(
          path.join(__dirname, "..", templatePhotoshootsModelsDir),
          path.join(currentWorkingDir, modelPhotoshootDir)
        ),
      ])
    )
    .then(() => {
      console.log("All done!");
    })
    .catch(console.error);
};
