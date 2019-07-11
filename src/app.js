const app = require('./config/express');

// listen to requests

app.listen(3000, () => console.info(`server started on port 3000`));

/**

* Exports express

* @public

*/

module.exports = app;