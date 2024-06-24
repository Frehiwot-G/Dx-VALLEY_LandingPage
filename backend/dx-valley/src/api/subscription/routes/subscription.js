"use strict";

/**
 * subscription router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::subscription.subscription");

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/subscription",
      handler: "subscription.create",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/subscribers",
      handler: "subscription.find",
      config: {
        policies: [],
      },
    },
  ],
};
