if (jQuery.browser.version < 9.0) {
  jQuery(function() {
    return window.ttm.dashboard.ie8selects = function() {
      return jQuery("select").each(function() {
        var el, l, max, oldwidth, t;
        el = jQuery(this);
        t = el.offset().top;
        l = el.offset().left;
        max = 0;
        oldwidth = el.css("width");
        el.find("option").each(function() {
          var len, op;
          op = jQuery(this);
          len = op.html().length;
          max = Math.max(max, len);
        });
        el.on("mouseenter", function() {
          var scrollY;
          if (window.scrollY === undefined) {
            scrollY = document.documentElement.scrollTop;
          } else {
            scrollY = window.scrollY;
          }
          el.css({
            position: "fixed",
            width: max * .55 + "em",
            top: t - scrollY,
            left: l
          });
        });
        el.on("blur change", function() {
          var scrollY;
          scrollY = document.body.scrollTop;
          el.css({
            position: "relative",
            width: oldwidth,
            top: "",
            left: ""
          });
        });
        return jQuery(window).on("scroll", function() {
          var scrollY;
          scrollY = document.body.scrollTop;
          el.css({
            position: "relative",
            width: oldwidth,
            top: "",
            left: ""
          });
        });
      });
    };
  });
}
