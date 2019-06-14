
    var div=document.getElementsByClassName("div_footer2_right")[0];
    console.log(div);
    var as=div.getElementsByTagName("a");
    console.log(as);
    for(var a of as){
        a.onmousemove=function(){
            var img= a.href;
            console.log(img);
            img.style.display="block";
        }
    }

