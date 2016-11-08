# Cleave.js Angular2 Directive

Simple directive to use the excellent [Cleave.js library](https://github.com/nosir/cleave.js/) in an Angular2 application.

## How to use

Import the directive in your application's module

```
npm i -S angular-cleave
```

Import the directive in your application's module

```
import { CleaveDirective } from 'angular-cleave'
@NgModule({
  ...
  declarations: [
    ...
    CleaveDirective
  ],
  ...
})
```

Use it in your components
```

@Component({
  ...
  template: '<input type="text" [cleave]="cleaveOptions">'
})
export class LoginComponent {
  cleaveOptions = {
    numeral: true,
    delimiter: '*',
    blocks: [1, 2, 3]
  }
}
```

### HTML literal object

You may also pass in directly the options in the HTML
```
<input type="text" cleave="{creditCard: true}">
```

### Short syntax

To make it easier in simplest use cases, you may also use the following short syntax

```
<input type="text" cleave="creditCard">
```

Available options :
- `creditCard`
- `phone`
- `date`
- `numeral`

## Options

For the full list of options, check [Cleave.js documentation](https://github.com/nosir/cleave.js/blob/master/doc/options.md).

If you need to support **Phone lib add-ons**, throw in an issue. Even better if you know how to had support for these add-ons, submit a PR 😎

Any other feature request, or if the lib doesn't work on your setup please file an issue.
