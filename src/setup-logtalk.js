const core = require('@actions/core')
const {installLogtalk} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const version      = core.getInput('logtalk-version', {required: true})
  const dependencies = core.getInput('logtalk-tool-dependencies', {required: false})

  console.log(`##[group]Installing Logtalk ${version}`)
  await installLogtalk(version,dependencies)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform == 'win32')
    throw new Error(
      '@logtalk-actions/setup-logtalk does not support Windows at this time'
    )
}
