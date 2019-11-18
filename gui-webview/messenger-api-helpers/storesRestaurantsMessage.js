import mainMenuMessages from './mainMenuMessage';
const SERVER_URL = process.env.SERVER_URL;


  /* STORE BUTTON */
const storesButton = {
    type: 'web_url',
    title: 'STORES',
    url: `${SERVER_URL}/stores`,
    webview_height_ratio: 'tall',
    messenger_extensions: true,
  };
/* RESTAURANTS BUTTONS */
  const restaurantsButton = {
    type: 'web_url',
    title: 'RESTAURANTS',
    url: `${SERVER_URL}/restaurants`,
    webview_height_ratio: 'tall',
    messenger_extensions: true,
  };
  
  /*MORE STORE */
  const moreButton = {
    type: 'web_url',
    title: 'More Stores',
    url: `${SERVER_URL}/stores`,
    webview_height_ratio: 'tall',
    messenger_extensions: true,
  };
  
  
  
  
  /* STORES RESTAURANTS BUTTONS */
  const storesRestaurantsButtonMenu = {
    type:'postback',
    title:'All Stores & Restaurants',
    payload: JSON.stringify({
      type: 'STORES_RESTAURANTS',
    }),
  }

  /* STORE & RESTAURANT MESSAGE */
const storesRestaurantsButton = {
    attachment:{
      type:'template',
      payload:{
        template_type:'button',
        text:" What are you looking for?",
        buttons:[
          storesButton
          ,
          restaurantsButton      
        ]
      }
    }
  };

  /* STORE DESCRIPTION */
const storesDescriptionButton = (store) => {
    return {
      attachment:{
        type:'template',
        payload:{
          template_type:'button',
          text: store,
          buttons:[
            moreButton
            ,
            mainMenuMessages.mainMenuButton
            
          ]
        }
      }
    }
}

export default {
    storesRestaurantsButton,
    storesDescriptionButton,
    storesRestaurantsButtonMenu
  };