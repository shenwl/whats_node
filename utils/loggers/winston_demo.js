const winston = require('winston')
require('winston-daily-rotate-file')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.DailyRotateFile({
      level: 'error',
      filename: 'error-%DATE%.log', 
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    }),
    new winston.transports.DailyRotateFile({ 
      filename: 'combined-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
})

const reqLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.DailyRotateFile({ 
      level: 'error',
      filename: 'req_error-%DATE%.log', 
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    }),
    new winston.transports.DailyRotateFile({ 
      filename: 'req_combined-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
})

logger.info('my logger with winston')
logger.error('its a error log')

reqLogger.info('req logger')




// 可用elastic做日志可视化