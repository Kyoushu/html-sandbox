(function(){

    var extension = app.addExtension('toggle');

    var dataAttr = 'data-toggle';

    function getElements()
    {
        return $('[' + dataAttr + ']');
    }

    extension.init = function()
    {
        getElements().each(function(){
            var element = $(this);

            if(element.data('init')) return;
            element.data('init', true);

            var targetSelector = element.attr(dataAttr);

            element.on('click', function(e){
                e.preventDefault();
                var target = $(targetSelector);
                if(target.is('.hide')){
                    target.removeClass('hide');
                }
                else{
                    target.addClass('hide');
                }
            });
        });
    };

    extension.reflow = function()
    {

    };

})();