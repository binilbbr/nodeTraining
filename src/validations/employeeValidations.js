const Joi = require('joi');



exports.createEmployee = {

    body: {

        name: Joi.string().max(128).required(),

        address: Joi.string().required(),

        gender: Joi.string().required().allow("male","female"),

        department: Joi.string().required().valid("HR", "Engineering", "Administration"),

        phone: Joi.string().required(),

    },

}