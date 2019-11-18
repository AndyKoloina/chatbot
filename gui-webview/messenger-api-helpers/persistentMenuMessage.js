/**
 * The persistent menu for users to use.
 */
import getStartedButton from './getStartedMessage';
const persistentMenu = {
    persistent_menu: [
      {
        'locale': 'default',
        'composer_input_disabled': true,
        'call_to_actions': [
          getStartedButton.getStarted
        ]
      }
    ]
  };

  export default {persistentMenu};