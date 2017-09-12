import { BrowserModule } from '@angular/platform-browser';
import { NgModule      } from '@angular/core';

import { AppComponent        } from 'app/components/app/app.component';
import { PhotoSwipeComponent } from 'app/components/photo-swipe/photo-swipe.component';

@NgModule({
    declarations: [
        AppComponent,
        PhotoSwipeComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
