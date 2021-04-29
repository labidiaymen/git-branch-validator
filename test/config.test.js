'use strict';

const {
  assert,
} = require('chai');
const {
  getConf,
} = require('../dist/get-config');
const path = require('path');

describe('config', () => {
  describe('getDefaultConfig', () => {
    it('should returns the default validate-branch-name configs', () => {
      const {
        pattern,
        errorMsg,
      } = require('../dist/config.default');
      assert.equal(pattern, '^(master|develop){1}$|^(feature|fix|hotfix|release)\/.+$', 'default pattern error');
      assert.equal(errorMsg, 'Branch name validate failed please rename your current branch', 'default errMsg error');
    });
  });

  describe('getExternalConfig', () => {
    it('shoud get config from .validate-branch-namerc file', () => {
      const {
        pattern,
        errorMsg,
      } = getConf(path.join(__dirname, '/config'), null, true);
      console.log('---------')
      console.log(pattern, __dirname,
        errorMsg)
      console.log('---------')


      assert.equal(pattern, 'mock pattern', '.*rc pattern error');
      assert.equal(errorMsg, 'mock errorMsg', '.*rc errorMsg error');
    });

    it('shoud get config from default file', () => {
      const {
        pattern,
        errorMsg,
      } = getConf();
      console.log(pattern,
        errorMsg)
      assert.equal(pattern, '^(master|develop){1}$|^(feature|fix|hotfix|release)\/.+$', 'default pattern error');
      assert.equal(errorMsg, 'Branch name validate failed please rename your current branch', 'default errorMsg error');
    });
  });
});
