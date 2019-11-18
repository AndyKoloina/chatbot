/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source trees.menuCaroselMessages
 */

// ===== LODASH ================================================================
import castArray from 'lodash/castArray';

// ===== MESSENGER =============================================================
import api from './api';
import messages from './messages';
import welcomeMessages from './welcomeMessage';
import storesRestaurantsMessages from './storesRestaurantsMessage';
import eventNewsDealsMessage from './eventsNewsDealMessage';
import menuCaroselMessages from './menuCarouselMessage';
import eventNewsCarousel from './eventNewsCarouselMessage';
import dealsCarousel from './dealsCarouselMessage';
import mainMenuMessages from './mainMenuMessage';
import directUsMessage from './directUsMessage';
import autoResponseMessage from './autoResponseMessage';
import logger from './fba-logging';

// Turns typing indicator on.
const typingOn = (recipientId) => {
  return {
    recipient: {
      id: recipientId,
    },
    sender_action: 'typing_on', // eslint-disable-line camelcase
  };
};

// Turns typing indicator off.
const typingOff = (recipientId) => {
  return {
    recipient: {
      id: recipientId,
    },
    sender_action: 'typing_off', // eslint-disable-line camelcase
  };
};

// Wraps a message JSON object with recipient information.
const messageToJSON = (recipientId, messagePayload) => {
  return {
    recipient: {
      id: recipientId,
    },
    message: messagePayload,
  };
};

// Send one or more messages using the Send API.
const sendMessage = (recipientId, messagePayloads) => {
  const messagePayloadArray = castArray(messagePayloads)
    .map((messagePayload) => messageToJSON(recipientId, messagePayload));

  api.callMessagesAPI([
    typingOn(recipientId),
    ...messagePayloadArray,
    typingOff(recipientId),
  ]);
};

const sendMessageProfile = (recipientId, messagePayloads) => {
  const messagePayloadArray = castArray(messagePayloads)
    .map((messagePayload) => messageToJSON(recipientId, messagePayload));

  api.callMessengerProfileAPI([
    typingOn(recipientId),
    ...messagePayloadArray,
    typingOff(recipientId),
  ]);
};

// Send a read receipt to indicate the message has been read
const sendReadReceipt = (recipientId) => {
  const messageData = {
    recipient: {
      id: recipientId,
    },
    sender_action: 'mark_seen', // eslint-disable-line camelcase
  };

  api.callMessagesAPI(messageData);
};

// Send the initial message telling the user about the promotion.
const sendHelloRewardMessage = (recipientId) => {
  logger.fbLog("send_message", {payload: "hello_reward"}, recipientId);
  sendMessage(recipientId, messages.helloRewardMessage);
};

const sendHelloRewardMessageProfile = (recipientId) => {
  logger.fbLog("send_message", {payload: "hello_reward"}, recipientId);
  sendMessageProfile(recipientId, messages.helloRewardMessage);
};

// Send a message indicating to a user that their preferences have changed.
const sendPreferencesChangedMessage = (recipientId) => {
  sendMessage(
    recipientId,
    [
      messages.preferencesUpdatedMessage,
      messages.currentGiftText,
      messages.currentGiftButton(recipientId),
    ]);
};

// send a message main menu
const sendWelcomeMessage = (recipientId) => {
  sendMessage(recipientId,[
    welcomeMessages.welcomeButton
  ] );
};

const sendAutoResponseMessage = (recipientId) => {
  sendMessage(recipientId,autoResponseMessage.autoResponseButton);
};

const sendStoreMessage = (recipientId,store) => {
  sendMessage(
    recipientId,
    [
      storesRestaurantsMessages.storesDescriptionButton(store)
    ]);
}

const sendRestaurantMessage = (recipientId,store) => {
  sendMessage(
    recipientId,
    [
      storesRestaurantsMessages.storesDescriptionButton(store)
    ]);
}


// send a message stores & restaurants
const sendStoresRestaurantsMessage = (recipientId) => {
  sendMessage(
    recipientId,
    [
      storesRestaurantsMessages.storesRestaurantsButton
    ]);
};

const sendEventNewsDealsMessage = (recipientId) => {
  sendMessage(recipientId, eventNewsDealsMessage.eventNewsDealsButton);
};
// Send a message displaying the gifts a user can choose from.
const sendChooseGiftMessage = (recipientId) => {
  sendMessage(
    recipientId,
    [
      messages.giftOptionsText,
      messages.giftOptionsCarosel(recipientId),
    ]);
};


const sendChooseMenutMessage = (recipientId) => {
  sendMessage(
    recipientId,
    [
      mainMenuMessages.menuMessage,
      menuCaroselMessages.MenuOptionsCarosel(recipientId),
    ]);
};

const sendDirectUsMessage = (recipientId) => {
  sendMessage(recipientId,directUsMessage.directUsMessage);
};


const sendEventNewsCarousel = (recipientId) => {
  sendMessage(recipientId,eventNewsCarousel.EventNewsCarousel(recipientId));
};

const sendDealsCarousel = (recipientId) => {
  sendMessage(
    recipientId,
    [
      dealsCarousel.DealsCarousel(recipientId),
    ]);
};

// Send a message that a users preffered gift has changed.
const sendGiftChangedMessage = (recipientId) =>
  sendMessage(recipientId, messages.giftChangedMessage(recipientId));

// Send a message that a user has purchased a gift.
const sendGiftPurchasedMessage = (recipientId, giftId) =>
  sendMessage(recipientId, messages.giftPurchasedMessage(giftId));


export default {
  sendMessage,
  sendReadReceipt,
  sendHelloRewardMessage,
  sendPreferencesChangedMessage,
  sendChooseGiftMessage,
  sendGiftChangedMessage,
  sendGiftPurchasedMessage,
  sendHelloRewardMessageProfile,
  sendChooseMenutMessage,
  sendWelcomeMessage,
  sendStoresRestaurantsMessage,
  sendStoreMessage,
  sendRestaurantMessage,
  sendEventNewsDealsMessage,
  sendEventNewsCarousel,
  sendDealsCarousel,
  sendAutoResponseMessage,
  sendDirectUsMessage
};
