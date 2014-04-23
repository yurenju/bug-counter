$(document).ready(function() {
  var num = $('#bug-number');
  var reporter = $('#reporter');
  var summary = $('#summary');
  var link = $('#link');

  var ids = [];
  for (var i = 999950; i <= 1000000; i++) {
    ids.push(i);
  }

  function checkNumber() {
    var bugs;
    var query = 'https://bugzilla.mozilla.org/rest/bug?order=Bug%20Number&id=' + ids.join(',');

    $.ajax(query).done(function(data) {
      var bug = data.bugs.pop();
      num.text(bug.id);
      reporter.text(bug.creator_detail.real_name);
      summary.text(bug.summary);
      link.attr('href', 'https://bugzilla.mozilla.org/show_bug.cgi?id=' + bug.id);
    });
  }

  setInterval(checkNumber, 1000*30);
  checkNumber();
})