import { connect } from 'http2';
import {app} from './app';
import connectDB from './utils/db';
require('dotenv').config();
// createing server

app.listen(3000, () =>
     {   
     console.log(`Server is running on port 3000`);
connectDB();
});