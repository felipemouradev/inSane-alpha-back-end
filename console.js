const vorpal = require('vorpal')();
const _ = require('lodash');
const _eval = require('eval');
let commands = require('./core/command/commands.json');

_.map(commands.commands, (command, i) => {
    vorpal
        .command(Object.keys(command), Object.values(command)[0].info)
        .action((args, callback) => {
            eval(Object.values(command)[0].callback);
            callback();
        });
});

vorpal.log('Welcome inSane-alpha console to show options insert --help and press enter!');

vorpal
    .delimiter('insane$')
    .show();