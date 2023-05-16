## Anotações para fins de consulta:

- Após gerar o ng new, eu adicionei o Angular Material: `ng add @angular/material`.
- Criei um módulo com um route: `ng g m module-name --routing` 

### Configurando a rota do component...
- Na rota criada para o component courses, adicionei:
  - `{ path: '', component: CoursesComponent }`
- Em app-routing, redirecionei a rota, para que quando for vazia, ir para /courses:
  - `{ path: '', pathMatch: 'full', redirectTo: 'courses' }`,
  
  - [Lazy loading DOC](https://angular.io/guide/)

  - `{
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }`

### Configurando Angular Material colors.
`@import '@angular/material/theming';`
`@include mat-core();`

`$custom-app-primary: mat-palette($mat-blue);`
`$custom-app-secondary: mat-palette($mat-indigo, A200, A400, 700);`
`$custom-app-warn: mat-palette($mat-red);` //alert color

- Implementando variáveis no Tema
  - `$custom-theme: mat-light-theme($custom-app-primary, $custom-app-secondary, $custom-app-warn);`

`@include angular-material-theme($custom-theme);`

### Criando model e implementando no HTML

> [_vídeo do curso para referencia_](https://www.youtube.com/watch?v=LvYXiOh3vZ4&list=PLGxZ4Rq3BOBpwaVgAPxTxhdX_TfSVlTcY&index=6&ab_channel=LoianeGroner)
- Criando model com interface, ng g interface model/nomeinterface
  -  exemplo:
  
        ``export interface Course {
      _id:any;
      name: string;
      category:string;
       }``

  - implementando no component:
      - ` courses: Course[] = [];`

  - implementando no HTML:
      - `<table mat-table [dataSource]="courses" class="mat-elevation-z8">`

### criando modulo para armazenar(organizar) os imports do angular Material.
- estrutura:
-  
  `` 
   @NgModule({
   exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule
   ]
 })
 export class AppMaterialModule { } ``
    - É necessário somente o `imports:[] e export class` nesse modulo.



