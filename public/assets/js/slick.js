!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var t,
    e = window.Slick || {};
  ((e =
    ((t = 0),
    function e(s, o) {
      var n,
        r = this;
      (r.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(s),
        appendDots: i(s),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow:
          '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (t, e) {
          return i(
            '<button type="button" data-role="none" role="button" tabindex="0" />'
          ).text(e + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (r.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(r, r.initials),
        (r.activeBreakpoint = null),
        (r.animType = null),
        (r.animProp = null),
        (r.breakpoints = []),
        (r.breakpointSettings = []),
        (r.cssTransitions = !1),
        (r.focussed = !1),
        (r.interrupted = !1),
        (r.hidden = "hidden"),
        (r.paused = !0),
        (r.positionProp = null),
        (r.respondTo = null),
        (r.rowCount = 1),
        (r.shouldClick = !0),
        (r.$slider = i(s)),
        (r.$slidesCache = null),
        (r.transformType = null),
        (r.transitionType = null),
        (r.visibilityChange = "visibilitychange"),
        (r.windowWidth = 0),
        (r.windowTimer = null),
        (n = i(s).data("slick") || {}),
        (r.options = i.extend({}, r.defaults, o, n)),
        (r.currentSlide = r.options.initialSlide),
        (r.originalSettings = r.options),
        void 0 !== document.mozHidden
          ? ((r.hidden = "mozHidden"),
            (r.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((r.hidden = "webkitHidden"),
            (r.visibilityChange = "webkitvisibilitychange")),
        (r.autoPlay = i.proxy(r.autoPlay, r)),
        (r.autoPlayClear = i.proxy(r.autoPlayClear, r)),
        (r.autoPlayIterator = i.proxy(r.autoPlayIterator, r)),
        (r.changeSlide = i.proxy(r.changeSlide, r)),
        (r.clickHandler = i.proxy(r.clickHandler, r)),
        (r.selectHandler = i.proxy(r.selectHandler, r)),
        (r.setPosition = i.proxy(r.setPosition, r)),
        (r.swipeHandler = i.proxy(r.swipeHandler, r)),
        (r.dragHandler = i.proxy(r.dragHandler, r)),
        (r.keyHandler = i.proxy(r.keyHandler, r)),
        (r.instanceUid = t++),
        (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        r.registerBreakpoints(),
        r.init(!0);
    })).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd = function (i, t, e) {}),
    (e.prototype.animateHeight = function () {
      if (
        1 === this.options.slidesToShow &&
        !0 === this.options.adaptiveHeight &&
        !1 === this.options.vertical
      ) {
        var i = this.$slides.eq(this.currentSlide).outerHeight(!0);
        this.$list.animate({ height: i }, this.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (t, e) {
      var s = {},
        o = this;
      o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
        !1 === o.transformsEnabled
          ? !1 === o.options.vertical
            ? o.$slideTrack.animate(
                { left: t },
                o.options.speed,
                o.options.easing,
                e
              )
            : o.$slideTrack.animate(
                { top: t },
                o.options.speed,
                o.options.easing,
                e
              )
          : !1 === o.cssTransitions
          ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
            i({ animStart: o.currentLeft }).animate(
              { animStart: t },
              {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === o.options.vertical
                      ? ((s[o.animType] = "translate(" + i + "px, 0px)"),
                        o.$slideTrack.css(s))
                      : ((s[o.animType] = "translate(0px," + i + "px)"),
                        o.$slideTrack.css(s));
                },
                complete: function () {
                  e && e.call();
                },
              }
            ))
          : (o.applyTransition(),
            (t = Math.ceil(t)),
            !1 === o.options.vertical
              ? (s[o.animType] = "translate3d(" + t + "px, 0px, 0px)")
              : (s[o.animType] = "translate3d(0px," + t + "px, 0px)"),
            o.$slideTrack.css(s),
            e &&
              setTimeout(function () {
                o.disableTransition(), e.call();
              }, o.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var t = this.options.asNavFor;
      return t && null !== t && (t = i(t).not(this.$slider)), t;
    }),
    (e.prototype.asNavFor = function (t) {
      var e = this.getNavTarget();
      null !== e &&
        "object" == typeof e &&
        e.each(function () {
          var e = i(this).slick("getSlick");
          e.unslicked || e.slideHandler(t, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var t = this,
        e = {};
      !1 === t.options.fade
        ? (e[t.transitionType] =
            t.transformType + " " + t.options.speed + "ms " + t.options.cssEase)
        : (e[t.transitionType] =
            "opacity " + t.options.speed + "ms " + t.options.cssEase),
        !1 === t.options.fade ? t.$slideTrack.css(e) : t.$slides.eq(i).css(e);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        t = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((t = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(t));
    }),
    (e.prototype.buildArrows = function () {
      var t = this;
      !0 === t.options.arrows &&
        ((t.$prevArrow = i(t.options.prevArrow).addClass("slick-arrow")),
        (t.$nextArrow = i(t.options.nextArrow).addClass("slick-arrow")),
        t.slideCount > t.options.slidesToShow
          ? (t.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            t.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            t.htmlExpr.test(t.options.prevArrow) &&
              t.$prevArrow.prependTo(t.options.appendArrows),
            t.htmlExpr.test(t.options.nextArrow) &&
              t.$nextArrow.appendTo(t.options.appendArrows),
            !0 !== t.options.infinite &&
              t.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : t.$prevArrow
              .add(t.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var t,
        e,
        s = this;
      if (!0 === s.options.dots && s.slideCount > s.options.slidesToShow) {
        for (
          s.$slider.addClass("slick-dotted"),
            e = i("<ul />").addClass(s.options.dotsClass),
            t = 0;
          t <= s.getDotCount();
          t += 1
        )
          e.append(i("<li />").append(s.options.customPaging.call(this, s, t)));
        (s.$dots = e.appendTo(s.options.appendDots)),
          s.$dots
            .find("li")
            .first()
            .addClass("slick-active")
            .attr("aria-hidden", "false");
      }
    }),
    (e.prototype.buildOut = function () {
      var t = this;
      (t.$slides = t.$slider
        .children(t.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (t.slideCount = t.$slides.length),
        t.$slides.each(function (t, e) {
          i(e)
            .attr("data-slick-index", t)
            .data("originalStyling", i(e).attr("style") || "");
        }),
        t.$slider.addClass("slick-slider"),
        (t.$slideTrack =
          0 === t.slideCount
            ? i('<div class="slick-track"/>').appendTo(t.$slider)
            : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (t.$list = t.$slideTrack
          .wrap('<div aria-live="polite" class="slick-list"/>')
          .parent()),
        t.$slideTrack.css("opacity", 0),
        (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) &&
          (t.options.slidesToScroll = 1),
        i("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
        t.setupInfinite(),
        t.buildArrows(),
        t.buildDots(),
        t.updateDots(),
        t.setSlideClasses(
          "number" == typeof t.currentSlide ? t.currentSlide : 0
        ),
        !0 === t.options.draggable && t.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i, t, e, s, o, n, r;
      if (
        ((s = document.createDocumentFragment()),
        (n = this.$slider.children()),
        this.options.rows > 1)
      ) {
        for (
          i = 0,
            r = this.options.slidesPerRow * this.options.rows,
            o = Math.ceil(n.length / r);
          i < o;
          i++
        ) {
          var l = document.createElement("div");
          for (t = 0; t < this.options.rows; t++) {
            var d = document.createElement("div");
            for (e = 0; e < this.options.slidesPerRow; e++) {
              var a = i * r + (t * this.options.slidesPerRow + e);
              n.get(a) && d.appendChild(n.get(a));
            }
            l.appendChild(d);
          }
          s.appendChild(l);
        }
        this.$slider.empty().append(s),
          this.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / this.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (t, e) {
      var s,
        o,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        for (s in ((o = null), r.breakpoints))
          r.breakpoints.hasOwnProperty(s) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[s] && (o = r.breakpoints[s])
              : n > r.breakpoints[s] && (o = r.breakpoints[s]));
        null !== o
          ? null !== r.activeBreakpoint
            ? (o !== r.activeBreakpoint || e) &&
              ((r.activeBreakpoint = o),
              "unslick" === r.breakpointSettings[o]
                ? r.unslick(o)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[o]
                  )),
                  !0 === t && (r.currentSlide = r.options.initialSlide),
                  r.refresh(t)),
              (l = o))
            : ((r.activeBreakpoint = o),
              "unslick" === r.breakpointSettings[o]
                ? r.unslick(o)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[o]
                  )),
                  !0 === t && (r.currentSlide = r.options.initialSlide),
                  r.refresh(t)),
              (l = o))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === t && (r.currentSlide = r.options.initialSlide),
            r.refresh(t),
            (l = o)),
          t || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (t, e) {
      var s,
        o,
        n,
        r = i(t.currentTarget);
      switch (
        (r.is("a") && t.preventDefault(),
        r.is("li") || (r = r.closest("li")),
        (s = (n = this.slideCount % this.options.slidesToScroll != 0)
          ? 0
          : (this.slideCount - this.currentSlide) %
            this.options.slidesToScroll),
        t.data.message)
      ) {
        case "previous":
          (o =
            0 === s
              ? this.options.slidesToScroll
              : this.options.slidesToShow - s),
            this.slideCount > this.options.slidesToShow &&
              this.slideHandler(this.currentSlide - o, !1, e);
          break;
        case "next":
          (o = 0 === s ? this.options.slidesToScroll : s),
            this.slideCount > this.options.slidesToShow &&
              this.slideHandler(this.currentSlide + o, !1, e);
          break;
        case "index":
          var l =
            0 === t.data.index
              ? 0
              : t.data.index || r.index() * this.options.slidesToScroll;
          this.slideHandler(this.checkNavigable(l), !1, e),
            r.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var t, e;
      if (((t = this.getNavigableIndexes()), (e = 0), i > t[t.length - 1]))
        i = t[t.length - 1];
      else
        for (var s in t) {
          if (i < t[s]) {
            i = e;
            break;
          }
          e = t[s];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      this.options.dots &&
        null !== this.$dots &&
        i("li", this.$dots)
          .off("click.slick", this.changeSlide)
          .off("mouseenter.slick", i.proxy(this.interrupt, this, !0))
          .off("mouseleave.slick", i.proxy(this.interrupt, this, !1)),
        this.$slider.off("focus.slick blur.slick"),
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow &&
            this.$prevArrow.off("click.slick", this.changeSlide),
          this.$nextArrow &&
            this.$nextArrow.off("click.slick", this.changeSlide)),
        this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler),
        this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler),
        this.$list.off("touchend.slick mouseup.slick", this.swipeHandler),
        this.$list.off("touchcancel.slick mouseleave.slick", this.swipeHandler),
        this.$list.off("click.slick", this.clickHandler),
        i(document).off(this.visibilityChange, this.visibility),
        this.cleanUpSlideEvents(),
        !0 === this.options.accessibility &&
          this.$list.off("keydown.slick", this.keyHandler),
        !0 === this.options.focusOnSelect &&
          i(this.$slideTrack).children().off("click.slick", this.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + this.instanceUid,
          this.orientationChange
        ),
        i(window).off("resize.slick.slick-" + this.instanceUid, this.resize),
        i("[draggable!=true]", this.$slideTrack).off(
          "dragstart",
          this.preventDefault
        ),
        i(window).off("load.slick.slick-" + this.instanceUid, this.setPosition),
        i(document).off(
          "ready.slick.slick-" + this.instanceUid,
          this.setPosition
        );
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      this.$list.off("mouseenter.slick", i.proxy(this.interrupt, this, !0)),
        this.$list.off("mouseleave.slick", i.proxy(this.interrupt, this, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i;
      this.options.rows > 1 &&
        ((i = this.$slides.children().children()).removeAttr("style"),
        this.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (t) {
      var e = this;
      e.autoPlayClear(),
        (e.touchObject = {}),
        e.cleanUpEvents(),
        i(".slick-cloned", e.$slider).detach(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.$prevArrow.length &&
          (e.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
        e.$nextArrow &&
          e.$nextArrow.length &&
          (e.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
        e.$slides &&
          (e.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slideTrack.detach(),
          e.$list.detach(),
          e.$slider.append(e.$slides)),
        e.cleanUpRows(),
        e.$slider.removeClass("slick-slider"),
        e.$slider.removeClass("slick-initialized"),
        e.$slider.removeClass("slick-dotted"),
        (e.unslicked = !0),
        t || e.$slider.trigger("destroy", [e]);
    }),
    (e.prototype.disableTransition = function (i) {
      var t = this,
        e = {};
      (e[t.transitionType] = ""),
        !1 === t.options.fade ? t.$slideTrack.css(e) : t.$slides.eq(i).css(e);
    }),
    (e.prototype.fadeSlide = function (i, t) {
      var e = this;
      !1 === e.cssTransitions
        ? (e.$slides.eq(i).css({ zIndex: e.options.zIndex }),
          e.$slides
            .eq(i)
            .animate({ opacity: 1 }, e.options.speed, e.options.easing, t))
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 1, zIndex: e.options.zIndex }),
          t &&
            setTimeout(function () {
              e.disableTransition(i), t.call();
            }, e.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      !1 === this.cssTransitions
        ? this.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: this.options.zIndex - 2 },
              this.options.speed,
              this.options.easing
            )
        : (this.applyTransition(i),
          this.$slides
            .eq(i)
            .css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var t = this;
        null !== i &&
          ((t.$slidesCache = t.$slides),
          t.unload(),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slidesCache.filter(i).appendTo(t.$slideTrack),
          t.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var t = this;
      t.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (e) {
          e.stopImmediatePropagation();
          var s = i(this);
          setTimeout(function () {
            t.options.pauseOnFocus &&
              ((t.focussed = s.is(":focus")), t.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = 0,
        t = 0,
        e = 0;
      if (!0 === this.options.infinite)
        for (; i < this.slideCount; )
          ++e,
            (i = t + this.options.slidesToScroll),
            (t +=
              this.options.slidesToScroll <= this.options.slidesToShow
                ? this.options.slidesToScroll
                : this.options.slidesToShow);
      else if (!0 === this.options.centerMode) e = this.slideCount;
      else if (this.options.asNavFor)
        for (; i < this.slideCount; )
          ++e,
            (i = t + this.options.slidesToScroll),
            (t +=
              this.options.slidesToScroll <= this.options.slidesToShow
                ? this.options.slidesToScroll
                : this.options.slidesToShow);
      else
        e =
          1 +
          Math.ceil(
            (this.slideCount - this.options.slidesToShow) /
              this.options.slidesToScroll
          );
      return e - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var t,
        e,
        s,
        o = this,
        n = 0;
      return (
        (o.slideOffset = 0),
        (e = o.$slides.first().outerHeight(!0)),
        !0 === o.options.infinite
          ? (o.slideCount > o.options.slidesToShow &&
              ((o.slideOffset = -(o.slideWidth * o.options.slidesToShow * 1)),
              (n = -(e * o.options.slidesToShow * 1))),
            o.slideCount % o.options.slidesToScroll != 0 &&
              i + o.options.slidesToScroll > o.slideCount &&
              o.slideCount > o.options.slidesToShow &&
              (i > o.slideCount
                ? ((o.slideOffset = -(
                    (o.options.slidesToShow - (i - o.slideCount)) *
                    o.slideWidth *
                    1
                  )),
                  (n = -(
                    (o.options.slidesToShow - (i - o.slideCount)) *
                    e *
                    1
                  )))
                : ((o.slideOffset = -(
                    (o.slideCount % o.options.slidesToScroll) *
                    o.slideWidth *
                    1
                  )),
                  (n = -((o.slideCount % o.options.slidesToScroll) * e * 1)))))
          : i + o.options.slidesToShow > o.slideCount &&
            ((o.slideOffset =
              (i + o.options.slidesToShow - o.slideCount) * o.slideWidth),
            (n = (i + o.options.slidesToShow - o.slideCount) * e)),
        o.slideCount <= o.options.slidesToShow &&
          ((o.slideOffset = 0), (n = 0)),
        !0 === o.options.centerMode && !0 === o.options.infinite
          ? (o.slideOffset +=
              o.slideWidth * Math.floor(o.options.slidesToShow / 2) -
              o.slideWidth)
          : !0 === o.options.centerMode &&
            ((o.slideOffset = 0),
            (o.slideOffset +=
              o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
        (t =
          !1 === o.options.vertical
            ? -(i * o.slideWidth * 1) + o.slideOffset
            : -(i * e * 1) + n),
        !0 === o.options.variableWidth &&
          ((s =
            o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite
              ? o.$slideTrack.children(".slick-slide").eq(i)
              : o.$slideTrack
                  .children(".slick-slide")
                  .eq(i + o.options.slidesToShow)),
          (t =
            !0 === o.options.rtl
              ? s[0]
                ? -((o.$slideTrack.width() - s[0].offsetLeft - s.width()) * 1)
                : 0
              : s[0]
              ? -1 * s[0].offsetLeft
              : 0),
          !0 === o.options.centerMode &&
            ((s =
              o.slideCount <= o.options.slidesToShow ||
              !1 === o.options.infinite
                ? o.$slideTrack.children(".slick-slide").eq(i)
                : o.$slideTrack
                    .children(".slick-slide")
                    .eq(i + o.options.slidesToShow + 1)),
            (t =
              !0 === o.options.rtl
                ? s[0]
                  ? -((o.$slideTrack.width() - s[0].offsetLeft - s.width()) * 1)
                  : 0
                : s[0]
                ? -1 * s[0].offsetLeft
                : 0),
            (t += (o.$list.width() - s.outerWidth()) / 2))),
        t
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        t = 0,
        e = 0,
        s = [];
      for (
        !1 === this.options.infinite
          ? (i = this.slideCount)
          : ((t = -1 * this.options.slidesToScroll),
            (e = -1 * this.options.slidesToScroll),
            (i = 2 * this.slideCount));
        t < i;

      )
        s.push(t),
          (t = e + this.options.slidesToScroll),
          (e +=
            this.options.slidesToScroll <= this.options.slidesToShow
              ? this.options.slidesToScroll
              : this.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var t,
        e,
        s,
        o = this;
      return ((s =
        !0 === o.options.centerMode
          ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
          : 0),
      !0 === o.options.swipeToSlide)
        ? (o.$slideTrack.find(".slick-slide").each(function (t, n) {
            if (n.offsetLeft - s + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
              return (e = n), !1;
          }),
          (t = Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1))
        : o.options.slidesToScroll;
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, t) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, t);
      }),
    (e.prototype.init = function (t) {
      var e = this;
      i(e.$slider).hasClass("slick-initialized") ||
        (i(e.$slider).addClass("slick-initialized"),
        e.buildRows(),
        e.buildOut(),
        e.setProps(),
        e.startLoad(),
        e.loadSlider(),
        e.initializeEvents(),
        e.updateArrows(),
        e.updateDots(),
        e.checkResponsive(!0),
        e.focusHandler()),
        t && e.$slider.trigger("init", [e]),
        !0 === e.options.accessibility && e.initADA(),
        e.options.autoplay && ((e.paused = !1), e.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var t = this;
      t.$slides
        .add(t.$slideTrack.find(".slick-cloned"))
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        t.$slideTrack.attr("role", "listbox"),
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (e) {
          i(this).attr({
            role: "option",
            "aria-describedby": "slick-slide" + t.instanceUid + e,
          });
        }),
        null !== t.$dots &&
          t.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (e) {
              i(this).attr({
                role: "presentation",
                "aria-selected": "false",
                id: "slick-slide" + t.instanceUid + e,
              });
            })
            .first()
            .attr("aria-selected", "true")
            .end()
            .find("button")
            .attr("role", "button")
            .end()
            .closest("div")
            .attr("role", "toolbar"),
        t.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      !0 === this.options.arrows &&
        this.slideCount > this.options.slidesToShow &&
        (this.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, this.changeSlide),
        this.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, this.changeSlide));
    }),
    (e.prototype.initDotEvents = function () {
      !0 === this.options.dots &&
        this.slideCount > this.options.slidesToShow &&
        i("li", this.$dots).on(
          "click.slick",
          { message: "index" },
          this.changeSlide
        ),
        !0 === this.options.dots &&
          !0 === this.options.pauseOnDotsHover &&
          i("li", this.$dots)
            .on("mouseenter.slick", i.proxy(this.interrupt, this, !0))
            .on("mouseleave.slick", i.proxy(this.interrupt, this, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      this.options.pauseOnHover &&
        (this.$list.on("mouseenter.slick", i.proxy(this.interrupt, this, !0)),
        this.$list.on("mouseleave.slick", i.proxy(this.interrupt, this, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      this.initArrowEvents(),
        this.initDotEvents(),
        this.initSlideEvents(),
        this.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          this.swipeHandler
        ),
        this.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          this.swipeHandler
        ),
        this.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          this.swipeHandler
        ),
        this.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          this.swipeHandler
        ),
        this.$list.on("click.slick", this.clickHandler),
        i(document).on(this.visibilityChange, i.proxy(this.visibility, this)),
        !0 === this.options.accessibility &&
          this.$list.on("keydown.slick", this.keyHandler),
        !0 === this.options.focusOnSelect &&
          i(this.$slideTrack).children().on("click.slick", this.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + this.instanceUid,
          i.proxy(this.orientationChange, this)
        ),
        i(window).on(
          "resize.slick.slick-" + this.instanceUid,
          i.proxy(this.resize, this)
        ),
        i("[draggable!=true]", this.$slideTrack).on(
          "dragstart",
          this.preventDefault
        ),
        i(window).on("load.slick.slick-" + this.instanceUid, this.setPosition),
        i(document).on(
          "ready.slick.slick-" + this.instanceUid,
          this.setPosition
        );
    }),
    (e.prototype.initUI = function () {
      !0 === this.options.arrows &&
        this.slideCount > this.options.slidesToShow &&
        (this.$prevArrow.show(), this.$nextArrow.show()),
        !0 === this.options.dots &&
          this.slideCount > this.options.slidesToShow &&
          this.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === this.options.accessibility
          ? this.changeSlide({
              data: { message: !0 === this.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === this.options.accessibility &&
            this.changeSlide({
              data: { message: !0 === this.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      var t,
        e,
        s,
        o,
        n = this;
      function r(t) {
        i("img[data-lazy]", t).each(function () {
          var t = i(this),
            e = i(this).attr("data-lazy"),
            s = document.createElement("img");
          (s.onload = function () {
            t.animate({ opacity: 0 }, 100, function () {
              t.attr("src", e).animate({ opacity: 1 }, 200, function () {
                t.removeAttr("data-lazy").removeClass("slick-loading");
              }),
                n.$slider.trigger("lazyLoaded", [n, t, e]);
            });
          }),
            (s.onerror = function () {
              t
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, t, e]);
            }),
            (s.src = e);
        });
      }
      !0 === n.options.centerMode
        ? !0 === n.options.infinite
          ? (o =
              (s = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
              n.options.slidesToShow +
              2)
          : ((s = Math.max(
              0,
              n.currentSlide - (n.options.slidesToShow / 2 + 1)
            )),
            (o = 2 + (n.options.slidesToShow / 2 + 1) + n.currentSlide))
        : ((o = Math.ceil(
            (s = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide) + n.options.slidesToShow
          )),
          !0 === n.options.fade && (s > 0 && s--, o <= n.slideCount && o++)),
        r((t = n.$slider.find(".slick-slide").slice(s, o))),
        n.slideCount <= n.options.slidesToShow
          ? r((e = n.$slider.find(".slick-slide")))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? r(
              (e = n.$slider
                .find(".slick-cloned")
                .slice(0, n.options.slidesToShow))
            )
          : 0 === n.currentSlide &&
            r(
              (e = n.$slider
                .find(".slick-cloned")
                .slice(-1 * n.options.slidesToShow))
            );
    }),
    (e.prototype.loadSlider = function () {
      this.setPosition(),
        this.$slideTrack.css({ opacity: 1 }),
        this.$slider.removeClass("slick-loading"),
        this.initUI(),
        "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      this.checkResponsive(), this.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (i) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, i]),
        (t.animating = !1),
        t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && t.initADA());
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (t) {
      t = t || 1;
      var e,
        s,
        o,
        n = this,
        r = i("img[data-lazy]", n.$slider);
      r.length
        ? ((s = (e = r.first()).attr("data-lazy")),
          ((o = document.createElement("img")).onload = function () {
            e
              .attr("src", s)
              .removeAttr("data-lazy")
              .removeClass("slick-loading"),
              !0 === n.options.adaptiveHeight && n.setPosition(),
              n.$slider.trigger("lazyLoaded", [n, e, s]),
              n.progressiveLazyLoad();
          }),
          (o.onerror = function () {
            t < 3
              ? setTimeout(function () {
                  n.progressiveLazyLoad(t + 1);
                }, 500)
              : (e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, s]),
                n.progressiveLazyLoad());
          }),
          (o.src = s))
        : n.$slider.trigger("allImagesLoaded", [n]);
    }),
    (e.prototype.refresh = function (t) {
      var e,
        s,
        o = this;
      (s = o.slideCount - o.options.slidesToShow),
        !o.options.infinite && o.currentSlide > s && (o.currentSlide = s),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        (e = o.currentSlide),
        o.destroy(!0),
        i.extend(o, o.initials, { currentSlide: e }),
        o.init(),
        t || o.changeSlide({ data: { message: "index", index: e } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var t,
        e,
        s,
        o = this,
        n = o.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        for (t in ((o.respondTo = o.options.respondTo || "window"), n))
          if (
            ((s = o.breakpoints.length - 1),
            (e = n[t].breakpoint),
            n.hasOwnProperty(t))
          ) {
            for (; s >= 0; )
              o.breakpoints[s] &&
                o.breakpoints[s] === e &&
                o.breakpoints.splice(s, 1),
                s--;
            o.breakpoints.push(e), (o.breakpointSettings[e] = n[t].settings);
          }
        o.breakpoints.sort(function (i, t) {
          return o.options.mobileFirst ? i - t : t - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var t = this;
      (t.$slides = t.$slideTrack
        .children(t.options.slide)
        .addClass("slick-slide")),
        (t.slideCount = t.$slides.length),
        t.currentSlide >= t.slideCount &&
          0 !== t.currentSlide &&
          (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        t.registerBreakpoints(),
        t.setProps(),
        t.setupInfinite(),
        t.buildArrows(),
        t.updateArrows(),
        t.initArrowEvents(),
        t.buildDots(),
        t.updateDots(),
        t.initDotEvents(),
        t.cleanUpSlideEvents(),
        t.initSlideEvents(),
        t.checkResponsive(!1, !0),
        !0 === t.options.focusOnSelect &&
          i(t.$slideTrack).children().on("click.slick", t.selectHandler),
        t.setSlideClasses(
          "number" == typeof t.currentSlide ? t.currentSlide : 0
        ),
        t.setPosition(),
        t.focusHandler(),
        (t.paused = !t.options.autoplay),
        t.autoPlay(),
        t.$slider.trigger("reInit", [t]);
    }),
    (e.prototype.resize = function () {
      var t = this;
      i(window).width() !== t.windowWidth &&
        (clearTimeout(t.windowDelay),
        (t.windowDelay = window.setTimeout(function () {
          (t.windowWidth = i(window).width()),
            t.checkResponsive(),
            t.unslicked || t.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, t, e) {
        var s = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (t = i)
                ? 0
                : s.slideCount - 1
              : !0 === t
              ? --i
              : i),
          s.slideCount < 1 || i < 0 || i > s.slideCount - 1)
        )
          return !1;
        s.unload(),
          !0 === e
            ? s.$slideTrack.children().remove()
            : s.$slideTrack.children(this.options.slide).eq(i).remove(),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var t,
        e,
        s = this,
        o = {};
      !0 === s.options.rtl && (i = -i),
        (t = "left" == s.positionProp ? Math.ceil(i) + "px" : "0px"),
        (e = "top" == s.positionProp ? Math.ceil(i) + "px" : "0px"),
        (o[s.positionProp] = i),
        !1 === s.transformsEnabled
          ? s.$slideTrack.css(o)
          : ((o = {}),
            !1 === s.cssTransitions
              ? ((o[s.animType] = "translate(" + t + ", " + e + ")"),
                s.$slideTrack.css(o))
              : ((o[s.animType] = "translate3d(" + t + ", " + e + ", 0px)"),
                s.$slideTrack.css(o)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var t = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - t);
    }),
    (e.prototype.setFade = function () {
      var t,
        e = this;
      e.$slides.each(function (s, o) {
        (t = -(e.slideWidth * s * 1)),
          !0 === e.options.rtl
            ? i(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: e.options.zIndex - 2,
                opacity: 0,
              })
            : i(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: e.options.zIndex - 2,
                opacity: 0,
              });
      }),
        e.$slides
          .eq(e.currentSlide)
          .css({ zIndex: e.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      if (
        1 === this.options.slidesToShow &&
        !0 === this.options.adaptiveHeight &&
        !1 === this.options.vertical
      ) {
        var i = this.$slides.eq(this.currentSlide).outerHeight(!0);
        this.$list.css("height", i);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var t,
          e,
          s,
          o,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((s = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((s = arguments[0]),
              (o = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[s] = o;
        else if ("multiple" === n)
          i.each(s, function (i, t) {
            r.options[i] = t;
          });
        else if ("responsive" === n)
          for (e in o)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [o[e]];
            else {
              for (t = r.options.responsive.length - 1; t >= 0; )
                r.options.responsive[t].breakpoint === o[e].breakpoint &&
                  r.options.responsive.splice(t, 1),
                  t--;
              r.options.responsive.push(o[e]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      this.setDimensions(),
        this.setHeight(),
        !1 === this.options.fade
          ? this.setCSS(this.getLeft(this.currentSlide))
          : this.setFade(),
        this.$slider.trigger("setPosition", [this]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        t = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 !== t.WebkitTransition ||
          void 0 !== t.MozTransition ||
          void 0 !== t.msTransition) &&
          !0 === i.options.useCSS &&
          (i.cssTransitions = !0),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== t.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === t.perspectiveProperty &&
            void 0 === t.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== t.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === t.perspectiveProperty &&
            void 0 === t.MozPerspective &&
            (i.animType = !1)),
        void 0 !== t.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === t.perspectiveProperty &&
            void 0 === t.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== t.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === t.msTransform && (i.animType = !1)),
        void 0 !== t.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var t, e, s, o;
      (e = this.$slider
        .find(".slick-slide")
        .removeClass("slick-active slick-center slick-current")
        .attr("aria-hidden", "true")),
        this.$slides.eq(i).addClass("slick-current"),
        !0 === this.options.centerMode
          ? ((t = Math.floor(this.options.slidesToShow / 2)),
            !0 === this.options.infinite &&
              (i >= t && i <= this.slideCount - 1 - t
                ? this.$slides
                    .slice(i - t, i + t + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((s = this.options.slidesToShow + i),
                  e
                    .slice(s - t + 1, s + t + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === i
                ? e
                    .eq(e.length - 1 - this.options.slidesToShow)
                    .addClass("slick-center")
                : i === this.slideCount - 1 &&
                  e.eq(this.options.slidesToShow).addClass("slick-center")),
            this.$slides.eq(i).addClass("slick-center"))
          : i >= 0 && i <= this.slideCount - this.options.slidesToShow
          ? this.$slides
              .slice(i, i + this.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : e.length <= this.options.slidesToShow
          ? e.addClass("slick-active").attr("aria-hidden", "false")
          : ((o = this.slideCount % this.options.slidesToShow),
            (s =
              !0 === this.options.infinite ? this.options.slidesToShow + i : i),
            this.options.slidesToShow == this.options.slidesToScroll &&
            this.slideCount - i < this.options.slidesToShow
              ? e
                  .slice(s - (this.options.slidesToShow - o), s + o)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : e
                  .slice(s, s + this.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
        "ondemand" === this.options.lazyLoad && this.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var t,
        e,
        s,
        o = this;
      if (
        (!0 === o.options.fade && (o.options.centerMode = !1),
        !0 === o.options.infinite &&
          !1 === o.options.fade &&
          ((e = null), o.slideCount > o.options.slidesToShow))
      ) {
        for (
          s =
            !0 === o.options.centerMode
              ? o.options.slidesToShow + 1
              : o.options.slidesToShow,
            t = o.slideCount;
          t > o.slideCount - s;
          t -= 1
        )
          (e = t - 1),
            i(o.$slides[e])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", e - o.slideCount)
              .prependTo(o.$slideTrack)
              .addClass("slick-cloned");
        for (t = 0; t < s; t += 1)
          (e = t),
            i(o.$slides[e])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", e + o.slideCount)
              .appendTo(o.$slideTrack)
              .addClass("slick-cloned");
        o.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var t = this;
      i || t.autoPlay(), (t.interrupted = i);
    }),
    (e.prototype.selectHandler = function (t) {
      var e = parseInt(
        (i(t.target).is(".slick-slide")
          ? i(t.target)
          : i(t.target).parents(".slick-slide")
        ).attr("data-slick-index")
      );
      if ((e || (e = 0), this.slideCount <= this.options.slidesToShow)) {
        this.setSlideClasses(e), this.asNavFor(e);
        return;
      }
      this.slideHandler(e);
    }),
    (e.prototype.slideHandler = function (i, t, e) {
      var s,
        o,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((t = t || !1),
        (!0 !== a.animating || !0 !== a.options.waitForAnimate) &&
          (!0 !== a.options.fade || a.currentSlide !== i) &&
          !(a.slideCount <= a.options.slidesToShow))
      ) {
        if (
          (!1 === t && a.asNavFor(i),
          (s = i),
          (d = a.getLeft(s)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          (!1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) ||
            (!1 === a.options.infinite &&
              !0 === a.options.centerMode &&
              (i < 0 || i > a.slideCount - a.options.slidesToScroll)))
        ) {
          !1 === a.options.fade &&
            ((s = a.currentSlide),
            !0 !== e
              ? a.animateSlide(r, function () {
                  a.postSlide(s);
                })
              : a.postSlide(s));
          return;
        }
        if (
          (a.options.autoplay && clearInterval(a.autoPlayTimer),
          (o =
            s < 0
              ? a.slideCount % a.options.slidesToScroll != 0
                ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                : a.slideCount + s
              : s >= a.slideCount
              ? a.slideCount % a.options.slidesToScroll != 0
                ? 0
                : s - a.slideCount
              : s),
          (a.animating = !0),
          a.$slider.trigger("beforeChange", [a, a.currentSlide, o]),
          (n = a.currentSlide),
          (a.currentSlide = o),
          a.setSlideClasses(a.currentSlide),
          a.options.asNavFor &&
            (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
              l.options.slidesToShow &&
            l.setSlideClasses(a.currentSlide),
          a.updateDots(),
          a.updateArrows(),
          !0 === a.options.fade)
        ) {
          !0 !== e
            ? (a.fadeSlideOut(n),
              a.fadeSlide(o, function () {
                a.postSlide(o);
              }))
            : a.postSlide(o),
            a.animateHeight();
          return;
        }
        !0 !== e
          ? a.animateSlide(d, function () {
              a.postSlide(o);
            })
          : a.postSlide(o);
      }
    }),
    (e.prototype.startLoad = function () {
      !0 === this.options.arrows &&
        this.slideCount > this.options.slidesToShow &&
        (this.$prevArrow.hide(), this.$nextArrow.hide()),
        !0 === this.options.dots &&
          this.slideCount > this.options.slidesToShow &&
          this.$dots.hide(),
        this.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i, t, e, s;
      return ((i = this.touchObject.startX - this.touchObject.curX),
      (s = Math.round(
        (180 *
          (e = Math.atan2(
            (t = this.touchObject.startY - this.touchObject.curY),
            i
          ))) /
          Math.PI
      )) < 0 && (s = 360 - Math.abs(s)),
      (s <= 45 && s >= 0) || (s <= 360 && s >= 315))
        ? !1 === this.options.rtl
          ? "left"
          : "right"
        : s >= 135 && s <= 225
        ? !1 === this.options.rtl
          ? "right"
          : "left"
        : !0 === this.options.verticalSwiping
        ? s >= 35 && s <= 135
          ? "down"
          : "up"
        : "vertical";
    }),
    (e.prototype.swipeEnd = function (i) {
      var t,
        e,
        s = this;
      if (
        ((s.dragging = !1),
        (s.interrupted = !1),
        (s.shouldClick = !(s.touchObject.swipeLength > 10)),
        void 0 === s.touchObject.curX)
      )
        return !1;
      if (
        (!0 === s.touchObject.edgeHit &&
          s.$slider.trigger("edge", [s, s.swipeDirection()]),
        s.touchObject.swipeLength >= s.touchObject.minSwipe)
      ) {
        switch ((e = s.swipeDirection())) {
          case "left":
          case "down":
            (t = s.options.swipeToSlide
              ? s.checkNavigable(s.currentSlide + s.getSlideCount())
              : s.currentSlide + s.getSlideCount()),
              (s.currentDirection = 0);
            break;
          case "right":
          case "up":
            (t = s.options.swipeToSlide
              ? s.checkNavigable(s.currentSlide - s.getSlideCount())
              : s.currentSlide - s.getSlideCount()),
              (s.currentDirection = 1);
        }
        "vertical" != e &&
          (s.slideHandler(t),
          (s.touchObject = {}),
          s.$slider.trigger("swipe", [s, e]));
      } else
        s.touchObject.startX !== s.touchObject.curX &&
          (s.slideHandler(s.currentSlide), (s.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var t = this;
      if (
        !1 !== t.options.swipe &&
        (!("ontouchend" in document) || !1 !== t.options.swipe)
      ) {
        if (!1 !== t.options.draggable || -1 === i.type.indexOf("mouse"))
          switch (
            ((t.touchObject.fingerCount =
              i.originalEvent && void 0 !== i.originalEvent.touches
                ? i.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            i.data.action)
          ) {
            case "start":
              t.swipeStart(i);
              break;
            case "move":
              t.swipeMove(i);
              break;
            case "end":
              t.swipeEnd(i);
          }
      }
    }),
    (e.prototype.swipeMove = function (i) {
      var t,
        e,
        s,
        o,
        n,
        r = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !!r.dragging &&
          (!n || 1 === n.length) &&
          (((t = r.getLeft(r.currentSlide)),
          (r.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (r.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (r.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))
          )),
          !0 === r.options.verticalSwiping &&
            (r.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2))
            )),
          "vertical" === (e = r.swipeDirection()))
            ? void 0
            : (void 0 !== i.originalEvent &&
                r.touchObject.swipeLength > 4 &&
                i.preventDefault(),
              (o =
                (!1 === r.options.rtl ? 1 : -1) *
                (r.touchObject.curX > r.touchObject.startX ? 1 : -1)),
              !0 === r.options.verticalSwiping &&
                (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1),
              (s = r.touchObject.swipeLength),
              (r.touchObject.edgeHit = !1),
              !1 === r.options.infinite &&
                ((0 === r.currentSlide && "right" === e) ||
                  (r.currentSlide >= r.getDotCount() && "left" === e)) &&
                ((s = r.touchObject.swipeLength * r.options.edgeFriction),
                (r.touchObject.edgeHit = !0)),
              !1 === r.options.vertical
                ? (r.swipeLeft = t + s * o)
                : (r.swipeLeft = t + s * (r.$list.height() / r.listWidth) * o),
              !0 === r.options.verticalSwiping && (r.swipeLeft = t + s * o),
              !0 !== r.options.fade &&
                !1 !== r.options.touchMove &&
                (!0 === r.animating
                  ? ((r.swipeLeft = null), !1)
                  : void r.setCSS(r.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var t,
        e = this;
      if (
        ((e.interrupted = !0),
        1 !== e.touchObject.fingerCount ||
          e.slideCount <= e.options.slidesToShow)
      )
        return (e.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (t = i.originalEvent.touches[0]),
        (e.touchObject.startX = e.touchObject.curX =
          void 0 !== t ? t.pageX : i.clientX),
        (e.touchObject.startY = e.touchObject.curY =
          void 0 !== t ? t.pageY : i.clientY),
        (e.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        null !== this.$slidesCache &&
          (this.unload(),
          this.$slideTrack.children(this.options.slide).detach(),
          this.$slidesCache.appendTo(this.$slideTrack),
          this.reinit());
      }),
    (e.prototype.unload = function () {
      i(".slick-cloned", this.$slider).remove(),
        this.$dots && this.$dots.remove(),
        this.$prevArrow &&
          this.htmlExpr.test(this.options.prevArrow) &&
          this.$prevArrow.remove(),
        this.$nextArrow &&
          this.htmlExpr.test(this.options.nextArrow) &&
          this.$nextArrow.remove(),
        this.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      this.$slider.trigger("unslick", [this, i]), this.destroy();
    }),
    (e.prototype.updateArrows = function () {}),
    (e.prototype.updateDots = function () {}),
    (e.prototype.visibility = function () {}),
    (i.fn.slick = function () {
      var i,
        t,
        s = this,
        o = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = s.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof o || void 0 === o
            ? (s[i].slick = new e(s[i], o))
            : (t = s[i].slick[o].apply(s[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return s;
    });
});
