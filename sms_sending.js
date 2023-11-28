const accountSid = 'YOUR_ACCOUNT_SID';
const authToken = 'YOUR_AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Ceci est un exemple de message Twilio.',
    from: 'YOUR_TWILIO_PHONE_NUMBER', // Numéro Twilio
    to: 'RECIPIENT_PHONE_NUMBER',     // Numéro du destinataire
  })
  .then(message => console.log(`Message SID: ${message.sid}`))
  .catch(error => console.error(error));
