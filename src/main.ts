// 导入NestFactory 模块， 它用于创建Nest应用的实例
import { NestFactory } from "@nestjs/core";
// 导入根模块
import {AppModule} from "./app.module";
// 定义一个异步函数， 用于创建Nest实例并且启动应用
async function bootstrap() {
    // 使用NestFactory静态文件创建一个Nest实例, 并传入根模块AppModule
    const app = await NestFactory.create(AppModule);
    // 在底层其实使用的是Express作为底层服务器
    // 让应用实例监听3000端口启动HTTP服务器
    await app.listen(3000);
}
bootstrap();