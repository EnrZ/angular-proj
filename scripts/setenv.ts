const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

if (!process.env.API_KEY) {
   console.error('environment variable not provided!');
   process.exit(-1);
}

const targetPath = isProduction
   ? `environment.prod.ts`
   : `environment.ts`

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   API_KEY: "${process.env.API_KEY}",
   ANOTHER_API_SECRET: "${process.env.ANOTHER_API_SECRET}"
};
`;



// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
   if (err) {
      console.log(err);
   }

   console.log(`Wrote variables to ${targetPath}`);
});