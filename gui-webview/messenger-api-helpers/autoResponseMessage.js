
import mainMenuMessages from './mainMenuMessage';

/* LET GO BUTTON */
const directUsButton = {
    type:'postback',
    title:'Direct Message us',
    payload: JSON.stringify({
      type: 'DIRECT_US',
    }),
  }
  
/* WELCOME MESSAGE */

const autoResponseButton = {
    attachment:{
      type:'template',
      payload:{
        template_type:'button',
        text:" It seems that you're looking for something specific.Hit the 'DIRECT Message us' button to chat with a member of our team who'll be able to hel you out.",
        buttons:[
            directUsButton
          ,
          mainMenuMessages.mainMenuButton
        ]
      }
    }
  };
  export default {
    autoResponseButton
  } 