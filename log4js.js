'use strict'

const log4js = require('log4js');

log4js.configure({
  appenders: {
    out: {type: 'stdout' },
    logFile: {type: 'file', filename: 'error.log' }
  },
  categories: {
    default: { appenders: ['out'], level: 'debug' },
    errLog: { appenders: ['out'], level: 'error' },
    errLogF: { appenders: ['logFile'], level: 'fatal' }
  }
});

const logger = log4js.getLogger();
// const logger = log4js.getLogger('errLog');

logger.trace('this is trace');
logger.debug('this is debug');
logger.info('this is info');
logger.warn('this is warn');
logger.error('this is error');
logger.fatal('this is fatal');
logger.mark('this is mark');
