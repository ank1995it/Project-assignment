import Joi from 'joi';

const register = Joi.object({
    name: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    phoneNo: Joi.string().min(10).max(10).required(),
    dob : Joi.string().required(),
    tob : Joi.string().required(),
    gender : Joi.string().required(),
    maritalStatus : Joi.string().required(),
    language : Joi.string().required(),
    profilePicture:Joi.string().required(),
});

const login = Joi.object({
    email: Joi.string().required(),

    password: Joi.string().required(),
});


const post = Joi.object({
    page: Joi.string().required(),
    limit: Joi.string().required(),
});
export default { register, login , post};
