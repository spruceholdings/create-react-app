'use strict';

const installSpruceSpaDependencies = require('./utils/installSpruceSpaDependencies');
const useYarn = fs.existsSync(path.join(appPath, 'yarn.lock'));
const verbose = false; // pull verbose from command line params
installSpruceSpaDependencies(useYarn, verbose);
