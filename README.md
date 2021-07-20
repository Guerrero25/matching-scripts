# Smiler Scripts

An Node CLI for the creation of necessary assets on the Smiler testing process.

# Getting started

## Installation

Install with Yarn

`$ yarn global add @elemento43/smiler-scripts`

Install with npm

`$ npm i -g @elemento43/smiler-scripts`

## Folder structure

smiler-scrips requires a specific folders to work.

> images/
>
> > base/
> >
> > > calibration.jpg
> > >
> > > pictures/
> >
> > models/
> >
> > > photoshoots.json

**images**: Contains all the pictures related assets. The generated photos will be placed here inside a `build` folder.

**images/base**: Contains all the images that will be used for generating the pictures

**images/base/calibration.jpg**: Is the picture that will be used for generating the calibration picture

**images/base/pictures**: Must contain all the pictures that can be used to generate new matched ones.

**images/build**: Contains all the generated pictures. The ones not related to calibration process will be placed inside a `pictures` folder.

**models/photoshoot.json**: An array with all the photoshoots that can be used for matching pictures.

## Commands

### calibrate

Generate a calibration image with the current date-time. The result will be placed on `/pictures/build/calibration.jpg`

**Use**: `smiler-scripts calibrate`

### match

Generate new pictures which match with random photoshoots. The results will be placed on `/pictures/build/pictures`.

The name of the generated images will be a combination of the photoshoot id and a 6-length random characters.

**Use**: `smiler-scripts match`

## Contributing

All the critics and help are welcome, please be free of create a new MR.
