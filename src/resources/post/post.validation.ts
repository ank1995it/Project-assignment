import Joi from 'joi';

const create = Joi.object({
    thumbnailImage: Joi.string().required(),
    headline: Joi.string().min(5).max(100).required(),
    category:  Joi.object().keys({
        _id: Joi.string().regex(/^[a-f\d]{24}$/i).required(),
        categoryName: Joi.string().required()
    }),
    authorName: Joi.string().min(3).max(20).required(),
    description : Joi.string().min(5).max(500).required()
});

export default { create };
