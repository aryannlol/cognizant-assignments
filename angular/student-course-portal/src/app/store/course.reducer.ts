import { Course } from '../models/course.model';

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

export const initialCourseState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

export function courseReducer(state = initialCourseState, action: any): CourseState {
  switch (action.type) {
    case '[Course] Load Courses':
      return { ...state, loading: true };
    case '[Course] Load Courses Success':
      return { ...state, loading: false, courses: action.payload };
    case '[Course] Load Courses Failure':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
