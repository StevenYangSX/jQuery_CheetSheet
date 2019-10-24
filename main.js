
// $('h1').hide();
// $('h1#heading1').hide();

$('p span').css('color', 'red');

$('ul#list li:first').css('color', 'red');
$('ul#list li:even').css('background-color', 'yellow');
$('ul#list li:nth-child(3n)').css('list-style', 'none');


//select attrubutes
$('[href]').css('color','red')
//target attributes' value
$('a[href="https://amazon.com"]').css('color','green');

//grab everything
// $('*').hide();


//Events

$('#btn1').click(function() {
   $('.para3').hide();
})

$('#btn2').click(function() {
    $('.para3').show();
 })

 $('#btn3').click(function() {
    $('.para3').toggle();
 })

 $(document).on('mousemove', function(e) {
    //  console.log(e.clientX)
    $('#coords').html('Coords: X:' + e.clientX + '   Y: ' + e.clientY)
 })


 //focus and blur
 $('.input').focus(function(){
    //  alert('Focus')
    //use this keyword to spcify only the one with "this"
    $(this).css('background','pink')
 })
 $('.input').blur(function(){
    //  alert('Focus')
    //use this keyword to spcify only the one with "this"
    $(this).css('background','white')
 })

 //keyup keydown
 $('.input').keyup(function(e){
   console.log(e.target.value)
 })

//"change" event
 $('#gender').change(function(e){
    alert("gender changed to: "+e.target.value)
  })

  //submit a form
  $('#form').submit(function(e) {
      e.preventDefault();
      console.log("submitted.")
  })


  //use button to change para's classname in DOM
  $('#btndom').click(function() {
      $('#para2dom').toggleClass('paraChange')
  })

  $('#domInnerDiv p').text('This text is added using .text() function')

  $('#domInnerDiv ul').append('<li>This list item is added by append()</li>');

  $('#domInnerDiv ul').prepend('<li>This list item is added by prepend()</li>');

  //before and after 
  $('#domInnerDiv ul').before('<h3>This h3 is added by before() : add tags before selected</h3>')


  //add new item to the list
  $('#addItem').keyup(function(e){
    e.preventDefault();
    //we can get keycode here
    let keyCode = e.which;
    if(keyCode == 13) {
        $('#domInnerDiv ul').append('<li>'+ e.target.value+'</li>')
    }
  })


  //some array functions 

  var myArr = ['Brad', 'Kelliy','Nate', 'Steven'];

  $.each(myArr, function(index, value) {
    $('#userList').append('<li>'+index+"."+value+'</li>');
  })


  //animations

  $('#btn-fade-out').click(function() {
      $('#box').fadeOut('fast' /*slow or some time: 3000ms */, 
      /* callback function*/function(){
          $('#btn-fade-out').text("Gone.")
      });
  })

  $('#btn-fade-in').click(function() {
    $('#box').fadeIn('slow' /*slow or some time: 3000ms */, 
    /* callback function*/function(){
        $('#btn-fade-in').text("Back In.")
    });
})

$('#btn-fade-togg').click(function() {
    $('#box').fadeToggle('1000ms' /*slow or some time: 3000ms */, 
    /* callback function*/function(){
        $('#btn-fade-togg').text("I am a toggle")
    });
})

//movement
$('#btn-move-right').click(function(){
    $('#box2').animate({
        left: 500,
        height: '300px',
        width: '300px',
        opacity: '0.5'
    })
});
$('#btn-move-left').click(function(){
    $('#box2').animate({
        left: 0,
        height: '100px',
        width: '100px',
        opacity: '1'
    })
});

$('#btn-move-around').click(function(){
    let box = $('#box2');
    box.animate({
        left:300
    });
    box.animate({
        top:300
    });
    box.animate({
        left:0,
        top:300
    });
    box.animate({
        left:0,
        top:0,
    });
});

//AJAX in jQuery

$('#posts').load('https://jsonplaceholder.typicode.com/posts/1', 
                function(responseTxt, statusTxt, xhr) {
                    if(statusTxt == 'success'){
                        //alert("It is working.")
                        console.log("AJAX is working.")
                    }else if(statusTxt == 'error') {
                        alert("Error: " + xhr.statusText)
                    }
                }
);

$.getJSON('https://jsonplaceholder.typicode.com/posts/',
                    function(data){
                        //console.log(data);
                    $.each(data, function(i, post){
                        $('#users').append('<li>' + post.title +'</li>')
                    });
                    });

$.ajax({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts/1/comments?postId=1',
    dataType:  'json'   
}).done(function(data){
    console.log(data)
    $.each(data, function(i, post){
        $('#comments').append('<li>' + post.email +'</li>')
    });
});
        


            