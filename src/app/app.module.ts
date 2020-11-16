import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {WrapperComponent} from './core/wrapper/wrapper.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientService} from './client/http-client-service/http-client.service';
import {FeatureModule} from './feature-modules/feature.module';
import {FeatureService} from './feature-modules/feature.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        WrapperComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        FeatureModule
    ],
    providers: [
        HttpClientService,
        FeatureService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
