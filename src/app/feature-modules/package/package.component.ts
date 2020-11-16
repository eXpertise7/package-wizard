import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FeatureService} from '../feature.service';

@Component({
    selector: 'app-package',
    templateUrl: './package.component.html',
    styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

    constructor(private router: Router, private featureService: FeatureService) {

    }

    ngOnInit(): void {

    }

    nextStep(): void {
        this.featureService.StepEmitter.emit({Index: 0, State: true});
        this.router.navigate(['wizard/application-variables']);
    }
}
