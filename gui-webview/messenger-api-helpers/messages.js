/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable camelcase */
/* eslint-disable max-len */

/*
 * MESSAGES
 *
 * Objects and methods that create objects that represent
 * messages sent to Messenger users.
 */

// ===== STORES ================================================================
import UserStore from '../stores/user-store';
import GiftStore from '../stores/gift-store';


// ===== UTILS =================================================================
import {dateString} from '../utils/date-string-format';

const SERVER_URL = process.env.SERVER_URL;

/**
 * Button for displaying the preferences menu inside a webview
 */
const setPreferencesButton = {
  type: 'web_url',
  title: 'Set Gift Preferences',
  url: `${SERVER_URL}/`,
  webview_height_ratio: 'tall',
  messenger_extensions: true,
};
/* LET GO BUTTON */
const letGoButton = {
  type:'postback',
  title:'👋 Lets\'Go!',
  payload: JSON.stringify({
    type: 'LET_GO',
  }),
}

/* STORES BUTTON */


/* RESTAURANTS BUTTONS */
const restaurantsButton = {
  type:'postback',
  title:'RESTAURANTS',
  payload: JSON.stringify({
    type: 'RESTAURANTS',
  }),
}

/*HOT OFFERS BUTTON */
const hotOfferButton = {
  type:'postback',
  title:'Hot offers',
  payload: JSON.stringify({
    type: 'HOT_OFFERS',
  }),
}

/*EVENT NEWS BUTTON */
const eventNewsButton = {
  type:'postback',
  title:'Events & News',
  payload: JSON.stringify({
    type: 'EVENTS_NEWS',
  }),
}

/* STORE BUTTON */
const storesButton = {
  type: 'web_url',
  title: 'STORES',
  url: `${SERVER_URL}/stores`,
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


/* STORES RESTAURANTS BUTTONS */
const mainMenuButton = {
  type:'postback',
  title:'MAIN MENU',
  payload: JSON.stringify({
    type: 'MAIN_MENU',
  }),
}


/*WHAT'S HAPPENING */


/*
 * Button for displaying the view details button for a gift
 */
const viewDetailsButton = (giftId) => {
  return {
    title: 'View Details',
    type: 'web_url',
    url: `${SERVER_URL}/gifts/${giftId}`,
    webview_height_ratio: 'compact',
    messenger_extensions: true,
  };
};

/*
 * Button for selecting a gift
 */
const chooseGiftButton = (giftId) => {
  return {
    type: 'postback',
    title: 'Choose This Gift',
    payload: JSON.stringify({
      type: 'CHOOSE_GIFT',
      data: {
        giftId: giftId,
      },
    }),
  };
};

/**
 * Button for displaying a postback button that triggers the change gift flow
 */
const changeGiftButton = {
  type: 'postback',
  title: 'Change Gift',
  payload: JSON.stringify({
    type: 'CHANGE_GIFT',
  }),
};



/**
 * Message that informs the user of the promotion and prompts
 * them to set their preferences.
 */
const helloRewardMessage = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'button',
      text: 'welcome to klepierre',
      buttons: [setPreferencesButton],
    },
  },
};

/**
 * Message that informs the user that their preferences have changed.
 */
const preferencesUpdatedMessage = {
  text: 'OK, we’ve updated your preferences. You can change them anytime you want from the menu.',
};

/**
 * Message that informs that we have their current gift selected.
 */
const currentGiftText = {
  text: 'This is your current gift selection. If you’d like to change it, you can do so below.',
};

/**
 * Message that informs the user what gift has been selected for them
 * and prompts them to select a different gift.
 *
 * @param {String} recipientId Id of the user to send the message to.
 * @returns {Object} Message payload
 */
const currentGiftButton = (recipientId) => {
  const user = UserStore.get(recipientId);
  const gift = user.preferredGift;

  return {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'generic',
        elements: [
          {
            title: `Your Gift: ${gift.name}`,
            image_url: gift.images.original,
            subtitle: gift.description,
            buttons: [
              viewDetailsButton(gift.id),
              changeGiftButton,
            ],
          },
        ],
      },
    },
  };
};


/* WELCOME MESSAGE */

const welcomeButton = {
  attachment:{
    type:'template',
    payload:{
      template_type:'button',
      text:" 👋 Hi Andy razafy welcome to Val d'Europe: stores, restaurants, events,deals & so much more.Press the button below to get started",
      buttons:[
        letGoButton
        ,
        {
          "type":"web_url",
          "url":"https://www.messenger.com",
          "title":"Direct Message us "
        }
      ]
    }
  }
};



/**
 * Message that precedes us displaying recommended gifts.
 */
const giftOptionsText = {
  text: 'Here are some gift options for you:',
};


const menuMessage = {
  text: '👋 Hi Andy razafy welcome to Val d\'Europe: stores, restaurants, events,deals & so much more.Press the button below to get started'
}
/**
 * Message that informs the user what gift has been selected for them
 * and prompts them to select a different gift.
 *
 * @param {Object} id - The Gifts unique id.
 * @param {Object} name - The Gifts name.
 * @param {Object} description - The Gifts description.
 * @param {Object} original - Path to the original image for the gift.
 * @returns {Object} Messenger representation of a carousel item.
 */
const giftToCarouselItem = ({id, name, description, images: {original}}) => {
  return {
    title: name,
    image_url: original,
    subtitle: description,
    buttons: [
      viewDetailsButton(id),
      chooseGiftButton(id),
    ],
  };
};

/**
 * Message that informs the user what gift has been selected for them
 * and prompts them to select a different gift.
 *
 * @param {String} recipientId Id of the user to send the message to.
 * @returns {Object} Message payload
 */
const giftOptionsCarosel = (recipientId) => {
  const user = UserStore.get(recipientId) || UserStore.insert({id: recipientId});
  const giftOptions = user.getRecommendedGifts();

  const carouselItems = giftOptions.map(giftToCarouselItem);

  return {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'generic',
        elements: carouselItems,
      },
    },
  };
};


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

/*WHAT HAPPENING MESSAGE */
const happenningButton = {
  attachment:{
    type:'template',
    payload:{
      template_type:'button',
      text:" What are you looking for?",
      buttons:[
        hotOfferButton
        ,
        eventNewsButton
        
      ]
    }
  }
}

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
          mainMenuButton
          
        ]
      }
    }
  }
  
};
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
            storesRestaurantsButtonMenu
            ,
            mainMenuButton            
           ]      
         },
         {
          "title":" What's happening",
          "image_url":"https://mc-c0675db6-0829-4f7e-b429-165200-single.azurewebsites.net/-/jssmedia/project/klepierre/master-region/shop-banners/agatha-438-278x175.jpg?h=175&w=278&hash=2353C11B44A740B3AF0D87BA9F90320D",
          "subtitle":"stay up to dateon the latest events news and hot offers",
          "buttons":[
            {
              "type":"postback",
              "payload":"EVENT_DEALS_NEWS",
              "title":"All Events, News & offer"
            },
            mainMenuButton             
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
              "title":"All Stores & Restaurants"
            },
            mainMenuButton          
          ]      
        }
         
       ],
      },
    },
  };
};



/**
 * Message that informs the user what gift will be sent to them.
 *
 * @param {String} recipientId Id of the user to send the message to.
 * @returns {Object} Message payload
 */
const giftChangedMessage = (recipientId) => {
  const {preferredGift, dateOfBirth} = UserStore.get(recipientId);
  return {
    text: `Perfect! You can look forward to the ${preferredGift.name} on ${dateString(dateOfBirth)}. `,
  };
};

/**
 * Message thanking user for their purchase.
 *
 * @param {String} giftId Id of the purchased item.
 * @returns {Object} Message payload
 */
const giftPurchasedMessage = (giftId) => {
  const purchasedItem = GiftStore.get(giftId);
  return {
    text: `Thank you for purchasing the ${purchasedItem.name}!  `,
  };
};

/**
 * The persistent menu for users to use.
 */
const persistentMenu = {
  persistent_menu: [
    {
      'locale': 'default',
      'composer_input_disabled': true,
      'call_to_actions': [
        setPreferencesButton,
        getStarted
      ]
    }
  ]
};

/**
 * The Get Started button.
 */
const getStarted = {
  get_started: {
    // payload: 'GET_STARTED'
    payload: JSON.stringify({
      type: 'GET_STARTED',
    }),
  }
  
};

export default {
  helloRewardMessage,
  preferencesUpdatedMessage,
  currentGiftText,
  currentGiftButton,
  giftOptionsText,
  giftOptionsCarosel,
  giftChangedMessage,
  giftPurchasedMessage,
  persistentMenu,
  getStarted,
  welcomeButton,
  menuMessage,
  MenuOptionsCarosel,
  storesRestaurantsButton,
  storesDescriptionButton,
  happenningButton
};
