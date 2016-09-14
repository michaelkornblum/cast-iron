/*jshint esversion: 6*/

// Import Gulp functions
import { task, series, parallel, watch} from 'gulp';

// Import Gulp tasks
import { clean } from './gulp_modules/del';
import { images } from './gulp_modules/imagemin';
import { html } from './gulp_modules/metalsmith';
import { scripts } from './gulp_modules/webpack';
import { server } from './gulp_modules/browser-sync';
import { styles } from './gulp_modules/stylus';
import { vectors } from './gulp_modules/svg-symbols';

// Clean out build director
task(clean);

// Run default build task from command-line
task('build', series(clean, html, parallel(scripts, styles, vectors)));

// Start Gulp server from command-line
task('serve', series('build', server));
