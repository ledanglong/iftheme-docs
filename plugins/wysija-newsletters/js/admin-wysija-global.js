jQuery(function(n){var e=n.fn.jquery;"1.7.1">e&&void 0===n.fn.on&&(n.fn.on=function(e,o,t,i){return"function"==typeof o?n(this.context).live(e,o):n(o).live(e,t,i),this}),n(".wysija-footer pre").hide(),n(document).on("click",".wysija-footer .expandquer h2",function(){n(this).nextAll().toggle()})});
