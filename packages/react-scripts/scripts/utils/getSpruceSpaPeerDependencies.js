const spawn = require('react-dev-utils/crossSpawn');

function getSpruceSpaPeerDependencies(useYarn, verbose) {
  if (useYarn) {
    console.error('yarn is not supported in Spruce SPA install');
    return 601;//useYarn is not supported
  }
  let command = 'npm';
  let args = ['view', 'ui-toolkit', 'peerDependencies', '-json', verbose && '--verbose'].filter(e => e);

  let proc = spawn.sync(command, args, { stdio: 'pipe' });
  if (proc.status !== 0) {
    console.error(`\`${command} ${args.join(' ')}\` failed`);
    return proc.status;
  }

  const peerDependencies = proc.stdout.toString();
  const peerDependenciesObject = JSON.parse(peerDependencies);
  return Object.entries(peerDependenciesObject).map(pd => `${pd[0]}@${pd[1]}`);
}

module.exports = getSpruceSpaPeerDependencies;