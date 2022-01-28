import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import swaggerUi from 'swagger-ui-express';
import { users } from './routes/users.js';

const PORT = process.env.PORT;

const swaggerFile = JSON.parse(fs.readFileSync('./swagger.json'));

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/health', function (req, res) {
  console.dir(app.locals.title);
  res.send({
    status: 'ok',
  });
});

users(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
