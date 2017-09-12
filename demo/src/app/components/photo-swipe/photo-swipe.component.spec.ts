import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoSwipeComponent              } from './photo-swipe.component';

// ========================================================================
describe('PhotoSwipeComponent', () =>
{
    let component: PhotoSwipeComponent;
    let fixture  : ComponentFixture<PhotoSwipeComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [PhotoSwipeComponent]
        })
        .compileComponents();
    }));

    beforeEach(() =>
    {
        fixture   = TestBed.createComponent(PhotoSwipeComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    // ========================================================================
    it('should be created', () =>
    {
        expect(component).toBeTruthy();
    });
    // ========================================================================
});
