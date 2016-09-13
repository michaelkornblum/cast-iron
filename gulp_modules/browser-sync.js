/*jshint esversion: 6*/
import { config } from '../gulp-config';
import { create, init } from 'browser-sync';

export function server() {
  create();
  init({
    server: {
      baseDir: config.server.src,
    },
  });
}
