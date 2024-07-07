// ==UserScript==
// @name        Letterboxd Rating Remover - Berk
// @namespace   https://github.com/berkborazan/letterboxdratingremover
// @description Removes ratings from film pages
// @homepageURL https://github.com/berkborazan/letterboxdratingremover
// @include     *://letterboxd.com/film/*
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

    // Function to hide the element
    function hideRatingsChart() {
        const element = document.querySelector('.section.ratings-histogram-chart');
        if (element) {
            element.style.display = 'none';
        }
    }

    // Initial check
    hideRatingsChart();

    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(hideRatingsChart);

    // Start observing the document
    observer.observe(document.body, { childList: true, subtree: true });
})();
