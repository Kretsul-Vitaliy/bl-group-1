const express = require('express');
const dotenv = require('dotenv');
// SET ENV VARIABLES
const path = require('path');
const envPath = path.resolve(__dirname, 'config', '.env');

dotenv.config({ path: envPath });

const booksRoutes = require('./routes/booksRoutes');
const usersRoutes = require('./routes/usersRoutes');
const connectDB = require('./config/db');

const app = express();
// json-body parser
app.use(express.json());
// Подключаем обработку форм
app.use(express.urlencoded({ extended: false }));
// Монтирование роутов
app.use('/api/v1/books', booksRoutes);
app.use('/', usersRoutes);

// app.use((req, res, next) => {
//   res.status(404).json({
//     message: 'Не найден роут',
//   });
//   //   next();
// });
// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: err.message,
//   });
// });
const errorHandler = require('./middlewares/errorHandler');

app.use(errorHandler);
const start = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () =>
      console.log(`Все четко  порт  ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error.message);
    process.exit(100);
  }
};
start();
