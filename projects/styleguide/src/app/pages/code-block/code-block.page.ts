import { Component } from '@angular/core';

@Component({
  selector: 'stg-code-block-page',
  templateUrl: 'code-block.page.html'
})
export class StgCodeBlockPage {
  code = `<sk-code-block
  language="html"
  [code]="code">
</sk-code-block>`;
}
