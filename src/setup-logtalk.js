const core = require('@actions/core')
const {installLogtalk} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const logtalkSpec = core.getInput('logtalk-version', {required: true})

  console.log(`##[group]Installing Logtalk ${logtalkSpec}`)
  await installLogtalk(logtalkSpec)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform == 'win32')
    throw new Error(
      '@logtalk-actions/setup-logtalk does not support Windows at this time'
    )
}
