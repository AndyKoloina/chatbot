
import mainMenuMessages from './mainMenuMessage';
import storesRestaurantsMessages from './storesRestaurantsMessage';
import eevntNewsDealMessage from './eventsNewsDealMessage';
import messages from './mainMenuMessage'; 
/* CAROUSSEL MENU OPTIONS */
const MenuOptionsCarosel = (recipientId) => {
    return {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements:[
            {
             "title":" Stores & Restaurants!",
             "image_url":"https://mc-c0675db6-0829-4f7e-b429-165200-single.azurewebsites.net/-/jssmedia/project/klepierre/master-region/alpha/banners/oe-15-08_1180x510.png?h=510&w=1180&hash=6D9ABD76BBAA16B6EF9ABFEBC0CA1E68",
             "subtitle":"Hours and details for your favorites places",
             "buttons":[
              storesRestaurantsMessages.storesRestaurantsButtonMenu
              ,
              mainMenuMessages.mainMenuButton            
             ]      
           },
           {
            "title":" What's happening",
            "image_url":"https://mc-c0675db6-0829-4f7e-b429-165200-single.azurewebsites.net/-/jssmedia/project/klepierre/master-region/shop-banners/agatha-438-278x175.jpg?h=175&w=278&hash=2353C11B44A740B3AF0D87BA9F90320D",
            "subtitle":"stay up to dateon the latest events news and hot offers",
            "buttons":[
              eevntNewsDealMessage.eventNewsButtonMenu
              ,
              mainMenuMessages.mainMenuButton             
            ]      
          },
          {
            "title":" Access $ Amenities",
            "image_url":"https://mc-c0675db6-0829-4f7e-b429-165200-single.azurewebsites.net/-/jssmedia/project/klepierre/master-region/shop-banners/stradivarius-238.jpeg?h=390&w=780&hash=E671720C361DE16A6DDCB6D813A677AE",
            "subtitle":"All you need about opening Hours, ATM , WI-FI and more",
            "buttons":[
              {
                "type":"postback",
                "payload":"ACCESS",
                "title":"All ACCESS & Amenities"
              },
              mainMenuMessages.mainMenuButton          
            ]      
          }
           
         ],
        },
      },
    };
  };

  export default {MenuOptionsCarosel};