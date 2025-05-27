import {v2 as  cloudinary} from 'cloudinary';
require('dotenv').config();
import { connect } from 'http2';

import {app} from './app';
import connectDB from './utils/db';
cloudinary.config({
     cloud_name: process.env.CLOUD_NAME,
     api_key: process.env.CLOUD_API_KEY,
     api_secret: process.env.CLOUD_SECRET_KEY,
})
// createing server

app.listen(3000, () =>
     {   
     console.log(`Server is running on port 3000`);
connectDB();
});