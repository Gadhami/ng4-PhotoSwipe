# ng4-PhotoSwipe
Step-by-step guide and a simple demo on how to use PhotoSwipe in Angular 4+ project

# Notes:

*   No tests has been made on angular 2+ project, but instructions should be the same

*   If you have any question, consult the demo project or open an issue

*   Demo project include a reusable PhotoSwipe wrapper in the form of an angular 2+ component


# Steps:

1.   Create a new angular 2+ project. If you are using Angular CLI, just run this command in command line:

            ng new YOUR_PROJECT_NAME

2.  Install PhotoSwipe via NPM by running this command:

            npm install photoswipe

3.  In your component, import photoSwipe:

    ```javascript
        import PhotoSwipe from 'photoswipe';
        import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
    ```

4.  To open a gallery, simply initialize the PhotoSwipe() class, then call the .init() function, ie.

    ```html
    <a (click)="onClick()" href="#">Open Slideshow</a>
    ```

    ```javascript
        onClick()
        {
            // Build gallery images array
            images = [
                { src: 'http://via.placeholder.com/600x400', w: 600, h: 400 },
                { src: 'http://via.placeholder.com/800x600', w: 800, h: 600 },
                // ...
            ];

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
    ```

5.  Include PhotoSwipe css and js files via CDN:

    ```html
        <!-- PhotoSwipe -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe.min.css" />
        <!-- Skin CSS file (styling of UI - buttons, caption, etc.)
        In the folder of skin CSS file there are also:
        - .png and .svg icons sprite,
        - preloader.gif (for browsers that do not support CSS animations) -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/default-skin/default-skin.css" />

        <!-- photoswipe - Core JS file -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe.min.js"></script>

        <!-- photoswipe - UI JS file -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe-ui-default.min.js"></script>
    ```

That's all!
Cheers!