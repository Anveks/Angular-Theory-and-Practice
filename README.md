# Angular

Angular is a TypeScript-based framework for developing dynamic, single-page web applications. Originally made by Google, Angular 1.0 was launched in 2010. Back then it was based on MVC design-pattern and used CDN as package manager. Some years later it was updated to Angular 2.0 and introduced component-based approach along with NPM.

# Installing Angular

If you dont have Angular on your PC, open the Command Terminal and install Angular CLI (Command Line Interface):

      npm install -g @angular/cli

Then create a folder for your new Angular project, open it with Command Terminal and type:

      ng new my-angular-project

Open the terminal inside the project, compile and run the project by typing:

      ng serve

In case you also want to install pack of extensions recommended for Angular, check "Angular Essentials" in your VS Extensions.

NB: The default Angular port is 4200.

# Angular Structure and Components

Each Angular app is build of modules and components:

An Angular module is a logical unit that groups related functionality together. Modules help organize an application by separating it into functional areas. Each module can define its own components, services, and other elements. A module can import and export other modules and can be reused across multiple applications.

An Angular component is a building block of an Angular application that controls a part of the user interface. A component consists of an HTML template, a TypeScript class, and associated styles and other assets. Components can be nested and reused throughout the application. Components can also communicate with other components by emitting and receiving events.

# Modules

A module is basically a container for a group of components, services, directives, pipes, and other modules. It typically consists of the following elements:

1. Declarations: These are the components, directives, and pipes that belong to the module.
2. Imports: These are other modules that this module depends on. Any exported components, directives, or pipes from imported modules can be used within this module.
3. Providers: These are the services that are available to the components within the module.
4. Bootstrap: This is the root component of the module that is bootstrapped when the application starts = meaning it will be the first component to run.

    @NgModule({
      declarations: [
        AppComponent,
        MyComponent
      ],
      imports: [
        BrowserModule
      ],
      providers: [
        MyService
      ],
      bootstrap: [
        AppComponent
      ]
    })

NB: Each new component added to the app's html file automatically gets added to the module file.

# Components

An Angular component is a building block of an Angular application that controls a part of the user interface. To create a new component, open the terminal and type:

    ng g c folder-name/component-name

NB: In case you don't want test-file in your new component, just add: --skip-tests after the command.

Each component consists of:

1. HTML
2. CSS
3. TS

TS file includes:
- selector: the name of the component.
- templateUrl: an HTML template that defines the structure of the component (it can include bindings, directives, and other components).
- styleUrls:  CSS styles that apply to the component.
- class: a TypeScript class that defines the behavior of the component. It can include properties, methods, and lifecycle hooks.
```
    import { Component } from '@angular/core';

    @Component({
      selector: 'new-component',
      templateUrl: './new-component.component.html',
      styleUrls: ['./new-component.component.css']
    })
    export class NewComponentComponent {
      //
    }
```
# Types of Interpolation

Basically there is only one type of interpolation in Angluar - called "string interpolation", but it has different usages and slightly different syntax:

{{}} - Tag Content:

      <h2>{{searchTitle}}</h2>

[] - Attribute Value Interpolation (= Property Binding, binds html attributes and values of elements of a specified class):

    <button [disabled]="searchWord.length === 0">Search</button>

() - Event Interpolation(= Event Binding):

    <button (click)="search()">Search</button>

[()] - Two-way Binding, "Banana in a box" (is used to bind a form input element (such as a text input or a select box) to a property in the component class, so that changes made in the UI are reflected in the component, and changes made in the component are reflected in the UI.):

    <input [(ngModel)]="name">

# Angular Directives: Structural Directives

Angular directives are markers on a DOM element that tell AngularJS to attach a specified behavior or to transform the element and its children. Directives are used to create reusable components, extend HTML with new functionality, and provide an interface for communication between components and the application.

Structural directives are a type of directive in Angular that allow you to modify the structure of the DOM based on certain conditions. They are called "structural" because they change the structure of the HTML element they are attached to, rather than just modifying its appearance or behavior.

There are three built-in structural directives in Angular:

1. *ngIf - used to conditionally render elements based on a boolean expression. 
```
  <div *ngIf="showElement">This element is only displayed if showElement is true.</div>
```
2. *ngFor - used to generate a list of elements based on an array or iterable object. 
```
  <ul>
    <li *ngFor="let item of results">{{item}}</li>
  </ul>
```
3. *ngSwitch -  used to conditionally render elements based on a set of cases. It's similar to a switch statement in JavaScript.

```
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">This element is displayed if color is 'red'.</div>
    <div *ngSwitchCase="'blue'">This element is displayed if color is 'blue'.</div>
    <div *ngSwitchDefault>This element is displayed if color is not 'red' or 'blue'.</div>
  </div>
```
NB: you can also define classNames/idNames when needed by using . or # tags before initializing. Example: 

     <input type="search"  #txtInput (input)="searchWord = txtInput.value"/>

Here the id of this input tag is "txtInput", which is needed in the following (input) event, where we state that the searchWord variable will be set as textInput's value.

# Attribute Directives

Built-in attributes used to dynamically change styling of the components, for example:

- *ngStyle

```
  <span [ngStyle]="style">Our specials: </span>
```
Attribute directive will check the value stored in class property named 'style' and will apply it to the code.
# Decorators

In Angular, a decorator is a special kind of declaration that can be attached to a class declaration, method, property, or parameter. Decorators are used to annotate classes and their members with additional metadata, which can then be used by Angular to perform various tasks such as registering the class as a component or injecting dependencies into it.

Decorators are functions that are prefixed with the @ symbol and are executed at runtime when the code is loaded. They can accept arguments, which can be used to configure their behavior.

Angular provides several built-in decorators that can be used to annotate classes and their members, such as:

- @Component: Used to annotate a class as an Angular component.
- @Directive: Used to annotate a class as an Angular directive.
- @Pipe: Used to annotate a class as an Angular pipe.
- @Injectable: Used to annotate a class as an Angular service.
- @Input: Used to create an input property on a component. Input properties allow values to be passed into a component from its parent component. 
- @Output: Used to create an output property on a component. Output properties allow components to emit events to its parent component. 

NB: Most of the time the type of @Output() decorator will be EventEmitter - a built-in class in JavaScript that allows to create and emit custom events. It is also part of the Node.js core libraries and can be used in both server-side and client-side JavaScript applications.

The EventEmitter class provides two main functionalities:

1. Registering event listeners: Developers can use the on() method to register a listener for a particular event. Whenever the event is emitted, the registered listener function will be called.
2. Emitting events: Developers can use the emit() method to emit an event. This will trigger all the registered listeners for that event to be called.

# Pipes

In Angular, pipes are a feature that allows you to transform data in your template before displaying it to the user. Pipes are a type of Angular directive that takes data as input and transforms it to a desired output. Pipes are used to format data, convert it to a different type, or filter it based on certain criteria.

Pipes are used by placing the | symbol followed by the pipe name in the template expression.

```
    <span>Celebrating your Birthday? Get a cake only for {{price | currency: 'ILS'}}</span>
```
Angular provides several built-in pipes, including:

- DatePipe: Formats a date value according to a specified  format.
- UpperCasePipe and LowerCasePipe: Converts a string to upper or lower case.
- CurrencyPipe: Formats a number as a currency value.
- DecimalPipe: Formats a number as a decimal value.
- PercentPipe: Formats a number as a percentage value.
- JsonPipe: Converts an object to a JSON string.

# Routing

In case you didn't install angular routing package along with your project, open the terminal and type:

    npm install @angular/router --save

Then you'll get app-routing.module.ts - this will be the main routing file*. Open it, then add a path and a component into the routes:

```
    const routes: Routes = [
  { path: "home", component: HomeComponent }
];
```
Then, add the <router-outlet> element where you want to display the routed component. For example, inside the "main" tag.

Change the href-links to routerLink:

      <a routerLink="/home">Home</a>


*In case the package was not pre-installed, don't forget to import it into your main app.module.ts.

# Template Reference Variable

A Template Reference Variable is a variable declared on an HTML element in an Angular template that can be referenced in the component code. It is a way to get access to an HTML element or directive instance from within the component class.

- First approach:

To declare a Template Reference Variable, you can use the hash symbol (#) followed by a name on any HTML element or directive in the template. For example:

```
    <select #myLocation (change)="display(myLocation)">
      <option>North</option>
      <option>South</option>
      <option>East</option>
      <option>West</option>
    </select>
```

In this case # won't be a sign of an id <sub>(overall it is a bad practice to give id's in Angular)</sub>, but an object of Reference Type - [object HTMLSelectElement]. It's value can be used both inside the HTML and by a class.

NB: Template Reference Variable is a shorter alretnative to two-way binding.

- Another approach:

Another way to get a reference is by using annotations inside of a class: 

```
      @ViewChild("myLocation")
      public myLocationRef: ElementRef<HTMLSelectElement>;
```
@ViewChild is an annotation that will look for "myLocation" element throughout the HTML code and then put it inside myLocationRef. Note: annotations always affect the first line of code after them.

The value of my location will be accessible after initializing it:

```
        const myLocation = this.myLocationRef.nativeElement;
        alert(myLocation.value);
```

# Dependency Injection - DI

Dependency injection is a design pattern used in software engineering. The basic idea is to separate the creation and management of object dependencies from the code that uses them, by having an external entity provide the necessary dependencies to a component or module. Example:

      public constructor(title: Title){
        title.setTitle("Northwind Home");
      }

Here, we told Angular to use a built-in service used to get and set current HTML-title: the framework creates an object of a class that we need inside the class that we work with, so we can access its properties/methods.

# Getting Data from a Server

We create utils, models, services folders just as we do in React. The main difference is instead of using 'export default' we use just 'export' statement'*.

To get data from a server first we need to import HttpClientModule into our app.modules.ts and manually add:

    import { HttpClientModule } from '@angular/common/http';

Then in services we create a DI <sub>(and use some object assignment)</sub> so that we can access the HttpClientModule:

     public constructor(private http: HttpClient){}

How to get the response's value? By using Observables. In simple terms, an Observable is a stream of data that can be observed by other parts of the code, and can emit values over time. It can be used to represent asynchronous operations such as network requests, user input, and other events. Observables are built-in in Angular as a part of RxJS <sub>(Reactive Extensions for JavaScript)</sub> Library. They are similar to Promises in a way that both of them handle asynchronous code, yet their main difference is that Promises can only bring one single value <sub>(there is always one Resolve)</sub>, while Observables can emit multiple values over time.

      const observale = this.http.get<ProductModel[]>(appConfig.productsURL);

Then we transfrom the Observable to Promise so we can use await/async properly <sub>(note: await-async can be applied only on Primises)</sub>:

      observable.toPromise();

OR use:

      firstValueFrom(observable) // lastValueFrom(observable)

We do not need to export services. Instead, we access it by using Dependency Injection within a class where we need the data:

      constructor(public productService: ProductService){}

NB: to ensure DI will work properly, make sure you added @Injectable() annotation before ProductService class!

    @Injectable({
      providedIn: "root" // tells Angular that this class is accessible in the whole app's scope
    })

To use productService and get the data we need a lifecycle hook ngOnInit <sub>(the same as useEffect() in React)</sub>. It is automatically provided by the interface "OnInit":  

    export class ProductsListComponent implements OnInit {

      public products: ProductModel[];
      constructor(public productService: ProductService){}
      public async ngOnInit() {
        try {
          this.products = await this.productService.getAllProducts();
        } catch(err: any){
          console.log(err.message);
        }
      }

    }

Finally, display the data in the HTML by using *ngFor directive and transfering the products as props to a CardComponent:

      <app-product-card *ngFor="let p of products" [product]="p"></app-product-card>

NB: ProductCard should also have an @Input annotation so it can receive 'props':

      @Input()
      public product: ProductModel;

*'export' statement is used to export functions, objects, or values from a module to be used in other modules. It allows you to export multiple named values from a module; 'export default' is used to export a single value, object, or function from a module. You can only use it to export one default value per module.

# Extra Notes on Angular

1. Angular Change Detection - how Angular works with states behind the scene?

Angular Change Detection is a process that updates the view of an Angular application whenever there is a change in the data. In other words, it is a mechanism that tracks changes to the application data and updates the view accordingly.

Angular uses a unidirectional data flow architecture where data flows from the component class to the template. Whenever there is a change in the component's data, the change detection system updates the view to reflect the latest data.

There are two types of change detection strategies in Angular:

- Default Change Detection Strategy: It is based on the zone.js library and triggers the change detection whenever an event occurs, such as a user clicking a button or entering text in a form field.

- OnPush Change Detection Strategy: It is a performance optimization technique that reduces the number of change detection cycles by only triggering change detection when there is a change in the @Input() properties of the component or when an event is fired.

In summary, the Angular Change Detection system is responsible for keeping the view in sync with the component's data. It is an essential part of Angular's architecture that enables developers to build dynamic and reactive user interfaces.

# Some TypeScript Notes:

If we define a class property like that:

    public text: string;

We'll get TypeScript error. Solution is simple - initialize the property right away:

    public text: string = "";

OR: go to tsconfig.json file and change strictNullChecks: false (you can find it in CompilerOptions).

