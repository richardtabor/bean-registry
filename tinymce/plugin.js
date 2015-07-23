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
                 createSubmenuButtonImmediate( "Babies R Us",
                    '[bean_registry registry="babies-r-us" url=""]'
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
                 createSubmenuButtonImmediate( "Dillards",
                    '[bean_registry registry="dillards" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Etsy",
                    '[bean_registry registry="etsy" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Home Depot",
                    '[bean_registry registry="home-depot" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Honeyfund",
                    '[bean_registry registry="honeyfund" url=""]'
                    ),
                 createSubmenuButtonImmediate( "JCPenny",
                    '[bean_registry registry="jcpenny" url=""]'
                    ),
                 createSubmenuButtonImmediate( "John Lewis",
                    '[bean_registry registry="john-lewis" url=""]'
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
                 createSubmenuButtonImmediate( "Thankful Registry",
                    '[bean_registry registry="thankful-registry" url=""]'
                    ),
                 createSubmenuButtonImmediate( "The Container Store",
                    '[bean_registry registry="the-container-store" url=""]'
                    ),
                 createSubmenuButtonImmediate( "Walmart",
                    '[bean_registry registry="walmart" url=""]'
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