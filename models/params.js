// const mongoose = require('mongoose');
const Joi = require("joi");

const paramSchema = Joi.object({
  action_id: Joi.string().required(),
  image_id: Joi.string().required(),
  limit: Joi.number().required(),
  image: Joi.string().required(),
  check_list: Joi.string().required(),
  location: Joi.object({
    lat: Joi.number().required(),
    long: Joi.number().required(),
  }).required(),

});

module.exports = paramSchema;
