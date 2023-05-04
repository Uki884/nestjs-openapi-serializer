import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetHelloSerializer } from './serializers/api/get-hello.serializer';
import { ApiOkResponse } from '@nestjs/swagger';
import { UseSerializer } from '../lib';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: GetHelloSerializer })
  @UseSerializer()
  getHello() {
    const result = new GetHelloSerializer(this.appService.getHello()).render();

    const result2 = new GetHelloSerializer(
      this.appService.getHellos(),
    ).render();

    return {
      result,
      result2,
    };
  }
}
