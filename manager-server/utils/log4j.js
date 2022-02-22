/**
 * 日志存储
 * @author 6
 */

var log4js = require("log4js");
const level = {
  'trace': log4js.levels.TRACE,
  'debug': log4js.levels.DEBUG,
  'info': log4js.levels.INFO,
  'warn': log4js.levels.WARN,
  'error': log4js.levels.ERROR,
  'fatal': log4js.levels.FATAL,
}

log4js.configure({
  appenders: {
    console: { type: 'console' },
    info: {
      type: 'file',
      filename: 'logs/all-logs.log',
    },
    error: {
      type: 'dateFile',
      filename: 'logs/log',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true // 设置文件名称为 filename + pattern
    }
  },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
    error: {
      appenders: ['error', 'console'],
      level: 'error'
    },
    info: {
      appenders: ['info', 'console'],
      level: 'info'
    }
  }
})
/**
 * 日志输出 levrl为debug
 * @param {string}} content : ;
 */
exports.debug = (content) => {
  let logger = log4js.getLogger();
  logger.level = level.debug;
  logger.debug(content)
}

/**
 * 日志输出 levrl为error
 * @param {string}} content : ;
 */
exports.error = (content) => {
  let logger = log4js.getLogger('error');
  logger.level = level.error;
  logger.error(content)
}

/**
 * 日志输出 levrl为info
 * @param {string}} content : ;
 */
exports.info = (content) => {
  let logger = log4js.getLogger('info');
  logger.level = level.info;
  logger.info(content)
}