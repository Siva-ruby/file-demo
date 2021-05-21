import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { DocviewerComponent } from './docviewer/docviewer.component';

@NgModule({
  declarations: [
    AppComponent,
    DocviewerComponent
  ],
  imports: [
    BrowserModule,
    NgxDocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
