const sharp = require("sharp");
const format = require("date-fns/format");
const path = require("path");

const outputFile = "images/build/pictures";

const { random, getRandomId } = require("./getRandom");

function getFileWithExifInfo(fileBuffer, photoshoot) {
  const resultFileName = `${photoshoot.id}${getRandomId(6)}.jpg`;
  const randomPixel = () => random(0, 3);

  const dateAverage =
    (new Date(photoshoot.timeStart).valueOf() +
      new Date(photoshoot.timeEnd).valueOf()) /
    2;

  return sharp(fileBuffer)
    .extend({
      top: randomPixel(),
      right: randomPixel(),
      bottom: randomPixel(),
      left: randomPixel(),
      background: {
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255),
        alpha: 1,
      },
    })
    .withMetadata({
      exif: {
        IFD0: {
          DateTime: format(new Date(dateAverage), "yyyy:MM:dd HH:mm:ss"),
          ModifyDate: format(new Date(dateAverage), "yyyy:MM:dd HH:mm:ss"),
        },
        ExifIFD: {
          DateTimeOriginal: format(
            new Date(dateAverage),
            "yyyy:MM:dd HH:mm:ss"
          ),
          CreateDate: format(new Date(dateAverage), "yyyy:MM:dd HH:mm:ss"),
        },
      },
    })
    .toFile(path.join(process.cwd(), outputFile, resultFileName))
    .then((info) => {
      console.log("Picture created with photoshoot", photoshoot.id);

      return info;
    })
    .catch(console.error);
}

module.exports = getFileWithExifInfo;
