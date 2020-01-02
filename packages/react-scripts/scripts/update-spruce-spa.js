'use strict';

const fs = require('fs-extra');
const path = require('path');
const paths = require('../config/paths');
const installSpruceSpaDependencies = require('./utils/installSpruceSpaDependencies');
const useYarn = fs.existsSync(path.join(paths.appPath, 'yarn.lock'));
const verbose = false; // pull verbose from command line params
installSpruceSpaDependencies(useYarn, verbose);
