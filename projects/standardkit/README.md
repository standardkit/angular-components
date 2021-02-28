| :warning: | PRE-ALPHA |
|-----------|:----------|

# @standardkit/angular-components

Install normally.

```bash
npm i -s @standardkit/angular-components
```

Also use styles & themes to make it look good.

```bash
npm i -s @standardkit/themes
```

```bash
npm i -s @standardkit/styles
```

## Usage

Import the StandardKit module into your angular project.

```typescript
@NgModule({
  imports: [
    StandardKitModule.forRoot({
      iconSet: 'font-awesome', // For example
      iconMap: {error: 'times-circle', close: 'time'},
      alert: {hasIcon: true, isDismissable: true} // For example
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

```

Then import the modules you need where you need them.

It uses a system of Cascading Configuration so by default it works, 
but you can override almost everything with more specific configuration.

check https://docs.standardkit.io for more information.
