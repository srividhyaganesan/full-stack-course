const Joi=require("joi");
const listingschema=Joi.object({
    listing:Joi.object({
        title:Joi.string().required(),
        desc:Joi.string().required(),
        location:Joi.string().required(),
        price:Joi.number().required().min(0),
        image: Joi.object({
            url: Joi.string().allow("", null),
            filename: Joi.string().allow("", null)
        }).required()

    }).required()
});

const reviewschema=Joi.object({
    review:Joi.object({
        comment:Joi.string().required(),
        rating:Joi.number().required().min(1),
    }).required()
});


module.exports = {
  listingschema,
  reviewschema
};

