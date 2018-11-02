/**
 *  Abstract logger interface
 */
export abstract class LoggerService {
  abstract trace(message: any, ...additional: any[]): void;

  abstract debug(message: any, ...additional: any[]): void;

  abstract info(message: any, ...additional: any[]): void;

  abstract log(message: any, ...additional: any[]): void;

  abstract warn(message: any, ...additional: any[]): void;

  abstract error(message: any, ...additional: any[]): void;
}
