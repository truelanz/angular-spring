import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'front-end' }
    /* { _id: '2', name: 'Angular + Spring', category: 'full-stack' },
    { _id: '2', name: 'Java', category: 'back-end' } */
  ];
  displayedColumns = ['name', 'category'];

  constructor() {

  }

  ngOnInit(): void {

  }

}
