var path = require('path');
var exec = require('child_process').exec;

var glob = require('glob');
var constants = require('./util/constants');
var pathToBundleTests = path.join(constants.pathToJasmineTests, '..', 'bundle_tests');


glob(pathToBundleTests + '/*.js', function(err, files) {
    files.forEach(function(file) {
        var baseName = path.basename(file);
        var cmd = 'npm run citest-jasmine -- bundle_tests/' + baseName;

        exec(cmd, function(err, stdout) {
            console.log(stdout);

            if(err) throw err;
        });
    });
});
