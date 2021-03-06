const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files =[
    './dist/elements-build/polyfills.js',
    './dist/elements-build/runtime.js',
    './dist/elements-build/main.js'
  ];

  await concat(files, './dist/elements-build/user-list-widget.js');

  await fs.copy('./demo.html', './dist/elements-build/index.html');

  console.info('Elements created successfully!');

})();
