var widget = {

        el : {
            $link: null,
            $parent: null
        }, 

        events: {

            click: function( e ) {
                
                e.preventDefault();
                widget.el.$parent.css( { background: "blue" } );
            }
        }, 

        bind : function() {
            var self = this;
            this.el.$link.on( "click.widget", this.events.click );
        
        },

        init : function() {

            var $link = this.el.$link = $( "a" ),
                $parent = this.el.$parent = $( "<div />", { class: "parent" })
            ;

            $link.before( $parent ).remove();

            $parent.append( $link );


            this.bind();

        }
    };


    //widget.init();