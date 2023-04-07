import * as functions from "firebase-functions";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const onScraperComplete = functions.https.onRequest((request, response) => {
  console.log("SCRAPPER COMPLETE >>> : ", request.body);
  
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// https://b389-102-89-42-186.eu.ngrok.io/flash-buy-97128/us-central1/onScraperComplete