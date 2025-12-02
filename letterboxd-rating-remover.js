// ==UserScript==
// @name         Letterboxd Rating Remover and Activity Filter
// @namespace   https://github.com/berkborazan/letterboxdratingremover
// @description Removes ratings from film pages and filters activity on the activity page
// @homepageURL https://github.com/berkborazan/letterboxdratingremover
// @include     *://letterboxd.com/*
// @include     *://letterboxd.com/film/*
// @include     *://letterboxd.com/films/*
// @include     *://letterboxd.com/film/*/crew/*
// @include     *://letterboxd.com/film/*/studios/*
// @include     *://letterboxd.com/film/*/genres/*
// @include     *://letterboxd.com/activity/*                // <-- ADDED THIS INCLUDE
// @exclude     *://letterboxd.com/film/*/views/*
// @exclude     *://letterboxd.com/film/*/lists/*
// @exclude     *://letterboxd.com/film/*/likes/*
// @exclude     *://letterboxd.com/film/*/fans/*
// @exclude     *://letterboxd.com/film/*/ratings/*
// @exclude     *://letterboxd.com/film/*/reviews/*
// @version     1.2                                        // <-- UPDATED VERSION
// @grant       none
// @run-at      document-end
// ==/UserScript==

(function() {
    'use strict';

    // Hides film ratings from the films' pages
    function hideRatingsChart() {
        const element = document.querySelector('.section.ratings-histogram-chart');
        if (element) {
            element.style.display = 'none';
        }
    }
    //If you want to remove this function, delete between the comments.



    // Hides news sections from the homepage
    function hideNews() {
        const elements = document.querySelectorAll('#latest-news');
        elements.forEach(element => {
            element.style.display = 'none';
        });
    }
    //If you want to remove this function, delete between the comments.


    // Hides the stories section from the homepage
    function hideStories() {
        const element = document.querySelector('.section.stories-section');
        if (element) {
            element.style.display = 'none';
        }
    }
    //If you want to remove this function, delete between the comments.


    // Hides ratings given by your friends for the films you have not watched yet
    function removePosterViewingData() {
        const elements = document.querySelectorAll('.poster-viewingdata');
        elements.forEach(element => {
            const parent = element.closest('.poster-container.viewing-poster-container.film-not-watched');
            if (parent) {
                element.remove();
            }
        });
    }
    //If you want to remove this function, delete between the comments.


    // Hides the stories section from the homepage
    function hideProAds() {
        const sections = document.querySelectorAll('.banner.banner-950.js-hide-in-app, .banner.banner-250.js-hide-in-app, .banner.banner-230.js-hide-in-app');

        sections.forEach(section => {
            section.style.display = 'none';
        });
    }
    //If you want to remove this function, delete between the comments.


    // Hides the average ratings /films/popular overlay. This currently also removes the titles of movies alongside with ratings, will be fixed later.
    function hideAverageRating() {
        const elements = document.querySelectorAll('.frame.has-menu');
        elements.forEach(element => {
            element.removeAttribute('data-original-title')
        });
    }
    //If you want to remove this function, delete between the comments.

    // Hides the Main "Welcome Back" Title.
    function hideMainTitle() {
        const element = document.querySelector('.title-hero');
        if (element) {
            element.style.display = 'none';
        }
    }
    //If you want to remove this function, delete between the comments.


    // Hides the Main Showdowns
    function hideShowdowns() {
        const element = document.querySelector('.teaser-grid.-singlerow');
        if (element) {
            element.style.display = 'none';
        }
    }
    //If you want to remove this function, delete between the comments.


    function hideShowdownsSection() {
        const allSections = document.querySelectorAll('section.section');
        allSections.forEach(section => {
            const heading = section.querySelector('h2.section-heading.-spaced a');
            if (heading && heading.getAttribute('href') === '/showdown/') {
                section.style.display = 'none';
            }
        });
    }


    // Hides the Members Title.
    function hideMembers() {
        const element = document.querySelector('.navitem.main-nav-people');
        if (element) {
            element.style.display = 'none';
        }
    }
    //If you want to remove this function, delete between the comments.

    // Hides the Members Title.
    function hideJournal() {
        const element = document.querySelector('.navitem.main-nav-journal');
        if (element) {
            element.style.display = 'none';
        }
    }
    //If you want to remove this function, delete between the comments.


    // Hides the Footer
    function hideFooter() {
        const element = document.getElementById('page-footer');
        if (element) {
            element.style.display = 'none';
        }
    }
    //If you want to remove this function, delete between the comments.


    // Hides the Film News Section in the Film's Page
    function hideFilmNewsSection() {
        const sections = document.querySelectorAll('section.section-margin.film-news');

        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    //If you want to remove this function, delete between the comments.


    // Hides the Where to Watch Section in the Film's Page
    function hideWheretoWatch() {
        const sections = document.querySelectorAll('section.watch-panel.js-watch-panel');

        sections.forEach(section => {
            section.style.display = 'none';
        });
    }
    //If you want to remove this function, delete between the comments.


    // Hides the Mentioned By Section in the Film's Page
    function hideMentionedBySection() {
        const section = document.getElementById('film-hq-mentions');
        if (section) {
            section.style.display = 'none';
        }
    }
    //If you want to remove this function, delete between the comments.


    // Hides the Lists with more than 200 films in the Film's Page
    function removeAttributionClassForBigFilmCounts() {
        // 1. Check if the current URL starts with /film/
    if (!window.location.pathname.startsWith('/film/')) {
        return; // Exit the function if we are not on a film page
    }

    // 2. The rest of the logic only runs on film pages
    const values = document.querySelectorAll('.value');

    values.forEach(el => {
        const text = el.textContent.trim();

        // Checks if the text ends with 'films'
        if (text.endsWith('films')) {
            // Extracts the number only.
            const number = parseInt(text.replace(/[^\d]/g, ''), 10);

            // Checks if the extracted number is greater than 200
            if (number > 200) {
                // Finds the closest ancestor element with the class 'listitem js-listitem'
                const listItem = el.closest('.listitem.js-listitem');

                // If the parent list item is found, remove it from the DOM
                if (listItem) {
                    listItem.remove();
                }
            }
        }
    });
}

    //If you want to remove this function, delete between the comments.


    // Hides the NanoCrowd Attribution in the Film's Page
    function hideNanoCrowd() {
        const sections = document.querySelectorAll('.nanocrowd-attribution.-is-not-stacked');

        sections.forEach(section => {
            section.style.display = 'none';
        });
    }
    //If you want to remove this function, delete between the comments.


    // Hides the off-center report flag in the Film's Page
    function hideReportFlag() {
        const sections = document.querySelectorAll('.block-flag-wrapper.show-on-hover');

        sections.forEach(section => {
            section.style.display = 'none';
        });
    }



// NEW FUNCTION: Removes activity rows on the /activity/ page unless they contain one of the specified profile names. BUT IT DOES NOT REMOVE REVIEWS. IF YOU WANT TO REMOVE REVIEWS OF UNSPECIFIED PEOPLE AS WELL CHECK THE COMMENTS BELOW
function filterActivityRowsByHref() {
    // Only run on the /activity/ page
    if (!window.location.pathname.startsWith('/activity/')) {
        return;
    }

    // Define an array of all allowed user hrefs
    // ADD MORE HREFS HERE (make sure they start and end with '/')
    const allowedHrefs = [
        '/berkaygundz/',
        '/terribleivan/', // Example of adding a third user
    ];

  // SO BECAUSE IT CHOOSES -BASIC it does not remove reviews from unrelated persons. If you want to remove them as well, just change the line below to
  //const activityRows = document.querySelectorAll('.activity-row');
    const activityRows = document.querySelectorAll('.activity-row.-basic');

    activityRows.forEach(row => {
        let isAllowed = false;

        // Check if the activity row contains any of the allowed user hrefs
        for (const href of allowedHrefs) {
            // Check if an anchor tag with the current href exists in the row
            const userLink = row.querySelector(`a[href="${href}"]`);

            if (userLink) {
                isAllowed = true;
                break; // Found an allowed link, no need to check the rest of the list
            }
        }

        // If no allowed links were found in the row after checking all possibilities, remove the row.
        if (!isAllowed) {
            row.remove();
        }
    });
}
//If you want to remove this function, delete between the comments.


    // --- FUNCTION CALLS ---

    // Initial checks
    hideRatingsChart();
    removePosterViewingData();
    hideNews();
    hideStories();
    hideProAds();
    hideAverageRating();
    hideMainTitle();
    hideShowdowns();
    hideFooter();
    hideMembers();
    hideJournal();
    hideShowdownsSection();
    hideFilmNewsSection();
    hideWheretoWatch();
    hideMentionedBySection();
    removeAttributionClassForBigFilmCounts();
    hideNanoCrowd();
    hideReportFlag();
    filterActivityRowsByHref(); // <-- NEW FUNCTION CALL HERE


    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(() => {
        hideRatingsChart();
        removePosterViewingData();
        hideNews();
        hideStories();
        hideProAds();
        hideAverageRating();
        hideMainTitle();
        hideShowdowns();
        hideFooter();
        hideMembers();
        hideJournal();
        hideShowdownsSection();
        hideFilmNewsSection();
        hideWheretoWatch();
        hideMentionedBySection();
        removeAttributionClassForBigFilmCounts();
        hideNanoCrowd();
        hideReportFlag();
        filterActivityRowsByHref(); // <-- NEW FUNCTION CALL HERE
    });

    // Start observing the document
    observer.observe(document.body, { childList: true, subtree: true });
})();
