$(document).ready(function(){$(function(){$.ajax({url:"a.php",dataType:"JSON",data:{},type:"POST",success:function(n){var e,t,o;console.log(n),console.log("length: "+n.length),console.log("Firstfile: "+n[0]),t=0,e=setInterval(function(){$(".myImageHolder").attr("src",o=function(){return t>n.length-1&&(t=0),"img2/"+n[t++]})},1e3)},error:function(){alert("ERROR!")}})})});