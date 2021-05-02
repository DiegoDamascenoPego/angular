import { AfterContentInit, Directive, ElementRef, Input, ViewChild } from "@angular/core";

@Directive()
export class SimpleField implements AfterContentInit{
  @Input() hintLabel = '';
  @Input() label: string;
  @Input() messageTooltip = '';
  @Input() name: string;
  @Input() disabled: boolean = false;
  @Input() value: String = null;
  @Input() focused = false;

  @ViewChild('focus') focus: ElementRef;

  ngAfterContentInit(): void {
    if (this.focused) {
      setTimeout(() => {
        if (this.focus.nativeElement.value == '') {
          this.focus.nativeElement.focus();
        }
      }, 900);
    }
  }
}
