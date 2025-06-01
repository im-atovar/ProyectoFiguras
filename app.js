import express from 'express';
import {join, resolve} from 'path';
import appRouter from './routes/router.js';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(join('./public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Manejar JSON en las solicitudes
app.use('/', appRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});