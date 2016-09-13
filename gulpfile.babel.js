/*jshint esversion: 6*/
import { task } from 'gulp';
import { clean } from './gulp_modules/del';
import { images } from './gulp_modules/imagemin';
import { html } from './gulp_modules/metalsmith';
import { server } from './gulp_modules/browser-sync';
import { styles } from './gulp_modules/stylus';
import { vectors } from './gulp_modules/svg-symbols';

task(clean);
task(images);
task(html);
task(server);
task(styles);
task(vectors);
