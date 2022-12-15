const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const router = require('./api/routes/index');
const dotenv = require('dotenv');
const {sequelize} = require('./models/index.js');
const addMocks = require('./api/utils/mocks')

dotenv.config();

app.set('port', process.env.PORT || 3000);

sequelize.sync({ force: false }) 
  .then(() => {
    console.log('db connected!');
  })
  .catch((err) => {
    console.error(err);
  })

app.use(cors({
    withCredentials: true,
  }));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(morgan('dev')); 
app.use('/', router);
  
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
  
app.listen(app.get('port'), () => {
    console.log(
        `Listening http://localhost:${app.get('port')} in ${app.get('env')} mode!!!`);
});

addMocks(); 