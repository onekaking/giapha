/* Angular 2 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* ngrx - redux */
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/* Third pary */
import { MomentModule } from 'angular2-moment';

/* Effect */
import { EffectsModule } from '@ngrx/effects';
import { MemberEffect } from './member/member.effect';

/* Config env provider */
import { ENV_PROVIDERS } from '../environments/environment';

/* Reducer */
import { memberReducer } from './member/member.reducer';

/* Component */
import { AppComponent } from './app.component';
import { MemberModule } from './member/member.module';
import { LeftSideComponent } from './shared/component/left-side.component';

/* Router */
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    EffectsModule.run(MemberEffect),
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
