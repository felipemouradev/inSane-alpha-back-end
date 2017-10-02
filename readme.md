# inSane Backend
Framework nodeJs ( >=node v7), based on async / await and es6, this framework uses mongoose as odm, with inSane it will be possible to create applications with modern concepts and code generation.

This framework is using gulp, so to start your project run gulp.

***Install***

 - clone this repo
 - npm install
 - gulp

Enjoy!

***Commands***

For execute commads inSane run node console.js:

 - `make:command <name> [args]`
	 - Generate command, args is optional, example: `make:command bunda <temPelo> <cor>`
 - `make:api <entity> [fields]`
	 - Generate crud rest using async / await, this generete controller, route, model, fields is optional if you not passing for default is apply 'name:String', example: `make:api bunda nomeDoFula:String,temPelo:Boolean,cor:String`
 - `make:model <entity> [fields]`
	 - Generate model, fields is optional if you not passing for default is apply 'name:String', example: `make:model bunda nomeDoFula:String,temPelo:Boolean,cor:String`
 - `make:service <entity>`
   - Generate service, example: `make:service bunda`





**TODO**:

 1. ~~Removes sample codes~~
 2. ~~Implements generate API codes, make:API~~
 3. Implements make:auth
 4. ~~Implements  make:controller~~
 5. ~~Implements make:model~~
 6. Implements architecture for sending emails
 7. Implements architecture for auth
 8. Study feasibility of designing documentation when a new endpoint API is generated
 9. Write case tests
 10. Write docs
