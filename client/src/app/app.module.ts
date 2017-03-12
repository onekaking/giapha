/* Angular 2 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* ngrx - redux */
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/* Config env provider */
import { ENV_PROVIDERS } from '../environments/environment';

/* Reducer */
import { memberReducer } from './member/member.reducer';

/* Component */
import { AppComponent } from './app.component';
import { MemberModule } from './member/member.module';

/* Router */
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
      member: memberReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    MemberModule,
    AppRoutingModule
  ],
  providers: [ENV_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
