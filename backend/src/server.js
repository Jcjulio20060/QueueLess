const app = require('./app');
require('dotenv').config();

app.listen(process.env.API_PORT, () => console.log(`🚀 Server running on port ${process.env.API_PORT}`));