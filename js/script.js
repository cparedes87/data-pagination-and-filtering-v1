/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


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
      //for(startIndex; startIndex < list.length > endIndex; startIndex++) { 
      //for( var i = 0;  i >= startIndex && i < endIndex; i++ ) {
      // inside the conditional:
      // create the elements needed to display the student information
         const studentItem = `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
           <h3>Ethel Dean</h3>
           <span class="email">ethel.dean@example.com</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined 12-15-2005</span>
         </div>
       </li>`;
         // insert the above elements
         studentList.insertAdjacentHTML('beforeend',studentItem);
      //}
   }   
}


showPage(data, 1); //calling the showPage function with the data object array and page 1

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
