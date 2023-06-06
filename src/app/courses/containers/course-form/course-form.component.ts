import { CoursesService } from '../../services/courses.service';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    category: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) { }

ngOnInit(): void {
  const course: Course = this.route.snapshot.data['course'];
  this.form.setValue({
    _id: course._id,
    name: course.name,
    category: course.category
  });
}

  private onError() {
  this.snackBar.open('ERRO! Não foi possível salvar curso...', '', { duration: 3000 })
}

  private onSucess() {
  this.snackBar.open('Curso salvo com sucesso!', '', { duration: 3000 });
  this.onCancel();
}

onSubmit() {
  this.service.save(this.form.value)
    .subscribe(result => this.onSucess(), error => this.onError());
}

onCancel() {
  this.location.back();
}

}
