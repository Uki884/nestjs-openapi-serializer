import {
  applyDecorators,
  UseInterceptors,
  ClassSerializerInterceptor,
  SerializeOptions,
} from '@nestjs/common';

export const UseSerializers = () => {
  return applyDecorators(
    UseInterceptors(ClassSerializerInterceptor),
    SerializeOptions({ excludePrefixes: ['_'], excludeExtraneousValues: true }),
  );
};
