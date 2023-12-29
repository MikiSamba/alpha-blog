// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

// import '@hotwired/turbo-rails'
// //window.process = { env: { NODE_ENV: 'production' } };
// //import '@popperjs/core'
// import "@popperjs/core";
// import "bootstrap";

// document.addEventListener("turbo:load", function () {
//   // This code is copied from Bootstrap's docs. See link below.
//   var tooltipTriggerList = [].slice.call(
//     document.querySelectorAll('[data-bs-toggle="tooltip"]')
//   );
//   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//     return new bootstrap.Tooltip(tooltipTriggerEl);
//   });
// });import * as bootstrap from "bootstrap"

import '@hotwired/turbo-rails
import "./controllers";
import * as bootstrap from "bootstrap";