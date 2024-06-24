"use strict";

/**
 * subscription controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::subscription.subscription");

module.exports = {
  async create(ctx) {
    const { email } = ctx.request.body;

    const filter = {};
    if (email) filter.email = email;

    if (!email) {
      return ctx.badRequest("Email is required");
    }

    // const existingSubscription = await strapi.services.subscription.findOne({
    //   email,
    // });
    const existingSubscription = await strapi.db
      .query("api::subscription.subscription")
      .findOne({
        where: filter,
      });

    if (existingSubscription) {
      return ctx.badRequest("Email is already subscribed");
    }

    const newSubscription = await strapi.db
      .query("api::subscription.subscription")
      .create({ data: { email } });

    await strapi.plugins["email"].services.email.send({
      to: email,
      subject: "Subscription Confirmation",
      text: `Thank you for subscribing to our newsletter!`,
      html: `<p>Thank you for subscribing to our newsletter!</p>`,
    });

    return ctx.send({
      message: "Subscription successful",
      subscription: newSubscription,
    });
  },

  //find subscribers

  async find(ctx) {
    try {
      const subscribers = await strapi.services.subscription.find();
      ctx.send(subscribers);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
