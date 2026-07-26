# Angular Hands-on Assignments - Student Course Portal

This repository contains the complete implementation for the **Student Course Portal** Angular application, adhering strictly to the **Digital Nurture 5.0 Angular Hands-on Exercise Book**.

---

## 📁 Submission Folder Structure

Per submission guidelines, the Angular application is organized in:
`angular/student-course-portal/`

---

## 🛠️ Implemented Hands-on Exercises

### 📌 Hands-on 1: Environment Setup, Project Structure & First Component
- **Files Explored & Documented:** Created [`notes.txt`](file:///c:/Users/Aryan%20lol/Desktop/cognizant-assignments/angular/student-course-portal/notes.txt) detailing `angular.json`, `tsconfig.json`, `tsconfig.app.json`, `package.json`, `src/main.ts`, `app.module.ts`, `app.component.ts`, `src/index.html`, and bundle budget configuration.
- **Components Generated:**
  - `components/header`: Navigation bar with portal title and links.
  - `pages/home`: Welcome dashboard with course availability stats.
  - `pages/course-list`: Grid of course cards.
  - `pages/student-profile`: Student details and enrolled course listing.

### 📌 Hands-on 2: Data Binding, Lifecycle Hooks & Component Communication
- **Binding Types Demonstrated in `HomeComponent`:**
  - **Interpolation:** `<h1>{{ portalName }}</h1>`
  - **Property Binding:** `<button [disabled]="!isPortalActive">`
  - **Event Binding:** `(click)="onEnrollClick()"`
  - **Two-Way Binding:** `<input [(ngModel)]="searchTerm">`
- **Lifecycle Hooks:**
  - `ngOnInit()`: Logged initialization and loaded state.
  - `ngOnDestroy()`: Logged component destruction.
  - `ngOnChanges()`: Implemented in `CourseCardComponent` to track input change details.
- **Parent-Child Communication (`@Input` & `@Output`):**
  - `@Input() course` passed down from `CourseListComponent` to `CourseCardComponent`.
  - `@Output() enrollRequested = new EventEmitter<number>()` emitted up to `CourseListComponent`.

### 📌 Hands-on 3: Directives & Pipes (Built-in & Custom)
- **Built-in Structural Directives:**
  - `*ngIf`: Loading state toggle (`isLoading`) and `#noCourses` fallback template.
  - `*ngFor` with `trackBy: trackByCourseId` for optimized DOM updates.
  - `*ngSwitch`: Grade status badge rendering (`passed` -> green, `failed` -> red, `pending` -> grey).
- **Attribute Directives & Styling:**
  - `[ngClass]`: Dynamic `card--full` and `expanded` toggling using typed getter `cardClasses`.
  - `[ngStyle]`: Dynamic left border color based on `gradeStatus`.
- **Custom Directive & Custom Pipe:**
  - **`HighlightDirective` (`appHighlight`):** Custom attribute directive listening to `@HostListener('mouseenter')` and `@HostListener('mouseleave')` to apply configurable background highlighting.
  - **`CreditLabelPipe` (`creditLabel`):** Custom pipe converting numerical credits (`1` -> `'1 Credit'`, `4` -> `'4 Credits'`, `0` -> `'No Credits'`).

### 📌 Hands-on 4: Template-Driven Forms & Validation
- **Component:** `pages/enrollment-form` (`EnrollmentFormComponent`)
- **Fields & Controls:** `studentName` (text), `studentEmail` (email), `courseId` (number), `preferredSemester` (select), `agreeToTerms` (checkbox).
- **Validation Rules:** `required`, `minlength="3"`, `email`.
- **Contextual Error Messages:** Displays specific error spans when controls are touched (`nameCtrl.touched && nameCtrl.errors?.['required']`).
- **Form State CSS:** `.ng-invalid.ng-touched` (red border) and `.ng-valid.ng-touched` (green border).
- **Form Controls:** Disable submit button on `enrollForm.invalid`, toggle success message on `onSubmit`, and clear states using `enrollForm.resetForm()`.

### 📌 Hands-on 5: Reactive Forms — FormBuilder, Custom & Async Validators, FormArray
- **Component:** `pages/reactive-enrollment-form` (`ReactiveEnrollmentFormComponent`)
- **Reactive Model:** Constructed using `FormBuilder.group` with `Validators.required`, `Validators.minLength(3)`, `Validators.email`, and `Validators.requiredTrue`.
- **Custom Synchronous Validator:** `noCourseCode` preventing course codes starting with `'XX'`.
- **Custom Asynchronous Validator:** `simulateEmailCheck` returning `{ emailTaken: true }` after an 800ms delay for emails containing `'test@'`.
- **Dynamic Controls (`FormArray`):** `additionalCourses` allows dynamically adding and removing course input controls using `FormArray.push()` and `FormArray.removeAt(index)`.
- **Form Values:** Logged `enrollForm.value` vs `enrollForm.getRawValue()`.

---

## 🚀 Running the Portal
Navigate into the application folder and start the server:
```bash
cd angular/student-course-portal
npm install
ng serve
```
Open `http://localhost:4200` in your browser.
