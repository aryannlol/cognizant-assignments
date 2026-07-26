import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 1, name: 'Angular Framework Essentials', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Data Structures & Algorithms', code: 'CS102', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Database Management Systems', code: 'CS103', credits: 4, gradeStatus: 'passed' },
    { id: 4, name: 'Cloud Computing & DevOps', code: 'CS104', credits: 3, gradeStatus: 'failed' },
    { id: 5, name: 'Software Engineering Principles', code: 'CS105', credits: 2, gradeStatus: 'pending' }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCoursesObservable(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
