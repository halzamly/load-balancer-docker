
! function($) {
    var t, e = [].slice;
    t = "undefined" != typeof exports && null !== exports ? exports : this, t.on_page_load = function(t) {
        return $(function() {
            return t()
        }), $(document).on("page:load", t)
    }, t.debounce = function(t, n, r) {
        var i;
        return i = null,
            function() {
                var o, s, a;
                return o = 1 <= arguments.length ? e.call(arguments, 0) : [], a = this, s = function() {
                    return r || t.apply(a, o), i = null
                }, i ? clearTimeout(i) : r && t.apply(a, o), i = setTimeout(s, n || 100)
            }
    }, t.once = function(t) {
        return function(e) {
            return function() {
                return e ? void 0 : (e = !0, t.apply(this, arguments))
            }
        }(!1)
    }, $.fn.maxHeight = function() {
        return Math.max.apply(this, $.map(this, function(t) {
            return $(t).height()
        }))
    }
}.call(this, jQuery),

function($) {
    var t, e;
    e = "undefined" != typeof exports && null !== exports ? exports : this, t = {
        elements: {
            selectors: ["img"]
        }
    }, $(document).on("page:fetch page:change", function() {
        return Pace.restart()
    }), e.on_page_load(function() {
        return $(document.body).hasClass("articles-show") ? ($("pre code").each(function() {
            return hljs.highlightBlock(this)
        }), "undefined" != typeof DISQUS && null !== DISQUS ? DISQUS.reset({
            reload: !0,
            config: function() {
                return this.page.url = window.location, this.page.language = "en"
            }
        }) : void 0) : void 0
    }), $(document).on("click", ".nav-toggle", function(t) {
        return $("#primary-nav").toggle(), t.preventDefault() && !1
    }), $(document).on("page:fetch page:change", function() {
        return $("#search-link").removeAttr("href"), $("#search-link").click(function() {
            return $("#search-container").toggleClass("icon-search-hidden"), $("#search-container").toggleClass("icon-search-visible"), $("#nav-search-text-box").focus()
        })
    })
}.call(this, jQuery),

function($) {

  $.fn.rollover = function(opt) {
    if (opt == 'disable') {
      this.addClass('disable-rollover');
      return;
    }
    if (this.hasClass('disable-rollover')) {
      this.removeClass('disable-rollover');
      return;
    }
    this.each(function() {
      var self = $(this),
        cover = self.find('.article-cover'),
        rider = self.find('.rider'),
        content = self.find('.content'),
        self_height = self.height(),
        cover_height = cover.outerHeight(), 
        content_height = content.outerHeight(),
        rider_height = rider.outerHeight();

        rider.css('transform', 'translate(0, -' + (rider_height + rider.next().outerHeight()) + 'px)');
        content.css('transform', 'translate(0, -' + (rider_height - self_height + cover_height + content_height) + 'px)');
        cover.css('transform', 'translate(0, -' + ((cover_height - self_height + content_height + rider_height) / 2) + 'px)');
    });
  }
}.call(this, jQuery),

function($) {

  var Sticky = function(element) {
    this.element = element;
    this.$window = $(window);
    this.container = this.element.closest('.container');
    this.placeholder = this.element.parent();
    this.state = 'enabled';

    this.placeholder.data('oldStyle', this.placeholder.attr('style') || '')
    this.element.data('oldStyle', this.element.attr('style') || '')

    var sticky = this;

    this.waypoints = this._create_waypoints([{
      element: this.element[0],
      handler: function(direction) {
        //console.log(direction, '(' + this.key + ' at ' + this.triggerPoint + ')')
        if (direction == 'up' && sticky.element.hasClass('off')) {
          sticky._stick_to_top();
          //console.log('\tstick to top')
        } else {
          //console.log('\tnothing')
        }
      },
      offset: 20
    }, {
      element: this.element[0],
      handler: function(direction) {
        //console.log(direction, '(' + this.key + ' at ' + this.triggerPoint + ')')
        var newLimitPoint = parseInt(this.triggerPoint);
        if (direction == 'down' && (newLimitPoint < sticky.bottomLimitPoint || typeof sticky.bottomLimitPoint == 'undefined')) {
          sticky._stick_to_bottom();
          //console.log('\tstick to bottom')
        } else {
          //console.log('\tnothing')
        }
      },
      offset: 'bottom-in-view'
    }, {
      element: this.container[0],
      handler: function(direction) {
        //console.log(direction, '(' + this.key + ' at ' + this.triggerPoint + ')')
        if (direction == 'down' && sticky.element.height() <= sticky.$window.height()) {
          sticky._stick_to_top();
          //console.log('\tstick to top')
        } else {
          sticky._stick_on();
          //console.log('\tback to origin')
        }
      },
      offset: 20
    }, {
      element: this.container[0],
      handler: function(direction) {
        //console.log(direction, '(' + this.key + ' at ' + this.triggerPoint + ')')
        var newLimitPoint = parseInt(this.triggerPoint);
        if (direction == 'down') {
          sticky._stick_off();
          //console.log('\toff sticky on bottom')
        } else if (sticky.element.hasClass('off') && newLimitPoint > sticky.bottomLimitPoint) {
          sticky._stick_to_bottom();
          //console.log('\tstick to bottom')
        } else {
          //console.log('\tnothing')
        }
        sticky.bottomLimitPoint = parseInt(this.triggerPoint);
      },
      offset: 'bottom-in-view'
    }]);

    this.context = Waypoint.Context.findByElement(window);

    this.context.changeDirection = function(direction) {
      //console.log('change direction ' + direction)

      if ((direction == 'up' && sticky.element.hasClass('bottom')) || (direction == 'down' && sticky.element.hasClass('top'))) {
        sticky._stick_off();
        sticky.refresh();
      }
      if (sticky.element.hasClass('off')) {
        sticky.refresh();
      }

    }

    this.$window.on('resize', function() {
      sticky.resize();
    });
  }
  $.extend(Sticky.prototype, {

    _create_waypoints: function(configs) {
      waypoints = [];
      for (var i = 0, l = configs.length; i < l; i++) {
        waypoints.push(new Waypoint(configs[i]))
      }
      return waypoints;
    },
    _iterate_waypoints: function(method) {
      
      for (var i = 0, l = this.waypoints.length; i < l; i++) {
        if (typeof filter == 'undefined' || filter.apply(this.waypoints[i])) {
          if (typeof method == 'string') {
            this.waypoints[i][method]();
          } else if (typeof method == 'function') {
            method.apply(this.waypoints[i]);
          }
        }
      }
    },
    _stick_to_top: function() {
      this._stick_on();
      this.element.addClass('on top').removeClass('bottom');
    },
    _stick_to_bottom: function() {
      this._stick_on();
      if (this.element.height() > this.$window.height()) {
        this.element.addClass('on bottom').removeClass('top');
      }
    },
    _stick_on: function() {
      this.element.removeClass('off on bottom').css('margin-top', 0);
    },
    _stick_off: function() {
      var margin,
        element_height = this.element.height()
        container_height = this.container.height();

        margin = this.element.offset().top - this.placeholder.offset().top;
        margin += this.element.hasClass('bottom') ? parseInt(this.element.css('bottom')) : 0;
        margin = element_height + margin > container_height ? container_height - element_height : margin;
        this.element.css('margin-top', margin).addClass('off');
    },
    enable: function() {
      var self = this;
      requestAnimationFrame(function() {
        self.placeholder.height(self.placeholder.height());
        self.element.width(self.element.parent().width());
        if (self.state == 'enabled') return;
        self._iterate_waypoints('enable');
        self.state = 'enabled';
      });
    },
    disable: function() {
      var self = this;
      requestAnimationFrame(function() {
        self.placeholder.attr('style', self.placeholder.data('oldStyle'));
        self.element.attr('style', self.element.data('oldStyle'));
        if (self.state == 'disabled') return;
        self._iterate_waypoints('disable');
        self.state = 'disabled';
      });
    },
    resize: function() {
      var self = this;
      requestAnimationFrame(function() {
        if (self.state == 'disabled') return;
        self.placeholder.attr('style', self.placeholder.data('oldStyle')).height(self.placeholder.height());
        self.element.attr('style', self.element.data('oldStyle')).width(self.element.parent().width());
        self.refresh();
      });
    },
    refresh: function() {
      //console.log('\trefresh waypoints:')
      this.context.refresh();
      this._iterate_waypoints(function() {
        //console.log('\t\t' + this.key + ': ' + this.triggerPoint);
      });
    }
  });

  $.fn.sticky = function (method) {
    return this.each(function () {
      var self = $(this),
        sticky = self.data('sticky');

      if (!sticky) {
        self.data('sticky', (sticky = new Sticky(self)));
      }
      if (typeof method == 'string') {
        sticky[method]();
      } else {
        sticky.enable();
      }
    });
  }
  $.fn.sticky.Constructor = Sticky;
      
}.call(this, jQuery),

function($) {

  // Search field 
  var search = $('#search-container');
  $(document).on('click', '.search-link', function(e) {
    e.preventDefault();
    search.toggleClass('icon-search-hidden');
  });

  // Add rollover to posts on desktop or larger
  var posts = $('.article-card'),
    sidebar =$('.sidebar .sticky'),
    state;
  enquire.register('screen and (min-width: 961px)', {
    // Triggered when the media query matches.
    match : function() {
      posts.rollover();
      sidebar.sticky('enable');
      state = 'matched';
    },
    // Triggered when the media query transitions 
    // *from matched state to unmatched state*.
    unmatch : function() {
      posts.rollover('disable');
      sidebar.sticky('disable');
      state = '';
    }
  });
  
  $(document).on('__DOMContentLoaded', '.articles-list[class*="pbd-alp-placeholder"]', function() {
    if (state == 'matched') {
      $(this).find('.article-card').rollover();
      sidebar.sticky('refresh');
    }
  });

}.call(this, jQuery);