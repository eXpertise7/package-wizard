import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {ApplicationVariablesComponent} from './application-variables/application-variables.component';
import {InstallationComponent} from './installation/installation.component';
import {UninstallationComponent} from './uninstallation/uninstallation.component';
import {CompletionComponent} from './completion/completion.component';
import {PackageComponent} from './package/package.component';
import {WizardComponent} from './wizard/wizard.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        PackageComponent,
        ApplicationVariablesComponent,
        InstallationComponent,
        UninstallationComponent,
        CompletionComponent,
        WizardComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class FeatureModule {
}
