import { Component } from '@angular/core';
import { IconService } from 'carbon-components-angular'; 
import{Accessibility16} from "@carbon/icons"; 
import * as Icons from "@carbon/icons"; 

@Component({
  selector: 'app-demo-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  constructor(protected iconService: IconService) {}

	ngOnInit() {
		this.iconService.register(Accessibility16);
	}
}
