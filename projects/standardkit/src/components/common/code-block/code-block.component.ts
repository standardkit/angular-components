import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-code-block',
  templateUrl: 'code-block.component.html'
})
export class SkCodeBlockComponent {
  @Input() code?: string;
  @Input() language?: string; // TODO : create and use LanguageType
  // TODO : use this.language to highlight code
}
