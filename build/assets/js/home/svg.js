$(document).ready(function(){$(".Me-social").length&&["twitter","github","email","linkedin"].forEach(function(n){var t=$("#link-"+n+" svg"),a=t.clone().insertAfter(t),e={email:150,linkedin:200}[n]||100,i=new Vivus(t[0],{duration:e,start:"autostart",type:"async"}),o=new Vivus(a[0],{duration:e/3,start:"manual",type:"async"});t.parent().on("mouseover",function(){o.play()}).on("mouseout",function(){o.play(-1)}),i.play()})});