import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(
    private httpClient: HttpClient,
    ) { }

  findAll() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      //delay(500),
      tap(courses => console.log(courses))
    )
  };

  save(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

}
