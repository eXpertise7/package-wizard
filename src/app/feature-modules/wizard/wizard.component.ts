import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FeatureService} from '../feature.service';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

    steps: WizardStep[] = [];

    constructor(private router: Router, private featureService: FeatureService) {
        this.steps = [
            {
                Title: 'Package',
                Finished: false
            },
            {
                Title: 'Application variables',
                Finished: false
            },
            {
                Title: 'Installation',
                Finished: false
            },
            {
                Title: 'Uninstallation',
                Finished: false
            },
            {
                Title: 'Completion',
                Finished: false
            }
        ];
    }

    ngOnInit(): void {
        this.featureService.StepEmitter.subscribe((data) => {
            this.steps[data.Index].Finished = data.State;

            console.log(this.steps);
        });
    }
}

export interface WizardStep {
    Title: string;
    Finished: boolean;
}
