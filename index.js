const express = require('express');
const { sequelize } = require('./src/models');
const routes = require('./src/routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  console.log('Database is synchronized');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
