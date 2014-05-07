require.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['jquery', ],
function   ($) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});
