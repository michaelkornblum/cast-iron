/*jshint esversion: 6*/
import { src, dest } from 'gulp';
import { config } from './config';
import imagemin from 'gulp-imagemin';

export function images() {
  return src(config.images.src)
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
    }))
    .pipe(dest(config.images.dest));
}
