import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { AppStoreModule } from '@store/app-store.module';
import { AppComponent } from '@app/app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthModule } from './@auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppStoreModule,
    AuthModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
