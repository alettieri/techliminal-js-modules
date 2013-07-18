/**
 * widget object
 *
 * This is a global object that contains all of the code in our application, isolating all
 * methods and variables within the namespace of our object
 *
 * @type {Object}
 */
var widget = {
        /**
         * el property
         *
         * Set up the elements of the DOM we are going to use in our application within an
         * object called `el`. For now, they're defined as null, but they will be assigned
         * below in the `init()` method
         *
         * All elements used in this application are collected within the `el` object, which
         * is a property of
         * widget
         *
         * @type {Object}
         */
        el : {
            $link: null,
            $parent: null
        },
        /**
         * events property
         *
         * Contains the events methods for this application.
         *
         * @type {Object}
         */
        events: {
            /**
             * click function
             *
             * Defines the behavior of a click event within this application:
             *
             * 1. Prevent the default behavior using the `preventDefault()` method
             * 2. Assign a background color to the `$parent` element defined on `init()`
             *
             * @param  {[type]} e Argument passed into the function to utilize the
             * preventDefault() method
             * @return void
             */
            click: function( e ) {

                e.preventDefault();
                widget.el.$parent.css( { background: "blue" } );
            }
        },
        /**
         * bind function
         *
         * Define the relationship between the click function and the elements to which the
         * click function will be applied
         *
         * @return void
         */
        bind : function() {
            var self = this; // don't seem to need this
            /**
             * Select the $link element within our widget, and define the click event for
             * elements within the object `widget` for our application, and execute the
             * click method within our application
             *
             * @see http://api.jquery.com/on/ "Events and namespaces"
             */
            this.el.$link.on( "click.widget", this.events.click );

        },

        /**
         * init function
         *
         * Initialize the elements declared
         *
         * @return {[type]} [description]
         */
        init : function() {

            /**
             * Assign the `<a>` element to `$link` and the `<div>` element with a class
             * of "parent" to `$parent`
             *
             * @type {jQuery object}
             * @see http://api.jquery.com/jQuery/ jQuery( html [, ownerDocument ] )
             */
            var $link = this.el.$link = $( "a" ),
                $parent = this.el.$parent = $( "<div />", { class: "parent" })
            ;

            // Output `$parent` before `$link`, then remove `$link`
            $link.before( $parent ).remove();

            // Append `$link` within `$parent`
            $parent.append( $link );

            // Use the `bind()` method to bind the `widget.click` event to `widget.el.$link`
            this.bind();

        }
    };


    // Initialize our application
    widget.init();
