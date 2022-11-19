const mongoose = require('mongoose');

async function connect() {
try {
await mongoose.connect('mongodb://localhost:27017/nodejs_app_dev');
} catch (error) {
console.log('connect mongo failed');
}
}

module.exports = { connect };
