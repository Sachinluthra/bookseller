define(["_utils","jquery"],function(n,o){var t={fixUrl:function(n){return n?(0!==n.indexOf("/")&&(n="/"+n),n):""},requestHTML:function(n){return n?(n="/gethtml"+n,n+=n.indexOf("?")>-1?"&html=true":"?html=true"):""},_bindScroll:function(n,t){var e=t===window||t===document.body,l=e?document.body:t,i=Math.floor(.4*l.scrollHeight),u=o(e?window:t);if(e){i*=2.2;var r;u.bind("scroll.global",this.debounce(function(){r=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,r+u.height()>=l.scrollHeight-i&&n()},25,!0))}else u.bind("scroll.global",this.debounce(function(){l.scrollTop+l.offsetHeight>=l.scrollHeight-i&&n()},25,!0))},_unbindScroll:function(n){var t=n===window||n===document.body,e=(t?document.body:n,o(t?window:n));e.unbind("scroll.global")},debounce:function(n,o,t){var e;return function(){var l=this,i=arguments,u=function(){e=null,t||n.apply(l,i)},r=t&&!e;clearTimeout(e),e=setTimeout(u,o),r&&n.apply(l,i)}},throttle:function(n,o){var t,e,l;return function(){var i=this,u=arguments;return t?(clearTimeout(e),e=setTimeout(function(){n.apply(i,u),t=!1},o)):(n.apply(i,u),t=!0,l=setTimeout(function(){return t=!1},o))}}};return t});