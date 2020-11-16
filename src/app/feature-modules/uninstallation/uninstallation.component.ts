import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FeatureService} from '../feature.service';

@Component({
  selector: 'app-uninstallation',
  templateUrl: './uninstallation.component.html',
  styleUrls: ['./uninstallation.component.scss']
})
export class UninstallationComponent implements OnInit {

    constructor(private router: Router, private featureService: FeatureService) {

    }

    ngOnInit(): void {
    }

    nextStep(): void {
        this.featureService.StepEmitter.emit({Index: 3, State: true});
        this.router.navigate(['wizard/completion']);
    }

    previousStep(): void {
        this.featureService.StepEmitter.emit({Index: 2, State: false});
        this.router.navigate(['wizard/installation']);
    }

}
