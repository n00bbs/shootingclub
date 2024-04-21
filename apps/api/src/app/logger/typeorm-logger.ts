import {
  Logger as TypeOrmLogger,
  QueryRunner,
  LoggerOptions as TypeOrmLoggerOptions,
} from 'typeorm';
import { Logger } from '@nestjs/common';

/**
 * Stolen from here:
 * https://github.com/nestjs/nest/issues/3657#issue-539003328
 */

/**
 * Effectively ripped out from:
 * https://github.com/typeorm/typeorm/blob/master/src/logger/SimpleConsoleLogger.ts
 */
export class TypeOrmLoggerContainer implements TypeOrmLogger {
  static ForConnection(connectionName: string, options: TypeOrmLoggerOptions) {
    const logger = new Logger(`TypeORM[${connectionName}]`);
    return new TypeOrmLoggerContainer(logger, options);
  }

  constructor(
    private readonly _logger: Logger,
    private readonly _options: TypeOrmLoggerOptions,
  ) {}

  /**
   * Logs query and parameters used in it.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logQuery(query: string, parameters?: unknown[], queryRunner?: QueryRunner) {
    if (
      this._options === 'all' ||
      this._options === true ||
      (this._options instanceof Array && this._options.indexOf('query') !== -1)
    ) {
      const sql =
        query +
        (parameters && parameters.length
          ? ' -- PARAMETERS: ' + this.stringifyParams(parameters)
          : '');
      this._logger.verbose('query' + ': ' + sql);
    }
  }

  /**
   * Logs query that is failed.
   */
  logQueryError(
    error: string,
    query: string,
    parameters?: unknown[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    queryRunner?: QueryRunner,
  ) {
    if (
      this._options === 'all' ||
      this._options === true ||
      (this._options instanceof Array && this._options.indexOf('error') !== -1)
    ) {
      const sql =
        query +
        (parameters && parameters.length
          ? ' -- PARAMETERS: ' + this.stringifyParams(parameters)
          : '');
      this._logger.error(`query failed: ` + sql);
      this._logger.error(`error:`, error);
    }
  }

  /**
   * Logs query that is slow.
   */
  logQuerySlow(
    time: number,
    query: string,
    parameters?: unknown[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    queryRunner?: QueryRunner,
  ) {
    const sql =
      query +
      (parameters && parameters.length
        ? ' -- PARAMETERS: ' + this.stringifyParams(parameters)
        : '');
    this._logger.warn(
      `query is slow - execution time: ${time}ms - query: ` + sql,
    );
  }

  /**
   * Logs events from the schema build process.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    if (
      this._options === 'all' ||
      (this._options instanceof Array && this._options.indexOf('schema') !== -1)
    ) {
      this._logger.log(message);
    }
  }

  /**
   * Logs events from the migrations run process.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logMigration(message: string, queryRunner?: QueryRunner) {
    this._logger.log(message);
  }

  /**
   * Perform logging using given logger, or by default to the this._logger.
   * Log has its own level and message.
   */
  log(
    level: 'log' | 'info' | 'warn',
    message: unknown,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    queryRunner?: QueryRunner,
  ) {
    switch (level) {
      case 'log':
        if (
          this._options === 'all' ||
          (this._options instanceof Array &&
            this._options.indexOf('log') !== -1)
        )
          this._logger.log(message);
        break;
      case 'info':
        if (
          this._options === 'all' ||
          (this._options instanceof Array &&
            this._options.indexOf('info') !== -1)
        )
          this._logger.debug(message);
        break;
      case 'warn':
        if (
          this._options === 'all' ||
          (this._options instanceof Array &&
            this._options.indexOf('warn') !== -1)
        )
          this._logger.warn(message);
        break;
    }
  }

  /**
   * Converts parameters to a string.
   * Sometimes parameters can have circular objects and therefor we are handle this case too.
   */
  protected stringifyParams(parameters: unknown[]) {
    try {
      return JSON.stringify(parameters);
    } catch (error) {
      // most probably circular objects in parameters
      return parameters;
    }
  }
}
