/*jshint esversion: 6*/

export const config = {
  clean: {
    src: './build',
  },
  images: {
    src: './images/*',
    dest: './build/images',
    watchDir: './images/**/*',
  },
  metalsmith: {
    src: 'src/**/*',
    dest: './build',
    watchDir: [
      './src/**/*',
      './layouts/**/*',
    ],
  },
  scripts: {
    src: './scripts/main.js',
    dest: './build/scripts',
    watchDir: './scripts/**/*'
  },
  server: {
    src: './build',
    watchDir: './build/**/*'
  },
  styles: {
    src: './styles/main.styl',
    dest: './styles/**/*',
  },
  vectors: {
    src: './vectors/*.svg',
    dest: './layouts/partials',
    watchDir: './vectors/**/*'
  },
};
