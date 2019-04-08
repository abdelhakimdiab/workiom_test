import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import { MatModule } from './shared/modules/material/mat.module';
import {VideoComponent} from './video/components/video.component';
import {TruncatePipe} from './shared/pipes/truncate/truncate.pipe';
import {ServerErrorsInterceptor} from './shared/interceptors/server-errors.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorHandlerService} from './shared/services/error-handler/error-handler.service';
import {NotificationsService} from './shared/services/notifications/notifications.service';
import {VideoService} from './video/services/video.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    VideoComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    NotificationsService,
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
