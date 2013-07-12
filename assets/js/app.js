/**
 * Self-invoking anonymous function
 *
 * This function initializes the application stored in the App object. It takes a parameter, the window object, to test which objects have been attached to window, and define additional objects to be attached to window.
 *
 * @param  {object} window
 * @param           undefined
 * @return void
 */
(function( window, undefined ){

    /**
     * This line accomplishes three tasks:
     *     1. Tests for the global object `window.App`. If `window.App` is defined,
     *     it's called for assignment. If `window.App` is not defined, an empty object
     *     literal `{}` is called for assignment instead.
     *     
     *     2. Assigns the value above to the global object `window.App`.
     *     If `window.App` is already assigned, this is technically redundant.
     *     However, if it's not assigned, we need to assign it here to initiate our
     *     app and make it available in the global namespace.
     *     
     *     3. Assigns the value above to the local object `App`, which gives access to
     *     the global object `window.App` within this function.
     */
    var App = window.App = window.App || {};

    /**
     * This defines the `$` object within our app. While `$` is often assigned
     * globally to jQuery, this isn't always the case. By defining `$` locally within
     * our application, we are able to ensure that it does represent jQuery, or
     * whatever other object we need.
     *
     * In this case, we're first looking for a global object called `jQuery`, and if
     * `jQuery` isn't defined, we'll look for a global object called `Zepto`. Then
     * the first one found is assigned to the local object `App.$` for use within our app.
     */
    App.$ = window.jQuery || window.Zepto;

    /**
     * Similar to above, look to see if the specified objects `UI` and `UI.Utils` are
     * defined within `App`.
     * 
     * If so, redundantly assign them to themselves. If not, assign them with an empty
     * object, so that they are defined and accessible globally through the `App` object.
     */
    App.UI.Utils = App.UI.Utils || {};
    App.UI = App.UI || {};

    /**
     * widget object
     *
     * Contains an instance of `App.UI.Widget`, instantiated to select all `<a>` elements and pass an option to set those elements' styles to display a red background
     *
     * @type {App}
     */
    var widget = new App.UI.Widget( "a", { background: "red" } );

})( window );


