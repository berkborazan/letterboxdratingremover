// ==UserScript==
// @name        Letterboxd Rating Remover
// @namespace   https://github.com/berkborazan/letterboxdratingremover
// @description Removes ratings from film pages
// @homepageURL https://github.com/berkborazan/letterboxdratingremover
// @include     *://letterboxd.com/*
// @include     *://letterboxd.com/film/*
// @include     *://letterboxd.com/films/*
// @include     *://letterboxd.com/film/*/crew/*
// @include     *://letterboxd.com/film/*/studios/*
// @include     *://letterboxd.com/film/*/genres/*
// @exclude     *://letterboxd.com/film/*/views/*
// @exclude     *://letterboxd.com/film/*/lists/*
// @exclude     *://letterboxd.com/film/*/likes/*
// @exclude     *://letterboxd.com/film/*/fans/*
// @exclude     *://letterboxd.com/film/*/ratings/*
// @exclude     *://letterboxd.com/film/*/reviews/*
// @version     1.1
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
        const sections = document.querySelectorAll('.banner.banner-950.js-hide-in-app');

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


              	// Hides the Where to Watch Section in the Film's Page
    function hideMentionedBySection() {
    const section = document.getElementById('film-hq-mentions');
    if (section) {
        section.style.display = 'none';
    }
}
    	//If you want to remove this function, delete between the comments.


                	// Hides the Lists with more than 200 films in the Film's Page
    function removeAttributionClassForBigFilmCounts() {
    const values = document.querySelectorAll('section.list small.value');

    values.forEach(el => {
        const text = el.textContent.trim();
        if (text.endsWith('films')) {
            const number = parseInt(text.replace(/[^\d]/g, ''), 10);
            if (number > 200) {
                const section = el.closest('section.list');
                if (section) {
                    section.remove();
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
        //If you want to remove this function, delete between the comments.


                      // Hides the Pro Ad on your Profile
      function hideProfileProAd() {
        const sections = document.querySelectorAll('.banner.banner-250.js-hide-in-app');

        sections.forEach(section => {
            section.style.display = 'none';
        });
    }
        //If you want to remove this function, delete between the comments.




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
    hideProfileProAd();



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
        hideProfileProAd();


    });

    // Start observing the document
    observer.observe(document.body, { childList: true, subtree: true });
})();
