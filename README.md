# Letterboxd Rating Remover
Violentmonkey, Greasemonkey, Tampermonkey script for removing Letterboxd ratings from the films page. (Plus couple of other quality of life updates)

## To Install:
Install Violentmonkey or Greasemonkey or Tampermonkey.
Select the new user script.
Copy and paste the JavaScript code.
Have fun.

## Current Functions:
- Hides the film's ratings in film's page.
- Hides news sections from the home page.
- Hides the stories section from the homepage
- Hides ratings given by your friends for the films you have not watched yet
- Hides the average ratings /films/popular overlay. This currently also removes the titles of movies alongside with ratings, will be fixed later.


## To Customize
 You can just remove any line of code you want. Workflow is explained through comments.
 
    // Hides film ratings from the films' pages
    function hideRatingsChart() {
        const element = document.querySelector('.section.ratings-histogram-chart');
        if (element) {
            element.style.display = 'none';
        }
    }
		//If you want to remove this function, delete between the comments.

### TODO
 - [ ] Fixing a known bug with average rating remover from popular films. (This should not affect too many users at the moment)
 - [ ] Zooming on the posters when hovered over.
 - [ ]  Ability to remove even more ratings.
 - [ ] Customizing activity feed.
