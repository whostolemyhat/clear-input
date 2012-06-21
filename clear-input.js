$(function() {
    // adapted from http://thomas.vondeyen.com/2011/02/22/html5-forms-placeholder-fallback/

    // test for placeholder support
    if (!("placeholder" in document.createElement("input"))) {
        // target all elements with placeholder attr
        $('*[placeholder]').each(function() {
            // cache jq element
            var $element = $(this);
            var placeholder = $element.attr(placeholder);

            // IE support - use value attr as placeholder since it doesn't recognise placeholder attr
            if(placeholder === undefined) {
                placeholder = this.defaultValue;
            }
            
            if($element.val() === '') {
                $element.val(placeholder);
            }
            
            $element.bind('focus', function() {
                if($element.val() == placeholder) {
                    $element.val('');
                }
            });
            $element.bind('blur', function() {
                if($element.val() === '') {
                    $element.val(placeholder);
                }
            });
        });
    } else {
        $('*[placeholder]').each(function() {
            // remove value and use placeholder
            var $element = $(this);
            if($element.val() == this.defaultValue) {
                $element.val('');
            }
        });
    }
});
