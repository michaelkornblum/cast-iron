---
title: Docs
layout: default.pug
---

# Documentation

## System Requirements

### Operating System
At the time of this writing, Clockwork is only supported on the latest version of **Ubuntu Linux** and **Mac OSX**.

### Git
Clockwork uses Git to download a new project onto your local development machine, and is also used to download the newest version of Gulp, which at the time of this writing is in its beta stage of development. For Ubuntu users installing Git is easy. Just run `sudo apt-get install git` from the command-line. For Mac users, Git comes preinstalled with their operating system.

### NodeJS 6.5.0 (or above) with NPM
Clockwork makes extensive use of packages written for NodeJS. For best results, install NodeJS using NVM, the node version manager. Directions on intalling NVM for Linux and Mac OSX can be found [here](https://github.com/creationix/nvm).

### C++ Compiler
Some of the plugins that are used by Gulp requires C++ compilation in order to work. For Ubuntu users install the `build-essential` and `libssl-dev` packages. For Mac OSX install XCode from the Apple App Store.


### Gulp 4.0 (or above)
Clockwork is run by issuing commands through the Gulp command-line interface(CLI). Once NodeJS is installed, it is possible to install the Gulp CLI by entering: `npm install -g gulp-cli` This command is valid for Linux and Mac OSX.

## Installation Guide

### 1. Clone Git Repo
From the command-line enter:

	$ git clone https://github.com/michaelkornblum/clockwork.git

Clockwork will be pulled down from its Github repository into your local machine.

### 2. Install Node Packages
Next enter:

	$ cd clockwork && npm install


Your command-line will move into the `clockwork` root directory and its remaining dependencies will be downloaded and installed via Node Package Manager(npm).

#### Notes
Clockwork uses forty-three seperate Node Packages in order to work its magic. Some of these Packages also have dependencies of their own. Depending on your PC hardware and Internet connection the download and intallation of these Node Packages may take a while.

During the course of this step, you may see a lot of warnings about deprecated packages. Don't worry about them. These warnings come from the upstream packages that are used by Clockwork, as well as many other Gulp configurations. Once these packages update, they will be incorporated back into the Clockwork codebase. These warnings will eventually go away.

### 3. First Run
Finally, enter:

	$ gulp serve

Clockwork will run through a series of build tasks. The final task will open your browser of choice to display the Clockwork welcome page.

## Files and Directories Overview

### gulp_modules
The `gulp_modules` directory is where all of the Gulp tasks that are used by ClockworkJS is stored. Additionally, this directory contains the `config.js` file which is used to configure the source and destination files for all of the Gulp tasks, as well as their watch directories.

### images
The `images` directory is where you will place all the raster images (png, jpg, jpeg, gif) for minification during build time.

### layouts
The `layouts` directory is where all the structural templates used by ClockworkJS are stored. Structural templates are written in the [Pug](https://pugjs.org) templating language, which is then combined with site content and metadata to create a finished static website.

The `layouts` directory contains three child directories; `templates`, `mixins` and `partials`. `templates` is used to contain reusable full page layouts. `mixins` is used to contain elements that are used multiple times throughout a single HTML document, and `partials` is reserved for elements that are present in every page of the website. `layouts` also contains a single child template named `default.pug` which pulls files from the three child directories to build a finished HTML document.

**Note:** To make the Pug templating language even more powerful, the Clockwork's implementation also makes use of the [underscore.string](https://epeli.github.io/underscore.string/), [lodash](https://lodash.com/) and [moment.js](http://momentjs.com/) JavaScript libraries.

### scripts
The `scripts` directory is where all client-side JavaScript files are stored. `scripts` contains one 'main.js' file which can be used to transpile and import ES6 or CoffeeScript modules into a project using Webpack.

### src
The `src` directory is where website content is stored. Content is written in [markdown](https://daringfireball.net/projects/markdown/) with YAML front-matter. They are then combined with the files in `layouts` by Metalsmith to create a finished static website.

`src` also has two child directories, `content` and `data`. `data` is reserved for metadata that is present thoughout a project. Examples include a website's title, author and navigation links. `content` is used when a post is written in Pug to embed longer pieces of text.

### styles
The `styles` directory contains files written in [Stylus](http://stylus-lang.com/) which are transpiled by Gulp into minified CSS.

**Note:** To make stylus more powerful, the [nib](), [rupture](), [typographic]() and [poststylus](https://www.npmjs.com/package/poststylus) plugins are active in Clockwork by default. Additionally, Clockwork makes use of the [autoprefixer](), [rucksack-css](), and [lost]() plugins for PostCSS.

### vectors
The `vectors` directory is used for converting single vector images into an `svg-symols.svg` file which is used to embed iconography into an HTML document. Files placed in `vectors` are compiled and sent to the `layouts/partials` directory of Clockwork where they can be used in templates.

## Working with Gulp
Gulp 4.0 brings a lot of new and exciting features to the already popular streaming build system. Some of these features include support for regular JavaScript functions and enhanced support for ES6 modules. Both of these features are very useful when creating a Gulp file that is modular and maintainable. To demonstrate, look at the example below.

```js
#gulpfile.babel.js

//import vendor modules
import { task, series, parallel, watch } from 'gulp';
import { reload } from 'browser-sync';


```

The first line imports the **task**, **series**, **parallel** and **watch** modules from Gulp. By selectively importing modules instead of importing the entire Gulp package subsequent lines of code become lighter, and code runs a little faster. This pattern is repeated with the **reload** module from browser-sync.

