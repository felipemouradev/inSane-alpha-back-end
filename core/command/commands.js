
//Generator commands;

const vorpal = require('vorpal')();
const fs = require('fs');
const commandCreate = async (args) => {
    const initalFile = require('./commands.json');
    try {
        let file = initalFile;
        let commandName = "make:" + args.name + " " + (args.args === undefined ? "" : args.args);
        let commandInfo = (args.info === undefined ? "Command for "+args.name : args.info);
        let commandRequest = {
            [commandName]: {
                info: commandInfo,
                callback: "require('./commands/" + args.name + ")(args)"
            }
        };
        file.commands.push(commandRequest);
        let parsedFile = JSON.stringify(file);
        let err = await fs.writeFileSync("core/command/commands.json", parsedFile);
        if (err !== undefined) {
            console.warn("ERROR: ", err);
            return;
        }
        console.log("Command executed with success!");
        return "Command executed with success!";
    } catch (e) {
        console.warn("ERROR: ", e);
        await fs.writeFileSync("core/command/commands.json", JSON.stringify(initalFile));
        return;
    }
};
module.exports = commandCreate;