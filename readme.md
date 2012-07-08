#clear-input.js
A script which clears the default value of a form input on focus, and restores it on blur if the field is empty.

Uses HTML5 placeholders where possible and has fallbacks for browsers which lack them.

Currently requires jQuery (1.4.4 onwards)


##Usage

Add a placeholder attribute to any form input field, and set the value of the field to the same as the placeholder:

<pre>
&lt;input type="text" placeholder="Search" value="Search" name="search-input" /&gt;
</pre>

Browsers which support the HTML5 placeholder attribute function as normal - the script removes the default value of the input to leave te placeholder function.

Browsers which don't support placeholders use the value attribute as a placeholder; this is removed on focus then added back in if nothing has been entered into the field.