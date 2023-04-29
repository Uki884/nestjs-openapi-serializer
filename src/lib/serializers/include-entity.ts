import { applyDecorators } from '@nestjs/common';
import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

interface IncludeEntityType<T> {
  description?: string;
  serializer: T extends () => void ? T : any;
  isArray?: boolean;
}

function SerializeEntity(options: { serializer: any; isArray: boolean }) {
  return function (target: any, key: string) {
    const privateKey = `_${key}`;

    const getter = function () {
      return this[privateKey];
    };

    const setter = function (data: any) {
      if (options.isArray) {
        if (!data || data.length === 0) {
          this[privateKey] = [];
          return;
        }
        this[privateKey] = data.map((item) => new options.serializer(item));
      } else {
        if (!data) {
          this[privateKey] = null;
          return;
        }
        this[privateKey] = new options.serializer(data);
      }
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

const IncludeEntityDecorator = <T>({
  description,
  serializer,
  isArray = false,
}: IncludeEntityType<T>) => {
  return applyDecorators(
    ApiProperty({
      description,
      type: serializer,
      isArray,
    }),
    Type(() => serializer),
    SerializeEntity({ serializer, isArray }),
  );
};

export const IncludeEntity = <T>({
  description,
  serializer,
  isArray = false,
}: IncludeEntityType<T>) => {
  return applyDecorators(
    Expose(),
    IncludeEntityDecorator({ description, serializer, isArray }),
  );
};
