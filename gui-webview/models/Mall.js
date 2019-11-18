/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Mall Model
 *
 * @class Mall
 */
export default class Mall {

    /**
     * Create a Mall
     *
     * @param {string} id - Unique idenitifier of this mall.
     * @param {string} name - Human readable mall.
     * @param {string} description - Description of the mall.
     * @param {string} listStore - Category of this mall (`Mall.LISTMALL`).
     */
    constructor(id, name, description, listMall) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.listMall = listMall;
    }

  }
  