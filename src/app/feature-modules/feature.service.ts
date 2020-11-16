import { EventEmitter } from '@angular/core';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FeatureService {

    StepEmitter: any = new EventEmitter();

    constructor() {

    }
}
