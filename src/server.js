const express = require('express');
const app = express();
const foodRouter = require('./routes/food');
const medicalrecordRouter = require('./routes/medicalrecord');
const handle404Error = require('./error-handlers/404');
const handle500Error = require('./error-handlers/500');

app.use(express.json());
app.use('/food', foodRouter);
app.use('/medicalrecord', medicalrecordRouter);


app.use(handle404Error);
app.use(handle500Error);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
