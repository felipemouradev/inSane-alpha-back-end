const S               = require('string');
const fs              = require('fs');
const pathController  = 'app/controllers/';
const pathModel       = 'app/models/';
const pathRouter      = 'app/routers/';

const makeAsyncApi = async (args, callback) => {

  try {

    //terms
    let baseName = args.name;
    let entity = S(baseName).capitalize().s;

    let schema = args.schema === undefined ? "name: String" : args.schema;
    String.prototype.replaceAll = function (search, replacement) {
      let target = this;
      return target.split(search).join(replacement);
    };

    if (!fs.existsSync(pathController)) {
      fs.mkdirSync(pathController);
    }

    if (!fs.existsSync(pathModel)) {
      fs.mkdirSync(pathModel);
    }

    if (!fs.existsSync(pathRouter)) {
      fs.mkdirSync(pathRouter);
    }
    //generate controller

    let templateController = await fs.readFileSync('core/command/template_commands/template_controller');
    templateController = templateController.toString();
    templateController = templateController.replaceAll('[ENTITY_MIN]', baseName);
    templateController = templateController.replaceAll('[ENTITY]', entity);
    templateController = templateController.replaceAll('[CONTROLLER_NAME]', entity);


    await fs.writeFileSync(pathController + baseName + ".js", templateController);

    //generate model

    let templateModel = await fs.readFileSync('core/command/template_commands/template_model');
    templateModel = templateModel.toString();
    templateModel = templateModel.replaceAll('[MODEL]', entity);
    templateModel = templateModel.replaceAll('[SCHEMA]', schema);

    await fs.writeFileSync(pathModel + baseName + ".js", templateModel);

    //generate route

    let templateRoute = await fs.readFileSync('core/command/template_commands/template_router');
    templateRoute = templateRoute.toString();
    templateRoute = templateRoute.replaceAll('[ENTITY]', entity);
    templateRoute = templateRoute.replaceAll('[ENTITY_MIN]', baseName);

    await fs.writeFileSync(pathRouter + '/router-' + baseName + ".js", templateRoute);

    console.log('Command executed with success!');
    callback();
    return;
  } catch (e) {
    console.warn("ERROR: ", e);
    callback();
    return;
  }
};

module.exports = makeAsyncApi;
