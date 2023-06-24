const express = require('express');
const app = express();
const db = require('./src/models');
const foodRouter = require('./src/routes/food');
const medicalrecordRouter = require('./src/routes/medicalrecord');
const handle404Error = require('./src/error-handlers/404');
const handle500Error = require('./src/error-handlers/500');

app.use(express.json());
app.use('/food', foodRouter);
app.use('/medicalrecord', medicalrecordRouter);

app.use(handle404Error);
app.use(handle500Error);

const PORT = process.env.PORT || 3000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection successful.');
    startServer();
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

function startServer() {
  db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  });
}
