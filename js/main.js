var SELECTEDTINDER = "";
var SELECTEDSLIKES = "";
var SELECTEDBOOSTS = "";

function FADJ() {
  var BWIDTH;

  BWIDTH = $("body").width();

  if (BWIDTH > 575.98) {
    var TTOP1, TTOP2, TBOT;
    TTOP2 = $(".TT2").height();
    TBOT = $(".tinder-bot").height();
    TTB = TTOP2 + TBOT + 1;
    $(".FLICK2").css("margin-top", TTOP2 + "px");
    $(".FLICK2").css("margin-bottom", TBOT + "px");
    $(".FLICK2").css("height", "calc(812px - " + TTB + "px)")
  } else {
    var TTOP1, TTOP2, TBOT;
    TTOP1 = $(".TT1").height();
    TBOT = $(".tinder-bot").height();
    TTB = TTOP1 + TBOT + 1;
    $(".FLICK2").css("margin-top", TTOP1 + "px");
    $(".FLICK2").css("margin-bottom", TBOT + "px");
    $(".FLICK2").css("height", "calc(100vh - " + TTB + "px)")
  }
}

function F1() {
 
    $(".T1").fadeOut(1500);
    setTimeout(function() {
      $(".T2").fadeIn(1500);
    }, 1500)
  }


function F2() {
  $(".T2").fadeOut(1500);
  setTimeout(function() {
    $(".T3").fadeIn(1500);
  }, 1500)
}

function F3() {
  $(".T3").fadeOut(1500);
	
	setTimeout(function() { $(".T4").fadeIn(1500);Progress()},1700)
	//setTimeout (Progress,1600);
  /*setTimeout(function() {
   

    var BAR = new ProgressBar.Line(PRO, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 25000,
    color: '#000',
    trailColor: '#fff',
    trailWidth: 5,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#fff',
        right: '0',
        top: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    step: (state, BAR) => {

      var CUR = Math.round(BAR.value() * 100);

    //  console.log("xD " + CUR)

      var TEX = "";

      if (CUR < 8) {
        TEX = "Connecting with your <span class='t-normal'>TikTok account</span>...";
      } else if (CUR >= 8 && CUR < 32) {
        TEX = "Adding <span class='t-normal'>TikTOK " + SELECTEDTINDER + "</span> membership...";
      } else if (CUR >= 32 && CUR < 64) {
        TEX = "Adding <span class='t-normal'>" + SELECTEDSLIKES + " Followers</span> and <span class='t-normal'>" + SELECTEDBOOSTS + " Likes </span>...";
      } else if (CUR >= 64 && CUR < 96) {
        TEX = "Saving all changes...";
      } else if (CUR >= 96) {
        TEX = "Error, bot detected! Pass human verification to continue. <br><span class='t-normal'>After finishing restart your TikTok to see all changes.</span>";
        $(".VB").fadeIn(1500);
      }

      BAR.setText(TEX);

    }
  });

    BAR.animate(1);

  }, 1500)*/
}

$(function() {
  FADJ();

  var SLslider = document.getElementById("SLslider");

  var Bslider = document.getElementById("Bslider");
var Dslider = document.getElementById("Dslider");
  noUiSlider.create(SLslider, {
    start: 1500,
    connect: [true, false],
    step: 25,
    range: {
        min: 0,
        max: 3000
    }
});

  noUiSlider.create(Bslider, {
    start: 500,
    connect: [true, false],
    step: 10,
    range: {
        min: 0,
        max: 1000
    }
});
	
	noUiSlider.create(Dslider, {
    start: 500,
    connect: [true, false],
    step: 10,
    range: {
        min: 0,
        max: 1000
    }
});

SLslider.noUiSlider.on('update', function (value) {
  var SLamount = parseInt(value[0]);
  SELECTEDSLIKES = SLamount;
  if (SLamount > 0) {
    $(".SLSLSL").removeClass("DFDFDF")
    $("#SLSL").text(SLamount);
  } else {
    $("#SLSL").text("No")
    $(".SLSLSL").addClass("DFDFDF")
  }

})

Bslider.noUiSlider.on('update', function (value) {
  var Bamount = parseInt(value[0]);
  SELECTEDBOOSTS = Bamount;
  if (Bamount > 0) {
    $(".BBB").removeClass("DFDFDF")
    $("#BB").text(Bamount);
  } else {
    $("#BB").text("No")
    $(".BBB").addClass("DFDFDF")
  }

})
	
Dslider.noUiSlider.on('update', function (value) {
  var Bamount = parseInt(value[0]);
  SELECTEDBOOSTS = Bamount;
  if (Bamount > 0) {
    $(".CCC").removeClass("DFDFDF")
    $("#CC").text(Bamount);
  } else {
    $("#CC").text("No")
    $(".CCC").addClass("DFDFDF")
  }

})

})

$(window).resize(function() {
  FADJ();
})

$("#tinderSubscribtions").on("show.bs.collapse", function(e) {

    if (e.target.id == "Gold") {
        $(".CWITH").html("Continue with <GOLD>Gold</GOLD><img src='img/gold-2.png' class='inline-TINDER-30'>");
        SELECTEDTINDER = "Gold";
    } else {
        $(".CWITH").html("Continue with <PLUS>Plus</PLUS><img src='img/plus-2.png' class='inline-TINDER-30'>");
        SELECTEDTINDER = "Plus";
    }

    $(".CWITH").fadeIn(1500);

})

////////////////////////////////////////////////////////////////////////////////

var usr = document.getElementById("online-count");
var Doit = setInterval(addsur,1000);
function addsur(){
var cont =Math.round(Math.random()*3),
	usrNumb = usr.innerHTML;
	usrNumb = parseFloat(usrNumb);

	usr.innerHTML=usrNumb+cont;
	
}
addsur();

var d = new Date();
var mont = + d.getUTCMonth()+1;
document.getElementById("date").innerHTML = d.getDate() + "-" + mont+ "-"+ d.getFullYear();


//////////////////////////////////////////////////////////////////////////////////////////

var Butt=document.getElementById("st2");
Fst();
function Fst(){
	var Upp=setInterval(UPP,40),
		WidTh=100;

	function UPP(){
		Butt.style.width=WidTh+"%";
		WidTh--;
		if(WidTh==90)
		{
			clearInterval(Upp);
			Snd();
		}
	}
}

function Snd(){
	var Down=setInterval(DOWN,40),
		WidTh=90;

	function DOWN(){
		Butt.style.width=WidTh+"%";
		
		WidTh++;
		if(WidTh==100)
		{
			clearInterval(Down);
			Fst();
		}
		
	}
}

////////////////////////////////////////////////////////////////////////////
// var DD=document.getElementById("PRO");
 //DD.innerHTML =	"<div class='meter'><span id='Prog' style='width: 25%'></span></div>";


function Progress(){
	
	var Prog=document.getElementById("Prog");
	var Wiidth=setInterval(reSizeWidth,60),
		x=0;
	var	TEX=document.getElementById("Comment");
	function reSizeWidth(){
		Prog.style.width=x+"%";
		if(x==80)
		{
			clearInterval(Wiidth);	
			Progress2();
		}
			
		
		x=x+0.5;
		   if (x < 50) {
        TEX.innerHTML = "Connecting with your <span class='t-normal'>Instagram account</span>...";
      } else {
        TEX.innerHTML = "Adding <span class='t-normal'>TikTOK </span> Followers...";
      } 
	}
}
function Progress2(){
	var x=0,
		width2=setInterval(reSizeWidth2,30);
	var Prog=document.getElementById("Prog");
	var	TEX=document.getElementById("Comment");
	function reSizeWidth2(){
		
		
		Prog.style.width=x+"%";
		if(x==100)
		{
			clearInterval(width2);	
			Progress3();
		}
		x=x+0.5;
		
		if (x >= 0 && x < 50) {
        TEX.innerHTML = "Adding <span class='t-normal'>Followers</span> and <span class='t-normal'>, Likes </span> And Views...";
      } else {
        TEX.innerHTML = "Saving all changes...";
      } 
		
		
	}
	
	
}
	
function Progress3(){
	var x=0,
		width3=setInterval(reSizeWidth3,50);
	var Prog=document.getElementById("Prog");
	var	TEX=document.getElementById("Comment");
	function reSizeWidth3(){
		
		Prog.style.width=x+"%";
		if(x==100)
		{
			clearInterval(width3);	
			
			$(".progressWindow").fadeIn(1500);
			setTimeout(function(){ $("#ProgWindow").fadeIn(1500);},1600);
		}
		x=x+0.25;
	
        TEX.innerHTML = "<span class='t-normal'>After 1-5 min restart your Instagram to see all Changes.</span>";      
		
	}
	
	
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function CheckBox(){
	
	 $(".CheckedBox").fadeIn(1500);
	
}





