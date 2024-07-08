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
// @version     1
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
        const element = document.querySelector('.banner.banner-950.js-hide-in-app');
        if (element) {
            element.style.display = 'none';
        }
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


    // Initial checks
    hideRatingsChart();
    removePosterViewingData();
    hideNews();
    hideStories();
    hideProAds();
    hideAverageRating();



    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(() => {
        hideRatingsChart();
        removePosterViewingData();
        hideNews();
        hideStories();
        hideProAds();
        hideAverageRating();


    });

    // Start observing the document
    observer.observe(document.body, { childList: true, subtree: true });
})();
