import { applyDecorators, UseGuards } from '@nestjs/common';

// Guards
import { AuthGuard } from '../guards/auth.guard';

const defaultGuards = [AuthGuard];

/**
 * Decorator to Apply Default Auth Guards to a Controller or Method
 * @returns {ClassDecorator} - The decorator
 */
export function DefaultAuthGuards(): ClassDecorator & MethodDecorator {
  return (
    target: object,
    propertyKey?: string | symbol,
    descriptor?: TypedPropertyDescriptor<any>,
  ) => {
    if (propertyKey && descriptor) {
      // MethodDecorator
      return applyDecorators(UseGuards(...defaultGuards))(
        target,
        propertyKey,
        descriptor,
      );
    } else {
      // ClassDecorator
      return applyDecorators(UseGuards(...defaultGuards))(target);
    }
  };
}
