
// $.ajax({
		// cache:false,
        // async:false,
        // url: "pjesma.txt",
        // dataType: 'text',
        // success: function(data) {
        // $("#song11").append("teste");
            // }
        // });

// $("#song11").append("teste");		

// $(document).ready(function(){
	// $("#song11").append("teste");
// });

// $(document).ready(function(){
	// alert("Hello! I am an alert box!!");
// });

// $.get('pjesma.txt', function(data) {
   // $("#song11").append(data);
// }, 'text');

var intervalID = setInterval(function(){
	$.get('pjesma.txt', function(data) {
		cache: false,
		$("#song11").text(data);
	}, 'text');
}, 1000);
