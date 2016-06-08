var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'osx', 'NpmPackageMaint.app', 'Contents', 'MacOS', 'NpmPackageMaint');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'linux', 'NpmPackageMaint');
      default:
        throw 'Unsupported platform';
    }
  }
};
