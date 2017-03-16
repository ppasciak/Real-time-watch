$(function(){

setInterval(function()
{ ustaw(); }, 1000);

function ustaw(){
var d = new Date();
var h = d.getHours();
var hk = ((d.getHours()/12)*360)+(d.getMinutes()/60)*30;
var m = d.getMinutes();
var s = d.getSeconds();
var md = d.getDate();
var wd = d.getDay();
  switch (wd) {
    case 0:
        wd = "SUN";
      $(".day_box").css("color","red");
        break;
    case 1:
        wd = "MON";
        break;
    case 2:
        wd = "TUE";
        break;
    case 3:
        wd = "WED";
        break;
    case 4:
        wd = "THU";
        break;
    case 5:
        wd = "FRI";
        break;
    case 6:
        wd = "SAT";
      $(".day_box").css("color","#80aef7");
}
$(".h_hand").css("transform","rotate("+hk+"deg)");
$(".m_hand").css("transform","rotate("+(m/60)*360+"deg)");
$(".s_hand").css("transform","rotate("+(s/60)*360+"deg)");
$(".date_box").text(md);
$(".day_box").text(wd);
}
});
