'use strict';

/**
 * incubation-center controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::incubation-center.incubation-center');


module.exports = {
    async create(ctx) {
        const { email } = ctx.request.body;
        const { name } = ctx.request.body;
        const { dropdownText } = ctx.request.body;
        const { date_founded } = ctx.request.body;
        
    
        const filter = {};
        if (name) filter.name = name;
        if (dropdownText) filter.industry = dropdownText;
        if (date_founded) filter.date_founded = date_founded;
        if (email) filter.email = email;
    
       
    
        // const existingSubscription = await strapi.services.subscription.findOne({
        //   email,
        // });
        const existingSubscription = await strapi.db
          .query("api::incubation-center.incubation-center")
          .findOne({
            where: filter,
          });
    
        if (existingSubscription) {
          return ctx.badRequest("you have already registered");
        }
    
        const newSubscription = await strapi.db
          .query("api::incubation-center.incubation-center")
          .create({ data: { name,industry:dropdownText,date_founded,email } });
    
        // await strapi.plugins["email"].services.email.send({
        //   to: email,
        //   subject: "Subscription Confirmation",
        //   text: `Thank you for subscribing to our newsletter!`,
        //   html: `<p>Thank you for subscribing to our newsletter!</p>`,
        // });
    
        return ctx.send({
          message: "registration successful",
        });
      },
    }