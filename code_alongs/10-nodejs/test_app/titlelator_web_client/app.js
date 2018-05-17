
var $titlelateBtn = $(".titlelate-btn")
var $titleDiv = $(".title-div")
var $keywordInput = $('.keyword-Input')

$titlelateBtn.on("click", (event) => {
  event.preventDefault();
  
  function showTitle(res) {
    console.log(res)

    //display it on page somewhere
    $titleDiv.text(res.title)
  }
  
  //fetch title from api
  $.ajax({
    url: 'http://localhost:7777/api/titles',
    data: { 
      keyword: $keywordInput.val() 
    }
  }).done(showTitle)


});
