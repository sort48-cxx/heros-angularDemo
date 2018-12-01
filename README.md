# AngurlarDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## 小结
#### 把数据访问逻辑重构到了 HeroService 类中。

#### 在根注入器中把 HeroService 注册为该服务的提供商，以便在别处可以注入它。

#### 使用 Angular 依赖注入机制把它注入到了组件中。

#### 给 HeroService 中获取数据的方法提供了一个异步的函数签名。

#### 发现了 Observable 以及 RxJS 库。

#### 使用 RxJS 的 of() 方法返回了一个模拟英雄数据的可观察对象 (Observable<Hero[]>)。

#### 在组件的 ngOnInit 生命周期钩子中调用 HeroService 方法，而不是构造函数中。

#### 创建了一个 MessageService，以便在类之间实现松耦合通讯。

#### HeroService 连同注入到它的服务 MessageService 一起，注入到了组件中。

#### 来源：https://www.angular.cn/tutorial/toh-pt4
