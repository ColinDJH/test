import {AppController} from './app.controller';
import { Module } from '@nestjs/common';

// 
@Module({
    controllers: [AppController], // 引入 AppController 作为根控制器
    // 引入所需的 service 模块，并在 providers 数组中声明
    // providers: [] // 引入所需的 service 模块，并在 providers 数组中声明
})
export class AppModule{
    
}

/** 
 * 
 */