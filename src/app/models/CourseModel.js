const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const CourseModel = new Schema({
name: { type: String, maxLength: 255 },
description: { type: String, maxLength: 500 },
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now },
slug: { type: String, slug: 'name', unique: true },
});

module.exports = mongoose.model('course', CourseModel);
