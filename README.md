# Angular

Angular is a TypeScript-based framework for developing dynamic, single-page web applications. Originally made by Microsoft programmers, Angular 1.0 was launched in 2010. Back then it was based on MVC design-pattern and used CDN as package manager. Some years later it was updated to Angular 2.0 and introduced component-based approach along with NPM.

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
4. Bootstrap: This is the root component of the module that is bootstrapped when the application starts.

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

# Components

An Angular component is a building block of an Angular application that controls a part of the user interface. To create a new component, open the terminal and type:

    ng g c folder-name/component-name

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

[] - Attribute Value Interpolation:

    <button [disabled]="searchWord.length === 0">Search</button>

() - Event Interpolation:

    <button (click)="search()">Search</button>

# Structural Directives in Angular

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