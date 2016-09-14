/*jshint esversion: 6*/
import { config, watchDir } from '../gulp-config';
import { create, init, reload } from 'browser-sync';
import { watch } from 'gulp';

export function server(cb) {
  create();
  init({
    server: {
      baseDir: config.server.src,
    },
  });
  watch(watchDir.server).on('change', reload);
}
