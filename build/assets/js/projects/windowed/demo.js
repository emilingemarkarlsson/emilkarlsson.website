$(document).ready(function(){$(".basic").windowed(),$("select.vertical").windowed({vertical:!0}),$(".custom").windowed({on:"ENABLED",off:"DISABLED",width:200,height:50}),$("input:checkbox.callback").windowed({change:function(e,n){alert("The checkbox is now "+(n?"checked":"unchecked")),console.log($(this))}}),$("select.callback").windowed({change:function(e,n){alert("You selected item #"+($(n).index()+1)+" - "+$(n).text())}}),$(":checkbox").filter(".info, .success, .warning, .danger").windowed({theme:!0}),$("#demoDisable").windowed({disabled:!0}),$("select[disabled]").windowed(),$(".windowed-enable").click(function(){$("#demoDisable").windowed("setEnabled",!0)}),$(".windowed-disable").click(function(){$("#demoDisable").windowed("setEnabled",!1)}),$(".windowed-toggle").click(function(){$("#demoDisable").windowed("toggleEnabled")}),$(".no-animate").windowed({animate:!1}),$(".slow-animate").windowed({animateDuration:1e3}),$(".changestate, .changestate-select").windowed(),$(".windowed-on").click(function(){$(".changestate").windowed("setState",!0)}),$(".windowed-off").click(function(){$(".changestate").windowed("setState",!1)}),$(".windowed-toggle-onoff").click(function(){$(".changestate").windowed("toggleState")}),$(".windowed-num").click(function(){$(".changestate-select").windowed("selectOption",$(this).text()-1)}),$('a[class^="windowed-"]').click(function(e){e.preventDefault()}),$(".customtheme").windowed({theme:"custom"})});