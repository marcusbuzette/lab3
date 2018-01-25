'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript ready to go");

		$("#testjs").addClass("active");
	});
	
	$("a.thumbnail").click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    console.log("Clicked here");
    // In an event handler, $(this) refers to      
    // the object that triggered the event      

    var containingProject = $(this).closest(".project");
    containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
       $(description).fadeIn();
    } else if (description.length % 2 != 0){
    	$(description).fadeOut();
       

    } else{
    	description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");

    }
}