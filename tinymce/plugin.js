// closure to avoid namespace collision
(function () {
    //ADD PRICING TABLE PLUGIN
    tinymce.PluginManager.add("BeanRegistry", function(editor, url) {
        //CREATE THE BUTTON
        editor.addButton('bean_registry_button', {
            type: "splitbutton",
            title: "Add Registry", //BUTTON TITLE
            menu: [
                 createSubmenuButtonImmediate( "Amazon",
                    '[bean_registry registry="amazon" url=""]' 
                    ),
                 createSubmenuButtonImmediate( "Bed Bath & Beyond",
                    '[bean_registry registry="bed-bath-and-beyond" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Bloomingdales",
                    '[bean_registry registry="bloomingdales" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Crate & Barrel",
                    '[bean_registry registry="crate-and-barrel" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Etsy",
                    '[bean_registry registry="etsy" url=""]'
                    ),
                 createSubmenuButtonImmediate( "JCPenny",
                    '[bean_registry registry="jcpenny" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Kohls",
                    '[bean_registry registry="kohls" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Macys",
                    '[bean_registry registry="macys" url=""]'
                    ),
                 createSubmenuButtonImmediate( "NewlyWish",
                    '[bean_registry registry="newlywish" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Pottery Barn",
                    '[bean_registry registry="pottery-barn" url=""]'
                    ),
                 createSubmenuButtonImmediate( "REI",
                    '[bean_registry registry="rei" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Restoration Hardware",
                    '[bean_registry registry="restoration-hardware" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Sears",
                    '[bean_registry registry="sears" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Target",
                    '[bean_registry registry="target" url=""]'
                    ),
                 createSubmenuButtonImmediate( "The Container Store",
                    '[bean_registry registry="the-container-store" url=""]'
                    ),
                 createSubmenuButtonImmediate( "West Elm",
                    '[bean_registry registry="west-elm" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Williams Sonoma",
                    '[bean_registry registry="williams-sonoma" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Zola",
                    '[bean_registry registry="zola" url=""]'
                    ),
            ],
            onclick: function() {}
        });

        function createSubmenuButtonImmediate( title, sc ) {
            return {
                text: title,
                onclick: function() {
                    executeTinyMCECommand( 'mceInsertContent', sc );
                }
            }
        }

        function executeTinyMCECommand( command, args ) {
            if (typeof window.tinyMCE.activeEditor != 'undefined') {
                window.tinyMCE.activeEditor.selection.moveToBookmark(window.tinymce_cursor);
            }
            if (typeof window.tinyMCE.execInstanceCommand != 'undefined') {
                window.tinyMCE.execInstanceCommand('content', command, false, args);

            } else {
                if (typeof window.tinyMCE.execCommand != 'undefined') {
                    window.tinyMCE.get('content').execCommand(command, false, args);
                }
            }
        }
	});
})();