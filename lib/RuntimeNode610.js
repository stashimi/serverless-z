'use strict';


const BbPromise = require('bluebird');
const _         = require('lodash');
const chalk     = require('chalk');

const SCli      = require('./utils/cli');
const context      = require('./utils/context');

module.exports = function(S) {

  return class RuntimeNode610 extends S.classes.RuntimeNode43 {

    static getName() {
      return 'nodejs6.10';
    }

  }

};
