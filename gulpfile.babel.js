/*jshint esversion: 6*/

// Import vendor modules
import { task, series, parallel, watch} from 'gulp';
import { reload } from 'browser-sync';
<<<<<<< HEAD
=======

// Import configuration file
import { config } from './gulp-config';
>>>>>>> 61ac99061045a57cfda72a7a36c6f24e762a1551

// Import Gulp tasks
import { clean } from './gulp_modules/del';
import { images } from './gulp_modules/imagemin';
import { html } from './gulp_modules/metalsmith';
import { scripts } from './gulp_modules/webpack';
import { server } from './gulp_modules/browser-sync';
import { styles } from './gulp_modules/stylus';
import { vectors } from './gulp_modules/svg-symbols';
import { watchDir } from './gulp-config';

function watcher() {
  watch(watchDir.html, html);
  watch(watchDir.images, html);
  watch(watchDir.scripts, scripts);
  watch(watchDir.styles, styles);
  watch(watchDir.vectors, vectors);
}

// Set watch list
task('watcher', () => {
  watch(config.images.watchDir, images);
  watch(config.html.watchDir, html);
  watch(config.scripts.watchDir, scripts);
  watch(config.server.watchDir, reload);
  watch(config.styles.watchDir, styles);
  watch(config.vectors.watchDir, vectors);
});

// Clean build directory from command-line
task(clean);

// Run default build task from command-line
task('build', series(clean, html, parallel(scripts, styles, vectors)));

// Start Gulp server from command-line
<<<<<<< HEAD
task('serve', series('build', parallel(watcher, server)));
=======
task('serve', series('build', server, 'watcher'));
>>>>>>> 61ac99061045a57cfda72a7a36c6f24e762a1551
