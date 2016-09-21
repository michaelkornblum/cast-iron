/*jshint esversion: 6*/
import { src, dest } from 'gulp';
import { config } from './config';
import metalsmith from 'gulp-metalsmith';
import _m from 'load-metalsmith-plugins';
import _s from 'underscore.string';
import __ from 'lodash';
import moment from 'moment';

export function html() {
  return src(config.html.src)
    .pipe(metalsmith({
      use: [
        _m().metadata({
          site: 'data/site.json',
        }),
        _m().markdownit({
          html: true,
          linkify: true,
          typographer: true,
        }),
        _m().ignore('content/*'),
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
          pretty: true,
        }),
      ],
    }))
    .pipe(dest(config.html.dest));
}
