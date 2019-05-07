const spawn = require('react-dev-utils/crossSpawn');
const spruceSpaDependencies = [
  '@types/enzyme',
  '@types/react-test-renderer',
  'enzyme',
  'enzyme-adapter-react-16',
  'jest-enzyme',
  'mobx',
  'mobx-react',
  'node-sass',
  'prettier',
  'react-test-renderer',
  'ui-toolkit'
];
const getSpruceSpaPeerDependencies = require('./getSpruceSpaPeerDependencies.js');

function installSpruceSpaDependencies(useYarn, verbose) {

  console.log(`Creating Spruce SPA dependencies list...`);
  console.log();

  let command;
  let args;

  if (useYarn) {
    command = 'yarnpkg';
    args = ['add'];
  } else {
    command = 'npm';
    args = ['install', '--save', verbose && '--verbose'].filter(e => e);
  }
  args = args.concat(spruceSpaDependencies);

  const spruceSpaPeerDependenciesStatusOrArray = getSpruceSpaPeerDependencies(useYarn, verbose);

  if (Array.isArray(spruceSpaPeerDependenciesStatusOrArray)) {
    args = args.concat(spruceSpaPeerDependenciesStatusOrArray);
  } else {
    return spruceSpaPeerDependenciesStatusOrArray;
  }

  console.log(`Installing Spruce SPA dependencies using ${command}...`);
  console.log();

  const proc = spawn.sync(command, args, { stdio: 'inherit' });
  if (proc.status !== 0) {
    console.error(`\`${command} ${args.join(' ')}\` failed`);
  }
  return proc.status;
}

module.exports = installSpruceSpaDependencies;