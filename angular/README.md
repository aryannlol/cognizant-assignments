# Angular Hands-on Assignments (1 to 10) - Student Course Portal

This repository contains the complete, production-style **Student Course Portal** Angular application, satisfying all **10 Hands-on Exercises** from the **Digital Nurture 5.0 Angular (v20.0) Exercise Book**.

---

## 📋 Comprehensive Breakdown of All 10 Hands-on Exercises

| Exercise | Level | Topics & Implementations |
| :--- | :--- | :--- |
| **HOL 1** | Beginner | Workspace setup, [`notes.txt`](file:///c:/Users/Aryan%20lol/Desktop/cognizant-assignments/angular/student-course-portal/notes.txt) core file explanations, components: `Header`, `Home`, `CourseList`, `StudentProfile`. |
| **HOL 2** | Beginner | Property binding, Event binding, Two-way binding (`[(ngModel)]`), lifecycle hooks (`ngOnInit`, `ngOnDestroy`, `ngOnChanges`), `@Input` & `@Output` communication (`enrollRequested`). |
| **HOL 3** | Beginner | Built-in structural directives (`*ngIf`, `*ngFor` with `trackBy`, `*ngSwitch`), attribute directives (`[ngClass]`, `[ngStyle]`), custom `@HostListener` directive ([`HighlightDirective`](file:///c:/Users/Aryan%20lol/Desktop/cognizant-assignments/angular/student-course-portal/src/app/directives/highlight.directive.ts)), custom pipe ([`CreditLabelPipe`](file:///c:/Users/Aryan%20lol/Desktop/cognizant-assignments/angular/student-course-portal/src/app/pipes/credit-label.pipe.ts)). |
| **HOL 4** | Intermediate | Template-driven form (`EnrollmentFormComponent`), built-in validators (`required`, `minlength`, `email`), form state CSS styling (`.ng-invalid.ng-touched`), error messages, reset handling. |
| **HOL 5** | Intermediate | Reactive form (`ReactiveEnrollmentFormComponent`), `FormBuilder`, custom sync validator (`noCourseCode`), custom async validator (`simulateEmailCheck`), dynamic repeating controls with `FormArray`. |
| **HOL 6** | Intermediate | Services & Dependency Injection: `CourseService` (shared data store), `EnrollmentService` (service-to-service injection), `Course` TypeScript model interface. |
| **HOL 7** | Intermediate | Angular Routing: `RouterModule` setup, dynamic route parameters (`/courses/:id`), query params, `CourseDetailComponent`, route protection with `AuthGuard` & `AuthService`. |
| **HOL 8** | Advanced | HTTP Client integration: `HttpClientModule` setup, Observables vs Promises, RxJS operators (`map`, `catchError`), HTTP Interceptors (`AuthInterceptor` adding Bearer token). |
| **HOL 9** | Advanced | NgRx Redux state management: Store setup, actions, reducers (`courseReducer`), immutable state management. |
| **HOL 10** | Advanced | Unit Testing with Jasmine & Karma: `TestBed` configuration, component rendering spec (`course-card.component.spec.ts`), `@Input`/`@Output` assertion, spyOn event checks. |

---

## 🚀 Running & Testing the Portal
Navigate into the application folder:
```bash
cd angular/student-course-portal
npm install
```

Start the application:
```bash
ng serve
```

Run Jasmine/Karma unit tests:
```bash
ng test
```
