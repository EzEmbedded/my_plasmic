
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['mbTUmzLLaKbhM6GQPc8R6f'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  