var context = require.context('./spec', true, /\.spec\.js$/);
context.keys().forEach(context);
console.log(context.keys());
