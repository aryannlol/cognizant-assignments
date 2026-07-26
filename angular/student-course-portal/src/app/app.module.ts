import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form.component';

import { HighlightDirective } from './directives/highlight.directive';
import { CreditLabelPipe } from './pipes/credit-label.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseCardComponent,
    HomeComponent,
    CourseListComponent,
    StudentProfileComponent,
    EnrollmentFormComponent,
    ReactiveEnrollmentFormComponent,
    HighlightDirective,
    CreditLabelPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
