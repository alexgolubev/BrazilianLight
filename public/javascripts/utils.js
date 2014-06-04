$(document).ready(function() {

	$("ul.nav li").each(function() {
		$(this).click(function() {
			$(this).toggleClass("active");
		});
	});

	if ($('div.alert').length > 0) {
		$(this).scrollTop($('div.alert').position().top + 340);
	}
	
    $('.predictBtn').click( function(){
        // flag counter for the two input fields
        var x=0;
        var matchForm = $(this).parent().parent();
        matchForm.parent().parent().find('h1 input').each(function(){
            var score = $(this).val();
            if (score == '' || score < 0 || score == null){
                $(this).addClass('invalidInput');
                return false;
            }
            else{         
                 x++;
            }

            // if both inputs for both teams are valid, kor!
             if (x==2)
                matchForm.submit();
        });

    return false;
    });



});