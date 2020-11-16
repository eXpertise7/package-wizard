import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FeatureService} from '../feature.service';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {

    constructor(private router: Router, private featureService: FeatureService) {

    }

    ngOnInit(): void {
    }

    nextStep(): void {
        this.featureService.StepEmitter.emit({Index: 2, State: true});
        this.router.navigate(['wizard/uninstallation']);
    }

    previousStep(): void {
        this.featureService.StepEmitter.emit({Index: 1, State: false});
        this.router.navigate(['wizard/application-variables']);
    }

}
