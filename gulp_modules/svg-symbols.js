/*jshint esversion: 6*/
import { src, dest } from 'gulp';
import { config } from './config';
import _g from 'gulp-load-plugins';

export function vectors() {
  return src(config.vectors.src)
    .pipe(_g().svgmin())
    .pipe(_g().svgSymbols({
      templates: ['default-svg'],
    }))
    .pipe(dest(config.vectors.dest));
}
