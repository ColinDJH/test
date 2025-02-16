## 学习目标
- nest.js 新手 学习用法和如何写项目
- 熟练 学习手写nest.js

## Nest的依赖包
- @nestjs/core Nest.js 核心模块， 提供构建、启动和管理Nest.js应用程序的基础设施
- @nestjs/common 包含了构建Nest.js应用程序基础设施和常用装饰器，像控制器、服务、中间件、守卫、拦截器、管道、异常过滤等
- rxjs 用于构建异步和事件驱动程序的库
- reflect-metadata 实现元编程的库， 提供元数据反射API，可以在运行时检查和操作对象的元数据
- @nestjs/platform-express Nest的Express平台适配器， 提供中间件路由等功能

## tsconfig.json
- "experimentalDecorators": true, 启动实验性的装饰器特性
- "target": "ES2021", 指定ESMAScript目标版本
- "moduleResolution": "NodeNext", 如何查找第三方模块
- "module": "NodeNext", 指定生成的模块代码系统