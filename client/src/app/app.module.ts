/* Angular 2 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* ngrx - redux */
import { StoreModule, Store } from '@ngrx/store';

/* Config env provider */
import { ENV_PROVIDERS } from '../environments/environment';

/* Reducer */
import { memberReducer } from './member/member.reducer';

/* Component */
import { AppComponent } from './app.component';
import { MemberModule } from './member/member.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      member: memberReducer
    }),
    MemberModule
  ],
  providers: [ENV_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
