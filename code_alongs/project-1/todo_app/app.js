//find first list item
var listItems = document.querySelectorAll('li');
var completedItemsSpan = document.querySelector('span');

//add event handler for clicks
//call back function - signature
listItems.forEach(function (item) {
    //console.log(item.textContent);

    // item.addEventListener('click', function () { 
    //     item.style.textDecoration = 'line-through';
    // });
}); 

//firstListItem.addEventListener('click',function() {
//    firstListItem.style.textDecoration = 'line-through';
//    console.log('li clicked')
//})

var markAsDone = function (event) {
 //   event.target.style.textDecoration = 'line-through';
//Add the following conditions: if elem is already mark as done, remove it otherwise mark it as undone
    if (event.target.classList.contains('done')) {
        event.target.classList.remove('done');
    } else {
        event.target.classList.add('done')
    }

    //update completed items info
    completedItemsSpan.textContent = document.querySelectorAll ('.done').length; 
}

listItems.forEach(function (item) {
    item.addEventListener('click', markAsDone);
}); 

//for (var i = 0; i < listItems.length; i++) {
//    listItems[i].addEventListener ('click', markAsDone);
//}


