/**
 * Drupalcamp components js
 */

(function ($) {
  "use strict";

  let $body = $('body');
  let $paragraphsToggle = $('<a href="#" class="paragraphs-toggle">Show Paragraphs</a>').on('click', function(e) {
    e.preventDefault();
    $body.toggleClass('show-paragraphs');
    if ($(this).text() == 'Show Paragraphs') {
      $(this).text('Hide Paragraphs');
    } else {
      $(this).text('Show Paragraphs');
    }
  });
  let $paragraphsLabelsToggle = $('<a href="#" class="paragraphs-labels-toggle">Show Labels</a>').on('click', function(e) {
    e.preventDefault();
    $body.toggleClass('show-paragraphs-labels');
    if ($(this).text() == 'Show Labels') {
      $(this).text('Hide Labels');
    } else {
      $(this).text('Show Labels');
    }
  });

  $body.append($paragraphsToggle).append($paragraphsLabelsToggle);

  let $paragraphs = $('.paragraph');
  let check = 'paragraph--type--';
  $paragraphs.each(function(i, el) {
    let className = this.className;
    let cls = $.map(this.className.split(' '), function (val, i) {
      if (val.indexOf(check) > -1) {
        return val.slice(check.length, val.length)
      }
    });

    let paragraphType = cls.join(' ');
    $(this).attr('data-paragraph', paragraphType);
  });

})(jQuery);