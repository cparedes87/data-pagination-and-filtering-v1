/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// Variables to reference search
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list,page) {
   // create two variables which will represent the index for the first and last student on the page
   const startIndex = (page * 9) -9;
   const endIndex= page * 9;
   // select the element with a class of `student-list` and assign it to a variable
   const studentList = document.querySelector('.student-list');
   // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML='';
   //loop over the length of the `list` parameter
   for( var i = 0; i < list.length; i++ ) {
      // inside the loop create a conditional to display the proper students
      // inside the conditional:
      // create the elements needed to display the student information
      if( i >= startIndex && i < endIndex) {
         const studentItem = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture['large']}" alt="Profile Picture">
               <h3>${list[i].name['first'] + " " + list[i].name['last']} </h3>
            <span class="email">${list[i]['email']}</span>
            </div>
            <div class="joined-details">
               <span class="date">${list[i].registered['date']}</span>
            </div>
         </li>`;
         // insert the above elements
         studentList.insertAdjacentHTML('beforeend',studentItem);
      //}
   }   
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
// create a variable to calculate the number of pages needed
   const numOfPages = Math.ceil(list.length/9);
  // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector('.link-list');
  // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML='';
  // loop over the number of pages needed
   for( var i = 1; i <= numOfPages; i++) {  
  // create the elements needed to display the pagination button
  const liButton = `<li><button type="button">${i}</button></li>`;    
  // insert the above elements
    linkList.insertAdjacentHTML('beforeend', liButton);
  //give the first pagination button a class of "active"
    button = document.querySelector('button');
    button.className = 'active';
  // create an event listener on the `link-list` element
      linkList.addEventListener('click', () => {
         // if the click target is a button:
         if(event.target.tagName == "BUTTON"){
            buttonInside = document.querySelector('.active');
            //remove the "active" class from the previous button
            buttonInside.className = '';
            event.target.className = 'active';
            //console.log(event.target)
            showPage(data,event.target.textContent);
         }
      });
   }
}

 //calling the showPage function with the data object array and page to display as argument
 showPage(data, 1); 
 //call the add pagination function to add pagination buttons passing data to calculate
 // the number of pagination buttons to show
 addPagination(data);