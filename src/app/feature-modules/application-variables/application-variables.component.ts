import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FeatureService} from '../feature.service';

@Component({
    selector: 'app-application-variables',
    templateUrl: './application-variables.component.html',
    styleUrls: ['./application-variables.component.scss']
})
export class ApplicationVariablesComponent implements OnInit {

    constructor(private router: Router, private featureService: FeatureService) {

    }

    ngOnInit(): void {
    }

    nextStep(): void {
        this.featureService.StepEmitter.emit({Index: 1, State: true});
        this.router.navigate(['wizard/installation']);
    }

    previousStep(): void {
        this.featureService.StepEmitter.emit({Index: 0, State: false});
        this.router.navigate(['wizard/package']);
    }
}
