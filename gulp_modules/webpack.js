import { src, dest } from 'gulp';
import { config } from '../gulp-config';
import webpack from 'webpack-stream';

export function scripts(cb) {
  webpack(require('../webpack.config.js'));
  cb();
}
