// const { TextServiceClient } =require("@google-ai/generativelanguage").v1beta2;

// const { GoogleAuth } = require("google-auth-library");

// import { TextServiceClient } from '@google-ai/generativelanguage';
// import{GoogleAuth} from 'google-auth-library'


// const MODEL_NAME = "models/text-bison-001";
// const API_KEY = 'AIzaSyAbhkn4KQxk8lBNtVEF3sNXV1e47SzO2Ic';

// const client = new TextServiceClient({
//   authClient: new GoogleAuth().fromAPIKey(API_KEY),
// });

// const prompt = `AI, please consider yourself a doctor and provide a comprehensive response to the patient's symptoms, taking into account the patient's dignosis.
// Refer to the patient in first person and not the third.

// Patient's Current Symptoms:

// [Patient describes their current symptoms here.] only metion the symptoms given by the patient in one sentence don't add anything else.

// AI Doctor's Response:

// Based on the patient's reported symptoms and the provided dignosis, I recommend the following:

// Diagnosis:

// [Provide a potential diagnosis based on the reported symptoms and dignosis only if it is a contributing factor.]

// Treatment Recommendations:

// Medication: [Prescribe any necessary medications, dosage, and frequency.] be presise and not vague

// Lifestyle Modifications: [Recommend any lifestyle changes, such as dietary adjustments or exercise routines.]

// Follow-up: Schedule a follow-up appointment to assess the patient's progress and make any necessary adjustments to the treatment plan.

// Preventive Measures:

// [Provide advice on preventive measures or actions the patient can take to manage their condition and improve overall health.]

// Emergency Situations:

// [Explain under what circumstances the patient should seek immediate medical attention or contact emergency services.]

//   ${symptoms}
//   ${diagnosis}
// `;

// client
//   .generateText({
//     model: MODEL_NAME,
//     prompt: {
//       text: prompt,
//     },
//   })
//   .then((result) => {
//     console.log(JSON.stringify(result, null, 2));
//   });
  
