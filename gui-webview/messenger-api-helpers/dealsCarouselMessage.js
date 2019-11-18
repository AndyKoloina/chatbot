
// import mainMenuMessages from './mainMenuMessage';

// /* CAROUSSEL MENU OPTIONS */
// const DealsCarousel = (recipientId) => {
//     return {
//       attachment: {
//         type: 'template',
//         payload: {
//           template_type: 'generic',
//           elements:[
//             {
//              "title":" Bring the heat",
//              "image_url":"https://mc-c0675db6-0829-4f7e-b429-165200-single.azurewebsites.net/-/jssmedia/project/klepierre/master-region/alpha/banners/oe-15-08_1180x510.png?h=510&w=1180&hash=6D9ABD76BBAA16B6EF9ABFEBC0CA1E68",
//              "subtitle":"I'm heating up. For summer style hotter than the weather, shop up to 70% off at celio   ",
//              "buttons":[
//                 {
//                     "type":"postback",
//                     "payload":"IM_IN",
//                     "title":"I'm in!"
//                 },
//               ,
//               mainMenuMessages.mainMenuButton            
//              ]      
//            },
//            {
//             "title":" Yes to free ice cream",
//             "image_url":"https://mc-c0675db6-0829-4f7e-b429-165200-single.azurewebsites.net/-/jssmedia/project/klepierre/master-region/shop-banners/agatha-438-278x175.jpg?h=175&w=278&hash=2353C11B44A740B3AF0D87BA9F90320D",
//             "subtitle":"It's not just the weaher that's hot. Cool down with the free ice cream when you spend $25 ",
//             "buttons":[
//               {
//                 "type":"postback",
//                 "payload":"IM_IN",
//                 "title":"I'm in!"
//               },
//               mainMenuMessages.mainMenuButton             
//             ]      
//           },
//           {
//             "title":" Put a ring on it",
//             "image_url":"https://mc-c0675db6-0829-4f7e-b429-165200-single.azurewebsites.net/-/jssmedia/project/klepierre/master-region/shop-banners/stradivarius-238.jpeg?h=390&w=780&hash=E671720C361DE16A6DDCB6D813A677AE",
//             "subtitle":"Don't have a words? Say it with jewellery with up to 50%  off at histoire d'or ",
//             "buttons":[
//               {
//                 "type":"postback",
//                 "payload":"IM_IN",
//                 "title":"I'm in!"
//               },
//               mainMenuMessages.mainMenuButton          
//             ]      
//           }
           
//          ],
//         },
//       },
//     };
//   };



  
import mainMenuMessages from './mainMenuMessage';

/* CAROUSSEL MENU OPTIONS */
const DealsCarousel = (recipientId) => {
    return {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements:[
            {
              "title":" Bring the heat",
              "image_url":"https://mc-80760655-e83e-44d7-9bf3-12890a-cm.azurewebsites.net/-/jssmedia/project/klepierre/master-region/brand-logo/celio-697.png?h=65&w=134&hash=8803F385D4564994FEE79E6A1D1A6C9E",
              "subtitle":"I'm heating up. For summer style hotter than the weather, shop up to 70% off at celio   ",
             "buttons":[
              {
                "type":"web_url",
                "url":"https://mc-80760655-e83e-44d7-9bf3-12890a-cm.azurewebsites.net/STORES-AND-RESTAURANTS/Celio",
                "title":"I'm in!",
                "webview_height_ratio": "full"
              }
              ,
              mainMenuMessages.mainMenuButton            
             ]      
           },
           {
            "title":" Yes to free ice cream",
            "image_url":"https://mc-80760655-e83e-44d7-9bf3-12890a-cm.azurewebsites.net/-/jssmedia/project/klepierre/master-region/brand-logo/jean-vallon-advanced-163.png?h=65&w=134&hash=020269986C5B4E96E2933D511557DEB3",
            "subtitle":"It's not just the weaher that's hot. Cool down with the free ice cream when you spend $25 ",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://mc-80760655-e83e-44d7-9bf3-12890a-cm.azurewebsites.net/STORES-AND-RESTAURANTS/Jean-Vallon-Advanced",
                "title":"I'm in!",
                "webview_height_ratio": "full"
              }
              ,
              mainMenuMessages.mainMenuButton             
            ]      
          },
          {
            "title":" Put a ring on it",
            "image_url":"https://mc-80760655-e83e-44d7-9bf3-12890a-cm.azurewebsites.net/-/jssmedia/project/klepierre/master-region/training-odysseum/offers_izac_578-578.jpg?h=578&amp;w=578&amp;hash=AAEC95BE960CD379BCD69841B63C2DFA",
            "subtitle":"Don't have a words? Say it with jewellery with up to 50%  off at histoire d'or ",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://mc-80760655-e83e-44d7-9bf3-12890a-cm.azurewebsites.net/STORES-AND-RESTAURANTS/Fresh-Burritos",
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

  export default {DealsCarousel};