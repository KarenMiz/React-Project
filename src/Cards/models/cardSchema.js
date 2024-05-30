import Joi from "joi";

const urlRegex = /^(https?:\/\/.+)$|(^.*\.(png|jpg|jpeg|gif|webp|svg))$/i;

const cardSchema = {
  title: Joi.string().min(2).max(256).required(),
  subtitle: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(1024).required(),
  phone: Joi.string()
    .ruleset.regex(/^0[0-9]{1,2}-?\s?[0-9]{7}$/)
    .rule({ message: 'card "phone" mast be a valid phone number' })
    .required(),
  email: Joi.string()
    .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: 'card "mail" mast be a valid mail' })
    .required(),
  webUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'card "web" mast be a valid url' })
    .allow(""),
  imageUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'card.image "url" mast be a valid url' })
    .allow(""),
  imageAlt: Joi.string().min(2).max(256).allow(""),
  state: Joi.string().allow(""),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number(),
};

export default cardSchema;