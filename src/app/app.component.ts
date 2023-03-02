import { Component,OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms'; 
import { IconService } from 'carbon-components-angular'; 
import * as Icons from "@carbon/icons"; 
import{Accessibility16} from '@carbon/icons'; 
import{VisualRecognition20} from '@carbon/icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';  
  isExpressive=false;
  signUp:FormGroup;  
  size=20; 
  VisualRecognition="VisualRecognition"; 
  accessibility="accessibility";

  ngOnInit() 
{ 
this.signUp=new FormGroup({  
  'userData':new FormGroup({ 
    'username':new FormControl(null,[Validators.required,Validators.email]),  
    'password':new FormControl(null,Validators.required)
  }) 

}); 
this.iconService.register(Accessibility16);  
this.iconService.register(VisualRecognition20);
} 
onSubmit() 
{ 
  console.log("Form Success");
} 

click() 
{ 

}

constructor(protected iconService: IconService) {}

	
}
