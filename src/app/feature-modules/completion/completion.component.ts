import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FeatureService} from '../feature.service';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.scss']
})
export class CompletionComponent implements OnInit {

    constructor(private router: Router, private featureService: FeatureService) {

    }

    ngOnInit(): void {
    }

    finish(): void {
        this.featureService.StepEmitter.emit({Index: 4, State: true});
    }

    previousStep(): void {
        this.featureService.StepEmitter.emit({Index: 3, State: false});
        this.featureService.StepEmitter.emit({Index: 4, State: false});
        this.router.navigate(['wizard/uninstallation']);
    }

}
