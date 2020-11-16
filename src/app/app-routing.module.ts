import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WrapperComponent} from './core/wrapper/wrapper.component';
import {PackageComponent} from './feature-modules/package/package.component';
import {ApplicationVariablesComponent} from './feature-modules/application-variables/application-variables.component';
import {InstallationComponent} from './feature-modules/installation/installation.component';
import {UninstallationComponent} from './feature-modules/uninstallation/uninstallation.component';
import {CompletionComponent} from './feature-modules/completion/completion.component';
import {WizardComponent} from './feature-modules/wizard/wizard.component';

const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        children: [
            {
                path: '',
                redirectTo: 'wizard/package',
                pathMatch: 'full'
            },
            {
                path: 'wizard',
                component: WizardComponent,
                children: [
                    {
                        path: 'package',
                        component: PackageComponent
                    },
                    {
                        path: 'application-variables',
                        component: ApplicationVariablesComponent
                    },
                    {
                        path: 'installation',
                        component: InstallationComponent
                    },
                    {
                        path: 'uninstallation',
                        component: UninstallationComponent
                    },
                    {
                        path: 'completion',
                        component: CompletionComponent
                    }
                ]
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
