## Anotações para fins de consulta:

- Após gerar o ng new, eu adicionei o Angular Material: `ng add @angular/material`.
- Criei um módulo com um route: `ng g m module-name --routing` 

### Configurando a rota do component...
- Na rota criada para o component courses, adicionei:
  - ```{ path: '', component: CoursesComponent }```
- Em app-routing, redirecionei a rota, para que quando for vazia, ir para /courses:
  - ```{ path: '', pathMatch: 'full', redirectTo: 'courses' }```,
  
  - [Lazy loading DOC](https://angular.io/guide/)

  - ```{
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }```

### Configurando Angular Material colors.
`@import '@angular/material/theming';`
`@include mat-core();`

`$custom-app-primary: mat-palette($mat-blue);`
`$custom-app-secondary: mat-palette($mat-indigo, A200, A400, 700);`
`$custom-app-warn: mat-palette($mat-red);` //alert color

- Implementando variáveis no Tema
  - `$custom-theme: mat-light-theme($custom-app-primary, $custom-app-secondary, $custom-app-warn);``

`@include angular-material-theme($custom-theme);`

### Criando model e implementando no HTML

> [_vídeo do curso para referencia_](https://www.youtube.com/watch?v=LvYXiOh3vZ4&list=PLGxZ4Rq3BOBpwaVgAPxTxhdX_TfSVlTcY&index=6&ab_channel=LoianeGroner)
- Criando model com interface, ng g interface model/nomeinterface
  -  exemplo:
  
        ```export interface Course {
      _id:any;
      name: string;
      category:string;
       }```

  - implementando no component:
      - ` courses: Course[] = [];`

  - implementando no HTML:
      - ```<table mat-table [dataSource]="courses" class="mat-elevation-z8">```

### criando modulo para armazenar(organizar) os imports do angular Material.
- estrutura:
-  
  ``` 
   @NgModule({
   exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule
   ]
  })
  export class AppMaterialModule { }

- É necessário somente o `imports:[] e export class` nesse modulo.

### Services
- Criando service module `ng g s services/className` 
  - Regras de negócios, dados e manipulação de dados devem ser contidos nos **services**.
  - Os **components.ts** só serão encarregados de manipular os arquivos que serão renderizados.
  - Adcionar `httpClient: HttpClient` no constructor do service para chamadas http. [_ref_](https://www.youtube.com/watch?v=76fUSr1nSDM&list=PLGxZ4Rq3BOBpwaVgAPxTxhdX_TfSVlTcY&index=8&ab_channel=LoianeGroner) Importar de maneira global do módulo `HttpClientModule` em `app.module` . Adcionar uma variável do service no constructor do component que ele será utilizado, tipando como `:NameService`. 

### Tratamento de errros [(_ref_)](https://www.youtube.com/watch?v=gi0ZJ8-r6IM&list=PLGxZ4Rq3BOBpwaVgAPxTxhdX_TfSVlTcY&index=11&ab_channel=LoianeGroner)


### Pipe [(ref)](https://www.youtube.com/watch?v=uNFIh3jvp34&list=PLGxZ4Rq3BOBpwaVgAPxTxhdX_TfSVlTcY&index=12&ab_channel=LoianeGroner)
- `ng g pipe dirName/pipes/pipeName`
- estrutura exemplo:
  - ```transform(value: string, ...args: unknown[]): string {
    switch(value) {
      case 'fron-end': return 'code';
      case 'beck-end': return 'computer';
    }
    return 'code';
  }

 ### Conectando Angular com API e PROXY_CONFIG [_Ref_](https://www.youtube.com/watch?v=ATjHgBh8dWg&list=PLGxZ4Rq3BOBpwaVgAPxTxhdX_TfSVlTcY&index=16&ab_channel=LoianeGroner)
- criar um arquivo na raiz do projeto `proxy.conf.js`
  - Configuração: 
  ```const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  }

  ];
  module.exports = PROXY_CONFIG;

- Em `package.json`, adicionar em `start: "ng serve"` `"--proxy-config proxy.conf.js"`
- Depois dessas configurações é necessário iniciar o projeto Angular com `npm run start`


### Atualização do angular: 
- [_update.angular.io_](https://update.angular.io/)
  - `ng update`

### Formulários(Forms) no Angular. [(_Ref_)](https://www.youtube.com/watch?v=R3yy3RX4FyM&list=PLGxZ4Rq3BOBpwaVgAPxTxhdX_TfSVlTcY&index=19&ab_channel=LoianeGroner)
- Usar `ReactiveFormsModule` no Modulo gerenciador dos components.
- No _component do form_, faz, por exemplo:
  ```
    form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }
- No _HTML_ (utilizando Angular Material):
  ```
  <mat-card-content>
    <form [formGroup]="form" class="container_form">
      <mat-form-field>
        <input matInput placeholder="Nome" formControlName="name">
      </mat-form-field>
