const S   = require('string');
const fs  = require('fs');
const path = 'app/services/';

const makeAsyncService = async (args) => {

  try {
    let baseName = args.name;
    let service_name = S(baseName).capitalize().s;

    String.prototype.replaceAll = function(search, replacement) {
      let target = this;
      return target.split(search).join(replacement);
    };

    //generate service template

    let templateService = await fs.readFileSync('core/command/template_commands/template_service');
    templateService = templateService.toString();
    templateService = templateService.replaceAll('[SERVICE_NAME]', service_name);

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }

    await fs.writeFileSync(path + baseName + ".js", templateService);

    console.log('Command executed with success!');
    return;

  } catch (e) {
    console.warn("ERROR:", e);
    return;
  }

};
module.exports = makeAsyncService;
