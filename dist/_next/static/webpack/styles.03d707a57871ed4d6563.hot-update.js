webpackHotUpdate("styles",{

/***/ "./styles/layout.scss":
/*!****************************!*\
  !*** ./styles/layout.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"base_header":"_35JC9snXAuW7cuBJZ3WbKx","base_main":"_1rtomhaYh7D9qC4BK2i-Hi","base_footer":"_316rP8B51HnKw4OTkJpmYf","floating_menu":"_38uxLjVvPXRuQA7P-4aSJH"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1552470213653");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.03d707a57871ed4d6563.hot-update.js.map