#! /usr/bin/env node
const os = require('os');
const execSync = require('child_process').execSync;

function buildTDModule (args) {
    if (os.platform().startsWith('win')) {
        console.log('Building testdata module on Windows platform.');
        execSync('gradlew testdata:createTestDataJar', { encoding: 'utf-8' });
    } else {
        console.log('Building testdata module on non-windows platform.');
        execSync('./gradlew testdata:createTestDataJar', { encoding: 'utf-8' });
    }
}

buildTDModule();