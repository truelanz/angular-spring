import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../model/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

@Input() courses: Course[] = []
@Output() add: EventEmitter<any> = new EventEmitter(false);
@Output() edit: EventEmitter<any> = new EventEmitter(false);

readonly displayedColumns = ['name', 'category', 'actions'];

constructor() {

}

onAdd() {
  this.add.emit(true);
  // this.router.navigate(['new'], {relativeTo: this.route}); //Com ActivatedRoute, criará uma rota relativa a atual.
}

onEdit(course: Course) {
  this.edit.emit(course);
}

}
