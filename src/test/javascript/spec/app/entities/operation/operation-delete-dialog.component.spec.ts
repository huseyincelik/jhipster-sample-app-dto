/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterDtoSampleApplicationTestModule } from '../../../test.module';
import { OperationDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/operation/operation-delete-dialog.component';
import { OperationService } from '../../../../../../main/webapp/app/entities/operation/operation.service';

describe('Component Tests', () => {

    describe('Operation Management Delete Component', () => {
        let comp: OperationDeleteDialogComponent;
        let fixture: ComponentFixture<OperationDeleteDialogComponent>;
        let service: OperationService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterDtoSampleApplicationTestModule],
                declarations: [OperationDeleteDialogComponent],
                providers: [
                    OperationService
                ]
            })
            .overrideTemplate(OperationDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(OperationDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(OperationService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
