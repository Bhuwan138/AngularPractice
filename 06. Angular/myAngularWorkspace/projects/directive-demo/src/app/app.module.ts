import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { FormsModule } from '@angular/forms';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { NasaRoverImageComponent } from './nasa-rover-image/nasa-rover-image.component';

@NgModule({
  declarations: [
    AppComponent,
    IfDemoComponent,
    IfElseComponent,
    SwitchDemoComponent,
    NasaRoverImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NasaRoverImageComponent]
})
export class AppModule { }
