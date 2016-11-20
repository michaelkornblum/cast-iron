# Setup
**Author's Note:** the following guide will get Cast-Iron up and running on official versions of Ubuntu Linux, and some of its distant cousins, namely Linux Mint, and (possibly) Elementary OS. It also works on other versions of Linux, but commands like ```apt install``` will need to be modified in order to install repository packages.

Cast-Iron also works with MacOS, prior to Sierra, however it requires the installation of XCode to compile some of the Gulp modules that are written in C++. At the time of this writing, Cast-Iron does not run in Windows.

## Install Node.js with NVM
This step is of particular importance because it provides the cleanest installation of Node.js. To install NVM, you must first install four package dependencies; ```git```, ```build-essential```, ```curl``` and ```libssl-dev```. From the command-line, enter:

```
$ sudo apt install git build-essential curl libssl-dev
```
You will be asked for your root password. Once it is provided, these package dependencies will be downloaded and installed. Once installation completes, enter the following:

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
```

Curl will download NVM into your home directory, and create a reference to it in your bash profile. Next, close your terminal window, and reopen it so the changes in your bash profile take effect.

Let's test NVM to see if it works. From the command-line enter:

```
$ nvm ls-remote
```
NVM will now pull down all the versions of Node.js that are available on github. To install a specific version of Node, enter the following:

```
$ nvm install <version number>
```

**Note:** It was noted in a recent version of the Linux Unplugged podcast that MacOS Sierra has issues with the curl command. There may be a workaround through the use of another bash command called wget. See [the NVM github docs](https://github.com/creationix/nvm) for details.

## Install Gulp 4
Cast-Iron uses Gulp 4 to manage most of its automated tasks. To install a commmand-line interface that works with the new version of Gulp, enter the following command:

```
$ npm install gulpjs/gulp-cli -g
```

**Note:** If you're using a prior version of Gulp, you will need to delete it in order to avoid some possible conflicts. See [this article](https://demisx.github.io/gulp4/2015/01/15/install-gulp4.html) for details.

## Clone Cast-Iron Rerpository  
From the command-line, enter:

```
$ git clone https://github.com/michaelkornblum/cast-iron.git
```

The Cast-Iron repository will be cloned into your directory of choice. From the terminal, move into the project's root directory for the next step and install the remaining dependencies.

```
$ cd <project root directory>
$ npm install
```

**Note:** Cast-Iron is a big project. A really big project. I mean ***HUGE!!!***  [Obligatory Donald Trump Joke] Seriously though, it has over forty npm package dependencies, so this final step will take some time to complete. Additionally you may see some warnings about some of these packages, particularly those that may be out of date. These warnings may seem ominous to the new user, but as I continue to update the npm packages, they will eventually go away. In the interim, they are not a cause for concern.

## First Run
From the command-line, enter:

```
$ gulp server
```

Cast-Iron will run some initial Gulp tasks, will start an instance of browser-sync and load an introductory page. It is now ready for use.

**Note:** Once you exit and reenter a terminal session in Ubuntu-based systems, you will need to reactivate the version of Node you installed via NVM. This is achieved by entering:

```
$ nvm use default
```

Alternately, you can copy the above command into the ``.bashrc`` file located in your home directory. This will load the installed version of Node into your current terminal session.
