# MatCustomTooltip

**MatCustomTooltip** is an Angular library that extends Angular Material's tooltip functionality, allowing you to display rich HTML content and customize tooltip appearance and behavior. With easy integration and flexible options, MatCustomTooltip helps you create interactive, styled tooltips for your Angular applications.

## Features

- Supports HTML content in tooltips
- Customizable position: above, below, left, right, before, after
- Manual show/hide methods
- Configurable show/hide delays
- Accessibility support

## Installation

```sh
npm install mat-custom-tooltip
```

## Usage

1. **Import the module:**

   ```typescript
   import { MatCustomTooltipModule } from 'mat-custom-tooltip';

   @NgModule({
     imports: [MatCustomTooltipModule, ...]
   })
   export class AppModule { }
   ```

2. **Add the directive in your template:**

   ```html
   <button
     #tooltip="matCustomTooltip"
     matCustomTooltip
     [tooltipMessage]="'<b>Custom HTML Tooltip</b><br>With multiple lines!'"
     tooltipPosition="above"
   >
     Hover me!
   </button>
   <button mat-button (click)="tooltip.show()">Show tooltip</button>
   ```

3. **Manual show/hide:**

   ```typescript
   // In your component class
   @ViewChild('tooltip', { static: false }) tooltip: MatCustomTooltipDirective;

   showTooltip() {
     this.tooltip.show();
   }

   hideTooltip() {
     this.tooltip.hide();
   }
   ```

## API

| Input                | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `tooltipMessage`     | The HTML content to display in the tooltip                                  |
| `tooltipPosition`    | Position: `above`, `below`, `left`, `right`, `before`, `after` (default: below) |
| `tooltipShowDelay`   | Delay in ms before showing the tooltip                                      |
| `tooltipHideDelay`   | Delay in ms before hiding the tooltip                                       |
| `tooltipDisabled`    | Disable the tooltip                                                         |

## Examples

**Basic HTML Tooltip:**
```html
<button matCustomTooltip [tooltipMessage]="'<b>Hello!</b> This is a <i>custom</i> tooltip.'">
  Hover for tooltip
</button>
```

**Custom Position and Delay:**
```html
<button
  matCustomTooltip
  [tooltipMessage]="'Tooltip on the right!'"
  tooltipPosition="right"
  [tooltipShowDelay]="500"
  [tooltipHideDelay]="1000"
>
  Hover me
</button>
```

**Manual Control:**
```html
<button #myTooltip="matCustomTooltip" matCustomTooltip [tooltipMessage]="'Manual tooltip'">
  Hover or click below
</button>
<button mat-button (click)="myTooltip.show()">Show tooltip</button>
<button mat-button (click)="myTooltip.hide()">Hide tooltip</button>
```

## Notes

- The tooltip's default position is below the element. Use `tooltipPosition` to change this.
- To display the tooltip relative to the mouse or touch that triggered it, use the `matTooltipPositionAtOrigin` input.
- By default, the tooltip will be immediately shown when the user's mouse hovers over the tooltip's trigger element and immediately hides when the user's mouse leaves.
- On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms.
- To add a delay before showing or hiding the tooltip, you can use the inputs `matTooltipShowDelay` and `matTooltipHideDelay` to provide a delay time in milliseconds.
- You can configure your app's tooltip default show/hide delays by configuring and providing your options using the `MAT_TOOLTIP_DEFAULT_OPTIONS` injection token.
- To manually cause the tooltip to show or hide, you can call the `show` and `hide` directive methods, which both accept a number in milliseconds to delay before applying the display change.
- To completely disable a tooltip, set `matTooltipDisabled`. While disabled, a tooltip will never be shown.
- `MatTooltip` adds an `aria-describedby` description that provides a reference to a visually hidden element containing the tooltip's message. This provides screen-readers the information needed to read out the tooltip's contents when the end-user focuses on tooltip's trigger. The element referenced by `aria-describedby` is not the tooltip itself, but instead an invisible copy of the tooltip content that is always present in the DOM.
- Avoid interactions that exclusively show a tooltip with pointer events like click and mouseenter. Always ensure that keyboard users can perform the same set of actions available to mouse and touch users.