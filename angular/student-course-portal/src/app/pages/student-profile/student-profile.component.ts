import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  student = {
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    enrolledCourses: ['Angular Framework Essentials', 'Database Management Systems']
  };
}
