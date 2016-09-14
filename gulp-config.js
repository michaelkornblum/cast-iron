/*jshint esversion: 6*/

export const config = {
  clean: {
    src: './build',
  },
  images: {
    src: './images/*',
    dest: './build/images',
  },
  html: {
    src: 'src/**/*',
    dest: './build',
  },
  scripts: {
    src: './scripts/main.js',
    dest: './build/scripts',
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
};

export const watchDir = {
  html: ['./src/**/*', './layouts/**/*'],
  images: './images/**/*',
  scripts: './scripts/**/*',
  server: './build/**/*',
  styles: './styles/**/*',
  vectors: './vectors',
}
