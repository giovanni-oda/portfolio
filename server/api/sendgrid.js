// const sgMail = require('@sendgrid/mail')
import sgMail from '@sendgrid/mail';

export default defineEventHandler(async (event) => {
  try {
    // handle post Data
    const { name, email, msg } = await readBody(event);
    const sendGridMsg = {
      to: 'oda.giovanni@gmail.com',
      from: 'contact@giovannioda.dev',
      subject: `${name} sent you an email from your portfolio page.`,
      text: `Reply email: ${email}`,
      html: `<strong>Message:</strong> ${msg}`
    };
    const { sendGridKey } = useRuntimeConfig();

    sgMail.setApiKey(sendGridKey);
    await sgMail.send(sendGridMsg);

    // console.log('Email Sent');
    return {
      status: 200,
      msg: `Email Sent!`
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      msg: `Error: ${err})`
    };
  }
});
