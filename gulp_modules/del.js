/*jshint esversion: 6*/
import { config } from '../gulp-config';
import del from 'del';

export function clean() {
  return del(config.clean.src);
}
