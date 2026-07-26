import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  isLoading = true;
  selectedCourseId: number | null = null;
  courses = [
    { id: 1, name: 'Angular Framework Essentials', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Data Structures & Algorithms', code: 'CS102', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Database Management Systems', code: 'CS103', credits: 4, gradeStatus: 'passed' },
    { id: 4, name: 'Cloud Computing & DevOps', code: 'CS104', credits: 3, gradeStatus: 'failed' },
    { id: 5, name: 'Software Engineering Principles', code: 'CS105', credits: 2, gradeStatus: 'pending' }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // trackBy improves list rendering performance by telling Angular how to uniquely identify items.
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
