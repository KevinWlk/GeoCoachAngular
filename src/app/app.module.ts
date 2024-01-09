import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        AppComponent
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,

        FormsModule
    ],
    providers : [],
    bootstrap: [AppComponent]
})

export class AppModule { }