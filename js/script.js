// finds and sets listener on 'explore' button, then pops up message when button is clicked
var explore = document.getElementsByClassName('explore');
var btnExploreWasClicked = document.querySelector('.explore');
btnExploreWasClicked.addEventListener('click', function(){
    alert('You clicked the Explore button')
});

// finds and sets listener on 'read' button, then pops up message when button is clicked
var read = document.getElementsByClassName('read');
var btnReadWasClicked = document.querySelector('.read');
btnReadWasClicked.addEventListener('click', function(){
    alert('You clicked the Read More button')
});

// finds and sets listener on 'sign' button, then pops up message when button is clicked
var sign = document.getElementsByClassName('sign');
var btnSignWasClicked = document.querySelector('.sign');
btnSignWasClicked.addEventListener('click', function(){
    alert('You clicked the Sign Up button')
});
