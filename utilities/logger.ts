import { createLogger, format, transports } from 'winston';

class LoggerSingleton {
  private static instance: any;

  private constructor() {}

  public static getInstance() {
    if (!LoggerSingleton.instance) {
      LoggerSingleton.instance = createLogger({
        level: 'info',
        format: format.combine(
          format.colorize(),
          format.timestamp(),
          format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level}]: ${message}`;
          })
        ),
        transports: [
          new transports.Console(),
          new transports.File({ filename: 'combined.log' })
        ],
      });
    }

    return LoggerSingleton.instance;
  }
}

export default LoggerSingleton;
