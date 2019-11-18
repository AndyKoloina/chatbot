/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== MODULES ===============================================================
import express from 'express';
import sendApi from '../messenger-api-helpers/send';
import receiveApi from '../messenger-api-helpers/receive';
const router = express.Router();

// GET store listing page
router.get('/', (_, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.render('./index', { demo:process.env.DEMO , store: true, title: 'stores'});
});


router.put('/:storeID', ({body, params: {userID, storeID}}, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
     console.log('userId',userID);
    alert(userID);
    const storeJSON = JSON.stringify({...body, userID});
    console.log(`PUT User response: ${storeJSON}`);
  
    res.sendStatus(204);
  
    sendApi.sendPreferencesChangedMessage(userID);
});

/**
 * Update  selected stores,
 */
router.put('/:userID/store/:storeID', ({body, params: { userID, storeID}}, res) => {
    console.log('PUT User Gift response:', {userID, storeID});
    const storeJSON = JSON.stringify({...body, userID});
    console.log(`PUT User response: ${body.Subtitle}`);
    console.log(`typeof : ${ typeof body}`);
    console.log(`subtitle : ${body.Subtitle}`);
    res.sendStatus(204);
    receiveApi.handleStore(userID,body.Subtitle);
  });

router.get('/:storeID', ({params: {storeID}}, res) => {
    console.log('storeID');
 });

export default router;
