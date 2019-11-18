import mainMenuMessages from './mainMenuMessage';
const SERVER_URL = process.env.SERVER_URL;




  /* STORE & RESTAURANT MESSAGE */
const accessButton = {
    "message":{
      "text": "What are you looking for?",
      "quick_replies":[
        {
          "content_type":"text",
          "title":"opening times",
          "payload":"OPENING_TIMES",
        },{
          "content_type":"text",
          "title":"Visit us",
          "payload":"VISIT_US",
        }
      ]
    }
  };



export default {
    accessButton
  };