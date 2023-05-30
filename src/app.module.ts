import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: AppService,
    //   useClass: AppService, // 完整写法
    // },
    // {
    //   provide: 'app_service', //inject 时的token
    //   useClass: AppService,
    // },
    {
      provide: 'userInfo',
      useValue: {
        // 静态的值
        name: 'cc',
        age: 18,
      },
    },
    {
      provide: 'userInfo2',
      useFactory() {
        return {
          name: 'dd',
          desc: 'desc==',
        };
      },
    },
    {
      provide: 'userInfo3',
      useFactory(user: { name: string }, appService: AppService) {
        return {
          name: user.name,
          desc: appService.getHello(),
        };
      },
      inject: ['userInfo', AppService],
    },
    {
      provide: 'userInfo5',
      async useFactory() {
        await new Promise((r) => {
          setTimeout(() => {
            r(200);
          }, 2000);
        });
        return {
          name: 'ffff',
          desc: 'fff=>desc',
        };
      },
    },
    {
      provide: 'userInfo4',
      useExisting: 'userInfo', // 给userInfo起个别名
    },
  ],
})
export class AppModule {}
