webpackHotUpdate("styles",{

/***/ "./styles/layout.scss":
/*!****************************!*\
  !*** ./styles/layout.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"base-header":"_1AvC0Cw8J7WSvii9UW1P59","base-main":"dZuJ36s0oNF2BsQyqUuAq","base-footer":"_1kh39zaxltSL4_n9Fgy2oQ","floating-menu":"nVggm7HlQtCW7mo16YjYB"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1552470133490");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.5e53954e2ed046b0e6c7.hot-update.js.map