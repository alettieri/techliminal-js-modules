(function( window, undefined ){
    var App = window.App = window.App || {};

    App.$ = window.jQuery || window.Zepto;

    App.UI = App.UI || {};

    App.UI.Utils = (function( $ ){

        var exports = {};

        exports.inherits = function( _child, _super ) {
            $.extend( true, _child.prototype, _super.prototype );
        };

        return exports;

    })( App.$ );

    App.UI.BaseModule = (function( $ ){

        var Module = function() {};

        Module.prototype.initOptions = function( opts, def ) {
            var options = this.options || $.extend( def, opts );

            this.options = options;

            console.log( this.options );
        };

        return Module;

    })( App.$ );

    App.UI.Widget = (function( $, Utils, Module ){

        var defaults = {
            background: "blue"
        };

        var Widget = function( element, options ) {

            this.initOptions( options, defaults );
            // 1. Init Elements
            this.initElements( element );
            // 2. Bind
            this.bind();

        };

        Utils.inherits( Widget, Module );


        Widget.prototype.initElements = function( element ) {
            this.element = element;
            this.$link = $( element );
            this.$parent = $( "<div />" );

            this.$link.before( this.$parent );
            this.$link.remove();
            this.$parent.append( this.$link );
        };

        Widget.prototype.bind = function() {
                
            var self = this;

            function click( e ) {

                e.preventDefault();
                self.$parent.css({ background: self.options.background });
            }

            this.$link.on( "click.widget", click );

        };

        return Widget;


    })( App.$, App.UI.Utils, App.UI.BaseModule );


})( window );


