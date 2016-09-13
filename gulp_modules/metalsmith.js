/*jshint esversion: 6*/
import { src, dest } from 'gulp';
import { config } from '../gulp-config';
import metalsmith from 'gulp-metalsmith';
import _m from 'load-metalsmith-plugins';
import _s from 'underscore.string';
import __ from 'lodash';
import moment from 'moment';

export function html() {
  return src(config.metalsmith.src)
    .pipe(metalsmith({
      use: [
        _m().metadata({
          site: 'data/site.json',
        }),
        _m().markdown({
          gfm: true,
        }),
        _m().inPlace({
          engine: 'pug',
          __,
          _s,
          moment,
          rename: true,
          pretty: true,
          basedir: __dirname + '/src/content/',
        }),
        _m().collections({
          posts: {
            pattern: 'posts/**/*.html',
            sortBy: 'date',
            reverse: true,
          },
          pages: {
            pattern: '!posts/**/*.html',
          },
        }),
        _m().permalinks({
          linksets: [
            {
              match: { collection: 'posts' },
              pattern: 'posts/:date/:title',
              relative: false,
            },
            {
              match: { collection: true },
              pattern: ':title',
              relative: false,
            },
          ],
        }),
        _m().layouts({
          engine: 'pug',
          default: 'default.pug',
          __,
          _s,
          moment,
          pretty: false,
        }),
      ],
    }))
    .pipe(dest(config.metalsmith.dest));
}
