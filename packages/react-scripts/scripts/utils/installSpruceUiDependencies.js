const spawn = require('react-dev-utils/crossSpawn');

function installSpruceUiDependencies(useYarn, verbose) {

  let command;
  let args;

  if (useYarn) {
    command = 'yarnpkg';
    args = ['add'];
  } else {
    command = 'npm';
    args = ['install', '--save', verbose && '--verbose'].filter(e => e);
  }
  args.push('enzyme', 'mobx', 'mobx-react', 'prettier', 'ui-toolkit');

  console.log(`Installing Spruce UI dependencies using ${command}...`);
  console.log();

  const proc = spawn.sync(command, args, { stdio: 'inherit' });
  if (proc.status !== 0) {
    console.error(`\`${command} ${args.join(' ')}\` failed`);
  }
  return proc.status;
}

module.exports = installSpruceUiDependencies;