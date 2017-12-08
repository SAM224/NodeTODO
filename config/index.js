var configValues = require('./config');
 
module.exports = {

    getDbConnextionString: () => 
    'mongodb://' + configValues.uname + 
    ':' + configValues.pwd +
    '@ds135196.mlab.com:35196/nodetododb'
}  