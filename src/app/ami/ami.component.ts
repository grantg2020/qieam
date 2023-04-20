import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ami',
  templateUrl: './ami.component.html',
  styleUrls: ['./ami.component.less']
})
export class AmiComponent {
  @Input() name = ""
  @Input() ajoute = false
}
