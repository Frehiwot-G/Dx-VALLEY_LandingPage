// module.exports = () => ({});



module.exports = ({ env }) => ({
    email: {
      provider: 'smtp',
      providerOptions: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: env('SMTP_USERNAME'), // your email address
          pass: env('SMTP_PASSWORD'), // your password
        },
      },
      settings: {
        defaultFrom: 'backend1221@gmail.com',
        defaultReplyTo: 'backend1221@gmail.com',
      },
    },
  });