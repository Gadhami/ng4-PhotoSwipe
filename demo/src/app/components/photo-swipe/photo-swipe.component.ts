import { Component, ViewChild, ElementRef, Input } from '@angular/core';

// Import PhotoSwipe
import PhotoSwipe           from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

// Image Interface
import { IImage } from 'app/interfaces/image';

@Component({
    selector   : 'app-photo-swipe',
    templateUrl: './photo-swipe.component.html',
    styleUrls  : ['./photo-swipe.component.css']
})
export class PhotoSwipeComponent
{
    @ViewChild('photoSwipe') photoSwipe: ElementRef;

    @Input() images: IImage[] = [];

    // ========================================================================
    constructor() { }

    // ========================================================================
    openGallery(images?: IImage[])
    {
        // Build gallery images array
        images = images || this.images;

        // define options (if needed)
        const options = {
            // optionName: 'option value'
            // for example:
            index: 0 // start at first slide
        };

        // Initializes and opens PhotoSwipe
        const gallery = new PhotoSwipe(this.photoSwipe.nativeElement, PhotoSwipeUI_Default, images, options);
        gallery.init();
    }
    // ========================================================================
}
