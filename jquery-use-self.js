 <h1 id="test">hello </h1> 

$(document).redy(function(){
	var a = $("#test").html();
});
// selector = $(document)
// methord = redy(function(){


Select By id     = $("#idname");
Select By class  = $(".className");
Select By tag    = $("tagname"); ("p");
parent and child = jaishe ul ke andar jitane li sab ko target kar lena 
parent and child = $("ul li");
if you target multiple class  = (".abc,.xyz");
if you targe multiple tag     = $("h1,div,p");
$("p:first"); pure page paragraph ka first element
$("p:last");  pure page  paragraph ka last element
$("li:even");
$("li:odd");

if you wnat jaquery through make css 
	$("#list").css("color","red");
if you want make mause event
	click();      single click
   dblclick();    double click
   contextmenu(); right click 
   mouseeenter(); mouse jaishe le ke tab event triger ho
   mouseleave();  mouse jaishe  hatayege 
<div id="box" class="test"> <h1> hello </h1> </div>
$(document).ready(function(){
$('#box').click(function(){
	$('#box').css('background-color','green');
})
});

Keyboard Events 
keypress()
keydown()
keyup()

$(document).ready(function(){
	$('body').keypress(function (argument) {
		$('body').keypress(function (argument) {
			$(this).css('background-color','black');
			// body...
		})
		// body...
	})
})

Form Events 

focus()  jaishe mause le ke jayege color change ho jayege  is focus
blur()   jaishe mause hatayege vaishe hi blur ho jayega
change()  jaishe hi kishi ka value change ho tabhi yah event chal padta hai
select()  selecct event tab chaleg jab kishe text ko selct karte hai jaishe ki select copy 
submit()

Window Events 
load()
unload()
resize()
scroll()

HTML Events
text();
html();
attr();
val();


jaquery Class handling

addclass() means class add karna
removeclass() means pahle laga huaa class remove karna
toggleclass() lagi hogi to lag jayega nhi lagi hogi to laga dega
