/*jshint esversion: 6*/

// Import vendor modules
import { task, series, parallel, watch } from 'gulp';
import { reload } from 'browser-sync';

// Import configuration file
import { watchDir } from './gulp_modules/config';

// Import Gulp tasks
import { clean } from './gulp_modules/del';
import { images } from './gulp_modules/imagemin';
import { html } from './gulp_modules/metalsmith';
import { scripts } from './gulp_modules/webpack';
import { server } from './gulp_modules/browser-sync';
import { styles } from './gulp_modules/stylus';
import { vectors } from './gulp_modules/svg-symbols';

// Watch task
function watcher(cb) {
  watch(watchDir.html, html);
  watch(watchDir.images, images);
  watch(watchDir.scripts, scripts);
  watch(watchDir.styles, styles);
  watch(watchDir.vectors, vectors);
  watch(watchDir.server).on('change', reload);
  cb();
}

// Clean build directory from command-line
task(clean);

// Run default build task from command-line
task('build', series(clean, vectors, html, parallel(scripts, styles)));

// Start Gulp server from command-line
task('serve', series('build', parallel(watcher, server)));
