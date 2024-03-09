// Babel configuration for JavaScript code transpilation
module.exports = {
  // List of presets to be applied during transpilation
  presets: [
    // Use the @babel/preset-env preset to transpile code for specific environments
    ['@babel/preset-env', {
      // Define the target environments for transpilation
      targets: {
        // Transpile the code for the current version of Node.js
        node: 'current'
      }
    }]
  ]
};
