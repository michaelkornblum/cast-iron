import { src, dest } from 'gulp';
import { config } from './config';
import webpack from 'webpack-stream';

export function scripts(cb) {
  return src(config.scripts.src)
  .pipe(webpack(require('../webpack.config.js')))
  .pipe(dest(config.scripts.dest));
}
