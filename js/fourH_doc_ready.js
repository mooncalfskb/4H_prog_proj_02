/*!
4H Doc Ready Class 01, written by Sherrod Blankner, Phlebas Consulting

 */

    //set up interactions
    $( document ).ready(function() { 	
		
		
		//get the vars from the query string
		var allVars = getUrlVars();
		var my_text = getUrlVar('my_text');
		
		//set the values of the form to the values you submitted
		$("#my_text").val(my_text);
		
		
		$( "#basic_submit" ).click(function() {
		   $("#basic_form").submit()	
		   location.reload();
		});	
		
		writeSomething(my_text);
		
    
    });