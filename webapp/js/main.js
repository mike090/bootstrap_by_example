$(document).ready(function() {
  var $charCount, maxCharCount;

  $charCount = $('#tweet-modal .char-count')
  maxCharCount = parseInt($charCount.data('max'), 10);

  $('#tweet-modal textarea').on('keyup', function(e) {
    var tweetLength = $(e.currentTarget).val().length;

    $charCount.html(maxCharCount - tweetLength);
  });

  $('[data-toggle="tooltip"]').tooltip();
});
