/*jshint esversion: 6*/
import { config } from './config';
import del from 'del';

export function clean() {
  return del(config.clean.src);
}
