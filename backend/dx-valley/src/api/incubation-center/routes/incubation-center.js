'use strict';

/**
 * incubation-center router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::incubation-center.incubation-center');


module.exports = {
    routes: [
      {
        method: "POST",
        path: "/incubation",
        handler: "incubation-center.create",
        config: {
          policies: [],
        },
      },
    ],
  };