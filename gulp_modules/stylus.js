/*jshint esversion: 6*/
import { src, dest } from 'gulp';
import { config } from './config';
import _g from 'gulp-load-plugins';

// stylus plugins
import nib from 'nib';
import typographic from 'typographic';
import rupture from 'rupture';
import poststylus from 'poststylus';

export function styles() {
  return src(config.styles.src)
    .pipe(_g().stylus({
      use: [
        nib(),
        rupture(),
        typographic(),
        poststylus(
          [
            'lost',
            'autoprefixer',
            'rucksack-css',
          ]
        ),
      ],
    }))
    .pipe(_g().csso())
    .pipe(dest(config.styles.dest));
}
