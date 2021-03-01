import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-title',
  templateUrl: 'title.component.html'
})
export class SkTitleComponent {
  @Input() heading: 1 | 2 | 3 | 4 | 5 | 6 = 1;
  @Input() type!: string;

  // TODO : Think about a content projection solution
  // Use a directive and custom title versions (scalable configuration)
  // <h1 skTitle>My Title</h1>
  // or
  // <h3 skTitle="2">My Title</h1>
  // or
  // <p skTitle="custom">My Title</h1>
  // Maybe want to add some different fonts etc.
}
