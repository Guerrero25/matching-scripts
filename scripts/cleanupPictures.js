const { readdir, unlink } = require("fs/promises");
const path = require("path");

const imageBuildDirection = "images/build/pictures";

exports.cleanupPictures = () => {
  readdir(path.join(process.cwd(), imageBuildDirection))
    .then((files) => {
      console.log("Removing pictures...");

      return Promise.all(
        files.map((fileName) => {
          return unlink(path.join(process.cwd(), imageBuildDirection, fileName))
            .then(() => {
              console.log("Picture removed", fileName);
            })
            .catch(console.error);
        })
      );
    })
    .then(() => {
      console.log("Completed");
    })
    .catch(console.error);
};
