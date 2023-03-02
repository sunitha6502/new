import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import * as Icons from "@carbon/icons"; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { InputModule } from 'carbon-components-angular';
import { IconComponent } from './icon/icon.component'; 
import { IconService } from 'carbon-components-angular'; 
import { IconModule } from 'carbon-components-angular';    
import { ButtonModule } from 'carbon-components-angular'; 
import{AccessibilityColor16Module} from '@carbon/icons'; 
import{VisualRecognition20Module} from '@carbon/icons';
@NgModule({
  declarations: [
    AppComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule, 
    InputModule, 
    IconModule,  
    ButtonModule
  ],
  providers: [IconService],
  bootstrap: [AppComponent]
})
export class AppModule { }
