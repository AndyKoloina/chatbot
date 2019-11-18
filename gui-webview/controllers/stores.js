/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */


class Store {
    constructor() {
        this.stores = [
            {
              id: 1,
              name: 'Agata',
              description: 'Agata description'
            },
            {
              id: 2,
              name: 'Adopt',
              description: 'Adopt description'
            },
            {
              id: 3,
              name: 'test',
              description: 'test description'
            }
        ]
    }
  

  getlistStore() {
    return  this.stores;
  }

  getStoreById(storeId) {
    return this.stores.filter(store => store.id === storeId);
  }
}


export default Store;
