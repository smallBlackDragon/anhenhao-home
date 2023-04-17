module.exports = {
    apps: [
      {
        name: 'anhenhao-home',
        port: '80',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  