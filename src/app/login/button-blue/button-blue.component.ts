import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-blue',
  templateUrl: './button-blue.component.html',
  styleUrls: ['./button-blue.component.scss']
})
export class ButtonBlueComponent {
  @Input() nameBtn:string = "";
}
