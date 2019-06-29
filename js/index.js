//sm---dom写点击图标改变
(function(){
    var body=document.body;
    var as=body.getElementsByClassName("menu")
    for(var a of as){
        a.onclick = function () {
            var a = this;
            if (a.className == "my_a_bg2 menu") {
                a.className = "my_a_bg2 menu menu_open";
            } else {
                a.className = "my_a_bg2 menu";
            }
        }
    }
    var spans=body.getElementsByClassName("span_a_bg3")
    for(var span of spans){
        span.onclick = function () {
            var span = this;
            if (span.className == "span_a_bg3") {
                span.className = "span_a_bg3 span_a_bg3_open";
            } else {
                span.className = "span_a_bg3";
            }
        }
    }
    //sm超小屏抽屉nav效果
    var btn=document.getElementById("btn")
    var nav_sm=document.getElementById("content")
    var div=document.getElementById("right")
    btn.onclick = function (e) {
        //e.stopPropagation;
       // e.preventDefault();
        if(nav_sm.className == "my_collapse div_xs"){
           // e.stopPropagation;
           // e.preventDefault();          
            nav_sm.className = "my_collapse div_xs my_collapse_open"
            div.className = "my_right my_right_open"
            document.documentElement.style.overflow='hidden';
        }else{
            //e.stopPropagation;
           // e.preventDefault();
            nav_sm.className = "my_collapse div_xs"            
            div.className = "my_right"      
            document.documentElement.style.overflow='visible';
        }
    }
    window.onresize=function(){
        if(window.innerWidth>=768){
            nav_sm.className = "my_collapse div_xs"            
            div.className = "my_right"      
            document.documentElement.style.overflow='visible';
        }
    }
    /*
    div.onclick = function (e){
        console.log(41);
        e.stopPropagation;
            e.preventDefault();
            if(nav_sm.className=="my_collapse div_xs my_collapse_open"){
            console.log(4);
            e.stopPropagation;
            e.preventDefault();
                nav_sm.className = "my_collapse div_xs"
                console.log(5);
                div.className = "my_right"
                console.log(6);
                document.documentElement.style.overflow='visible';
        }
    }*/
    var search_img=document.getElementById("search_img")
console.log(search_img);
var search=document.getElementById("search")
console.log(search);
    search_img.onclick=function(){
        console.log(1);
        console.log(search)
        search.style.width="150px";
        console.log(2);
    }
})()
