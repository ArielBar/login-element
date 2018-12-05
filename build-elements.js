const fs = require('fs-extra');
const concat = require('concat');
const glob = require('glob');

glob("./dist/login-element/*.*.js",{},function(er,files){
  (async function build() {
    
  await fs.ensureDir('elements');
  let revesed = files.reverse();
  await concat(revesed, 'elements/login-element.js');
  })()
});

// (async function build() {
//   const files = [
//     './dist/login-element/runtime.js',
//     './dist/login-element/polyfills.js',
//     './dist/login-element/scripts.js',
//     './dist/login-element/main.js'
//   ];

//   await fs.ensureDir('elements');
//   await concat(files, 'elements/login-element.js');
// })();