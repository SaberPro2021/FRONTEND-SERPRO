module.exports = {
  apps : [{
    name: 'FRONT',
    script: 'node_modules/@angular/cli/bin/ng',
    args : 'serve --port=8082 --host 127.0.0.1',
    watch: true,
  }]
};
