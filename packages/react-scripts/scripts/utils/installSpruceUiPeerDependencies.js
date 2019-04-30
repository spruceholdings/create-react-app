const spawn = require('react-dev-utils/crossSpawn');

function installSpruceUiPeerDependencies(useYarn, verbose) {
  if (useYarn) {
    console.error('yarn is not supported in Spruce UI install');
    return 601;//useYarn is not supported
  }
  let command = 'npm';
  let args = ['view', 'ui-toolkit', 'peerDependencies', '-json', verbose && '--verbose'].filter(e => e);

  console.log(`Installing UI Toolkit peer dependencies using ${command}...`);
  console.log();

  let proc = spawn.sync(command, args, { stdio: 'pipe' });
  if (proc.status !== 0) {
    console.error(`\`${command} ${args.join(' ')}\` failed`);
    return proc.status;
  }

  const peerDependencies = proc.stdout.toString();
  const peerDependenciesObject = JSON.parse(peerDependencies);
  const peerDependenciesList = Object.entries(peerDependenciesObject).map(pd => `${pd[0]}@${pd[1]}`);
  // console.log(peerDependencies);
  // console.log(peerDependenciesList);

  args = ['install', '--save', verbose && '--verbose'].filter(e => e).concat(peerDependenciesList);

  proc = spawn.sync(command, args, { stdio: 'inherit' });
  if (proc.status !== 0) {
    console.error(`\`${command} ${args.join(' ')}\` failed`);
    return proc.status;
  }

  return undefined;
}

module.exports = installSpruceUiPeerDependencies;