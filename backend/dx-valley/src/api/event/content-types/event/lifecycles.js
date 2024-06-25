module.exports = {
    async afterCreate(event) {
      try {
        // Fetch all subscribers
        // const subscribers = await strapi.services.subscription.find();
        const subscribers = await strapi.db
          .query("api::subscription.subscription")
          .findMany();
        // const subscribers = strapi.api['subscription'].services.subscription.find();
  
        // Notify all subscribers about the new event
        for (const subscriber of subscribers) {
          await strapi.plugins["email"].services.email.send({
            to: subscriber.email,
            subject: "New Event Notification",
            text: `We have a new event: ${event.result.title}\n\nDescription: ${event.result.description}\nDate: ${event.result.date}`,
            html: `<p>We have a new event: <strong>${event.result.title}</strong></p>
                   <p>Description: ${event.result.description}</p>
                   <p>Date: ${event.result.date}</p>`,
          });
        }
      } catch (error) {
        strapi.log.error("Error sending event notification emails:", error);
      }
    },
  };
  