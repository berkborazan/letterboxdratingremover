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
// @grant       none
// ==/UserScript==


const sectionToHide = document.querySelector('.section.ratings-histogram-chart');
if (sectionToHide) {
  sectionToHide.style.visibility = 'hidden';
} else {
  console.warn("The element with class 'section ratings-histogram-chart' was not found.");
}

