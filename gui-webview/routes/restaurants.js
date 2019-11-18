/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== MODULES ===============================================================
import express from 'express';
import receiveApi from '../messenger-api-helpers/receive';
const router = express.Router();

// GET store listing page
router.get('/', (_, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.render('./index', {demo:process.env.DEMO, restaurant: true, title: 'restaurants'});
});

/**
 * Update  selected stores,
 */
router.put('/:userID/restaurant/:restaurantID', ({body, params: { userID, restaurantID}}, res) => {
    console.log('PUT User Gift response:', {userID, restaurantID});
    const storeJSON = JSON.stringify({...body, userID});
    console.log(`PUT User response: ${body.Subtitle}`);
    console.log(`typeof : ${ typeof body}`);
    console.log(`subtitle : ${body.Subtitle}`);
    res.sendStatus(204);
    receiveApi.handleRestaurants(userID,body.Subtitle);
  });
export default router;
