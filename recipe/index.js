'use strict';

const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminpng = require('imagemin-pngquant');

imagemin(['x/*.png'], 'out/', {use: [imageminpng()]}).then((e) => {
    console.log('Images optimized', e);
})
.catch((e) => console.error(e));