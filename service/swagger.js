import fs from 'fs';
import swaggerAutogen from 'swagger-autogen';

const { description, version } = JSON.parse(fs.readFileSync('./package.json'));

const ROOT = './routes';

const doc = {
  info: {
    description,
    version,
  },
};

const outputFile = './swagger.json';
const endpointsFiles = ['./index.js', `${ROOT}/users.js`];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc).then(
  async () => await import('./index.js')
);
