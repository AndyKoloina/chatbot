/* LET GO BUTTON */
const letGoButton = {
    type:'postback',
    title:'👋 Lets\'Go!',
    payload: JSON.stringify({
      type: 'LET_GO',
    }),
  }
  const directUsButton = {
    type:'postback',
    title:'Direct Message us',
    payload: JSON.stringify({
      type: 'DIRECT_US',
    }),
  }
/* WELCOME MESSAGE */

const welcomeButton = {
    attachment:{
      type:'template',
      payload:{
        template_type:'button',
        text:" 👋 Hi Andy welcome to Val d'Europe: stores, restaurants, events,deals & so much more.Press the button below to get started",
        buttons:[
          letGoButton
          ,
          directUsButton
        ]
      }
    }
  };
  export default {
    welcomeButton
  } 