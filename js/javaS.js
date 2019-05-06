function preview(element){


	document.getElementById('preview').style.backgroundImage = 'url('+ element.src + ')'; 

	document.getElementById('title_preview').innerHTML = element.alt; 
}




function unpreview(){

	document.getElementById('preview').style.backgroundImage = "url('')"; 

	document.getElementById('title_preview').innerHTML = "Preview the images below"; 

}







 







 