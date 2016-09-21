/*jshint esversion: 6*/
import { config } from './config';
import { create, init, reload } from 'browser-sync';

export function server(cb) {
  create();
  init({
    server: {
      baseDir: config.server.src,
    },
  });
  cb();
}
