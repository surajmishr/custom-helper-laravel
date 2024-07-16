
// Ajax Handling multiple Action post  get fetch Url Api 


// if you want json data on php 

/////////////////////////////////////  AJAX  ////////////////////////

//AJAX =  ASYNCHRONOUS  JAVASCRIPT   AND XML
             

e.preventDefault()//
.rady();
// Form  Serialize through data post
$(document).ready(function(){
  
  $("$submit").click(function (argument) {
    var  name  = $("#fullname").val();
    var  age   = $("#age").val();
    if(name == "" || age == "" || !$('input:radio[name=gender]').is('checked')){
        $('#response').fadeIn();
        $("response").removeClass('success-msg').addClass('error-msg').html('all fields')
      // body...

    }ealse{
        $.ajax({
            url :"save-form.php",
            type:"POST",
            data:$('#submit_form').serialize();
            success: function(data){
                
            }
        })
    }
  })
 
});






// PHP AJAX LIVE SEARCH 
<input type"text" id="search" autocomplete="off">
//keyup means jaishe ham key ko press karege then function automatically call

$("search").on("keyup",function(){
    var search_term = $(this).val();
    $.ajax({
        url  :"ajax-live-search.php",
        type :"POST",
        data :{
            search:search_term
        },
        success: function(data){
            $("#table").html(data);
        }
    })

})






// UPDATE AJAX JQUERY 
$(document).on("click",".edit-btn",function(){
    $("#model").show();
    var studentId = $(this).data("eid");
    $.ajax({
        url :"load-edit-form",
        type:"POST",
        data:{
            id: studentID
        },
        success: function(data){
            if(data == 1){
                $("#model").hide();
            }
        }
    })
})








// DELETE  AJAX Jquery

BUTTON DELETE IF CLICK BUTTON THEN PIC ID AND DELETE
$("#save-button").on("click", function(e){
    if(confirm("Do You realy want to delete this record ?")){
    var studentId  = $(this).data("id");
    var element  = this;
    $.ajax({
          url: "ajax-delete.php",
          type: "POST",
          data: {id: studentID},
          success : function(data){
            if(data == 1){
                $(element).closest("tr").fadeOut();
            }else{
                ("#error-message").html("Can 't Delete Record.").slideDown();
                ("success-message").slideDown();

            }
          }
    
    });
}
});









//insert Ajax

$("#save-button").on("click",function(e){
e.preventDefault();
var fname = $("$name").val();
var lname = $("$lname").val();

 $.ajax({
       url  : "ajax-load.php",
       type : "POST",
       data : {first_name:fname, last_name:lname},
       success: function(data){
             

                }
            });


});



//Direct call if when we page url hit
    $(document).ready(function(){
        $("#load-button").on("click",function(e){
            $.ajax({
                url  : "ajax-load.php",
                type : "POST",
                success: function(data){
                    $("#table-data").html(data);
                }
            });
        });
    });





// 
function jsondata(){
       return response()->json([
            'success' => 1,
            'data' => ['new_order' => $new_order]
        ]);


        return response()->json([], 200);
         json_decode($config->test_values);
}




function multipleform(){

}


function singleform(){


    <form id="myForm" action="/your-server-endpoint">
        <input type="text" name="username" placeholder="Username" required>
        <input type="email" name="email" placeholder="Email" required>
        <button type="submit">Submit</button>
    </form>

    //start
        $(document).ready(function() {
            $('#myForm').on('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission

                let actionUrl = $(this).attr('action'); // Get the action attribute value

                $.ajax({
                    url: actionUrl,
                    type: 'POST',
                    data: $(this).serialize(),
                    success: function(response) {
                        console.log('Success:', response);
                        // Handle success (e.g., show a message, redirect, etc.)
                    },
                    error: function(error) {
                        console.error('Error:', error);
                        // Handle error
                    }
                });
            });
        });
 // end


  <script>
        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            let formData = new FormData(this);
            let actionUrl = this.getAttribute('action'); // Get the action attribute value

            fetch(actionUrl, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Handle success (e.g., show a message, redirect, etc.)
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error
            });
        });
    </script>

// third way 

 <script>
        $(document).ready(function() {
            $('#myForm').on('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission

                let actionUrl = $(this).attr('action'); // Get the action attribute value

                $.ajax({
                    url: actionUrl,
                    type: 'POST',
                    data: $(this).serialize(),
                    success: function(response) {
                        console.log('Success:', response);
                        // Handle success (e.g., show a message, redirect, etc.)
                    },
                    error: function(xhr) {
                        let response = xhr.responseJSON;
                        console.error('Error:', response);
                        // Handle error
                    }
                });
            });
        });
    </script>


 ///   Promises use if javascript 

     <script>
        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            let formData = new FormData(this);
            let actionUrl = this.getAttribute('action'); // Get the action attribute value

            fetch(actionUrl, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                return response.json().then(data => {
                    if (!response.ok) {
                        return Promise.reject(data);
                    }
                    return data;
                });
            })
            .then(data => {
                console.log('Success:', data);
                // Handle success (e.g., show a message, redirect, etc.)
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error (e.g., show an error message)
            });
        });
    </script>




}

 
function attributeform(){

}




// jquery attribute event handling  html Handling


function divdisplay(){

}

function buttonhide(){

}


function inputhide(){

}





