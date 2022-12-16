import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() nameBtn:string = "";
  @Input() className:string = "";

  @Output() clickEmitter: EventEmitter<String> = new EventEmitter<String>();
  
}
