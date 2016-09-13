/*jshint esversion: 6*/

export const config = {
  clean: {
    src: './build',
  },
  images: {
    src: './images/*',
    dest: './build/images',
  },
  metalsmith: {
    src: 'src/**/*',
    dest: './build',
  },
  server: {
    src: './build',
  },
  styles: {
    src: './styles/main.styl',
    dest: './build/styles',
  },
  vectors: {
    src: './vectors/*.svg',
    dest: './layouts/partials',
  },
  scripts: {
    src: './scripts/main.js',
    dest: './build/scripts',
  },
};
