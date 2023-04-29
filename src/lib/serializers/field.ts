import { applyDecorators } from '@nestjs/common';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';

interface FieldType {
  description?: string;
  type: Date | string | number | any;
  example?: string | number;
  isArray?: boolean;
  exclude?: boolean;
}

export const Field = ({
  description,
  type,
  isArray = false,
  example,
  exclude,
}: FieldType) => {
  return applyDecorators(
    exclude ? Exclude() : Expose(),
    exclude
      ? ApiHideProperty()
      : ApiProperty({
          description,
          type,
          example,
          isArray,
        }),
    Type(() => type),
  );
};
