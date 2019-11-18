  
    /* DEALS BUTTON */

const DealsButton = {
    type:'postback',
    title:'Hot offers',
    payload: JSON.stringify({
      type: 'HOT_OFFER',
    }),
  }
  /* EVENTS NEWS BUTTONS */
  const EventNewsButton = {
    type:'postback',
    title:'Events & News',
    payload: JSON.stringify({
      type: 'EVENT_NEWS',
    }),
  }

  /* EVENTS NEWS DEALS MESSAGE */
  const eventNewsDealsButton = {
    attachment:{
      type:'template',
      payload:{
        template_type:'button',
        text:" What are you looking for?",
        buttons:[
          DealsButton
          ,
          EventNewsButton      
        ]
      }
    }
  };
   /* STORES RESTAURANTS BUTTONS */
  
   const eventNewsButtonMenu = {
    type:'postback',
    title:'All Events, News & offer',
    payload: JSON.stringify({
      type: 'EVENT_DEALS_NEWS',
    }),
  }
export default {
    eventNewsDealsButton,
    eventNewsButtonMenu
}