const Course = require('../models/CourseModel');
const { mutipleMongooseToObject } = require('../../ulti/mongoose');
const { mongooseToObject } = require('../../ulti/mongoose');
const { index } = require('./UserController');
const { json } = require('express');

class CourseController {
index(req, res, next) {
Course.find({})
.then((courses) =>
res.render('course/list', {
title: 'Course',
courses: mutipleMongooseToObject(courses),
}),
)
.catch(next);
}

show(req, res, next) {
Course.findOne({ slug: req.params.slug })
.then((course) =>
res.render('course/detail', {
course: mongooseToObject(course),
}),
)
.catch(next);
}

create(req, res, next) {
res.render('course/create');
}

store(req, res, next) {
const course = new Course(req.body);
course
.save()
.then(() => res.redirect(`/courses`))
.catch((error) => {});
}

edit(req, res, next) {
Course.findById(req.params.id)
.then((course) =>
res.render('course/edit', {
course: mongooseToObject(course),
}),
)
.catch(next);
}

update(req, res, next) {
Course.updateOne({ _id: req.params.id }, req.body)
.then(() => res.redirect(`/courses`))
.catch((error) => {});
}

remove(req, res, next) {
Course.deleteOne({ _id: req.params.id })
.then(() => res.redirect(`/courses`))
.catch((error) => {});
}
}

module.exports = new CourseController();
