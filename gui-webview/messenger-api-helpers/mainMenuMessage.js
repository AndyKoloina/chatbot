/* STORES RESTAURANTS BUTTONS */
const mainMenuButton = {
    type:'postback',
    title:'MAIN MENU',
    payload: JSON.stringify({
      type: 'MAIN_MENU',
    }),
  }
  const menuMessage = {
    text: '👋 Hi Andy welcome to Val d\'Europe: stores, restaurants, events,deals & so much more.Press the button below to get started'
  }
  export default{
    mainMenuButton,
    menuMessage
  } 