

  
import mainMenuMessages from './mainMenuMessage';

/* CAROUSSEL MENU OPTIONS */
const EventNewsCarousel = (recipientId) => {
    return {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements:[
            {
              "title":" Dare to dream",
              "image_url":"https://mc-80760655-e83e-44d7-9bf3-12890a-cm.azurewebsites.net/-/jssmedia/project/klepierre/master-region/training-odysseum/offers_izac_578-578.jpg?h=578&amp;w=578&amp;hash=AAEC95BE960CD379BCD69841B63C2DFA",
              "subtitle":"Got what it takes to be an astronaut, a Footballer. Find out as Val d'Europe celebrates BarBie's 60th birthday",
             "buttons":[
              {
                "type":"web_url",
                "url":"https://mc-c0675db6-0829-4f7e-b429-165200-single.azurewebsites.net/evenements-actualite",
                "title":"I'm in!",
                "webview_height_ratio": "full"
              }
              ,
              mainMenuMessages.mainMenuButton            
             ]      
           },
           {
            "title":" Spray it louder",
            "image_url":"https://mc-80760655-e83e-44d7-9bf3-12890a-cm.azurewebsites.net/-/jssmedia/project/klepierre/master-region/training-odysseum/offers_izac_578-578.jpg?h=578&amp;w=578&amp;hash=AAEC95BE960CD379BCD69841B63C2DFA",
            "subtitle":"Stand out from the crowd this summer and turn heads with Sephora's news fragrance collection for her. ",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://mc-c0675db6-0829-4f7e-b429-165200-single.azurewebsites.net/evenements-actualites",
                "title":"I'm in!",
                "webview_height_ratio": "full"
              }
              ,
              mainMenuMessages.mainMenuButton             
            ]      
          },
          {
            "title":" Reject, revamp, repeat ",
            "image_url":"https://mc-80760655-e83e-44d7-9bf3-12890a-cm.azurewebsites.net/-/jssmedia/project/klepierre/master-region/training-odysseum/offers_izac_578-578.jpg?h=578&amp;w=578&amp;hash=AAEC95BE960CD379BCD69841B63C2DFA",
            "subtitle":"It's take to responsibilities.Learn how to save your world  at Desigual's responsible fashion upcycling workshop",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://mc-c0675db6-0829-4f7e-b429-165200-single.azurewebsites.net/evenements-actualites",
                "title":"I'm in!",
                "webview_height_ratio": "full"
              },
              mainMenuMessages.mainMenuButton          
            ]      
          }
           
         ],
        },
      },
    };
  };

  // export default {MenuOptionsCarosel};
  export default {EventNewsCarousel};