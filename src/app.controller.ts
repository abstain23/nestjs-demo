import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // @Inject(AppService)
  // private readonly appService: AppService;

  // @Inject('app_service')
  private readonly appService: AppService;

  @Inject('userInfo')
  private readonly userInfo: { name: string; age: number };

  @Inject('userInfo2')
  private readonly userInfo2: { name: string; desc: string };

  @Inject('userInfo5')
  private readonly userInfo5: { name: string; desc: string };

  @Inject('userInfo4')
  private readonly userInfo4: { name: string; age: number };

  @Get()
  getHello(): string {
    debugger;
    console.log(this.userInfo);
    console.log(this.userInfo2);
    console.log(this.userInfo5);
    console.log(this.userInfo4);
    return this.appService.getHello();
  }
}
