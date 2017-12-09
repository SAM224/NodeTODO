var configValues = require('./config');
 
module.exports = {

    getDbConnextionString: () => 
    'mongodb://' + configValues.uname + 
    ':' + configValues.pwd +
    '@'+ configValues.host +
    ':'+ configValues.port +
    '/'+configValues.db
}  