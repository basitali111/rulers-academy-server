import {app} from './app';
require('dotenv').config();
// createing server

app.listen(3000, () =>
     {console.log(`Server is running on port 3000`);});