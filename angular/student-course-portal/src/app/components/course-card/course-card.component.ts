import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course: { id: number; name: string; code: string; credits: number; gradeStatus?: string } = {
    id: 0, name: '', code: '', credits: 0, gradeStatus: 'pending'
  };
  @Output() enrollRequested = new EventEmitter<number>();
  isExpanded = false;

  get cardClasses() {
    return {
      'card--enrolled': false,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      console.log('Course input changed:', changes['course'].previousValue, '=>', changes['course'].currentValue);
    }
  }

  onEnroll() {
    this.enrollRequested.emit(this.course.id);
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
