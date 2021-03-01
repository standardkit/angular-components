import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-subtitle',
  templateUrl: 'subtitle.component.html'
})
export class SkSubtitleComponent {
  @Input() heading: 1 | 2 | 3 | 4 | 5 | 6 = 2;
  @Input() type!: string;
}
