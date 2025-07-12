# CustMatTooltip

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Usage

1. Import `CustMatTooltipModule` in your app module:
   ```ts
   import { CustMatTooltipModule } from 'projects/cust-mat-tooltip/src/public-api';

   @NgModule({
     imports: [CustMatTooltipModule, ...]
   })
   export class AppModule { }
   ```

2. Use the `custToolTip` directive in your templates:
   ```html
   <button #tooltipc="custToolTip" custToolTip [toolTipMessage]="'<h2>Custom Tooltip</h2>'">custToolTip</button>
   <button matButton (click)="tooltipc.show()">Show tooltip</button>
   ```

## Customization

- The tooltip content can be set using the `[toolTipMessage]` input, which supports HTML.
- The tooltip uses a custom component for rendering, allowing for further style and behavior customization.
- Styles are defined in [`cust-mat-tooltip.component.scss`](src/lib/cust-mat-tooltip.component.scss).

## Publishing

After building your library with `ng build cust-mat-tooltip`, go to the dist folder `cd dist/cust-mat-tooltip` and run `npm publish`.

