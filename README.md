# Matching scripts

![npm bundle size](https://img.shields.io/bundlephobia/min/@guerrero7/matching-scripts?style=flat-square)
![npm](https://img.shields.io/npm/dw/@guerrero7/matching-scripts?style=flat-square)
![npm](https://img.shields.io/npm/v/@guerrero7/matching-scripts?style=flat-square)

A NodeJS CLI for creating JPG files with specific EXIF information that speeds up the testing process on uploading flow.

# Getting started

## Requirements

- Node JS >= v14.15.1

- NPM >= v6.14.8 or Yarn v1.22.5

## Installation

Install with Yarn

`$ yarn global add @guerrero7/matching-scripts`

Install with npm

`$ npm i -g @guerrero7/matching-scripts`

## Commands

### init

Generate the necessary folder structure to use the CLI.

**Use**: `matching-scripts init`

### calibrate

Generate a calibration image with the current date-time. The result will be placed on `/pictures/build/calibration.jpg`

**Use**: `matching-scripts calibrate`

### match

Generate new pictures which match with random photoshoots. The results will be placed on `/pictures/build/pictures`.

The name of the generated images will be a combination of the photoshoot id and a 6-length random characters.

**Option**: `--photoshoots, -p` The list of photoshoot IDs for matching with the pictures.

**Use**: `matching-scripts match`

## Folder structure

smiler-scrips requires a specific folders to work.

> images/
>
> > base/
> >
> > > calibration.jpg
> >
> > pictures/
>
> models/
>
> > photoshoots.json

**images**: Contains all the pictures related assets. The generated photos will be placed here inside a `build` folder.

**images/base**: Contains all the images that will be used for generating the pictures

**images/base/calibration_image_base.jpg**: Is the picture that will be used for generating the calibration picture

**images/base/pictures**: Must contain all the pictures that can be used to generate new matched ones.

**images/build**: Contains all the generated pictures. The ones not related to calibration process will be placed inside a `pictures` folder.

**models/photoshoot.json**: An array with all the photoshoots that can be used for matching pictures.

## Contributing

All the critics and help are welcome, be free to create a new [pull request](https://github.com/Guerrero25/matching-scripts/pulls).
