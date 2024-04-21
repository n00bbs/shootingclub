import { ConsoleLogger } from '@nestjs/common';

export class Logger extends ConsoleLogger {
  override verbose(message: unknown, context?: string | undefined): void;
  override verbose(message: unknown, ...optionalParams: unknown[]): void {
    // The following section is a workaround to disable overly verbose logging from the keycloak library
    if (
      optionalParams.length === 1 &&
      optionalParams[0] === 'Keycloak' &&
      typeof message === 'string'
    ) {
      if (message.startsWith('User JWT:')) {
        return;
      }
    }
    super.verbose(message, ...optionalParams);
  }
}
