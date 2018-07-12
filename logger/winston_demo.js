const winston = require('winston')
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

const reqLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'req_error.log', level: 'error' }),
    new winston.transports.File({ filename: 'req_combined.log' })
  ]
})

logger.info('my logger with winston')
logger.error('its a error log')

reqLogger.info('req logger')




// 可用elastic做日志可视化