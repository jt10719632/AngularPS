// 3
import { Component } from "@angular/core";
// 2
@Component({
  // ng new apm --prefix pm
  // 'pm'-root is the prefix specified when we run the command above
  selector: 'pm-root',
  // Any valid html can be in the template.
  template:`
  <div>
      <h1>{{pageTitle}}</h1>
      <div>My First Component</div>
  </div>
  `
})
// 1
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
};

// // Import the members we need.
// // { Component } specifies the component we are importing
// // from '@angular/core' the path to the library/file that contains { Component }
// import { Component } from '@angular/core';

// // Metadata and Template for view
// // Decorator - a function that add metadata to a class, its members, or its method arguments
// // Decorator is prefixed with @
// @Component({
//   // Directive Name used in HTML
//   selector: 'pm-root',
//   // Template
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// // Class. Defines the properties and methods needed for the view.
// // export keyword makes this class available for use by other components of the application.
// export class AppComponent {
//   title: string = 'Angular: Getting Started';
// }
