const S   = require('string');
const fs  = require('fs');

const makeAsyncModel = async (args) => {
  try {
    //terms
    let baseName = args.name;
    let entity = S(baseName).capitalize().s;
    let schema = args.schema === undefined ? "name: String" : args.schema;

    //generate model template

    let templateModel = await fs.readFileSync('core/command/template_commands/template_model');
    templateModel = templateModel.toString();
    templateModel = templateModel.replaceAll('[MODEL]', entity);
    templateModel = templateModel.replaceAll('[SCHEMA]', schema);

    await fs.writeFileSync('app/models/' + baseName + ".js", templateModel);
    console.log('Command executed with success!');
    return;
  } catch (e) {
    console.warn("ERROR:", e);
    return;
  }
};
module.exports = makeAsyncModel;
