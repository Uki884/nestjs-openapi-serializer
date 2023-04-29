import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetHelloSerializer } from './serializers/api/get-hello.serializer';
import { ApiOkResponse } from '@nestjs/swagger';
import { UseSerializers } from '../lib';

@UseSerializers()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: GetHelloSerializer })
  getHello() {
    const result = new GetHelloSerializer(this.appService.getHello());
    return result;
  }
}
