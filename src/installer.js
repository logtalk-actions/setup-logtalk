const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installLogtalk}

/**
 * Install Logtalk.
 *
 * @param {string} version
 */
async function installLogtalk(version) {
  if (process.platform == 'darwin') {
    await exec(path.join(__dirname, 'install-logtalk-darwin'), [version])
  } else if (process.platform == 'linux') {
    await exec(path.join(__dirname, 'install-logtalk-ubuntu'), [version])
  } else if (process.platform == 'win32') {
    await exec(path.join(__dirname, 'install-logtalk-windows'), [version])
  }
}
