const { parseISO, differenceInYears } = require('date-fns');

module.exports = {
 
    async afterCreate(data) {
      const foundationDate = parseISO(data.result.date_founded);
      const currentDate = new Date();
      const yearsDifference = differenceInYears(currentDate, foundationDate);

      if (yearsDifference >= 1) {
        await strapi.plugins['email'].services.email.send({
          to: data.result.email,
          subject: 'Incubation Program Eligibility',
          text: `Dear ${data.result.name},\n\nYou are eligible for our incubation program.`,
        });
      }
      else{
        await strapi.plugins['email'].services.email.send({
          to: data.result.email,
          subject: 'Incubation Program Eligibility',
          text: `Dear ${data.result.name},\n\n we are sorry to tell You that you are not eligible for our incubation program.`,
        });
      }
    },
};



