import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PackageComponent} from '../package/package.component';

describe('PackageComponent', () => {
    let component: PackageComponent;
    let fixture: ComponentFixture<PackageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PackageComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
