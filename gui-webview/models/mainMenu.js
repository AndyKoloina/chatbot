/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * MainMenu Model
 *
 * @class MainMenu
 */
export default class MainMenu {
    
    /**
     * Create a Gift
     *
     * @param {string} title - Human readable box name.
     * @param {object} image - Path to images.
     * @param {string} description - Description of the box.
     * @param {string} button - Button of the box .
     */

    constructor(title, image, description, button) {
      this.title = title;
      this.image = image;
      this.description = description;
      this.button = button;
    }
  }
  