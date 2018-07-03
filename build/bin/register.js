"use strict";

const {
  resolve
} = require('path');

require('@babel/register')({
  cwd: resolve(__dirname, '../..')
});

require('.');
//# sourceMappingURL=register.js.map