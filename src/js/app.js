var app = (function(){
    
    var Extension = function(name)
    {
        this.name = name;
    };
    
    Extension.prototype.name = null;
    
    Extension.prototype.init = function()
    {
        
    };
    
    Extension.prototype.reflow = function()
    {
        
    };
    
    var extensions = {};
    
    function addExtension(name)
    {
        var extension = new Extension(name);
        extensions[name] = extension;
        return extension;
    }

    function init(){
        $.each(extensions, function(index, extension){
            extension.init();
        });
    }
    
    function reflow()
    {
        $.each(extensions, function(index, extension){
            extension.reflow();
        });
    }
    
    return {
        'init': init,
        'reflow': reflow,
        'extensions': extensions,
        'addExtension': addExtension
    };
    
})();

$(function(){
    app.init();
});