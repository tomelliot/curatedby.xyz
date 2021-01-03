// 2D physics library from https://github.com/schteppe/p2.js/issues

! function o(a, s, c) {
  function u(e, t) {
    if (!s[e]) {
      if (!a[e]) {
        var n = "function" == typeof require && require;
        if (!t && n) return n(e, !0);
        if (l) return l(e, !0);
        var r = new Error("Cannot find module '" + e + "'");
        throw r.code = "MODULE_NOT_FOUND", r
      }
      var i = s[e] = {
        exports: {}
      };
      a[e][0].call(i.exports, function(t) {
        return u(a[e][1][t] || t)
      }, i, i.exports, o, a, s, c)
    }
    return s[e].exports
  }
  for (var l = "function" == typeof require && require, t = 0; t < c.length; t++) u(c[t]);
  return u
}({
  1: [function(t, e, n) {
    "use strict";

    function a(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    var c = t("gl-vec2"),
      s = t("../utils/vec2").elementSize,
      u = t("../utils/box"),
      l = t("../utils/intersectionObserver");
    e.exports = function(t) {
      return t(".dots", function(t) {
        var e = a(t.querySelectorAll(".dots__dot"));
        if (e.length) {
          var n = e.map(function(t) {
              return c.fromValues(Number(t.dataset.lng), Number(t.dataset.lat))
            }),
            i = c.create(),
            o = c.create(),
            r = function() {
              s(i, e[0]), s(o, t);
              var r = function(t, e, n) {
                for (var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 3, i = u.create(), o = c.create(), a = u.create(), s = (c.create(), 0); s < r && (u.setFromPoints(i, t), u.size(o, i), u.contain(a, n, o), t.forEach(function(t) {
                    return u.map(t, t, i, a)
                  }), !t.every(function(t) {
                    return u.contains(a, t)
                  })); s++);
                return t
              }(n, i[0] / 2 + 2, o);
              e.forEach(function(t, e) {
                var n = r[e];
                t.style.left = n[0] + "px", t.style.top = o[1] - n[1] + "px"
              })
            };
          return l.once(t, function() {
              r(), e.forEach(function(t, e) {
                t.style.opacity = 1
              }), window.addEventListener("resize", r)
            }),
            function() {
              return window.removeEventListener("resize", r)
            }
        }
      })
    }
  }, {
    "../utils/box": 23,
    "../utils/intersectionObserver": 25,
    "../utils/vec2": 33,
    "gl-vec2": 148
  }],
  2: [function(t, e, n) {
    "use strict";
    var r = t("../utils/dragScroll");
    e.exports = function(t) {
      return t(".drag", function(t) {
        return r(t, {
          draggingClass: "dragging"
        })
      })
    }
  }, {
    "../utils/dragScroll": 24
  }],
  3: [function(t, e, n) {
    "use strict";
    var r = t("lodash/debounce"),
      i = t("../utils/resizeObserver"),
      o = i.observe,
      a = i.unobserve;
    e.exports = function(t) {
      return t("img[srcset], img[data-srcset]", function(e) {
        var n = function(t) {
          return e.setAttribute("sizes", t + "px")
        };
        n(e.getBoundingClientRect().width);
        var t = r(function(t) {
          return n(t.contentRect.width)
        }, 100);
        return o(e, t),
          function() {
            return a(e, t)
          }
      })
    }
  }, {
    "../utils/resizeObserver": 31,
    "lodash/debounce": 197
  }],
  4: [function(t, e, n) {
    "use strict";

    function a(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    var r = t("es6-weak-map"),
      i = [t("./dots"), t("./thumbnail"), t("./img"), t("./lazy"), t("./masonry"), t("./shader"), t("./signup"), t("./nav-compact"), t("./spot"), t("./dragging"), t("./infiniteScroll"), t("./search"), t("./nearby"), t("./sticky-center")],
      s = new r,
      o = function(t) {
        s.has(t) && (s.get(t).forEach(function(t) {
          return t()
        }), s.delete(t))
      },
      c = function(t) {
        return [t].concat(a(t.querySelectorAll("*"))).forEach(o)
      };
    e.exports = function o(n) {
      var e = function(t, i) {
        var e = a(n.querySelectorAll(t));
        n.matches(t) && e.unshift(n), e.forEach(function(t) {
          var e, n, r = i(t, o, c);
          "function" == typeof r && (e = t, n = r, s.has(e) ? s.set(e, [].concat(a(s.get(e)), [n])) : s.set(e, [n]))
        })
      };
      i.forEach(function(t) {
        return t(e)
      })
    }
  }, {
    "./dots": 1,
    "./dragging": 2,
    "./img": 3,
    "./infiniteScroll": 5,
    "./lazy": 6,
    "./masonry": 7,
    "./nav-compact": 8,
    "./nearby": 9,
    "./search": 10,
    "./shader": 11,
    "./signup": 12,
    "./spot": 13,
    "./sticky-center": 14,
    "./thumbnail": 15,
    "es6-weak-map": 107
  }],
  5: [function(t, e, n) {
    "use strict";

    function c(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    var u = t("../utils/intersectionObserver"),
      l = new DOMParser;
    e.exports = function(t) {
      return t("[data-load-more]", function(r, i) {
        var o = r.dataset.loadMore;
        if (o) {
          var a = document.querySelector(".footer");
          a.style.display = "none";
          var t, e = function() {
              return fetch(o).then(function(t) {
                return t.text()
              }).then(function(t) {
                var e = l.parseFromString(t, "text/html").querySelector("[data-load-more]"),
                  n = c(e.children);
                n.length && (n.forEach(function(t) {
                  r.appendChild(t), i(t)
                }), (o = e.dataset.loadMore) ? s() : a.style.display = "")
              })
            },
            s = function() {
              u.once(r.lastElementChild, e), t = function() {
                return u.unobserve(r.lastElementChild, e)
              }
            };
          return s(),
            function() {
              return t && t()
            }
        }
      })
    }
  }, {
    "../utils/intersectionObserver": 25
  }],
  6: [function(t, e, n) {
    "use strict";

    function o(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    var a = t("../utils/intersectionObserver"),
      s = t("../utils/loadImage");
    e.exports = function(t) {
      return t(".lazy", function(t) {
        var e = "IMG" === t.nodeName ? [t] : o(t.querySelectorAll("img")),
          n = function(t) {
            return s(t).then(function(t) {
              return t.classList.add("lazy-loaded")
            })
          },
          r = function() {
            t.dispatchEvent(new window.Event("lazy-loaded")), t.dataset.loadedClass && t.classList.add(t.dataset.loadedClass)
          },
          i = function() {
            return Promise.all(e.map(n)).then(r)
          };
        return a.once(t, i),
          function() {
            return a.unobserve(t, i)
          }
      })
    }
  }, {
    "../utils/intersectionObserver": 25,
    "../utils/loadImage": 26
  }],
  7: [function(t, e, n) {
    "use strict";
    var i = t("masonry-layout");
    e.exports = function(t) {
      return t(".masonry", function(t) {
        var e = null,
          n = function() {
            null !== e && (e.destroy(), e = null)
          },
          r = function() {
            return window.innerWidth < 768 ? n() : void(null === e && (e = new i(t, {
              columnWidth: ".masonry__sizer",
              itemSelector: ".masonry__item",
              transitionDuration: 0
            })))
          };
        return window.addEventListener("resize", r), r(), t.style.visibility = "visible", n
      })
    }
  }, {
    "masonry-layout": 203
  }],
  8: [function(t, e, n) {
    "use strict";

    function r(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    e.exports = function(t) {
      return t(".nav-compact", function(t) {
        var e = t.querySelector(".nav-compact__menu");
        r(t.querySelectorAll(".toggle-menu")).forEach(function(t) {
          t.addEventListener("click", function() {
            e.classList.toggle("nav-compact__menu--open")
          })
        })
      })
    }
  }, {}],
  9: [function(t, e, n) {
    "use strict";
    var o = t("js-cookie");
    e.exports = function(t) {
      return t(".nearby", function(t) {
        t.addEventListener("click", function() {
          t.classList.add("nearby--busy"), new Promise(function(i, n) {
            window.navigator.geolocation.getCurrentPosition(function(t) {
              var e = t.coords,
                n = e.latitude,
                r = e.longitude;
              o.set("location", {
                latitude: n,
                longitude: r
              }, {
                expires: 1 / 24 / 2
              }), i({
                latitude: n,
                longitude: r
              })
            }, function(t) {
              var e = o.getJSON("location");
              e ? i(e) : n(t)
            }, {
              timeout: 1e4
            })
          }).then(function(t) {
            var e = t.latitude,
              n = t.longitude;
            window.location.search = "near=".concat(e, ",").concat(n)
          }).catch(function() {
            t.classList.remove("nearby--busy"), t.classList.add("nearby--error")
          })
        })
      })
    }
  }, {
    "js-cookie": 190
  }],
  10: [function(t, e, n) {
    "use strict";

    function l(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    var h = t("lodash/debounce"),
      f = new DOMParser;
    e.exports = function(t) {
      return t("body", function(e, i, o) {
        var n = e.querySelector(".search"),
          r = !1;
        l(e.querySelectorAll(".toggle-search")).forEach(function(t) {
          t.addEventListener("click", function(t) {
            t.preventDefault(), r = r ? (n.classList.remove("search--open"), a.blur(), e.classList.remove("noscroll"), !1) : (n.classList.add("search--open"), e.classList.add("noscroll"), a.focus(), !0)
          })
        });
        var a = n.querySelector("input"),
          s = n.querySelector(".search__results"),
          c = "",
          u = !1,
          t = h(function n() {
            console.log("searching ", c);
            var r = c;
            if (!u) return u = !0, fetch("/search/".concat(c)).then(function(t) {
              return t.text()
            }).then(function(t) {
              return f.parseFromString(t, "text/html")
            }).then(function(t) {
              if (u = !1, c !== r) return n();
              var e = t.querySelector(".search__results");
              o(s), s.parentElement.replaceChild(e, s), i(e), s = e
            })
          }, 200);
        a.addEventListener("input", function() {
          c = a.value, t()
        })
      })
    }
  }, {
    "lodash/debounce": 197
  }],
  11: [function(_, t, e) {
    "use strict";

    function E(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    var A = _("gl-vec2"),
      w = _("tinycolor2"),
      x = _("../utils/box"),
      T = _("gl-texture2d"),
      S = _("../gl/renderer"),
      R = _("lodash/debounce"),
      I = _("../utils/intersectionObserver"),
      L = _("../utils/resizeObserver"),
      M = _("../utils/tween"),
      B = _("glslify")(["precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform vec2 center;\nuniform vec2 boundsMin;\nuniform vec2 boundsMax;\nuniform vec3 tint;\nuniform float time;\nuniform vec2 texSize;\nuniform float frequency;\nuniform float transition;\n\nconst float width = 1.;\nconst float power = 4.;\nconst float spread = .1;\n\nconst float PI = 3.14159265359;\n\nfloat luminance ( vec3 color ) {\n    return dot( color, vec3( 0.299, 0.587, 0.114 ) );\n}\n\nvec3 ripple ( vec3 t, vec3 width ) {\n    vec3 ft = fract( t );\n    return\n        smoothstep( vec3( 0. ), width / 2., ft ) *\n        smoothstep( width, width / 2., ft );\n}\n\nmat3 rotationMatrix( vec3 axis, float angle ) {\n    float s = sin( angle );\n    float c = cos( angle );\n    float oc = 1.0 - c;\n    vec3 as = axis * s;\n    mat3 p = mat3( axis.x * axis, axis.y * axis, axis.z * axis );\n    mat3 q = mat3( c, -as.z, as.y, as.z, c, -as.x, -as.y, as.x, c );\n    return p * oc + q;\n}\nvec3 mixRotate ( vec3 a, vec3 b, vec3 perp, float t ) {\n    vec3 origin = a + ( b - a ) * .5;\n    vec3 a0 = a - origin;\n    vec3 b0 = b - origin;\n    vec3 axis = cross( normalize( a0 ), normalize( perp ) );\n    float angle = t * PI;\n    return abs( origin + rotationMatrix( axis, angle ) * a0 );\n}\n\nvec2 cover ( vec2 p, vec2 dest, vec2 src ) {\n    float scale = max( dest.x / src.x, dest.y / src.y );\n    vec2 scaledSize = src * scale;\n    vec2 coord = p / scaledSize;\n    vec2 margin = ( dest - scaledSize ) / 2.;\n    return coord - margin / scaledSize;\n}\n\nvoid main () {\n    \n    vec2 size = boundsMax - boundsMin;\n    vec2 centerLocal = center - boundsMin;\n    centerLocal.y = size.y - centerLocal.y;\n    float mouseDist = length( gl_FragCoord.xy - centerLocal );\n    \n    vec2 texCoord = cover( gl_FragCoord.xy, size, texSize );\n    // vec2 texCoord = gl_FragCoord.xy / size;\n    texCoord.y = 1. - texCoord.y;\n    \n    vec3 tex0 = texture2D( texture0, texCoord ).rgb;\n    vec3 tex1 = texture2D( texture1, texCoord ).rgb;\n    \n    vec3 c0 = mix( vec3(0.), tint, luminance( tex0 ) );\n    vec3 c1 = tint;\n    \n    vec3 rgbSpread = vec3( spread, spread * 2., spread * 3. );\n    vec3 t =\n        tex1\n        + -time\n        + mouseDist * .01 * frequency\n        + rgbSpread;\n    vec3 fac = pow( ripple( t, vec3( 1. ) ), vec3( power ) );\n    \n    vec3 color = mixRotate( c0, c1, tex0, mix( fac.x, 1., transition ) );\n\n    gl_FragColor = vec4( color, 1. );\n    \n}"]),
      C = function(e) {
        return new Promise(function(t) {
          e.srcset && e.complete ? t(e) : e.addEventListener("load", function() {
            return t(e)
          })
        })
      },
      P = {
        data: new Float32Array([1]),
        shape: [1, 1],
        stride: [1, 1]
      };
    t.exports = function(t) {
      return t(".shader", function(e) {
        var t, n, r, i, o, a = _("../gl/position"),
          s = JSON.parse(e.dataset.shaderOptions || "{}");
        s.tint && (s.tint = (t = s.tint, n = w(t).toRgb(), r = n.r, i = n.g, o = n.b, new Float32Array([r / 255, i / 255, o / 255])));
        var c = document.createElement("canvas");
        c.classList.add("cover");
        var u = c.getContext("webgl"),
          l = S(u, B),
          h = l.uniforms,
          f = l.draw,
          p = E(e.querySelectorAll("img")),
          d = p.map(function(t) {
            return T(u, P)
          });
        Promise.all(p.map(C)).then(function(t) {
          d = t.map(function(t) {
            var e = T(u, t);
            return e.magFilter = e.minFilter = u.LINEAR, e
          }), h.texSize = A.fromValues(t[0].naturalWidth, t[0].naturalHeight), e.appendChild(c), M(1, 0, 1e3, function(t) {
            return h.transition = t
          })
        });
        var g = x.create(),
          v = function() {
            x.setFromElement(g, c), x.scale(g, g, window.devicePixelRatio);
            var t = A.fromValues(window.pageXOffset * window.devicePixelRatio, window.pageYOffset * window.devicePixelRatio);
            x.translate(g, g, t), c.width = g.max[0] - g.min[0], c.height = g.max[1] - g.min[1], u.viewport(0, 0, c.width, c.height)
          };
        h.tint = s.tint, h.transition = 1;
        var m = null;
        v();
        var y = R(v, 100);
        L.observe(c, y);
        var b = function(t) {
          t.isIntersecting && null === m ? function t() {
            h.center = A.scale(h.center, a, window.devicePixelRatio), h.boundsMin = g.min, h.boundsMax = g.max, h.time = Date.now() % 8e3 / 8e3, d.forEach(function(t, e) {
              h["texture".concat(e)] = t.bind(e)
            }), h.frequency = .1 / window.devicePixelRatio, f(), m = requestAnimationFrame(t)
          }() : t.isIntersecting || null === m || (window.cancelAnimationFrame(m), m = null)
        };
        return I.observe(c, b),
          function() {
            window.cancelAnimationFrame(m), L.unobserve(c, y), I.unobserve(c, b), d.forEach(function(t) {
              return t.dispose()
            })
          }
      })
    }
  }, {
    "../gl/position": 16,
    "../gl/renderer": 17,
    "../utils/box": 23,
    "../utils/intersectionObserver": 25,
    "../utils/resizeObserver": 31,
    "../utils/tween": 32,
    "gl-texture2d": 126,
    "gl-vec2": 148,
    glslify: 184,
    "lodash/debounce": 197,
    tinycolor2: 274
  }],
  12: [function(t, e, n) {
    "use strict";

    function r(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    e.exports = function(t) {
      return t(".footer", function(t) {
        var e = t.querySelector("#signup");
        r(t.querySelectorAll("#signup-button, #signup-close")).forEach(function(t) {
          t.addEventListener("click", function() {
            console.log("test"), e.classList.toggle("signup--open")
          })
        })
      })
    }
  }, {}],
  13: [function(t, e, n) {
    "use strict";

    function u(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    var l = t("../utils/dragScroll");
    e.exports = function(t) {
      return t(".spot", function(e) {
        var a = function(t) {
            return e.querySelector(t)
          },
          t = function(t) {
            return u(e.querySelectorAll(t))
          },
          s = t(".spot__slider img").map(function(t) {
            return Number(t.dataset.ratio)
          }),
          n = function() {
            var t = a(".spot__slider").clientWidth,
              e = a(".spot__thumbnail").clientWidth,
              n = t - 20,
              r = Math.floor(Math.max.apply(Math, u(s.map(function(t) {
                return n * t
              })))),
              i = Math.floor(Math.min(r, .8 * window.innerHeight)),
              o = Math.floor(Math.min(i, e * s[0]));
            return {
              expandedWidth: t,
              collapsedWidth: e,
              maxImageWidth: n,
              maxImageHeight: r,
              expandedHeight: i,
              collapsedHeight: o
            }
          },
          r = !1,
          i = n(),
          o = function() {
            // e.classList.toggle("spot--expanded", r), a(".spot__images").style.height = (r ? i.expandedHeight : i.collapsedHeight) + "px", a(".spot__slider").style.height = i.expandedHeight + "px", t(".spot__slider img").forEach(function(t, e) {
            //   var n = s[e],
            //     r = Math.min(i.maxImageWidth, i.expandedHeight / n);
            //   t.style.width = "".concat(r, "px"), t.style.height = "".concat(r * n, "px")
            // })
            // console.log("changing spot__images height")
          },
          c = function() {
            r = !r, o()
          };
// LISTENER FOR SCROLLING SPOTS
        // a(".spot__thumbnail img").addEventListener("click", c), l(a(".spot__slider-scroll"), {
        a(".spot__text").addEventListener("click", c), l(a(".spot__slider-scroll"), {
          draggingClass: "spot__slider-scroll--dragging",
          onClick: c
        }), window.addEventListener("resize", function() {
          i = n(), o()
        }), o()
      })
    }
  }, {
    "../utils/dragScroll": 24
  }],
  14: [function(t, e, n) {
    "use strict";
    var r = t("../utils/resizeObserver");
    e.exports = function(t) {
      return t(".sticky-center", function(e) {
        return r.observe(e, function(t) {
            e.style.top = (window.innerHeight - t.contentRect.height) / 2 + "px"
          }),
          function() {
            return r.unobserve(e)
          }
      })
    }
  }, {
    "../utils/resizeObserver": 31
  }],
  15: [function(t, e, n) {
    "use strict";
    t("intersection-observer");
    var i, o = t("../utils/observer");
    e.exports = function(t) {
      return t(".thumbnail--hero", function(t) {
        i || (i = o(IntersectionObserver, {
          threshold: 0
        }));
        var e = t.querySelector(".thumbnail__text"),
          n = t.querySelector(".thumbnail__sticky-text"),
          r = function(t) {
            var e = !t.isIntersecting && 0 < t.boundingClientRect.top;
            n.classList.toggle("thumbnail__sticky-text--stuck", e)
          };
        return i.observe(e, r),
          function() {
            return i.unobserve(e, r)
          }
      })
    }
  }, {
    "../utils/observer": 30,
    "intersection-observer": 187
  }],
  16: [function(t, e, n) {
    "use strict";
    var i = t("gl-vec2"),
      o = new(t("gyronorm/dist/gyronorm.complete")),
      a = i.create();
    o.init().then(function() {
      var e = i.fromValues(window.innerWidth / 2, window.innerHeight / 2),
        n = i.create(),
        r = i.create();
      o.start(function(t) {
        i.set(r, -.1 * t.dm.beta, -.1 * t.dm.alpha)
      }), window.addEventListener("resize", function() {
        i.set(e, window.innerWidth / 2, window.innerHeight / 2)
      });
      ! function t() {
        i.add(n, n, r), i.add(a, e, n), i.scale(n, n, .994), requestAnimationFrame(t)
      }()
    }).catch(function() {
      var e = i.create(),
        n = i.create(),
        r = i.create();
      window.addEventListener("mousemove", function(t) {
        i.set(e, t.clientX, t.clientY)
      }), window.addEventListener("scroll", function(t) {
        i.set(n, window.pageXOffset, window.pageYOffset)
      });
      ! function t() {
        i.add(r, e, n), i.lerp(a, a, r, .05), requestAnimationFrame(t)
      }()
    }), e.exports = a
  }, {
    "gl-vec2": 148,
    "gyronorm/dist/gyronorm.complete": 185
  }],
  17: [function(t, e, n) {
    "use strict";
    var o = t("gl-shader"),
      a = t("gl-buffer"),
      s = t("gl-vao");
    e.exports = function(t, e) {
      var n = o(t, "\n    precision highp float;\n    attribute vec2 position;\n    void main () {\n        gl_Position = vec4( position, 0., 1. );\n    }\n", e),
        r = a(t, new Float32Array([-1, -1, -1, 3, 3, -1])),
        i = s(t, [{
          buffer: r,
          type: t.FLOAT,
          size: 2
        }]);
      return t.enable(t.BLEND), t.disable(t.DEPTH_TEST), n.bind(), i.bind(), {
        uniforms: n.uniforms,
        draw: function() {
          t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT | t.STENCIL_BUFFER_BIT), t.drawArrays(t.TRIANGLES, 0, 3)
        }
      }
    }
  }, {
    "gl-buffer": 115,
    "gl-shader": 119,
    "gl-vao": 130
  }],
  18: [function(t, e, n) {
    "use strict";

    function i(t, e) {
      return function(t) {
        if (Array.isArray(t)) return t
      }(t) || function(t, e) {
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
        } catch (t) {
          i = !0, o = t
        } finally {
          try {
            r || null == s.return || s.return()
          } finally {
            if (i) throw o
          }
        }
        return n
      }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }()
    }

    function o(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
      }
    }
    var a = t("gl-vec2"),
      s = t("../utils/box"),
      c = t("../utils/vec2"),
      r = t("p2"),
      u = r.Body,
      l = r.Box,
      h = r.Circle,
      f = r.LinearSpring;
    e.exports = function() {
      function r(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.create();
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, r), this.el = t, this.latLng = e, this.position = n, this.offset = a.create(), this.scale = 1, this.mode = "physical", this.body = new u({
          mass: 5,
          position: n,
          fixedRotation: !0,
          collisionResponse: false
        }), this.body.damping = .9999, this.anchor = new u({
          position: n
        }), this.spring = new f(this.body, this.anchor, {
          restLength: 0,
          stiffness: 200,
          damping: 10,
        }), this.dot = t.querySelector(".marker__dot"), this.label = t.querySelector(".marker__label"), this.radius = 0, this.labelBounds = s.create(), this.labelVisible = !1, window.addEventListener("resize", this.measure.bind(this)), this.measure()
      }
      var t, e, n;
      return t = r, (e = [{
        key: "setPosition",
        value: function(t, e) {
          a.copy(this.anchor.position, t), e && (a.copy(this.body.previousPosition, t), a.copy(this.body.position, t), this.body.setZeroForce())
        }
      }, {
        key: "measure",
        value: function() {
          var t = c.elementPosition(a.create(), this.el);
          a.negate(t, t), this.labelVisible = "none" !== getComputedStyle(this.label).display, this.labelVisible && (s.setFromElement(this.labelBounds, this.label), s.translate(this.labelBounds, this.labelBounds, t)), this.radius = this.dot.clientWidth / 2 + 1, this.setScale(this.scale)
        }
      }, {
        key: "setScale",
        value: function(t) {
          var e = this;
          if (this.scale = t, this.body.shapes.forEach(function(t) {
              e.body.removeShape(t)
            }), this.body.addShape(new h({
              radius: this.radius * t
            })), this.labelVisible) {
            var n = s.size(a.create(), this.labelBounds);
            a.scale(n, n, t), this.body.addShape(new l({
              width: n[0],
              height: n[1],
              position: a.scale(a.create(), this.labelBounds.min, t)
            }))
          }
        }
      }, {
        key: "render",
        value: function(t) {
          var e = i(t, 2),
            n = e[0],
            r = e[1];
          this.el.style.transform = "translate(".concat(n, "px, ").concat(r, "px)")
        }
      }]) && o(t.prototype, e), n && o(t, n), r
    }()
  }, {
    "../utils/box": 23,
    "../utils/vec2": 33,
    "gl-vec2": 148,
    p2: 238
  }],
  19: [function(t, e, n) {
    "use strict";

    function T(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    t("intersection-observer");
    var r = t("./map"),
      S = (t("./mapStyles"), t("gl-vec2")),
      R = t("../utils/box"),
      I = (t("../utils/intersectionObserver"), t("../utils/observer"));
    e.exports = function(x) {
      x.querySelector(".guide") && r().then(function(t) {
        var e = t.map,
          n = t.markers,
          r = t.containMarkers,
          i = t.centerMarker,
          o = t.getMinZoom,
          a = t.setLabels,
          s = function(t) {
            return x.querySelector(t)
          },
          c = function(t) {
            return T(x.querySelectorAll(t))
          },
          u = {
            minZoom: 1,
            showMap: !1,
            showMapLabels: !1,
            showMarkers: !0,
            mode: null,
            spot: 0
          },
// HANDLER FOR PANNING MAP
          l = function() {
            b.classList.toggle("spots--show-map", u.showMap), m.classList.toggle("map-bounds--spot", !u.showMap), m.classList.toggle("map-bounds--spot-expanded", u.showMap), E.classList.toggle("map-markers--hidden", !u.showMarkers), u.minZoom = o(g);
            var t = e.getZoom();
            switch (h.classList.toggle("map__button--disabled", 20 <= t), f.classList.toggle("map__button--disabled", t <= u.minZoom), a(u.showMapLabels), u.mode) {
              case "cover":
                r(g);
                break;
              case "spot":
                e.setZoom(15), i(n[u.spot], R.center(S.create(), y))
                // e.setZoom(15), i(n[u.spot], R.center(S.create(), y))
            }
          };
        e.addListener("zoom_changed", function() {
          e.getZoom() < u.minZoom && e.setZoom(u.minZoom)
        });
        var h = s(".map__button--zoom-in"),
          f = s(".map__button--zoom-in");
        h.addEventListener("click", function() {
          e.setZoom(e.getZoom() + 1)
        }), f.addEventListener("click", function() {
          return e.setZoom(e.getZoom() - 1)
        });
        var p = s(".map-bounds--cover-landscape"),
          d = s(".map-bounds-cover-portrait"),
          g = R.create(),
          v = function() {
            window.innerWidth > window.innerHeight ? R.setFromElement(g, p) : (R.setFromElement(g, d), R.translate(g, g, S.fromValues(0, window.pageYOffset)))
          };
        v(), window.addEventListener("resize", function() {
          v(), l()
        });
        var m = s(".map-bounds--spot"),
          y = R.observeElement(m, l),
          b = s(".spots"),
          _ = c(".spot"),
          E = s(".map-markers"),
          A = I(IntersectionObserver, {
            rootMargin: "-49% 0% -49% 0%"
          }).observe,
          w = function(t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {};
            return A(t, function(t) {
              return t.isIntersecting ? e(t) : n(t)
            })
          };
        _.forEach(function(t, e) {
          return w(t, function() {
            u.mode = "spot", u.spot = e, u.showMarkers = !0, l()
          })
        }), c(".guide-cover-landscape, .guide-cover-portrait").forEach(function(t) {
          w(t, function() {
            u.mode = "cover", l()
          })
        }), s(".spots__map-trigger").addEventListener("click", function() {
          u.showMap = !u.showMap, l()
        }), c("[data-show-map-labels]").forEach(function(t) {
          return w(t, function() {
            u.showMapLabels = !0, l()
          })
        }), c("[data-hide-map-labels]").forEach(function(t) {
          return w(t, function() {
            u.showMapLabels = !1, l()
          })
        }), c("[data-hide-markers]").forEach(function(t) {
          return w(t, function(t) {
            u.showMarkers = !1, l()
          }, function(t) {
            u.showMarkers = !0, l()
          })
        }), l(), window.addEventListener("resize", l)
      })
    }
  }, {
    "../utils/box": 23,
    "../utils/intersectionObserver": 25,
    "../utils/observer": 30,
    "./map": 20,
    "./mapStyles": 21,
    "gl-vec2": 148,
    "intersection-observer": 187
  }],
  20: [function(t, e, n) {
    "use strict";

    function R(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    var I = t("gl-vec2"),
      L = t("../utils/box"),
      M = t("../utils/map"),
      r = t("../utils/loadScript"),
      B = t("./mapStyles"),
      C = t("./Marker"),
      P = t("p2").World,
      i = function(t) {
        var n = t.el,
          r = t.map;
        return new Promise(function(t) {
          var e = new google.maps.OverlayView;
          e.onAdd = function() {
            return t({
              el: n,
              map: r,
              overlayHelper: e
            })
          }, e.draw = function() {}, e.setMap(r)
        })
      },
      s = function(e, t, n) {
        var r = t.map(function(t) {
            return M.latLngToPx(e, t.latLng, n)
          }),
          i = t.reduce(function(t, e, n) {
            return Math.max(t, r[n][0] + e.radius)
          }, -1 / 0);
        return t.reduce(function(t, e, n) {
          return e.labelVisible ? Math.max(t, r[n][0] + e.labelBounds.max[0]) : i
        }, -1 / 0) - i
      },
      O = function(t, e, n, r) {
        var i, o, a;
        for (i = 20; 1 <= i && (o = M.worldToPx(n, i), a = s(t, e, i), o[0] += a, !(o[0] <= r[0] && o[1] <= r[1])); i--);
        return {
          zoom: i,
          margin: a
        }
      },
      F = function(t, e, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : t.getZoom(),
          i = I.subtract(I.create(), L.center(I.create(), L.viewport), n),
          o = M.pxToLatLngDistance(t, i, r);
        return M.add(e, o)
      },
      o = function(t) {
        var e = t.el,
          a = t.map,
          n = t.overlayHelper,
          r = google.maps,
          i = r.LatLng,
          o = r.LatLngBounds,
          s = M.zoomScale(20),
          c = R(document.querySelectorAll(".marker")).map(function(t) {
            var e = new i(Number(t.dataset.lat), Number(t.dataset.lng)),
              n = M.latLngToWorld(a, e);
            return I.scale(n, n, s), new C(t, e, n)
          }),
          u = c.reduce(function(t, e) {
            var n = e.latLng;
            return t.extend(n)
          }, new o),
          l = (u.toSpan(), u.getCenter()),
          h = L.fromPoints(c.map(function(t) {
            var e = t.latLng;
            return M.latLngToWorld(a, e)
          })),
          f = L.size(I.create(), h),
          p = function(t) {
            return M.fromPoint(n.getProjection().fromLatLngToContainerPixel(t))
          },
          d = function(t) {
            return p((e = t, M.worldToLatLng(a, I.scale(I.create(), e, 1 / s))));
            var e
          },
          g = new P({
            gravity: [0, 0]
          });
        c.forEach(function(t) {
          var e = t.body,
            n = t.spring;
          g.addBody(e), g.addSpring(n)
        });
        var v, m, y = I.create(),
          b = Math.pow(.1, 2),
          _ = function(t) {
            var e = d(t.body.position),
              n = d(t.body.previousPosition);
            return I.subtract(y, e, n), I.squaredLength(y) < b
          },
          E = function() {
            c.forEach(function(t, e) {
              switch (t.mode) {
                case "physical":
                  t.render(d(t.body.interpolatedPosition));
                  break;
                case "exact":
                  t.render(p(t.latLng))
              }
            })
          },
          A = function() {
            v || (v = !0, x())
          },
          w = 0,
          x = function t(e) {
            var n = m ? (e - m) / 1e3 : 0;
            g.step(1 / 60, n, 10), E(), c.every(_) ? w++ : w = 0, 5 <= w ? (m = null, v = !1) : (m = e, requestAnimationFrame(t))
          },
          T = 0;
        n.draw = function() {
          var t = n.getProjection().getWorldWidth();
          if (t !== T) {
            var e = 1 / (t / 256);
            c.forEach(function(t) {
              return t.setScale(e * s)
            }), T = t, A()
          }
          v || E()
        }, A();
        var S = !1;
        return c.forEach(function(t) {
          setTimeout(function() {
            return t.el.style.opacity = 1
          }, 15e3 * Math.random())
        }), {
          el: e,
          map: a,
          markers: c,
          getMinZoom: function(t) {
            return 1
          },
          containMarkers: function(t) {
            var e = O(a, c, f, L.size(I.create(), t)),
              n = e.zoom,
              r = e.margin,
              i = L.center(I.create(), t);
            i[0] -= r / 2, a.setZoom(n);
            var o = F(a, l, i, n);
            a.setCenter(o), c.forEach(function(t) {
              t.el.style.opacity = 1, t.mode = "physical"
            })
          },
          centerMarker: function(e, t) {
            !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            var n = e.latLng,
              r = F(a, n, t);
            a.panTo(r), c.forEach(function(t) {
              t.mode = t === e ? (t.el.style.opacity = 1, "exact") : (t.el.style.opacity = 0, "hidden")
            })
          },
          setLabels: function(t) {
            S !== t && (S = t, a.setOptions({
              styles: t ? B.default : B.noLabels
            }))
          }
        }
      };
    e.exports = function() {
      var t = document.querySelector(".map");
      return t ? r("https://maps.googleapis.com/maps/api/js?key=".concat(t.dataset.apiKey)).then(function() {
        return n = t.querySelector(".map__map"), r = {
          zoom: 1,
          center: new google.maps.LatLng(0, 0),
          mapTypeControl: !1,
          zoomControl: !1,
          streetViewControl: !1,
          rotateControl: !1,
          fullscreenControl: !1,
          scrollwheel: !1,
          styles: B.noLabels,
          gestureHandling: "greedy"
        }, new Promise(function(t) {
          var e = new google.maps.Map(n, r);
          e.addListener("projection_changed", function() {
            return t({
              el: n,
              map: e
            })
          })
        });
        var n, r
      }).then(i).then(o) : Promise.reject()
    }
  }, {
    "../utils/box": 23,
    "../utils/loadScript": 27,
    "../utils/map": 28,
    "./Marker": 18,
    "./mapStyles": 21,
    "gl-vec2": 148,
    p2: 238
  }],
  21: [function(t, e, n) {
    "use strict";
    var r;
    n.default = [{
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "landscape",
      elementType: "all",
      stylers: [{
        color: "#f2f2f2"
      }]
    }, {
      featureType: "poi",
      elementType: "all",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "road",
      elementType: "all",
      stylers: [{
        saturation: -100
      }, {
        lightness: 45
      }]
    }, {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{
        visibility: "simplified"
      }]
    }, {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "transit",
      elementType: "all",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "water",
      elementType: "all",
      stylers: [{
        color: "#ffffff"
      }, {
        visibility: "on"
      }]
    }], n.noLabels = [].concat(function(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
        return n
      }
    }(r = n.default) || function(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }(r) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }(), [{
      featureType: "all",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }])
  }, {}],
  22: [function(t, e, n) {
    "use strict";
    t("./components")(document.documentElement), t("./guide/guide")(document), document.addEventListener("gesturestart", function(t) {
      t.preventDefault()
    }), document.documentElement.classList.add("ontouchstart" in window ? "touch" : "no-touch")
  }, {
    "./components": 4,
    "./guide/guide": 19
  }],
  23: [function(t, e, n) {
    "use strict";

    function r(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    var i, s = t("gl-vec2"),
      o = t("./vec2"),
      a = t("./observer"),
      c = t("resize-observer-polyfill"),
      u = function() {
        return {
          min: s.create(),
          max: s.create()
        }
      },
      l = function(t, e) {
        return s.set(t.min, 1 / 0, 1 / 0), s.set(t.max, -1 / 0, -1 / 0), g.apply(void 0, [t, t].concat(r(e)))
      },
      h = function(t) {
        return l(u(), t)
      },
      f = function(t, e) {
        var n = e.getBoundingClientRect(),
          r = n.top,
          i = n.left,
          o = n.bottom,
          a = n.right;
        return s.set(t.min, i, r), s.set(t.max, a, o), t
      },
      p = function(t, e) {
        return f(t, e), m(t, t, [0, window.pageYOffset]), t
      },
      d = function(t) {
        return f(u(), t)
      },
      g = function(e, n) {
        for (var t = arguments.length, r = new Array(2 < t ? t - 2 : 0), i = 2; i < t; i++) r[i - 2] = arguments[i];
        return r.forEach(function(t) {
          s.min(e.min, n.min, t), s.max(e.max, n.max, t)
        }), e
      },
      v = function(t, e) {
        return s.subtract(t, e.max, e.min)
      },
      m = function(t, e, n) {
        return s.add(t.min, e.min, n), s.add(t.max, e.max, n), t
      },
// CREATE Y DIMS FROM WINDOW SIZE
      y = h([s.fromValues(0, 0), s.fromValues(window.innerWidth, window.innerHeight)]);
    window.addEventListener("resize", function() {
      return s.set(y.max, window.innerWidth, window.innerHeight)
    });
    e.exports = {
      create: u,
      expand: g,
      fromPoints: h,
      setFromPoints: l,
      fromElement: d,
      fromElementSize: function(t) {
        return e = u(), n = t, s.set(e.min, 0, 0), o.elementSize(e.max, n), e;
        var e, n
      },
      fromElementOffset: function(t) {
        return p(u(), t)
      },
      setFromElementOffset: p,
      size: v,
      center: function(t, e) {
        var newe = e;
        newe.min = [0, 0]
        newe.max = [0, 0]
        var n = s.scale(t, v(t, newe), .5);
        console.log(n)
        return s.add(t, e.min, n)
      },
      setFromElement: f,
      viewport: y,
      translate: m,
      scale: function(t, e, n) {
        return s.scale(t.min, e.min, n), s.scale(t.max, e.max, n), t
      },
      contain: function(t, e, n, r) {
        var i = o.contain(s.create(), e, n);
        return o.align(t.min, e, i, r), s.add(t.max, t.min, i), t
      },
      contains: function(t, e) {
        return e[0] >= t.min[0] && e[0] <= t.max[0] && e[1] >= t.min[1] && e[1] <= t.max[1]
      },
      map: function(t, e, n, r) {
        return o.map(t, e, n.min, n.max, r.min, r.max)
      },
      overlapping: function(t, e) {
        return !(e.min[0] > t.max[0] || e.max[0] < t.min[0] || e.min[1] > t.max[1] || e.max[1] < t.min[1])
      },
      inset: function(t, e, n) {
        return s.add(t.min, e.min, n), s.subtract(t.max, e.max, n), t
      },
      isZero: function(t) {
        return 0 === t.min[0] && 0 === t.min[1] && 0 === t.max[0] && 0 === t.max[1]
      },
      intersect: function(t, e, n) {
        return t.min[0] = Math.max(e.min[0], n.min[0]), t.min[1] = Math.max(e.min[1], n.min[1]), t.max[0] = Math.min(e.max[0], n.max[0]), t.max[1] = Math.min(e.max[1], n.max[1]), t
      },
      observeElement: function(t, e) {
        var n = d(t);
        return i || (i = a(c)), i.observe(t, function() {
          f(n, t), e && e(n)
        }), n
      }
    }
  }, {
    "./observer": 30,
    "./vec2": 33,
    "gl-vec2": 148,
    "resize-observer-polyfill": 272
  }],
  24: [function(t, e, n) {
    "use strict";
    e.exports = function(r) {
      var n, i, o, a, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        e = t.draggingClass,
        s = void 0 === e ? null : e,
        c = t.onClick,
        u = void 0 === c ? null : c,
        l = t.tolerance,
        h = void 0 === l ? 10 : l,
        f = 0,
        p = 0,
        d = !1,
        g = function(t) {
          p = f = t.clientX, n = Date.now(), r.classList.add(s), d = !0, t.preventDefault(), window.cancelAnimationFrame(a)
        },
        v = function(t) {
          if (d) {
            r.scrollLeft += p - t.clientX;
            var e = Date.now();
            i = (p - t.clientX) / (e - n), p = t.clientX, n = e
          }
        },
        m = function(t) {
          r.classList.remove(s), d = !1, u && Math.abs(t.clientX - f) < h && u(t), o = Date.now(), a = requestAnimationFrame(y)
        },
        y = function t() {
          var e = Date.now(),
            n = e - o;
          r.scrollLeft += i * n, i *= .9, o = e, a = requestAnimationFrame(t)
        };
      return r.addEventListener("mousedown", g), r.addEventListener("mousemove", v), r.addEventListener("mouseup", m),
        function() {
          r.removeEventListener("mousedown", g), r.removeEventListener("mousemove", v), r.removeEventListener("mouseup", m), window.cancelAnimationFrame(a)
        }
    }
  }, {}],
  25: [function(t, e, n) {
    "use strict";
    t("intersection-observer");
    var r = t("./observer")(IntersectionObserver, {
        rootMargin: "50px"
      }),
      i = r.observe,
      o = r.unobserve;
    e.exports = {
      observe: i,
      unobserve: o,
      once: function(n, r) {
        i(n, function t(e) {
          e.isIntersecting && (r(e), o(n, t))
        })
      }
    }
  }, {
    "./observer": 30,
    "intersection-observer": 187
  }],
  26: [function(t, e, n) {
    "use strict";
    e.exports = function(e) {
      return new Promise(function(t) {
        e.dataset.srcset ? (e.addEventListener("load", function() {
          return t(e)
        }), e.srcset = e.dataset.srcset) : e.complete ? t(e) : e.addEventListener("load", function() {
          return t(e)
        })
      })
    }
  }, {}],
  27: [function(t, e, n) {
    "use strict";
    var r = {};
    e.exports = function(n) {
      return new Promise(function(t) {
        if (r[n]) t();
        else {
          var e = document.createElement("script");
          e.onload = t, e.type = "text/javascript", e.src = n, document.body.appendChild(e), r[n] = !0
        }
      })
    }
  }, {}],
  28: [function(t, e, n) {
    "use strict";

    function r(t, e) {
      return function(t) {
        if (Array.isArray(t)) return t
      }(t) || function(t, e) {
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
        } catch (t) {
          i = !0, o = t
        } finally {
          try {
            r || null == s.return || s.return()
          } finally {
            if (i) throw o
          }
        }
        return n
      }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }()
    }
    var s = t("gl-vec2"),
      i = t("./vec2"),
      o = s.fromValues(128, 128),
      a = function(t) {
        return s.fromValues(t.x, t.y)
      },
      c = function(t) {
        var e = r(t, 2);
        return {
          x: e[0],
          y: e[1]
        }
      },
      u = function(t) {
        return Math.pow(2, t)
      },
      l = function(t, e) {
        return s.scale(s.create(), t, u(e))
      },
      h = function(t, e) {
        return a(t.getProjection().fromLatLngToPoint(e))
      },
      f = function(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t.getZoom();
        return l(h(t, e), n)
      },
      p = function(t, e) {
        return s.scale(s.create(), t, 1 / u(e))
      },
      d = function(t, e) {
        return t.getProjection().fromPointToLatLng(c(e))
      };
    e.exports = {
      zoomScale: u,
      zoomScaleInv: function(t) {
        return Math.log(t) / Math.log(2)
      },
      fromLatLng: function(t) {
        return s.fromValues(t.lat(), t.lng())
      },
      fromPoint: a,
      toLatLng: function(t) {
        var e = r(t, 2);
        return {
          lat: e[0],
          lng: e[1]
        }
      },
      toPoint: c,
      add: function(t, e) {
        return {
          lat: t.lat() + e.lat(),
          lng: t.lng() + e.lng()
        }
      },
      worldToPx: l,
      latLngToWorld: h,
      latLngToPx: f,
      latLngToPxDistance: function(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t.getZoom();
        console.warn("this dont work");
        var r = h(t, e);
        return s.subtract(r, r, o), i.abs(r, r), l(r, n)
      },
      latLngToScreen: function(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t.getZoom(),
          r = t.getBounds(),
          i = f(t, r.getNorthEast(), n),
          o = f(t, r.getSouthWest(), n),
          a = s.fromValues(o[0], i[1]);
        return s.subtract(a, f(t, e, n), a)
      },
// CONVERT FROM PX TO LAT LNG
      pxToWorld: p,
      worldToLatLng: d,
      pxToLatLng: function(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t.getZoom();
        return d(t, p(e, n))
      },
      pxToLatLngDistance: function(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t.getZoom(),
          r = p(e, n);
        return s.add(r, r, o), d(t, r)
      }
    }
  }, {
    "./vec2": 33,
    "gl-vec2": 148
  }],
  29: [function(t, e, n) {
    "use strict";
    e.exports = {
      map: function(t, e, n, r, i) {
        return r + (t - e) / (n - e) * (i - r)
      }
    }
  }, {}],
  30: [function(t, e, n) {
    "use strict";

    function o(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }
    var a = t("es6-map");
    e.exports = function(t, e) {
      var r = new t(function(t) {
          return t.forEach(n)
        }, e),
        i = new a,
        n = function(e) {
          var t = i.get(e.target);
          t && t.forEach(function(t) {
            return t(e)
          })
        };
      return {
        observe: function(t, e) {
          i.has(t) ? i.set(t, [].concat(o(i.get(t)), [e])) : (i.set(t, [e]), r.observe(t))
        },
        unobserve: function(t, e) {
          var n = i.get(t);
          n && ((n = n.filter(function(t) {
            return t !== e
          })).length ? i.set(t, n) : (i.delete(t), r.unobserve(t)))
        }
      }
    }
  }, {
    "es6-map": 96
  }],
  31: [function(t, e, n) {
    "use strict";
    var r = t("resize-observer-polyfill"),
      i = t("./observer");
    e.exports = i(r)
  }, {
    "./observer": 30,
    "resize-observer-polyfill": 272
  }],
  32: [function(t, e, n) {
    "use strict";
    e.exports = function(n, r, i, o) {
      var a, s = Date.now(),
        c = s + i;
      return function t() {
          var e = Date.now();
          c <= e ? o(r) : (o(n + (e - s) / i * (r - n)), a = window.requestAnimationFrame(t))
        }(),
        function() {
          return window.cancelAnimationFrame(a)
        }
    }
  }, {}],
  33: [function(t, e, n) {
    "use strict";
    var a = t("gl-vec2"),
      s = t("./math").map,
      r = function(t, e) {
        var n = e.getBoundingClientRect(),
          r = n.width,
          i = n.height;
        return a.set(t, r, i)
      },
      i = function(t, e) {
        return Math.min(t[0] / e[0], t[1] / e[1])
      },
      o = a.fromValues(.5, .5),
      c = a.fromValues(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", function() {
      return a.set(c, window.innerWidth, window.innerHeight)
    }), e.exports = {
      elementPosition: function(t, e) {
        var n = e.getBoundingClientRect(),
          r = n.x,
          i = n.y;
        return a.set(t, r, i)
      },
      elementSize: r,
      align: function(t, e, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : o,
          i = a.subtract(t, e, n);
        return a.multiply(t, i, r)
      },
      contain: function(t, e, n) {
        return a.scale(t, n, i(e, n))
      },
      containScale: i,
      map: function(t, e, n, r, i, o) {
        return a.set(t, s(e[0], n[0], r[0], i[0], o[0]), s(e[1], n[1], r[1], i[1], o[1]))
      },
      abs: function(t, e) {
        return a.set(t, Math.abs(e[0]), Math.abs(e[1]))
      },
      viewport: c
    }
  }, {
    "./math": 29,
    "gl-vec2": 148
  }],
  34: [function(t, e, n) {
    var c = t("pad-left");
    e.exports = function(t, o, a) {
      o = "number" == typeof o ? o : 1, a = a || ": ";
      var e = t.split(/\r?\n/),
        s = String(e.length + o - 1).length;
      return e.map(function(t, e) {
        var n = e + o,
          r = String(n).length,
          i = c(n, s - r);
        return i + a + t
      }).join("\n")
    }
  }, {
    "pad-left": 264
  }],
  35: [function(t, e, n) {
    e.exports = function(t) {
      return atob(t)
    }
  }, {}],
  36: [function(t, e, n) {
    "use strict";
    n.byteLength = function(t) {
      var e = p(t),
        n = e[0],
        r = e[1];
      return 3 * (n + r) / 4 - r
    }, n.toByteArray = function(t) {
      for (var e, n = p(t), r = n[0], i = n[1], o = new f((u = r, l = i, 3 * (u + l) / 4 - l)), a = 0, s = 0 < i ? r - 4 : r, c = 0; c < s; c += 4) e = h[t.charCodeAt(c)] << 18 | h[t.charCodeAt(c + 1)] << 12 | h[t.charCodeAt(c + 2)] << 6 | h[t.charCodeAt(c + 3)], o[a++] = e >> 16 & 255, o[a++] = e >> 8 & 255, o[a++] = 255 & e;
      var u, l;
      2 === i && (e = h[t.charCodeAt(c)] << 2 | h[t.charCodeAt(c + 1)] >> 4, o[a++] = 255 & e);
      1 === i && (e = h[t.charCodeAt(c)] << 10 | h[t.charCodeAt(c + 1)] << 4 | h[t.charCodeAt(c + 2)] >> 2, o[a++] = e >> 8 & 255, o[a++] = 255 & e);
      return o
    }, n.fromByteArray = function(t) {
      for (var e, n = t.length, r = n % 3, i = [], o = 0, a = n - r; o < a; o += 16383) i.push(c(t, o, a < o + 16383 ? a : o + 16383));
      1 === r ? (e = t[n - 1], i.push(s[e >> 2] + s[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], i.push(s[e >> 10] + s[e >> 4 & 63] + s[e << 2 & 63] + "="));
      return i.join("")
    };
    for (var s = [], h = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, o = r.length; i < o; ++i) s[i] = r[i], h[r.charCodeAt(i)] = i;

    function p(t) {
      var e = t.length;
      if (0 < e % 4) throw new Error("Invalid string. Length must be a multiple of 4");
      var n = t.indexOf("=");
      return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
    }

    function c(t, e, n) {
      for (var r, i, o = [], a = e; a < n; a += 3) r = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), o.push(s[(i = r) >> 18 & 63] + s[i >> 12 & 63] + s[i >> 6 & 63] + s[63 & i]);
      return o.join("")
    }
    h["-".charCodeAt(0)] = 62, h["_".charCodeAt(0)] = 63
  }, {}],
  37: [function(t, e, n) {
    "use strict";

    function r(t) {
      var e = 32;
      return (t &= -t) && e--, 65535 & t && (e -= 16), 16711935 & t && (e -= 8), 252645135 & t && (e -= 4), 858993459 & t && (e -= 2), 1431655765 & t && (e -= 1), e
    }
    n.INT_BITS = 32, n.INT_MAX = 2147483647, n.INT_MIN = -1 << 31, n.sign = function(t) {
      return (0 < t) - (t < 0)
    }, n.abs = function(t) {
      var e = t >> 31;
      return (t ^ e) - e
    }, n.min = function(t, e) {
      return e ^ (t ^ e) & -(t < e)
    }, n.max = function(t, e) {
      return t ^ (t ^ e) & -(t < e)
    }, n.isPow2 = function(t) {
      return !(t & t - 1 || !t)
    }, n.log2 = function(t) {
      var e, n;
      return e = (65535 < t) << 4, e |= n = (255 < (t >>>= e)) << 3, e |= n = (15 < (t >>>= n)) << 2, (e |= n = (3 < (t >>>= n)) << 1) | (t >>>= n) >> 1
    }, n.log10 = function(t) {
      return 1e9 <= t ? 9 : 1e8 <= t ? 8 : 1e7 <= t ? 7 : 1e6 <= t ? 6 : 1e5 <= t ? 5 : 1e4 <= t ? 4 : 1e3 <= t ? 3 : 100 <= t ? 2 : 10 <= t ? 1 : 0
    }, n.popCount = function(t) {
      return 16843009 * ((t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135) >>> 24
    }, n.countTrailingZeros = r, n.nextPow2 = function(t) {
      return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) + 1
    }, n.prevPow2 = function(t) {
      return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) - (t >>> 1)
    }, n.parity = function(t) {
      return t ^= t >>> 16, t ^= t >>> 8, t ^= t >>> 4, 27030 >>> (t &= 15) & 1
    };
    var i = new Array(256);
    ! function(t) {
      for (var e = 0; e < 256; ++e) {
        var n = e,
          r = e,
          i = 7;
        for (n >>>= 1; n; n >>>= 1) r <<= 1, r |= 1 & n, --i;
        t[e] = r << i & 255
      }
    }(i), n.reverse = function(t) {
      return i[255 & t] << 24 | i[t >>> 8 & 255] << 16 | i[t >>> 16 & 255] << 8 | i[t >>> 24 & 255]
    }, n.interleave2 = function(t, e) {
      return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t &= 65535) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e &= 65535) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }, n.deinterleave2 = function(t, e) {
      return (t = 65535 & ((t = 16711935 & ((t = 252645135 & ((t = 858993459 & ((t = t >>> e & 1431655765) | t >>> 1)) | t >>> 2)) | t >>> 4)) | t >>> 16)) << 16 >> 16
    }, n.interleave3 = function(t, e, n) {
      return t = 1227133513 & ((t = 3272356035 & ((t = 251719695 & ((t = 4278190335 & ((t &= 1023) | t << 16)) | t << 8)) | t << 4)) | t << 2), (t |= (e = 1227133513 & ((e = 3272356035 & ((e = 251719695 & ((e = 4278190335 & ((e &= 1023) | e << 16)) | e << 8)) | e << 4)) | e << 2)) << 1) | (n = 1227133513 & ((n = 3272356035 & ((n = 251719695 & ((n = 4278190335 & ((n &= 1023) | n << 16)) | n << 8)) | n << 4)) | n << 2)) << 2
    }, n.deinterleave3 = function(t, e) {
      return (t = 1023 & ((t = 4278190335 & ((t = 251719695 & ((t = 3272356035 & ((t = t >>> e & 1227133513) | t >>> 2)) | t >>> 4)) | t >>> 8)) | t >>> 16)) << 22 >> 22
    }, n.nextCombination = function(t) {
      var e = t | t - 1;
      return e + 1 | (~e & -~e) - 1 >>> r(t) + 1
    }
  }, {}],
  38: [function(t, e, n) {
    "use strict";
    var r = t("base64-js"),
      o = t("ieee754");
    n.Buffer = h, n.SlowBuffer = function(t) {
      +t != t && (t = 0);
      return h.alloc(+t)
    }, n.INSPECT_MAX_BYTES = 50;
    var i = 2147483647;

    function a(t) {
      if (i < t) throw new RangeError('The value "' + t + '" is invalid for option "size"');
      var e = new Uint8Array(t);
      return e.__proto__ = h.prototype, e
    }

    function h(t, e, n) {
      if ("number" != typeof t) return s(t, e, n);
      if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
      return u(t)
    }

    function s(t, e, n) {
      if ("string" == typeof t) return function(t, e) {
        "string" == typeof e && "" !== e || (e = "utf8");
        if (!h.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
        var n = 0 | p(t, e),
          r = a(n),
          i = r.write(t, e);
        i !== n && (r = r.slice(0, i));
        return r
      }(t, e);
      if (ArrayBuffer.isView(t)) return l(t);
      if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
      if (N(t, ArrayBuffer) || t && N(t.buffer, ArrayBuffer)) return function(t, e, n) {
        if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
        var r;
        r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n);
        return r.__proto__ = h.prototype, r
      }(t, e, n);
      if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
      var r = t.valueOf && t.valueOf();
      if (null != r && r !== t) return h.from(r, e, n);
      var i = function(t) {
        if (h.isBuffer(t)) {
          var e = 0 | f(t.length),
            n = a(e);
          return 0 === n.length || t.copy(n, 0, 0, e), n
        }
        if (void 0 !== t.length) return "number" != typeof t.length || q(t.length) ? a(0) : l(t);
        if ("Buffer" === t.type && Array.isArray(t.data)) return l(t.data)
      }(t);
      if (i) return i;
      if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return h.from(t[Symbol.toPrimitive]("string"), e, n);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
    }

    function c(t) {
      if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
      if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
    }

    function u(t) {
      return c(t), a(t < 0 ? 0 : 0 | f(t))
    }

    function l(t) {
      for (var e = t.length < 0 ? 0 : 0 | f(t.length), n = a(e), r = 0; r < e; r += 1) n[r] = 255 & t[r];
      return n
    }

    function f(t) {
      if (i <= t) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
      return 0 | t
    }

    function p(t, e) {
      if (h.isBuffer(t)) return t.length;
      if (ArrayBuffer.isView(t) || N(t, ArrayBuffer)) return t.byteLength;
      if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
      var n = t.length,
        r = 2 < arguments.length && !0 === arguments[2];
      if (!r && 0 === n) return 0;
      for (var i = !1;;) switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
          return P(t).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * n;
        case "hex":
          return n >>> 1;
        case "base64":
          return O(t).length;
        default:
          if (i) return r ? -1 : P(t).length;
          e = ("" + e).toLowerCase(), i = !0
      }
    }

    function d(t, e, n) {
      var r = t[e];
      t[e] = t[n], t[n] = r
    }

    function g(t, e, n, r, i) {
      if (0 === t.length) return -1;
      if ("string" == typeof n ? (r = n, n = 0) : 2147483647 < n ? n = 2147483647 : n < -2147483648 && (n = -2147483648), q(n = +n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
        if (i) return -1;
        n = t.length - 1
      } else if (n < 0) {
        if (!i) return -1;
        n = 0
      }
      if ("string" == typeof e && (e = h.from(e, r)), h.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, n, r, i);
      if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : v(t, [e], n, r, i);
      throw new TypeError("val must be string, number or Buffer")
    }

    function v(t, e, n, r, i) {
      var o, a = 1,
        s = t.length,
        c = e.length;
      if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (t.length < 2 || e.length < 2) return -1;
        s /= a = 2, c /= 2, n /= 2
      }

      function u(t, e) {
        return 1 === a ? t[e] : t.readUInt16BE(e * a)
      }
      if (i) {
        var l = -1;
        for (o = n; o < s; o++)
          if (u(t, o) === u(e, -1 === l ? 0 : o - l)) {
            if (-1 === l && (l = o), o - l + 1 === c) return l * a
          } else -1 !== l && (o -= o - l), l = -1
      } else
        for (s < n + c && (n = s - c), o = n; 0 <= o; o--) {
          for (var h = !0, f = 0; f < c; f++)
            if (u(t, o + f) !== u(e, f)) {
              h = !1;
              break
            } if (h) return o
        }
      return -1
    }

    function m(t, e, n, r) {
      n = Number(n) || 0;
      var i = t.length - n;
      r ? i < (r = Number(r)) && (r = i) : r = i;
      var o = e.length;
      o / 2 < r && (r = o / 2);
      for (var a = 0; a < r; ++a) {
        var s = parseInt(e.substr(2 * a, 2), 16);
        if (q(s)) return a;
        t[n + a] = s
      }
      return a
    }

    function y(t, e, n, r) {
      return F(function(t) {
        for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
        return e
      }(e), t, n, r)
    }

    function b(t, e, n) {
      return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
    }

    function _(t, e, n) {
      n = Math.min(t.length, n);
      for (var r = [], i = e; i < n;) {
        var o, a, s, c, u = t[i],
          l = null,
          h = 239 < u ? 4 : 223 < u ? 3 : 191 < u ? 2 : 1;
        if (i + h <= n) switch (h) {
          case 1:
            u < 128 && (l = u);
            break;
          case 2:
            128 == (192 & (o = t[i + 1])) && 127 < (c = (31 & u) << 6 | 63 & o) && (l = c);
            break;
          case 3:
            o = t[i + 1], a = t[i + 2], 128 == (192 & o) && 128 == (192 & a) && 2047 < (c = (15 & u) << 12 | (63 & o) << 6 | 63 & a) && (c < 55296 || 57343 < c) && (l = c);
            break;
          case 4:
            o = t[i + 1], a = t[i + 2], s = t[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && 65535 < (c = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) && c < 1114112 && (l = c)
        }
        null === l ? (l = 65533, h = 1) : 65535 < l && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += h
      }
      return function(t) {
        var e = t.length;
        if (e <= E) return String.fromCharCode.apply(String, t);
        var n = "",
          r = 0;
        for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += E));
        return n
      }(r)
    }
    n.kMaxLength = i, (h.TYPED_ARRAY_SUPPORT = function() {
      try {
        var t = new Uint8Array(1);
        return t.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function() {
            return 42
          }
        }, 42 === t.foo()
      } catch (t) {
        return !1
      }
    }()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(h.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (h.isBuffer(this)) return this.buffer
      }
    }), Object.defineProperty(h.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (h.isBuffer(this)) return this.byteOffset
      }
    }), "undefined" != typeof Symbol && null != Symbol.species && h[Symbol.species] === h && Object.defineProperty(h, Symbol.species, {
      value: null,
      configurable: !0,
      enumerable: !1,
      writable: !1
    }), h.poolSize = 8192, h.from = function(t, e, n) {
      return s(t, e, n)
    }, h.prototype.__proto__ = Uint8Array.prototype, h.__proto__ = Uint8Array, h.alloc = function(t, e, n) {
      return i = e, o = n, c(r = t), r <= 0 ? a(r) : void 0 !== i ? "string" == typeof o ? a(r).fill(i, o) : a(r).fill(i) : a(r);
      var r, i, o
    }, h.allocUnsafe = function(t) {
      return u(t)
    }, h.allocUnsafeSlow = function(t) {
      return u(t)
    }, h.isBuffer = function(t) {
      return null != t && !0 === t._isBuffer && t !== h.prototype
    }, h.compare = function(t, e) {
      if (N(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), N(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), !h.isBuffer(t) || !h.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === e) return 0;
      for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i)
        if (t[i] !== e[i]) {
          n = t[i], r = e[i];
          break
        } return n < r ? -1 : r < n ? 1 : 0
    }, h.isEncoding = function(t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1
      }
    }, h.concat = function(t, e) {
      if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t.length) return h.alloc(0);
      var n;
      if (void 0 === e)
        for (n = e = 0; n < t.length; ++n) e += t[n].length;
      var r = h.allocUnsafe(e),
        i = 0;
      for (n = 0; n < t.length; ++n) {
        var o = t[n];
        if (N(o, Uint8Array) && (o = h.from(o)), !h.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
        o.copy(r, i), i += o.length
      }
      return r
    }, h.byteLength = p, h.prototype._isBuffer = !0, h.prototype.swap16 = function() {
      var t = this.length;
      if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var e = 0; e < t; e += 2) d(this, e, e + 1);
      return this
    }, h.prototype.swap32 = function() {
      var t = this.length;
      if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var e = 0; e < t; e += 4) d(this, e, e + 3), d(this, e + 1, e + 2);
      return this
    }, h.prototype.swap64 = function() {
      var t = this.length;
      if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var e = 0; e < t; e += 8) d(this, e, e + 7), d(this, e + 1, e + 6), d(this, e + 2, e + 5), d(this, e + 3, e + 4);
      return this
    }, h.prototype.toLocaleString = h.prototype.toString = function() {
      var t = this.length;
      return 0 === t ? "" : 0 === arguments.length ? _(this, 0, t) : function(t, e, n) {
        var r = !1;
        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
        if ((n >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8");;) switch (t) {
          case "hex":
            return x(this, e, n);
          case "utf8":
          case "utf-8":
            return _(this, e, n);
          case "ascii":
            return A(this, e, n);
          case "latin1":
          case "binary":
            return w(this, e, n);
          case "base64":
            return b(this, e, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return T(this, e, n);
          default:
            if (r) throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), r = !0
        }
      }.apply(this, arguments)
    }, h.prototype.equals = function(t) {
      if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t || 0 === h.compare(this, t)
    }, h.prototype.inspect = function() {
      var t = "",
        e = n.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
    }, h.prototype.compare = function(t, e, n, r, i) {
      if (N(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
      if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
      if (i <= r && n <= e) return 0;
      if (i <= r) return -1;
      if (n <= e) return 1;
      if (this === t) return 0;
      for (var o = (i >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (e >>>= 0), s = Math.min(o, a), c = this.slice(r, i), u = t.slice(e, n), l = 0; l < s; ++l)
        if (c[l] !== u[l]) {
          o = c[l], a = u[l];
          break
        } return o < a ? -1 : a < o ? 1 : 0
    }, h.prototype.includes = function(t, e, n) {
      return -1 !== this.indexOf(t, e, n)
    }, h.prototype.indexOf = function(t, e, n) {
      return g(this, t, e, n, !0)
    }, h.prototype.lastIndexOf = function(t, e, n) {
      return g(this, t, e, n, !1)
    }, h.prototype.write = function(t, e, n, r) {
      if (void 0 === e) r = "utf8", n = this.length, e = 0;
      else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
      else {
        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
      }
      var i = this.length - e;
      if ((void 0 === n || i < n) && (n = i), 0 < t.length && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      r || (r = "utf8");
      for (var o, a, s, c, u, l, h, f, p, d = !1;;) switch (r) {
        case "hex":
          return m(this, t, e, n);
        case "utf8":
        case "utf-8":
          return f = e, p = n, F(P(t, (h = this).length - f), h, f, p);
        case "ascii":
          return y(this, t, e, n);
        case "latin1":
        case "binary":
          return y(this, t, e, n);
        case "base64":
          return c = this, u = e, l = n, F(O(t), c, u, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return a = e, s = n, F(function(t, e) {
            for (var n, r, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) n = t.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
            return o
          }(t, (o = this).length - a), o, a, s);
        default:
          if (d) throw new TypeError("Unknown encoding: " + r);
          r = ("" + r).toLowerCase(), d = !0
      }
    }, h.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };
    var E = 4096;

    function A(t, e, n) {
      var r = "";
      n = Math.min(t.length, n);
      for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
      return r
    }

    function w(t, e, n) {
      var r = "";
      n = Math.min(t.length, n);
      for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
      return r
    }

    function x(t, e, n) {
      var r = t.length;
      (!e || e < 0) && (e = 0), (!n || n < 0 || r < n) && (n = r);
      for (var i = "", o = e; o < n; ++o) i += C(t[o]);
      return i
    }

    function T(t, e, n) {
      for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
      return i
    }

    function S(t, e, n) {
      if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
      if (n < t + e) throw new RangeError("Trying to access beyond buffer length")
    }

    function R(t, e, n, r, i, o) {
      if (!h.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (i < e || e < o) throw new RangeError('"value" argument is out of bounds');
      if (n + r > t.length) throw new RangeError("Index out of range")
    }

    function I(t, e, n, r, i, o) {
      if (n + r > t.length) throw new RangeError("Index out of range");
      if (n < 0) throw new RangeError("Index out of range")
    }

    function L(t, e, n, r, i) {
      return e = +e, n >>>= 0, i || I(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4
    }

    function M(t, e, n, r, i) {
      return e = +e, n >>>= 0, i || I(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8
    }
    h.prototype.slice = function(t, e) {
      var n = this.length;
      (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n), e < t && (e = t);
      var r = this.subarray(t, e);
      return r.__proto__ = h.prototype, r
    }, h.prototype.readUIntLE = function(t, e, n) {
      t >>>= 0, e >>>= 0, n || S(t, e, this.length);
      for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
      return r
    }, h.prototype.readUIntBE = function(t, e, n) {
      t >>>= 0, e >>>= 0, n || S(t, e, this.length);
      for (var r = this[t + --e], i = 1; 0 < e && (i *= 256);) r += this[t + --e] * i;
      return r
    }, h.prototype.readUInt8 = function(t, e) {
      return t >>>= 0, e || S(t, 1, this.length), this[t]
    }, h.prototype.readUInt16LE = function(t, e) {
      return t >>>= 0, e || S(t, 2, this.length), this[t] | this[t + 1] << 8
    }, h.prototype.readUInt16BE = function(t, e) {
      return t >>>= 0, e || S(t, 2, this.length), this[t] << 8 | this[t + 1]
    }, h.prototype.readUInt32LE = function(t, e) {
      return t >>>= 0, e || S(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
    }, h.prototype.readUInt32BE = function(t, e) {
      return t >>>= 0, e || S(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    }, h.prototype.readIntLE = function(t, e, n) {
      t >>>= 0, e >>>= 0, n || S(t, e, this.length);
      for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
      return (i *= 128) <= r && (r -= Math.pow(2, 8 * e)), r
    }, h.prototype.readIntBE = function(t, e, n) {
      t >>>= 0, e >>>= 0, n || S(t, e, this.length);
      for (var r = e, i = 1, o = this[t + --r]; 0 < r && (i *= 256);) o += this[t + --r] * i;
      return (i *= 128) <= o && (o -= Math.pow(2, 8 * e)), o
    }, h.prototype.readInt8 = function(t, e) {
      return t >>>= 0, e || S(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
    }, h.prototype.readInt16LE = function(t, e) {
      t >>>= 0, e || S(t, 2, this.length);
      var n = this[t] | this[t + 1] << 8;
      return 32768 & n ? 4294901760 | n : n
    }, h.prototype.readInt16BE = function(t, e) {
      t >>>= 0, e || S(t, 2, this.length);
      var n = this[t + 1] | this[t] << 8;
      return 32768 & n ? 4294901760 | n : n
    }, h.prototype.readInt32LE = function(t, e) {
      return t >>>= 0, e || S(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    }, h.prototype.readInt32BE = function(t, e) {
      return t >>>= 0, e || S(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    }, h.prototype.readFloatLE = function(t, e) {
      return t >>>= 0, e || S(t, 4, this.length), o.read(this, t, !0, 23, 4)
    }, h.prototype.readFloatBE = function(t, e) {
      return t >>>= 0, e || S(t, 4, this.length), o.read(this, t, !1, 23, 4)
    }, h.prototype.readDoubleLE = function(t, e) {
      return t >>>= 0, e || S(t, 8, this.length), o.read(this, t, !0, 52, 8)
    }, h.prototype.readDoubleBE = function(t, e) {
      return t >>>= 0, e || S(t, 8, this.length), o.read(this, t, !1, 52, 8)
    }, h.prototype.writeUIntLE = function(t, e, n, r) {
      (t = +t, e >>>= 0, n >>>= 0, r) || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
      var i = 1,
        o = 0;
      for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
      return e + n
    }, h.prototype.writeUIntBE = function(t, e, n, r) {
      (t = +t, e >>>= 0, n >>>= 0, r) || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
      var i = n - 1,
        o = 1;
      for (this[e + i] = 255 & t; 0 <= --i && (o *= 256);) this[e + i] = t / o & 255;
      return e + n
    }, h.prototype.writeUInt8 = function(t, e, n) {
      return t = +t, e >>>= 0, n || R(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
    }, h.prototype.writeUInt16LE = function(t, e, n) {
      return t = +t, e >>>= 0, n || R(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
    }, h.prototype.writeUInt16BE = function(t, e, n) {
      return t = +t, e >>>= 0, n || R(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
    }, h.prototype.writeUInt32LE = function(t, e, n) {
      return t = +t, e >>>= 0, n || R(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
    }, h.prototype.writeUInt32BE = function(t, e, n) {
      return t = +t, e >>>= 0, n || R(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
    }, h.prototype.writeIntLE = function(t, e, n, r) {
      if (t = +t, e >>>= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);
        R(this, t, e, n, i - 1, -i)
      }
      var o = 0,
        a = 1,
        s = 0;
      for (this[e] = 255 & t; ++o < n && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
      return e + n
    }, h.prototype.writeIntBE = function(t, e, n, r) {
      if (t = +t, e >>>= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);
        R(this, t, e, n, i - 1, -i)
      }
      var o = n - 1,
        a = 1,
        s = 0;
      for (this[e + o] = 255 & t; 0 <= --o && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
      return e + n
    }, h.prototype.writeInt8 = function(t, e, n) {
      return t = +t, e >>>= 0, n || R(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
    }, h.prototype.writeInt16LE = function(t, e, n) {
      return t = +t, e >>>= 0, n || R(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
    }, h.prototype.writeInt16BE = function(t, e, n) {
      return t = +t, e >>>= 0, n || R(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
    }, h.prototype.writeInt32LE = function(t, e, n) {
      return t = +t, e >>>= 0, n || R(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
    }, h.prototype.writeInt32BE = function(t, e, n) {
      return t = +t, e >>>= 0, n || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
    }, h.prototype.writeFloatLE = function(t, e, n) {
      return L(this, t, e, !0, n)
    }, h.prototype.writeFloatBE = function(t, e, n) {
      return L(this, t, e, !1, n)
    }, h.prototype.writeDoubleLE = function(t, e, n) {
      return M(this, t, e, !0, n)
    }, h.prototype.writeDoubleBE = function(t, e, n) {
      return M(this, t, e, !1, n)
    }, h.prototype.copy = function(t, e, n, r) {
      if (!h.isBuffer(t)) throw new TypeError("argument should be a Buffer");
      if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), 0 < r && r < n && (r = n), r === n) return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (e < 0) throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
      if (r < 0) throw new RangeError("sourceEnd out of bounds");
      r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
      var i = r - n;
      if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, n, r);
      else if (this === t && n < e && e < r)
        for (var o = i - 1; 0 <= o; --o) t[o + e] = this[o + n];
      else Uint8Array.prototype.set.call(t, this.subarray(n, r), e);
      return i
    }, h.prototype.fill = function(t, e, n, r) {
      if ("string" == typeof t) {
        if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
        if ("string" == typeof r && !h.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
        if (1 === t.length) {
          var i = t.charCodeAt(0);
          ("utf8" === r && i < 128 || "latin1" === r) && (t = i)
        }
      } else "number" == typeof t && (t &= 255);
      if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
      if (n <= e) return this;
      var o;
      if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
        for (o = e; o < n; ++o) this[o] = t;
      else {
        var a = h.isBuffer(t) ? t : h.from(t, r),
          s = a.length;
        if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (o = 0; o < n - e; ++o) this[o + e] = a[o % s]
      }
      return this
    };
    var B = /[^+/0-9A-Za-z-_]/g;

    function C(t) {
      return t < 16 ? "0" + t.toString(16) : t.toString(16)
    }

    function P(t, e) {
      var n;
      e = e || 1 / 0;
      for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
        if (55295 < (n = t.charCodeAt(a)) && n < 57344) {
          if (!i) {
            if (56319 < n) {
              -1 < (e -= 3) && o.push(239, 191, 189);
              continue
            }
            if (a + 1 === r) {
              -1 < (e -= 3) && o.push(239, 191, 189);
              continue
            }
            i = n;
            continue
          }
          if (n < 56320) {
            -1 < (e -= 3) && o.push(239, 191, 189), i = n;
            continue
          }
          n = 65536 + (i - 55296 << 10 | n - 56320)
        } else i && -1 < (e -= 3) && o.push(239, 191, 189);
        if (i = null, n < 128) {
          if ((e -= 1) < 0) break;
          o.push(n)
        } else if (n < 2048) {
          if ((e -= 2) < 0) break;
          o.push(n >> 6 | 192, 63 & n | 128)
        } else if (n < 65536) {
          if ((e -= 3) < 0) break;
          o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
        } else {
          if (!(n < 1114112)) throw new Error("Invalid code point");
          if ((e -= 4) < 0) break;
          o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
        }
      }
      return o
    }

    function O(t) {
      return r.toByteArray(function(t) {
        if ((t = (t = t.split("=")[0]).trim().replace(B, "")).length < 2) return "";
        for (; t.length % 4 != 0;) t += "=";
        return t
      }(t))
    }

    function F(t, e, n, r) {
      for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
      return i
    }

    function N(t, e) {
      return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
    }

    function q(t) {
      return t != t
    }
  }, {
    "base64-js": 36,
    ieee754: 186
  }],
  39: [function(t, e, n) {
    "use strict";
    var o = t("./lib/thunk.js");

    function a() {
      this.argTypes = [], this.shimArgs = [], this.arrayArgs = [], this.arrayBlockIndices = [], this.scalarArgs = [], this.offsetArgs = [], this.offsetArgIndex = [], this.indexArgs = [], this.shapeArgs = [], this.funcName = "", this.pre = null, this.body = null, this.post = null, this.debug = !1
    }
    e.exports = function(t) {
      var e = new a;
      e.pre = t.pre, e.body = t.body, e.post = t.post;
      var n = t.args.slice(0);
      e.argTypes = n;
      for (var r = 0; r < n.length; ++r) {
        var i = n[r];
        if ("array" === i || "object" == typeof i && i.blockIndices) {
          if (e.argTypes[r] = "array", e.arrayArgs.push(r), e.arrayBlockIndices.push(i.blockIndices ? i.blockIndices : 0), e.shimArgs.push("array" + r), r < e.pre.args.length && 0 < e.pre.args[r].count) throw new Error("cwise: pre() block may not reference array args");
          if (r < e.post.args.length && 0 < e.post.args[r].count) throw new Error("cwise: post() block may not reference array args")
        } else if ("scalar" === i) e.scalarArgs.push(r), e.shimArgs.push("scalar" + r);
        else if ("index" === i) {
          if (e.indexArgs.push(r), r < e.pre.args.length && 0 < e.pre.args[r].count) throw new Error("cwise: pre() block may not reference array index");
          if (r < e.body.args.length && e.body.args[r].lvalue) throw new Error("cwise: body() block may not write to array index");
          if (r < e.post.args.length && 0 < e.post.args[r].count) throw new Error("cwise: post() block may not reference array index")
        } else if ("shape" === i) {
          if (e.shapeArgs.push(r), r < e.pre.args.length && e.pre.args[r].lvalue) throw new Error("cwise: pre() block may not write to array shape");
          if (r < e.body.args.length && e.body.args[r].lvalue) throw new Error("cwise: body() block may not write to array shape");
          if (r < e.post.args.length && e.post.args[r].lvalue) throw new Error("cwise: post() block may not write to array shape")
        } else {
          if ("object" != typeof i || !i.offset) throw new Error("cwise: Unknown argument type " + n[r]);
          e.argTypes[r] = "offset", e.offsetArgs.push({
            array: i.array,
            offset: i.offset
          }), e.offsetArgIndex.push(r)
        }
      }
      if (e.arrayArgs.length <= 0) throw new Error("cwise: No array arguments specified");
      if (e.pre.args.length > n.length) throw new Error("cwise: Too many arguments in pre() block");
      if (e.body.args.length > n.length) throw new Error("cwise: Too many arguments in body() block");
      if (e.post.args.length > n.length) throw new Error("cwise: Too many arguments in post() block");
      return e.debug = !!t.printCode || !!t.debug, e.funcName = t.funcName || "cwise", e.blockSize = t.blockSize || 64, o(e)
    }
  }, {
    "./lib/thunk.js": 41
  }],
  40: [function(t, e, n) {
    "use strict";
    var w = t("uniq");

    function x(t, e, n) {
      var r, i, o = t.length,
        a = e.arrayArgs.length,
        s = 0 < e.indexArgs.length,
        c = [],
        u = [],
        l = 0,
        h = 0;
      for (r = 0; r < o; ++r) u.push(["i", r, "=0"].join(""));
      for (i = 0; i < a; ++i)
        for (r = 0; r < o; ++r) h = l, l = t[r], 0 === r ? u.push(["d", i, "s", r, "=t", i, "p", l].join("")) : u.push(["d", i, "s", r, "=(t", i, "p", l, "-s", h, "*t", i, "p", h, ")"].join(""));
      for (0 < u.length && c.push("var " + u.join(",")), r = o - 1; 0 <= r; --r) l = t[r], c.push(["for(i", r, "=0;i", r, "<s", l, ";++i", r, "){"].join(""));
      for (c.push(n), r = 0; r < o; ++r) {
        for (h = l, l = t[r], i = 0; i < a; ++i) c.push(["p", i, "+=d", i, "s", r].join(""));
        s && (0 < r && c.push(["index[", h, "]-=s", h].join("")), c.push(["++index[", l, "]"].join(""))), c.push("}")
      }
      return c.join("\n")
    }

    function T(t, e, n) {
      for (var r = t.body, i = [], o = [], a = 0; a < t.args.length; ++a) {
        var s = t.args[a];
        if (!(s.count <= 0)) {
          var c = new RegExp(s.name, "g"),
            u = "",
            l = e.arrayArgs.indexOf(a);
          switch (e.argTypes[a]) {
            case "offset":
              var h = e.offsetArgIndex.indexOf(a);
              l = e.offsetArgs[h].array, u = "+q" + h;
            case "array":
              u = "p" + l + u;
              var f = "l" + a,
                p = "a" + l;
              if (0 === e.arrayBlockIndices[l]) 1 === s.count ? "generic" === n[l] ? s.lvalue ? (i.push(["var ", f, "=", p, ".get(", u, ")"].join("")), r = r.replace(c, f), o.push([p, ".set(", u, ",", f, ")"].join(""))) : r = r.replace(c, [p, ".get(", u, ")"].join("")) : r = r.replace(c, [p, "[", u, "]"].join("")) : "generic" === n[l] ? (i.push(["var ", f, "=", p, ".get(", u, ")"].join("")), r = r.replace(c, f), s.lvalue && o.push([p, ".set(", u, ",", f, ")"].join(""))) : (i.push(["var ", f, "=", p, "[", u, "]"].join("")), r = r.replace(c, f), s.lvalue && o.push([p, "[", u, "]=", f].join("")));
              else {
                for (var d = [s.name], g = [u], v = 0; v < Math.abs(e.arrayBlockIndices[l]); v++) d.push("\\s*\\[([^\\]]+)\\]"), g.push("$" + (v + 1) + "*t" + l + "b" + v);
                if (c = new RegExp(d.join(""), "g"), u = g.join("+"), "generic" === n[l]) throw new Error("cwise: Generic arrays not supported in combination with blocks!");
                r = r.replace(c, [p, "[", u, "]"].join(""))
              }
              break;
            case "scalar":
              r = r.replace(c, "Y" + e.scalarArgs.indexOf(a));
              break;
            case "index":
              r = r.replace(c, "index");
              break;
            case "shape":
              r = r.replace(c, "shape")
          }
        }
      }
      return [i.join("\n"), r, o.join("\n")].join("\n").trim()
    }
    e.exports = function(t, e) {
      for (var n = e[1].length - Math.abs(t.arrayBlockIndices[0]) | 0, r = new Array(t.arrayArgs.length), i = new Array(t.arrayArgs.length), o = 0; o < t.arrayArgs.length; ++o) i[o] = e[2 * o], r[o] = e[2 * o + 1];
      var a = [],
        s = [],
        c = [],
        u = [],
        l = [];
      for (o = 0; o < t.arrayArgs.length; ++o) {
        t.arrayBlockIndices[o] < 0 ? (c.push(0), u.push(n), a.push(n), s.push(n + t.arrayBlockIndices[o])) : (c.push(t.arrayBlockIndices[o]), u.push(t.arrayBlockIndices[o] + n), a.push(0), s.push(t.arrayBlockIndices[o]));
        for (var h = [], f = 0; f < r[o].length; f++) c[o] <= r[o][f] && r[o][f] < u[o] && h.push(r[o][f] - c[o]);
        l.push(h)
      }
      var p = ["SS"],
        d = ["'use strict'"],
        g = [];
      for (f = 0; f < n; ++f) g.push(["s", f, "=SS[", f, "]"].join(""));
      for (o = 0; o < t.arrayArgs.length; ++o) {
        for (p.push("a" + o), p.push("t" + o), p.push("p" + o), f = 0; f < n; ++f) g.push(["t", o, "p", f, "=t", o, "[", c[o] + f, "]"].join(""));
        for (f = 0; f < Math.abs(t.arrayBlockIndices[o]); ++f) g.push(["t", o, "b", f, "=t", o, "[", a[o] + f, "]"].join(""))
      }
      for (o = 0; o < t.scalarArgs.length; ++o) p.push("Y" + o);
      if (0 < t.shapeArgs.length && g.push("shape=SS.slice(0)"), 0 < t.indexArgs.length) {
        var v = new Array(n);
        for (o = 0; o < n; ++o) v[o] = "0";
        g.push(["index=[", v.join(","), "]"].join(""))
      }
      for (o = 0; o < t.offsetArgs.length; ++o) {
        var m = t.offsetArgs[o],
          y = [];
        for (f = 0; f < m.offset.length; ++f) 0 !== m.offset[f] && (1 === m.offset[f] ? y.push(["t", m.array, "p", f].join("")) : y.push([m.offset[f], "*t", m.array, "p", f].join("")));
        0 === y.length ? g.push("q" + o + "=0") : g.push(["q", o, "=", y.join("+")].join(""))
      }
      var b = w([].concat(t.pre.thisVars).concat(t.body.thisVars).concat(t.post.thisVars));
      for (0 < (g = g.concat(b)).length && d.push("var " + g.join(",")), o = 0; o < t.arrayArgs.length; ++o) d.push("p" + o + "|=0");
      3 < t.pre.body.length && d.push(T(t.pre, t, i));
      var _ = T(t.body, t, i),
        E = function(t) {
          for (var e = 0, n = t[0].length; e < n;) {
            for (var r = 1; r < t.length; ++r)
              if (t[r][e] !== t[0][e]) return e;
            ++e
          }
          return e
        }(l);
      E < n ? d.push(function(t, e, n, r) {
        for (var i = e.length, o = n.arrayArgs.length, a = n.blockSize, s = 0 < n.indexArgs.length, c = [], u = 0; u < o; ++u) c.push(["var offset", u, "=p", u].join(""));
        for (u = t; u < i; ++u) c.push(["for(var j" + u + "=SS[", e[u], "]|0;j", u, ">0;){"].join("")), c.push(["if(j", u, "<", a, "){"].join("")), c.push(["s", e[u], "=j", u].join("")), c.push(["j", u, "=0"].join("")), c.push(["}else{s", e[u], "=", a].join("")), c.push(["j", u, "-=", a, "}"].join("")), s && c.push(["index[", e[u], "]=j", u].join(""));
        for (u = 0; u < o; ++u) {
          for (var l = ["offset" + u], h = t; h < i; ++h) l.push(["j", h, "*t", u, "p", e[h]].join(""));
          c.push(["p", u, "=(", l.join("+"), ")"].join(""))
        }
        for (c.push(x(e, n, r)), u = t; u < i; ++u) c.push("}");
        return c.join("\n")
      }(E, l[0], t, _)) : d.push(x(l[0], t, _)), 3 < t.post.body.length && d.push(T(t.post, t, i)), t.debug && console.log("-----Generated cwise routine for ", e, ":\n" + d.join("\n") + "\n----------");
      var A = [t.funcName || "unnamed", "_cwise_loop_", r[0].join("s"), "m", E, function(t) {
        for (var e = new Array(t.length), n = !0, r = 0; r < t.length; ++r) {
          var i = t[r],
            o = i.match(/\d+/);
          o = o ? o[0] : "", 0 === i.charAt(0) ? e[r] = "u" + i.charAt(1) + o : e[r] = i.charAt(0) + o, 0 < r && (n = n && e[r] === e[r - 1])
        }
        return n ? e[0] : e.join("")
      }(i)].join("");
      return new Function(["function ", A, "(", p.join(","), "){", d.join("\n"), "} return ", A].join(""))()
    }
  }, {
    uniq: 276
  }],
  41: [function(t, e, n) {
    "use strict";
    var h = t("./compile.js");
    e.exports = function(t) {
      var e = ["'use strict'", "var CACHED={}"],
        n = [],
        r = t.funcName + "_cwise_thunk";
      e.push(["return function ", r, "(", t.shimArgs.join(","), "){"].join(""));
      for (var i = [], o = [], a = [
          ["array", t.arrayArgs[0], ".shape.slice(", Math.max(0, t.arrayBlockIndices[0]), t.arrayBlockIndices[0] < 0 ? "," + t.arrayBlockIndices[0] + ")" : ")"].join("")
        ], s = [], c = [], u = 0; u < t.arrayArgs.length; ++u) {
        var l = t.arrayArgs[u];
        n.push(["t", l, "=array", l, ".dtype,", "r", l, "=array", l, ".order"].join("")), i.push("t" + l), i.push("r" + l), o.push("t" + l), o.push("r" + l + ".join()"), a.push("array" + l + ".data"), a.push("array" + l + ".stride"), a.push("array" + l + ".offset|0"), 0 < u && (s.push("array" + t.arrayArgs[0] + ".shape.length===array" + l + ".shape.length+" + (Math.abs(t.arrayBlockIndices[0]) - Math.abs(t.arrayBlockIndices[u]))), c.push("array" + t.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0, t.arrayBlockIndices[0]) + "]===array" + l + ".shape[shapeIndex+" + Math.max(0, t.arrayBlockIndices[u]) + "]"))
      }
      for (1 < t.arrayArgs.length && (e.push("if (!(" + s.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')"), e.push("for(var shapeIndex=array" + t.arrayArgs[0] + ".shape.length-" + Math.abs(t.arrayBlockIndices[0]) + "; shapeIndex--\x3e0;) {"), e.push("if (!(" + c.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')"), e.push("}")), u = 0; u < t.scalarArgs.length; ++u) a.push("scalar" + t.scalarArgs[u]);
      return n.push(["type=[", o.join(","), "].join()"].join("")), n.push("proc=CACHED[type]"), e.push("var " + n.join(",")), e.push(["if(!proc){", "CACHED[type]=proc=compile([", i.join(","), "])}", "return proc(", a.join(","), ")}"].join("")), t.debug && console.log("-----Generated thunk:\n" + e.join("\n") + "\n----------"), new Function("compile", e.join("\n"))(h.bind(void 0, t))
    }
  }, {
    "./compile.js": 40
  }],
  42: [function(t, e, n) {
    "use strict";
    var r, o = t("es5-ext/object/copy"),
      i = t("es5-ext/object/normalize-options"),
      a = t("es5-ext/object/valid-callable"),
      s = t("es5-ext/object/map"),
      c = t("es5-ext/object/valid-callable"),
      u = t("es5-ext/object/valid-value"),
      l = Function.prototype.bind,
      h = Object.defineProperty,
      f = Object.prototype.hasOwnProperty;
    r = function(t, e, n) {
      var r, i = u(e) && c(e.value);
      return delete(r = o(e)).writable, delete r.value, r.get = function() {
        return !n.overwriteDefinition && f.call(this, t) ? i : (e.value = l.call(i, n.resolveContext ? n.resolveContext(this) : this), h(this, t, e), this[t])
      }, r
    }, e.exports = function(t) {
      var n = i(arguments[1]);
      return null != n.resolveContext && a(n.resolveContext), s(t, function(t, e) {
        return r(e, t, n)
      })
    }
  }, {
    "es5-ext/object/copy": 66,
    "es5-ext/object/map": 75,
    "es5-ext/object/normalize-options": 76,
    "es5-ext/object/valid-callable": 81,
    "es5-ext/object/valid-value": 83
  }],
  43: [function(t, e, n) {
    "use strict";
    var s = t("es5-ext/object/assign"),
      c = t("es5-ext/object/normalize-options"),
      u = t("es5-ext/object/is-callable"),
      l = t("es5-ext/string/#/contains");
    (e.exports = function(t, e) {
      var n, r, i, o, a;
      return arguments.length < 2 || "string" != typeof t ? (o = e, e = t, t = null) : o = arguments[2], null == t ? (n = i = !0, r = !1) : (n = l.call(t, "c"), r = l.call(t, "e"), i = l.call(t, "w")), a = {
        value: e,
        configurable: n,
        enumerable: r,
        writable: i
      }, o ? s(c(o), a) : a
    }).gs = function(t, e, n) {
      var r, i, o, a;
      return "string" != typeof t ? (o = n, n = e, e = t, t = null) : o = arguments[3], null == e ? e = void 0 : u(e) ? null == n ? n = void 0 : u(n) || (o = n, n = void 0) : (o = e, e = n = void 0), i = null == t ? !(r = !0) : (r = l.call(t, "c"), l.call(t, "e")), a = {
        get: e,
        set: n,
        configurable: r,
        enumerable: i
      }, o ? s(c(o), a) : a
    }
  }, {
    "es5-ext/object/assign": 63,
    "es5-ext/object/is-callable": 69,
    "es5-ext/object/normalize-options": 76,
    "es5-ext/string/#/contains": 84
  }],
  44: [function(t, n, e) {
    ! function(t, e) {
      "use strict";
      "function" == typeof define && define.amd ? define(e) : "object" == typeof n && n.exports ? n.exports = e() : t.matchesSelector = e()
    }(window, function() {
      "use strict";
      var n = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
          var r = e[n] + "MatchesSelector";
          if (t[r]) return r
        }
      }();
      return function(t, e) {
        return t[n](e)
      }
    })
  }, {}],
  45: [function(t, e, n) {
    "use strict";
    e.exports = function(t, e) {
      switch (void 0 === e && (e = 0), typeof t) {
        case "number":
          if (0 < t) return function(t, e) {
            var n, r;
            for (n = new Array(t), r = 0; r < t; ++r) n[r] = e;
            return n
          }(0 | t, e);
          break;
        case "object":
          if ("number" == typeof t.length) return function t(e, n, r) {
            var i = 0 | e[r];
            if (i <= 0) return [];
            var o, a = new Array(i);
            if (r === e.length - 1)
              for (o = 0; o < i; ++o) a[o] = n;
            else
              for (o = 0; o < i; ++o) a[o] = t(e, n, r + 1);
            return a
          }(t, e, 0)
      }
      return []
    }
  }, {}],
  46: [function(t, e, n) {
    "use strict";
    var r = t("../../object/valid-value");
    e.exports = function() {
      return r(this).length = 0, this
    }
  }, {
    "../../object/valid-value": 83
  }],
  47: [function(t, e, n) {
    "use strict";
    var o = t("../../number/is-nan"),
      a = t("../../number/to-pos-integer"),
      s = t("../../object/valid-value"),
      c = Array.prototype.indexOf,
      u = Object.prototype.hasOwnProperty,
      l = Math.abs,
      h = Math.floor;
    e.exports = function(t) {
      var e, n, r, i;
      if (!o(t)) return c.apply(this, arguments);
      for (n = a(s(this).length), r = arguments[1], e = r = isNaN(r) ? 0 : 0 <= r ? h(r) : a(this.length) - h(l(r)); e < n; ++e)
        if (u.call(this, e) && (i = this[e], o(i))) return e;
      return -1
    }
  }, {
    "../../number/is-nan": 57,
    "../../number/to-pos-integer": 61,
    "../../object/valid-value": 83
  }],
  48: [function(t, e, n) {
    "use strict";
    e.exports = t("./is-implemented")() ? Array.from : t("./shim")
  }, {
    "./is-implemented": 49,
    "./shim": 50
  }],
  49: [function(t, e, n) {
    "use strict";
    e.exports = function() {
      var t, e, n = Array.from;
      return "function" == typeof n && (e = n(t = ["raz", "dwa"]), Boolean(e && e !== t && "dwa" === e[1]))
    }
  }, {}],
  50: [function(t, e, n) {
    "use strict";
    var p = t("es6-symbol").iterator,
      d = t("../../function/is-arguments"),
      g = t("../../function/is-function"),
      v = t("../../number/to-pos-integer"),
      m = t("../../object/valid-callable"),
      y = t("../../object/valid-value"),
      b = t("../../object/is-value"),
      _ = t("../../string/is-string"),
      E = Array.isArray,
      A = Function.prototype.call,
      w = {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: null
      },
      x = Object.defineProperty;
    e.exports = function(t) {
      var e, n, r, i, o, a, s, c, u, l, h = arguments[1],
        f = arguments[2];
      if (t = Object(y(t)), b(h) && m(h), this && this !== Array && g(this)) e = this;
      else {
        if (!h) {
          if (d(t)) return 1 !== (o = t.length) ? Array.apply(null, t) : ((i = new Array(1))[0] = t[0], i);
          if (E(t)) {
            for (i = new Array(o = t.length), n = 0; n < o; ++n) i[n] = t[n];
            return i
          }
        }
        i = []
      }
      if (!E(t))
        if (void 0 !== (u = t[p])) {
          for (s = m(u).call(t), e && (i = new e), c = s.next(), n = 0; !c.done;) l = h ? A.call(h, f, c.value, n) : c.value, e ? (w.value = l, x(i, n, w)) : i[n] = l, c = s.next(), ++n;
          o = n
        } else if (_(t)) {
        for (o = t.length, e && (i = new e), r = n = 0; n < o; ++n) l = t[n], n + 1 < o && 55296 <= (a = l.charCodeAt(0)) && a <= 56319 && (l += t[++n]), l = h ? A.call(h, f, l, r) : l, e ? (w.value = l, x(i, r, w)) : i[r] = l, ++r;
        o = r
      }
      if (void 0 === o)
        for (o = v(t.length), e && (i = new e(o)), n = 0; n < o; ++n) l = h ? A.call(h, f, t[n], n) : t[n], e ? (w.value = l, x(i, n, w)) : i[n] = l;
      return e && (w.value = null, i.length = o), i
    }
  }, {
    "../../function/is-arguments": 51,
    "../../function/is-function": 52,
    "../../number/to-pos-integer": 61,
    "../../object/is-value": 71,
    "../../object/valid-callable": 81,
    "../../object/valid-value": 83,
    "../../string/is-string": 87,
    "es6-symbol": 102
  }],
  51: [function(t, e, n) {
    "use strict";
    var r = Object.prototype.toString,
      i = r.call(function() {
        return arguments
      }());
    e.exports = function(t) {
      return r.call(t) === i
    }
  }, {}],
  52: [function(t, e, n) {
    "use strict";
    var r = Object.prototype.toString,
      i = r.call(t("./noop"));
    e.exports = function(t) {
      return "function" == typeof t && r.call(t) === i
    }
  }, {
    "./noop": 53
  }],
  53: [function(t, e, n) {
    "use strict";
    e.exports = function() {}
  }, {}],
  54: [function(t, e, n) {
    "use strict";
    e.exports = t("./is-implemented")() ? Math.sign : t("./shim")
  }, {
    "./is-implemented": 55,
    "./shim": 56
  }],
  55: [function(t, e, n) {
    "use strict";
    e.exports = function() {
      var t = Math.sign;
      return "function" == typeof t && (1 === t(10) && -1 === t(-20))
    }
  }, {}],
  56: [function(t, e, n) {
    "use strict";
    e.exports = function(t) {
      return t = Number(t), isNaN(t) || 0 === t ? t : 0 < t ? 1 : -1
    }
  }, {}],
  57: [function(t, e, n) {
    "use strict";
    e.exports = t("./is-implemented")() ? Number.isNaN : t("./shim")
  }, {
    "./is-implemented": 58,
    "./shim": 59
  }],
  58: [function(t, e, n) {
    "use strict";
    e.exports = function() {
      var t = Number.isNaN;
      return "function" == typeof t && (!t({}) && t(NaN) && !t(34))
    }
  }, {}],
  59: [function(t, e, n) {
    "use strict";
    e.exports = function(t) {
      return t != t
    }
  }, {}],
  60: [function(t, e, n) {
    "use strict";
    var r = t("../math/sign"),
      i = Math.abs,
      o = Math.floor;
    e.exports = function(t) {
      return isNaN(t) ? 0 : 0 !== (t = Number(t)) && isFinite(t) ? r(t) * o(i(t)) : t
    }
  }, {
    "../math/sign": 54
  }],
  61: [function(t, e, n) {
    "use strict";
    var r = t("./to-integer"),
      i = Math.max;
    e.exports = function(t) {
      return i(0, r(t))
    }
  }, {
    "./to-integer": 60
  }],
  62: [function(t, e, n) {
    "use strict";
    var s = t("./valid-callable"),
      c = t("./valid-value"),
      u = Function.prototype.bind,
      l = Function.prototype.call,
      h = Object.keys,
      f = Object.prototype.propertyIsEnumerable;
    e.exports = function(o, a) {
      return function(n, r) {
        var t, i = arguments[2],
          e = arguments[3];
        return n = Object(c(n)), s(r), t = h(n), e && t.sort("function" == typeof e ? u.call(e, n) : void 0), "function" != typeof o && (o = t[o]), l.call(o, t, function(t, e) {
          return f.call(n, t) ? l.call(r, i, n[t], t, n, e) : a
        })
      }
    }
  }, {
    "./valid-callable": 81,
    "./valid-value": 83
  }],
  63: [function(t, e, n) {
    "use strict";
    e.exports = t("./is-implemented")() ? Object.assign : t("./shim")
  }, {
    "./is-implemented": 64,
    "./shim": 65
  }],
  64: [function(t, e, n) {
    "use strict";
    e.exports = function() {
      var t, e = Object.assign;
      return "function" == typeof e && (e(t = {
        foo: "raz"
      }, {
        bar: "dwa"
      }, {
        trzy: "trzy"
      }), t.foo + t.bar + t.trzy === "razdwatrzy")
    }
  }, {}],
  65: [function(t, e, n) {
    "use strict";
    var a = t("../keys"),
      s = t("../valid-value"),
      c = Math.max;
    e.exports = function(e, n) {
      var r, t, i, o = c(arguments.length, 2);
      for (e = Object(s(e)), i = function(t) {
          try {
            e[t] = n[t]
          } catch (t) {
            r || (r = t)
          }
        }, t = 1; t < o; ++t) n = arguments[t], a(n).forEach(i);
      if (void 0 !== r) throw r;
      return e
    }
  }, {
    "../keys": 72,
    "../valid-value": 83
  }],
  66: [function(t, e, n) {
    "use strict";
    var o = t("../array/from"),
      a = t("./assign"),
      s = t("./valid-value");
    e.exports = function(e) {
      var t = Object(s(e)),
        n = arguments[1],
        r = Object(arguments[2]);
      if (t !== e && !n) return t;
      var i = {};
      return n ? o(n, function(t) {
        (r.ensure || t in e) && (i[t] = e[t])
      }) : a(i, e), i
    }
  }, {
    "../array/from": 48,
    "./assign": 63,
    "./valid-value": 83
  }],
  67: [function(t, e, n) {
    "use strict";
    var r, i, o, a, s = Object.create;
    t("./set-prototype-of/is-implemented")() || (r = t("./set-prototype-of/shim")), e.exports = r ? 1 !== r.level ? s : (a = {
      configurable: (o = {}, !1),
      enumerable: (i = {}, !1),
      writable: !0,
      value: void 0
    }, Object.getOwnPropertyNames(Object.prototype).forEach(function(t) {
      o[t] = "__proto__" !== t ? a : {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: void 0
      }
    }), Object.defineProperties(i, o), Object.defineProperty(r, "nullPolyfill", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: i
    }), function(t, e) {
      return s(null === t ? i : t, e)
    }) : s
  }, {
    "./set-prototype-of/is-implemented": 79,
    "./set-prototype-of/shim": 80
  }],
  68: [function(t, e, n) {
    "use strict";
    e.exports = t("./_iterate")("forEach")
  }, {
    "./_iterate": 62
  }],
  69: [function(t, e, n) {
    "use strict";
    e.exports = function(t) {
      return "function" == typeof t
    }
  }, {}],
  70: [function(t, e, n) {
    "use strict";
    var r = t("./is-value"),
      i = {
        function: !0,
        object: !0
      };
    e.exports = function(t) {
      return r(t) && i[typeof t] || !1
    }
  }, {
    "./is-value": 71
  }],
  71: [function(t, e, n) {
    "use strict";
    var r = t("../function/noop")();
    e.exports = function(t) {
      return t !== r && null !== t
    }
  }, {
    "../function/noop": 53
  }],
  72: [function(t, e, n) {
    "use strict";
    e.exports = t("./is-implemented")() ? Object.keys : t("./shim")
  }, {
    "./is-implemented": 73,
    "./shim": 74
  }],
  73: [function(t, e, n) {
    "use strict";
    e.exports = function() {
      try {
        return Object.keys("primitive"), !0
      } catch (t) {
        return !1
      }
    }
  }, {}],
  74: [function(t, e, n) {
    "use strict";
    var r = t("../is-value"),
      i = Object.keys;
    e.exports = function(t) {
      return i(r(t) ? Object(t) : t)
    }
  }, {
    "../is-value": 71
  }],
  75: [function(t, e, n) {
    "use strict";
    var r = t("./valid-callable"),
      s = t("./for-each"),
      c = Function.prototype.call;
    e.exports = function(t, i) {
      var o = {},
        a = arguments[2];
      return r(i), s(t, function(t, e, n, r) {
        o[e] = c.call(i, a, t, e, n, r)
      }), o
    }
  }, {
    "./for-each": 68,
    "./valid-callable": 81
  }],
  76: [function(t, e, n) {
    "use strict";
    var r = t("./is-value"),
      i = Array.prototype.forEach,
      o = Object.create;
    e.exports = function(t) {
      var e = o(null);
      return i.call(arguments, function(t) {
        r(t) && function(t, e) {
          var n;
          for (n in t) e[n] = t[n]
        }(Object(t), e)
      }), e
    }
  }, {
    "./is-value": 71
  }],
  77: [function(t, e, n) {
    "use strict";
    var r = Array.prototype.forEach,
      i = Object.create;
    e.exports = function(t) {
      var e = i(null);
      return r.call(arguments, function(t) {
        e[t] = !0
      }), e
    }
  }, {}],
  78: [function(t, e, n) {
    "use strict";
    e.exports = t("./is-implemented")() ? Object.setPrototypeOf : t("./shim")
  }, {
    "./is-implemented": 79,
    "./shim": 80
  }],
  79: [function(t, e, n) {
    "use strict";
    var r = Object.create,
      i = Object.getPrototypeOf,
      o = {};
    e.exports = function() {
      var t = Object.setPrototypeOf,
        e = arguments[0] || r;
      return "function" == typeof t && i(t(e(null), o)) === o
    }
  }, {}],
  80: [function(t, e, n) {
    "use strict";
    var i, r, o, a, s = t("../is-object"),
      c = t("../valid-value"),
      u = Object.prototype.isPrototypeOf,
      l = Object.defineProperty,
      h = {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: void 0
      };
    i = function(t, e) {
      if (c(t), null === e || s(e)) return t;
      throw new TypeError("Prototype must be null or an object")
    }, e.exports = (r = function() {
      var t, e = Object.create(null),
        n = {},
        r = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
      if (r) {
        try {
          (t = r.set).call(e, n)
        } catch (t) {}
        if (Object.getPrototypeOf(e) === n) return {
          set: t,
          level: 2
        }
      }
      return e.__proto__ = n, Object.getPrototypeOf(e) === n ? {
        level: 2
      } : ((e = {}).__proto__ = n, Object.getPrototypeOf(e) === n && {
        level: 1
      })
    }()) ? (o = 2 === r.level ? r.set ? (a = r.set, function(t, e) {
      return a.call(i(t, e), e), t
    }) : function(t, e) {
      return i(t, e).__proto__ = e, t
    } : function t(e, n) {
      var r;
      return i(e, n), (r = u.call(t.nullPolyfill, e)) && delete t.nullPolyfill.__proto__, null === n && (n = t.nullPolyfill), e.__proto__ = n, r && l(t.nullPolyfill, "__proto__", h), e
    }, Object.defineProperty(o, "level", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: r.level
    })) : null, t("../create")
  }, {
    "../create": 67,
    "../is-object": 70,
    "../valid-value": 83
  }],
  81: [function(t, e, n) {
    "use strict";
    e.exports = function(t) {
      if ("function" != typeof t) throw new TypeError(t + " is not a function");
      return t
    }
  }, {}],
  82: [function(t, e, n) {
    "use strict";
    var r = t("./is-object");
    e.exports = function(t) {
      if (!r(t)) throw new TypeError(t + " is not an Object");
      return t
    }
  }, {
    "./is-object": 70
  }],
  83: [function(t, e, n) {
    "use strict";
    var r = t("./is-value");
    e.exports = function(t) {
      if (!r(t)) throw new TypeError("Cannot use null or undefined");
      return t
    }
  }, {
    "./is-value": 71
  }],
  84: [function(t, e, n) {
    "use strict";
    e.exports = t("./is-implemented")() ? String.prototype.contains : t("./shim")
  }, {
    "./is-implemented": 85,
    "./shim": 86
  }],
  85: [function(t, e, n) {
    "use strict";
    var r = "razdwatrzy";
    e.exports = function() {
      return "function" == typeof r.contains && (!0 === r.contains("dwa") && !1 === r.contains("foo"))
    }
  }, {}],
  86: [function(t, e, n) {
    "use strict";
    var r = String.prototype.indexOf;
    e.exports = function(t) {
      return -1 < r.call(this, t, arguments[1])
    }
  }, {}],
  87: [function(t, e, n) {
    "use strict";
    var r = Object.prototype.toString,
      i = r.call("");
    e.exports = function(t) {
      return "string" == typeof t || t && "object" == typeof t && (t instanceof String || r.call(t) === i) || !1
    }
  }, {}],
  88: [function(t, e, n) {
    "use strict";
    var r = Object.create(null),
      i = Math.random;
    e.exports = function() {
      for (var t; t = i().toString(36).slice(2), r[t];);
      return t
    }
  }, {}],
  89: [function(t, e, n) {
    "use strict";
    var r, i = t("es5-ext/object/set-prototype-of"),
      o = t("es5-ext/string/#/contains"),
      a = t("d"),
      s = t("es6-symbol"),
      c = t("./"),
      u = Object.defineProperty;
    r = e.exports = function(t, e) {
      if (!(this instanceof r)) throw new TypeError("Constructor requires 'new'");
      c.call(this, t), e = e ? o.call(e, "key+value") ? "key+value" : o.call(e, "key") ? "key" : "value" : "value", u(this, "__kind__", a("", e))
    }, i && i(r, c), delete r.prototype.constructor, r.prototype = Object.create(c.prototype, {
      _resolve: a(function(t) {
        return "value" === this.__kind__ ? this.__list__[t] : "key+value" === this.__kind__ ? [t, this.__list__[t]] : t
      })
    }), u(r.prototype, s.toStringTag, a("c", "Array Iterator"))
  }, {
    "./": 92,
    d: 43,
    "es5-ext/object/set-prototype-of": 78,
    "es5-ext/string/#/contains": 84,
    "es6-symbol": 102
  }],
  90: [function(t, e, n) {
    "use strict";
    var h = t("es5-ext/function/is-arguments"),
      f = t("es5-ext/object/valid-callable"),
      p = t("es5-ext/string/is-string"),
      d = t("./get"),
      g = Array.isArray,
      v = Function.prototype.call,
      m = Array.prototype.some;
    e.exports = function(t, e) {
      var n, r, i, o, a, s, c, u, l = arguments[2];
      if (g(t) || h(t) ? n = "array" : p(t) ? n = "string" : t = d(t), f(e), i = function() {
          o = !0
        }, "array" !== n)
        if ("string" !== n)
          for (r = t.next(); !r.done;) {
            if (v.call(e, l, r.value, i), o) return;
            r = t.next()
          } else
            for (s = t.length, a = 0; a < s && (c = t[a], a + 1 < s && 55296 <= (u = c.charCodeAt(0)) && u <= 56319 && (c += t[++a]), v.call(e, l, c, i), !o); ++a);
        else m.call(t, function(t) {
          return v.call(e, l, t, i), o
        })
    }
  }, {
    "./get": 91,
    "es5-ext/function/is-arguments": 51,
    "es5-ext/object/valid-callable": 81,
    "es5-ext/string/is-string": 87
  }],
  91: [function(t, e, n) {
    "use strict";
    var r = t("es5-ext/function/is-arguments"),
      i = t("es5-ext/string/is-string"),
      o = t("./array"),
      a = t("./string"),
      s = t("./valid-iterable"),
      c = t("es6-symbol").iterator;
    e.exports = function(t) {
      return "function" == typeof s(t)[c] ? t[c]() : r(t) ? new o(t) : i(t) ? new a(t) : new o(t)
    }
  }, {
    "./array": 89,
    "./string": 94,
    "./valid-iterable": 95,
    "es5-ext/function/is-arguments": 51,
    "es5-ext/string/is-string": 87,
    "es6-symbol": 102
  }],
  92: [function(t, e, n) {
    "use strict";
    var r, i = t("es5-ext/array/#/clear"),
      o = t("es5-ext/object/assign"),
      a = t("es5-ext/object/valid-callable"),
      s = t("es5-ext/object/valid-value"),
      c = t("d"),
      u = t("d/auto-bind"),
      l = t("es6-symbol"),
      h = Object.defineProperty,
      f = Object.defineProperties;
    e.exports = r = function(t, e) {
      if (!(this instanceof r)) throw new TypeError("Constructor requires 'new'");
      f(this, {
        __list__: c("w", s(t)),
        __context__: c("w", e),
        __nextIndex__: c("w", 0)
      }), e && (a(e.on), e.on("_add", this._onAdd), e.on("_delete", this._onDelete), e.on("_clear", this._onClear))
    }, delete r.prototype.constructor, f(r.prototype, o({
      _next: c(function() {
        var t;
        if (this.__list__) return this.__redo__ && void 0 !== (t = this.__redo__.shift()) ? t : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind()
      }),
      next: c(function() {
        return this._createResult(this._next())
      }),
      _createResult: c(function(t) {
        return void 0 === t ? {
          done: !0,
          value: void 0
        } : {
          done: !1,
          value: this._resolve(t)
        }
      }),
      _resolve: c(function(t) {
        return this.__list__[t]
      }),
      _unBind: c(function() {
        this.__list__ = null, delete this.__redo__, this.__context__ && (this.__context__.off("_add", this._onAdd), this.__context__.off("_delete", this._onDelete), this.__context__.off("_clear", this._onClear), this.__context__ = null)
      }),
      toString: c(function() {
        return "[object " + (this[l.toStringTag] || "Object") + "]"
      })
    }, u({
      _onAdd: c(function(n) {
        n >= this.__nextIndex__ || (++this.__nextIndex__, this.__redo__ ? (this.__redo__.forEach(function(t, e) {
          n <= t && (this.__redo__[e] = ++t)
        }, this), this.__redo__.push(n)) : h(this, "__redo__", c("c", [n])))
      }),
      _onDelete: c(function(n) {
        var t;
        n >= this.__nextIndex__ || (--this.__nextIndex__, this.__redo__ && (-1 !== (t = this.__redo__.indexOf(n)) && this.__redo__.splice(t, 1), this.__redo__.forEach(function(t, e) {
          n < t && (this.__redo__[e] = --t)
        }, this)))
      }),
      _onClear: c(function() {
        this.__redo__ && i.call(this.__redo__), this.__nextIndex__ = 0
      })
    }))), h(r.prototype, l.iterator, c(function() {
      return this
    }))
  }, {
    d: 43,
    "d/auto-bind": 42,
    "es5-ext/array/#/clear": 46,
    "es5-ext/object/assign": 63,
    "es5-ext/object/valid-callable": 81,
    "es5-ext/object/valid-value": 83,
    "es6-symbol": 102
  }],
  93: [function(t, e, n) {
    "use strict";
    var r = t("es5-ext/function/is-arguments"),
      i = t("es5-ext/object/is-value"),
      o = t("es5-ext/string/is-string"),
      a = t("es6-symbol").iterator,
      s = Array.isArray;
    e.exports = function(t) {
      return !!i(t) && (!!s(t) || (!!o(t) || (!!r(t) || "function" == typeof t[a])))
    }
  }, {
    "es5-ext/function/is-arguments": 51,
    "es5-ext/object/is-value": 71,
    "es5-ext/string/is-string": 87,
    "es6-symbol": 102
  }],
  94: [function(t, e, n) {
    "use strict";
    var r, i = t("es5-ext/object/set-prototype-of"),
      o = t("d"),
      a = t("es6-symbol"),
      s = t("./"),
      c = Object.defineProperty;
    r = e.exports = function(t) {
      if (!(this instanceof r)) throw new TypeError("Constructor requires 'new'");
      t = String(t), s.call(this, t), c(this, "__length__", o("", t.length))
    }, i && i(r, s), delete r.prototype.constructor, r.prototype = Object.create(s.prototype, {
      _next: o(function() {
        if (this.__list__) return this.__nextIndex__ < this.__length__ ? this.__nextIndex__++ : void this._unBind()
      }),
      _resolve: o(function(t) {
        var e, n = this.__list__[t];
        return this.__nextIndex__ === this.__length__ ? n : 55296 <= (e = n.charCodeAt(0)) && e <= 56319 ? n + this.__list__[this.__nextIndex__++] : n
      })
    }), c(r.prototype, a.toStringTag, o("c", "String Iterator"))
  }, {
    "./": 92,
    d: 43,
    "es5-ext/object/set-prototype-of": 78,
    "es6-symbol": 102
  }],
  95: [function(t, e, n) {
    "use strict";
    var r = t("./is-iterable");
    e.exports = function(t) {
      if (!r(t)) throw new TypeError(t + " is not iterable");
      return t
    }
  }, {
    "./is-iterable": 93
  }],
  96: [function(t, e, n) {
    "use strict";
    e.exports = t("./is-implemented")() ? Map : t("./polyfill")
  }, {
    "./is-implemented": 97,
    "./polyfill": 101
  }],
  97: [function(t, e, n) {
    "use strict";
    e.exports = function() {
      var t, e;
      if ("function" != typeof Map) return !1;
      try {
        t = new Map([
          ["raz", "one"],
          ["dwa", "two"],
          ["trzy", "three"]
        ])
      } catch (t) {
        return !1
      }
      return "[object Map]" === String(t) && (3 === t.size && ("function" == typeof t.clear && ("function" == typeof t.delete && ("function" == typeof t.entries && ("function" == typeof t.forEach && ("function" == typeof t.get && ("function" == typeof t.has && ("function" == typeof t.keys && ("function" == typeof t.set && ("function" == typeof t.values && (!1 === (e = t.entries().next()).done && (!!e.value && ("raz" === e.value[0] && "one" === e.value[1])))))))))))))
    }
  }, {}],
  98: [function(t, e, n) {
    "use strict";
    e.exports = "undefined" != typeof Map && "[object Map]" === Object.prototype.toString.call(new Map)
  }, {}],
  99: [function(t, e, n) {
    "use strict";
    e.exports = t("es5-ext/object/primitive-set")("key", "value", "key+value")
  }, {
    "es5-ext/object/primitive-set": 77
  }],
  100: [function(t, e, n) {
    "use strict";
    var r, i = t("es5-ext/object/set-prototype-of"),
      o = t("d"),
      a = t("es6-iterator"),
      s = t("es6-symbol").toStringTag,
      c = t("./iterator-kinds"),
      u = Object.defineProperties,
      l = a.prototype._unBind;
    r = e.exports = function(t, e) {
      if (!(this instanceof r)) return new r(t, e);
      a.call(this, t.__mapKeysData__, t), e && c[e] || (e = "key+value"), u(this, {
        __kind__: o("", e),
        __values__: o("w", t.__mapValuesData__)
      })
    }, i && i(r, a), r.prototype = Object.create(a.prototype, {
      constructor: o(r),
      _resolve: o(function(t) {
        return "value" === this.__kind__ ? this.__values__[t] : "key" === this.__kind__ ? this.__list__[t] : [this.__list__[t], this.__values__[t]]
      }),
      _unBind: o(function() {
        this.__values__ = null, l.call(this)
      }),
      toString: o(function() {
        return "[object Map Iterator]"
      })
    }), Object.defineProperty(r.prototype, s, o("c", "Map Iterator"))
  }, {
    "./iterator-kinds": 99,
    d: 43,
    "es5-ext/object/set-prototype-of": 78,
    "es6-iterator": 92,
    "es6-symbol": 102
  }],
  101: [function(t, e, n) {
    "use strict";
    var i, r = t("es5-ext/array/#/clear"),
      o = t("es5-ext/array/#/e-index-of"),
      a = t("es5-ext/object/set-prototype-of"),
      s = t("es5-ext/object/valid-callable"),
      c = t("es5-ext/object/valid-value"),
      u = t("d"),
      l = t("event-emitter"),
      h = t("es6-symbol"),
      f = t("es6-iterator/valid-iterable"),
      p = t("es6-iterator/for-of"),
      d = t("./lib/iterator"),
      g = t("./is-native-implemented"),
      v = Function.prototype.call,
      m = Object.defineProperties,
      y = Object.getPrototypeOf;
    e.exports = i = function() {
      var n, r, t, e = arguments[0];
      if (!(this instanceof i)) throw new TypeError("Constructor requires 'new'");
      return t = g && a && Map !== i ? a(new Map, y(this)) : this, null != e && f(e), m(t, {
        __mapKeysData__: u("c", n = []),
        __mapValuesData__: u("c", r = [])
      }), e && p(e, function(t) {
        var e = c(t)[0];
        t = t[1], -1 === o.call(n, e) && (n.push(e), r.push(t))
      }, t), t
    }, g && (a && a(i, Map), i.prototype = Object.create(Map.prototype, {
      constructor: u(i)
    })), l(m(i.prototype, {
      clear: u(function() {
        this.__mapKeysData__.length && (r.call(this.__mapKeysData__), r.call(this.__mapValuesData__), this.emit("_clear"))
      }),
      delete: u(function(t) {
        var e = o.call(this.__mapKeysData__, t);
        return -1 !== e && (this.__mapKeysData__.splice(e, 1), this.__mapValuesData__.splice(e, 1), this.emit("_delete", e, t), !0)
      }),
      entries: u(function() {
        return new d(this, "key+value")
      }),
      forEach: u(function(t) {
        var e, n, r = arguments[1];
        for (s(t), n = (e = this.entries())._next(); void 0 !== n;) v.call(t, r, this.__mapValuesData__[n], this.__mapKeysData__[n], this), n = e._next()
      }),
      get: u(function(t) {
        var e = o.call(this.__mapKeysData__, t);
        if (-1 !== e) return this.__mapValuesData__[e]
      }),
      has: u(function(t) {
        return -1 !== o.call(this.__mapKeysData__, t)
      }),
      keys: u(function() {
        return new d(this, "key")
      }),
      set: u(function(t, e) {
        var n, r = o.call(this.__mapKeysData__, t);
        return -1 === r && (r = this.__mapKeysData__.push(t) - 1, n = !0), this.__mapValuesData__[r] = e, n && this.emit("_add", r, t), this
      }),
      size: u.gs(function() {
        return this.__mapKeysData__.length
      }),
      values: u(function() {
        return new d(this, "value")
      }),
      toString: u(function() {
        return "[object Map]"
      })
    })), Object.defineProperty(i.prototype, h.iterator, u(function() {
      return this.entries()
    })), Object.defineProperty(i.prototype, h.toStringTag, u("c", "Map"))
  }, {
    "./is-native-implemented": 98,
    "./lib/iterator": 100,
    d: 43,
    "es5-ext/array/#/clear": 46,
    "es5-ext/array/#/e-index-of": 47,
    "es5-ext/object/set-prototype-of": 78,
    "es5-ext/object/valid-callable": 81,
    "es5-ext/object/valid-value": 83,
    "es6-iterator/for-of": 90,
    "es6-iterator/valid-iterable": 95,
    "es6-symbol": 102,
    "event-emitter": 112
  }],
  102: [function(t, e, n) {
    "use strict";
    e.exports = t("./is-implemented")() ? Symbol : t("./polyfill")
  }, {
    "./is-implemented": 103,
    "./polyfill": 105
  }],
  103: [function(t, e, n) {
    "use strict";
    var r = {
      object: !0,
      symbol: !0
    };
    e.exports = function() {
      var t;
      if ("function" != typeof Symbol) return !1;
      t = Symbol("test symbol");
      try {
        String(t)
      } catch (t) {
        return !1
      }
      return !!r[typeof Symbol.iterator] && (!!r[typeof Symbol.toPrimitive] && !!r[typeof Symbol.toStringTag])
    }
  }, {}],
  104: [function(t, e, n) {
    "use strict";
    e.exports = function(t) {
      return !!t && ("symbol" == typeof t || !!t.constructor && ("Symbol" === t.constructor.name && "Symbol" === t[t.constructor.toStringTag]))
    }
  }, {}],
  105: [function(t, e, n) {
    "use strict";
    var r, i, o, a, s = t("d"),
      c = t("./validate-symbol"),
      u = Object.create,
      l = Object.defineProperties,
      h = Object.defineProperty,
      f = Object.prototype,
      p = u(null);
    if ("function" == typeof Symbol) {
      r = Symbol;
      try {
        String(r()), a = !0
      } catch (t) {}
    }
    var d, g = (d = u(null), function(t) {
      for (var e, n, r = 0; d[t + (r || "")];) ++r;
      return d[t += r || ""] = !0, h(f, e = "@@" + t, s.gs(null, function(t) {
        n || (n = !0, h(this, e, s(t)), n = !1)
      })), e
    });
    o = function(t) {
      if (this instanceof o) throw new TypeError("Symbol is not a constructor");
      return i(t)
    }, e.exports = i = function t(e) {
      var n;
      if (this instanceof t) throw new TypeError("Symbol is not a constructor");
      return a ? r(e) : (n = u(o.prototype), e = void 0 === e ? "" : String(e), l(n, {
        __description__: s("", e),
        __name__: s("", g(e))
      }))
    }, l(i, {
      for: s(function(t) {
        return p[t] ? p[t] : p[t] = i(String(t))
      }),
      keyFor: s(function(t) {
        var e;
        for (e in c(t), p)
          if (p[e] === t) return e
      }),
      hasInstance: s("", r && r.hasInstance || i("hasInstance")),
      isConcatSpreadable: s("", r && r.isConcatSpreadable || i("isConcatSpreadable")),
      iterator: s("", r && r.iterator || i("iterator")),
      match: s("", r && r.match || i("match")),
      replace: s("", r && r.replace || i("replace")),
      search: s("", r && r.search || i("search")),
      species: s("", r && r.species || i("species")),
      split: s("", r && r.split || i("split")),
      toPrimitive: s("", r && r.toPrimitive || i("toPrimitive")),
      toStringTag: s("", r && r.toStringTag || i("toStringTag")),
      unscopables: s("", r && r.unscopables || i("unscopables"))
    }), l(o.prototype, {
      constructor: s(i),
      toString: s("", function() {
        return this.__name__
      })
    }), l(i.prototype, {
      toString: s(function() {
        return "Symbol (" + c(this).__description__ + ")"
      }),
      valueOf: s(function() {
        return c(this)
      })
    }), h(i.prototype, i.toPrimitive, s("", function() {
      var t = c(this);
      return "symbol" == typeof t ? t : t.toString()
    })), h(i.prototype, i.toStringTag, s("c", "Symbol")), h(o.prototype, i.toStringTag, s("c", i.prototype[i.toStringTag])), h(o.prototype, i.toPrimitive, s("c", i.prototype[i.toPrimitive]))
  }, {
    "./validate-symbol": 106,
    d: 43
  }],
  106: [function(t, e, n) {
    "use strict";
    var r = t("./is-symbol");
    e.exports = function(t) {
      if (!r(t)) throw new TypeError(t + " is not a symbol");
      return t
    }
  }, {
    "./is-symbol": 104
  }],
  107: [function(t, e, n) {
    "use strict";
    e.exports = t("./is-implemented")() ? WeakMap : t("./polyfill")
  }, {
    "./is-implemented": 108,
    "./polyfill": 110
  }],
  108: [function(t, e, n) {
    "use strict";
    e.exports = function() {
      var t, e;
      if ("function" != typeof WeakMap) return !1;
      try {
        t = new WeakMap([
          [e = {}, "one"],
          [{}, "two"],
          [{}, "three"]
        ])
      } catch (t) {
        return !1
      }
      return "[object WeakMap]" === String(t) && ("function" == typeof t.set && (t.set({}, 1) === t && ("function" == typeof t.delete && ("function" == typeof t.has && "one" === t.get(e)))))
    }
  }, {}],
  109: [function(t, e, n) {
    "use strict";
    e.exports = "function" == typeof WeakMap && "[object WeakMap]" === Object.prototype.toString.call(new WeakMap)
  }, {}],
  110: [function(t, e, n) {
    "use strict";
    var r, i = t("es5-ext/object/set-prototype-of"),
      o = t("es5-ext/object/valid-object"),
      a = t("es5-ext/object/valid-value"),
      s = t("es5-ext/string/random-uniq"),
      c = t("d"),
      u = t("es6-iterator/get"),
      l = t("es6-iterator/for-of"),
      h = t("es6-symbol").toStringTag,
      f = t("./is-native-implemented"),
      p = Array.isArray,
      d = Object.defineProperty,
      g = Object.prototype.hasOwnProperty,
      v = Object.getPrototypeOf;
    e.exports = r = function() {
      var e, t = arguments[0];
      if (!(this instanceof r)) throw new TypeError("Constructor requires 'new'");
      return e = f && i && WeakMap !== r ? i(new WeakMap, v(this)) : this, null != t && (p(t) || (t = u(t))), d(e, "__weakMapData__", c("c", "$weakMap$" + s())), t && l(t, function(t) {
        a(t), e.set(t[0], t[1])
      }), e
    }, f && (i && i(r, WeakMap), r.prototype = Object.create(WeakMap.prototype, {
      constructor: c(r)
    })), Object.defineProperties(r.prototype, {
      delete: c(function(t) {
        return !!g.call(o(t), this.__weakMapData__) && (delete t[this.__weakMapData__], !0)
      }),
      get: c(function(t) {
        if (g.call(o(t), this.__weakMapData__)) return t[this.__weakMapData__]
      }),
      has: c(function(t) {
        return g.call(o(t), this.__weakMapData__)
      }),
      set: c(function(t, e) {
        return d(o(t), this.__weakMapData__, c("c", e)), this
      }),
      toString: c(function() {
        return "[object WeakMap]"
      })
    }), d(r.prototype, h, c("c", "WeakMap"))
  }, {
    "./is-native-implemented": 109,
    d: 43,
    "es5-ext/object/set-prototype-of": 78,
    "es5-ext/object/valid-object": 82,
    "es5-ext/object/valid-value": 83,
    "es5-ext/string/random-uniq": 88,
    "es6-iterator/for-of": 90,
    "es6-iterator/get": 91,
    "es6-symbol": 102
  }],
  111: [function(t, e, n) {
    var r, i;
    r = "undefined" != typeof window ? window : this, i = function() {
      "use strict";

      function t() {}
      var e = t.prototype;
      return e.on = function(t, e) {
        if (t && e) {
          var n = this._events = this._events || {},
            r = n[t] = n[t] || [];
          return -1 == r.indexOf(e) && r.push(e), this
        }
      }, e.once = function(t, e) {
        if (t && e) {
          this.on(t, e);
          var n = this._onceEvents = this._onceEvents || {};
          return (n[t] = n[t] || {})[e] = !0, this
        }
      }, e.off = function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          var r = n.indexOf(e);
          return -1 != r && n.splice(r, 1), this
        }
      }, e.emitEvent = function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
          n = n.slice(0), e = e || [];
          for (var r = this._onceEvents && this._onceEvents[t], i = 0; i < n.length; i++) {
            var o = n[i];
            r && r[o] && (this.off(t, o), delete r[o]), o.apply(this, e)
          }
          return this
        }
      }, e.allOff = function() {
        delete this._events, delete this._onceEvents
      }, t
    }, "function" == typeof define && define.amd ? define(i) : "object" == typeof e && e.exports ? e.exports = i() : r.EvEmitter = i()
  }, {}],
  112: [function(t, e, n) {
    "use strict";
    var i, r, o, a, s, c, u, l = t("d"),
      h = t("es5-ext/object/valid-callable"),
      f = Function.prototype.apply,
      p = Function.prototype.call,
      d = Object.create,
      g = Object.defineProperty,
      v = Object.defineProperties,
      m = Object.prototype.hasOwnProperty,
      y = {
        configurable: !0,
        enumerable: !1,
        writable: !0
      };
    r = function(t, e) {
      var n, r;
      return h(e), i.call(r = this, t, n = function() {
        o.call(r, t, n), f.call(e, this, arguments)
      }), n.__eeOnceListener__ = e, this
    }, s = {
      on: i = function(t, e) {
        var n;
        return h(e), m.call(this, "__ee__") ? n = this.__ee__ : (n = y.value = d(null), g(this, "__ee__", y), y.value = null), n[t] ? "object" == typeof n[t] ? n[t].push(e) : n[t] = [n[t], e] : n[t] = e, this
      },
      once: r,
      off: o = function(t, e) {
        var n, r, i, o;
        if (h(e), !m.call(this, "__ee__")) return this;
        if (!(n = this.__ee__)[t]) return this;
        if ("object" == typeof(r = n[t]))
          for (o = 0; i = r[o]; ++o) i !== e && i.__eeOnceListener__ !== e || (2 === r.length ? n[t] = r[o ? 0 : 1] : r.splice(o, 1));
        else r !== e && r.__eeOnceListener__ !== e || delete n[t];
        return this
      },
      emit: a = function(t) {
        var e, n, r, i, o;
        if (m.call(this, "__ee__") && (i = this.__ee__[t]))
          if ("object" == typeof i) {
            for (n = arguments.length, o = new Array(n - 1), e = 1; e < n; ++e) o[e - 1] = arguments[e];
            for (i = i.slice(), e = 0; r = i[e]; ++e) f.call(r, this, o)
          } else switch (arguments.length) {
            case 1:
              p.call(i, this);
              break;
            case 2:
              p.call(i, this, arguments[1]);
              break;
            case 3:
              p.call(i, this, arguments[1], arguments[2]);
              break;
            default:
              for (n = arguments.length, o = new Array(n - 1), e = 1; e < n; ++e) o[e - 1] = arguments[e];
              f.call(i, this, o)
          }
      }
    }, c = {
      on: l(i),
      once: l(r),
      off: l(o),
      emit: l(a)
    }, u = v({}, c), e.exports = n = function(t) {
      return null == t ? d(u) : v(Object(t), c)
    }, n.methods = s
  }, {
    d: 43,
    "es5-ext/object/valid-callable": 81
  }],
  113: [function(t, e, n) {
    var r, i;
    r = window, i = function(u, o) {
      "use strict";
      var l = {
          extend: function(t, e) {
            for (var n in e) t[n] = e[n];
            return t
          },
          modulo: function(t, e) {
            return (t % e + e) % e
          }
        },
        e = Array.prototype.slice;
      l.makeArray = function(t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
      }, l.removeFrom = function(t, e) {
        var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
      }, l.getParent = function(t, e) {
        for (; t.parentNode && t != document.body;)
          if (t = t.parentNode, o(t, e)) return t
      }, l.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
      }, l.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
      }, l.filterFindElements = function(t, r) {
        t = l.makeArray(t);
        var i = [];
        return t.forEach(function(t) {
          if (t instanceof HTMLElement)
            if (r) {
              o(t, r) && i.push(t);
              for (var e = t.querySelectorAll(r), n = 0; n < e.length; n++) i.push(e[n])
            } else i.push(t)
        }), i
      }, l.debounceMethod = function(t, e, r) {
        r = r || 100;
        var i = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function() {
          var t = this[o];
          clearTimeout(t);
          var e = arguments,
            n = this;
          this[o] = setTimeout(function() {
            i.apply(n, e), delete n[o]
          }, r)
        }
      }, l.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
      }, l.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, n) {
          return e + "-" + n
        }).toLowerCase()
      };
      var h = u.console;
      return l.htmlInit = function(s, c) {
        l.docReady(function() {
          var t = l.toDashed(c),
            i = "data-" + t,
            e = document.querySelectorAll("[" + i + "]"),
            n = document.querySelectorAll(".js-" + t),
            r = l.makeArray(e).concat(l.makeArray(n)),
            o = i + "-options",
            a = u.jQuery;
          r.forEach(function(e) {
            var t, n = e.getAttribute(i) || e.getAttribute(o);
            try {
              t = n && JSON.parse(n)
            } catch (t) {
              return void(h && h.error("Error parsing " + i + " on " + e.className + ": " + t))
            }
            var r = new s(e, t);
            a && a.data(e, c, r)
          })
        })
      }, l
    }, "function" == typeof define && define.amd ? define(["desandro-matches-selector/matches-selector"], function(t) {
      return i(r, t)
    }) : "object" == typeof e && e.exports ? e.exports = i(r, t("desandro-matches-selector")) : r.fizzyUIUtils = i(r, r.matchesSelector)
  }, {
    "desandro-matches-selector": 44
  }],
  114: [function(t, e, n) {
    var r, i;
    r = window, i = function() {
      "use strict";

      function m(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
      }
      var n = "undefined" == typeof console ? function() {} : function(t) {
          console.error(t)
        },
        y = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        b = y.length;

      function _(t) {
        var e = getComputedStyle(t);
        return e || n("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
      }
      var E, A = !1;

      function w(t) {
        if (function() {
            if (!A) {
              A = !0;
              var t = document.createElement("div");
              t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
              var e = document.body || document.documentElement;
              e.appendChild(t);
              var n = _(t);
              E = 200 == Math.round(m(n.width)), w.isBoxSizeOuter = E, e.removeChild(t)
            }
          }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
          var e = _(t);
          if ("none" == e.display) return function() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
              }, e = 0; e < b; e++) t[y[e]] = 0;
            return t
          }();
          var n = {};
          n.width = t.offsetWidth, n.height = t.offsetHeight;
          for (var r = n.isBorderBox = "border-box" == e.boxSizing, i = 0; i < b; i++) {
            var o = y[i],
              a = e[o],
              s = parseFloat(a);
            n[o] = isNaN(s) ? 0 : s
          }
          var c = n.paddingLeft + n.paddingRight,
            u = n.paddingTop + n.paddingBottom,
            l = n.marginLeft + n.marginRight,
            h = n.marginTop + n.marginBottom,
            f = n.borderLeftWidth + n.borderRightWidth,
            p = n.borderTopWidth + n.borderBottomWidth,
            d = r && E,
            g = m(e.width);
          !1 !== g && (n.width = g + (d ? 0 : c + f));
          var v = m(e.height);
          return !1 !== v && (n.height = v + (d ? 0 : u + p)), n.innerWidth = n.width - (c + f), n.innerHeight = n.height - (u + p), n.outerWidth = n.width + l, n.outerHeight = n.height + h, n
        }
      }
      return w
    }, "function" == typeof define && define.amd ? define(i) : "object" == typeof e && e.exports ? e.exports = i() : r.getSize = i()
  }, {}],
  115: [function(t, e, n) {
    "use strict";
    var a = t("typedarray-pool"),
      s = t("ndarray-ops"),
      c = t("ndarray"),
      u = ["uint8", "uint8_clamped", "uint16", "uint32", "int8", "int16", "int32", "float32"];

    function o(t, e, n, r, i) {
      this.gl = t, this.type = e, this.handle = n, this.length = r, this.usage = i
    }
    var r = o.prototype;

    function l(t, e, n, r, i, o) {
      var a = i.length * i.BYTES_PER_ELEMENT;
      if (o < 0) return t.bufferData(e, i, r), a;
      if (n < a + o) throw new Error("gl-buffer: If resizing buffer, must not specify offset");
      return t.bufferSubData(e, o, i), n
    }

    function h(t, e) {
      for (var n = a.malloc(t.length, e), r = t.length, i = 0; i < r; ++i) n[i] = t[i];
      return n
    }
    r.bind = function() {
      this.gl.bindBuffer(this.type, this.handle)
    }, r.unbind = function() {
      this.gl.bindBuffer(this.type, null)
    }, r.dispose = function() {
      this.gl.deleteBuffer(this.handle)
    }, r.update = function(t, e) {
      if ("number" != typeof e && (e = -1), this.bind(), "object" == typeof t && void 0 !== t.shape) {
        var n = t.dtype;
        if (u.indexOf(n) < 0 && (n = "float32"), this.type === this.gl.ELEMENT_ARRAY_BUFFER) n = gl.getExtension("OES_element_index_uint") && "uint16" !== n ? "uint32" : "uint16";
        if (n === t.dtype && function(t, e) {
            for (var n = 1, r = e.length - 1; 0 <= r; --r) {
              if (e[r] !== n) return !1;
              n *= t[r]
            }
            return !0
          }(t.shape, t.stride)) 0 === t.offset && t.data.length === t.shape[0] ? this.length = l(this.gl, this.type, this.length, this.usage, t.data, e) : this.length = l(this.gl, this.type, this.length, this.usage, t.data.subarray(t.offset, t.shape[0]), e);
        else {
          var r = a.malloc(t.size, n),
            i = c(r, t.shape);
          s.assign(i, t), this.length = l(this.gl, this.type, this.length, this.usage, e < 0 ? r : r.subarray(0, t.size), e), a.free(r)
        }
      } else if (Array.isArray(t)) {
        var o;
        o = this.type === this.gl.ELEMENT_ARRAY_BUFFER ? h(t, "uint16") : h(t, "float32"), this.length = l(this.gl, this.type, this.length, this.usage, e < 0 ? o : o.subarray(0, t.length), e), a.free(o)
      } else if ("object" == typeof t && "number" == typeof t.length) this.length = l(this.gl, this.type, this.length, this.usage, t, e);
      else {
        if ("number" != typeof t && void 0 !== t) throw new Error("gl-buffer: Invalid data type");
        if (0 <= e) throw new Error("gl-buffer: Cannot specify offset when resizing buffer");
        (t |= 0) <= 0 && (t = 1), this.gl.bufferData(this.type, 0 | t, this.usage), this.length = t
      }
    }, e.exports = function(t, e, n, r) {
      if (n = n || t.ARRAY_BUFFER, r = r || t.DYNAMIC_DRAW, n !== t.ARRAY_BUFFER && n !== t.ELEMENT_ARRAY_BUFFER) throw new Error("gl-buffer: Invalid type for webgl buffer, must be either gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER");
      if (r !== t.DYNAMIC_DRAW && r !== t.STATIC_DRAW && r !== t.STREAM_DRAW) throw new Error("gl-buffer: Invalid usage for buffer, must be either gl.DYNAMIC_DRAW, gl.STATIC_DRAW or gl.STREAM_DRAW");
      var i = new o(t, n, t.createBuffer(), 0, r);
      return i.update(e), i
    }
  }, {
    ndarray: 205,
    "ndarray-ops": 204,
    "typedarray-pool": 275
  }],
  116: [function(t, e, n) {
    e.exports = {
      0: "NONE",
      1: "ONE",
      2: "LINE_LOOP",
      3: "LINE_STRIP",
      4: "TRIANGLES",
      5: "TRIANGLE_STRIP",
      6: "TRIANGLE_FAN",
      256: "DEPTH_BUFFER_BIT",
      512: "NEVER",
      513: "LESS",
      514: "EQUAL",
      515: "LEQUAL",
      516: "GREATER",
      517: "NOTEQUAL",
      518: "GEQUAL",
      519: "ALWAYS",
      768: "SRC_COLOR",
      769: "ONE_MINUS_SRC_COLOR",
      770: "SRC_ALPHA",
      771: "ONE_MINUS_SRC_ALPHA",
      772: "DST_ALPHA",
      773: "ONE_MINUS_DST_ALPHA",
      774: "DST_COLOR",
      775: "ONE_MINUS_DST_COLOR",
      776: "SRC_ALPHA_SATURATE",
      1024: "STENCIL_BUFFER_BIT",
      1028: "FRONT",
      1029: "BACK",
      1032: "FRONT_AND_BACK",
      1280: "INVALID_ENUM",
      1281: "INVALID_VALUE",
      1282: "INVALID_OPERATION",
      1285: "OUT_OF_MEMORY",
      1286: "INVALID_FRAMEBUFFER_OPERATION",
      2304: "CW",
      2305: "CCW",
      2849: "LINE_WIDTH",
      2884: "CULL_FACE",
      2885: "CULL_FACE_MODE",
      2886: "FRONT_FACE",
      2928: "DEPTH_RANGE",
      2929: "DEPTH_TEST",
      2930: "DEPTH_WRITEMASK",
      2931: "DEPTH_CLEAR_VALUE",
      2932: "DEPTH_FUNC",
      2960: "STENCIL_TEST",
      2961: "STENCIL_CLEAR_VALUE",
      2962: "STENCIL_FUNC",
      2963: "STENCIL_VALUE_MASK",
      2964: "STENCIL_FAIL",
      2965: "STENCIL_PASS_DEPTH_FAIL",
      2966: "STENCIL_PASS_DEPTH_PASS",
      2967: "STENCIL_REF",
      2968: "STENCIL_WRITEMASK",
      2978: "VIEWPORT",
      3024: "DITHER",
      3042: "BLEND",
      3088: "SCISSOR_BOX",
      3089: "SCISSOR_TEST",
      3106: "COLOR_CLEAR_VALUE",
      3107: "COLOR_WRITEMASK",
      3317: "UNPACK_ALIGNMENT",
      3333: "PACK_ALIGNMENT",
      3379: "MAX_TEXTURE_SIZE",
      3386: "MAX_VIEWPORT_DIMS",
      3408: "SUBPIXEL_BITS",
      3410: "RED_BITS",
      3411: "GREEN_BITS",
      3412: "BLUE_BITS",
      3413: "ALPHA_BITS",
      3414: "DEPTH_BITS",
      3415: "STENCIL_BITS",
      3553: "TEXTURE_2D",
      4352: "DONT_CARE",
      4353: "FASTEST",
      4354: "NICEST",
      5120: "BYTE",
      5121: "UNSIGNED_BYTE",
      5122: "SHORT",
      5123: "UNSIGNED_SHORT",
      5124: "INT",
      5125: "UNSIGNED_INT",
      5126: "FLOAT",
      5386: "INVERT",
      5890: "TEXTURE",
      6401: "STENCIL_INDEX",
      6402: "DEPTH_COMPONENT",
      6406: "ALPHA",
      6407: "RGB",
      6408: "RGBA",
      6409: "LUMINANCE",
      6410: "LUMINANCE_ALPHA",
      7680: "KEEP",
      7681: "REPLACE",
      7682: "INCR",
      7683: "DECR",
      7936: "VENDOR",
      7937: "RENDERER",
      7938: "VERSION",
      9728: "NEAREST",
      9729: "LINEAR",
      9984: "NEAREST_MIPMAP_NEAREST",
      9985: "LINEAR_MIPMAP_NEAREST",
      9986: "NEAREST_MIPMAP_LINEAR",
      9987: "LINEAR_MIPMAP_LINEAR",
      10240: "TEXTURE_MAG_FILTER",
      10241: "TEXTURE_MIN_FILTER",
      10242: "TEXTURE_WRAP_S",
      10243: "TEXTURE_WRAP_T",
      10497: "REPEAT",
      10752: "POLYGON_OFFSET_UNITS",
      16384: "COLOR_BUFFER_BIT",
      32769: "CONSTANT_COLOR",
      32770: "ONE_MINUS_CONSTANT_COLOR",
      32771: "CONSTANT_ALPHA",
      32772: "ONE_MINUS_CONSTANT_ALPHA",
      32773: "BLEND_COLOR",
      32774: "FUNC_ADD",
      32777: "BLEND_EQUATION_RGB",
      32778: "FUNC_SUBTRACT",
      32779: "FUNC_REVERSE_SUBTRACT",
      32819: "UNSIGNED_SHORT_4_4_4_4",
      32820: "UNSIGNED_SHORT_5_5_5_1",
      32823: "POLYGON_OFFSET_FILL",
      32824: "POLYGON_OFFSET_FACTOR",
      32854: "RGBA4",
      32855: "RGB5_A1",
      32873: "TEXTURE_BINDING_2D",
      32926: "SAMPLE_ALPHA_TO_COVERAGE",
      32928: "SAMPLE_COVERAGE",
      32936: "SAMPLE_BUFFERS",
      32937: "SAMPLES",
      32938: "SAMPLE_COVERAGE_VALUE",
      32939: "SAMPLE_COVERAGE_INVERT",
      32968: "BLEND_DST_RGB",
      32969: "BLEND_SRC_RGB",
      32970: "BLEND_DST_ALPHA",
      32971: "BLEND_SRC_ALPHA",
      33071: "CLAMP_TO_EDGE",
      33170: "GENERATE_MIPMAP_HINT",
      33189: "DEPTH_COMPONENT16",
      33306: "DEPTH_STENCIL_ATTACHMENT",
      33635: "UNSIGNED_SHORT_5_6_5",
      33648: "MIRRORED_REPEAT",
      33901: "ALIASED_POINT_SIZE_RANGE",
      33902: "ALIASED_LINE_WIDTH_RANGE",
      33984: "TEXTURE0",
      33985: "TEXTURE1",
      33986: "TEXTURE2",
      33987: "TEXTURE3",
      33988: "TEXTURE4",
      33989: "TEXTURE5",
      33990: "TEXTURE6",
      33991: "TEXTURE7",
      33992: "TEXTURE8",
      33993: "TEXTURE9",
      33994: "TEXTURE10",
      33995: "TEXTURE11",
      33996: "TEXTURE12",
      33997: "TEXTURE13",
      33998: "TEXTURE14",
      33999: "TEXTURE15",
      34e3: "TEXTURE16",
      34001: "TEXTURE17",
      34002: "TEXTURE18",
      34003: "TEXTURE19",
      34004: "TEXTURE20",
      34005: "TEXTURE21",
      34006: "TEXTURE22",
      34007: "TEXTURE23",
      34008: "TEXTURE24",
      34009: "TEXTURE25",
      34010: "TEXTURE26",
      34011: "TEXTURE27",
      34012: "TEXTURE28",
      34013: "TEXTURE29",
      34014: "TEXTURE30",
      34015: "TEXTURE31",
      34016: "ACTIVE_TEXTURE",
      34024: "MAX_RENDERBUFFER_SIZE",
      34041: "DEPTH_STENCIL",
      34055: "INCR_WRAP",
      34056: "DECR_WRAP",
      34067: "TEXTURE_CUBE_MAP",
      34068: "TEXTURE_BINDING_CUBE_MAP",
      34069: "TEXTURE_CUBE_MAP_POSITIVE_X",
      34070: "TEXTURE_CUBE_MAP_NEGATIVE_X",
      34071: "TEXTURE_CUBE_MAP_POSITIVE_Y",
      34072: "TEXTURE_CUBE_MAP_NEGATIVE_Y",
      34073: "TEXTURE_CUBE_MAP_POSITIVE_Z",
      34074: "TEXTURE_CUBE_MAP_NEGATIVE_Z",
      34076: "MAX_CUBE_MAP_TEXTURE_SIZE",
      34338: "VERTEX_ATTRIB_ARRAY_ENABLED",
      34339: "VERTEX_ATTRIB_ARRAY_SIZE",
      34340: "VERTEX_ATTRIB_ARRAY_STRIDE",
      34341: "VERTEX_ATTRIB_ARRAY_TYPE",
      34342: "CURRENT_VERTEX_ATTRIB",
      34373: "VERTEX_ATTRIB_ARRAY_POINTER",
      34466: "NUM_COMPRESSED_TEXTURE_FORMATS",
      34467: "COMPRESSED_TEXTURE_FORMATS",
      34660: "BUFFER_SIZE",
      34661: "BUFFER_USAGE",
      34816: "STENCIL_BACK_FUNC",
      34817: "STENCIL_BACK_FAIL",
      34818: "STENCIL_BACK_PASS_DEPTH_FAIL",
      34819: "STENCIL_BACK_PASS_DEPTH_PASS",
      34877: "BLEND_EQUATION_ALPHA",
      34921: "MAX_VERTEX_ATTRIBS",
      34922: "VERTEX_ATTRIB_ARRAY_NORMALIZED",
      34930: "MAX_TEXTURE_IMAGE_UNITS",
      34962: "ARRAY_BUFFER",
      34963: "ELEMENT_ARRAY_BUFFER",
      34964: "ARRAY_BUFFER_BINDING",
      34965: "ELEMENT_ARRAY_BUFFER_BINDING",
      34975: "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",
      35040: "STREAM_DRAW",
      35044: "STATIC_DRAW",
      35048: "DYNAMIC_DRAW",
      35632: "FRAGMENT_SHADER",
      35633: "VERTEX_SHADER",
      35660: "MAX_VERTEX_TEXTURE_IMAGE_UNITS",
      35661: "MAX_COMBINED_TEXTURE_IMAGE_UNITS",
      35663: "SHADER_TYPE",
      35664: "FLOAT_VEC2",
      35665: "FLOAT_VEC3",
      35666: "FLOAT_VEC4",
      35667: "INT_VEC2",
      35668: "INT_VEC3",
      35669: "INT_VEC4",
      35670: "BOOL",
      35671: "BOOL_VEC2",
      35672: "BOOL_VEC3",
      35673: "BOOL_VEC4",
      35674: "FLOAT_MAT2",
      35675: "FLOAT_MAT3",
      35676: "FLOAT_MAT4",
      35678: "SAMPLER_2D",
      35680: "SAMPLER_CUBE",
      35712: "DELETE_STATUS",
      35713: "COMPILE_STATUS",
      35714: "LINK_STATUS",
      35715: "VALIDATE_STATUS",
      35716: "INFO_LOG_LENGTH",
      35717: "ATTACHED_SHADERS",
      35718: "ACTIVE_UNIFORMS",
      35719: "ACTIVE_UNIFORM_MAX_LENGTH",
      35720: "SHADER_SOURCE_LENGTH",
      35721: "ACTIVE_ATTRIBUTES",
      35722: "ACTIVE_ATTRIBUTE_MAX_LENGTH",
      35724: "SHADING_LANGUAGE_VERSION",
      35725: "CURRENT_PROGRAM",
      36003: "STENCIL_BACK_REF",
      36004: "STENCIL_BACK_VALUE_MASK",
      36005: "STENCIL_BACK_WRITEMASK",
      36006: "FRAMEBUFFER_BINDING",
      36007: "RENDERBUFFER_BINDING",
      36048: "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",
      36049: "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",
      36050: "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",
      36051: "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",
      36053: "FRAMEBUFFER_COMPLETE",
      36054: "FRAMEBUFFER_INCOMPLETE_ATTACHMENT",
      36055: "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",
      36057: "FRAMEBUFFER_INCOMPLETE_DIMENSIONS",
      36061: "FRAMEBUFFER_UNSUPPORTED",
      36064: "COLOR_ATTACHMENT0",
      36096: "DEPTH_ATTACHMENT",
      36128: "STENCIL_ATTACHMENT",
      36160: "FRAMEBUFFER",
      36161: "RENDERBUFFER",
      36162: "RENDERBUFFER_WIDTH",
      36163: "RENDERBUFFER_HEIGHT",
      36164: "RENDERBUFFER_INTERNAL_FORMAT",
      36168: "STENCIL_INDEX8",
      36176: "RENDERBUFFER_RED_SIZE",
      36177: "RENDERBUFFER_GREEN_SIZE",
      36178: "RENDERBUFFER_BLUE_SIZE",
      36179: "RENDERBUFFER_ALPHA_SIZE",
      36180: "RENDERBUFFER_DEPTH_SIZE",
      36181: "RENDERBUFFER_STENCIL_SIZE",
      36194: "RGB565",
      36336: "LOW_FLOAT",
      36337: "MEDIUM_FLOAT",
      36338: "HIGH_FLOAT",
      36339: "LOW_INT",
      36340: "MEDIUM_INT",
      36341: "HIGH_INT",
      36346: "SHADER_COMPILER",
      36347: "MAX_VERTEX_UNIFORM_VECTORS",
      36348: "MAX_VARYING_VECTORS",
      36349: "MAX_FRAGMENT_UNIFORM_VECTORS",
      37440: "UNPACK_FLIP_Y_WEBGL",
      37441: "UNPACK_PREMULTIPLY_ALPHA_WEBGL",
      37442: "CONTEXT_LOST_WEBGL",
      37443: "UNPACK_COLORSPACE_CONVERSION_WEBGL",
      37444: "BROWSER_DEFAULT_WEBGL"
    }
  }, {}],
  117: [function(t, e, n) {
    var r = t("./1.0/numbers");
    e.exports = function(t) {
      return r[t]
    }
  }, {
    "./1.0/numbers": 116
  }],
  118: [function(t, e, n) {
    var g = t("sprintf-js").sprintf,
      v = t("gl-constants/lookup"),
      m = t("glsl-shader-name"),
      y = t("add-line-numbers");
    e.exports = function(t, e, n) {
      "use strict";
      var r = m(e) || "of unknown name (see npm glsl-shader-name)",
        i = "unknown type";
      void 0 !== n && (i = n === v.FRAGMENT_SHADER ? "fragment" : "vertex");
      for (var o = g("Error compiling %s shader %s:\n", i, r), a = g("%s%s", o, t), s = t.split("\n"), c = {}, u = 0; u < s.length; u++) {
        var l = s[u];
        if ("" !== l && "\0" !== l) {
          var h = parseInt(l.split(":")[2]);
          if (isNaN(h)) throw new Error(g("Could not parse error: %s", l));
          c[h] = l
        }
      }
      for (var f = y(e).split("\n"), u = 0; u < f.length; u++)
        if (c[u + 3] || c[u + 2] || c[u + 1]) {
          var p = f[u];
          if (o += p + "\n", c[u + 1]) {
            var d = c[u + 1];
            d = d.substr(d.split(":", 3).join(":").length + 1).trim(), o += g("^^^ %s\n\n", d)
          }
        } return {
        long: o.trim(),
        short: a.trim()
      }
    }
  }, {
    "add-line-numbers": 34,
    "gl-constants/lookup": 117,
    "glsl-shader-name": 176,
    "sprintf-js": 273
  }],
  119: [function(t, e, n) {
    "use strict";
    var A = t("./lib/create-uniforms"),
      w = t("./lib/create-attributes"),
      x = t("./lib/reflect"),
      T = t("./lib/shader-cache"),
      S = t("./lib/runtime-reflect"),
      R = t("./lib/GLError");

    function a(t) {
      this.gl = t, this.gl.lastAttribCount = 0, this._vref = this._fref = this._relink = this.vertShader = this.fragShader = this.program = this.attributes = this.uniforms = this.types = null
    }
    var r = a.prototype;

    function I(t, e) {
      return t.name < e.name ? -1 : 1
    }
    r.bind = function() {
      var t;
      this.program || this._relink();
      var e = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES),
        n = this.gl.lastAttribCount;
      if (n < e)
        for (t = n; t < e; t++) this.gl.enableVertexAttribArray(t);
      else if (e < n)
        for (t = e; t < n; t++) this.gl.disableVertexAttribArray(t);
      this.gl.lastAttribCount = e, this.gl.useProgram(this.program)
    }, r.dispose = function() {
      for (var t = this.gl.lastAttribCount, e = 0; e < t; e++) this.gl.disableVertexAttribArray(e);
      this.gl.lastAttribCount = 0, this._fref && this._fref.dispose(), this._vref && this._vref.dispose(), this.attributes = this.types = this.vertShader = this.fragShader = this.program = this._relink = this._fref = this._vref = null
    }, r.update = function(t, e, n, r) {
      if (!e || 1 === arguments.length) {
        var i = t;
        t = i.vertex, e = i.fragment, n = i.uniforms, r = i.attributes
      }
      var o = this,
        a = o.gl,
        s = o._vref;
      o._vref = T.shader(a, a.VERTEX_SHADER, t), s && s.dispose(), o.vertShader = o._vref.shader;
      var c = this._fref;
      if (o._fref = T.shader(a, a.FRAGMENT_SHADER, e), c && c.dispose(), o.fragShader = o._fref.shader, !n || !r) {
        var u = a.createProgram();
        if (a.attachShader(u, o.fragShader), a.attachShader(u, o.vertShader), a.linkProgram(u), !a.getProgramParameter(u, a.LINK_STATUS)) {
          var l = a.getProgramInfoLog(u);
          throw new R(l, "Error linking program:" + l)
        }
        n = n || S.uniforms(a, u), r = r || S.attributes(a, u), a.deleteProgram(u)
      }(r = r.slice()).sort(I);
      var h, f = [],
        p = [],
        d = [];
      for (h = 0; h < r.length; ++h) {
        var g = r[h];
        if (0 <= g.type.indexOf("mat")) {
          for (var v = 0 | g.type.charAt(g.type.length - 1), m = new Array(v), y = 0; y < v; ++y) m[y] = d.length, p.push(g.name + "[" + y + "]"), "number" == typeof g.location ? d.push(g.location + y) : Array.isArray(g.location) && g.location.length === v && "number" == typeof g.location[y] ? d.push(0 | g.location[y]) : d.push(-1);
          f.push({
            name: g.name,
            type: g.type,
            locations: m
          })
        } else f.push({
          name: g.name,
          type: g.type,
          locations: [d.length]
        }), p.push(g.name), "number" == typeof g.location ? d.push(0 | g.location) : d.push(-1)
      }
      var b = 0;
      for (h = 0; h < d.length; ++h)
        if (d[h] < 0) {
          for (; 0 <= d.indexOf(b);) b += 1;
          d[h] = b
        } var _ = new Array(n.length);

      function E() {
        o.program = T.program(a, o._vref, o._fref, p, d);
        for (var t = 0; t < n.length; ++t) _[t] = a.getUniformLocation(o.program, n[t].name)
      }
      E(), o._relink = E, o.types = {
        uniforms: x(n),
        attributes: x(r)
      }, o.attributes = w(a, o, f, d), Object.defineProperty(o, "uniforms", A(a, o, n, _))
    }, e.exports = function(t, e, n, r, i) {
      var o = new a(t);
      return o.update(e, n, r, i), o
    }
  }, {
    "./lib/GLError": 120,
    "./lib/create-attributes": 121,
    "./lib/create-uniforms": 122,
    "./lib/reflect": 123,
    "./lib/runtime-reflect": 124,
    "./lib/shader-cache": 125
  }],
  120: [function(t, e, n) {
    function r(t, e, n) {
      this.shortMessage = e || "", this.longMessage = n || "", this.rawError = t || "", this.message = "gl-shader: " + (e || t || "") + (n ? "\n" + n : ""), this.stack = (new Error).stack
    }(r.prototype = new Error).name = "GLError", r.prototype.constructor = r, e.exports = r
  }, {}],
  121: [function(t, e, n) {
    "use strict";
    e.exports = function(t, e, n, r) {
      for (var i = {}, o = 0, a = n.length; o < a; ++o) {
        var s = n[o],
          c = s.name,
          u = s.type,
          l = s.locations;
        switch (u) {
          case "bool":
          case "int":
          case "float":
            d(t, e, l[0], r, 1, i, c);
            break;
          default:
            if (0 <= u.indexOf("vec")) {
              var h = u.charCodeAt(u.length - 1) - 48;
              if (h < 2 || 4 < h) throw new f("", "Invalid data type for attribute " + c + ": " + u);
              d(t, e, l[0], r, h, i, c)
            } else {
              if (!(0 <= u.indexOf("mat"))) throw new f("", "Unknown data type for attribute " + c + ": " + u);
              var h = u.charCodeAt(u.length - 1) - 48;
              if (h < 2 || 4 < h) throw new f("", "Invalid data type for attribute " + c + ": " + u);
              g(t, e, l, r, h, i, c)
            }
        }
      }
      return i
    };
    var f = t("./GLError");

    function p(t, e, n, r, i, o) {
      this._gl = t, this._wrapper = e, this._index = n, this._locations = r, this._dimension = i, this._constFunc = o
    }
    var r = p.prototype;

    function d(e, t, n, r, i, o, a) {
      for (var s = ["gl", "v"], c = [], u = 0; u < i; ++u) s.push("x" + u), c.push("x" + u);
      s.push("if(x0.length===void 0){return gl.vertexAttrib" + i + "f(v," + c.join() + ")}else{return gl.vertexAttrib" + i + "fv(v,x0)}");
      var l = Function.apply(null, s),
        h = new p(e, t, n, r, i, l);
      Object.defineProperty(o, a, {
        set: function(t) {
          return e.disableVertexAttribArray(r[n]), l(e, r[n], t), t
        },
        get: function() {
          return h
        },
        enumerable: !0
      })
    }

    function g(a, t, s, c, u, e, n) {
      for (var r = new Array(u), i = new Array(u), o = 0; o < u; ++o) d(a, t, s[o], c, u, r, o), i[o] = r[o];
      Object.defineProperty(r, "location", {
        set: function(t) {
          if (Array.isArray(t))
            for (var e = 0; e < u; ++e) i[e].location = t[e];
          else
            for (e = 0; e < u; ++e) i[e].location = t + e;
          return t
        },
        get: function() {
          for (var t = new Array(u), e = 0; e < u; ++e) t[e] = c[s[e]];
          return t
        },
        enumerable: !0
      }), r.pointer = function(t, e, n, r) {
        t = t || a.FLOAT, e = !!e, n = n || u * u, r = r || 0;
        for (var i = 0; i < u; ++i) {
          var o = c[s[i]];
          a.vertexAttribPointer(o, u, t, e, n, r + i * u), a.enableVertexAttribArray(o)
        }
      };
      var l = new Array(u),
        h = a["vertexAttrib" + u + "fv"];
      Object.defineProperty(e, n, {
        set: function(t) {
          for (var e = 0; e < u; ++e) {
            var n = c[s[e]];
            if (a.disableVertexAttribArray(n), Array.isArray(t[0])) h.call(a, n, t[e]);
            else {
              for (var r = 0; r < u; ++r) l[r] = t[u * e + r];
              h.call(a, n, l)
            }
          }
          return t
        },
        get: function() {
          return r
        },
        enumerable: !0
      })
    }
    r.pointer = function(t, e, n, r) {
      var i = this._gl,
        o = this._locations[this._index];
      i.vertexAttribPointer(o, this._dimension, t || i.FLOAT, !!e, n || 0, r || 0), i.enableVertexAttribArray(o)
    }, r.set = function(t, e, n, r) {
      return this._constFunc(this._locations[this._index], t, e, n, r)
    }, Object.defineProperty(r, "location", {
      get: function() {
        return this._locations[this._index]
      },
      set: function(t) {
        return t !== this._locations[this._index] && (this._locations[this._index] = 0 | t, this._wrapper.program = null), 0 | t
      }
    })
  }, {
    "./GLError": 120
  }],
  122: [function(t, e, n) {
    "use strict";
    var r = t("./reflect"),
      f = t("./GLError");

    function p(t) {
      return new Function("y", "return function(){return y}")(t)
    }

    function d(t, e) {
      for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e;
      return n
    }
    e.exports = function(c, o, u, l) {
      function h(t, e, n) {
        switch (n) {
          case "bool":
          case "int":
          case "sampler2D":
          case "samplerCube":
            return "gl.uniform1i(locations[" + e + "],obj" + t + ")";
          case "float":
            return "gl.uniform1f(locations[" + e + "],obj" + t + ")";
          default:
            var r = n.indexOf("vec");
            if (!(0 <= r && r <= 1 && n.length === 4 + r)) {
              if (0 !== n.indexOf("mat") || 4 !== n.length) throw new f("", "Unknown uniform data type for " + name + ": " + n);
              var i = n.charCodeAt(n.length - 1) - 48;
              if (i < 2 || 4 < i) throw new f("", "Invalid uniform dimension type for matrix " + name + ": " + n);
              return "gl.uniformMatrix" + i + "fv(locations[" + e + "],false,obj" + t + ")"
            }
            var i = n.charCodeAt(n.length - 1) - 48;
            if (i < 2 || 4 < i) throw new f("", "Invalid data type");
            switch (n.charAt(0)) {
              case "b":
              case "i":
                return "gl.uniform" + i + "iv(locations[" + e + "],obj" + t + ")";
              case "v":
                return "gl.uniform" + i + "fv(locations[" + e + "],obj" + t + ")";
              default:
                throw new f("", "Unrecognized data type for vector " + name + ": " + n)
            }
        }
      }

      function a(t) {
        for (var e = ["return function updateProperty(obj){"], n = function t(e, n) {
            if ("object" != typeof n) return [
              [e, n]
            ];
            var r = [];
            for (var i in n) {
              var o = n[i],
                a = e;
              parseInt(i) + "" === i ? a += "[" + i + "]" : a += "." + i, "object" == typeof o ? r.push.apply(r, t(a, o)) : r.push([a, o])
            }
            return r
          }("", t), r = 0; r < n.length; ++r) {
          var i = n[r],
            o = i[0],
            a = i[1];
          l[a] && e.push(h(o, a, u[a].type))
        }
        e.push("return obj}");
        var s = new Function("gl", "locations", e.join("\n"));
        return s(c, l)
      }

      function i(t, e, n) {
        if ("object" == typeof n) {
          var r = s(n);
          Object.defineProperty(t, e, {
            get: p(r),
            set: a(n),
            enumerable: !0,
            configurable: !1
          })
        } else l[n] ? Object.defineProperty(t, e, {
          get: (i = n, new Function("gl", "wrapper", "locations", "return function(){return gl.getUniform(wrapper.program,locations[" + i + "])}")(c, o, l)),
          set: a(n),
          enumerable: !0,
          configurable: !1
        }) : t[e] = function(t) {
          switch (t) {
            case "bool":
              return !1;
            case "int":
            case "sampler2D":
            case "samplerCube":
            case "float":
              return 0;
            default:
              var e = t.indexOf("vec");
              if (0 <= e && e <= 1 && t.length === 4 + e) {
                var n = t.charCodeAt(t.length - 1) - 48;
                if (n < 2 || 4 < n) throw new f("", "Invalid data type");
                return "b" === t.charAt(0) ? d(n, !1) : d(n, 0)
              }
              if (0 !== t.indexOf("mat") || 4 !== t.length) throw new f("", "Unknown uniform data type for " + name + ": " + t);
              var n = t.charCodeAt(t.length - 1) - 48;
              if (n < 2 || 4 < n) throw new f("", "Invalid uniform dimension type for matrix " + name + ": " + t);
              return d(n * n, 0)
          }
        }(u[n].type);
        var i
      }

      function s(t) {
        var e;
        if (Array.isArray(t)) {
          e = new Array(t.length);
          for (var n = 0; n < t.length; ++n) i(e, n, t[n])
        } else
          for (var r in e = {}, t) i(e, r, t[r]);
        return e
      }
      var t = r(u, !0);
      return {
        get: p(s(t)),
        set: a(t),
        enumerable: !0,
        configurable: !0
      }
    }
  }, {
    "./GLError": 120,
    "./reflect": 123
  }],
  123: [function(t, e, n) {
    "use strict";
    e.exports = function(t, e) {
      for (var n = {}, r = 0; r < t.length; ++r)
        for (var i = t[r].name, o = i.split("."), a = n, s = 0; s < o.length; ++s) {
          var c = o[s].split("[");
          if (1 < c.length) {
            c[0] in a || (a[c[0]] = []), a = a[c[0]];
            for (var u = 1; u < c.length; ++u) {
              var l = parseInt(c[u]);
              u < c.length - 1 || s < o.length - 1 ? (l in a || (u < c.length - 1 ? a[l] = [] : a[l] = {}), a = a[l]) : a[l] = e ? r : t[r].type
            }
          } else s < o.length - 1 ? (c[0] in a || (a[c[0]] = {}), a = a[c[0]]) : a[c[0]] = e ? r : t[r].type
        }
      return n
    }
  }, {}],
  124: [function(t, e, n) {
    "use strict";
    n.uniforms = function(t, e) {
      for (var n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = [], i = 0; i < n; ++i) {
        var o = t.getActiveUniform(e, i);
        if (o) {
          var a = c(t, o.type);
          if (1 < o.size)
            for (var s = 0; s < o.size; ++s) r.push({
              name: o.name.replace("[0]", "[" + s + "]"),
              type: a
            });
          else r.push({
            name: o.name,
            type: a
          })
        }
      }
      return r
    }, n.attributes = function(t, e) {
      for (var n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = [], i = 0; i < n; ++i) {
        var o = t.getActiveAttrib(e, i);
        o && r.push({
          name: o.name,
          type: c(t, o.type)
        })
      }
      return r
    };
    var o = {
        FLOAT: "float",
        FLOAT_VEC2: "vec2",
        FLOAT_VEC3: "vec3",
        FLOAT_VEC4: "vec4",
        INT: "int",
        INT_VEC2: "ivec2",
        INT_VEC3: "ivec3",
        INT_VEC4: "ivec4",
        BOOL: "bool",
        BOOL_VEC2: "bvec2",
        BOOL_VEC3: "bvec3",
        BOOL_VEC4: "bvec4",
        FLOAT_MAT2: "mat2",
        FLOAT_MAT3: "mat3",
        FLOAT_MAT4: "mat4",
        SAMPLER_2D: "sampler2D",
        SAMPLER_CUBE: "samplerCube"
      },
      a = null;

    function c(t, e) {
      if (!a) {
        var n = Object.keys(o);
        a = {};
        for (var r = 0; r < n.length; ++r) {
          var i = n[r];
          a[t[i]] = o[i]
        }
      }
      return a[e]
    }
  }, {}],
  125: [function(t, e, n) {
    "use strict";
    n.shader = function(t, e, n) {
      return l(t).getShaderReference(e, n)
    }, n.program = function(t, e, n, r, i) {
      return l(t).getProgram(e, n, r, i)
    };
    var c = t("./GLError"),
      a = t("gl-format-compiler-error"),
      r = new("undefined" == typeof WeakMap ? t("weakmap-shim") : WeakMap),
      s = 0;

    function u(t, e, n, r, i, o, a) {
      this.id = t, this.src = e, this.type = n, this.shader = r, this.count = o, this.programs = [], this.cache = a
    }

    function i(t) {
      this.gl = t, this.shaders = [{}, {}], this.programs = {}
    }
    u.prototype.dispose = function() {
      if (0 == --this.count) {
        for (var t = this.cache, e = t.gl, n = this.programs, r = 0, i = n.length; r < i; ++r) {
          var o = t.programs[n[r]];
          o && (delete t.programs[r], e.deleteProgram(o))
        }
        e.deleteShader(this.shader), delete t.shaders[this.type === e.FRAGMENT_SHADER | 0][this.src]
      }
    };
    var o = i.prototype;

    function l(t) {
      var e = r.get(t);
      return e || (e = new i(t), r.set(t, e)), e
    }
    o.getShaderReference = function(t, e) {
      var n = this.gl,
        r = this.shaders[t === n.FRAGMENT_SHADER | 0],
        i = r[e];
      if (i && n.isShader(i.shader)) i.count += 1;
      else {
        var o = function(t, e, n) {
          var r = t.createShader(e);
          if (t.shaderSource(r, n), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS)) return r;
          var i = t.getShaderInfoLog(r);
          try {
            var o = a(i, n, e)
          } catch (t) {
            throw console.warn("Failed to format compiler error: " + t), new c(i, "Error compiling shader:\n" + i)
          }
          throw new c(i, o.short, o.long)
        }(n, t, e);
        i = r[e] = new u(s++, e, t, o, [], 1, this)
      }
      return i
    }, o.getProgram = function(t, e, n, r) {
      var i = [t.id, e.id, n.join(":"), r.join(":")].join("@"),
        o = this.programs[i];
      return o && this.gl.isProgram(o) || (this.programs[i] = o = function(t, e, n, r, i) {
        var o = t.createProgram();
        t.attachShader(o, e), t.attachShader(o, n);
        for (var a = 0; a < r.length; ++a) t.bindAttribLocation(o, i[a], r[a]);
        if (t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS)) return o;
        var s = t.getProgramInfoLog(o);
        throw new c(s, "Error linking program: " + s)
      }(this.gl, t.shader, e.shader, n, r), t.programs.push(i), e.programs.push(i)), o
    }
  }, {
    "./GLError": 120,
    "gl-format-compiler-error": 118,
    "weakmap-shim": 279
  }],
  126: [function(t, e, n) {
    "use strict";
    var m = t("ndarray"),
      y = t("ndarray-ops"),
      b = t("typedarray-pool");
    e.exports = function(t) {
      if (arguments.length <= 1) throw new Error("gl-texture2d: Missing arguments for texture2d constructor");
      h || (h = [(e = t).LINEAR, e.NEAREST_MIPMAP_LINEAR, e.LINEAR_MIPMAP_NEAREST, e.LINEAR_MIPMAP_NEAREST], f = [e.NEAREST, e.LINEAR, e.NEAREST_MIPMAP_NEAREST, e.NEAREST_MIPMAP_LINEAR, e.LINEAR_MIPMAP_NEAREST, e.LINEAR_MIPMAP_LINEAR], p = [e.REPEAT, e.CLAMP_TO_EDGE, e.MIRRORED_REPEAT]);
      var e;
      if ("number" == typeof arguments[1]) return A(t, arguments[1], arguments[2], arguments[3] || t.RGBA, arguments[4] || t.UNSIGNED_BYTE);
      if (Array.isArray(arguments[1])) return A(t, 0 | arguments[1][0], 0 | arguments[1][1], arguments[2] || t.RGBA, arguments[3] || t.UNSIGNED_BYTE);
      if ("object" == typeof arguments[1]) {
        var n = arguments[1],
          r = d(n) ? n : n.raw;
        if (r) return i = t, o = r, a = 0 | n.width, s = 0 | n.height, c = arguments[2] || t.RGBA, u = arguments[3] || t.UNSIGNED_BYTE, l = v(i), i.texImage2D(i.TEXTURE_2D, 0, c, c, u, o), new g(i, l, a, s, c, u);
        if (n.shape && n.data && n.stride) return function(t, e) {
          var n = e.dtype,
            r = e.shape.slice(),
            i = t.getParameter(t.MAX_TEXTURE_SIZE);
          if (r[0] < 0 || r[0] > i || r[1] < 0 || r[1] > i) throw new Error("gl-texture2d: Invalid texture size");
          var o = E(r, e.stride.slice()),
            a = 0;
          "float32" === n ? a = t.FLOAT : "float64" === n ? (a = t.FLOAT, o = !1, n = "float32") : "uint8" === n ? a = t.UNSIGNED_BYTE : (a = t.UNSIGNED_BYTE, o = !1, n = "uint8");
          var s, c, u = 0;
          if (2 === r.length) u = t.LUMINANCE, r = [r[0], r[1], 1], e = m(e.data, r, [e.stride[0], e.stride[1], 1], e.offset);
          else {
            if (3 !== r.length) throw new Error("gl-texture2d: Invalid shape for texture");
            if (1 === r[2]) u = t.ALPHA;
            else if (2 === r[2]) u = t.LUMINANCE_ALPHA;
            else if (3 === r[2]) u = t.RGB;
            else {
              if (4 !== r[2]) throw new Error("gl-texture2d: Invalid shape for pixel coords");
              u = t.RGBA
            }
          }
          a !== t.FLOAT || t.getExtension("OES_texture_float") || (a = t.UNSIGNED_BYTE, o = !1);
          var l = e.size;
          if (o) s = 0 === e.offset && e.data.length === l ? e.data : e.data.subarray(e.offset, e.offset + l);
          else {
            var h = [r[2], r[2] * r[0], 1];
            c = b.malloc(l, n);
            var f = m(c, r, h, 0);
            "float32" !== n && "float64" !== n || a !== t.UNSIGNED_BYTE ? y.assign(f, e) : _(f, e), s = c.subarray(0, l)
          }
          var p = v(t);
          t.texImage2D(t.TEXTURE_2D, 0, u, r[0], r[1], 0, u, a, s), o || b.free(c);
          return new g(t, p, r[0], r[1], u, a)
        }(t, n)
      }
      var i, o, a, s, c, u, l;
      throw new Error("gl-texture2d: Invalid arguments for texture2d constructor")
    };
    var h = null,
      f = null,
      p = null;

    function d(t) {
      return "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLVideoElement && t instanceof HTMLVideoElement || "undefined" != typeof ImageData && t instanceof ImageData
    }
    var _ = function(t, e) {
      y.muls(t, e, 255)
    };

    function r(t, e, n) {
      var r = t.gl,
        i = r.getParameter(r.MAX_TEXTURE_SIZE);
      if (e < 0 || i < e || n < 0 || i < n) throw new Error("gl-texture2d: Invalid texture size");
      return t._shape = [e, n], t.bind(), r.texImage2D(r.TEXTURE_2D, 0, t.format, e, n, 0, t.format, t.type, null), t._mipLevels = [0], t
    }

    function g(t, e, n, r, i, o) {
      this.gl = t, this.handle = e, this.format = i, this.type = o, this._shape = [n, r], this._mipLevels = [0], this._magFilter = t.NEAREST, this._minFilter = t.NEAREST, this._wrapS = t.CLAMP_TO_EDGE, this._wrapT = t.CLAMP_TO_EDGE, this._anisoSamples = 1;
      var a = this,
        s = [this._wrapS, this._wrapT];
      Object.defineProperties(s, [{
        get: function() {
          return a._wrapS
        },
        set: function(t) {
          return a.wrapS = t
        }
      }, {
        get: function() {
          return a._wrapT
        },
        set: function(t) {
          return a.wrapT = t
        }
      }]), this._wrapVector = s;
      var c = [this._shape[0], this._shape[1]];
      Object.defineProperties(c, [{
        get: function() {
          return a._shape[0]
        },
        set: function(t) {
          return a.width = t
        }
      }, {
        get: function() {
          return a._shape[1]
        },
        set: function(t) {
          return a.height = t
        }
      }]), this._shapeVector = c
    }
    var i = g.prototype;

    function E(t, e) {
      return 3 === t.length ? 1 === e[2] && e[1] === t[0] * t[2] && e[0] === t[2] : 1 === e[0] && e[1] === t[0]
    }

    function v(t) {
      var e = t.createTexture();
      return t.bindTexture(t.TEXTURE_2D, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), e
    }

    function A(t, e, n, r, i) {
      var o = t.getParameter(t.MAX_TEXTURE_SIZE);
      if (e < 0 || o < e || n < 0 || o < n) throw new Error("gl-texture2d: Invalid texture shape");
      if (i === t.FLOAT && !t.getExtension("OES_texture_float")) throw new Error("gl-texture2d: Floating point textures not supported on this platform");
      var a = v(t);
      return t.texImage2D(t.TEXTURE_2D, 0, r, e, n, 0, r, i, null), new g(t, a, e, n, r, i)
    }
    Object.defineProperties(i, {
      minFilter: {
        get: function() {
          return this._minFilter
        },
        set: function(t) {
          this.bind();
          var e = this.gl;
          if (this.type === e.FLOAT && 0 <= h.indexOf(t) && (e.getExtension("OES_texture_float_linear") || (t = e.NEAREST)), f.indexOf(t) < 0) throw new Error("gl-texture2d: Unknown filter mode " + t);
          return e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t), this._minFilter = t
        }
      },
      magFilter: {
        get: function() {
          return this._magFilter
        },
        set: function(t) {
          this.bind();
          var e = this.gl;
          if (this.type === e.FLOAT && 0 <= h.indexOf(t) && (e.getExtension("OES_texture_float_linear") || (t = e.NEAREST)), f.indexOf(t) < 0) throw new Error("gl-texture2d: Unknown filter mode " + t);
          return e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t), this._magFilter = t
        }
      },
      mipSamples: {
        get: function() {
          return this._anisoSamples
        },
        set: function(t) {
          var e = this._anisoSamples;
          if (this._anisoSamples = 0 | Math.max(t, 1), e !== this._anisoSamples) {
            var n = this.gl.getExtension("EXT_texture_filter_anisotropic");
            n && this.gl.texParameterf(this.gl.TEXTURE_2D, n.TEXTURE_MAX_ANISOTROPY_EXT, this._anisoSamples)
          }
          return this._anisoSamples
        }
      },
      wrapS: {
        get: function() {
          return this._wrapS
        },
        set: function(t) {
          if (this.bind(), p.indexOf(t) < 0) throw new Error("gl-texture2d: Unknown wrap mode " + t);
          return this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, t), this._wrapS = t
        }
      },
      wrapT: {
        get: function() {
          return this._wrapT
        },
        set: function(t) {
          if (this.bind(), p.indexOf(t) < 0) throw new Error("gl-texture2d: Unknown wrap mode " + t);
          return this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, t), this._wrapT = t
        }
      },
      wrap: {
        get: function() {
          return this._wrapVector
        },
        set: function(t) {
          if (Array.isArray(t) || (t = [t, t]), 2 !== t.length) throw new Error("gl-texture2d: Must specify wrap mode for rows and columns");
          for (var e = 0; e < 2; ++e)
            if (p.indexOf(t[e]) < 0) throw new Error("gl-texture2d: Unknown wrap mode " + t);
          this._wrapS = t[0], this._wrapT = t[1];
          var n = this.gl;
          return this.bind(), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, this._wrapS), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, this._wrapT), t
        }
      },
      shape: {
        get: function() {
          return this._shapeVector
        },
        set: function(t) {
          if (Array.isArray(t)) {
            if (2 !== t.length) throw new Error("gl-texture2d: Invalid texture shape")
          } else t = [0 | t, 0 | t];
          return r(this, 0 | t[0], 0 | t[1]), [0 | t[0], 0 | t[1]]
        }
      },
      width: {
        get: function() {
          return this._shape[0]
        },
        set: function(t) {
          return r(this, t |= 0, this._shape[1]), t
        }
      },
      height: {
        get: function() {
          return this._shape[1]
        },
        set: function(t) {
          return t |= 0, r(this, this._shape[0], t), t
        }
      }
    }), i.bind = function(t) {
      var e = this.gl;
      return void 0 !== t && e.activeTexture(e.TEXTURE0 + (0 | t)), e.bindTexture(e.TEXTURE_2D, this.handle), void 0 !== t ? 0 | t : e.getParameter(e.ACTIVE_TEXTURE) - e.TEXTURE0
    }, i.dispose = function() {
      this.gl.deleteTexture(this.handle)
    }, i.generateMipmap = function() {
      this.bind(), this.gl.generateMipmap(this.gl.TEXTURE_2D);
      for (var t = Math.min(this._shape[0], this._shape[1]), e = 0; 0 < t; ++e, t >>>= 1) this._mipLevels.indexOf(e) < 0 && this._mipLevels.push(e)
    }, i.setPixels = function(t, e, n, r) {
      var i = this.gl;
      this.bind(), Array.isArray(e) ? (r = n, n = 0 | e[1], e = 0 | e[0]) : (e = e || 0, n = n || 0), r = r || 0;
      var o = d(t) ? t : t.raw;
      if (o) {
        this._mipLevels.indexOf(r) < 0 ? (i.texImage2D(i.TEXTURE_2D, 0, this.format, this.format, this.type, o), this._mipLevels.push(r)) : i.texSubImage2D(i.TEXTURE_2D, r, e, n, this.format, this.type, o)
      } else {
        if (!(t.shape && t.stride && t.data)) throw new Error("gl-texture2d: Unsupported data type");
        if (t.shape.length < 2 || e + t.shape[1] > this._shape[1] >>> r || n + t.shape[0] > this._shape[0] >>> r || e < 0 || n < 0) throw new Error("gl-texture2d: Texture dimensions are out of bounds");
        ! function(t, e, n, r, i, o, a, s) {
          var c = s.dtype,
            u = s.shape.slice();
          if (u.length < 2 || 3 < u.length) throw new Error("gl-texture2d: Invalid ndarray, must be 2d or 3d");
          var l = 0,
            h = 0,
            f = E(u, s.stride.slice());
          "float32" === c ? l = t.FLOAT : "float64" === c ? (l = t.FLOAT, f = !1, c = "float32") : "uint8" === c ? l = t.UNSIGNED_BYTE : (l = t.UNSIGNED_BYTE, f = !1, c = "uint8");
          if (2 === u.length) h = t.LUMINANCE, u = [u[0], u[1], 1], s = m(s.data, u, [s.stride[0], s.stride[1], 1], s.offset);
          else {
            if (3 !== u.length) throw new Error("gl-texture2d: Invalid shape for texture");
            if (1 === u[2]) h = t.ALPHA;
            else if (2 === u[2]) h = t.LUMINANCE_ALPHA;
            else if (3 === u[2]) h = t.RGB;
            else {
              if (4 !== u[2]) throw new Error("gl-texture2d: Invalid shape for pixel coords");
              h = t.RGBA
            }
            u[2]
          }
          h !== t.LUMINANCE && h !== t.ALPHA || i !== t.LUMINANCE && i !== t.ALPHA || (h = i);
          if (h !== i) throw new Error("gl-texture2d: Incompatible texture format for setPixels");
          var p = s.size,
            d = a.indexOf(r) < 0;
          d && a.push(r);
          if (l === o && f) 0 === s.offset && s.data.length === p ? d ? t.texImage2D(t.TEXTURE_2D, r, i, u[0], u[1], 0, i, o, s.data) : t.texSubImage2D(t.TEXTURE_2D, r, e, n, u[0], u[1], i, o, s.data) : d ? t.texImage2D(t.TEXTURE_2D, r, i, u[0], u[1], 0, i, o, s.data.subarray(s.offset, s.offset + p)) : t.texSubImage2D(t.TEXTURE_2D, r, e, n, u[0], u[1], i, o, s.data.subarray(s.offset, s.offset + p));
          else {
            var g;
            g = o === t.FLOAT ? b.mallocFloat32(p) : b.mallocUint8(p);
            var v = m(g, u, [u[2], u[2] * u[0], 1]);
            l === t.FLOAT && o === t.UNSIGNED_BYTE ? _(v, s) : y.assign(v, s), d ? t.texImage2D(t.TEXTURE_2D, r, i, u[0], u[1], 0, i, o, g.subarray(0, p)) : t.texSubImage2D(t.TEXTURE_2D, r, e, n, u[0], u[1], i, o, g.subarray(0, p)), o === t.FLOAT ? b.freeFloat32(g) : b.freeUint8(g)
          }
        }(i, e, n, r, this.format, this.type, this._mipLevels, t)
      }
    }
  }, {
    ndarray: 205,
    "ndarray-ops": 204,
    "typedarray-pool": 275
  }],
  127: [function(t, e, n) {
    "use strict";
    e.exports = function(t, e, n) {
      e ? e.bind() : t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null);
      var r = 0 | t.getParameter(t.MAX_VERTEX_ATTRIBS);
      if (n) {
        if (n.length > r) throw new Error("gl-vao: Too many vertex attributes");
        for (var i = 0; i < n.length; ++i) {
          var o = n[i];
          if (o.buffer) {
            var a = o.buffer,
              s = o.size || 4,
              c = o.type || t.FLOAT,
              u = !!o.normalized,
              l = o.stride || 0,
              h = o.offset || 0;
            a.bind(), t.enableVertexAttribArray(i), t.vertexAttribPointer(i, s, c, u, l, h)
          } else {
            if ("number" == typeof o) t.vertexAttrib1f(i, o);
            else if (1 === o.length) t.vertexAttrib1f(i, o[0]);
            else if (2 === o.length) t.vertexAttrib2f(i, o[0], o[1]);
            else if (3 === o.length) t.vertexAttrib3f(i, o[0], o[1], o[2]);
            else {
              if (4 !== o.length) throw new Error("gl-vao: Invalid vertex attribute");
              t.vertexAttrib4f(i, o[0], o[1], o[2], o[3])
            }
            t.disableVertexAttribArray(i)
          }
        }
        for (; i < r; ++i) t.disableVertexAttribArray(i)
      } else
        for (t.bindBuffer(t.ARRAY_BUFFER, null), i = 0; i < r; ++i) t.disableVertexAttribArray(i)
    }
  }, {}],
  128: [function(t, e, n) {
    "use strict";
    var r = t("./do-bind.js");

    function i(t) {
      this.gl = t, this._elements = null, this._attributes = null, this._elementsType = t.UNSIGNED_SHORT
    }
    i.prototype.bind = function() {
      r(this.gl, this._elements, this._attributes)
    }, i.prototype.update = function(t, e, n) {
      this._elements = e, this._attributes = t, this._elementsType = n || this.gl.UNSIGNED_SHORT
    }, i.prototype.dispose = function() {}, i.prototype.unbind = function() {}, i.prototype.draw = function(t, e, n) {
      n = n || 0;
      var r = this.gl;
      this._elements ? r.drawElements(t, e, this._elementsType, n) : r.drawArrays(t, n, e)
    }, e.exports = function(t) {
      return new i(t)
    }
  }, {
    "./do-bind.js": 127
  }],
  129: [function(t, e, n) {
    "use strict";
    var o = t("./do-bind.js");

    function a(t, e, n, r, i, o) {
      this.location = t, this.dimension = e, this.a = n, this.b = r, this.c = i, this.d = o
    }

    function r(t, e, n) {
      this.gl = t, this._ext = e, this.handle = n, this._attribs = [], this._useElements = !1, this._elementsType = t.UNSIGNED_SHORT
    }
    a.prototype.bind = function(t) {
      switch (this.dimension) {
        case 1:
          t.vertexAttrib1f(this.location, this.a);
          break;
        case 2:
          t.vertexAttrib2f(this.location, this.a, this.b);
          break;
        case 3:
          t.vertexAttrib3f(this.location, this.a, this.b, this.c);
          break;
        case 4:
          t.vertexAttrib4f(this.location, this.a, this.b, this.c, this.d)
      }
    }, r.prototype.bind = function() {
      this._ext.bindVertexArrayOES(this.handle);
      for (var t = 0; t < this._attribs.length; ++t) this._attribs[t].bind(this.gl)
    }, r.prototype.unbind = function() {
      this._ext.bindVertexArrayOES(null)
    }, r.prototype.dispose = function() {
      this._ext.deleteVertexArrayOES(this.handle)
    }, r.prototype.update = function(t, e, n) {
      if (this.bind(), o(this.gl, e, t), this.unbind(), this._attribs.length = 0, t)
        for (var r = 0; r < t.length; ++r) {
          var i = t[r];
          "number" == typeof i ? this._attribs.push(new a(r, 1, i)) : Array.isArray(i) && this._attribs.push(new a(r, i.length, i[0], i[1], i[2], i[3]))
        }
      this._useElements = !!e, this._elementsType = n || this.gl.UNSIGNED_SHORT
    }, r.prototype.draw = function(t, e, n) {
      n = n || 0;
      var r = this.gl;
      this._useElements ? r.drawElements(t, e, this._elementsType, n) : r.drawArrays(t, n, e)
    }, e.exports = function(t, e) {
      return new r(t, e, e.createVertexArrayOES())
    }
  }, {
    "./do-bind.js": 127
  }],
  130: [function(t, e, n) {
    "use strict";
    var a = t("./lib/vao-native.js"),
      s = t("./lib/vao-emulated.js");

    function c(t) {
      this.bindVertexArrayOES = t.bindVertexArray.bind(t), this.createVertexArrayOES = t.createVertexArray.bind(t), this.deleteVertexArrayOES = t.deleteVertexArray.bind(t)
    }
    e.exports = function(t, e, n, r) {
      var i, o = t.createVertexArray ? new c(t) : t.getExtension("OES_vertex_array_object");
      return (i = o ? a(t, o) : s(t)).update(e, n, r), i
    }
  }, {
    "./lib/vao-emulated.js": 128,
    "./lib/vao-native.js": 129
  }],
  131: [function(t, e, n) {
    e.exports = function(t, e, n) {
      return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
    }
  }, {}],
  132: [function(t, e, n) {
    e.exports = function(t, e) {
      return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t
    }
  }, {}],
  133: [function(t, e, n) {
    e.exports = function(t) {
      var e = new Float32Array(2);
      return e[0] = t[0], e[1] = t[1], e
    }
  }, {}],
  134: [function(t, e, n) {
    e.exports = function(t, e) {
      return t[0] = e[0], t[1] = e[1], t
    }
  }, {}],
  135: [function(t, e, n) {
    e.exports = function() {
      var t = new Float32Array(2);
      return t[0] = 0, t[1] = 0, t
    }
  }, {}],
  136: [function(t, e, n) {
    e.exports = function(t, e, n) {
      var r = e[0] * n[1] - e[1] * n[0];
      return t[0] = t[1] = 0, t[2] = r, t
    }
  }, {}],
  137: [function(t, e, n) {
    e.exports = t("./distance")
  }, {
    "./distance": 138
  }],
  138: [function(t, e, n) {
    e.exports = function(t, e) {
      var n = e[0] - t[0],
        r = e[1] - t[1];
      return Math.sqrt(n * n + r * r)
    }
  }, {}],
  139: [function(t, e, n) {
    e.exports = t("./divide")
  }, {
    "./divide": 140
  }],
  140: [function(t, e, n) {
    e.exports = function(t, e, n) {
      return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
    }
  }, {}],
  141: [function(t, e, n) {
    e.exports = function(t, e) {
      return t[0] * e[0] + t[1] * e[1]
    }
  }, {}],
  142: [function(t, e, n) {
    e.exports = 1e-6
  }, {}],
  143: [function(t, e, n) {
    e.exports = function(t, e) {
      var n = t[0],
        r = t[1],
        i = e[0],
        o = e[1];
      return Math.abs(n - i) <= a * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(r - o) <= a * Math.max(1, Math.abs(r), Math.abs(o))
    };
    var a = t("./epsilon")
  }, {
    "./epsilon": 142
  }],
  144: [function(t, e, n) {
    e.exports = function(t, e) {
      return t[0] === e[0] && t[1] === e[1]
    }
  }, {}],
  145: [function(t, e, n) {
    e.exports = function(t, e) {
      return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t
    }
  }, {}],
  146: [function(t, e, n) {
    e.exports = function(t, e, n, r, i, o) {
      var a, s;
      e || (e = 2);
      n || (n = 0);
      s = r ? Math.min(r * e + n, t.length) : t.length;
      for (a = n; a < s; a += e) c[0] = t[a], c[1] = t[a + 1], i(c, c, o), t[a] = c[0], t[a + 1] = c[1];
      return t
    };
    var c = t("./create")()
  }, {
    "./create": 135
  }],
  147: [function(t, e, n) {
    e.exports = function(t, e) {
      var n = new Float32Array(2);
      return n[0] = t, n[1] = e, n
    }
  }, {}],
  148: [function(t, e, n) {
    e.exports = {
      EPSILON: t("./epsilon"),
      create: t("./create"),
      clone: t("./clone"),
      fromValues: t("./fromValues"),
      copy: t("./copy"),
      set: t("./set"),
      equals: t("./equals"),
      exactEquals: t("./exactEquals"),
      add: t("./add"),
      subtract: t("./subtract"),
      sub: t("./sub"),
      multiply: t("./multiply"),
      mul: t("./mul"),
      divide: t("./divide"),
      div: t("./div"),
      inverse: t("./inverse"),
      min: t("./min"),
      max: t("./max"),
      rotate: t("./rotate"),
      floor: t("./floor"),
      ceil: t("./ceil"),
      round: t("./round"),
      scale: t("./scale"),
      scaleAndAdd: t("./scaleAndAdd"),
      distance: t("./distance"),
      dist: t("./dist"),
      squaredDistance: t("./squaredDistance"),
      sqrDist: t("./sqrDist"),
      length: t("./length"),
      len: t("./len"),
      squaredLength: t("./squaredLength"),
      sqrLen: t("./sqrLen"),
      negate: t("./negate"),
      normalize: t("./normalize"),
      dot: t("./dot"),
      cross: t("./cross"),
      lerp: t("./lerp"),
      random: t("./random"),
      transformMat2: t("./transformMat2"),
      transformMat2d: t("./transformMat2d"),
      transformMat3: t("./transformMat3"),
      transformMat4: t("./transformMat4"),
      forEach: t("./forEach"),
      limit: t("./limit")
    }
  }, {
    "./add": 131,
    "./ceil": 132,
    "./clone": 133,
    "./copy": 134,
    "./create": 135,
    "./cross": 136,
    "./dist": 137,
    "./distance": 138,
    "./div": 139,
    "./divide": 140,
    "./dot": 141,
    "./epsilon": 142,
    "./equals": 143,
    "./exactEquals": 144,
    "./floor": 145,
    "./forEach": 146,
    "./fromValues": 147,
    "./inverse": 149,
    "./len": 150,
    "./length": 151,
    "./lerp": 152,
    "./limit": 153,
    "./max": 154,
    "./min": 155,
    "./mul": 156,
    "./multiply": 157,
    "./negate": 158,
    "./normalize": 159,
    "./random": 160,
    "./rotate": 161,
    "./round": 162,
    "./scale": 163,
    "./scaleAndAdd": 164,
    "./set": 165,
    "./sqrDist": 166,
    "./sqrLen": 167,
    "./squaredDistance": 168,
    "./squaredLength": 169,
    "./sub": 170,
    "./subtract": 171,
    "./transformMat2": 172,
    "./transformMat2d": 173,
    "./transformMat3": 174,
    "./transformMat4": 175
  }],
  149: [function(t, e, n) {
    e.exports = function(t, e) {
      return t[0] = 1 / e[0], t[1] = 1 / e[1], t
    }
  }, {}],
  150: [function(t, e, n) {
    e.exports = t("./length")
  }, {
    "./length": 151
  }],
  151: [function(t, e, n) {
    e.exports = function(t) {
      var e = t[0],
        n = t[1];
      return Math.sqrt(e * e + n * n)
    }
  }, {}],
  152: [function(t, e, n) {
    e.exports = function(t, e, n, r) {
      var i = e[0],
        o = e[1];
      return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t
    }
  }, {}],
  153: [function(t, e, n) {
    e.exports = function(t, e, n) {
      var r = e[0] * e[0] + e[1] * e[1];
      if (n * n < r) {
        var i = Math.sqrt(r);
        t[0] = e[0] / i * n, t[1] = e[1] / i * n
      } else t[0] = e[0], t[1] = e[1];
      return t
    }
  }, {}],
  154: [function(t, e, n) {
    e.exports = function(t, e, n) {
      return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
    }
  }, {}],
  155: [function(t, e, n) {
    e.exports = function(t, e, n) {
      return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
    }
  }, {}],
  156: [function(t, e, n) {
    e.exports = t("./multiply")
  }, {
    "./multiply": 157
  }],
  157: [function(t, e, n) {
    e.exports = function(t, e, n) {
      return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
    }
  }, {}],
  158: [function(t, e, n) {
    e.exports = function(t, e) {
      return t[0] = -e[0], t[1] = -e[1], t
    }
  }, {}],
  159: [function(t, e, n) {
    e.exports = function(t, e) {
      var n = e[0],
        r = e[1],
        i = n * n + r * r;
      0 < i && (i = 1 / Math.sqrt(i), t[0] = e[0] * i, t[1] = e[1] * i);
      return t
    }
  }, {}],
  160: [function(t, e, n) {
    e.exports = function(t, e) {
      e = e || 1;
      var n = 2 * Math.random() * Math.PI;
      return t[0] = Math.cos(n) * e, t[1] = Math.sin(n) * e, t
    }
  }, {}],
  161: [function(t, e, n) {
    e.exports = function(t, e, n) {
      var r = Math.cos(n),
        i = Math.sin(n),
        o = e[0],
        a = e[1];
      return t[0] = o * r - a * i, t[1] = o * i + a * r, t
    }
  }, {}],
  162: [function(t, e, n) {
    e.exports = function(t, e) {
      return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t
    }
  }, {}],
  163: [function(t, e, n) {
    e.exports = function(t, e, n) {
      return t[0] = e[0] * n, t[1] = e[1] * n, t
    }
  }, {}],
  164: [function(t, e, n) {
    e.exports = function(t, e, n, r) {
      return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t
    }
  }, {}],
  165: [function(t, e, n) {
    e.exports = function(t, e, n) {
      return t[0] = e, t[1] = n, t
    }
  }, {}],
  166: [function(t, e, n) {
    e.exports = t("./squaredDistance")
  }, {
    "./squaredDistance": 168
  }],
  167: [function(t, e, n) {
    e.exports = t("./squaredLength")
  }, {
    "./squaredLength": 169
  }],
  168: [function(t, e, n) {
    e.exports = function(t, e) {
      var n = e[0] - t[0],
        r = e[1] - t[1];
      return n * n + r * r
    }
  }, {}],
  169: [function(t, e, n) {
    e.exports = function(t) {
      var e = t[0],
        n = t[1];
      return e * e + n * n
    }
  }, {}],
  170: [function(t, e, n) {
    e.exports = t("./subtract")
  }, {
    "./subtract": 171
  }],
  171: [function(t, e, n) {
    e.exports = function(t, e, n) {
      return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
    }
  }, {}],
  172: [function(t, e, n) {
    e.exports = function(t, e, n) {
      var r = e[0],
        i = e[1];
      return t[0] = n[0] * r + n[2] * i, t[1] = n[1] * r + n[3] * i, t
    }
  }, {}],
  173: [function(t, e, n) {
    e.exports = function(t, e, n) {
      var r = e[0],
        i = e[1];
      return t[0] = n[0] * r + n[2] * i + n[4], t[1] = n[1] * r + n[3] * i + n[5], t
    }
  }, {}],
  174: [function(t, e, n) {
    e.exports = function(t, e, n) {
      var r = e[0],
        i = e[1];
      return t[0] = n[0] * r + n[3] * i + n[6], t[1] = n[1] * r + n[4] * i + n[7], t
    }
  }, {}],
  175: [function(t, e, n) {
    e.exports = function(t, e, n) {
      var r = e[0],
        i = e[1];
      return t[0] = n[0] * r + n[4] * i + n[12], t[1] = n[1] * r + n[5] * i + n[13], t
    }
  }, {}],
  176: [function(t, e, n) {
    var s = t("glsl-tokenizer"),
      c = t("atob-lite");
    e.exports = function(t) {
      for (var e = Array.isArray(t) ? t : s(t), n = 0; n < e.length; n++) {
        var r = e[n];
        if ("preprocessor" === r.type) {
          var i = r.data.match(/\#define\s+SHADER_NAME(_B64)?\s+(.+)$/);
          if (i && i[2]) {
            var o = i[1],
              a = i[2];
            return (o ? c(a) : a).trim()
          }
        }
      }
    }
  }, {
    "atob-lite": 35,
    "glsl-tokenizer": 183
  }],
  177: [function(t, e, n) {
    e.exports = function(t) {
      var n, e, r, i = 0,
        o = 0,
        a = F,
        s = [],
        c = [],
        u = 1,
        l = 0,
        h = 0,
        f = !1,
        p = !1,
        d = "",
        g = C,
        v = M;
      "300 es" === (t = t || {}).version && (g = O, v = P);
      for (var m = {}, y = {}, i = 0; i < g.length; i++) m[g[i]] = !0;
      for (var i = 0; i < v.length; i++) y[v[i]] = !0;
      return function(t) {
        return c = [], null !== t ? function(t) {
          i = 0, t.toString && (t = t.toString());
          var e;
          d += t.replace(/\r\n/g, "\n"), r = d.length;
          for (; n = d[i], i < r;) {
            switch (e = i, a) {
              case q:
                i = w();
                break;
              case j:
              case U:
                i = A();
                break;
              case D:
                i = x();
                break;
              case k:
                i = R();
                break;
              case Y:
                i = S();
                break;
              case V:
                i = I();
                break;
              case N:
                i = L();
                break;
              case W:
                i = E();
                break;
              case F:
                i = _()
            }
            if (e !== i) switch (d[e]) {
              case "\n":
                l = 0, ++u;
                break;
              default:
                ++l
            }
          }
          return o += i, d = d.slice(i), c
        }(t) : function(t) {
          s.length && b(s.join(""));
          return a = H, b("(eof)"), c
        }()
      };

      function b(t) {
        t.length && c.push({
          type: Z[a],
          data: t,
          position: h,
          line: u,
          column: l
        })
      }

      function _() {
        return s = s.length ? [] : s, "/" === e && "*" === n ? (h = o + i - 1, a = q, e = n, i + 1) : "/" === e && "/" === n ? (h = o + i - 1, a = j, e = n, i + 1) : ("#" === n ? (a = U, h = o + i) : /\s/.test(n) ? (a = W, h = o + i) : (f = /\d/.test(n), p = /[^\w_]/.test(n), h = o + i, a = f ? k : p ? D : N), i)
      }

      function E() {
        return /[^\s]/g.test(n) ? (b(s.join("")), a = F, i) : (s.push(n), e = n, i + 1)
      }

      function A() {
        return "\r" !== n && "\n" !== n || "\\" === e ? (s.push(n), e = n, i + 1) : (b(s.join("")), a = F, i)
      }

      function w() {
        return "/" === n && "*" === e ? (s.push(n), b(s.join("")), a = F) : (s.push(n), e = n), i + 1
      }

      function x() {
        if ("." === e && /\d/.test(n)) return a = V, i;
        if ("/" === e && "*" === n) return a = q, i;
        if ("/" === e && "/" === n) return a = j, i;
        if ("." === n && s.length) {
          for (; T(s););
          return a = V, i
        }
        if (";" === n || ")" === n || "(" === n) {
          if (s.length)
            for (; T(s););
          return b(n), a = F, i + 1
        }
        var t = 2 === s.length && "=" !== n;
        if (/[\w_\d\s]/.test(n) || t) {
          for (; T(s););
          return a = F, i
        }
        return s.push(n), e = n, i + 1
      }

      function T(t) {
        for (var e, n, r = 0;;) {
          if (e = B.indexOf(t.slice(0, t.length + r).join("")), n = B[e], -1 === e) {
            if (0 < r-- + t.length) continue;
            n = t.slice(0, 1).join("")
          }
          return b(n), h += n.length, (s = s.slice(n.length)).length
        }
      }

      function S() {
        return /[^a-fA-F0-9]/.test(n) ? (b(s.join("")), a = F, i) : (s.push(n), e = n, i + 1)
      }

      function R() {
        return "." === n ? (s.push(n), a = V, e = n, i + 1) : /[eE]/.test(n) ? (s.push(n), a = V, e = n, i + 1) : "x" === n && 1 === s.length && "0" === s[0] ? (a = Y, s.push(n), e = n, i + 1) : /[^\d]/.test(n) ? (b(s.join("")), a = F, i) : (s.push(n), e = n, i + 1)
      }

      function I() {
        return "f" === n && (s.push(n), e = n, i += 1), /[eE]/.test(n) ? (s.push(n), e = n, i + 1) : ("-" !== n && "+" !== n || !/[eE]/.test(e)) && /[^\d]/.test(n) ? (b(s.join("")), a = F, i) : (s.push(n), e = n, i + 1)
      }

      function L() {
        if (/[^\d\w_]/.test(n)) {
          var t = s.join("");
          return a = y[t] ? X : m[t] ? G : z, b(s.join("")), a = F, i
        }
        return s.push(n), e = n, i + 1
      }
    };
    var M = t("./lib/literals"),
      B = t("./lib/operators"),
      C = t("./lib/builtins"),
      P = t("./lib/literals-300es"),
      O = t("./lib/builtins-300es"),
      F = 999,
      N = 9999,
      q = 0,
      j = 1,
      U = 2,
      D = 3,
      k = 4,
      V = 5,
      z = 6,
      G = 7,
      X = 8,
      W = 9,
      H = 10,
      Y = 11,
      Z = ["block-comment", "line-comment", "preprocessor", "operator", "integer", "float", "ident", "builtin", "keyword", "whitespace", "eof", "integer"]
  }, {
    "./lib/builtins": 179,
    "./lib/builtins-300es": 178,
    "./lib/literals": 181,
    "./lib/literals-300es": 180,
    "./lib/operators": 182
  }],
  178: [function(t, e, n) {
    var r = t("./builtins");
    r = r.slice().filter(function(t) {
      return !/^(gl\_|texture)/.test(t)
    }), e.exports = r.concat(["gl_VertexID", "gl_InstanceID", "gl_Position", "gl_PointSize", "gl_FragCoord", "gl_FrontFacing", "gl_FragDepth", "gl_PointCoord", "gl_MaxVertexAttribs", "gl_MaxVertexUniformVectors", "gl_MaxVertexOutputVectors", "gl_MaxFragmentInputVectors", "gl_MaxVertexTextureImageUnits", "gl_MaxCombinedTextureImageUnits", "gl_MaxTextureImageUnits", "gl_MaxFragmentUniformVectors", "gl_MaxDrawBuffers", "gl_MinProgramTexelOffset", "gl_MaxProgramTexelOffset", "gl_DepthRangeParameters", "gl_DepthRange", "trunc", "round", "roundEven", "isnan", "isinf", "floatBitsToInt", "floatBitsToUint", "intBitsToFloat", "uintBitsToFloat", "packSnorm2x16", "unpackSnorm2x16", "packUnorm2x16", "unpackUnorm2x16", "packHalf2x16", "unpackHalf2x16", "outerProduct", "transpose", "determinant", "inverse", "texture", "textureSize", "textureProj", "textureLod", "textureOffset", "texelFetch", "texelFetchOffset", "textureProjOffset", "textureLodOffset", "textureProjLod", "textureProjLodOffset", "textureGrad", "textureGradOffset", "textureProjGrad", "textureProjGradOffset"])
  }, {
    "./builtins": 179
  }],
  179: [function(t, e, n) {
    e.exports = ["abs", "acos", "all", "any", "asin", "atan", "ceil", "clamp", "cos", "cross", "dFdx", "dFdy", "degrees", "distance", "dot", "equal", "exp", "exp2", "faceforward", "floor", "fract", "gl_BackColor", "gl_BackLightModelProduct", "gl_BackLightProduct", "gl_BackMaterial", "gl_BackSecondaryColor", "gl_ClipPlane", "gl_ClipVertex", "gl_Color", "gl_DepthRange", "gl_DepthRangeParameters", "gl_EyePlaneQ", "gl_EyePlaneR", "gl_EyePlaneS", "gl_EyePlaneT", "gl_Fog", "gl_FogCoord", "gl_FogFragCoord", "gl_FogParameters", "gl_FragColor", "gl_FragCoord", "gl_FragData", "gl_FragDepth", "gl_FragDepthEXT", "gl_FrontColor", "gl_FrontFacing", "gl_FrontLightModelProduct", "gl_FrontLightProduct", "gl_FrontMaterial", "gl_FrontSecondaryColor", "gl_LightModel", "gl_LightModelParameters", "gl_LightModelProducts", "gl_LightProducts", "gl_LightSource", "gl_LightSourceParameters", "gl_MaterialParameters", "gl_MaxClipPlanes", "gl_MaxCombinedTextureImageUnits", "gl_MaxDrawBuffers", "gl_MaxFragmentUniformComponents", "gl_MaxLights", "gl_MaxTextureCoords", "gl_MaxTextureImageUnits", "gl_MaxTextureUnits", "gl_MaxVaryingFloats", "gl_MaxVertexAttribs", "gl_MaxVertexTextureImageUnits", "gl_MaxVertexUniformComponents", "gl_ModelViewMatrix", "gl_ModelViewMatrixInverse", "gl_ModelViewMatrixInverseTranspose", "gl_ModelViewMatrixTranspose", "gl_ModelViewProjectionMatrix", "gl_ModelViewProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_ModelViewProjectionMatrixTranspose", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_Normal", "gl_NormalMatrix", "gl_NormalScale", "gl_ObjectPlaneQ", "gl_ObjectPlaneR", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_Point", "gl_PointCoord", "gl_PointParameters", "gl_PointSize", "gl_Position", "gl_ProjectionMatrix", "gl_ProjectionMatrixInverse", "gl_ProjectionMatrixInverseTranspose", "gl_ProjectionMatrixTranspose", "gl_SecondaryColor", "gl_TexCoord", "gl_TextureEnvColor", "gl_TextureMatrix", "gl_TextureMatrixInverse", "gl_TextureMatrixInverseTranspose", "gl_TextureMatrixTranspose", "gl_Vertex", "greaterThan", "greaterThanEqual", "inversesqrt", "length", "lessThan", "lessThanEqual", "log", "log2", "matrixCompMult", "max", "min", "mix", "mod", "normalize", "not", "notEqual", "pow", "radians", "reflect", "refract", "sign", "sin", "smoothstep", "sqrt", "step", "tan", "texture2D", "texture2DLod", "texture2DProj", "texture2DProjLod", "textureCube", "textureCubeLod", "texture2DLodEXT", "texture2DProjLodEXT", "textureCubeLodEXT", "texture2DGradEXT", "texture2DProjGradEXT", "textureCubeGradEXT"]
  }, {}],
  180: [function(t, e, n) {
    var r = t("./literals");
    e.exports = r.slice().concat(["layout", "centroid", "smooth", "case", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "uvec2", "uvec3", "uvec4", "samplerCubeShadow", "sampler2DArray", "sampler2DArrayShadow", "isampler2D", "isampler3D", "isamplerCube", "isampler2DArray", "usampler2D", "usampler3D", "usamplerCube", "usampler2DArray", "coherent", "restrict", "readonly", "writeonly", "resource", "atomic_uint", "noperspective", "patch", "sample", "subroutine", "common", "partition", "active", "filter", "image1D", "image2D", "image3D", "imageCube", "iimage1D", "iimage2D", "iimage3D", "iimageCube", "uimage1D", "uimage2D", "uimage3D", "uimageCube", "image1DArray", "image2DArray", "iimage1DArray", "iimage2DArray", "uimage1DArray", "uimage2DArray", "image1DShadow", "image2DShadow", "image1DArrayShadow", "image2DArrayShadow", "imageBuffer", "iimageBuffer", "uimageBuffer", "sampler1DArray", "sampler1DArrayShadow", "isampler1D", "isampler1DArray", "usampler1D", "usampler1DArray", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray"])
  }, {
    "./literals": 181
  }],
  181: [function(t, e, n) {
    e.exports = ["precision", "highp", "mediump", "lowp", "attribute", "const", "uniform", "varying", "break", "continue", "do", "for", "while", "if", "else", "in", "out", "inout", "float", "int", "uint", "void", "bool", "true", "false", "discard", "return", "mat2", "mat3", "mat4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "asm", "class", "union", "enum", "typedef", "template", "this", "packed", "goto", "switch", "default", "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "long", "short", "double", "half", "fixed", "unsigned", "input", "output", "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "sampler2DRect", "sampler3DRect", "sampler2DRectShadow", "sizeof", "cast", "namespace", "using"]
  }, {}],
  182: [function(t, e, n) {
    e.exports = ["<<=", ">>=", "++", "--", "<<", ">>", "<=", ">=", "==", "!=", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "^^", "^=", "|=", "(", ")", "[", "]", ".", "!", "~", "*", "/", "%", "+", "-", "<", ">", "&", "^", "|", "?", ":", "=", ",", ";", "{", "}"]
  }, {}],
  183: [function(t, e, n) {
    var i = t("./index");
    e.exports = function(t, e) {
      var n = i(e),
        r = [];
      return r = (r = r.concat(n(t))).concat(n(null))
    }
  }, {
    "./index": 177
  }],
  184: [function(t, e, n) {
    e.exports = function(t) {
      "string" == typeof t && (t = [t]);
      for (var e = [].slice.call(arguments, 1), n = [], r = 0; r < t.length - 1; r++) n.push(t[r], e[r] || "");
      return n.push(t[r]), n.join("")
    }
  }, {}],
  185: [function(W, H, t) {
    (function(G, X) {
      var t, e;
      (function() {
        "use strict";

        function u(t) {
          return "function" == typeof t
        }
        var e, n, a = Array.isArray ? Array.isArray : function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
          },
          r = 0,
          s = function(t, e) {
            m[r] = t, m[r + 1] = e, 2 === (r += 2) && (n ? n(y) : f())
          };
        var t = "undefined" != typeof window ? window : void 0,
          i = t || {},
          o = i.MutationObserver || i.WebKitMutationObserver,
          c = void 0 !== G && "[object process]" === {}.toString.call(G),
          l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

        function h() {
          return function() {
            setTimeout(y, 1)
          }
        }
        var f, p, d, g, v, m = new Array(1e3);

        function y() {
          for (var t = 0; t < r; t += 2) {
            (0, m[t])(m[t + 1]), m[t] = void 0, m[t + 1] = void 0
          }
          r = 0
        }

        function b() {}
        f = c ? function() {
          G.nextTick(y)
        } : o ? (d = 0, g = new o(y), v = document.createTextNode(""), g.observe(v, {
          characterData: !0
        }), function() {
          v.data = d = ++d % 2
        }) : l ? ((p = new MessageChannel).port1.onmessage = y, function() {
          p.port2.postMessage(0)
        }) : void 0 === t && "function" == typeof W ? function() {
          try {
            var t = W("vertx");
            return e = t.runOnLoop || t.runOnContext,
              function() {
                e(y)
              }
          } catch (t) {
            return h()
          }
        }() : h();
        var _ = void 0,
          E = 1,
          A = 2,
          w = new B;

        function x(t, e) {
          if (e.constructor === t.constructor) o = t, (a = e)._state === E ? R(o, a._result) : a._state === A ? I(o, a._result) : L(a, void 0, function(t) {
            T(o, t)
          }, function(t) {
            I(o, t)
          });
          else {
            var n = function(t) {
              try {
                return t.then
              } catch (t) {
                return w.error = t, w
              }
            }(e);
            n === w ? I(t, w.error) : void 0 === n ? R(t, e) : u(n) ? (r = e, i = n, s(function(e) {
              var n = !1,
                t = function(t, e, n, r) {
                  try {
                    t.call(e, n, r)
                  } catch (t) {
                    return t
                  }
                }(i, r, function(t) {
                  n || (n = !0, r !== t ? T(e, t) : R(e, t))
                }, function(t) {
                  n || (n = !0, I(e, t))
                }, e._label);
              !n && t && (n = !0, I(e, t))
            }, t)) : R(t, e)
          }
          var r, i, o, a
        }

        function T(t, e) {
          var n;
          t === e ? I(t, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof(n = e) || "object" == typeof n && null !== n ? x(t, e) : R(t, e)
        }

        function S(t) {
          t._onerror && t._onerror(t._result), M(t)
        }

        function R(t, e) {
          t._state === _ && (t._result = e, t._state = E, 0 !== t._subscribers.length && s(M, t))
        }

        function I(t, e) {
          t._state === _ && (t._state = A, t._result = e, s(S, t))
        }

        function L(t, e, n, r) {
          var i = t._subscribers,
            o = i.length;
          t._onerror = null, i[o] = e, i[o + E] = n, i[o + A] = r, 0 === o && t._state && s(M, t)
        }

        function M(t) {
          var e = t._subscribers,
            n = t._state;
          if (0 !== e.length) {
            for (var r, i, o = t._result, a = 0; a < e.length; a += 3) r = e[a], i = e[a + n], r ? P(n, r, i, o) : i(o);
            t._subscribers.length = 0
          }
        }

        function B() {
          this.error = null
        }
        var C = new B;

        function P(t, e, n, r) {
          var i, o, a, s, c = u(n);
          if (c) {
            if ((i = function(t, e) {
                try {
                  return t(e)
                } catch (t) {
                  return C.error = t, C
                }
              }(n, r)) === C ? (s = !0, o = i.error, i = null) : a = !0, e === i) return void I(e, new TypeError("A promises callback cannot return that same promise."))
          } else i = r, a = !0;
          e._state !== _ || (c && a ? T(e, i) : s ? I(e, o) : t === E ? R(e, i) : t === A && I(e, i))
        }

        function O(t, e) {
          var n = this;
          n._instanceConstructor = t, n.promise = new t(b), n._validateInput(e) ? (n._input = e, n.length = e.length, n._remaining = e.length, n._init(), 0 === n.length ? R(n.promise, n._result) : (n.length = n.length || 0, n._enumerate(), 0 === n._remaining && R(n.promise, n._result))) : I(n.promise, n._validationError())
        }
        O.prototype._validateInput = function(t) {
          return a(t)
        }, O.prototype._validationError = function() {
          return new Error("Array Methods must be provided an Array")
        }, O.prototype._init = function() {
          this._result = new Array(this.length)
        };
        var F = O;
        O.prototype._enumerate = function() {
          for (var t = this.length, e = this.promise, n = this._input, r = 0; e._state === _ && r < t; r++) this._eachEntry(n[r], r)
        }, O.prototype._eachEntry = function(t, e) {
          var n, r = this._instanceConstructor;
          "object" == typeof(n = t) && null !== n ? t.constructor === r && t._state !== _ ? (t._onerror = null, this._settledAt(t._state, e, t._result)) : this._willSettleAt(r.resolve(t), e) : (this._remaining--, this._result[e] = t)
        }, O.prototype._settledAt = function(t, e, n) {
          var r = this.promise;
          r._state === _ && (this._remaining--, t === A ? I(r, n) : this._result[e] = n), 0 === this._remaining && R(r, this._result)
        }, O.prototype._willSettleAt = function(t, e) {
          var n = this;
          L(t, void 0, function(t) {
            n._settledAt(E, e, t)
          }, function(t) {
            n._settledAt(A, e, t)
          })
        };
        var N = function(t) {
          var e = new this(b);
          if (!a(t)) return I(e, new TypeError("You must pass an array to race.")), e;
          var n = t.length;

          function r(t) {
            T(e, t)
          }

          function i(t) {
            I(e, t)
          }
          for (var o = 0; e._state === _ && o < n; o++) L(this.resolve(t[o]), void 0, r, i);
          return e
        };
        var q = function(t) {
          if (t && "object" == typeof t && t.constructor === this) return t;
          var e = new this(b);
          return T(e, t), e
        };
        var j = function(t) {
            var e = new this(b);
            return I(e, t), e
          },
          U = 0;
        var D = k;

        function k(t) {
          this._id = U++, this._state = void 0, this._result = void 0, this._subscribers = [], b !== t && (u(t) || function() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
          }(), this instanceof k || function() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
          }(), function(e, t) {
            try {
              t(function(t) {
                T(e, t)
              }, function(t) {
                I(e, t)
              })
            } catch (t) {
              I(e, t)
            }
          }(this, t))
        }
        k.all = function(t) {
          return new F(this, t).promise
        }, k.race = N, k.resolve = q, k.reject = j, k._setScheduler = function(t) {
          n = t
        }, k._setAsap = function(t) {
          s = t
        }, k._asap = s, k.prototype = {
          constructor: k,
          then: function(t, e) {
            var n = this._state;
            if (n === E && !t || n === A && !e) return this;
            var r = new this.constructor(b),
              i = this._result;
            if (n) {
              var o = arguments[n - 1];
              s(function() {
                P(n, r, o, i)
              })
            } else L(this, r, t, e);
            return r
          },
          catch: function(t) {
            return this.then(null, t)
          }
        };
        var V = function() {
            var t;
            if (void 0 !== X) t = X;
            else if ("undefined" != typeof self) t = self;
            else try {
              t = Function("return this")()
            } catch (t) {
              throw new Error("polyfill failed because global object is unavailable in this environment")
            }
            var e = t.Promise;
            e && "[object Promise]" === Object.prototype.toString.call(e.resolve()) && !e.cast || (t.Promise = D)
          },
          z = {
            Promise: D,
            polyfill: V
          };
        "function" == typeof define && define.amd ? define(function() {
          return z
        }) : void 0 !== H && H.exports ? H.exports = z : void 0 !== this && (this.ES6Promise = z), V()
      }).call(this),
        function(o) {
          if (void 0 === o.FULLTILT || null === o.FULLTILT) {
            var r, i, a, s, l, c, u, h, f, p, n, d, g, v, t, e, m, y, b, _, E, A, w, x, T, S = Math.PI,
              R = S / 2,
              I = 2 * S,
              L = S / 180,
              M = 180 / S,
              B = {
                orientation: {
                  active: !1,
                  callbacks: [],
                  data: void 0
                },
                motion: {
                  active: !1,
                  callbacks: [],
                  data: void 0
                }
              },
              C = !(!o.screen || !o.screen.orientation || void 0 === o.screen.orientation.angle || null === o.screen.orientation.angle),
              P = (C ? o.screen.orientation.angle : o.orientation || 0) * L,
              O = R,
              F = S,
              N = I / 3,
              q = -R,
              j = {};
            j.version = "0.5.3", j.getDeviceOrientation = function(r) {
              return new Promise(function(t, e) {
                var n = new j.DeviceOrientation(r);
                n.start(), new D(B.orientation).then(function() {
                  n._alphaAvailable = B.orientation.data.alpha && null !== B.orientation.data.alpha, n._betaAvailable = B.orientation.data.beta && null !== B.orientation.data.beta, n._gammaAvailable = B.orientation.data.gamma && null !== B.orientation.data.gamma, t(n)
                }).catch(function() {
                  n.stop(), e("DeviceOrientation is not supported")
                })
              })
            }, j.getDeviceMotion = function(r) {
              return new Promise(function(t, e) {
                var n = new j.DeviceMotion(r);
                n.start(), new D(B.motion).then(function() {
                  n._accelerationXAvailable = B.motion.data.acceleration && B.motion.data.acceleration.x, n._accelerationYAvailable = B.motion.data.acceleration && B.motion.data.acceleration.y, n._accelerationZAvailable = B.motion.data.acceleration && B.motion.data.acceleration.z, n._accelerationIncludingGravityXAvailable = B.motion.data.accelerationIncludingGravity && B.motion.data.accelerationIncludingGravity.x, n._accelerationIncludingGravityYAvailable = B.motion.data.accelerationIncludingGravity && B.motion.data.accelerationIncludingGravity.y, n._accelerationIncludingGravityZAvailable = B.motion.data.accelerationIncludingGravity && B.motion.data.accelerationIncludingGravity.z, n._rotationRateAlphaAvailable = B.motion.data.rotationRate && B.motion.data.rotationRate.alpha, n._rotationRateBetaAvailable = B.motion.data.rotationRate && B.motion.data.rotationRate.beta, n._rotationRateGammaAvailable = B.motion.data.rotationRate && B.motion.data.rotationRate.gamma, t(n)
                }).catch(function() {
                  n.stop(), e("DeviceMotion is not supported")
                })
              })
            }, j.Quaternion = function(t, e, n, r) {
              var i, o, a, s, c, u, l, h, f, p, d, g, v, m;
              this.set = function(t, e, n, r) {
                this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = r || 1
              }, this.copy = function(t) {
                this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w
              }, this.setFromEuler = function(t) {
                return s = ((t = t || {}).alpha || 0) * L, o = (t.beta || 0) * L, a = (t.gamma || 0) * L, l = s / 2, c = o / 2, u = a / 2, h = Math.cos(c), f = Math.cos(u), p = Math.cos(l), d = Math.sin(c), g = Math.sin(u), v = Math.sin(l), this.set(d * f * p - h * g * v, h * g * p + d * f * v, h * f * v + d * g * p, h * f * p - d * g * v), this.normalize(), this
              }, this.setFromRotationMatrix = function(t) {
                return m = t.elements, this.set(.5 * Math.sqrt(1 + m[0] - m[4] - m[8]) * U(m[7] - m[5]), .5 * Math.sqrt(1 - m[0] + m[4] - m[8]) * U(m[2] - m[6]), .5 * Math.sqrt(1 - m[0] - m[4] + m[8]) * U(m[3] - m[1]), .5 * Math.sqrt(1 + m[0] + m[4] + m[8])), this
              }, this.multiply = function(t) {
                return i = j.Quaternion.prototype.multiplyQuaternions(this, t), this.copy(i), this
              }, this.rotateX = function(t) {
                return i = j.Quaternion.prototype.rotateByAxisAngle(this, [1, 0, 0], t), this.copy(i), this
              }, this.rotateY = function(t) {
                return i = j.Quaternion.prototype.rotateByAxisAngle(this, [0, 1, 0], t), this.copy(i), this
              }, this.rotateZ = function(t) {
                return i = j.Quaternion.prototype.rotateByAxisAngle(this, [0, 0, 1], t), this.copy(i), this
              }, this.normalize = function() {
                return j.Quaternion.prototype.normalize(this)
              }, this.set(t, e, n, r)
            }, j.Quaternion.prototype = {
              constructor: j.Quaternion,
              multiplyQuaternions: (l = new j.Quaternion, function(t, e) {
                var n = t.x,
                  r = t.y,
                  i = t.z,
                  o = t.w,
                  a = e.x,
                  s = e.y,
                  c = e.z,
                  u = e.w;
                return l.set(n * u + o * a + r * c - i * s, r * u + o * s + i * a - n * c, i * u + o * c + n * s - r * a, o * u - n * a - r * s - i * c), l
              }),
              normalize: function(t) {
                var e = Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z + t.w * t.w);
                return 0 === e ? (t.x = 0, t.y = 0, t.z = 0, t.w = 1) : (e = 1 / e, t.x *= e, t.y *= e, t.z *= e, t.w *= e), t
              },
              rotateByAxisAngle: (a = new j.Quaternion, s = new j.Quaternion, function(t, e, n) {
                return r = (n || 0) / 2, i = Math.sin(r), s.set((e[0] || 0) * i, (e[1] || 0) * i, (e[2] || 0) * i, Math.cos(r)), a = j.Quaternion.prototype.multiplyQuaternions(t, s), j.Quaternion.prototype.normalize(a)
              })
            }, j.RotationMatrix = function(t, e, n, r, i, o, a, s, c) {
              var u, l, h, f, p, d, g, v, m, y, b, _, E, A;
              this.elements = new Float32Array(9), this.identity = function() {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
              }, this.set = function(t, e, n, r, i, o, a, s, c) {
                this.elements[0] = t || 1, this.elements[1] = e || 0, this.elements[2] = n || 0, this.elements[3] = r || 0, this.elements[4] = i || 1, this.elements[5] = o || 0, this.elements[6] = a || 0, this.elements[7] = s || 0, this.elements[8] = c || 1
              }, this.copy = function(t) {
                this.elements[0] = t.elements[0], this.elements[1] = t.elements[1], this.elements[2] = t.elements[2], this.elements[3] = t.elements[3], this.elements[4] = t.elements[4], this.elements[5] = t.elements[5], this.elements[6] = t.elements[6], this.elements[7] = t.elements[7], this.elements[8] = t.elements[8]
              }, this.setFromEuler = function(t) {
                return f = ((t = t || {}).alpha || 0) * L, l = (t.beta || 0) * L, h = (t.gamma || 0) * L, p = Math.cos(l), d = Math.cos(h), g = Math.cos(f), v = Math.sin(l), m = Math.sin(h), y = Math.sin(f), this.set(g * d - y * v * m, -p * y, d * y * v + g * m, d * y + g * v * m, g * p, y * m - g * d * v, -p * m, v, p * d), this.normalize(), this
              }, this.setFromQuaternion = function(t) {
                return b = t.w * t.w, _ = t.x * t.x, E = t.y * t.y, A = t.z * t.z, this.set(b + _ - E - A, 2 * (t.x * t.y - t.w * t.z), 2 * (t.x * t.z + t.w * t.y), 2 * (t.x * t.y + t.w * t.z), b - _ + E - A, 2 * (t.y * t.z - t.w * t.x), 2 * (t.x * t.z - t.w * t.y), 2 * (t.y * t.z + t.w * t.x), b - _ - E + A), this
              }, this.multiply = function(t) {
                return u = j.RotationMatrix.prototype.multiplyMatrices(this, t), this.copy(u), this
              }, this.rotateX = function(t) {
                return u = j.RotationMatrix.prototype.rotateByAxisAngle(this, [1, 0, 0], t), this.copy(u), this
              }, this.rotateY = function(t) {
                return u = j.RotationMatrix.prototype.rotateByAxisAngle(this, [0, 1, 0], t), this.copy(u), this
              }, this.rotateZ = function(t) {
                return u = j.RotationMatrix.prototype.rotateByAxisAngle(this, [0, 0, 1], t), this.copy(u), this
              }, this.normalize = function() {
                return j.RotationMatrix.prototype.normalize(this)
              }, this.set(t, e, n, r, i, o, a, s, c)
            }, j.RotationMatrix.prototype = {
              constructor: j.RotationMatrix,
              multiplyMatrices: (g = new j.RotationMatrix, function(t, e) {
                return n = t.elements, d = e.elements, g.set(n[0] * d[0] + n[1] * d[3] + n[2] * d[6], n[0] * d[1] + n[1] * d[4] + n[2] * d[7], n[0] * d[2] + n[1] * d[5] + n[2] * d[8], n[3] * d[0] + n[4] * d[3] + n[5] * d[6], n[3] * d[1] + n[4] * d[4] + n[5] * d[7], n[3] * d[2] + n[4] * d[5] + n[5] * d[8], n[6] * d[0] + n[7] * d[3] + n[8] * d[6], n[6] * d[1] + n[7] * d[4] + n[8] * d[7], n[6] * d[2] + n[7] * d[5] + n[8] * d[8]), g
              }),
              normalize: function(t) {
                var e = t.elements,
                  n = e[0] * e[4] * e[8] - e[0] * e[5] * e[7] - e[1] * e[3] * e[8] + e[1] * e[5] * e[6] + e[2] * e[3] * e[7] - e[2] * e[4] * e[6];
                return e[0] /= n, e[1] /= n, e[2] /= n, e[3] /= n, e[4] /= n, e[5] /= n, e[6] /= n, e[7] /= n, e[8] /= n, t.elements = e, t
              },
              rotateByAxisAngle: (h = new j.RotationMatrix, f = new j.RotationMatrix, p = !1, function(t, e, n) {
                return f.identity(), p = !1, c = Math.sin(n), u = Math.cos(n), 1 === e[0] && 0 === e[1] && 0 === e[2] ? (p = !0, f.elements[4] = u, f.elements[5] = -c, f.elements[7] = c, f.elements[8] = u) : 1 === e[1] && 0 === e[0] && 0 === e[2] ? (p = !0, f.elements[0] = u, f.elements[2] = c, f.elements[6] = -c, f.elements[8] = u) : 1 === e[2] && 0 === e[0] && 0 === e[1] && (p = !0, f.elements[0] = u, f.elements[1] = -c, f.elements[3] = c, f.elements[4] = u), h = p ? (h = j.RotationMatrix.prototype.multiplyMatrices(t, f), j.RotationMatrix.prototype.normalize(h)) : t
              })
            }, j.Euler = function(t, e, n) {
              var r, i, o, a, h, f, p;
              this.set = function(t, e, n) {
                this.alpha = t || 0, this.beta = e || 0, this.gamma = n || 0
              }, this.copy = function(t) {
                this.alpha = t.alpha, this.beta = t.beta, this.gamma = t.gamma
              }, this.setFromRotationMatrix = function(t) {
                r = t.elements, a = 0 < r[8] ? (i = Math.atan2(-r[1], r[4]), o = Math.asin(r[7]), Math.atan2(-r[6], r[8])) : r[8] < 0 ? (i = Math.atan2(r[1], -r[4]), o = -Math.asin(r[7]), o += 0 <= o ? -S : S, Math.atan2(r[6], -r[8])) : 0 < r[6] ? (i = Math.atan2(-r[1], r[4]), o = Math.asin(r[7]), -R) : r[6] < 0 ? (i = Math.atan2(r[1], -r[4]), o = -Math.asin(r[7]), o += 0 <= o ? -S : S, -R) : (i = Math.atan2(r[3], r[0]), o = 0 < r[7] ? R : -R, 0), i < 0 && (i += I), i *= M, o *= M, a *= M, this.set(i, o, a)
              }, this.setFromQuaternion = function(t) {
                var e = t.w * t.w,
                  n = t.x * t.x,
                  r = t.y * t.y,
                  i = t.z * t.z,
                  o = e + n + r + i,
                  a = t.w * t.x + t.y * t.z;
                if (.499999 * o < a) h = 2 * Math.atan2(t.y, t.w), f = R, p = 0;
                else if (a < (1e-6 - .5) * o) h = -2 * Math.atan2(t.y, t.w), f = -R, p = 0;
                else {
                  var s = e - n + r - i,
                    c = 2 * (t.w * t.z - t.x * t.y),
                    u = e - n - r + i,
                    l = 2 * (t.w * t.y - t.x * t.z);
                  p = 0 < u ? (h = Math.atan2(c, s), f = Math.asin(2 * a / o), Math.atan2(l, u)) : (h = Math.atan2(-c, -s), f = -Math.asin(2 * a / o), f += f < 0 ? S : -S, Math.atan2(-l, -u))
                }
                h < 0 && (h += I), h *= M, f *= M, p *= M, this.set(h, f, p)
              }, this.rotateX = function(t) {
                return j.Euler.prototype.rotateByAxisAngle(this, [1, 0, 0], t), this
              }, this.rotateY = function(t) {
                return j.Euler.prototype.rotateByAxisAngle(this, [0, 1, 0], t), this
              }, this.rotateZ = function(t) {
                return j.Euler.prototype.rotateByAxisAngle(this, [0, 0, 1], t), this
              }, this.set(t, e, n)
            }, j.Euler.prototype = {
              constructor: j.Euler,
              rotateByAxisAngle: (v = new j.RotationMatrix, function(t, e, n) {
                return v.setFromEuler(t), v = j.RotationMatrix.prototype.rotateByAxisAngle(v, e, n), t.setFromRotationMatrix(v), t
              })
            }, j.DeviceOrientation = function(t) {
              this.options = t || {};
              var e = 0,
                n = 0;
              if (this.alphaOffsetScreen = 0, this.alphaOffsetDevice = void 0, "game" === this.options.type) {
                var r = function(t) {
                  null !== t.alpha && (this.alphaOffsetDevice = new j.Euler(t.alpha, 0, 0), this.alphaOffsetDevice.rotateZ(-P), 10 <= ++n) ? o.removeEventListener("deviceorientation", r, !1) : 200 <= ++e && o.removeEventListener("deviceorientation", r, !1)
                }.bind(this);
                o.addEventListener("deviceorientation", r, !1)
              } else if ("world" === this.options.type) {
                var i = function(t) {
                  !0 !== t.absolute && void 0 !== t.webkitCompassAccuracy && null !== t.webkitCompassAccuracy && 0 <= +t.webkitCompassAccuracy && +t.webkitCompassAccuracy < 50 && (this.alphaOffsetDevice = new j.Euler(t.webkitCompassHeading, 0, 0), this.alphaOffsetDevice.rotateZ(P), this.alphaOffsetScreen = P, 10 <= ++n) ? o.removeEventListener("deviceorientation", i, !1) : 200 <= ++e && o.removeEventListener("deviceorientation", i, !1)
                }.bind(this);
                o.addEventListener("deviceorientation", i, !1)
              }
            }, j.DeviceOrientation.prototype = {
              constructor: j.DeviceOrientation,
              start: function(t) {
                t && "[object Function]" == Object.prototype.toString.call(t) && B.orientation.callbacks.push(t), C ? o.screen.orientation.addEventListener("change", k, !1) : o.addEventListener("orientationchange", k, !1), B.orientation.active || (o.addEventListener("deviceorientation", V, !1), B.orientation.active = !0)
              },
              stop: function() {
                B.orientation.active && (o.removeEventListener("deviceorientation", V, !1), B.orientation.active = !1)
              },
              listen: function(t) {
                this.start(t)
              },
              getFixedFrameQuaternion: (w = new j.Euler, x = new j.RotationMatrix, T = new j.Quaternion, function() {
                var t = B.orientation.data || {
                    alpha: 0,
                    beta: 0,
                    gamma: 0
                  },
                  e = t.alpha;
                return this.alphaOffsetDevice && (x.setFromEuler(this.alphaOffsetDevice), x.rotateZ(-this.alphaOffsetScreen), w.setFromRotationMatrix(x), w.alpha < 0 && (w.alpha += 360), w.alpha %= 360, e -= w.alpha), w.set(e, t.beta, t.gamma), T.setFromEuler(w), T
              }),
              getScreenAdjustedQuaternion: function() {
                return (A = this.getFixedFrameQuaternion()).rotateZ(-P), A
              },
              getFixedFrameMatrix: (_ = new j.Euler, E = new j.RotationMatrix, function() {
                var t = B.orientation.data || {
                    alpha: 0,
                    beta: 0,
                    gamma: 0
                  },
                  e = t.alpha;
                return this.alphaOffsetDevice && (E.setFromEuler(this.alphaOffsetDevice), E.rotateZ(-this.alphaOffsetScreen), _.setFromRotationMatrix(E), _.alpha < 0 && (_.alpha += 360), _.alpha %= 360, e -= _.alpha), _.set(e, t.beta, t.gamma), E.setFromEuler(_), E
              }),
              getScreenAdjustedMatrix: function() {
                return (b = this.getFixedFrameMatrix()).rotateZ(-P), b
              },
              getFixedFrameEuler: (y = new j.Euler, function() {
                return m = this.getFixedFrameMatrix(), y.setFromRotationMatrix(m), y
              }),
              getScreenAdjustedEuler: (e = new j.Euler, function() {
                return t = this.getScreenAdjustedMatrix(), e.setFromRotationMatrix(t), e
              }),
              isAbsolute: function() {
                return !(!B.orientation.data || !0 !== B.orientation.data.absolute)
              },
              getLastRawEventData: function() {
                return B.orientation.data || {}
              },
              _alphaAvailable: !1,
              _betaAvailable: !1,
              _gammaAvailable: !1,
              isAvailable: function(t) {
                switch (t) {
                  case this.ALPHA:
                    return this._alphaAvailable;
                  case this.BETA:
                    return this._betaAvailable;
                  case this.GAMMA:
                    return this._gammaAvailable
                }
              },
              ALPHA: "alpha",
              BETA: "beta",
              GAMMA: "gamma"
            }, j.DeviceMotion = function(t) {
              this.options = t || {}
            }, j.DeviceMotion.prototype = {
              constructor: j.DeviceMotion,
              start: function(t) {
                t && "[object Function]" == Object.prototype.toString.call(t) && B.motion.callbacks.push(t), C ? o.screen.orientation.addEventListener("change", k, !1) : o.addEventListener("orientationchange", k, !1), B.motion.active || (o.addEventListener("devicemotion", z, !1), B.motion.active = !0)
              },
              stop: function() {
                B.motion.active && (o.removeEventListener("devicemotion", z, !1), B.motion.active = !1)
              },
              listen: function(t) {
                this.start(t)
              },
              getScreenAdjustedAcceleration: function() {
                var t = B.motion.data && B.motion.data.acceleration ? B.motion.data.acceleration : {
                    x: 0,
                    y: 0,
                    z: 0
                  },
                  e = {};
                switch (P) {
                  case O:
                    e.x = -t.y, e.y = t.x;
                    break;
                  case F:
                    e.x = -t.x, e.y = -t.y;
                    break;
                  case N:
                  case q:
                    e.x = t.y, e.y = -t.x;
                    break;
                  default:
                    e.x = t.x, e.y = t.y
                }
                return e.z = t.z, e
              },
              getScreenAdjustedAccelerationIncludingGravity: function() {
                var t = B.motion.data && B.motion.data.accelerationIncludingGravity ? B.motion.data.accelerationIncludingGravity : {
                    x: 0,
                    y: 0,
                    z: 0
                  },
                  e = {};
                switch (P) {
                  case O:
                    e.x = -t.y, e.y = t.x;
                    break;
                  case F:
                    e.x = -t.x, e.y = -t.y;
                    break;
                  case N:
                  case q:
                    e.x = t.y, e.y = -t.x;
                    break;
                  default:
                    e.x = t.x, e.y = t.y
                }
                return e.z = t.z, e
              },
              getScreenAdjustedRotationRate: function() {
                var t = B.motion.data && B.motion.data.rotationRate ? B.motion.data.rotationRate : {
                    alpha: 0,
                    beta: 0,
                    gamma: 0
                  },
                  e = {};
                switch (P) {
                  case O:
                    e.beta = -t.gamma, e.gamma = t.beta;
                    break;
                  case F:
                    e.beta = -t.beta, e.gamma = -t.gamma;
                    break;
                  case N:
                  case q:
                    e.beta = t.gamma, e.gamma = -t.beta;
                    break;
                  default:
                    e.beta = t.beta, e.gamma = t.gamma
                }
                return e.alpha = t.alpha, e
              },
              getLastRawEventData: function() {
                return B.motion.data || {}
              },
              _accelerationXAvailable: !1,
              _accelerationYAvailable: !1,
              _accelerationZAvailable: !1,
              _accelerationIncludingGravityXAvailable: !1,
              _accelerationIncludingGravityYAvailable: !1,
              _accelerationIncludingGravityZAvailable: !1,
              _rotationRateAlphaAvailable: !1,
              _rotationRateBetaAvailable: !1,
              _rotationRateGammaAvailable: !1,
              isAvailable: function(t) {
                switch (t) {
                  case this.ACCELERATION_X:
                    return this._accelerationXAvailable;
                  case this.ACCELERATION_Y:
                    return this._accelerationYAvailable;
                  case this.ACCELERATION_Z:
                    return this._accelerationZAvailable;
                  case this.ACCELERATION_INCLUDING_GRAVITY_X:
                    return this._accelerationIncludingGravityXAvailable;
                  case this.ACCELERATION_INCLUDING_GRAVITY_Y:
                    return this._accelerationIncludingGravityYAvailable;
                  case this.ACCELERATION_INCLUDING_GRAVITY_Z:
                    return this._accelerationIncludingGravityZAvailable;
                  case this.ROTATION_RATE_ALPHA:
                    return this._rotationRateAlphaAvailable;
                  case this.ROTATION_RATE_BETA:
                    return this._rotationRateBetaAvailable;
                  case this.ROTATION_RATE_GAMMA:
                    return this._rotationRateGammaAvailable
                }
              },
              ACCELERATION_X: "accelerationX",
              ACCELERATION_Y: "accelerationY",
              ACCELERATION_Z: "accelerationZ",
              ACCELERATION_INCLUDING_GRAVITY_X: "accelerationIncludingGravityX",
              ACCELERATION_INCLUDING_GRAVITY_Y: "accelerationIncludingGravityY",
              ACCELERATION_INCLUDING_GRAVITY_Z: "accelerationIncludingGravityZ",
              ROTATION_RATE_ALPHA: "rotationRateAlpha",
              ROTATION_RATE_BETA: "rotationRateBeta",
              ROTATION_RATE_GAMMA: "rotationRateGamma"
            }, o.FULLTILT = j
          }

          function U(t) {
            return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
          }

          function D(i) {
            return new Promise(function(e, n) {
              var r = function(t) {
                setTimeout(function() {
                  i && i.data ? e() : 20 <= t ? n() : r(++t)
                }, 50)
              };
              r(0)
            })
          }

          function k() {
            P = C ? (o.screen.orientation.angle || 0) * L : (o.orientation || 0) * L
          }

          function V(t) {
            for (var e in B.orientation.data = t, B.orientation.callbacks) B.orientation.callbacks[e].call(this)
          }

          function z(t) {
            for (var e in B.motion.data = t, B.motion.callbacks) B.motion.callbacks[e].call(this)
          }
        }(window), t = this, e = function() {
          var o = "deviceorientation",
            a = "acceleration",
            s = "accelerationinludinggravity",
            c = "rotationrate",
            e = null,
            u = 0,
            l = 0,
            n = !1,
            r = !1,
            h = null,
            f = null,
            i = 50,
            p = !0,
            d = "game",
            g = 2,
            v = null,
            m = !1,
            t = function(t) {};

          function y(t) {
            return Math.round(t * Math.pow(10, g)) / Math.pow(10, g)
          }

          function b(t) {
            v && ("string" == typeof t && (t = {
              message: t,
              code: 0
            }), v(t))
          }
          return t.GAME = "game", t.WORLD = "world", t.DEVICE_ORIENTATION = o, t.ACCELERATION = a, t.ACCELERATION_INCLUDING_GRAVITY = s, t.ROTATION_RATE = c, t.prototype.init = function(t) {
            t && t.frequency && (i = t.frequency), t && t.gravityNormalized && (p = t.gravityNormalized), t && t.orientationBase && (d = t.orientationBase), t && t.decimalCount && (g = t.decimalCount), t && t.logger && (v = t.logger), t && t.screenAdjusted && (m = t.screenAdjusted);
            var e = new FULLTILT.getDeviceOrientation({
                type: d
              }).then(function(t) {
                h = t
              }),
              n = (new FULLTILT.getDeviceMotion).then(function(t) {
                l = 0 < (f = t).getScreenAdjustedAccelerationIncludingGravity().z ? -1 : 1
              });
            return Promise.all([e, n]).then(function() {
              r = !0
            })
          }, t.prototype.end = function() {
            try {
              r = !1, this.stop(), f.stop(), h.stop()
            } catch (t) {
              b(t)
            }
          }, t.prototype.start = function(t) {
            r ? (e = setInterval(function() {
              t(function() {
                var t = {};
                t = m ? h.getScreenAdjustedEuler() : h.getFixedFrameEuler();
                var e = f.getScreenAdjustedAcceleration(),
                  n = f.getScreenAdjustedAccelerationIncludingGravity(),
                  r = f.getScreenAdjustedRotationRate(),
                  i = 0;
                i = "game" === d ? (i = t.alpha - u) < 0 ? 360 - Math.abs(i) : i : t.alpha;
                var o = {
                  do: {
                    alpha: y(i),
                    beta: y(t.beta),
                    gamma: y(t.gamma),
                    absolute: h.isAbsolute()
                  },
                  dm: {
                    x: y(e.x),
                    y: y(e.y),
                    z: y(e.z),
                    gx: y(n.x),
                    gy: y(n.y),
                    gz: y(n.z),
                    alpha: y(r.alpha),
                    beta: y(r.beta),
                    gamma: y(r.gamma)
                  }
                };
                p && (o.dm.gx *= l, o.dm.gy *= l, o.dm.gz *= l);
                return o
              }())
            }, i), n = !0) : b({
              message: 'GyroNorm is not initialized yet. First call the "init()" function.',
              code: 1
            })
          }, t.prototype.stop = function() {
            e && (clearInterval(e), n = !1)
          }, t.prototype.normalizeGravity = function(t) {
            p = !!t
          }, t.prototype.setHeadDirection = function() {
            return !m && "world" !== d && (u = h.getFixedFrameEuler().alpha, !0)
          }, t.prototype.startLogging = function(t) {
            t && (v = t)
          }, t.prototype.stopLogging = function() {
            v = null
          }, t.prototype.isAvailable = function(t) {
            var e = h.getScreenAdjustedEuler(),
              n = f.getScreenAdjustedAcceleration(),
              r = f.getScreenAdjustedAccelerationIncludingGravity(),
              i = f.getScreenAdjustedRotationRate();
            switch (t) {
              case o:
                return e.alpha && null !== e.alpha && e.beta && null !== e.beta && e.gamma && null !== e.gamma;
              case a:
                return n && n.x && n.y && n.z;
              case s:
                return r && r.x && r.y && r.z;
              case c:
                return i && i.alpha && i.beta && i.gamma;
              default:
                return {
                  deviceOrientationAvailable: e.alpha && null !== e.alpha && e.beta && null !== e.beta && e.gamma && null !== e.gamma, accelerationAvailable: n && n.x && n.y && n.z, accelerationIncludingGravityAvailable: r && r.x && r.y && r.z, rotationRateAvailable: i && i.alpha && i.beta && i.gamma
                }
            }
          }, t.prototype.isRunning = function() {
            return n
          }, t
        }, "function" == typeof define && define.amd ? define(function() {
          return t.GyroNorm = e()
        }) : "object" == typeof H && H.exports ? H.exports = t.GyroNorm = e() : t.GyroNorm = e()
    }).call(this, W("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {
    _process: 270
  }],
  186: [function(t, e, n) {
    n.read = function(t, e, n, r, i) {
      var o, a, s = 8 * i - r - 1,
        c = (1 << s) - 1,
        u = c >> 1,
        l = -7,
        h = n ? i - 1 : 0,
        f = n ? -1 : 1,
        p = t[e + h];
      for (h += f, o = p & (1 << -l) - 1, p >>= -l, l += s; 0 < l; o = 256 * o + t[e + h], h += f, l -= 8);
      for (a = o & (1 << -l) - 1, o >>= -l, l += r; 0 < l; a = 256 * a + t[e + h], h += f, l -= 8);
      if (0 === o) o = 1 - u;
      else {
        if (o === c) return a ? NaN : 1 / 0 * (p ? -1 : 1);
        a += Math.pow(2, r), o -= u
      }
      return (p ? -1 : 1) * a * Math.pow(2, o - r)
    }, n.write = function(t, e, n, r, i, o) {
      var a, s, c, u = 8 * o - i - 1,
        l = (1 << u) - 1,
        h = l >> 1,
        f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        p = r ? 0 : o - 1,
        d = r ? 1 : -1,
        g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = l) : (a = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), 2 <= (e += 1 <= a + h ? f / c : f * Math.pow(2, 1 - h)) * c && (a++, c /= 2), l <= a + h ? (s = 0, a = l) : 1 <= a + h ? (s = (e * c - 1) * Math.pow(2, i), a += h) : (s = e * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); 8 <= i; t[n + p] = 255 & s, p += d, s /= 256, i -= 8);
      for (a = a << i | s, u += i; 0 < u; t[n + p] = 255 & a, p += d, a /= 256, u -= 8);
      t[n + p - d] |= 128 * g
    }
  }, {}],
  187: [function(t, e, n) {
    ! function(g, v) {
      "use strict";
      if ("IntersectionObserver" in g && "IntersectionObserverEntry" in g && "intersectionRatio" in g.IntersectionObserverEntry.prototype) "isIntersecting" in g.IntersectionObserverEntry.prototype || Object.defineProperty(g.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function() {
          return 0 < this.intersectionRatio
        }
      });
      else {
        var e = [];
        t.prototype.THROTTLE_TIMEOUT = 100, t.prototype.POLL_INTERVAL = null, t.prototype.USE_MUTATION_OBSERVER = !0, t.prototype.observe = function(e) {
          if (!this._observationTargets.some(function(t) {
              return t.element == e
            })) {
            if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
            this._registerInstance(), this._observationTargets.push({
              element: e,
              entry: null
            }), this._monitorIntersections(), this._checkForIntersections()
          }
        }, t.prototype.unobserve = function(e) {
          this._observationTargets = this._observationTargets.filter(function(t) {
            return t.element != e
          }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
        }, t.prototype.disconnect = function() {
          this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
        }, t.prototype.takeRecords = function() {
          var t = this._queuedEntries.slice();
          return this._queuedEntries = [], t
        }, t.prototype._initThresholds = function(t) {
          var e = t || [0];
          return Array.isArray(e) || (e = [e]), e.sort().filter(function(t, e, n) {
            if ("number" != typeof t || isNaN(t) || t < 0 || 1 < t) throw new Error("threshold must be a number between 0 and 1 inclusively");
            return t !== n[e - 1]
          })
        }, t.prototype._parseRootMargin = function(t) {
          var e = (t || "0px").split(/\s+/).map(function(t) {
            var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
            if (!e) throw new Error("rootMargin must be specified in pixels or percent");
            return {
              value: parseFloat(e[1]),
              unit: e[2]
            }
          });
          return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
        }, t.prototype._monitorIntersections = function() {
          this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (n(g, "resize", this._checkForIntersections, !0), n(v, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in g && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(v, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          }))))
        }, t.prototype._unmonitorIntersections = function() {
          this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, r(g, "resize", this._checkForIntersections, !0), r(v, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
        }, t.prototype._checkForIntersections = function() {
          var s = this._rootIsInDom(),
            c = s ? this._getRootRect() : {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0
            };
          this._observationTargets.forEach(function(t) {
            var e = t.element,
              n = m(e),
              r = this._rootContainsTarget(e),
              i = t.entry,
              o = s && r && this._computeTargetAndRootIntersection(e, c),
              a = t.entry = new u({
                time: g.performance && performance.now && performance.now(),
                target: e,
                boundingClientRect: n,
                rootBounds: c,
                intersectionRect: o
              });
            i ? s && r ? this._hasCrossedThreshold(i, a) && this._queuedEntries.push(a) : i && i.isIntersecting && this._queuedEntries.push(a) : this._queuedEntries.push(a)
          }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
        }, t.prototype._computeTargetAndRootIntersection = function(t, e) {
          if ("none" != g.getComputedStyle(t).display) {
            for (var n, r, i, o, a, s, c, u, l = m(t), h = y(t), f = !1; !f;) {
              var p = null,
                d = 1 == h.nodeType ? g.getComputedStyle(h) : {};
              if ("none" == d.display) return;
              if (h == this.root || h == v ? (f = !0, p = e) : h != v.body && h != v.documentElement && "visible" != d.overflow && (p = m(h)), p && (n = p, r = l, void 0, i = Math.max(n.top, r.top), o = Math.min(n.bottom, r.bottom), a = Math.max(n.left, r.left), s = Math.min(n.right, r.right), u = o - i, !(l = 0 <= (c = s - a) && 0 <= u && {
                  top: i,
                  bottom: o,
                  left: a,
                  right: s,
                  width: c,
                  height: u
                }))) break;
              h = y(h)
            }
            return l
          }
        }, t.prototype._getRootRect = function() {
          var t;
          if (this.root) t = m(this.root);
          else {
            var e = v.documentElement,
              n = v.body;
            t = {
              top: 0,
              left: 0,
              right: e.clientWidth || n.clientWidth,
              width: e.clientWidth || n.clientWidth,
              bottom: e.clientHeight || n.clientHeight,
              height: e.clientHeight || n.clientHeight
            }
          }
          return this._expandRectByRootMargin(t)
        }, t.prototype._expandRectByRootMargin = function(n) {
          var t = this._rootMarginValues.map(function(t, e) {
              return "px" == t.unit ? t.value : t.value * (e % 2 ? n.width : n.height) / 100
            }),
            e = {
              top: n.top - t[0],
              right: n.right + t[1],
              bottom: n.bottom + t[2],
              left: n.left - t[3]
            };
          return e.width = e.right - e.left, e.height = e.bottom - e.top, e
        }, t.prototype._hasCrossedThreshold = function(t, e) {
          var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
            r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
          if (n !== r)
            for (var i = 0; i < this.thresholds.length; i++) {
              var o = this.thresholds[i];
              if (o == n || o == r || o < n != o < r) return !0
            }
        }, t.prototype._rootIsInDom = function() {
          return !this.root || i(v, this.root)
        }, t.prototype._rootContainsTarget = function(t) {
          return i(this.root || v, t)
        }, t.prototype._registerInstance = function() {
          e.indexOf(this) < 0 && e.push(this)
        }, t.prototype._unregisterInstance = function() {
          var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
        }, g.IntersectionObserver = t, g.IntersectionObserverEntry = u
      }

      function u(t) {
        this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        }, this.isIntersecting = !!t.intersectionRect;
        var e = this.boundingClientRect,
          n = e.width * e.height,
          r = this.intersectionRect,
          i = r.width * r.height;
        this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
      }

      function t(t, e) {
        var n, r, i, o = e || {};
        if ("function" != typeof t) throw new Error("callback must be a function");
        if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
        this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, i = null, function() {
          i || (i = setTimeout(function() {
            n(), i = null
          }, r))
        }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map(function(t) {
          return t.value + t.unit
        }).join(" ")
      }

      function n(t, e, n, r) {
        "function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
      }

      function r(t, e, n, r) {
        "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
      }

      function m(t) {
        var e;
        try {
          e = t.getBoundingClientRect()
        } catch (t) {}
        return e ? (e.width && e.height || (e = {
          top: e.top,
          right: e.right,
          bottom: e.bottom,
          left: e.left,
          width: e.right - e.left,
          height: e.bottom - e.top
        }), e) : {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        }
      }

      function i(t, e) {
        for (var n = e; n;) {
          if (n == t) return !0;
          n = y(n)
        }
        return !1
      }

      function y(t) {
        var e = t.parentNode;
        return e && 11 == e.nodeType && e.host ? e.host : e
      }
    }(window, document)
  }, {}],
  188: [function(t, e, n) {
    "use strict";
    e.exports = function(t) {
      for (var e = new Array(t), n = 0; n < t; ++n) e[n] = n;
      return e
    }
  }, {}],
  189: [function(t, e, n) {
    function r(t) {
      return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }
    e.exports = function(t) {
      return null != t && (r(t) || "function" == typeof(e = t).readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0)) || !!t._isBuffer);
      var e
    }
  }, {}],
  190: [function(t, i, o) {
    ! function(t) {
      var e = !1;
      if ("function" == typeof define && define.amd && (define(t), e = !0), "object" == typeof o && (i.exports = t(), e = !0), !e) {
        var n = window.Cookies,
          r = window.Cookies = t();
        r.noConflict = function() {
          return window.Cookies = n, r
        }
      }
    }(function() {
      function g() {
        for (var t = 0, e = {}; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) e[r] = n[r]
        }
        return e
      }
      return function t(p) {
        function d(t, e, n) {
          var r;
          if ("undefined" != typeof document) {
            if (1 < arguments.length) {
              if ("number" == typeof(n = g({
                  path: "/"
                }, d.defaults, n)).expires) {
                var i = new Date;
                i.setMilliseconds(i.getMilliseconds() + 864e5 * n.expires), n.expires = i
              }
              n.expires = n.expires ? n.expires.toUTCString() : "";
              try {
                r = JSON.stringify(e), /^[\{\[]/.test(r) && (e = r)
              } catch (t) {}
              e = p.write ? p.write(e, t) : encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
              var o = "";
              for (var a in n) n[a] && (o += "; " + a, !0 !== n[a] && (o += "=" + n[a]));
              return document.cookie = t + "=" + e + o
            }
            t || (r = {});
            for (var s = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, u = 0; u < s.length; u++) {
              var l = s[u].split("="),
                h = l.slice(1).join("=");
              this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
              try {
                var f = l[0].replace(c, decodeURIComponent);
                if (h = p.read ? p.read(h, f) : p(h, f) || h.replace(c, decodeURIComponent), this.json) try {
                  h = JSON.parse(h)
                } catch (t) {}
                if (t === f) {
                  r = h;
                  break
                }
                t || (r[f] = h)
              } catch (t) {}
            }
            return r
          }
        }
        return (d.set = d).get = function(t) {
          return d.call(d, t)
        }, d.getJSON = function() {
          return d.apply({
            json: !0
          }, [].slice.call(arguments))
        }, d.defaults = {}, d.remove = function(t, e) {
          d(t, "", g(e, {
            expires: -1
          }))
        }, d.withConverter = t, d
      }(function() {})
    })
  }, {}],
  191: [function(t, e, n) {
    var r = t("./_root").Symbol;
    e.exports = r
  }, {
    "./_root": 196
  }],
  192: [function(t, e, n) {
    var r = t("./_Symbol"),
      i = t("./_getRawTag"),
      o = t("./_objectToString"),
      a = r ? r.toStringTag : void 0;
    e.exports = function(t) {
      return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? i(t) : o(t)
    }
  }, {
    "./_Symbol": 191,
    "./_getRawTag": 194,
    "./_objectToString": 195
  }],
  193: [function(t, n, e) {
    (function(t) {
      var e = "object" == typeof t && t && t.Object === Object && t;
      n.exports = e
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {}],
  194: [function(t, e, n) {
    var r = t("./_Symbol"),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      s = r ? r.toStringTag : void 0;
    e.exports = function(t) {
      var e = o.call(t, s),
        n = t[s];
      try {
        var r = !(t[s] = void 0)
      } catch (t) {}
      var i = a.call(t);
      return r && (e ? t[s] = n : delete t[s]), i
    }
  }, {
    "./_Symbol": 191
  }],
  195: [function(t, e, n) {
    var r = Object.prototype.toString;
    e.exports = function(t) {
      return r.call(t)
    }
  }, {}],
  196: [function(t, e, n) {
    var r = t("./_freeGlobal"),
      i = "object" == typeof self && self && self.Object === Object && self,
      o = r || i || Function("return this")();
    e.exports = o
  }, {
    "./_freeGlobal": 193
  }],
  197: [function(t, e, n) {
    var y = t("./isObject"),
      b = t("./now"),
      _ = t("./toNumber"),
      E = Math.max,
      A = Math.min;
    e.exports = function(r, i, t) {
      var o, a, s, c, u, l, h = 0,
        f = !1,
        p = !1,
        e = !0;
      if ("function" != typeof r) throw new TypeError("Expected a function");

      function d(t) {
        var e = o,
          n = a;
        return o = a = void 0, h = t, c = r.apply(n, e)
      }

      function g(t) {
        var e = t - l;
        return void 0 === l || i <= e || e < 0 || p && s <= t - h
      }

      function v() {
        var t, e, n = b();
        if (g(n)) return m(n);
        u = setTimeout(v, (e = i - ((t = n) - l), p ? A(e, s - (t - h)) : e))
      }

      function m(t) {
        return u = void 0, e && o ? d(t) : (o = a = void 0, c)
      }

      function n() {
        var t, e = b(),
          n = g(e);
        if (o = arguments, a = this, l = e, n) {
          if (void 0 === u) return h = t = l, u = setTimeout(v, i), f ? d(t) : c;
          if (p) return u = setTimeout(v, i), d(l)
        }
        return void 0 === u && (u = setTimeout(v, i)), c
      }
      return i = _(i) || 0, y(t) && (f = !!t.leading, s = (p = "maxWait" in t) ? E(_(t.maxWait) || 0, i) : s, e = "trailing" in t ? !!t.trailing : e), n.cancel = function() {
        void 0 !== u && clearTimeout(u), o = l = a = u = void(h = 0)
      }, n.flush = function() {
        return void 0 === u ? c : m(b())
      }, n
    }
  }, {
    "./isObject": 198,
    "./now": 201,
    "./toNumber": 202
  }],
  198: [function(t, e, n) {
    e.exports = function(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e)
    }
  }, {}],
  199: [function(t, e, n) {
    e.exports = function(t) {
      return null != t && "object" == typeof t
    }
  }, {}],
  200: [function(t, e, n) {
    var r = t("./_baseGetTag"),
      i = t("./isObjectLike");
    e.exports = function(t) {
      return "symbol" == typeof t || i(t) && "[object Symbol]" == r(t)
    }
  }, {
    "./_baseGetTag": 192,
    "./isObjectLike": 199
  }],
  201: [function(t, e, n) {
    var r = t("./_root");
    e.exports = function() {
      return r.Date.now()
    }
  }, {
    "./_root": 196
  }],
  202: [function(t, e, n) {
    var r = t("./isObject"),
      i = t("./isSymbol"),
      o = /^\s+|\s+$/g,
      a = /^[-+]0x[0-9a-f]+$/i,
      s = /^0b[01]+$/i,
      c = /^0o[0-7]+$/i,
      u = parseInt;
    e.exports = function(t) {
      if ("number" == typeof t) return t;
      if (i(t)) return NaN;
      if (r(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = r(e) ? e + "" : e
      }
      if ("string" != typeof t) return 0 === t ? t : +t;
      t = t.replace(o, "");
      var n = s.test(t);
      return n || c.test(t) ? u(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
    }
  }, {
    "./isObject": 198,
    "./isSymbol": 200
  }],
  203: [function(t, e, n) {
    var r, i;
    r = window, i = function(t, u) {
      "use strict";
      var e = t.create("masonry");
      e.compatOptions.fitWidth = "isFitWidth";
      var n = e.prototype;
      return n._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
      }, n.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
          var t = this.items[0],
            e = t && t.element;
          this.columnWidth = e && u(e).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
          r = this.containerWidth + this.gutter,
          i = r / n,
          o = n - r % n;
        i = Math[o && o < 1 ? "round" : "floor"](i), this.cols = Math.max(i, 1)
      }, n.getContainerWidth = function() {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
          e = u(t);
        this.containerWidth = e && e.innerWidth
      }, n._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          n = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var r = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, t), i = {
            x: this.columnWidth * r.col,
            y: r.y
          }, o = r.y + t.size.outerHeight, a = n + r.col, s = r.col; s < a; s++) this.colYs[s] = o;
        return i
      }, n._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
          n = Math.min.apply(Math, e);
        return {
          col: e.indexOf(n),
          y: n
        }
      }, n._getTopColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], n = this.cols + 1 - t, r = 0; r < n; r++) e[r] = this._getColGroupY(r, t);
        return e
      }, n._getColGroupY = function(t, e) {
        if (e < 2) return this.colYs[t];
        var n = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, n)
      }, n._getHorizontalColPosition = function(t, e) {
        var n = this.horizontalColIndex % this.cols;
        n = 1 < t && n + t > this.cols ? 0 : n;
        var r = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = r ? n + t : this.horizontalColIndex, {
          col: n,
          y: this._getColGroupY(n, t)
        }
      }, n._manageStamp = function(t) {
        var e = u(t),
          n = this._getElementOffset(t),
          r = this._getOption("originLeft") ? n.left : n.right,
          i = r + e.outerWidth,
          o = Math.floor(r / this.columnWidth);
        o = Math.max(0, o);
        var a = Math.floor(i / this.columnWidth);
        a -= i % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var s = (this._getOption("originTop") ? n.top : n.bottom) + e.outerHeight, c = o; c <= a; c++) this.colYs[c] = Math.max(s, this.colYs[c])
      }, n._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
          height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
      }, n._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
      }, n.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
      }, e
    }, "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], i) : "object" == typeof e && e.exports ? e.exports = i(t("outlayer"), t("get-size")) : r.Masonry = i(r.Outlayer, r.getSize)
  }, {
    "get-size": 114,
    outlayer: 207
  }],
  204: [function(t, e, n) {
    "use strict";
    var i = t("cwise-compiler"),
      r = {
        body: "",
        args: [],
        thisVars: [],
        localVars: []
      };

    function o(t) {
      if (!t) return r;
      for (var e = 0; e < t.args.length; ++e) {
        var n = t.args[e];
        t.args[e] = 0 === e ? {
          name: n,
          lvalue: !0,
          rvalue: !!t.rvalue,
          count: t.count || 1
        } : {
          name: n,
          lvalue: !1,
          rvalue: !0,
          count: 1
        }
      }
      return t.thisVars || (t.thisVars = []), t.localVars || (t.localVars = []), t
    }

    function a(t) {
      for (var e = [], n = 0; n < t.args.length; ++n) e.push("a" + n);
      var r;
      return new Function("P", ["return function ", t.funcName, "_ndarrayops(", e.join(","), ") {P(", e.join(","), ");return a0}"].join(""))(i({
        args: (r = t).args,
        pre: o(r.pre),
        body: o(r.body),
        post: o(r.proc),
        funcName: r.funcName
      }))
    }
    var s = {
      add: "+",
      sub: "-",
      mul: "*",
      div: "/",
      mod: "%",
      band: "&",
      bor: "|",
      bxor: "^",
      lshift: "<<",
      rshift: ">>",
      rrshift: ">>>"
    };
    ! function() {
      for (var t in s) {
        var e = s[t];
        n[t] = a({
          args: ["array", "array", "array"],
          body: {
            args: ["a", "b", "c"],
            body: "a=b" + e + "c"
          },
          funcName: t
        }), n[t + "eq"] = a({
          args: ["array", "array"],
          body: {
            args: ["a", "b"],
            body: "a" + e + "=b"
          },
          rvalue: !0,
          funcName: t + "eq"
        }), n[t + "s"] = a({
          args: ["array", "array", "scalar"],
          body: {
            args: ["a", "b", "s"],
            body: "a=b" + e + "s"
          },
          funcName: t + "s"
        }), n[t + "seq"] = a({
          args: ["array", "scalar"],
          body: {
            args: ["a", "s"],
            body: "a" + e + "=s"
          },
          rvalue: !0,
          funcName: t + "seq"
        })
      }
    }();
    var c = {
      not: "!",
      bnot: "~",
      neg: "-",
      recip: "1.0/"
    };
    ! function() {
      for (var t in c) {
        var e = c[t];
        n[t] = a({
          args: ["array", "array"],
          body: {
            args: ["a", "b"],
            body: "a=" + e + "b"
          },
          funcName: t
        }), n[t + "eq"] = a({
          args: ["array"],
          body: {
            args: ["a"],
            body: "a=" + e + "a"
          },
          rvalue: !0,
          count: 2,
          funcName: t + "eq"
        })
      }
    }();
    var u = {
      and: "&&",
      or: "||",
      eq: "===",
      neq: "!==",
      lt: "<",
      gt: ">",
      leq: "<=",
      geq: ">="
    };
    ! function() {
      for (var t in u) {
        var e = u[t];
        n[t] = a({
          args: ["array", "array", "array"],
          body: {
            args: ["a", "b", "c"],
            body: "a=b" + e + "c"
          },
          funcName: t
        }), n[t + "s"] = a({
          args: ["array", "array", "scalar"],
          body: {
            args: ["a", "b", "s"],
            body: "a=b" + e + "s"
          },
          funcName: t + "s"
        }), n[t + "eq"] = a({
          args: ["array", "array"],
          body: {
            args: ["a", "b"],
            body: "a=a" + e + "b"
          },
          rvalue: !0,
          count: 2,
          funcName: t + "eq"
        }), n[t + "seq"] = a({
          args: ["array", "scalar"],
          body: {
            args: ["a", "s"],
            body: "a=a" + e + "s"
          },
          rvalue: !0,
          count: 2,
          funcName: t + "seq"
        })
      }
    }();
    var l = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan"];
    ! function() {
      for (var t = 0; t < l.length; ++t) {
        var e = l[t];
        n[e] = a({
          args: ["array", "array"],
          pre: {
            args: [],
            body: "this_f=Math." + e,
            thisVars: ["this_f"]
          },
          body: {
            args: ["a", "b"],
            body: "a=this_f(b)",
            thisVars: ["this_f"]
          },
          funcName: e
        }), n[e + "eq"] = a({
          args: ["array"],
          pre: {
            args: [],
            body: "this_f=Math." + e,
            thisVars: ["this_f"]
          },
          body: {
            args: ["a"],
            body: "a=this_f(a)",
            thisVars: ["this_f"]
          },
          rvalue: !0,
          count: 2,
          funcName: e + "eq"
        })
      }
    }();
    var h = ["max", "min", "atan2", "pow"];
    ! function() {
      for (var t = 0; t < h.length; ++t) {
        var e = h[t];
        n[e] = a({
          args: ["array", "array", "array"],
          pre: {
            args: [],
            body: "this_f=Math." + e,
            thisVars: ["this_f"]
          },
          body: {
            args: ["a", "b", "c"],
            body: "a=this_f(b,c)",
            thisVars: ["this_f"]
          },
          funcName: e
        }), n[e + "s"] = a({
          args: ["array", "array", "scalar"],
          pre: {
            args: [],
            body: "this_f=Math." + e,
            thisVars: ["this_f"]
          },
          body: {
            args: ["a", "b", "c"],
            body: "a=this_f(b,c)",
            thisVars: ["this_f"]
          },
          funcName: e + "s"
        }), n[e + "eq"] = a({
          args: ["array", "array"],
          pre: {
            args: [],
            body: "this_f=Math." + e,
            thisVars: ["this_f"]
          },
          body: {
            args: ["a", "b"],
            body: "a=this_f(a,b)",
            thisVars: ["this_f"]
          },
          rvalue: !0,
          count: 2,
          funcName: e + "eq"
        }), n[e + "seq"] = a({
          args: ["array", "scalar"],
          pre: {
            args: [],
            body: "this_f=Math." + e,
            thisVars: ["this_f"]
          },
          body: {
            args: ["a", "b"],
            body: "a=this_f(a,b)",
            thisVars: ["this_f"]
          },
          rvalue: !0,
          count: 2,
          funcName: e + "seq"
        })
      }
    }();
    var f = ["atan2", "pow"];
    ! function() {
      for (var t = 0; t < f.length; ++t) {
        var e = f[t];
        n[e + "op"] = a({
          args: ["array", "array", "array"],
          pre: {
            args: [],
            body: "this_f=Math." + e,
            thisVars: ["this_f"]
          },
          body: {
            args: ["a", "b", "c"],
            body: "a=this_f(c,b)",
            thisVars: ["this_f"]
          },
          funcName: e + "op"
        }), n[e + "ops"] = a({
          args: ["array", "array", "scalar"],
          pre: {
            args: [],
            body: "this_f=Math." + e,
            thisVars: ["this_f"]
          },
          body: {
            args: ["a", "b", "c"],
            body: "a=this_f(c,b)",
            thisVars: ["this_f"]
          },
          funcName: e + "ops"
        }), n[e + "opeq"] = a({
          args: ["array", "array"],
          pre: {
            args: [],
            body: "this_f=Math." + e,
            thisVars: ["this_f"]
          },
          body: {
            args: ["a", "b"],
            body: "a=this_f(b,a)",
            thisVars: ["this_f"]
          },
          rvalue: !0,
          count: 2,
          funcName: e + "opeq"
        }), n[e + "opseq"] = a({
          args: ["array", "scalar"],
          pre: {
            args: [],
            body: "this_f=Math." + e,
            thisVars: ["this_f"]
          },
          body: {
            args: ["a", "b"],
            body: "a=this_f(b,a)",
            thisVars: ["this_f"]
          },
          rvalue: !0,
          count: 2,
          funcName: e + "opseq"
        })
      }
    }(), n.any = i({
      args: ["array"],
      pre: r,
      body: {
        args: [{
          name: "a",
          lvalue: !1,
          rvalue: !0,
          count: 1
        }],
        body: "if(a){return true}",
        localVars: [],
        thisVars: []
      },
      post: {
        args: [],
        localVars: [],
        thisVars: [],
        body: "return false"
      },
      funcName: "any"
    }), n.all = i({
      args: ["array"],
      pre: r,
      body: {
        args: [{
          name: "x",
          lvalue: !1,
          rvalue: !0,
          count: 1
        }],
        body: "if(!x){return false}",
        localVars: [],
        thisVars: []
      },
      post: {
        args: [],
        localVars: [],
        thisVars: [],
        body: "return true"
      },
      funcName: "all"
    }), n.sum = i({
      args: ["array"],
      pre: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "this_s=0"
      },
      body: {
        args: [{
          name: "a",
          lvalue: !1,
          rvalue: !0,
          count: 1
        }],
        body: "this_s+=a",
        localVars: [],
        thisVars: ["this_s"]
      },
      post: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "return this_s"
      },
      funcName: "sum"
    }), n.prod = i({
      args: ["array"],
      pre: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "this_s=1"
      },
      body: {
        args: [{
          name: "a",
          lvalue: !1,
          rvalue: !0,
          count: 1
        }],
        body: "this_s*=a",
        localVars: [],
        thisVars: ["this_s"]
      },
      post: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "return this_s"
      },
      funcName: "prod"
    }), n.norm2squared = i({
      args: ["array"],
      pre: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "this_s=0"
      },
      body: {
        args: [{
          name: "a",
          lvalue: !1,
          rvalue: !0,
          count: 2
        }],
        body: "this_s+=a*a",
        localVars: [],
        thisVars: ["this_s"]
      },
      post: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "return this_s"
      },
      funcName: "norm2squared"
    }), n.norm2 = i({
      args: ["array"],
      pre: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "this_s=0"
      },
      body: {
        args: [{
          name: "a",
          lvalue: !1,
          rvalue: !0,
          count: 2
        }],
        body: "this_s+=a*a",
        localVars: [],
        thisVars: ["this_s"]
      },
      post: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "return Math.sqrt(this_s)"
      },
      funcName: "norm2"
    }), n.norminf = i({
      args: ["array"],
      pre: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "this_s=0"
      },
      body: {
        args: [{
          name: "a",
          lvalue: !1,
          rvalue: !0,
          count: 4
        }],
        body: "if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",
        localVars: [],
        thisVars: ["this_s"]
      },
      post: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "return this_s"
      },
      funcName: "norminf"
    }), n.norm1 = i({
      args: ["array"],
      pre: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "this_s=0"
      },
      body: {
        args: [{
          name: "a",
          lvalue: !1,
          rvalue: !0,
          count: 3
        }],
        body: "this_s+=a<0?-a:a",
        localVars: [],
        thisVars: ["this_s"]
      },
      post: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "return this_s"
      },
      funcName: "norm1"
    }), n.sup = i({
      args: ["array"],
      pre: {
        body: "this_h=-Infinity",
        args: [],
        thisVars: ["this_h"],
        localVars: []
      },
      body: {
        body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
        args: [{
          name: "_inline_1_arg0_",
          lvalue: !1,
          rvalue: !0,
          count: 2
        }],
        thisVars: ["this_h"],
        localVars: []
      },
      post: {
        body: "return this_h",
        args: [],
        thisVars: ["this_h"],
        localVars: []
      }
    }), n.inf = i({
      args: ["array"],
      pre: {
        body: "this_h=Infinity",
        args: [],
        thisVars: ["this_h"],
        localVars: []
      },
      body: {
        body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
        args: [{
          name: "_inline_1_arg0_",
          lvalue: !1,
          rvalue: !0,
          count: 2
        }],
        thisVars: ["this_h"],
        localVars: []
      },
      post: {
        body: "return this_h",
        args: [],
        thisVars: ["this_h"],
        localVars: []
      }
    }), n.argmin = i({
      args: ["index", "array", "shape"],
      pre: {
        body: "{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
        args: [{
          name: "_inline_0_arg0_",
          lvalue: !1,
          rvalue: !1,
          count: 0
        }, {
          name: "_inline_0_arg1_",
          lvalue: !1,
          rvalue: !1,
          count: 0
        }, {
          name: "_inline_0_arg2_",
          lvalue: !1,
          rvalue: !0,
          count: 1
        }],
        thisVars: ["this_i", "this_v"],
        localVars: []
      },
      body: {
        body: "{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
        args: [{
          name: "_inline_1_arg0_",
          lvalue: !1,
          rvalue: !0,
          count: 2
        }, {
          name: "_inline_1_arg1_",
          lvalue: !1,
          rvalue: !0,
          count: 2
        }],
        thisVars: ["this_i", "this_v"],
        localVars: ["_inline_1_k"]
      },
      post: {
        body: "{return this_i}",
        args: [],
        thisVars: ["this_i"],
        localVars: []
      }
    }), n.argmax = i({
      args: ["index", "array", "shape"],
      pre: {
        body: "{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
        args: [{
          name: "_inline_0_arg0_",
          lvalue: !1,
          rvalue: !1,
          count: 0
        }, {
          name: "_inline_0_arg1_",
          lvalue: !1,
          rvalue: !1,
          count: 0
        }, {
          name: "_inline_0_arg2_",
          lvalue: !1,
          rvalue: !0,
          count: 1
        }],
        thisVars: ["this_i", "this_v"],
        localVars: []
      },
      body: {
        body: "{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
        args: [{
          name: "_inline_1_arg0_",
          lvalue: !1,
          rvalue: !0,
          count: 2
        }, {
          name: "_inline_1_arg1_",
          lvalue: !1,
          rvalue: !0,
          count: 2
        }],
        thisVars: ["this_i", "this_v"],
        localVars: ["_inline_1_k"]
      },
      post: {
        body: "{return this_i}",
        args: [],
        thisVars: ["this_i"],
        localVars: []
      }
    }), n.random = a({
      args: ["array"],
      pre: {
        args: [],
        body: "this_f=Math.random",
        thisVars: ["this_f"]
      },
      body: {
        args: ["a"],
        body: "a=this_f()",
        thisVars: ["this_f"]
      },
      funcName: "random"
    }), n.assign = a({
      args: ["array", "array"],
      body: {
        args: ["a", "b"],
        body: "a=b"
      },
      funcName: "assign"
    }), n.assigns = a({
      args: ["array", "scalar"],
      body: {
        args: ["a", "b"],
        body: "a=b"
      },
      funcName: "assigns"
    }), n.equals = i({
      args: ["array", "array"],
      pre: r,
      body: {
        args: [{
          name: "x",
          lvalue: !1,
          rvalue: !0,
          count: 1
        }, {
          name: "y",
          lvalue: !1,
          rvalue: !0,
          count: 1
        }],
        body: "if(x!==y){return false}",
        localVars: [],
        thisVars: []
      },
      post: {
        args: [],
        localVars: [],
        thisVars: [],
        body: "return true"
      },
      funcName: "equals"
    })
  }, {
    "cwise-compiler": 39
  }],
  205: [function(t, e, n) {
    var g = t("iota-array"),
      u = t("is-buffer"),
      l = "undefined" != typeof Float64Array;

    function i(t, e) {
      return t[0] - e[0]
    }

    function v() {
      var t, e = this.stride,
        n = new Array(e.length);
      for (t = 0; t < n.length; ++t) n[t] = [Math.abs(e[t]), t];
      n.sort(i);
      var r = new Array(n.length);
      for (t = 0; t < r.length; ++t) r[t] = n[t][1];
      return r
    }

    function h(t, e) {
      var n = ["View", e, "d", t].join("");
      e < 0 && (n = "View_Nil" + t);
      var r = "generic" === t;
      if (-1 === e) {
        var i = "function " + n + "(a){this.data=a;};var proto=" + n + ".prototype;proto.dtype='" + t + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + n + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + n + "(a){return new " + n + "(a);}";
        return new Function(i)()
      }
      if (0 === e) {
        i = "function " + n + "(a,d) {this.data = a;this.offset = d};var proto=" + n + ".prototype;proto.dtype='" + t + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + n + "_copy() {return new " + n + "(this.data,this.offset)};proto.pick=function " + n + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + n + "_get(){return " + (r ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + n + "_set(v){return " + (r ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + n + "(a,b,c,d){return new " + n + "(a,d)}";
        return new Function("TrivialArray", i)(m[t][0])
      }
      i = ["'use strict'"];
      var o = g(e),
        a = o.map(function(t) {
          return "i" + t
        }),
        s = "this.offset+" + o.map(function(t) {
          return "this.stride[" + t + "]*i" + t
        }).join("+"),
        c = o.map(function(t) {
          return "b" + t
        }).join(","),
        u = o.map(function(t) {
          return "c" + t
        }).join(",");
      i.push("function " + n + "(a," + c + "," + u + ",d){this.data=a", "this.shape=[" + c + "]", "this.stride=[" + u + "]", "this.offset=d|0}", "var proto=" + n + ".prototype", "proto.dtype='" + t + "'", "proto.dimension=" + e), i.push("Object.defineProperty(proto,'size',{get:function " + n + "_size(){return " + o.map(function(t) {
        return "this.shape[" + t + "]"
      }).join("*"), "}})"), 1 === e ? i.push("proto.order=[0]") : (i.push("Object.defineProperty(proto,'order',{get:"), e < 4 ? (i.push("function " + n + "_order(){"), 2 === e ? i.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === e && i.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : i.push("ORDER})")), i.push("proto.set=function " + n + "_set(" + a.join(",") + ",v){"), r ? i.push("return this.data.set(" + s + ",v)}") : i.push("return this.data[" + s + "]=v}"), i.push("proto.get=function " + n + "_get(" + a.join(",") + "){"), r ? i.push("return this.data.get(" + s + ")}") : i.push("return this.data[" + s + "]}"), i.push("proto.index=function " + n + "_index(", a.join(), "){return " + s + "}"), i.push("proto.hi=function " + n + "_hi(" + a.join(",") + "){return new " + n + "(this.data," + o.map(function(t) {
        return ["(typeof i", t, "!=='number'||i", t, "<0)?this.shape[", t, "]:i", t, "|0"].join("")
      }).join(",") + "," + o.map(function(t) {
        return "this.stride[" + t + "]"
      }).join(",") + ",this.offset)}");
      var l = o.map(function(t) {
          return "a" + t + "=this.shape[" + t + "]"
        }),
        h = o.map(function(t) {
          return "c" + t + "=this.stride[" + t + "]"
        });
      i.push("proto.lo=function " + n + "_lo(" + a.join(",") + "){var b=this.offset,d=0," + l.join(",") + "," + h.join(","));
      for (var f = 0; f < e; ++f) i.push("if(typeof i" + f + "==='number'&&i" + f + ">=0){d=i" + f + "|0;b+=c" + f + "*d;a" + f + "-=d}");
      i.push("return new " + n + "(this.data," + o.map(function(t) {
        return "a" + t
      }).join(",") + "," + o.map(function(t) {
        return "c" + t
      }).join(",") + ",b)}"), i.push("proto.step=function " + n + "_step(" + a.join(",") + "){var " + o.map(function(t) {
        return "a" + t + "=this.shape[" + t + "]"
      }).join(",") + "," + o.map(function(t) {
        return "b" + t + "=this.stride[" + t + "]"
      }).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (f = 0; f < e; ++f) i.push("if(typeof i" + f + "==='number'){d=i" + f + "|0;if(d<0){c+=b" + f + "*(a" + f + "-1);a" + f + "=ceil(-a" + f + "/d)}else{a" + f + "=ceil(a" + f + "/d)}b" + f + "*=d}");
      i.push("return new " + n + "(this.data," + o.map(function(t) {
        return "a" + t
      }).join(",") + "," + o.map(function(t) {
        return "b" + t
      }).join(",") + ",c)}");
      var p = new Array(e),
        d = new Array(e);
      for (f = 0; f < e; ++f) p[f] = "a[i" + f + "]", d[f] = "b[i" + f + "]";
      i.push("proto.transpose=function " + n + "_transpose(" + a + "){" + a.map(function(t, e) {
        return t + "=(" + t + "===undefined?" + e + ":" + t + "|0)"
      }).join(";"), "var a=this.shape,b=this.stride;return new " + n + "(this.data," + p.join(",") + "," + d.join(",") + ",this.offset)}"), i.push("proto.pick=function " + n + "_pick(" + a + "){var a=[],b=[],c=this.offset");
      for (f = 0; f < e; ++f) i.push("if(typeof i" + f + "==='number'&&i" + f + ">=0){c=(c+this.stride[" + f + "]*i" + f + ")|0}else{a.push(this.shape[" + f + "]);b.push(this.stride[" + f + "])}");
      return i.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), i.push("return function construct_" + n + "(data,shape,stride,offset){return new " + n + "(data," + o.map(function(t) {
        return "shape[" + t + "]"
      }).join(",") + "," + o.map(function(t) {
        return "stride[" + t + "]"
      }).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", i.join("\n"))(m[t], v)
    }
    var m = {
      float32: [],
      float64: [],
      int8: [],
      int16: [],
      int32: [],
      uint8: [],
      uint16: [],
      uint32: [],
      array: [],
      uint8_clamped: [],
      buffer: [],
      generic: []
    };
    e.exports = function(t, e, n, r) {
      if (void 0 === t) return (0, m.array[0])([]);
      "number" == typeof t && (t = [t]), void 0 === e && (e = [t.length]);
      var i = e.length;
      if (void 0 === n) {
        n = new Array(i);
        for (var o = i - 1, a = 1; 0 <= o; --o) n[o] = a, a *= e[o]
      }
      if (void 0 === r)
        for (o = r = 0; o < i; ++o) n[o] < 0 && (r -= (e[o] - 1) * n[o]);
      for (var s = function(t) {
          if (u(t)) return "buffer";
          if (l) switch (Object.prototype.toString.call(t)) {
            case "[object Float64Array]":
              return "float64";
            case "[object Float32Array]":
              return "float32";
            case "[object Int8Array]":
              return "int8";
            case "[object Int16Array]":
              return "int16";
            case "[object Int32Array]":
              return "int32";
            case "[object Uint8Array]":
              return "uint8";
            case "[object Uint16Array]":
              return "uint16";
            case "[object Uint32Array]":
              return "uint32";
            case "[object Uint8ClampedArray]":
              return "uint8_clamped"
          }
          return Array.isArray(t) ? "array" : "generic"
        }(t), c = m[s]; c.length <= i + 1;) c.push(h(s, c.length - 1));
      return (0, c[i + 1])(t, e, n, r)
    }
  }, {
    "iota-array": 188,
    "is-buffer": 189
  }],
  206: [function(t, e, n) {
    var r, i;
    r = window, i = function(t, e) {
      "use strict";
      var n = document.documentElement.style,
        r = "string" == typeof n.transition ? "transition" : "WebkitTransition",
        i = "string" == typeof n.transform ? "transform" : "WebkitTransform",
        o = {
          WebkitTransition: "webkitTransitionEnd",
          transition: "transitionend"
        } [r],
        a = {
          transform: i,
          transition: r,
          transitionDuration: r + "Duration",
          transitionProperty: r + "Property",
          transitionDelay: r + "Delay"
        };

      function s(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
          x: 0,
          y: 0
        }, this._create())
      }
      var c = s.prototype = Object.create(t.prototype);
      c.constructor = s, c._create = function() {
        this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {}
        }, this.css({
          position: "absolute"
        })
      }, c.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
      }, c.getSize = function() {
        this.size = e(this.element)
      }, c.css = function(t) {
        var e = this.element.style;
        for (var n in t) {
          e[a[n] || n] = t[n]
        }
      }, c.getPosition = function() {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          r = t[e ? "left" : "right"],
          i = t[n ? "top" : "bottom"],
          o = parseFloat(r),
          a = parseFloat(i),
          s = this.layout.size; - 1 != r.indexOf("%") && (o = o / 100 * s.width), -1 != i.indexOf("%") && (a = a / 100 * s.height), o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a, o -= e ? s.paddingLeft : s.paddingRight, a -= n ? s.paddingTop : s.paddingBottom, this.position.x = o, this.position.y = a
      }, c.layoutPosition = function() {
        var t = this.layout.size,
          e = {},
          n = this.layout._getOption("originLeft"),
          r = this.layout._getOption("originTop"),
          i = n ? "paddingLeft" : "paddingRight",
          o = n ? "left" : "right",
          a = n ? "right" : "left",
          s = this.position.x + t[i];
        e[o] = this.getXValue(s), e[a] = "";
        var c = r ? "paddingTop" : "paddingBottom",
          u = r ? "top" : "bottom",
          l = r ? "bottom" : "top",
          h = this.position.y + t[c];
        e[u] = this.getYValue(h), e[l] = "", this.css(e), this.emitEvent("layout", [this])
      }, c.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
      }, c.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
      }, c._transitionTo = function(t, e) {
        this.getPosition();
        var n = this.position.x,
          r = this.position.y,
          i = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), !i || this.isTransitioning) {
          var o = t - n,
            a = e - r,
            s = {};
          s.transform = this.getTranslate(o, a), this.transition({
            to: s,
            onTransitionEnd: {
              transform: this.layoutPosition
            },
            isCleaning: !0
          })
        } else this.layoutPosition()
      }, c.getTranslate = function(t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
      }, c.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
      }, c.moveTo = c._transitionTo, c.setPosition = function(t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
      }, c._nonTransition = function(t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
      }, c.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e = this._transn;
          for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
          for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
          if (t.from) {
            this.css(t.from);
            this.element.offsetHeight;
            null
          }
          this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
      };
      var u = "opacity," + i.replace(/([A-Z])/g, function(t) {
        return "-" + t.toLowerCase()
      });
      c.enableTransition = function() {
        if (!this.isTransitioning) {
          var t = this.layout.options.transitionDuration;
          t = "number" == typeof t ? t + "ms" : t, this.css({
            transitionProperty: u,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0
          }), this.element.addEventListener(o, this, !1)
        }
      }, c.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
      }, c.onotransitionend = function(t) {
        this.ontransitionend(t)
      };
      var l = {
        "-webkit-transform": "transform"
      };
      c.ontransitionend = function(t) {
        if (t.target === this.element) {
          var e = this._transn,
            n = l[t.propertyName] || t.propertyName;
          if (delete e.ingProperties[n], function(t) {
              for (var e in t) return !1;
              return !0
            }(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) e.onEnd[n].call(this), delete e.onEnd[n];
          this.emitEvent("transitionEnd", [this])
        }
      }, c.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
      }, c._removeStyles = function(t) {
        var e = {};
        for (var n in t) e[n] = "";
        this.css(e)
      };
      var h = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
      };
      return c.removeTransitionStyles = function() {
        this.css(h)
      }, c.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
      }, c.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
          display: ""
        }), this.emitEvent("remove", [this])
      }, c.remove = function() {
        r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
          this.removeElem()
        }), this.hide()) : this.removeElem()
      }, c.reveal = function() {
        delete this.isHidden, this.css({
          display: ""
        });
        var t = this.layout.options,
          e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
          from: t.hiddenStyle,
          to: t.visibleStyle,
          isCleaning: !0,
          onTransitionEnd: e
        })
      }, c.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
      }, c.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var n in e) return n
      }, c.hide = function() {
        this.isHidden = !0, this.css({
          display: ""
        });
        var t = this.layout.options,
          e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
          from: t.visibleStyle,
          to: t.hiddenStyle,
          isCleaning: !0,
          onTransitionEnd: e
        })
      }, c.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
          display: "none"
        }), this.emitEvent("hide"))
      }, c.destroy = function() {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
        })
      }, s
    }, "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter", "get-size/get-size"], i) : "object" == typeof e && e.exports ? e.exports = i(t("ev-emitter"), t("get-size")) : (r.Outlayer = {}, r.Outlayer.Item = i(r.EvEmitter, r.getSize))
  }, {
    "ev-emitter": 111,
    "get-size": 114
  }],
  207: [function(t, e, n) {
    ! function(i, o) {
      "use strict";
      "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(t, e, n, r) {
        return o(i, t, e, n, r)
      }) : "object" == typeof e && e.exports ? e.exports = o(i, t("ev-emitter"), t("get-size"), t("fizzy-ui-utils"), t("./item")) : i.Outlayer = o(i, i.EvEmitter, i.getSize, i.fizzyUIUtils, i.Outlayer.Item)
    }(window, function(t, e, i, o, r) {
      "use strict";
      var a = t.console,
        s = t.jQuery,
        n = function() {},
        c = 0,
        u = {};

      function l(t, e) {
        var n = o.getQueryElement(t);
        if (n) {
          this.element = n, s && (this.$element = s(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
          var r = ++c;
          this.element.outlayerGUID = r, (u[r] = this)._create(), this._getOption("initLayout") && this.layout()
        } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
      }
      l.namespace = "outlayer", l.Item = r, l.defaults = {
        containerStyle: {
          position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)"
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)"
        }
      };
      var h = l.prototype;

      function f(t) {
        function e() {
          t.apply(this, arguments)
        }
        return (e.prototype = Object.create(t.prototype)).constructor = e
      }
      o.extend(h, e.prototype), h.option = function(t) {
        o.extend(this.options, t)
      }, h._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
      }, l.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
      }, h._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
      }, h.reloadItems = function() {
        this.items = this._itemize(this.element.children)
      }, h._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), n = this.constructor.Item, r = [], i = 0; i < e.length; i++) {
          var o = new n(e[i], this);
          r.push(o)
        }
        return r
      }, h._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
      }, h.getItemElements = function() {
        return this.items.map(function(t) {
          return t.element
        })
      }, h.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
      }, h._init = h.layout, h._resetLayout = function() {
        this.getSize()
      }, h.getSize = function() {
        this.size = i(this.element)
      }, h._getMeasurement = function(t, e) {
        var n, r = this.options[t];
        this[t] = r ? ("string" == typeof r ? n = this.element.querySelector(r) : r instanceof HTMLElement && (n = r), n ? i(n)[e] : r) : 0
      }, h.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
      }, h._getItemsForLayout = function(t) {
        return t.filter(function(t) {
          return !t.isIgnored
        })
      }, h._layoutItems = function(t, n) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
          var r = [];
          t.forEach(function(t) {
            var e = this._getItemLayoutPosition(t);
            e.item = t, e.isInstant = n || t.isLayoutInstant, r.push(e)
          }, this), this._processLayoutQueue(r)
        }
      }, h._getItemLayoutPosition = function() {
        return {
          x: 0,
          y: 0
        }
      }, h._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
          this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
      }, h.updateStagger = function() {
        var t = this.options.stagger;
        if (null != t) return this.stagger = function(t) {
          if ("number" == typeof t) return t;
          var e = t.match(/(^\d*\.?\d*)(\w*)/),
            n = e && e[1],
            r = e && e[2];
          if (!n.length) return 0;
          n = parseFloat(n);
          var i = p[r] || 1;
          return n * i
        }(t), this.stagger;
        this.stagger = 0
      }, h._positionItem = function(t, e, n, r, i) {
        r ? t.goTo(e, n) : (t.stagger(i * this.stagger), t.moveTo(e, n))
      }, h._postLayout = function() {
        this.resizeContainer()
      }, h.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
          var t = this._getContainerSize();
          t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
      }, h._getContainerSize = n, h._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
          var n = this.size;
          n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
      }, h._emitCompleteOnItems = function(e, t) {
        var n = this;

        function r() {
          n.dispatchEvent(e + "Complete", null, [t])
        }
        var i = t.length;
        if (t && i) {
          var o = 0;
          t.forEach(function(t) {
            t.once(e, a)
          })
        } else r();

        function a() {
          ++o == i && r()
        }
      }, h.dispatchEvent = function(t, e, n) {
        var r = e ? [e].concat(n) : n;
        if (this.emitEvent(t, r), s)
          if (this.$element = this.$element || s(this.element), e) {
            var i = s.Event(e);
            i.type = t, this.$element.trigger(i, n)
          } else this.$element.trigger(t, n)
      }, h.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
      }, h.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
      }, h.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
      }, h.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) {
          o.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
      }, h._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
      }, h._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
      }, h._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
      }, h._manageStamp = n, h._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          r = i(t);
        return {
          left: e.left - n.left - r.marginLeft,
          top: e.top - n.top - r.marginTop,
          right: n.right - e.right - r.marginRight,
          bottom: n.bottom - e.bottom - r.marginBottom
        }
      }, h.handleEvent = o.handleEvent, h.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
      }, h.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
      }, h.onresize = function() {
        this.resize()
      }, o.debounceMethod(l, "onresize", 100), h.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
      }, h.needsResizeLayout = function() {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
      }, h.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
      }, h.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
      }, h.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
          var n = this.items.slice(0);
          this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
        }
      }, h.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
          var n = this.updateStagger();
          t.forEach(function(t, e) {
            t.stagger(e * n), t.reveal()
          })
        }
      }, h.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
          var n = this.updateStagger();
          t.forEach(function(t, e) {
            t.stagger(e * n), t.hide()
          })
        }
      }, h.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
      }, h.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
      }, h.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
          var n = this.items[e];
          if (n.element == t) return n
        }
      }, h.getItems = function(t) {
        t = o.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
          var e = this.getItem(t);
          e && n.push(e)
        }, this), n
      }, h.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
          t.remove(), o.removeFrom(this.items, t)
        }, this)
      }, h.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
          t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete u[e], delete this.element.outlayerGUID, s && s.removeData(this.element, this.constructor.namespace)
      }, l.data = function(t) {
        var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
        return e && u[e]
      }, l.create = function(t, e) {
        var n = f(l);
        return n.defaults = o.extend({}, l.defaults), o.extend(n.defaults, e), n.compatOptions = o.extend({}, l.compatOptions), n.namespace = t, n.data = l.data, n.Item = f(r), o.htmlInit(n, t), s && s.bridget && s.bridget(t, n), n
      };
      var p = {
        ms: 1,
        s: 1e3
      };
      return l.Item = r, l
    })
  }, {
    "./item": 206,
    "ev-emitter": 111,
    "fizzy-ui-utils": 113,
    "get-size": 114
  }],
  208: [function(t, e, n) {
    e.exports = {
      _args: [
        [{
          raw: "p2@^0.7.1",
          scope: null,
          escapedName: "p2",
          name: "p2",
          rawSpec: "^0.7.1",
          spec: ">=0.7.1 <0.8.0",
          type: "range"
        }, "/home/ubuntu/workspace"]
      ],
      _from: "p2@>=0.7.1 <0.8.0",
      _id: "p2@0.7.1",
      _inCache: !0,
      _location: "/p2",
      _nodeVersion: "4.2.2",
      _npmUser: {
        name: "schteppe",
        email: "schteppe@gmail.com"
      },
      _npmVersion: "2.14.7",
      _phantomChildren: {},
      _requested: {
        raw: "p2@^0.7.1",
        scope: null,
        escapedName: "p2",
        name: "p2",
        rawSpec: "^0.7.1",
        spec: ">=0.7.1 <0.8.0",
        type: "range"
      },
      _requiredBy: ["#USER", "/"],
      _resolved: "https://registry.npmjs.org/p2/-/p2-0.7.1.tgz",
      _shasum: "25f2474d9bc3a6d3140a1da26a67c9e118ac9543",
      _shrinkwrap: null,
      _spec: "p2@^0.7.1",
      _where: "/home/ubuntu/workspace",
      author: {
        name: "Stefan Hedman",
        email: "schteppe@gmail.com",
        url: "http://steffe.se"
      },
      bugs: {
        url: "https://github.com/schteppe/p2.js/issues"
      },
      dependencies: {
        "poly-decomp": "0.1.1"
      },
      description: "A JavaScript 2D physics engine.",
      devDependencies: {
        grunt: "^0.4.5",
        "grunt-browserify": "~2.0.1",
        "grunt-contrib-concat": "^0.4.0",
        "grunt-contrib-jshint": "^0.11.2",
        "grunt-contrib-nodeunit": "^0.4.1",
        "grunt-contrib-uglify": "~0.4.0",
        "grunt-contrib-watch": "~0.5.0"
      },
      directories: {},
      dist: {
        shasum: "25f2474d9bc3a6d3140a1da26a67c9e118ac9543",
        tarball: "https://registry.npmjs.org/p2/-/p2-0.7.1.tgz"
      },
      engines: {
        node: "*"
      },
      gitHead: "d83c483f912362fd6e57c74b0634ea3f1f3e0c82",
      homepage: "https://github.com/schteppe/p2.js#readme",
      keywords: ["p2.js", "p2", "physics", "engine", "2d"],
      licenses: [{
        type: "MIT"
      }],
      main: "./src/p2.js",
      maintainers: [{
        name: "schteppe",
        email: "schteppe@gmail.com"
      }],
      name: "p2",
      optionalDependencies: {},
      readme: "ERROR: No README data found!",
      repository: {
        type: "git",
        url: "git+https://github.com/schteppe/p2.js.git"
      },
      scripts: {},
      version: "0.7.1"
    }
  }, {}],
  209: [function(t, e, n) {
    var p = t("../math/vec2");
    t("../utils/Utils");

    function r(t) {
      this.lowerBound = p.create(), t && t.lowerBound && p.copy(this.lowerBound, t.lowerBound), this.upperBound = p.create(), t && t.upperBound && p.copy(this.upperBound, t.upperBound)
    }
    e.exports = r;
    var d = p.create();
    r.prototype.setFromPoints = function(t, e, n, r) {
      var i = this.lowerBound,
        o = this.upperBound;
      "number" != typeof n && (n = 0), 0 !== n ? p.rotate(i, t[0], n) : p.copy(i, t[0]), p.copy(o, i);
      for (var a = Math.cos(n), s = Math.sin(n), c = 1; c < t.length; c++) {
        var u = t[c];
        if (0 !== n) {
          var l = u[0],
            h = u[1];
          d[0] = a * l - s * h, d[1] = s * l + a * h, u = d
        }
        for (var f = 0; f < 2; f++) u[f] > o[f] && (o[f] = u[f]), u[f] < i[f] && (i[f] = u[f])
      }
      e && (p.add(this.lowerBound, this.lowerBound, e), p.add(this.upperBound, this.upperBound, e)), r && (this.lowerBound[0] -= r, this.lowerBound[1] -= r, this.upperBound[0] += r, this.upperBound[1] += r)
    }, r.prototype.copy = function(t) {
      p.copy(this.lowerBound, t.lowerBound), p.copy(this.upperBound, t.upperBound)
    }, r.prototype.extend = function(t) {
      for (var e = 2; e--;) {
        var n = t.lowerBound[e];
        this.lowerBound[e] > n && (this.lowerBound[e] = n);
        var r = t.upperBound[e];
        this.upperBound[e] < r && (this.upperBound[e] = r)
      }
    }, r.prototype.overlaps = function(t) {
      var e = this.lowerBound,
        n = this.upperBound,
        r = t.lowerBound,
        i = t.upperBound;
      return (r[0] <= n[0] && n[0] <= i[0] || e[0] <= i[0] && i[0] <= n[0]) && (r[1] <= n[1] && n[1] <= i[1] || e[1] <= i[1] && i[1] <= n[1])
    }, r.prototype.containsPoint = function(t) {
      var e = this.lowerBound,
        n = this.upperBound;
      return e[0] <= t[0] && t[0] <= n[0] && e[1] <= t[1] && t[1] <= n[1]
    }, r.prototype.overlapsRay = function(t) {
      var e = 1 / t.direction[0],
        n = 1 / t.direction[1],
        r = (this.lowerBound[0] - t.from[0]) * e,
        i = (this.upperBound[0] - t.from[0]) * e,
        o = (this.lowerBound[1] - t.from[1]) * n,
        a = (this.upperBound[1] - t.from[1]) * n,
        s = Math.max(Math.max(Math.min(r, i), Math.min(o, a))),
        c = Math.min(Math.min(Math.max(r, i), Math.max(o, a)));
      return c < 0 ? -1 : c < s ? -1 : s
    }
  }, {
    "../math/vec2": 232,
    "../utils/Utils": 259
  }],
  210: [function(t, e, n) {
    var i = t("../math/vec2"),
      o = t("../objects/Body");

    function r(t) {
      this.type = t, this.result = [], this.world = null, this.boundingVolumeType = r.AABB
    }(e.exports = r).AABB = 1, r.BOUNDING_CIRCLE = 2, r.prototype.setWorld = function(t) {
      this.world = t
    }, r.prototype.getCollisionPairs = function(t) {};
    var a = i.create();
    r.boundingRadiusCheck = function(t, e) {
      i.sub(a, t.position, e.position);
      var n = i.squaredLength(a),
        r = t.boundingRadius + e.boundingRadius;
      return n <= r * r
    }, r.aabbCheck = function(t, e) {
      return t.getAABB().overlaps(e.getAABB())
    }, r.prototype.boundingVolumeCheck = function(t, e) {
      var n;
      switch (this.boundingVolumeType) {
        case r.BOUNDING_CIRCLE:
          n = r.boundingRadiusCheck(t, e);
          break;
        case r.AABB:
          n = r.aabbCheck(t, e);
          break;
        default:
          throw new Error("Bounding volume type not recognized: " + this.boundingVolumeType)
      }
      return n
    }, r.canCollide = function(t, e) {
      var n = o.KINEMATIC,
        r = o.STATIC;
      return (t.type !== r || e.type !== r) && (!(t.type === n && e.type === r || t.type === r && e.type === n) && ((t.type !== n || e.type !== n) && ((t.sleepState !== o.SLEEPING || e.sleepState !== o.SLEEPING) && !(t.sleepState === o.SLEEPING && e.type === r || e.sleepState === o.SLEEPING && t.type === r))))
    }, r.NAIVE = 1, r.SAP = 2
  }, {
    "../math/vec2": 232,
    "../objects/Body": 233
  }],
  211: [function(t, e, n) {
    t("../shapes/Circle"), t("../shapes/Plane"), t("../shapes/Shape"), t("../shapes/Particle");
    var c = t("../collision/Broadphase");
    t("../math/vec2");

    function r() {
      c.call(this, c.NAIVE)
    }(((e.exports = r).prototype = new c).constructor = r).prototype.getCollisionPairs = function(t) {
      for (var e = t.bodies, n = this.result, r = n.length = 0, i = e.length; r !== i; r++)
        for (var o = e[r], a = 0; a < r; a++) {
          var s = e[a];
          c.canCollide(o, s) && this.boundingVolumeCheck(o, s) && n.push(o, s)
        }
      return n
    }, r.prototype.aabbQuery = function(t, e, n) {
      n = n || [];
      for (var r = t.bodies, i = 0; i < r.length; i++) {
        var o = r[i];
        o.aabbNeedsUpdate && o.updateAABB(), o.aabb.overlaps(e) && n.push(o)
      }
      return n
    }
  }, {
    "../collision/Broadphase": 210,
    "../math/vec2": 232,
    "../shapes/Circle": 241,
    "../shapes/Particle": 245,
    "../shapes/Plane": 246,
    "../shapes/Shape": 247
  }],
  212: [function(t, e, n) {
    var k = t("../math/vec2"),
      V = k.sub,
      z = k.add,
      G = k.dot,
      r = (t("../utils/Utils"), t("../utils/ContactEquationPool")),
      i = t("../utils/FrictionEquationPool"),
      o = t("../utils/TupleDictionary"),
      a = t("../equations/Equation"),
      s = (t("../equations/ContactEquation"), t("../equations/FrictionEquation"), t("../shapes/Circle")),
      c = t("../shapes/Convex"),
      u = t("../shapes/Shape"),
      w = (t("../objects/Body"), t("../shapes/Box"));
    e.exports = J;
    var x = k.fromValues(0, 1),
      X = k.fromValues(0, 0),
      W = k.fromValues(0, 0),
      H = k.fromValues(0, 0),
      Y = k.fromValues(0, 0),
      Z = k.fromValues(0, 0),
      O = k.fromValues(0, 0),
      K = k.fromValues(0, 0),
      Q = k.fromValues(0, 0),
      $ = k.fromValues(0, 0),
      F = k.fromValues(0, 0),
      N = k.fromValues(0, 0),
      q = k.fromValues(0, 0),
      j = k.fromValues(0, 0),
      U = k.fromValues(0, 0),
      M = k.fromValues(0, 0),
      B = k.fromValues(0, 0),
      I = k.fromValues(0, 0),
      L = k.fromValues(0, 0),
      D = [];

    function J() {
      this.contactEquations = [], this.frictionEquations = [], this.enableFriction = !0, this.enabledEquations = !0, this.slipForce = 10, this.frictionCoefficient = .3, this.surfaceVelocity = 0, this.contactEquationPool = new r({
        size: 32
      }), this.frictionEquationPool = new i({
        size: 64
      }), this.restitution = 0, this.stiffness = a.DEFAULT_STIFFNESS, this.relaxation = a.DEFAULT_RELAXATION, this.frictionStiffness = a.DEFAULT_STIFFNESS, this.frictionRelaxation = a.DEFAULT_RELAXATION, this.enableFrictionReduction = !0, this.collidingBodiesLastStep = new o, this.contactSkinSize = .01
    }
    var l = k.create(),
      h = k.create();

    function b(t, e) {
      k.set(t.vertices[0], .5 * -e.length, -e.radius), k.set(t.vertices[1], .5 * e.length, -e.radius), k.set(t.vertices[2], .5 * e.length, e.radius), k.set(t.vertices[3], .5 * -e.length, e.radius)
    }
    J.prototype.bodiesOverlap = function(t, e) {
      for (var n = l, r = h, i = 0, o = t.shapes.length; i !== o; i++) {
        var a = t.shapes[i];
        t.toWorldFrame(n, a.position);
        for (var s = 0, c = e.shapes.length; s !== c; s++) {
          var u = e.shapes[s];
          if (e.toWorldFrame(r, u.position), this[a.type | u.type](t, a, n, a.angle + t.angle, e, u, r, u.angle + e.angle, !0)) return !0
        }
      }
      return !1
    }, J.prototype.collidedLastStep = function(t, e) {
      var n = 0 | t.id,
        r = 0 | e.id;
      return !!this.collidingBodiesLastStep.get(n, r)
    }, J.prototype.reset = function() {
      this.collidingBodiesLastStep.reset();
      for (var t = this.contactEquations, e = t.length; e--;) {
        var n = t[e],
          r = n.bodyA.id,
          i = n.bodyB.id;
        this.collidingBodiesLastStep.set(r, i, !0)
      }
      for (var o = this.contactEquations, a = this.frictionEquations, s = 0; s < o.length; s++) this.contactEquationPool.release(o[s]);
      for (s = 0; s < a.length; s++) this.frictionEquationPool.release(a[s]);
      this.contactEquations.length = this.frictionEquations.length = 0
    }, J.prototype.createContactEquation = function(t, e, n, r) {
      var i = this.contactEquationPool.get();
      return i.bodyA = t, i.bodyB = e, i.shapeA = n, i.shapeB = r, i.restitution = this.restitution, i.firstImpact = !this.collidedLastStep(t, e), i.stiffness = this.stiffness, i.relaxation = this.relaxation, i.needsUpdate = !0, i.enabled = this.enabledEquations, i.offset = this.contactSkinSize, i
    }, J.prototype.createFrictionEquation = function(t, e, n, r) {
      var i = this.frictionEquationPool.get();
      return i.bodyA = t, i.bodyB = e, i.shapeA = n, i.shapeB = r, i.setSlipForce(this.slipForce), i.frictionCoefficient = this.frictionCoefficient, i.relativeVelocity = this.surfaceVelocity, i.enabled = this.enabledEquations, i.needsUpdate = !0, i.stiffness = this.frictionStiffness, i.relaxation = this.frictionRelaxation, i.contactEquations.length = 0, i
    }, J.prototype.createFrictionFromContact = function(t) {
      var e = this.createFrictionEquation(t.bodyA, t.bodyB, t.shapeA, t.shapeB);
      return k.copy(e.contactPointA, t.contactPointA), k.copy(e.contactPointB, t.contactPointB), k.rotate90cw(e.t, t.normalA), e.contactEquations.push(t), e
    }, J.prototype.createFrictionFromAverage = function(t) {
      var e = this.contactEquations[this.contactEquations.length - 1],
        n = this.createFrictionEquation(e.bodyA, e.bodyB, e.shapeA, e.shapeB),
        r = e.bodyA;
      e.bodyB;
      k.set(n.contactPointA, 0, 0), k.set(n.contactPointB, 0, 0), k.set(n.t, 0, 0);
      for (var i = 0; i !== t; i++)(e = this.contactEquations[this.contactEquations.length - 1 - i]).bodyA === r ? (k.add(n.t, n.t, e.normalA), k.add(n.contactPointA, n.contactPointA, e.contactPointA), k.add(n.contactPointB, n.contactPointB, e.contactPointB)) : (k.sub(n.t, n.t, e.normalA), k.add(n.contactPointA, n.contactPointA, e.contactPointB), k.add(n.contactPointB, n.contactPointB, e.contactPointA)), n.contactEquations.push(e);
      var o = 1 / t;
      return k.scale(n.contactPointA, n.contactPointA, o), k.scale(n.contactPointB, n.contactPointB, o), k.normalize(n.t, n.t), k.rotate90cw(n.t, n.t), n
    }, J.prototype[u.LINE | u.CONVEX] = J.prototype.convexLine = function(t, e, n, r, i, o, a, s, c) {
      return !c && 0
    }, J.prototype[u.LINE | u.BOX] = J.prototype.lineBox = function(t, e, n, r, i, o, a, s, c) {
      return !c && 0
    };
    var p = new w({
        width: 1,
        height: 1
      }),
      d = k.create();
    J.prototype[u.CAPSULE | u.CONVEX] = J.prototype[u.CAPSULE | u.BOX] = J.prototype.convexCapsule = function(t, e, n, r, i, o, a, s, c) {
      var u = d;
      k.set(u, o.length / 2, 0), k.rotate(u, u, s), k.add(u, u, a);
      var l = this.circleConvex(i, o, u, s, t, e, n, r, c, o.radius);
      k.set(u, -o.length / 2, 0), k.rotate(u, u, s), k.add(u, u, a);
      var h = this.circleConvex(i, o, u, s, t, e, n, r, c, o.radius);
      if (c && (l || h)) return !0;
      var f = p;
      return b(f, o), this.convexConvex(t, e, n, r, i, f, a, s, c) + l + h
    }, J.prototype[u.CAPSULE | u.LINE] = J.prototype.lineCapsule = function(t, e, n, r, i, o, a, s, c) {
      return !c && 0
    };
    var _ = k.create(),
      E = k.create(),
      A = new w({
        width: 1,
        height: 1
      });
    J.prototype[u.CAPSULE | u.CAPSULE] = J.prototype.capsuleCapsule = function(t, e, n, r, i, o, a, s, c) {
      for (var u = _, l = E, h = 0, f = 0; f < 2; f++) {
        k.set(u, (0 === f ? -1 : 1) * e.length / 2, 0), k.rotate(u, u, r), k.add(u, u, n);
        for (var p = 0; p < 2; p++) {
          k.set(l, (0 === p ? -1 : 1) * o.length / 2, 0), k.rotate(l, l, s), k.add(l, l, a), this.enableFrictionReduction && (m = this.enableFriction, this.enableFriction = !1);
          var d = this.circleCircle(t, e, u, r, i, o, l, s, c, e.radius, o.radius);
          if (this.enableFrictionReduction && (this.enableFriction = m), c && d) return !0;
          h += d
        }
      }
      this.enableFrictionReduction && (m = this.enableFriction, this.enableFriction = !1);
      var g = A;
      b(g, e);
      var v = this.convexCapsule(t, g, n, r, i, o, a, s, c);
      if (this.enableFrictionReduction && (this.enableFriction = m), c && v) return !0;
      if (h += v, this.enableFrictionReduction) {
        var m = this.enableFriction;
        this.enableFriction = !1
      }
      b(g, o);
      var y = this.convexCapsule(i, g, a, s, t, e, n, r, c);
      return this.enableFrictionReduction && (this.enableFriction = m), !(!c || !y) || (h += y, this.enableFrictionReduction && h && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(h)), h)
    }, J.prototype[u.LINE | u.LINE] = J.prototype.lineLine = function(t, e, n, r, i, o, a, s, c) {
      return !c && 0
    }, J.prototype[u.PLANE | u.LINE] = J.prototype.planeLine = function(t, e, n, r, i, o, a, s, c) {
      var u = X,
        l = W,
        h = H,
        f = Y,
        p = Z,
        d = O,
        g = K,
        v = Q,
        m = $,
        y = D,
        b = 0;
      k.set(u, -o.length / 2, 0), k.set(l, o.length / 2, 0), k.rotate(h, u, s), k.rotate(f, l, s), z(h, h, a), z(f, f, a), k.copy(u, h), k.copy(l, f), V(p, l, u), k.normalize(d, p), k.rotate90cw(m, d), k.rotate(v, x, r), y[0] = u, y[1] = l;
      for (var _ = 0; _ < y.length; _++) {
        var E = y[_];
        V(g, E, n);
        var A = G(g, v);
        if (A < 0) {
          if (c) return !0;
          var w = this.createContactEquation(t, i, e, o);
          b++, k.copy(w.normalA, v), k.normalize(w.normalA, w.normalA), k.scale(g, v, A), V(w.contactPointA, E, g), V(w.contactPointA, w.contactPointA, t.position), V(w.contactPointB, E, a), z(w.contactPointB, w.contactPointB, a), V(w.contactPointB, w.contactPointB, i.position), this.contactEquations.push(w), this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(w))
        }
      }
      return !c && (this.enableFrictionReduction || b && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(b)), b)
    }, J.prototype[u.PARTICLE | u.CAPSULE] = J.prototype.particleCapsule = function(t, e, n, r, i, o, a, s, c) {
      return this.circleLine(t, e, n, r, i, o, a, s, c, o.radius, 0)
    }, J.prototype[u.CIRCLE | u.LINE] = J.prototype.circleLine = function(t, e, n, r, i, o, a, s, c, u, l) {
      u = u || 0, l = void 0 !== l ? l : e.radius;
      var h = X,
        f = W,
        p = H,
        d = Y,
        g = Z,
        v = O,
        m = K,
        y = Q,
        b = $,
        _ = F,
        E = N,
        A = q,
        w = j,
        x = U,
        T = D;
      k.set(y, -o.length / 2, 0), k.set(b, o.length / 2, 0), k.rotate(_, y, s), k.rotate(E, b, s), z(_, _, a), z(E, E, a), k.copy(y, _), k.copy(b, E), V(v, b, y), k.normalize(m, v), k.rotate90cw(g, m), V(A, n, y);
      var S = G(A, g);
      V(d, y, a), V(w, n, a);
      var R = l + u;
      if (Math.abs(S) < R) {
        k.scale(h, g, S), V(p, n, h), k.scale(f, g, G(g, w)), k.normalize(f, f), k.scale(f, f, u), z(p, p, f);
        var I = G(m, p),
          L = G(m, y),
          M = G(m, b);
        if (L < I && I < M) {
          if (c) return !0;
          var B = this.createContactEquation(t, i, e, o);
          return k.scale(B.normalA, h, -1), k.normalize(B.normalA, B.normalA), k.scale(B.contactPointA, B.normalA, l), z(B.contactPointA, B.contactPointA, n), V(B.contactPointA, B.contactPointA, t.position), V(B.contactPointB, p, a), z(B.contactPointB, B.contactPointB, a), V(B.contactPointB, B.contactPointB, i.position), this.contactEquations.push(B), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(B)), 1
        }
      }
      T[0] = y, T[1] = b;
      for (var C = 0; C < T.length; C++) {
        var P = T[C];
        if (V(A, P, n), k.squaredLength(A) < Math.pow(R, 2)) {
          if (c) return !0;
          B = this.createContactEquation(t, i, e, o);
          return k.copy(B.normalA, A), k.normalize(B.normalA, B.normalA), k.scale(B.contactPointA, B.normalA, l), z(B.contactPointA, B.contactPointA, n), V(B.contactPointA, B.contactPointA, t.position), V(B.contactPointB, P, a), k.scale(x, B.normalA, -u), z(B.contactPointB, B.contactPointB, x), z(B.contactPointB, B.contactPointB, a), V(B.contactPointB, B.contactPointB, i.position), this.contactEquations.push(B), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(B)), 1
        }
      }
      return 0
    }, J.prototype[u.CIRCLE | u.CAPSULE] = J.prototype.circleCapsule = function(t, e, n, r, i, o, a, s, c) {
      return this.circleLine(t, e, n, r, i, o, a, s, c, o.radius)
    }, J.prototype[u.CIRCLE | u.CONVEX] = J.prototype[u.CIRCLE | u.BOX] = J.prototype.circleConvex = function(t, e, n, r, i, o, a, s, c, u) {
      u = "number" == typeof u ? u : e.radius;
      for (var l = X, h = W, f = H, p = Y, d = Z, g = F, v = N, m = j, y = U, b = M, _ = B, E = !1, A = Number.MAX_VALUE, w = o.vertices, x = 0; x !== w.length + 1; x++) {
        var T = w[x % w.length],
          S = w[(x + 1) % w.length];
        if (k.rotate(l, T, s), k.rotate(h, S, s), z(l, l, a), z(h, h, a), V(f, h, l), k.normalize(p, f), k.rotate90cw(d, p), k.scale(y, d, -e.radius), z(y, y, n), C(y, o, a, s)) {
          k.sub(b, l, y);
          var R = Math.abs(k.dot(b, d));
          R < A && (k.copy(_, y), A = R, k.scale(m, d, R), k.add(m, m, y), E = !0)
        }
      }
      if (E) {
        if (c) return !0;
        var I = this.createContactEquation(t, i, e, o);
        return k.sub(I.normalA, _, n), k.normalize(I.normalA, I.normalA), k.scale(I.contactPointA, I.normalA, u), z(I.contactPointA, I.contactPointA, n), V(I.contactPointA, I.contactPointA, t.position), V(I.contactPointB, m, a), z(I.contactPointB, I.contactPointB, a), V(I.contactPointB, I.contactPointB, i.position), this.contactEquations.push(I), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(I)), 1
      }
      if (0 < u)
        for (x = 0; x < w.length; x++) {
          var L = w[x];
          if (k.rotate(v, L, s), z(v, v, a), V(g, v, n), k.squaredLength(g) < Math.pow(u, 2)) {
            if (c) return !0;
            I = this.createContactEquation(t, i, e, o);
            return k.copy(I.normalA, g), k.normalize(I.normalA, I.normalA), k.scale(I.contactPointA, I.normalA, u), z(I.contactPointA, I.contactPointA, n), V(I.contactPointA, I.contactPointA, t.position), V(I.contactPointB, v, a), z(I.contactPointB, I.contactPointB, a), V(I.contactPointB, I.contactPointB, i.position), this.contactEquations.push(I), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(I)), 1
          }
        }
      return 0
    };
    var g = k.create(),
      v = k.create(),
      m = k.create(),
      y = k.create();

    function C(t, e, n, r) {
      for (var i = g, o = v, a = m, s = y, c = t, u = e.vertices, l = null, h = 0; h !== u.length + 1; h++) {
        var f = u[h % u.length],
          p = u[(h + 1) % u.length];
        k.rotate(i, f, r), k.rotate(o, p, r), z(i, i, n), z(o, o, n), V(a, i, c), V(s, o, c);
        var d = k.crossLength(a, s);
        if (null === l && (l = d), d * l <= 0) return !1;
        l = d
      }
      return !0
    }
    J.prototype[u.PARTICLE | u.CONVEX] = J.prototype[u.PARTICLE | u.BOX] = J.prototype.particleConvex = function(t, e, n, r, i, o, a, s, c) {
      var u = X,
        l = W,
        h = H,
        f = Y,
        p = Z,
        d = O,
        g = K,
        v = F,
        m = j,
        y = I,
        b = L,
        _ = Number.MAX_VALUE,
        E = !1,
        A = o.vertices;
      if (!C(n, o, a, s)) return 0;
      if (c) return !0;
      for (var w = 0; w !== A.length + 1; w++) {
        var x = A[w % A.length],
          T = A[(w + 1) % A.length];
        k.rotate(u, x, s), k.rotate(l, T, s), z(u, u, a), z(l, l, a), V(h, l, u), k.normalize(f, h), k.rotate90cw(p, f), V(v, n, u);
        G(v, p);
        V(d, u, a), V(g, n, a), k.sub(y, u, n);
        var S = Math.abs(k.dot(y, p));
        S < _ && (_ = S, k.scale(m, p, S), k.add(m, m, n), k.copy(b, p), E = !0)
      }
      if (E) {
        var R = this.createContactEquation(t, i, e, o);
        return k.scale(R.normalA, b, -1), k.normalize(R.normalA, R.normalA), k.set(R.contactPointA, 0, 0), z(R.contactPointA, R.contactPointA, n), V(R.contactPointA, R.contactPointA, t.position), V(R.contactPointB, m, a), z(R.contactPointB, R.contactPointB, a), V(R.contactPointB, R.contactPointB, i.position), this.contactEquations.push(R), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(R)), 1
      }
      return 0
    }, J.prototype[u.CIRCLE] = J.prototype.circleCircle = function(t, e, n, r, i, o, a, s, c, u, l) {
      var h = X;
      u = u || e.radius, l = l || o.radius;
      V(h, n, a);
      var f = u + l;
      if (k.squaredLength(h) > Math.pow(f, 2)) return 0;
      if (c) return !0;
      var p = this.createContactEquation(t, i, e, o);
      return V(p.normalA, a, n), k.normalize(p.normalA, p.normalA), k.scale(p.contactPointA, p.normalA, u), k.scale(p.contactPointB, p.normalA, -l), z(p.contactPointA, p.contactPointA, n), V(p.contactPointA, p.contactPointA, t.position), z(p.contactPointB, p.contactPointB, a), V(p.contactPointB, p.contactPointB, i.position), this.contactEquations.push(p), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(p)), 1
    }, J.prototype[u.PLANE | u.CONVEX] = J.prototype[u.PLANE | u.BOX] = J.prototype.planeConvex = function(t, e, n, r, i, o, a, s, c) {
      var u = X,
        l = W,
        h = H,
        f = 0;
      k.rotate(l, x, r);
      for (var p = 0; p !== o.vertices.length; p++) {
        var d = o.vertices[p];
        if (k.rotate(u, d, s), z(u, u, a), V(h, u, n), G(h, l) <= 0) {
          if (c) return !0;
          f++;
          var g = this.createContactEquation(t, i, e, o);
          V(h, u, n), k.copy(g.normalA, l);
          var v = G(h, g.normalA);
          k.scale(h, g.normalA, v), V(g.contactPointB, u, i.position), V(g.contactPointA, u, h), V(g.contactPointA, g.contactPointA, t.position), this.contactEquations.push(g), this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(g))
        }
      }
      return this.enableFrictionReduction && this.enableFriction && f && this.frictionEquations.push(this.createFrictionFromAverage(f)), f
    }, J.prototype[u.PARTICLE | u.PLANE] = J.prototype.particlePlane = function(t, e, n, r, i, o, a, s, c) {
      var u = X,
        l = W;
      s = s || 0, V(u, n, a), k.rotate(l, x, s);
      var h = G(u, l);
      if (0 < h) return 0;
      if (c) return !0;
      var f = this.createContactEquation(i, t, o, e);
      return k.copy(f.normalA, l), k.scale(u, f.normalA, h), V(f.contactPointA, n, u), V(f.contactPointA, f.contactPointA, i.position), V(f.contactPointB, n, t.position), this.contactEquations.push(f), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(f)), 1
    }, J.prototype[u.CIRCLE | u.PARTICLE] = J.prototype.circleParticle = function(t, e, n, r, i, o, a, s, c) {
      var u = X;
      if (V(u, a, n), k.squaredLength(u) > Math.pow(e.radius, 2)) return 0;
      if (c) return !0;
      var l = this.createContactEquation(t, i, e, o);
      return k.copy(l.normalA, u), k.normalize(l.normalA, l.normalA), k.scale(l.contactPointA, l.normalA, e.radius), z(l.contactPointA, l.contactPointA, n), V(l.contactPointA, l.contactPointA, t.position), V(l.contactPointB, a, i.position), this.contactEquations.push(l), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(l)), 1
    };
    var T = new s({
        radius: 1
      }),
      S = k.create(),
      R = k.create();
    k.create();
    J.prototype[u.PLANE | u.CAPSULE] = J.prototype.planeCapsule = function(t, e, n, r, i, o, a, s, c) {
      var u, l = S,
        h = R,
        f = T;
      k.set(l, -o.length / 2, 0), k.rotate(l, l, s), z(l, l, a), k.set(h, o.length / 2, 0), k.rotate(h, h, s), z(h, h, a), f.radius = o.radius, this.enableFrictionReduction && (u = this.enableFriction, this.enableFriction = !1);
      var p = this.circlePlane(i, f, l, 0, t, e, n, r, c),
        d = this.circlePlane(i, f, h, 0, t, e, n, r, c);
      if (this.enableFrictionReduction && (this.enableFriction = u), c) return p || d;
      var g = p + d;
      return this.enableFrictionReduction && g && this.frictionEquations.push(this.createFrictionFromAverage(g)), g
    }, J.prototype[u.CIRCLE | u.PLANE] = J.prototype.circlePlane = function(t, e, n, r, i, o, a, s, c) {
      var u = t,
        l = e,
        h = n,
        f = i,
        p = a,
        d = s;
      d = d || 0;
      var g = X,
        v = W,
        m = H;
      V(g, h, p), k.rotate(v, x, d);
      var y = G(v, g);
      if (y > l.radius) return 0;
      if (c) return !0;
      var b = this.createContactEquation(f, u, o, e);
      return k.copy(b.normalA, v), k.scale(b.contactPointB, b.normalA, -l.radius), z(b.contactPointB, b.contactPointB, h), V(b.contactPointB, b.contactPointB, u.position), k.scale(m, b.normalA, y), V(b.contactPointA, g, m), z(b.contactPointA, b.contactPointA, p), V(b.contactPointA, b.contactPointA, f.position), this.contactEquations.push(b), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b)), 1
    }, J.prototype[u.CONVEX] = J.prototype[u.CONVEX | u.BOX] = J.prototype[u.BOX] = J.prototype.convexConvex = function(t, e, n, r, i, o, a, s, c, u) {
      var l = X,
        h = W,
        f = H,
        p = Y,
        d = Z,
        g = K,
        v = Q,
        m = $,
        y = 0;
      u = "number" == typeof u ? u : 0;
      if (!J.findSeparatingAxis(e, n, r, o, a, s, l)) return 0;
      V(v, a, n), 0 < G(l, v) && k.scale(l, l, -1);
      var b = J.getClosestEdge(e, r, l, !0),
        _ = J.getClosestEdge(o, s, l);
      if (-1 === b || -1 === _) return 0;
      for (var E = 0; E < 2; E++) {
        var A, w = b,
          x = _,
          T = e,
          S = o,
          R = n,
          I = a,
          L = r,
          M = s,
          B = t,
          C = i;
        if (0 === E) A = w, w = x, x = A, A = T, T = S, S = A, A = R, R = I, I = A, A = L, L = M, M = A, A = B, B = C, C = A;
        for (var P = x; P < x + 2; P++) {
          var O = S.vertices[(P + S.vertices.length) % S.vertices.length];
          k.rotate(h, O, M), z(h, h, I);
          for (var F = 0, N = w - 1; N < w + 2; N++) {
            var q = T.vertices[(N + T.vertices.length) % T.vertices.length],
              j = T.vertices[(N + 1 + T.vertices.length) % T.vertices.length];
            k.rotate(f, q, L), k.rotate(p, j, L), z(f, f, R), z(p, p, R), V(d, p, f), k.rotate90cw(m, d), k.normalize(m, m), V(v, h, f);
            var U = G(m, v);
            (N === w && U <= u || N !== w && U <= 0) && F++
          }
          if (3 <= F) {
            if (c) return !0;
            var D = this.createContactEquation(B, C, T, S);
            y++;
            q = T.vertices[w % T.vertices.length], j = T.vertices[(w + 1) % T.vertices.length];
            k.rotate(f, q, L), k.rotate(p, j, L), z(f, f, R), z(p, p, R), V(d, p, f), k.rotate90cw(D.normalA, d), k.normalize(D.normalA, D.normalA), V(v, h, f);
            U = G(D.normalA, v);
            k.scale(g, D.normalA, U), V(D.contactPointA, h, R), V(D.contactPointA, D.contactPointA, g), z(D.contactPointA, D.contactPointA, R), V(D.contactPointA, D.contactPointA, B.position), V(D.contactPointB, h, I), z(D.contactPointB, D.contactPointB, I), V(D.contactPointB, D.contactPointB, C.position), this.contactEquations.push(D), this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(D))
          }
        }
      }
      return this.enableFrictionReduction && this.enableFriction && y && this.frictionEquations.push(this.createFrictionFromAverage(y)), y
    };
    var P = k.fromValues(0, 0);
    J.projectConvexOntoAxis = function(t, e, n, r, i) {
      var o, a, s = null,
        c = null,
        u = P;
      k.rotate(u, r, -n);
      for (var l = 0; l < t.vertices.length; l++) o = t.vertices[l], a = G(o, u), (null === s || s < a) && (s = a), (null === c || a < c) && (c = a);
      if (s < c) {
        var h = c;
        c = s, s = h
      }
      var f = G(e, r);
      k.set(i, c + f, s + f)
    };
    var tt = k.fromValues(0, 0),
      et = k.fromValues(0, 0),
      nt = k.fromValues(0, 0),
      rt = k.fromValues(0, 0),
      it = k.fromValues(0, 0),
      ot = k.fromValues(0, 0);
    J.findSeparatingAxis = function(t, e, n, r, i, o, a) {
      var s = null,
        c = !1,
        u = !1,
        l = tt,
        h = et,
        f = nt,
        p = rt,
        d = it,
        g = ot;
      if (t instanceof w && r instanceof w)
        for (var v = 0; 2 !== v; v++) {
          var m = t,
            y = n;
          1 === v && (m = r, y = o);
          for (var b = 0; 2 !== b; b++) {
            0 === b ? k.set(p, 0, 1) : 1 === b && k.set(p, 1, 0), 0 !== y && k.rotate(p, p, y), J.projectConvexOntoAxis(t, e, n, p, d), J.projectConvexOntoAxis(r, i, o, p, g);
            var _ = d,
              E = g;
            d[0] > g[0] && (E = d, _ = g, !0), c = (A = E[0] - _[1]) <= 0, (null === s || s < A) && (k.copy(a, p), s = A, u = c)
          }
        } else
          for (v = 0; 2 !== v; v++) {
            m = t, y = n;
            1 === v && (m = r, y = o);
            for (b = 0; b !== m.vertices.length; b++) {
              k.rotate(h, m.vertices[b], y), k.rotate(f, m.vertices[(b + 1) % m.vertices.length], y), V(l, f, h), k.rotate90cw(p, l), k.normalize(p, p), J.projectConvexOntoAxis(t, e, n, p, d), J.projectConvexOntoAxis(r, i, o, p, g);
              var A;
              _ = d, E = g;
              d[0] > g[0] && (E = d, _ = g, !0), c = (A = E[0] - _[1]) <= 0, (null === s || s < A) && (k.copy(a, p), s = A, u = c)
            }
          }
      return u
    };
    var f = k.fromValues(0, 0),
      at = k.fromValues(0, 0),
      st = k.fromValues(0, 0);
    J.getClosestEdge = function(t, e, n, r) {
      var i = f,
        o = at,
        a = st;
      k.rotate(i, n, -e), r && k.scale(i, i, -1);
      for (var s = -1, c = t.vertices.length, u = -1, l = 0; l !== c; l++) {
        V(o, t.vertices[(l + 1) % c], t.vertices[l % c]), k.rotate90cw(a, o), k.normalize(a, a);
        var h = G(a, i);
        (-1 === s || u < h) && (s = l % c, u = h)
      }
      return s
    };
    var ct = k.create(),
      ut = k.create(),
      lt = k.create(),
      ht = k.create(),
      ft = k.create(),
      pt = k.create(),
      dt = k.create();
    J.prototype[u.CIRCLE | u.HEIGHTFIELD] = J.prototype.circleHeightfield = function(t, e, n, r, i, o, a, s, c, u) {
      var l = o.heights,
        h = (u = u || e.radius, o.elementWidth),
        f = ut,
        p = ct,
        d = ft,
        g = dt,
        v = pt,
        m = lt,
        y = ht,
        b = Math.floor((n[0] - u - a[0]) / h),
        _ = Math.ceil((n[0] + u - a[0]) / h);
      b < 0 && (b = 0), _ >= l.length && (_ = l.length - 1);
      for (var E = l[b], A = l[_], w = b; w < _; w++) l[w] < A && (A = l[w]), l[w] > E && (E = l[w]);
      if (n[1] - u > E) return !c && 0;
      var x = !1;
      for (w = b; w < _; w++) {
        k.set(m, w * h, l[w]), k.set(y, (w + 1) * h, l[w + 1]), k.add(m, m, a), k.add(y, y, a), k.sub(v, y, m), k.rotate(v, v, Math.PI / 2), k.normalize(v, v), k.scale(p, v, -u), k.add(p, p, n), k.sub(f, p, m);
        var T = k.dot(f, v);
        if (p[0] >= m[0] && p[0] < y[0] && T <= 0) {
          if (c) return !0;
          x = !0, k.scale(f, v, -T), k.add(d, p, f), k.copy(g, v);
          var S = this.createContactEquation(i, t, o, e);
          k.copy(S.normalA, g), k.scale(S.contactPointB, S.normalA, -u), z(S.contactPointB, S.contactPointB, n), V(S.contactPointB, S.contactPointB, t.position), k.copy(S.contactPointA, d), k.sub(S.contactPointA, S.contactPointA, i.position), this.contactEquations.push(S), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(S))
        }
      }
      if (x = !1, 0 < u)
        for (w = b; w <= _; w++)
          if (k.set(m, w * h, l[w]), k.add(m, m, a), k.sub(f, n, m), k.squaredLength(f) < Math.pow(u, 2)) {
            if (c) return !0;
            x = !0;
            S = this.createContactEquation(i, t, o, e);
            k.copy(S.normalA, f), k.normalize(S.normalA, S.normalA), k.scale(S.contactPointB, S.normalA, -u), z(S.contactPointB, S.contactPointB, n), V(S.contactPointB, S.contactPointB, t.position), V(S.contactPointA, m, a), z(S.contactPointA, S.contactPointA, a), V(S.contactPointA, S.contactPointA, i.position), this.contactEquations.push(S), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(S))
          } return x ? 1 : 0
    };
    var gt = k.create(),
      vt = k.create(),
      mt = k.create(),
      yt = new c({
        vertices: [k.create(), k.create(), k.create(), k.create()]
      });
    J.prototype[u.BOX | u.HEIGHTFIELD] = J.prototype[u.CONVEX | u.HEIGHTFIELD] = J.prototype.convexHeightfield = function(t, e, n, r, i, o, a, s, c) {
      var u = o.heights,
        l = o.elementWidth,
        h = gt,
        f = vt,
        p = mt,
        d = yt,
        g = Math.floor((t.aabb.lowerBound[0] - a[0]) / l),
        v = Math.ceil((t.aabb.upperBound[0] - a[0]) / l);
      g < 0 && (g = 0), v >= u.length && (v = u.length - 1);
      for (var m = u[g], y = u[v], b = g; b < v; b++) u[b] < y && (y = u[b]), u[b] > m && (m = u[b]);
      if (t.aabb.lowerBound[1] > m) return !c && 0;
      var _ = 0;
      for (b = g; b < v; b++) {
        k.set(h, b * l, u[b]), k.set(f, (b + 1) * l, u[b + 1]), k.add(h, h, a), k.add(f, f, a);
        k.set(p, .5 * (f[0] + h[0]), .5 * (f[1] + h[1] - 100)), k.sub(d.vertices[0], f, p), k.sub(d.vertices[1], h, p), k.copy(d.vertices[2], d.vertices[1]), k.copy(d.vertices[3], d.vertices[0]), d.vertices[2][1] -= 100, d.vertices[3][1] -= 100, _ += this.convexConvex(t, e, n, r, i, d, p, 0, c)
      }
      return _
    }
  }, {
    "../equations/ContactEquation": 223,
    "../equations/Equation": 224,
    "../equations/FrictionEquation": 225,
    "../math/vec2": 232,
    "../objects/Body": 233,
    "../shapes/Box": 239,
    "../shapes/Circle": 241,
    "../shapes/Convex": 242,
    "../shapes/Shape": 247,
    "../utils/ContactEquationPool": 250,
    "../utils/FrictionEquationPool": 251,
    "../utils/TupleDictionary": 258,
    "../utils/Utils": 259
  }],
  213: [function(t, e, n) {
    e.exports = a;
    var c = t("../math/vec2");
    t("../collision/RaycastResult"), t("../shapes/Shape"), t("../collision/AABB");

    function a(t) {
      t = t || {}, this.from = t.from ? c.fromValues(t.from[0], t.from[1]) : c.create(), this.to = t.to ? c.fromValues(t.to[0], t.to[1]) : c.create(), this.checkCollisionResponse = void 0 === t.checkCollisionResponse || t.checkCollisionResponse, this.skipBackfaces = !!t.skipBackfaces, this.collisionMask = void 0 !== t.collisionMask ? t.collisionMask : -1, this.collisionGroup = void 0 !== t.collisionGroup ? t.collisionGroup : -1, this.mode = void 0 !== t.mode ? t.mode : a.ANY, this.callback = t.callback || function(t) {}, this.direction = c.create(), this.length = 1, this.update()
    }(a.prototype.constructor = a).CLOSEST = 1, a.ANY = 2, a.ALL = 4, a.prototype.update = function() {
      var t = this.direction;
      c.sub(t, this.to, this.from), this.length = c.length(t), c.normalize(t, t)
    }, a.prototype.intersectBodies = function(t, e) {
      for (var n = 0, r = e.length; !t.shouldStop(this) && n < r; n++) {
        var i = e[n],
          o = i.getAABB();
        (0 <= o.overlapsRay(this) || o.containsPoint(this.from)) && this.intersectBody(t, i)
      }
    };
    var u = c.create();
    a.prototype.intersectBody = function(t, e) {
      var n = this.checkCollisionResponse;
      if (!n || e.collisionResponse)
        for (var r = u, i = 0, o = e.shapes.length; i < o; i++) {
          var a = e.shapes[i];
          if ((!n || a.collisionResponse) && (0 != (this.collisionGroup & a.collisionMask) && 0 != (a.collisionGroup & this.collisionMask))) {
            c.rotate(r, a.position, e.angle), c.add(r, r, e.position);
            var s = a.angle + e.angle;
            if (this.intersectShape(t, a, s, r, e), t.shouldStop(this)) break
          }
        }
    }, a.prototype.intersectShape = function(t, e, n, r, i) {
      (function(t, e, n) {
        c.sub(o, n, t);
        var r = c.dot(o, e);
        return c.scale(s, e, r), c.add(s, s, t), c.squaredDistance(n, s)
      })(this.from, this.direction, r) > e.boundingRadius * e.boundingRadius || (this._currentBody = i, (this._currentShape = e).raycast(t, this, r, n), this._currentBody = this._currentShape = null)
    }, a.prototype.getAABB = function(t) {
      var e = this.to,
        n = this.from;
      c.set(t.lowerBound, Math.min(e[0], n[0]), Math.min(e[1], n[1])), c.set(t.upperBound, Math.max(e[0], n[0]), Math.max(e[1], n[1]))
    };
    c.create();
    a.prototype.reportIntersection = function(t, e, n, r) {
      this.from, this.to;
      var i = this._currentShape,
        o = this._currentBody;
      if (!(this.skipBackfaces && 0 < c.dot(n, this.direction))) switch (this.mode) {
        case a.ALL:
          t.set(n, i, o, e, r), this.callback(t);
          break;
        case a.CLOSEST:
          (e < t.fraction || !t.hasHit()) && t.set(n, i, o, e, r);
          break;
        case a.ANY:
          t.set(n, i, o, e, r)
      }
    };
    var o = c.create(),
      s = c.create()
  }, {
    "../collision/AABB": 209,
    "../collision/RaycastResult": 214,
    "../math/vec2": 232,
    "../shapes/Shape": 247
  }],
  214: [function(t, e, n) {
    var o = t("../math/vec2"),
      r = t("../collision/Ray");

    function i() {
      this.normal = o.create(), this.shape = null, this.body = null, this.faceIndex = -1, this.fraction = -1, this.isStopped = !1
    }(e.exports = i).prototype.reset = function() {
      o.set(this.normal, 0, 0), this.shape = null, this.body = null, this.faceIndex = -1, this.fraction = -1, this.isStopped = !1
    }, i.prototype.getHitDistance = function(t) {
      return o.distance(t.from, t.to) * this.fraction
    }, i.prototype.hasHit = function() {
      return -1 !== this.fraction
    }, i.prototype.getHitPoint = function(t, e) {
      o.lerp(t, e.from, e.to, this.fraction)
    }, i.prototype.stop = function() {
      this.isStopped = !0
    }, i.prototype.shouldStop = function(t) {
      return this.isStopped || -1 !== this.fraction && t.mode === r.ANY
    }, i.prototype.set = function(t, e, n, r, i) {
      o.copy(this.normal, t), this.shape = e, this.body = n, this.fraction = r, this.faceIndex = i
    }
  }, {
    "../collision/Ray": 213,
    "../math/vec2": 232
  }],
  215: [function(t, e, n) {
    var r = t("../utils/Utils"),
      h = t("../collision/Broadphase");

    function i() {
      h.call(this, h.SAP), this.axisList = [], this.axisIndex = 0;
      var n = this;
      this._addBodyHandler = function(t) {
        n.axisList.push(t.body)
      }, this._removeBodyHandler = function(t) {
        var e = n.axisList.indexOf(t.body); - 1 !== e && n.axisList.splice(e, 1)
      }
    }(((e.exports = i).prototype = new h).constructor = i).prototype.setWorld = function(t) {
      this.axisList.length = 0, r.appendArray(this.axisList, t.bodies), t.off("addBody", this._addBodyHandler).off("removeBody", this._removeBodyHandler), t.on("addBody", this._addBodyHandler).on("removeBody", this._removeBodyHandler), this.world = t
    }, i.sortAxisList = function(t, e) {
      e |= 0;
      for (var n = 1, r = t.length; n < r; n++) {
        for (var i = t[n], o = n - 1; 0 <= o && !(t[o].aabb.lowerBound[e] <= i.aabb.lowerBound[e]); o--) t[o + 1] = t[o];
        t[o + 1] = i
      }
      return t
    }, i.prototype.sortList = function() {
      var t = this.axisList,
        e = this.axisIndex;
      i.sortAxisList(t, e)
    }, i.prototype.getCollisionPairs = function(t) {
      var e = this.axisList,
        n = this.result,
        r = this.axisIndex;
      n.length = 0;
      for (var i = e.length; i--;) {
        var o = e[i];
        o.aabbNeedsUpdate && o.updateAABB()
      }
      this.sortList();
      for (var a = 0, s = 0 | e.length; a !== s; a++)
        for (var c = e[a], u = a + 1; u < s; u++) {
          var l = e[u];
          if (!(l.aabb.lowerBound[r] <= c.aabb.upperBound[r])) break;
          h.canCollide(c, l) && this.boundingVolumeCheck(c, l) && n.push(c, l)
        }
      return n
    }, i.prototype.aabbQuery = function(t, e, n) {
      n = n || [], this.sortList();
      var r = this.axisIndex,
        i = "x";
      1 === r && (i = "y"), 2 === r && (i = "z");
      for (var o = this.axisList, a = (e.lowerBound[i], e.upperBound[i], 0); a < o.length; a++) {
        var s = o[a];
        s.aabbNeedsUpdate && s.updateAABB(), s.aabb.overlaps(e) && n.push(s)
      }
      return n
    }
  }, {
    "../collision/Broadphase": 210,
    "../utils/Utils": 259
  }],
  216: [function(t, e, n) {
    e.exports = r;
    var i = t("../utils/Utils");

    function r(t, e, n, r) {
      this.type = n, r = i.defaults(r, {
        collideConnected: !0,
        wakeUpBodies: !0
      }), this.equations = [], this.bodyA = t, this.bodyB = e, this.collideConnected = r.collideConnected, r.wakeUpBodies && (t && t.wakeUp(), e && e.wakeUp())
    }
    r.prototype.update = function() {
      throw new Error("method update() not implmemented in this Constraint subclass!")
    }, r.DISTANCE = 1, r.GEAR = 2, r.LOCK = 3, r.PRISMATIC = 4, r.REVOLUTE = 5, r.prototype.setStiffness = function(t) {
      for (var e = this.equations, n = 0; n !== e.length; n++) {
        var r = e[n];
        r.stiffness = t, r.needsUpdate = !0
      }
    }, r.prototype.setRelaxation = function(t) {
      for (var e = this.equations, n = 0; n !== e.length; n++) {
        var r = e[n];
        r.relaxation = t, r.needsUpdate = !0
      }
    }
  }, {
    "../utils/Utils": 259
  }],
  217: [function(t, e, n) {
    var p = t("./Constraint"),
      d = t("../equations/Equation"),
      g = t("../math/vec2"),
      v = t("../utils/Utils");

    function r(t, e, n) {
      n = v.defaults(n, {
        localAnchorA: [0, 0],
        localAnchorB: [0, 0]
      }), p.call(this, t, e, p.DISTANCE, n), this.localAnchorA = g.fromValues(n.localAnchorA[0], n.localAnchorA[1]), this.localAnchorB = g.fromValues(n.localAnchorB[0], n.localAnchorB[1]);
      var r, i = this.localAnchorA,
        o = this.localAnchorB;
      if (this.distance = 0, "number" == typeof n.distance) this.distance = n.distance;
      else {
        var a = g.create(),
          s = g.create(),
          c = g.create();
        g.rotate(a, i, t.angle), g.rotate(s, o, e.angle), g.add(c, e.position, s), g.sub(c, c, a), g.sub(c, c, t.position), this.distance = g.length(c)
      }
      r = void 0 === n.maxForce ? Number.MAX_VALUE : n.maxForce;
      var u = new d(t, e, -r, r);
      this.equations = [u], this.maxForce = r;
      c = g.create();
      var l = g.create(),
        h = g.create(),
        f = this;
      u.computeGq = function() {
        var t = this.bodyA,
          e = this.bodyB,
          n = t.position,
          r = e.position;
        return g.rotate(l, i, t.angle), g.rotate(h, o, e.angle), g.add(c, r, h), g.sub(c, c, l), g.sub(c, c, n), g.length(c) - f.distance
      }, this.setMaxForce(r), this.upperLimitEnabled = !1, this.upperLimit = 1, this.lowerLimitEnabled = !1, this.lowerLimit = 0, this.position = 0
    }((e.exports = r).prototype = new p).constructor = r;
    var l = g.create(),
      h = g.create(),
      f = g.create();
    r.prototype.update = function() {
      var t = this.equations[0],
        e = this.bodyA,
        n = this.bodyB,
        r = (this.distance, e.position),
        i = n.position,
        o = this.equations[0],
        a = t.G;
      g.rotate(h, this.localAnchorA, e.angle), g.rotate(f, this.localAnchorB, n.angle), g.add(l, i, f), g.sub(l, l, h), g.sub(l, l, r), this.position = g.length(l);
      var s = !1;
      if (this.upperLimitEnabled && this.position > this.upperLimit && (o.maxForce = 0, o.minForce = -this.maxForce, this.distance = this.upperLimit, s = !0), this.lowerLimitEnabled && this.position < this.lowerLimit && (o.maxForce = this.maxForce, o.minForce = 0, this.distance = this.lowerLimit, s = !0), !this.lowerLimitEnabled && !this.upperLimitEnabled || s) {
        o.enabled = !0, g.normalize(l, l);
        var c = g.crossLength(h, l),
          u = g.crossLength(f, l);
        a[0] = -l[0], a[1] = -l[1], a[2] = -c, a[3] = l[0], a[4] = l[1], a[5] = u
      } else o.enabled = !1
    }, r.prototype.setMaxForce = function(t) {
      var e = this.equations[0];
      e.minForce = -t, e.maxForce = t
    }, r.prototype.getMaxForce = function() {
      return this.equations[0].maxForce
    }
  }, {
    "../equations/Equation": 224,
    "../math/vec2": 232,
    "../utils/Utils": 259,
    "./Constraint": 216
  }],
  218: [function(t, e, n) {
    var r = t("./Constraint"),
      i = (t("../equations/Equation"), t("../equations/AngleLockEquation"));
    t("../math/vec2");

    function o(t, e, n) {
      n = n || {}, r.call(this, t, e, r.GEAR, n), this.ratio = void 0 !== n.ratio ? n.ratio : 1, this.angle = void 0 !== n.angle ? n.angle : e.angle - this.ratio * t.angle, n.angle = this.angle, n.ratio = this.ratio, this.equations = [new i(t, e, n)], void 0 !== n.maxTorque && this.setMaxTorque(n.maxTorque)
    }(((e.exports = o).prototype = new r).constructor = o).prototype.update = function() {
      var t = this.equations[0];
      t.ratio !== this.ratio && t.setRatio(this.ratio), t.angle = this.angle
    }, o.prototype.setMaxTorque = function(t) {
      this.equations[0].setMaxTorque(t)
    }, o.prototype.getMaxTorque = function(t) {
      return this.equations[0].maxForce
    }
  }, {
    "../equations/AngleLockEquation": 222,
    "../equations/Equation": 224,
    "../math/vec2": 232,
    "./Constraint": 216
  }],
  219: [function(t, e, n) {
    var f = t("./Constraint"),
      p = t("../math/vec2"),
      d = t("../equations/Equation");

    function r(t, e, n) {
      n = n || {}, f.call(this, t, e, f.LOCK, n);
      var r = void 0 === n.maxForce ? Number.MAX_VALUE : n.maxForce,
        i = (n.localAngleB, new d(t, e, -r, r)),
        o = new d(t, e, -r, r),
        a = new d(t, e, -r, r),
        s = p.create(),
        c = p.create(),
        u = this;
      i.computeGq = function() {
        return p.rotate(s, u.localOffsetB, t.angle), p.sub(c, e.position, t.position), p.sub(c, c, s), c[0]
      }, o.computeGq = function() {
        return p.rotate(s, u.localOffsetB, t.angle), p.sub(c, e.position, t.position), p.sub(c, c, s), c[1]
      };
      var l = p.create(),
        h = p.create();
      a.computeGq = function() {
        return p.rotate(l, u.localOffsetB, e.angle - u.localAngleB), p.scale(l, l, -1), p.sub(c, t.position, e.position), p.add(c, c, l), p.rotate(h, l, -Math.PI / 2), p.normalize(h, h), p.dot(c, h)
      }, this.localOffsetB = p.create(), n.localOffsetB ? p.copy(this.localOffsetB, n.localOffsetB) : (p.sub(this.localOffsetB, e.position, t.position), p.rotate(this.localOffsetB, this.localOffsetB, -t.angle)), this.localAngleB = 0, "number" == typeof n.localAngleB ? this.localAngleB = n.localAngleB : this.localAngleB = e.angle - t.angle, this.equations.push(i, o, a), this.setMaxForce(r)
    }(((e.exports = r).prototype = new f).constructor = r).prototype.setMaxForce = function(t) {
      for (var e = this.equations, n = 0; n < this.equations.length; n++) e[n].maxForce = t, e[n].minForce = -t
    }, r.prototype.getMaxForce = function() {
      return this.equations[0].maxForce
    };
    var o = p.create(),
      a = p.create(),
      s = p.create(),
      c = p.fromValues(1, 0),
      u = p.fromValues(0, 1);
    r.prototype.update = function() {
      var t = this.equations[0],
        e = this.equations[1],
        n = this.equations[2],
        r = this.bodyA,
        i = this.bodyB;
      p.rotate(o, this.localOffsetB, r.angle), p.rotate(a, this.localOffsetB, i.angle - this.localAngleB), p.scale(a, a, -1), p.rotate(s, a, Math.PI / 2), p.normalize(s, s), t.G[0] = -1, t.G[1] = 0, t.G[2] = -p.crossLength(o, c), t.G[3] = 1, e.G[0] = 0, e.G[1] = -1, e.G[2] = -p.crossLength(o, u), e.G[4] = 1, n.G[0] = -s[0], n.G[1] = -s[1], n.G[3] = s[0], n.G[4] = s[1], n.G[5] = p.crossLength(a, s)
    }
  }, {
    "../equations/Equation": 224,
    "../math/vec2": 232,
    "./Constraint": 216
  }],
  220: [function(t, e, n) {
    var g = t("./Constraint"),
      v = t("../equations/ContactEquation"),
      m = t("../equations/Equation"),
      y = t("../math/vec2"),
      b = t("../equations/RotationalLockEquation");

    function r(r, i, t) {
      t = t || {}, g.call(this, r, i, g.PRISMATIC, t);
      var o = y.fromValues(0, 0),
        a = y.fromValues(1, 0),
        s = y.fromValues(0, 0);
      t.localAnchorA && y.copy(o, t.localAnchorA), t.localAxisA && y.copy(a, t.localAxisA), t.localAnchorB && y.copy(s, t.localAnchorB), this.localAnchorA = o, this.localAnchorB = s, this.localAxisA = a;
      var e = this.maxForce = void 0 !== t.maxForce ? t.maxForce : Number.MAX_VALUE,
        n = new m(r, i, -e, e),
        c = new y.create,
        u = new y.create,
        l = new y.create,
        h = new y.create;
      if (n.computeGq = function() {
          return y.dot(l, h)
        }, n.updateJacobian = function() {
          var t = this.G,
            e = r.position,
            n = i.position;
          y.rotate(c, o, r.angle), y.rotate(u, s, i.angle), y.add(l, n, u), y.sub(l, l, e), y.sub(l, l, c), y.rotate(h, a, r.angle + Math.PI / 2), t[0] = -h[0], t[1] = -h[1], t[2] = -y.crossLength(c, h) + y.crossLength(h, l), t[3] = h[0], t[4] = h[1], t[5] = y.crossLength(u, h)
        }, this.equations.push(n), !t.disableRotationalLock) {
        var f = new b(r, i, -e, e);
        this.equations.push(f)
      }
      this.position = 0, this.velocity = 0, this.lowerLimitEnabled = void 0 !== t.lowerLimit, this.upperLimitEnabled = void 0 !== t.upperLimit, this.lowerLimit = void 0 !== t.lowerLimit ? t.lowerLimit : 0, this.upperLimit = void 0 !== t.upperLimit ? t.upperLimit : 1, this.upperLimitEquation = new v(r, i), this.lowerLimitEquation = new v(r, i), this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0, this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = e, this.motorEquation = new m(r, i), this.motorEnabled = !1, this.motorSpeed = 0;
      var p = this,
        d = this.motorEquation;
      d.computeGW;
      d.computeGq = function() {
        return 0
      }, d.computeGW = function() {
        var t = this.G,
          e = this.bodyA,
          n = this.bodyB,
          r = e.velocity,
          i = n.velocity,
          o = e.angularVelocity,
          a = n.angularVelocity;
        return this.gmult(t, r, o, i, a) + p.motorSpeed
      }
    }((e.exports = r).prototype = new g).constructor = r;
    var d = y.create(),
      _ = y.create(),
      E = y.create(),
      A = y.create(),
      w = y.create(),
      x = y.create();
    r.prototype.update = function() {
      var t = this.equations,
        e = t[0],
        n = this.upperLimit,
        r = this.lowerLimit,
        i = this.upperLimitEquation,
        o = this.lowerLimitEquation,
        a = this.bodyA,
        s = this.bodyB,
        c = this.localAxisA,
        u = this.localAnchorA,
        l = this.localAnchorB;
      e.updateJacobian(), y.rotate(d, c, a.angle), y.rotate(A, u, a.angle), y.add(_, A, a.position), y.rotate(w, l, s.angle), y.add(E, w, s.position);
      var h, f = this.position = y.dot(E, d) - y.dot(_, d);
      if (this.motorEnabled) {
        var p = this.motorEquation.G;
        p[0] = d[0], p[1] = d[1], p[2] = y.crossLength(d, w), p[3] = -d[0], p[4] = -d[1], p[5] = -y.crossLength(d, A)
      }
      this.upperLimitEnabled && n < f ? (y.scale(i.normalA, d, -1), y.sub(i.contactPointA, _, a.position), y.sub(i.contactPointB, E, s.position), y.scale(x, d, n), y.add(i.contactPointA, i.contactPointA, x), -1 === t.indexOf(i) && t.push(i)) : -1 !== (h = t.indexOf(i)) && t.splice(h, 1);
      this.lowerLimitEnabled && f < r ? (y.scale(o.normalA, d, 1), y.sub(o.contactPointA, _, a.position), y.sub(o.contactPointB, E, s.position), y.scale(x, d, r), y.sub(o.contactPointB, o.contactPointB, x), -1 === t.indexOf(o) && t.push(o)) : -1 !== (h = t.indexOf(o)) && t.splice(h, 1)
    }, r.prototype.enableMotor = function() {
      this.motorEnabled || (this.equations.push(this.motorEquation), this.motorEnabled = !0)
    }, r.prototype.disableMotor = function() {
      if (this.motorEnabled) {
        var t = this.equations.indexOf(this.motorEquation);
        this.equations.splice(t, 1), this.motorEnabled = !1
      }
    }, r.prototype.setLimits = function(t, e) {
      this.lowerLimitEnabled = "number" == typeof t ? (this.lowerLimit = t, !0) : (this.lowerLimit = t, !1), this.upperLimitEnabled = "number" == typeof e ? (this.upperLimit = e, !0) : (this.upperLimit = e, !1)
    }
  }, {
    "../equations/ContactEquation": 223,
    "../equations/Equation": 224,
    "../equations/RotationalLockEquation": 226,
    "../math/vec2": 232,
    "./Constraint": 216
  }],
  221: [function(t, e, n) {
    var c = t("./Constraint"),
      u = t("../equations/Equation"),
      l = t("../equations/RotationalVelocityEquation"),
      h = t("../equations/RotationalLockEquation"),
      p = t("../math/vec2");
    e.exports = r;
    var d = p.create(),
      g = p.create(),
      v = p.fromValues(1, 0),
      m = p.fromValues(0, 1),
      f = p.create();

    function r(t, e, n) {
      n = n || {}, c.call(this, t, e, c.REVOLUTE, n);
      var r = this.maxForce = void 0 !== n.maxForce ? n.maxForce : Number.MAX_VALUE;
      this.pivotA = p.create(), this.pivotB = p.create(), n.worldPivot ? (p.sub(this.pivotA, n.worldPivot, t.position), p.sub(this.pivotB, n.worldPivot, e.position), p.rotate(this.pivotA, this.pivotA, -t.angle), p.rotate(this.pivotB, this.pivotB, -e.angle)) : (p.copy(this.pivotA, n.localPivotA), p.copy(this.pivotB, n.localPivotB));
      var i = this.equations = [new u(t, e, -r, r), new u(t, e, -r, r)],
        o = i[0],
        a = i[1],
        s = this;
      o.computeGq = function() {
        return p.rotate(d, s.pivotA, t.angle), p.rotate(g, s.pivotB, e.angle), p.add(f, e.position, g), p.sub(f, f, t.position), p.sub(f, f, d), p.dot(f, v)
      }, a.computeGq = function() {
        return p.rotate(d, s.pivotA, t.angle), p.rotate(g, s.pivotB, e.angle), p.add(f, e.position, g), p.sub(f, f, t.position), p.sub(f, f, d), p.dot(f, m)
      }, a.minForce = o.minForce = -r, a.maxForce = o.maxForce = r, this.motorEquation = new l(t, e), this.motorEnabled = !1, this.angle = 0, this.lowerLimitEnabled = !1, this.upperLimitEnabled = !1, this.lowerLimit = 0, this.upperLimit = 0, this.upperLimitEquation = new h(t, e), this.lowerLimitEquation = new h(t, e), this.upperLimitEquation.minForce = 0, this.lowerLimitEquation.maxForce = 0
    }((r.prototype = new c).constructor = r).prototype.setLimits = function(t, e) {
      this.lowerLimitEnabled = "number" == typeof t ? (this.lowerLimit = t, !0) : (this.lowerLimit = t, !1), this.upperLimitEnabled = "number" == typeof e ? (this.upperLimit = e, !0) : (this.upperLimit = e, !1)
    }, r.prototype.update = function() {
      var t, e = this.bodyA,
        n = this.bodyB,
        r = this.pivotA,
        i = this.pivotB,
        o = this.equations,
        a = (o[0], o[1], o[0]),
        s = o[1],
        c = this.upperLimit,
        u = this.lowerLimit,
        l = this.upperLimitEquation,
        h = this.lowerLimitEquation,
        f = this.angle = n.angle - e.angle;
      this.upperLimitEnabled && c < f ? (l.angle = c, -1 === o.indexOf(l) && o.push(l)) : -1 !== (t = o.indexOf(l)) && o.splice(t, 1);
      this.lowerLimitEnabled && f < u ? (h.angle = u, -1 === o.indexOf(h) && o.push(h)) : -1 !== (t = o.indexOf(h)) && o.splice(t, 1);
      p.rotate(d, r, e.angle), p.rotate(g, i, n.angle), a.G[0] = -1, a.G[1] = 0, a.G[2] = -p.crossLength(d, v), a.G[3] = 1, a.G[4] = 0, a.G[5] = p.crossLength(g, v), s.G[0] = 0, s.G[1] = -1, s.G[2] = -p.crossLength(d, m), s.G[3] = 0, s.G[4] = 1, s.G[5] = p.crossLength(g, m)
    }, r.prototype.enableMotor = function() {
      this.motorEnabled || (this.equations.push(this.motorEquation), this.motorEnabled = !0)
    }, r.prototype.disableMotor = function() {
      if (this.motorEnabled) {
        var t = this.equations.indexOf(this.motorEquation);
        this.equations.splice(t, 1), this.motorEnabled = !1
      }
    }, r.prototype.motorIsEnabled = function() {
      return !!this.motorEnabled
    }, r.prototype.setMotorSpeed = function(t) {
      if (this.motorEnabled) {
        var e = this.equations.indexOf(this.motorEquation);
        this.equations[e].relativeVelocity = t
      }
    }, r.prototype.getMotorSpeed = function() {
      return !!this.motorEnabled && this.motorEquation.relativeVelocity
    }
  }, {
    "../equations/Equation": 224,
    "../equations/RotationalLockEquation": 226,
    "../equations/RotationalVelocityEquation": 227,
    "../math/vec2": 232,
    "./Constraint": 216
  }],
  222: [function(t, e, n) {
    var r = t("./Equation");
    t("../math/vec2");

    function i(t, e, n) {
      n = n || {}, r.call(this, t, e, -Number.MAX_VALUE, Number.MAX_VALUE), this.angle = n.angle || 0, this.ratio = "number" == typeof n.ratio ? n.ratio : 1, this.setRatio(this.ratio)
    }(((e.exports = i).prototype = new r).constructor = i).prototype.computeGq = function() {
      return this.ratio * this.bodyA.angle - this.bodyB.angle + this.angle
    }, i.prototype.setRatio = function(t) {
      var e = this.G;
      e[2] = t, e[5] = -1, this.ratio = t
    }, i.prototype.setMaxTorque = function(t) {
      this.maxForce = t, this.minForce = -t
    }
  }, {
    "../math/vec2": 232,
    "./Equation": 224
  }],
  223: [function(t, e, n) {
    var r = t("./Equation"),
      v = t("../math/vec2");

    function i(t, e) {
      r.call(this, t, e, 0, Number.MAX_VALUE), this.contactPointA = v.create(), this.penetrationVec = v.create(), this.contactPointB = v.create(), this.normalA = v.create(), this.restitution = 0, this.firstImpact = !1, this.shapeA = null, this.shapeB = null
    }(((e.exports = i).prototype = new r).constructor = i).prototype.computeB = function(t, e, n) {
      var r, i, o = this.bodyA,
        a = this.bodyB,
        s = this.contactPointA,
        c = this.contactPointB,
        u = o.position,
        l = a.position,
        h = this.penetrationVec,
        f = this.normalA,
        p = this.G,
        d = v.crossLength(s, f),
        g = v.crossLength(c, f);
      return p[0] = -f[0], p[1] = -f[1], p[2] = -d, p[3] = f[0], p[4] = f[1], p[5] = g, v.add(h, l, c), v.sub(h, h, u), v.sub(h, h, s), r = this.firstImpact && 0 !== this.restitution ? (i = 0, 1 / e * (1 + this.restitution) * this.computeGW()) : (i = v.dot(f, h) + this.offset, this.computeGW()), -i * t - r * e - n * this.computeGiMf()
    };
    var o = v.create(),
      a = v.create(),
      s = v.create();
    i.prototype.getVelocityAlongNormal = function() {
      return this.bodyA.getVelocityAtPoint(o, this.contactPointA), this.bodyB.getVelocityAtPoint(a, this.contactPointB), v.subtract(s, o, a), v.dot(this.normalA, s)
    }
  }, {
    "../math/vec2": 232,
    "./Equation": 224
  }],
  224: [function(t, e, n) {
    e.exports = a;
    var h = t("../math/vec2"),
      o = t("../utils/Utils");
    t("../objects/Body");

    function a(t, e, n, r) {
      this.minForce = void 0 === n ? -Number.MAX_VALUE : n, this.maxForce = void 0 === r ? Number.MAX_VALUE : r, this.bodyA = t, this.bodyB = e, this.stiffness = a.DEFAULT_STIFFNESS, this.relaxation = a.DEFAULT_RELAXATION, this.G = new o.ARRAY_TYPE(6);
      for (var i = 0; i < 6; i++) this.G[i] = 0;
      this.offset = 0, this.a = 0, this.b = 0, this.epsilon = 0, this.timeStep = 1 / 60, this.needsUpdate = !0, this.multiplier = 0, this.relativeVelocity = 0, this.enabled = !0
    }(a.prototype.constructor = a).DEFAULT_STIFFNESS = 1e6, a.DEFAULT_RELAXATION = 4, a.prototype.update = function() {
      var t = this.stiffness,
        e = this.relaxation,
        n = this.timeStep;
      this.a = 4 / (n * (1 + 4 * e)), this.b = 4 * e / (1 + 4 * e), this.epsilon = 4 / (n * n * t * (1 + 4 * e)), this.needsUpdate = !1
    }, a.prototype.gmult = function(t, e, n, r, i) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * n + t[3] * r[0] + t[4] * r[1] + t[5] * i
    }, a.prototype.computeB = function(t, e, n) {
      var r = this.computeGW();
      return -this.computeGq() * t - r * e - this.computeGiMf() * n
    };
    var s = h.create(),
      c = h.create();
    a.prototype.computeGq = function() {
      var t = this.G,
        e = this.bodyA,
        n = this.bodyB,
        r = (e.position, n.position, e.angle),
        i = n.angle;
      return this.gmult(t, s, r, c, i) + this.offset
    }, a.prototype.computeGW = function() {
      var t = this.G,
        e = this.bodyA,
        n = this.bodyB,
        r = e.velocity,
        i = n.velocity,
        o = e.angularVelocity,
        a = n.angularVelocity;
      return this.gmult(t, r, o, i, a) + this.relativeVelocity
    }, a.prototype.computeGWlambda = function() {
      var t = this.G,
        e = this.bodyA,
        n = this.bodyB,
        r = e.vlambda,
        i = n.vlambda,
        o = e.wlambda,
        a = n.wlambda;
      return this.gmult(t, r, o, i, a)
    };
    var f = h.create(),
      p = h.create();
    a.prototype.computeGiMf = function() {
      var t = this.bodyA,
        e = this.bodyB,
        n = t.force,
        r = t.angularForce,
        i = e.force,
        o = e.angularForce,
        a = t.invMassSolve,
        s = e.invMassSolve,
        c = t.invInertiaSolve,
        u = e.invInertiaSolve,
        l = this.G;
      return h.scale(f, n, a), h.multiply(f, t.massMultiplier, f), h.scale(p, i, s), h.multiply(p, e.massMultiplier, p), this.gmult(l, f, r * c, p, o * u)
    }, a.prototype.computeGiMGt = function() {
      var t = this.bodyA,
        e = this.bodyB,
        n = t.invMassSolve,
        r = e.invMassSolve,
        i = t.invInertiaSolve,
        o = e.invInertiaSolve,
        a = this.G;
      return a[0] * a[0] * n * t.massMultiplier[0] + a[1] * a[1] * n * t.massMultiplier[1] + a[2] * a[2] * i + a[3] * a[3] * r * e.massMultiplier[0] + a[4] * a[4] * r * e.massMultiplier[1] + a[5] * a[5] * o
    };
    var d = h.create(),
      g = h.create(),
      v = h.create();
    h.create(), h.create(), h.create();
    a.prototype.addToWlambda = function(t) {
      var e = this.bodyA,
        n = this.bodyB,
        r = d,
        i = g,
        o = v,
        a = e.invMassSolve,
        s = n.invMassSolve,
        c = e.invInertiaSolve,
        u = n.invInertiaSolve,
        l = this.G;
      i[0] = l[0], i[1] = l[1], o[0] = l[3], o[1] = l[4], h.scale(r, i, a * t), h.multiply(r, r, e.massMultiplier), h.add(e.vlambda, e.vlambda, r), e.wlambda += c * l[2] * t, h.scale(r, o, s * t), h.multiply(r, r, n.massMultiplier), h.add(n.vlambda, n.vlambda, r), n.wlambda += u * l[5] * t
    }, a.prototype.computeInvC = function(t) {
      return 1 / (this.computeGiMGt() + t)
    }
  }, {
    "../math/vec2": 232,
    "../objects/Body": 233,
    "../utils/Utils": 259
  }],
  225: [function(t, e, n) {
    var s = t("../math/vec2"),
      r = t("./Equation");
    t("../utils/Utils");

    function i(t, e, n) {
      r.call(this, t, e, -n, n), this.contactPointA = s.create(), this.contactPointB = s.create(), this.t = s.create(), this.contactEquations = [], this.shapeA = null, this.shapeB = null, this.frictionCoefficient = .3
    }(((e.exports = i).prototype = new r).constructor = i).prototype.setSlipForce = function(t) {
      this.maxForce = t, this.minForce = -t
    }, i.prototype.getSlipForce = function() {
      return this.maxForce
    }, i.prototype.computeB = function(t, e, n) {
      this.bodyA, this.bodyB;
      var r = this.contactPointA,
        i = this.contactPointB,
        o = this.t,
        a = this.G;
      return a[0] = -o[0], a[1] = -o[1], a[2] = -s.crossLength(r, o), a[3] = o[0], a[4] = o[1], a[5] = s.crossLength(i, o), -this.computeGW() * e - n * this.computeGiMf()
    }
  }, {
    "../math/vec2": 232,
    "../utils/Utils": 259,
    "./Equation": 224
  }],
  226: [function(t, e, n) {
    var i = t("./Equation"),
      r = t("../math/vec2");

    function o(t, e, n) {
      n = n || {}, i.call(this, t, e, -Number.MAX_VALUE, Number.MAX_VALUE), this.angle = n.angle || 0;
      var r = this.G;
      r[2] = 1, r[5] = -1
    }((e.exports = o).prototype = new i).constructor = o;
    var a = r.create(),
      s = r.create(),
      c = r.fromValues(1, 0),
      u = r.fromValues(0, 1);
    o.prototype.computeGq = function() {
      return r.rotate(a, c, this.bodyA.angle + this.angle), r.rotate(s, u, this.bodyB.angle), r.dot(a, s)
    }
  }, {
    "../math/vec2": 232,
    "./Equation": 224
  }],
  227: [function(t, e, n) {
    var r = t("./Equation");
    t("../math/vec2");

    function i(t, e) {
      r.call(this, t, e, -Number.MAX_VALUE, Number.MAX_VALUE), this.relativeVelocity = 1, this.ratio = 1
    }(((e.exports = i).prototype = new r).constructor = i).prototype.computeB = function(t, e, n) {
      var r = this.G;
      r[2] = -1, r[5] = this.ratio;
      var i = this.computeGiMf();
      return -this.computeGW() * e - n * i
    }
  }, {
    "../math/vec2": 232,
    "./Equation": 224
  }],
  228: [function(t, e, n) {
    var r = function() {};
    (e.exports = r).prototype = {
      constructor: r,
      on: function(t, e, n) {
        e.context = n || this, void 0 === this._listeners && (this._listeners = {});
        var r = this._listeners;
        return void 0 === r[t] && (r[t] = []), -1 === r[t].indexOf(e) && r[t].push(e), this
      },
      has: function(t, e) {
        if (void 0 === this._listeners) return !1;
        var n = this._listeners;
        if (e) {
          if (void 0 !== n[t] && -1 !== n[t].indexOf(e)) return !0
        } else if (void 0 !== n[t]) return !0;
        return !1
      },
      off: function(t, e) {
        if (void 0 === this._listeners) return this;
        var n = this._listeners,
          r = n[t].indexOf(e);
        return -1 !== r && n[t].splice(r, 1), this
      },
      emit: function(t) {
        if (void 0 === this._listeners) return this;
        var e = this._listeners[t.type];
        if (void 0 !== e) {
          t.target = this;
          for (var n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            i.call(i.context, t)
          }
        }
        return this
      }
    }
  }, {}],
  229: [function(t, e, n) {
    var r = t("./Material"),
      i = t("../equations/Equation");

    function o(t, e, n) {
      if (n = n || {}, !(t instanceof r && e instanceof r)) throw new Error("First two arguments must be Material instances.");
      this.id = o.idCounter++, this.materialA = t, this.materialB = e, this.friction = void 0 !== n.friction ? Number(n.friction) : .3, this.restitution = void 0 !== n.restitution ? Number(n.restitution) : 0, this.stiffness = void 0 !== n.stiffness ? Number(n.stiffness) : i.DEFAULT_STIFFNESS, this.relaxation = void 0 !== n.relaxation ? Number(n.relaxation) : i.DEFAULT_RELAXATION, this.frictionStiffness = void 0 !== n.frictionStiffness ? Number(n.frictionStiffness) : i.DEFAULT_STIFFNESS, this.frictionRelaxation = void 0 !== n.frictionRelaxation ? Number(n.frictionRelaxation) : i.DEFAULT_RELAXATION, this.surfaceVelocity = void 0 !== n.surfaceVelocity ? Number(n.surfaceVelocity) : 0, this.contactSkinSize = .005
    }(e.exports = o).idCounter = 0
  }, {
    "../equations/Equation": 224,
    "./Material": 230
  }],
  230: [function(t, e, n) {
    function r(t) {
      this.id = t || r.idCounter++
    }(e.exports = r).idCounter = 0
  }, {}],
  231: [function(t, e, n) {
    var y = {
      GetArea: function(t) {
        if (t.length < 6) return 0;
        for (var e = t.length - 2, n = 0, r = 0; r < e; r += 2) n += (t[r + 2] - t[r]) * (t[r + 1] + t[r + 3]);
        return .5 * -(n += (t[0] - t[e]) * (t[e + 1] + t[1]))
      },
      Triangulate: function(t) {
        var e = t.length >> 1;
        if (e < 3) return [];
        for (var n = [], r = [], i = 0; i < e; i++) r.push(i);
        i = 0;
        for (var o = e; 3 < o;) {
          var a = r[(i + 0) % o],
            s = r[(i + 1) % o],
            c = r[(i + 2) % o],
            u = t[2 * a],
            l = t[2 * a + 1],
            h = t[2 * s],
            f = t[2 * s + 1],
            p = t[2 * c],
            d = t[2 * c + 1],
            g = !1;
          if (y._convex(u, l, h, f, p, d)) {
            g = !0;
            for (var v = 0; v < o; v++) {
              var m = r[v];
              if (m != a && m != s && m != c && y._PointInTriangle(t[2 * m], t[2 * m + 1], u, l, h, f, p, d)) {
                g = !1;
                break
              }
            }
          }
          if (g) n.push(a, s, c), r.splice((i + 1) % o, 1), o--, i = 0;
          else if (i++ > 3 * o) break
        }
        return n.push(r[0], r[1], r[2]), n
      },
      _PointInTriangle: function(t, e, n, r, i, o, a, s) {
        var c = a - n,
          u = s - r,
          l = i - n,
          h = o - r,
          f = t - n,
          p = e - r,
          d = c * c + u * u,
          g = c * l + u * h,
          v = c * f + u * p,
          m = l * l + h * h,
          y = l * f + h * p,
          b = 1 / (d * m - g * g),
          _ = (m * v - g * y) * b,
          E = (d * y - g * v) * b;
        return 0 <= _ && 0 <= E && _ + E < 1
      },
      _convex: function(t, e, n, r, i, o) {
        return 0 <= (e - r) * (i - n) + (n - t) * (o - r)
      }
    };
    e.exports = y
  }, {}],
  232: [function(t, e, n) {
    var a = e.exports = {},
      r = t("../utils/Utils");
    a.crossLength = function(t, e) {
      return t[0] * e[1] - t[1] * e[0]
    }, a.crossVZ = function(t, e, n) {
      return a.rotate(t, e, -Math.PI / 2), a.scale(t, t, n), t
    }, a.crossZV = function(t, e, n) {
      return a.rotate(t, n, Math.PI / 2), a.scale(t, t, e), t
    }, a.rotate = function(t, e, n) {
      if (0 !== n) {
        var r = Math.cos(n),
          i = Math.sin(n),
          o = e[0],
          a = e[1];
        t[0] = r * o - i * a, t[1] = i * o + r * a
      } else t[0] = e[0], t[1] = e[1]
    }, a.rotate90cw = function(t, e) {
      var n = e[0],
        r = e[1];
      t[0] = r, t[1] = -n
    }, a.toLocalFrame = function(t, e, n, r) {
      a.copy(t, e), a.sub(t, t, n), a.rotate(t, t, -r)
    }, a.toGlobalFrame = function(t, e, n, r) {
      a.copy(t, e), a.rotate(t, t, r), a.add(t, t, n)
    }, a.vectorToLocalFrame = function(t, e, n) {
      a.rotate(t, e, -n)
    }, a.vectorToGlobalFrame = function(t, e, n) {
      a.rotate(t, e, n)
    }, a.centroid = function(t, e, n, r) {
      return a.add(t, e, n), a.add(t, t, r), a.scale(t, t, 1 / 3), t
    }, a.create = function() {
      var t = new r.ARRAY_TYPE(2);
      return t[0] = 0, t[1] = 0, t
    }, a.clone = function(t) {
      var e = new r.ARRAY_TYPE(2);
      return e[0] = t[0], e[1] = t[1], e
    }, a.fromValues = function(t, e) {
      var n = new r.ARRAY_TYPE(2);
      return n[0] = t, n[1] = e, n
    }, a.copy = function(t, e) {
      return t[0] = e[0], t[1] = e[1], t
    }, a.set = function(t, e, n) {
      return t[0] = e, t[1] = n, t
    }, a.add = function(t, e, n) {
      return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
    }, a.subtract = function(t, e, n) {
      return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
    }, a.sub = a.subtract, a.multiply = function(t, e, n) {
      return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
    }, a.mul = a.multiply, a.divide = function(t, e, n) {
      return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
    }, a.div = a.divide, a.scale = function(t, e, n) {
      return t[0] = e[0] * n, t[1] = e[1] * n, t
    }, a.distance = function(t, e) {
      var n = e[0] - t[0],
        r = e[1] - t[1];
      return Math.sqrt(n * n + r * r)
    }, a.dist = a.distance, a.squaredDistance = function(t, e) {
      var n = e[0] - t[0],
        r = e[1] - t[1];
      return n * n + r * r
    }, a.sqrDist = a.squaredDistance, a.length = function(t) {
      var e = t[0],
        n = t[1];
      return Math.sqrt(e * e + n * n)
    }, a.len = a.length, a.squaredLength = function(t) {
      var e = t[0],
        n = t[1];
      return e * e + n * n
    }, a.sqrLen = a.squaredLength, a.negate = function(t, e) {
      return t[0] = -e[0], t[1] = -e[1], t
    }, a.normalize = function(t, e) {
      var n = e[0],
        r = e[1],
        i = n * n + r * r;
      return 0 < i && (i = 1 / Math.sqrt(i), t[0] = e[0] * i, t[1] = e[1] * i), t
    }, a.dot = function(t, e) {
      return t[0] * e[0] + t[1] * e[1]
    }, a.str = function(t) {
      return "vec2(" + t[0] + ", " + t[1] + ")"
    }, a.lerp = function(t, e, n, r) {
      var i = e[0],
        o = e[1];
      return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t
    }, a.reflect = function(t, e, n) {
      var r = e[0] * n[0] + e[1] * n[1];
      t[0] = e[0] - 2 * n[0] * r, t[1] = e[1] - 2 * n[1] * r
    }, a.getLineSegmentsIntersection = function(t, e, n, r, i) {
      var o = a.getLineSegmentsIntersectionFraction(e, n, r, i);
      return !(o < 0) && (t[0] = e[0] + o * (n[0] - e[0]), t[1] = e[1] + o * (n[1] - e[1]), !0)
    }, a.getLineSegmentsIntersectionFraction = function(t, e, n, r) {
      var i, o, a = e[0] - t[0],
        s = e[1] - t[1],
        c = r[0] - n[0],
        u = r[1] - n[1];
      return i = (-s * (t[0] - n[0]) + a * (t[1] - n[1])) / (-c * s + a * u), o = (c * (t[1] - n[1]) - u * (t[0] - n[0])) / (-c * s + a * u), 0 <= i && i <= 1 && 0 <= o && o <= 1 ? o : -1
    }
  }, {
    "../utils/Utils": 259
  }],
  233: [function(t, e, n) {
    var h = t("../math/vec2"),
      u = t("poly-decomp"),
      l = t("../shapes/Convex"),
      r = t("../collision/RaycastResult"),
      i = t("../collision/Ray"),
      o = t("../collision/AABB"),
      a = t("../events/EventEmitter");

    function s(t) {
      t = t || {}, a.call(this), this.id = t.id || ++s._idCounter, this.world = null, this.shapes = [], this.mass = t.mass || 0, this.invMass = 0, this.inertia = 0, this.invInertia = 0, this.invMassSolve = 0, this.invInertiaSolve = 0, this.fixedRotation = !!t.fixedRotation, this.fixedX = !!t.fixedX, this.fixedY = !!t.fixedY, this.massMultiplier = h.create(), this.position = h.fromValues(0, 0), t.position && h.copy(this.position, t.position), this.interpolatedPosition = h.fromValues(0, 0), this.interpolatedAngle = 0, this.previousPosition = h.fromValues(0, 0), this.previousAngle = 0, this.velocity = h.fromValues(0, 0), t.velocity && h.copy(this.velocity, t.velocity), this.vlambda = h.fromValues(0, 0), this.wlambda = 0, this.angle = t.angle || 0, this.angularVelocity = t.angularVelocity || 0, this.force = h.create(), t.force && h.copy(this.force, t.force), this.angularForce = t.angularForce || 0, this.damping = "number" == typeof t.damping ? t.damping : .1, this.angularDamping = "number" == typeof t.angularDamping ? t.angularDamping : .1, this.type = s.STATIC, void 0 !== t.type ? this.type = t.type : t.mass ? this.type = s.DYNAMIC : this.type = s.STATIC, this.boundingRadius = 0, this.aabb = new o, this.aabbNeedsUpdate = !0, this.allowSleep = void 0 === t.allowSleep || t.allowSleep, this.wantsToSleep = !1, this.sleepState = s.AWAKE, this.sleepSpeedLimit = void 0 !== t.sleepSpeedLimit ? t.sleepSpeedLimit : .2, this.sleepTimeLimit = void 0 !== t.sleepTimeLimit ? t.sleepTimeLimit : 1, this.gravityScale = void 0 !== t.gravityScale ? t.gravityScale : 1, this.collisionResponse = void 0 === t.collisionResponse || t.collisionResponse, this.idleTime = 0, this.timeLastSleepy = 0, this.ccdSpeedThreshold = void 0 !== t.ccdSpeedThreshold ? t.ccdSpeedThreshold : -1, this.ccdIterations = void 0 !== t.ccdIterations ? t.ccdIterations : 10, this.concavePath = null, this._wakeUpAfterNarrowphase = !1, this.updateMassProperties()
    }(((e.exports = s).prototype = new a).constructor = s)._idCounter = 0, s.prototype.updateSolveMassProperties = function() {
      this.sleepState === s.SLEEPING || this.type === s.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve = 0) : (this.invMassSolve = this.invMass, this.invInertiaSolve = this.invInertia)
    }, s.prototype.setDensity = function(t) {
      var e = this.getArea();
      this.mass = e * t, this.updateMassProperties()
    }, s.prototype.getArea = function() {
      for (var t = 0, e = 0; e < this.shapes.length; e++) t += this.shapes[e].area;
      return t
    }, s.prototype.getAABB = function() {
      return this.aabbNeedsUpdate && this.updateAABB(), this.aabb
    };
    var c = new o,
      f = h.create();
    s.prototype.updateAABB = function() {
      for (var t = this.shapes, e = t.length, n = f, r = this.angle, i = 0; i !== e; i++) {
        var o = t[i],
          a = o.angle + r;
        h.rotate(n, o.position, r), h.add(n, n, this.position), o.computeAABB(c, n, a), 0 === i ? this.aabb.copy(c) : this.aabb.extend(c)
      }
      this.aabbNeedsUpdate = !1
    }, s.prototype.updateBoundingRadius = function() {
      for (var t = this.shapes, e = t.length, n = 0, r = 0; r !== e; r++) {
        var i = t[r],
          o = h.length(i.position),
          a = i.boundingRadius;
        n < o + a && (n = o + a)
      }
      this.boundingRadius = n
    }, s.prototype.addShape = function(t, e, n) {
      if (t.body) throw new Error("A shape can only be added to one body.");
      t.body = this, e ? h.copy(t.position, e) : h.set(t.position, 0, 0), t.angle = n || 0, this.shapes.push(t), this.updateMassProperties(), this.updateBoundingRadius(), this.aabbNeedsUpdate = !0
    }, s.prototype.removeShape = function(t) {
      var e = this.shapes.indexOf(t);
      return -1 !== e && (this.shapes.splice(e, 1), this.aabbNeedsUpdate = !0, !(t.body = null))
    }, s.prototype.updateMassProperties = function() {
      if (this.type === s.STATIC || this.type === s.KINEMATIC) this.mass = Number.MAX_VALUE, this.invMass = 0, this.inertia = Number.MAX_VALUE, this.invInertia = 0;
      else {
        var t = this.shapes,
          e = t.length,
          n = this.mass / e,
          r = 0;
        if (this.fixedRotation) this.inertia = Number.MAX_VALUE, this.invInertia = 0;
        else {
          for (var i = 0; i < e; i++) {
            var o = t[i],
              a = h.squaredLength(o.position);
            r += o.computeMomentOfInertia(n) + n * a
          }
          this.inertia = r, this.invInertia = 0 < r ? 1 / r : 0
        }
        this.invMass = 1 / this.mass, h.set(this.massMultiplier, this.fixedX ? 0 : 1, this.fixedY ? 0 : 1)
      }
    };
    h.create();
    s.prototype.applyForce = function(t, e) {
      if (h.add(this.force, this.force, t), e) {
        var n = h.crossLength(e, t);
        this.angularForce += n
      }
    };
    var p = h.create(),
      d = h.create(),
      g = h.create();
    s.prototype.applyForceLocal = function(t, e) {
      e = e || g;
      var n = p,
        r = d;
      this.vectorToWorldFrame(n, t), this.vectorToWorldFrame(r, e), this.applyForce(n, r)
    };
    var v = h.create();
    s.prototype.applyImpulse = function(t, e) {
      if (this.type === s.DYNAMIC) {
        var n = v;
        if (h.scale(n, t, this.invMass), h.multiply(n, this.massMultiplier, n), h.add(this.velocity, n, this.velocity), e) {
          var r = h.crossLength(e, t);
          r *= this.invInertia, this.angularVelocity += r
        }
      }
    };
    var m = h.create(),
      y = h.create(),
      b = h.create();
    s.prototype.applyImpulseLocal = function(t, e) {
      e = e || b;
      var n = m,
        r = y;
      this.vectorToWorldFrame(n, t), this.vectorToWorldFrame(r, e), this.applyImpulse(n, r)
    }, s.prototype.toLocalFrame = function(t, e) {
      h.toLocalFrame(t, e, this.position, this.angle)
    }, s.prototype.toWorldFrame = function(t, e) {
      h.toGlobalFrame(t, e, this.position, this.angle)
    }, s.prototype.vectorToLocalFrame = function(t, e) {
      h.vectorToLocalFrame(t, e, this.angle)
    }, s.prototype.vectorToWorldFrame = function(t, e) {
      h.vectorToGlobalFrame(t, e, this.angle)
    }, s.prototype.fromPolygon = function(t, e) {
      e = e || {};
      for (var n = this.shapes.length; 0 <= n; --n) this.removeShape(this.shapes[n]);
      var r, i = new u.Polygon;
      if (i.vertices = t, i.makeCCW(), "number" == typeof e.removeCollinearPoints && i.removeCollinearPoints(e.removeCollinearPoints), void 0 === e.skipSimpleCheck && !i.isSimple()) return !1;
      this.concavePath = i.vertices.slice(0);
      for (n = 0; n < this.concavePath.length; n++) {
        var o = [0, 0];
        h.copy(o, this.concavePath[n]), this.concavePath[n] = o
      }
      r = e.optimalDecomp ? i.decomp() : i.quickDecomp();
      var a = h.create();
      for (n = 0; n !== r.length; n++) {
        for (var s = new l({
            vertices: r[n].vertices
          }), c = 0; c !== s.vertices.length; c++) {
          o = s.vertices[c];
          h.sub(o, o, s.centerOfMass)
        }
        h.scale(a, s.centerOfMass, 1), s.updateTriangles(), s.updateCenterOfMass(), s.updateBoundingRadius(), this.addShape(s, a)
      }
      return this.adjustCenterOfMass(), this.aabbNeedsUpdate = !0
    };
    h.fromValues(0, 0);
    var _ = h.fromValues(0, 0),
      E = h.fromValues(0, 0),
      A = h.fromValues(0, 0);
    s.prototype.adjustCenterOfMass = function() {
      var t = _,
        e = E,
        n = A,
        r = 0;
      h.set(e, 0, 0);
      for (var i = 0; i !== this.shapes.length; i++) {
        var o = this.shapes[i];
        h.scale(t, o.position, o.area), h.add(e, e, t), r += o.area
      }
      h.scale(n, e, 1 / r);
      for (i = 0; i !== this.shapes.length; i++) {
        o = this.shapes[i];
        h.sub(o.position, o.position, n)
      }
      h.add(this.position, this.position, n);
      for (i = 0; this.concavePath && i < this.concavePath.length; i++) h.sub(this.concavePath[i], this.concavePath[i], n);
      this.updateMassProperties(), this.updateBoundingRadius()
    }, s.prototype.setZeroForce = function() {
      h.set(this.force, 0, 0), this.angularForce = 0
    }, s.prototype.resetConstraintVelocity = function() {
      var t = this.vlambda;
      h.set(t, 0, 0), this.wlambda = 0
    }, s.prototype.addConstraintVelocity = function() {
      var t = this.velocity;
      h.add(t, t, this.vlambda), this.angularVelocity += this.wlambda
    }, s.prototype.applyDamping = function(t) {
      if (this.type === s.DYNAMIC) {
        var e = this.velocity;
        h.scale(e, e, Math.pow(1 - this.damping, t)), this.angularVelocity *= Math.pow(1 - this.angularDamping, t)
      }
    }, s.prototype.wakeUp = function() {
      var t = this.sleepState;
      this.sleepState = s.AWAKE, this.idleTime = 0, t !== s.AWAKE && this.emit(s.wakeUpEvent)
    }, s.prototype.sleep = function() {
      this.sleepState = s.SLEEPING, this.angularVelocity = 0, this.angularForce = 0, h.set(this.velocity, 0, 0), h.set(this.force, 0, 0), this.emit(s.sleepEvent)
    }, s.prototype.sleepTick = function(t, e, n) {
      if (this.allowSleep && this.type !== s.SLEEPING) {
        this.wantsToSleep = !1;
        this.sleepState;
        var r = h.squaredLength(this.velocity) + Math.pow(this.angularVelocity, 2),
          i = Math.pow(this.sleepSpeedLimit, 2);
        this.sleepState = i <= r ? (this.idleTime = 0, s.AWAKE) : (this.idleTime += n, s.SLEEPY), this.idleTime > this.sleepTimeLimit && (e ? this.wantsToSleep = !0 : this.sleep())
      }
    }, s.prototype.overlaps = function(t) {
      return this.world.overlapKeeper.bodiesAreOverlapping(this, t)
    };
    var w = h.create(),
      x = h.create();
    s.prototype.integrate = function(t) {
      var e = this.invMass,
        n = this.force,
        r = this.position,
        i = this.velocity;
      h.copy(this.previousPosition, this.position), this.previousAngle = this.angle, this.fixedRotation || (this.angularVelocity += this.angularForce * this.invInertia * t), h.scale(w, n, t * e), h.multiply(w, this.massMultiplier, w), h.add(i, w, i), this.integrateToTimeOfImpact(t) || (h.scale(x, i, t), h.add(r, r, x), this.fixedRotation || (this.angle += this.angularVelocity * t)), this.aabbNeedsUpdate = !0
    };
    var T = new r,
      S = new i({
        mode: i.ALL
      }),
      R = h.create(),
      I = h.create(),
      L = h.create(),
      M = h.create();
    s.prototype.integrateToTimeOfImpact = function(t) {
      if (this.ccdSpeedThreshold < 0 || h.squaredLength(this.velocity) < Math.pow(this.ccdSpeedThreshold, 2)) return !1;
      h.normalize(R, this.velocity), h.scale(I, this.velocity, t), h.add(I, I, this.position), h.sub(L, I, this.position);
      var e, n = this.angularVelocity * t,
        r = h.length(L),
        i = 1,
        o = this;
      if (T.reset(), S.callback = function(t) {
          t.body !== o && (e = t.body, t.getHitPoint(I, S), h.sub(L, I, o.position), i = h.length(L) / r, t.stop())
        }, h.copy(S.from, this.position), h.copy(S.to, I), S.update(), this.world.raycast(T, S), !e) return !1;
      var a = this.angle;
      h.copy(M, this.position);
      for (var s = 0, c = 0, u = 0, l = i; c <= l && s < this.ccdIterations;) {
        s++, u = (l - c) / 2, h.scale(x, L, i), h.add(this.position, M, x), this.angle = a + n * i, this.updateAABB(), this.aabb.overlaps(e.aabb) && this.world.narrowphase.bodiesOverlap(this, e) ? c = u : l = u
      }
      return i = u, h.copy(this.position, M), this.angle = a, h.scale(x, L, i), h.add(this.position, this.position, x), this.fixedRotation || (this.angle += n * i), !0
    }, s.prototype.getVelocityAtPoint = function(t, e) {
      return h.crossVZ(t, e, this.angularVelocity), h.subtract(t, this.velocity, t), t
    }, s.sleepyEvent = {
      type: "sleepy"
    }, s.sleepEvent = {
      type: "sleep"
    }, s.wakeUpEvent = {
      type: "wakeup"
    }, s.DYNAMIC = 1, s.STATIC = 2, s.KINEMATIC = 4, s.AWAKE = 0, s.SLEEPY = 1, s.SLEEPING = 2
  }, {
    "../collision/AABB": 209,
    "../collision/Ray": 213,
    "../collision/RaycastResult": 214,
    "../events/EventEmitter": 228,
    "../math/vec2": 232,
    "../shapes/Convex": 242,
    "poly-decomp": 269
  }],
  234: [function(t, e, n) {
    var m = t("../math/vec2"),
      a = t("./Spring");
    t("../utils/Utils");

    function r(t, e, n) {
      n = n || {}, a.call(this, t, e, n), this.localAnchorA = m.fromValues(0, 0), this.localAnchorB = m.fromValues(0, 0), n.localAnchorA && m.copy(this.localAnchorA, n.localAnchorA), n.localAnchorB && m.copy(this.localAnchorB, n.localAnchorB), n.worldAnchorA && this.setWorldAnchorA(n.worldAnchorA), n.worldAnchorB && this.setWorldAnchorB(n.worldAnchorB);
      var r = m.create(),
        i = m.create();
      this.getWorldAnchorA(r), this.getWorldAnchorB(i);
      var o = m.distance(r, i);
      this.restLength = "number" == typeof n.restLength ? n.restLength : o
    }(((e.exports = r).prototype = new a).constructor = r).prototype.setWorldAnchorA = function(t) {
      this.bodyA.toLocalFrame(this.localAnchorA, t)
    }, r.prototype.setWorldAnchorB = function(t) {
      this.bodyB.toLocalFrame(this.localAnchorB, t)
    }, r.prototype.getWorldAnchorA = function(t) {
      this.bodyA.toWorldFrame(t, this.localAnchorA)
    }, r.prototype.getWorldAnchorB = function(t) {
      this.bodyB.toWorldFrame(t, this.localAnchorB)
    };
    var y = m.create(),
      b = m.create(),
      _ = m.create(),
      E = m.create(),
      A = m.create(),
      w = m.create(),
      x = m.create(),
      T = m.create(),
      S = m.create();
    r.prototype.applyForce = function() {
      var t = this.stiffness,
        e = this.damping,
        n = this.restLength,
        r = this.bodyA,
        i = this.bodyB,
        o = y,
        a = b,
        s = _,
        c = E,
        u = S,
        l = A,
        h = w,
        f = x,
        p = T;
      this.getWorldAnchorA(l), this.getWorldAnchorB(h), m.sub(f, l, r.position), m.sub(p, h, i.position), m.sub(o, h, l);
      var d = m.len(o);
      m.normalize(a, o), m.sub(s, i.velocity, r.velocity), m.crossZV(u, i.angularVelocity, p), m.add(s, s, u), m.crossZV(u, r.angularVelocity, f), m.sub(s, s, u), m.scale(c, a, -t * (d - n) - e * m.dot(s, a)), m.sub(r.force, r.force, c), m.add(i.force, i.force, c);
      var g = m.crossLength(f, c),
        v = m.crossLength(p, c);
      r.angularForce -= g, i.angularForce += v
    }
  }, {
    "../math/vec2": 232,
    "../utils/Utils": 259,
    "./Spring": 236
  }],
  235: [function(t, e, n) {
    t("../math/vec2");
    var r = t("./Spring");

    function i(t, e, n) {
      n = n || {}, r.call(this, t, e, n), this.restAngle = "number" == typeof n.restAngle ? n.restAngle : e.angle - t.angle
    }(((e.exports = i).prototype = new r).constructor = i).prototype.applyForce = function() {
      var t = this.stiffness,
        e = this.damping,
        n = this.restAngle,
        r = this.bodyA,
        i = this.bodyB,
        o = -t * (i.angle - r.angle - n) - e * (i.angularVelocity - r.angularVelocity) * 0;
      r.angularForce -= o, i.angularForce += o
    }
  }, {
    "../math/vec2": 232,
    "./Spring": 236
  }],
  236: [function(t, e, n) {
    t("../math/vec2");
    var r = t("../utils/Utils");

    function i(t, e, n) {
      n = r.defaults(n, {
        stiffness: 100,
        damping: 1
      }), this.stiffness = n.stiffness, this.damping = n.damping, this.bodyA = t, this.bodyB = e
    }(e.exports = i).prototype.applyForce = function() {}
  }, {
    "../math/vec2": 232,
    "../utils/Utils": 259
  }],
  237: [function(t, e, n) {
    var r = t("../math/vec2"),
      i = (t("../utils/Utils"), t("../constraints/Constraint")),
      o = t("../equations/FrictionEquation"),
      a = t("../objects/Body");

    function s(t, e) {
      e = e || {}, this.chassisBody = t, this.wheels = [], this.groundBody = new a({
        mass: 0
      }), this.world = null;
      var n = this;
      this.preStepCallback = function() {
        n.update()
      }
    }

    function c(t, e) {
      e = e || {}, this.vehicle = t, this.forwardEquation = new o(t.chassisBody, t.groundBody), this.sideEquation = new o(t.chassisBody, t.groundBody), this.steerValue = 0, this.engineForce = 0, this.setSideFriction(void 0 !== e.sideFriction ? e.sideFriction : 5), this.localForwardVector = r.fromValues(0, 1), e.localForwardVector && r.copy(this.localForwardVector, e.localForwardVector), this.localPosition = r.fromValues(0, 0), e.localPosition && r.copy(this.localPosition, e.localPosition), i.apply(this, t.chassisBody, t.groundBody), this.equations.push(this.forwardEquation, this.sideEquation), this.setBrakeForce(0)
    }(e.exports = s).prototype.addToWorld = function(t) {
      (this.world = t).addBody(this.groundBody), t.on("preStep", this.preStepCallback);
      for (var e = 0; e < this.wheels.length; e++) {
        var n = this.wheels[e];
        t.addConstraint(n)
      }
    }, s.prototype.removeFromWorld = function() {
      var t = this.world;
      t.removeBody(this.groundBody), t.off("preStep", this.preStepCallback);
      for (var e = 0; e < this.wheels.length; e++) {
        var n = this.wheels[e];
        t.removeConstraint(n)
      }
      this.world = null
    }, s.prototype.addWheel = function(t) {
      var e = new c(this, t);
      return this.wheels.push(e), e
    }, s.prototype.update = function() {
      for (var t = 0; t < this.wheels.length; t++) this.wheels[t].update()
    }, (c.prototype = new i).setBrakeForce = function(t) {
      this.forwardEquation.setSlipForce(t)
    }, c.prototype.setSideFriction = function(t) {
      this.sideEquation.setSlipForce(t)
    };
    var u = r.create(),
      l = r.create();
    c.prototype.getSpeed = function() {
      return this.vehicle.chassisBody.vectorToWorldFrame(l, this.localForwardVector), this.vehicle.chassisBody.getVelocityAtPoint(u, l), r.dot(u, l)
    };
    var h = r.create();
    c.prototype.update = function() {
      this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.t, this.localForwardVector), r.rotate(this.sideEquation.t, this.localForwardVector, Math.PI / 2), this.vehicle.chassisBody.vectorToWorldFrame(this.sideEquation.t, this.sideEquation.t), r.rotate(this.forwardEquation.t, this.forwardEquation.t, this.steerValue), r.rotate(this.sideEquation.t, this.sideEquation.t, this.steerValue), this.vehicle.chassisBody.toWorldFrame(this.forwardEquation.contactPointB, this.localPosition), r.copy(this.sideEquation.contactPointB, this.forwardEquation.contactPointB), this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.contactPointA, this.localPosition), r.copy(this.sideEquation.contactPointA, this.forwardEquation.contactPointA), r.normalize(h, this.forwardEquation.t), r.scale(h, h, this.engineForce), this.vehicle.chassisBody.applyForce(h, this.forwardEquation.contactPointA)
    }
  }, {
    "../constraints/Constraint": 216,
    "../equations/FrictionEquation": 225,
    "../math/vec2": 232,
    "../objects/Body": 233,
    "../utils/Utils": 259
  }],
  238: [function(t, e, n) {
    var r = e.exports = {
      AABB: t("./collision/AABB"),
      AngleLockEquation: t("./equations/AngleLockEquation"),
      Body: t("./objects/Body"),
      Broadphase: t("./collision/Broadphase"),
      Capsule: t("./shapes/Capsule"),
      Circle: t("./shapes/Circle"),
      Constraint: t("./constraints/Constraint"),
      ContactEquation: t("./equations/ContactEquation"),
      ContactEquationPool: t("./utils/ContactEquationPool"),
      ContactMaterial: t("./material/ContactMaterial"),
      Convex: t("./shapes/Convex"),
      DistanceConstraint: t("./constraints/DistanceConstraint"),
      Equation: t("./equations/Equation"),
      EventEmitter: t("./events/EventEmitter"),
      FrictionEquation: t("./equations/FrictionEquation"),
      FrictionEquationPool: t("./utils/FrictionEquationPool"),
      GearConstraint: t("./constraints/GearConstraint"),
      GSSolver: t("./solver/GSSolver"),
      Heightfield: t("./shapes/Heightfield"),
      Line: t("./shapes/Line"),
      LockConstraint: t("./constraints/LockConstraint"),
      Material: t("./material/Material"),
      Narrowphase: t("./collision/Narrowphase"),
      NaiveBroadphase: t("./collision/NaiveBroadphase"),
      Particle: t("./shapes/Particle"),
      Plane: t("./shapes/Plane"),
      Pool: t("./utils/Pool"),
      RevoluteConstraint: t("./constraints/RevoluteConstraint"),
      PrismaticConstraint: t("./constraints/PrismaticConstraint"),
      Ray: t("./collision/Ray"),
      RaycastResult: t("./collision/RaycastResult"),
      Box: t("./shapes/Box"),
      RotationalVelocityEquation: t("./equations/RotationalVelocityEquation"),
      SAPBroadphase: t("./collision/SAPBroadphase"),
      Shape: t("./shapes/Shape"),
      Solver: t("./solver/Solver"),
      Spring: t("./objects/Spring"),
      TopDownVehicle: t("./objects/TopDownVehicle"),
      LinearSpring: t("./objects/LinearSpring"),
      RotationalSpring: t("./objects/RotationalSpring"),
      Utils: t("./utils/Utils"),
      World: t("./world/World"),
      vec2: t("./math/vec2"),
      version: t("../package.json").version
    };
    Object.defineProperty(r, "Rectangle", {
      get: function() {
        return console.warn("The Rectangle class has been renamed to Box."), this.Box
      }
    })
  }, {
    "../package.json": 208,
    "./collision/AABB": 209,
    "./collision/Broadphase": 210,
    "./collision/NaiveBroadphase": 211,
    "./collision/Narrowphase": 212,
    "./collision/Ray": 213,
    "./collision/RaycastResult": 214,
    "./collision/SAPBroadphase": 215,
    "./constraints/Constraint": 216,
    "./constraints/DistanceConstraint": 217,
    "./constraints/GearConstraint": 218,
    "./constraints/LockConstraint": 219,
    "./constraints/PrismaticConstraint": 220,
    "./constraints/RevoluteConstraint": 221,
    "./equations/AngleLockEquation": 222,
    "./equations/ContactEquation": 223,
    "./equations/Equation": 224,
    "./equations/FrictionEquation": 225,
    "./equations/RotationalVelocityEquation": 227,
    "./events/EventEmitter": 228,
    "./material/ContactMaterial": 229,
    "./material/Material": 230,
    "./math/vec2": 232,
    "./objects/Body": 233,
    "./objects/LinearSpring": 234,
    "./objects/RotationalSpring": 235,
    "./objects/Spring": 236,
    "./objects/TopDownVehicle": 237,
    "./shapes/Box": 239,
    "./shapes/Capsule": 240,
    "./shapes/Circle": 241,
    "./shapes/Convex": 242,
    "./shapes/Heightfield": 243,
    "./shapes/Line": 244,
    "./shapes/Particle": 245,
    "./shapes/Plane": 246,
    "./shapes/Shape": 247,
    "./solver/GSSolver": 248,
    "./solver/Solver": 249,
    "./utils/ContactEquationPool": 250,
    "./utils/FrictionEquationPool": 251,
    "./utils/Pool": 257,
    "./utils/Utils": 259,
    "./world/World": 263
  }],
  239: [function(t, e, n) {
    var o = t("../math/vec2"),
      a = t("./Shape"),
      s = t("./Convex");

    function r(t) {
      "number" == typeof t && "number" == typeof arguments[1] && (t = {
        width: t,
        height: arguments[1]
      }, console.warn("The Rectangle has been renamed to Box and its constructor signature has changed. Please use the following format: new Box({ width: 1, height: 1, ... })")), t = t || {};
      var e = this.width = t.width || 1,
        n = this.height = t.height || 1,
        r = [o.fromValues(-e / 2, -n / 2), o.fromValues(e / 2, -n / 2), o.fromValues(e / 2, n / 2), o.fromValues(-e / 2, n / 2)],
        i = [o.fromValues(1, 0), o.fromValues(0, 1)];
      t.vertices = r, t.axes = i, t.type = a.BOX, s.call(this, t)
    }(((e.exports = r).prototype = new s).constructor = r).prototype.computeMomentOfInertia = function(t) {
      var e = this.width,
        n = this.height;
      return t * (n * n + e * e) / 12
    }, r.prototype.updateBoundingRadius = function() {
      var t = this.width,
        e = this.height;
      this.boundingRadius = Math.sqrt(t * t + e * e) / 2
    };
    o.create(), o.create(), o.create(), o.create();
    r.prototype.computeAABB = function(t, e, n) {
      t.setFromPoints(this.vertices, e, n, 0)
    }, r.prototype.updateArea = function() {
      this.area = this.width * this.height
    }
  }, {
    "../math/vec2": 232,
    "./Convex": 242,
    "./Shape": 247
  }],
  240: [function(t, e, n) {
    var r = t("./Shape"),
      A = t("../math/vec2");

    function i(t) {
      "number" == typeof t && "number" == typeof arguments[1] && (t = {
        length: t,
        radius: arguments[1]
      }, console.warn("The Capsule constructor signature has changed. Please use the following format: new Capsule({ radius: 1, length: 1 })")), t = t || {}, this.length = t.length || 1, this.radius = t.radius || 1, t.type = r.CAPSULE, r.call(this, t)
    }(((e.exports = i).prototype = new r).constructor = i).prototype.computeMomentOfInertia = function(t) {
      var e = this.radius,
        n = this.length + e,
        r = 2 * e;
      return t * (r * r + n * n) / 12
    }, i.prototype.updateBoundingRadius = function() {
      this.boundingRadius = this.radius + this.length / 2
    }, i.prototype.updateArea = function() {
      this.area = Math.PI * this.radius * this.radius + 2 * this.radius * this.length
    };
    var o = A.create();
    i.prototype.computeAABB = function(t, e, n) {
      var r = this.radius;
      A.set(o, this.length / 2, 0), 0 !== n && A.rotate(o, o, n), A.set(t.upperBound, Math.max(o[0] + r, -o[0] + r), Math.max(o[1] + r, -o[1] + r)), A.set(t.lowerBound, Math.min(o[0] - r, -o[0] - r), Math.min(o[1] - r, -o[1] - r)), A.add(t.lowerBound, t.lowerBound, e), A.add(t.upperBound, t.upperBound, e)
    };
    var w = A.create(),
      x = A.create(),
      T = A.create(),
      S = A.create(),
      R = A.fromValues(0, 1);
    i.prototype.raycast = function(t, e, n, r) {
      for (var i = e.from, o = e.to, a = (e.direction, w), s = x, c = T, u = S, l = this.length / 2, h = 0; h < 2; h++) {
        var f = this.radius * (2 * h - 1);
        if (A.set(c, -l, f), A.set(u, l, f), A.toGlobalFrame(c, c, n, r), A.toGlobalFrame(u, u, n, r), 0 <= (d = A.getLineSegmentsIntersectionFraction(i, o, c, u)) && (A.rotate(s, R, r), A.scale(s, s, 2 * h - 1), e.reportIntersection(t, d, s, -1), t.shouldStop(e))) return
      }
      var p = Math.pow(this.radius, 2) + Math.pow(l, 2);
      for (h = 0; h < 2; h++) {
        A.set(c, l * (2 * h - 1), 0), A.toGlobalFrame(c, c, n, r);
        var d, g = Math.pow(o[0] - i[0], 2) + Math.pow(o[1] - i[1], 2),
          v = 2 * ((o[0] - i[0]) * (i[0] - c[0]) + (o[1] - i[1]) * (i[1] - c[1])),
          m = Math.pow(i[0] - c[0], 2) + Math.pow(i[1] - c[1], 2) - Math.pow(this.radius, 2);
        if (!((d = Math.pow(v, 2) - 4 * g * m) < 0))
          if (0 === d) {
            if (A.lerp(a, i, o, d), A.squaredDistance(a, n) > p && (A.sub(s, a, c), A.normalize(s, s), e.reportIntersection(t, d, s, -1), t.shouldStop(e))) return
          } else {
            var y = Math.sqrt(d),
              b = 1 / (2 * g),
              _ = (-v - y) * b,
              E = (-v + y) * b;
            if (0 <= _ && _ <= 1 && (A.lerp(a, i, o, _), A.squaredDistance(a, n) > p && (A.sub(s, a, c), A.normalize(s, s), e.reportIntersection(t, _, s, -1), t.shouldStop(e)))) return;
            if (0 <= E && E <= 1 && (A.lerp(a, i, o, E), A.squaredDistance(a, n) > p && (A.sub(s, a, c), A.normalize(s, s), e.reportIntersection(t, E, s, -1), t.shouldStop(e)))) return
          }
      }
    }
  }, {
    "../math/vec2": 232,
    "./Shape": 247
  }],
  241: [function(t, e, n) {
    var r = t("./Shape"),
      m = t("../math/vec2");

    function i(t) {
      "number" == typeof t && (t = {
        radius: t
      }, console.warn("The Circle constructor signature has changed. Please use the following format: new Circle({ radius: 1 })")), t = t || {}, this.radius = t.radius || 1, t.type = r.CIRCLE, r.call(this, t)
    }(((e.exports = i).prototype = new r).constructor = i).prototype.computeMomentOfInertia = function(t) {
      var e = this.radius;
      return t * e * e / 2
    }, i.prototype.updateBoundingRadius = function() {
      this.boundingRadius = this.radius
    }, i.prototype.updateArea = function() {
      this.area = Math.PI * this.radius * this.radius
    }, i.prototype.computeAABB = function(t, e, n) {
      var r = this.radius;
      m.set(t.upperBound, r, r), m.set(t.lowerBound, -r, -r), e && (m.add(t.lowerBound, t.lowerBound, e), m.add(t.upperBound, t.upperBound, e))
    };
    var y = m.create(),
      b = m.create();
    i.prototype.raycast = function(t, e, n, r) {
      var i = e.from,
        o = e.to,
        a = this.radius,
        s = Math.pow(o[0] - i[0], 2) + Math.pow(o[1] - i[1], 2),
        c = 2 * ((o[0] - i[0]) * (i[0] - n[0]) + (o[1] - i[1]) * (i[1] - n[1])),
        u = Math.pow(i[0] - n[0], 2) + Math.pow(i[1] - n[1], 2) - Math.pow(a, 2),
        l = Math.pow(c, 2) - 4 * s * u,
        h = y,
        f = b;
      if (!(l < 0))
        if (0 === l) m.lerp(h, i, o, l), m.sub(f, h, n), m.normalize(f, f), e.reportIntersection(t, l, f, -1);
        else {
          var p = Math.sqrt(l),
            d = 1 / (2 * s),
            g = (-c - p) * d,
            v = (-c + p) * d;
          if (0 <= g && g <= 1 && (m.lerp(h, i, o, g), m.sub(f, h, n), m.normalize(f, f), e.reportIntersection(t, g, f, -1), t.shouldStop(e))) return;
          0 <= v && v <= 1 && (m.lerp(h, i, o, v), m.sub(f, h, n), m.normalize(f, f), e.reportIntersection(t, v, f, -1))
        }
    }
  }, {
    "../math/vec2": 232,
    "./Shape": 247
  }],
  242: [function(t, e, n) {
    var c = t("./Shape"),
      p = t("../math/vec2"),
      s = t("../math/polyk");
    t("poly-decomp");

    function f(t) {
      Array.isArray(t) && (t = {
        vertices: t,
        axes: arguments[1]
      }, console.warn("The Convex constructor signature has changed. Please use the following format: new Convex({ vertices: [...], ... })")), t = t || {}, this.vertices = [];
      for (var e = void 0 !== t.vertices ? t.vertices : [], n = 0; n < e.length; n++) {
        var r = p.create();
        p.copy(r, e[n]), this.vertices.push(r)
      }
      if (this.axes = [], t.axes)
        for (n = 0; n < t.axes.length; n++) {
          var i = p.create();
          p.copy(i, t.axes[n]), this.axes.push(i)
        } else
          for (n = 0; n < this.vertices.length; n++) {
            var o = this.vertices[n],
              a = this.vertices[(n + 1) % this.vertices.length],
              s = p.create();
            p.sub(s, a, o), p.rotate90cw(s, s), p.normalize(s, s), this.axes.push(s)
          }
      if (this.centerOfMass = p.fromValues(0, 0), this.triangles = [], this.vertices.length && (this.updateTriangles(), this.updateCenterOfMass()), this.boundingRadius = 0, t.type = c.CONVEX, c.call(this, t), this.updateBoundingRadius(), this.updateArea(), this.area < 0) throw new Error("Convex vertices must be given in conter-clockwise winding.")
    }((e.exports = f).prototype = new c).constructor = f;
    var u = p.create(),
      a = p.create();
    f.prototype.projectOntoLocalAxis = function(t, e) {
      for (var n, r, i = null, o = null, a = (t = u, 0); a < this.vertices.length; a++) n = this.vertices[a], r = p.dot(n, t), (null === i || i < r) && (i = r), (null === o || r < o) && (o = r);
      if (i < o) {
        var s = o;
        o = i, i = s
      }
      p.set(e, o, i)
    }, f.prototype.projectOntoWorldAxis = function(t, e, n, r) {
      var i = a;
      this.projectOntoLocalAxis(t, r), 0 !== n ? p.rotate(i, t, n) : i = t;
      var o = p.dot(e, i);
      p.set(r, r[0] + o, r[1] + o)
    }, f.prototype.updateTriangles = function() {
      for (var t = [], e = this.triangles.length = 0; e < this.vertices.length; e++) {
        var n = this.vertices[e];
        t.push(n[0], n[1])
      }
      var r = s.Triangulate(t);
      for (e = 0; e < r.length; e += 3) {
        var i = r[e],
          o = r[e + 1],
          a = r[e + 2];
        this.triangles.push([i, o, a])
      }
    };
    var d = p.create(),
      g = p.create(),
      v = p.create(),
      m = p.create(),
      y = p.create();
    p.create(), p.create(), p.create(), p.create();
    f.prototype.updateCenterOfMass = function() {
      var t = this.triangles,
        e = this.vertices,
        n = this.centerOfMass,
        r = d,
        i = v,
        o = m,
        a = y,
        s = g;
      p.set(n, 0, 0);
      for (var c = 0, u = 0; u !== t.length; u++) {
        var l = t[u];
        i = e[l[0]], o = e[l[1]], a = e[l[2]];
        p.centroid(r, i, o, a);
        var h = f.triangleArea(i, o, a);
        c += h, p.scale(s, r, h), p.add(n, n, s)
      }
      p.scale(n, n, 1 / c)
    }, f.prototype.computeMomentOfInertia = function(t) {
      for (var e = 0, n = 0, r = this.vertices.length, i = r - 1, o = 0; o < r; i = o, o++) {
        var a = this.vertices[i],
          s = this.vertices[o],
          c = Math.abs(p.crossLength(a, s));
        e += c * (p.dot(s, s) + p.dot(s, a) + p.dot(a, a)), n += c
      }
      return t / 6 * (e / n)
    }, f.prototype.updateBoundingRadius = function() {
      for (var t = this.vertices, e = 0, n = 0; n !== t.length; n++) {
        var r = p.squaredLength(t[n]);
        e < r && (e = r)
      }
      this.boundingRadius = Math.sqrt(e)
    }, f.triangleArea = function(t, e, n) {
      return .5 * ((e[0] - t[0]) * (n[1] - t[1]) - (n[0] - t[0]) * (e[1] - t[1]))
    }, f.prototype.updateArea = function() {
      this.updateTriangles(), this.area = 0;
      for (var t = this.triangles, e = this.vertices, n = 0; n !== t.length; n++) {
        var r = t[n],
          i = e[r[0]],
          o = e[r[1]],
          a = e[r[2]],
          s = f.triangleArea(i, o, a);
        this.area += s
      }
    }, f.prototype.computeAABB = function(t, e, n) {
      t.setFromPoints(this.vertices, e, n, 0)
    };
    var b = p.create(),
      _ = p.create(),
      E = p.create();
    f.prototype.raycast = function(t, e, n, r) {
      var i = b,
        o = _,
        a = E,
        s = this.vertices;
      p.toLocalFrame(i, e.from, n, r), p.toLocalFrame(o, e.to, n, r);
      for (var c = s.length, u = 0; u < c && !t.shouldStop(e); u++) {
        var l = s[u],
          h = s[(u + 1) % c],
          f = p.getLineSegmentsIntersectionFraction(i, o, l, h);
        0 <= f && (p.sub(a, h, l), p.rotate(a, a, -Math.PI / 2 + r), p.normalize(a, a), e.reportIntersection(t, f, a, u))
      }
    }
  }, {
    "../math/polyk": 231,
    "../math/vec2": 232,
    "./Shape": 247,
    "poly-decomp": 269
  }],
  243: [function(t, e, n) {
    var r = t("./Shape"),
      v = t("../math/vec2");
    t("../utils/Utils");

    function i(t) {
      if (Array.isArray(t)) {
        if (t = {
            heights: t
          }, "object" == typeof arguments[1])
          for (var e in arguments[1]) t[e] = arguments[1][e];
        console.warn("The Heightfield constructor signature has changed. Please use the following format: new Heightfield({ heights: [...], ... })")
      }
      t = t || {}, this.heights = t.heights ? t.heights.slice(0) : [], this.maxValue = t.maxValue || null, this.minValue = t.minValue || null, this.elementWidth = t.elementWidth || .1, void 0 !== t.maxValue && void 0 !== t.minValue || this.updateMaxMinValues(), t.type = r.HEIGHTFIELD, r.call(this, t)
    }(((e.exports = i).prototype = new r).constructor = i).prototype.updateMaxMinValues = function() {
      for (var t = this.heights, e = t[0], n = t[0], r = 0; r !== t.length; r++) {
        var i = t[r];
        e < i && (e = i), i < n && (n = i)
      }
      this.maxValue = e, this.minValue = n
    }, i.prototype.computeMomentOfInertia = function(t) {
      return Number.MAX_VALUE
    }, i.prototype.updateBoundingRadius = function() {
      this.boundingRadius = Number.MAX_VALUE
    }, i.prototype.updateArea = function() {
      for (var t = this.heights, e = 0, n = 0; n < t.length - 1; n++) e += (t[n] + t[n + 1]) / 2 * this.elementWidth;
      this.area = e
    };
    var o = [v.create(), v.create(), v.create(), v.create()];
    i.prototype.computeAABB = function(t, e, n) {
      v.set(o[0], 0, this.maxValue), v.set(o[1], this.elementWidth * this.heights.length, this.maxValue), v.set(o[2], this.elementWidth * this.heights.length, this.minValue), v.set(o[3], 0, this.minValue), t.setFromPoints(o, e, n)
    }, i.prototype.getLineSegment = function(t, e, n) {
      var r = this.heights,
        i = this.elementWidth;
      v.set(t, n * i, r[n]), v.set(e, (n + 1) * i, r[n + 1])
    }, i.prototype.getSegmentIndex = function(t) {
      return Math.floor(t[0] / this.elementWidth)
    }, i.prototype.getClampedSegmentIndex = function(t) {
      var e = this.getSegmentIndex(t);
      return e = Math.min(this.heights.length, Math.max(e, 0))
    };
    v.create();
    var m = v.create(),
      y = v.create(),
      b = v.create(),
      _ = v.create(),
      E = v.create();
    v.fromValues(0, 1);
    i.prototype.raycast = function(t, e, n, r) {
      var i = e.from,
        o = e.to,
        a = (e.direction, m),
        s = y,
        c = b,
        u = _,
        l = E;
      v.toLocalFrame(u, i, n, r), v.toLocalFrame(l, o, n, r);
      var h = this.getClampedSegmentIndex(u),
        f = this.getClampedSegmentIndex(l);
      if (f < h) {
        var p = h;
        h = f, f = p
      }
      for (var d = 0; d < this.heights.length - 1; d++) {
        this.getLineSegment(s, c, d);
        var g = v.getLineSegmentsIntersectionFraction(u, l, s, c);
        if (0 <= g && (v.sub(a, c, s), v.rotate(a, a, r + Math.PI / 2), v.normalize(a, a), e.reportIntersection(t, g, a, -1), t.shouldStop(e))) return
      }
    }
  }, {
    "../math/vec2": 232,
    "../utils/Utils": 259,
    "./Shape": 247
  }],
  244: [function(t, e, n) {
    var r = t("./Shape"),
      h = t("../math/vec2");

    function i(t) {
      "number" == typeof t && (t = {
        length: t
      }, console.warn("The Line constructor signature has changed. Please use the following format: new Line({ length: 1, ... })")), t = t || {}, this.length = t.length || 1, t.type = r.LINE, r.call(this, t)
    }(((e.exports = i).prototype = new r).constructor = i).prototype.computeMomentOfInertia = function(t) {
      return t * Math.pow(this.length, 2) / 12
    }, i.prototype.updateBoundingRadius = function() {
      this.boundingRadius = this.length / 2
    };
    var o = [h.create(), h.create()];
    i.prototype.computeAABB = function(t, e, n) {
      var r = this.length / 2;
      h.set(o[0], -r, 0), h.set(o[1], r, 0), t.setFromPoints(o, e, n, 0)
    };
    h.create();
    var f = h.create(),
      p = h.create(),
      d = h.create(),
      g = h.fromValues(0, 1);
    i.prototype.raycast = function(t, e, n, r) {
      var i = e.from,
        o = e.to,
        a = p,
        s = d,
        c = this.length / 2;
      h.set(a, -c, 0), h.set(s, c, 0), h.toGlobalFrame(a, a, n, r), h.toGlobalFrame(s, s, n, r);
      var u = h.getLineSegmentsIntersectionFraction(a, s, i, o);
      if (0 <= u) {
        var l = f;
        h.rotate(l, g, r), e.reportIntersection(t, u, l, -1)
      }
    }
  }, {
    "../math/vec2": 232,
    "./Shape": 247
  }],
  245: [function(t, e, n) {
    var r = t("./Shape"),
      i = t("../math/vec2");

    function o(t) {
      (t = t || {}).type = r.PARTICLE, r.call(this, t)
    }(((e.exports = o).prototype = new r).constructor = o).prototype.computeMomentOfInertia = function(t) {
      return 0
    }, o.prototype.updateBoundingRadius = function() {
      this.boundingRadius = 0
    }, o.prototype.computeAABB = function(t, e, n) {
      i.copy(t.lowerBound, e), i.copy(t.upperBound, e)
    }
  }, {
    "../math/vec2": 232,
    "./Shape": 247
  }],
  246: [function(t, e, n) {
    var r = t("./Shape"),
      p = t("../math/vec2");
    t("../utils/Utils");

    function i(t) {
      (t = t || {}).type = r.PLANE, r.call(this, t)
    }(((e.exports = i).prototype = new r).constructor = i).prototype.computeMomentOfInertia = function(t) {
      return 0
    }, i.prototype.updateBoundingRadius = function() {
      this.boundingRadius = Number.MAX_VALUE
    }, i.prototype.computeAABB = function(t, e, n) {
      var r = n % (2 * Math.PI),
        i = p.set,
        o = t.lowerBound,
        a = t.upperBound;
      i(o, -1e7, -1e7), i(a, 1e7, 1e7), 0 === r ? a[1] = 0 : r === Math.PI / 2 ? o[0] = 0 : r === Math.PI ? o[1] = 0 : r === 3 * Math.PI / 2 && (a[0] = 0)
    }, i.prototype.updateArea = function() {
      this.area = Number.MAX_VALUE
    };
    var d = p.create(),
      g = (p.create(), p.create(), p.create()),
      v = p.create();
    i.prototype.raycast = function(t, e, n, r) {
      var i = e.from,
        o = e.to,
        a = e.direction,
        s = d,
        c = g,
        u = v;
      p.set(c, 0, 1), p.rotate(c, c, r), p.sub(u, i, n);
      var l = p.dot(u, c);
      if (p.sub(u, o, n), !(0 < l * p.dot(u, c) || p.squaredDistance(i, o) < l * l)) {
        var h = p.dot(c, a);
        p.sub(s, i, n);
        var f = -p.dot(c, s) / h / e.length;
        e.reportIntersection(t, f, c, -1)
      }
    }
  }, {
    "../math/vec2": 232,
    "../utils/Utils": 259,
    "./Shape": 247
  }],
  247: [function(t, e, n) {
    e.exports = i;
    var r = t("../math/vec2");

    function i(t) {
      t = t || {}, this.body = null, this.position = r.fromValues(0, 0), t.position && r.copy(this.position, t.position), this.angle = t.angle || 0, this.type = t.type || 0, this.id = i.idCounter++, this.boundingRadius = 0, this.collisionGroup = void 0 !== t.collisionGroup ? t.collisionGroup : 1, this.collisionResponse = void 0 === t.collisionResponse || t.collisionResponse, this.collisionMask = void 0 !== t.collisionMask ? t.collisionMask : 1, this.material = t.material || null, this.area = 0, this.sensor = void 0 !== t.sensor && t.sensor, this.type && this.updateBoundingRadius(), this.updateArea()
    }
    i.idCounter = 0, i.CIRCLE = 1, i.PARTICLE = 2, i.PLANE = 4, i.CONVEX = 8, i.LINE = 16, i.BOX = 32, Object.defineProperty(i, "RECTANGLE", {
      get: function() {
        return console.warn("Shape.RECTANGLE is deprecated, use Shape.BOX instead."), i.BOX
      }
    }), i.CAPSULE = 64, i.HEIGHTFIELD = 128, i.prototype.computeMomentOfInertia = function(t) {}, i.prototype.updateBoundingRadius = function() {}, i.prototype.updateArea = function() {}, i.prototype.computeAABB = function(t, e, n) {}, i.prototype.raycast = function(t, e, n, r) {}
  }, {
    "../math/vec2": 232
  }],
  248: [function(t, e, n) {
    var A = t("../math/vec2"),
      r = t("./Solver"),
      w = t("../utils/Utils"),
      x = t("../equations/FrictionEquation");

    function T(t) {
      r.call(this, t, r.GS), t = t || {}, this.iterations = t.iterations || 10, this.tolerance = t.tolerance || 1e-7, this.arrayStep = 30, this.lambda = new w.ARRAY_TYPE(this.arrayStep), this.Bs = new w.ARRAY_TYPE(this.arrayStep), this.invCs = new w.ARRAY_TYPE(this.arrayStep), this.useZeroRHS = !1, this.frictionIterations = void 0 !== t.frictionIterations ? 0 : t.frictionIterations, this.usedIterations = 0
    }(((e.exports = T).prototype = new r).constructor = T).prototype.solve = function(t, e) {
      this.sortEquations();
      var n = 0,
        r = this.iterations,
        i = this.frictionIterations,
        o = this.equations,
        a = o.length,
        s = Math.pow(this.tolerance * a, 2),
        c = e.bodies,
        u = e.bodies.length,
        l = (A.add, A.set, this.useZeroRHS),
        h = this.lambda;
      if (this.usedIterations = 0, a)
        for (var f = 0; f !== u; f++) {
          c[f].updateSolveMassProperties()
        }
      h.length < a && (h = this.lambda = new w.ARRAY_TYPE(a + this.arrayStep), this.Bs = new w.ARRAY_TYPE(a + this.arrayStep), this.invCs = new w.ARRAY_TYPE(a + this.arrayStep)),
        function(t) {
          for (var e = t.length; e--;) t[e] = 0
        }(h);
      var p, d, g = this.invCs,
        v = this.Bs;
      for (h = this.lambda, f = 0; f !== o.length; f++) {
        var m;
        ((m = o[f]).timeStep !== t || m.needsUpdate) && (m.timeStep = t, m.update()), v[f] = m.computeB(m.a, m.b, t), g[f] = m.computeInvC(m.epsilon)
      }
      if (0 !== a) {
        for (f = 0; f !== u; f++) {
          c[f].resetConstraintVelocity()
        }
        if (i) {
          for (n = 0; n !== i; n++) {
            for (d = p = 0; d !== a; d++) {
              m = o[d];
              var y = T.iterateEquation(d, m, m.epsilon, v, g, h, l, t, n);
              p += Math.abs(y)
            }
            if (this.usedIterations++, p * p <= s) break
          }
          for (T.updateMultipliers(o, h, 1 / t), d = 0; d !== a; d++) {
            var b = o[d];
            if (b instanceof x) {
              for (var _ = 0, E = 0; E !== b.contactEquations.length; E++) _ += b.contactEquations[E].multiplier;
              _ *= b.frictionCoefficient / b.contactEquations.length, b.maxForce = _, b.minForce = -_
            }
          }
        }
        for (n = 0; n !== r; n++) {
          for (d = p = 0; d !== a; d++) {
            m = o[d];
            y = T.iterateEquation(d, m, m.epsilon, v, g, h, l, t, n);
            p += Math.abs(y)
          }
          if (this.usedIterations++, p * p <= s) break
        }
        for (f = 0; f !== u; f++) c[f].addConstraintVelocity();
        T.updateMultipliers(o, h, 1 / t)
      }
    }, T.updateMultipliers = function(t, e, n) {
      for (var r = t.length; r--;) t[r].multiplier = e[r] * n
    }, T.iterateEquation = function(t, e, n, r, i, o, a, s, c) {
      var u = r[t],
        l = i[t],
        h = o[t],
        f = e.computeGWlambda(),
        p = e.maxForce,
        d = e.minForce;
      a && (u = 0);
      var g = l * (u - f - n * h),
        v = h + g;
      return v < d * s ? g = d * s - h : p * s < v && (g = p * s - h), o[t] += g, e.addToWlambda(g), g
    }
  }, {
    "../equations/FrictionEquation": 225,
    "../math/vec2": 232,
    "../utils/Utils": 259,
    "./Solver": 249
  }],
  249: [function(t, e, n) {
    t("../utils/Utils");
    var r = t("../events/EventEmitter");

    function i(t, e) {
      t = t || {}, r.call(this), this.type = e, this.equations = [], this.equationSortFunction = t.equationSortFunction || !1
    }(((e.exports = i).prototype = new r).constructor = i).prototype.solve = function(t, e) {
      throw new Error("Solver.solve should be implemented by subclasses!")
    };
    var o = {
      bodies: []
    };
    i.prototype.solveIsland = function(t, e) {
      this.removeAllEquations(), e.equations.length && (this.addEquations(e.equations), o.bodies.length = 0, e.getBodies(o.bodies), o.bodies.length && this.solve(t, o))
    }, i.prototype.sortEquations = function() {
      this.equationSortFunction && this.equations.sort(this.equationSortFunction)
    }, i.prototype.addEquation = function(t) {
      t.enabled && this.equations.push(t)
    }, i.prototype.addEquations = function(t) {
      for (var e = 0, n = t.length; e !== n; e++) {
        var r = t[e];
        r.enabled && this.equations.push(r)
      }
    }, i.prototype.removeEquation = function(t) {
      var e = this.equations.indexOf(t); - 1 !== e && this.equations.splice(e, 1)
    }, i.prototype.removeAllEquations = function() {
      this.equations.length = 0
    }, i.GS = 1, i.ISLAND = 2
  }, {
    "../events/EventEmitter": 228,
    "../utils/Utils": 259
  }],
  250: [function(t, e, n) {
    var r = t("../equations/ContactEquation"),
      i = t("./Pool");

    function o() {
      i.apply(this, arguments)
    }(((e.exports = o).prototype = new i).constructor = o).prototype.create = function() {
      return new r
    }, o.prototype.destroy = function(t) {
      return t.bodyA = t.bodyB = null, this
    }
  }, {
    "../equations/ContactEquation": 223,
    "./Pool": 257
  }],
  251: [function(t, e, n) {
    var r = t("../equations/FrictionEquation"),
      i = t("./Pool");

    function o() {
      i.apply(this, arguments)
    }(((e.exports = o).prototype = new i).constructor = o).prototype.create = function() {
      return new r
    }, o.prototype.destroy = function(t) {
      return t.bodyA = t.bodyB = null, this
    }
  }, {
    "../equations/FrictionEquation": 225,
    "./Pool": 257
  }],
  252: [function(t, e, n) {
    var r = t("../world/IslandNode"),
      i = t("./Pool");

    function o() {
      i.apply(this, arguments)
    }(((e.exports = o).prototype = new i).constructor = o).prototype.create = function() {
      return new r
    }, o.prototype.destroy = function(t) {
      return t.reset(), this
    }
  }, {
    "../world/IslandNode": 262,
    "./Pool": 257
  }],
  253: [function(t, e, n) {
    var r = t("../world/Island"),
      i = t("./Pool");

    function o() {
      i.apply(this, arguments)
    }(((e.exports = o).prototype = new i).constructor = o).prototype.create = function() {
      return new r
    }, o.prototype.destroy = function(t) {
      return t.reset(), this
    }
  }, {
    "../world/Island": 260,
    "./Pool": 257
  }],
  254: [function(t, e, n) {
    var r = t("./TupleDictionary"),
      i = (t("./OverlapKeeperRecord"), t("./OverlapKeeperRecordPool"));
    t("./Utils");

    function o() {
      this.overlappingShapesLastState = new r, this.overlappingShapesCurrentState = new r, this.recordPool = new i({
        size: 16
      }), this.tmpDict = new r, this.tmpArray1 = []
    }(e.exports = o).prototype.tick = function() {
      for (var t = this.overlappingShapesLastState, e = this.overlappingShapesCurrentState, n = t.keys.length; n--;) {
        var r = t.keys[n],
          i = t.getByKey(r);
        e.getByKey(r);
        i && this.recordPool.release(i)
      }
      t.reset(), t.copy(e), e.reset()
    }, o.prototype.setOverlapping = function(t, e, n, r) {
      this.overlappingShapesLastState;
      var i = this.overlappingShapesCurrentState;
      if (!i.get(e.id, r.id)) {
        var o = this.recordPool.get();
        o.set(t, e, n, r), i.set(e.id, r.id, o)
      }
    }, o.prototype.getNewOverlaps = function(t) {
      return this.getDiff(this.overlappingShapesLastState, this.overlappingShapesCurrentState, t)
    }, o.prototype.getEndOverlaps = function(t) {
      return this.getDiff(this.overlappingShapesCurrentState, this.overlappingShapesLastState, t)
    }, o.prototype.bodiesAreOverlapping = function(t, e) {
      for (var n = this.overlappingShapesCurrentState, r = n.keys.length; r--;) {
        var i = n.keys[r],
          o = n.data[i];
        if (o.bodyA === t && o.bodyB === e || o.bodyA === e && o.bodyB === t) return !0
      }
      return !1
    }, o.prototype.getDiff = function(t, e, n) {
      var r = t,
        i = e;
      (n = n || []).length = 0;
      for (var o = i.keys.length; o--;) {
        var a = i.keys[o],
          s = i.data[a];
        if (!s) throw new Error("Key " + a + " had no data!");
        r.data[a] || n.push(s)
      }
      return n
    }, o.prototype.isNewOverlap = function(t, e) {
      var n = 0 | t.id,
        r = 0 | e.id,
        i = this.overlappingShapesLastState,
        o = this.overlappingShapesCurrentState;
      return !i.get(n, r) && !!o.get(n, r)
    }, o.prototype.getNewBodyOverlaps = function(t) {
      this.tmpArray1.length = 0;
      var e = this.getNewOverlaps(this.tmpArray1);
      return this.getBodyDiff(e, t)
    }, o.prototype.getEndBodyOverlaps = function(t) {
      this.tmpArray1.length = 0;
      var e = this.getEndOverlaps(this.tmpArray1);
      return this.getBodyDiff(e, t)
    }, o.prototype.getBodyDiff = function(t, e) {
      e = e || [];
      for (var n = this.tmpDict, r = t.length; r--;) {
        var i = t[r];
        n.set(0 | i.bodyA.id, 0 | i.bodyB.id, i)
      }
      for (r = n.keys.length; r--;) {
        (i = n.getByKey(n.keys[r])) && e.push(i.bodyA, i.bodyB)
      }
      return n.reset(), e
    }
  }, {
    "./OverlapKeeperRecord": 255,
    "./OverlapKeeperRecordPool": 256,
    "./TupleDictionary": 258,
    "./Utils": 259
  }],
  255: [function(t, e, n) {
    function i(t, e, n, r) {
      this.shapeA = e, this.shapeB = r, this.bodyA = t, this.bodyB = n
    }(e.exports = i).prototype.set = function(t, e, n, r) {
      i.call(this, t, e, n, r)
    }
  }, {}],
  256: [function(t, e, n) {
    var r = t("./OverlapKeeperRecord"),
      i = t("./Pool");

    function o() {
      i.apply(this, arguments)
    }(((e.exports = o).prototype = new i).constructor = o).prototype.create = function() {
      return new r
    }, o.prototype.destroy = function(t) {
      return t.bodyA = t.bodyB = t.shapeA = t.shapeB = null, this
    }
  }, {
    "./OverlapKeeperRecord": 255,
    "./Pool": 257
  }],
  257: [function(t, e, n) {
    function r(t) {
      t = t || {}, this.objects = [], void 0 !== t.size && this.resize(t.size)
    }(e.exports = r).prototype.resize = function(t) {
      for (var e = this.objects; e.length > t;) e.pop();
      for (; e.length < t;) e.push(this.create());
      return this
    }, r.prototype.get = function() {
      var t = this.objects;
      return t.length ? t.pop() : this.create()
    }, r.prototype.release = function(t) {
      return this.destroy(t), this.objects.push(t), this
    }
  }, {}],
  258: [function(t, e, n) {
    var r = t("./Utils");

    function i() {
      this.data = {}, this.keys = []
    }(e.exports = i).prototype.getKey = function(t, e) {
      return (0 | (t |= 0)) == (0 | (e |= 0)) ? -1 : 0 | ((0 | e) < (0 | t) ? t << 16 | 65535 & e : e << 16 | 65535 & t)
    }, i.prototype.getByKey = function(t) {
      return t |= 0, this.data[t]
    }, i.prototype.get = function(t, e) {
      return this.data[this.getKey(t, e)]
    }, i.prototype.set = function(t, e, n) {
      if (!n) throw new Error("No data!");
      var r = this.getKey(t, e);
      return this.data[r] || this.keys.push(r), this.data[r] = n, r
    }, i.prototype.reset = function() {
      for (var t = this.data, e = this.keys, n = e.length; n--;) delete t[e[n]];
      e.length = 0
    }, i.prototype.copy = function(t) {
      this.reset(), r.appendArray(this.keys, t.keys);
      for (var e = t.keys.length; e--;) {
        var n = t.keys[e];
        this.data[n] = t.data[n]
      }
    }
  }, {
    "./Utils": 259
  }],
  259: [function(t, e, n) {
    function r() {}(e.exports = r).appendArray = function(t, e) {
      if (e.length < 15e4) t.push.apply(t, e);
      else
        for (var n = 0, r = e.length; n !== r; ++n) t.push(e[n])
    }, r.splice = function(t, e, n) {
      n = n || 1;
      for (var r = e, i = t.length - n; r < i; r++) t[r] = t[r + n];
      t.length = i
    }, r.ARRAY_TYPE = "undefined" != typeof P2_ARRAY_TYPE ? P2_ARRAY_TYPE : "undefined" != typeof Float32Array ? Float32Array : Array, r.extend = function(t, e) {
      for (var n in e) t[n] = e[n]
    }, r.defaults = function(t, e) {
      for (var n in t = t || {}, e) n in t || (t[n] = e[n]);
      return t
    }
  }, {}],
  260: [function(t, e, n) {
    var r = t("../objects/Body");

    function i() {
      this.equations = [], this.bodies = []
    }(e.exports = i).prototype.reset = function() {
      this.equations.length = this.bodies.length = 0
    };
    var o = [];
    i.prototype.getBodies = function(t) {
      for (var e = t || [], n = this.equations, r = o.length = 0; r !== n.length; r++) {
        var i = n[r]; - 1 === o.indexOf(i.bodyA.id) && (e.push(i.bodyA), o.push(i.bodyA.id)), -1 === o.indexOf(i.bodyB.id) && (e.push(i.bodyB), o.push(i.bodyB.id))
      }
      return e
    }, i.prototype.wantsToSleep = function() {
      for (var t = 0; t < this.bodies.length; t++) {
        var e = this.bodies[t];
        if (e.type === r.DYNAMIC && !e.wantsToSleep) return !1
      }
      return !0
    }, i.prototype.sleep = function() {
      for (var t = 0; t < this.bodies.length; t++) {
        this.bodies[t].sleep()
      }
      return !0
    }
  }, {
    "../objects/Body": 233
  }],
  261: [function(t, e, n) {
    t("../math/vec2"), t("./Island"), t("./IslandNode");
    var r = t("./../utils/IslandNodePool"),
      i = t("./../utils/IslandPool"),
      a = t("../objects/Body");

    function d(t) {
      this.nodePool = new r({
        size: 16
      }), this.islandPool = new i({
        size: 8
      }), this.equations = [], this.islands = [], this.nodes = [], this.queue = []
    }(e.exports = d).getUnvisitedNode = function(t) {
      for (var e = t.length, n = 0; n !== e; n++) {
        var r = t[n];
        if (!r.visited && r.body.type === a.DYNAMIC) return r
      }
      return !1
    }, d.prototype.visit = function(t, e, n) {
      e.push(t.body);
      for (var r = t.equations.length, i = 0; i !== r; i++) {
        var o = t.equations[i]; - 1 === n.indexOf(o) && n.push(o)
      }
    }, d.prototype.bfs = function(t, e, n) {
      var r = this.queue;
      for (r.length = 0, r.push(t), t.visited = !0, this.visit(t, e, n); r.length;)
        for (var i, o = r.pop(); i = d.getUnvisitedNode(o.neighbors);) i.visited = !0, this.visit(i, e, n), i.body.type === a.DYNAMIC && r.push(i)
    }, d.prototype.split = function(t) {
      for (var e = t.bodies, n = this.nodes, r = this.equations; n.length;) this.nodePool.release(n.pop());
      for (var i = 0; i !== e.length; i++) {
        var o = this.nodePool.get();
        o.body = e[i], n.push(o)
      }
      for (var a = 0; a !== r.length; a++) {
        var s = r[a],
          c = (i = e.indexOf(s.bodyA), e.indexOf(s.bodyB)),
          u = n[i],
          l = n[c];
        u.neighbors.push(l), l.neighbors.push(u), u.equations.push(s), l.equations.push(s)
      }
      var h, f = this.islands;
      for (i = 0; i < f.length; i++) this.islandPool.release(f[i]);
      for (f.length = 0; h = d.getUnvisitedNode(n);) {
        var p = this.islandPool.get();
        this.bfs(h, p.bodies, p.equations), f.push(p)
      }
      return f
    }
  }, {
    "../math/vec2": 232,
    "../objects/Body": 233,
    "./../utils/IslandNodePool": 252,
    "./../utils/IslandPool": 253,
    "./Island": 260,
    "./IslandNode": 262
  }],
  262: [function(t, e, n) {
    function r(t) {
      this.body = t, this.neighbors = [], this.equations = [], this.visited = !1
    }(e.exports = r).prototype.reset = function() {
      this.equations.length = 0, this.neighbors.length = 0, this.visited = !1, this.body = null
    }
  }, {}],
  263: [function(t, e, n) {
    var r = t("../solver/GSSolver"),
      X = (t("../solver/Solver"), t("../collision/Ray"), t("../math/vec2")),
      m = t("../shapes/Circle"),
      y = t("../shapes/Convex"),
      b = (t("../shapes/Line"), t("../shapes/Plane")),
      _ = t("../shapes/Capsule"),
      E = t("../shapes/Particle"),
      i = t("../events/EventEmitter"),
      W = t("../objects/Body"),
      o = (t("../shapes/Shape"), t("../objects/LinearSpring"), t("../material/Material")),
      a = t("../material/ContactMaterial"),
      s = (t("../constraints/DistanceConstraint"), t("../constraints/Constraint"), t("../constraints/LockConstraint"), t("../constraints/RevoluteConstraint"), t("../constraints/PrismaticConstraint"), t("../constraints/GearConstraint"), t("../../package.json"), t("../collision/Broadphase"), t("../collision/AABB")),
      c = t("../collision/SAPBroadphase"),
      u = t("../collision/Narrowphase"),
      H = t("../utils/Utils"),
      l = t("../utils/OverlapKeeper"),
      h = t("./IslandManager");
    t("../objects/RotationalSpring");

    function Y(t) {
      i.apply(this), t = t || {}, this.springs = [], this.bodies = [], this.disabledBodyCollisionPairs = [], this.solver = t.solver || new r, this.narrowphase = new u(this), this.islandManager = new h, this.gravity = X.fromValues(0, -9.78), t.gravity && X.copy(this.gravity, t.gravity), this.frictionGravity = X.length(this.gravity) || 10, this.useWorldGravityAsFrictionGravity = !0, this.useFrictionGravityOnZeroGravity = !0, this.broadphase = t.broadphase || new c, this.broadphase.setWorld(this), this.constraints = [], this.defaultMaterial = new o, this.defaultContactMaterial = new a(this.defaultMaterial, this.defaultMaterial), this.lastTimeStep = 1 / 60, this.applySpringForces = !0, this.applyDamping = !0, this.applyGravity = !0, this.solveConstraints = !0, this.contactMaterials = [], this.time = 0, this.accumulator = 0, this.stepping = !1, this.bodiesToBeRemoved = [], this.islandSplit = void 0 === t.islandSplit || !!t.islandSplit, this.emitImpactEvent = !0, this._constraintIdCounter = 0, this._bodyIdCounter = 0, this.postStepEvent = {
        type: "postStep"
      }, this.addBodyEvent = {
        type: "addBody",
        body: null
      }, this.removeBodyEvent = {
        type: "removeBody",
        body: null
      }, this.addSpringEvent = {
        type: "addSpring",
        spring: null
      }, this.impactEvent = {
        type: "impact",
        bodyA: null,
        bodyB: null,
        shapeA: null,
        shapeB: null,
        contactEquation: null
      }, this.postBroadphaseEvent = {
        type: "postBroadphase",
        pairs: null
      }, this.sleepMode = Y.NO_SLEEPING, this.beginContactEvent = {
        type: "beginContact",
        shapeA: null,
        shapeB: null,
        bodyA: null,
        bodyB: null,
        contactEquations: []
      }, this.endContactEvent = {
        type: "endContact",
        shapeA: null,
        shapeB: null,
        bodyA: null,
        bodyB: null
      }, this.preSolveEvent = {
        type: "preSolve",
        contactEquations: null,
        frictionEquations: null
      }, this.overlappingShapesLastState = {
        keys: []
      }, this.overlappingShapesCurrentState = {
        keys: []
      }, this.overlapKeeper = new l
    }(((e.exports = Y).prototype = new Object(i.prototype)).constructor = Y).NO_SLEEPING = 1, Y.BODY_SLEEPING = 2, Y.ISLAND_SLEEPING = 4, Y.prototype.addConstraint = function(t) {
      this.constraints.push(t)
    }, Y.prototype.addContactMaterial = function(t) {
      this.contactMaterials.push(t)
    }, Y.prototype.removeContactMaterial = function(t) {
      var e = this.contactMaterials.indexOf(t); - 1 !== e && H.splice(this.contactMaterials, e, 1)
    }, Y.prototype.getContactMaterial = function(t, e) {
      for (var n = this.contactMaterials, r = 0, i = n.length; r !== i; r++) {
        var o = n[r];
        if (o.materialA.id === t.id && o.materialB.id === e.id || o.materialA.id === e.id && o.materialB.id === t.id) return o
      }
      return !1
    }, Y.prototype.removeConstraint = function(t) {
      var e = this.constraints.indexOf(t); - 1 !== e && H.splice(this.constraints, e, 1)
    };
    X.create(), X.create(), X.create(), X.create(), X.create(), X.create();
    var Z = X.create(),
      x = X.fromValues(0, 0),
      T = X.fromValues(0, 0);
    X.fromValues(0, 0), X.fromValues(0, 0);
    Y.prototype.step = function(t, e, n) {
      if (n = n || 10, 0 === (e = e || 0)) this.internalStep(t), this.time += t;
      else {
        this.accumulator += e;
        for (var r = 0; this.accumulator >= t && r < n;) this.internalStep(t), this.time += t, this.accumulator -= t, r++;
        for (var i = this.accumulator % t / t, o = 0; o !== this.bodies.length; o++) {
          var a = this.bodies[o];
          X.lerp(a.interpolatedPosition, a.previousPosition, a.position, i), a.interpolatedAngle = a.previousAngle + i * (a.angle - a.previousAngle)
        }
      }
    };
    var K = [];
    Y.prototype.internalStep = function(t) {
      this.stepping = !0;
      var e = this.springs.length,
        n = this.springs,
        r = this.bodies,
        i = this.gravity,
        o = this.solver,
        a = this.bodies.length,
        s = this.broadphase,
        c = this.narrowphase,
        u = this.constraints,
        l = Z,
        h = (X.scale, X.add),
        f = (X.rotate, this.islandManager);
      if (this.overlapKeeper.tick(), this.lastTimeStep = t, this.useWorldGravityAsFrictionGravity) {
        var p = X.length(this.gravity);
        0 === p && this.useFrictionGravityOnZeroGravity || (this.frictionGravity = p)
      }
      if (this.applyGravity)
        for (var d = 0; d !== a; d++) {
          var g = (v = r[d]).force;
          v.type === W.DYNAMIC && v.sleepState !== W.SLEEPING && (X.scale(l, i, v.mass * v.gravityScale), h(g, g, l))
        }
      if (this.applySpringForces)
        for (d = 0; d !== e; d++) {
          n[d].applyForce()
        }
      if (this.applyDamping)
        for (d = 0; d !== a; d++) {
          var v;
          (v = r[d]).type === W.DYNAMIC && v.applyDamping(t)
        }
      var m = s.getCollisionPairs(this),
        y = this.disabledBodyCollisionPairs;
      for (d = y.length - 2; 0 <= d; d -= 2)
        for (var b = m.length - 2; 0 <= b; b -= 2)(y[d] === m[b] && y[d + 1] === m[b + 1] || y[d + 1] === m[b] && y[d] === m[b + 1]) && m.splice(b, 2);
      var _ = u.length;
      for (d = 0; d !== _; d++) {
        var E = u[d];
        if (!E.collideConnected)
          for (b = m.length - 2; 0 <= b; b -= 2)(E.bodyA === m[b] && E.bodyB === m[b + 1] || E.bodyB === m[b] && E.bodyA === m[b + 1]) && m.splice(b, 2)
      }
      this.postBroadphaseEvent.pairs = m, this.emit(this.postBroadphaseEvent), this.postBroadphaseEvent.pairs = null, c.reset(this);
      d = 0;
      for (var A = m.length; d !== A; d += 2)
        for (var w = m[d], x = m[d + 1], T = 0, S = w.shapes.length; T !== S; T++)
          for (var R = w.shapes[T], I = R.position, L = R.angle, M = 0, B = x.shapes.length; M !== B; M++) {
            var C = x.shapes[M],
              P = C.position,
              O = C.angle,
              F = this.defaultContactMaterial;
            if (R.material && C.material) {
              var N = this.getContactMaterial(R.material, C.material);
              N && (F = N)
            }
            this.runNarrowphase(c, w, R, I, L, x, C, P, O, F, this.frictionGravity)
          }
      for (d = 0; d !== a; d++) {
        (D = r[d])._wakeUpAfterNarrowphase && (D.wakeUp(), D._wakeUpAfterNarrowphase = !1)
      }
      if (this.has("endContact")) {
        this.overlapKeeper.getEndOverlaps(K);
        var q = this.endContactEvent;
        for (M = K.length; M--;) {
          var j = K[M];
          q.shapeA = j.shapeA, q.shapeB = j.shapeB, q.bodyA = j.bodyA, q.bodyB = j.bodyB, this.emit(q)
        }
        K.length = 0
      }
      var U = this.preSolveEvent;
      U.contactEquations = c.contactEquations, U.frictionEquations = c.frictionEquations, this.emit(U), U.contactEquations = U.frictionEquations = null;
      _ = u.length;
      for (d = 0; d !== _; d++) u[d].update();
      if (c.contactEquations.length || c.frictionEquations.length || _)
        if (this.islandSplit) {
          for (f.equations.length = 0, H.appendArray(f.equations, c.contactEquations), H.appendArray(f.equations, c.frictionEquations), d = 0; d !== _; d++) H.appendArray(f.equations, u[d].equations);
          f.split(this);
          for (d = 0; d !== f.islands.length; d++) {
            (z = f.islands[d]).equations.length && o.solveIsland(t, z)
          }
        } else {
          for (o.addEquations(c.contactEquations), o.addEquations(c.frictionEquations), d = 0; d !== _; d++) o.addEquations(u[d].equations);
          this.solveConstraints && o.solve(t, this), o.removeAllEquations()
        } for (d = 0; d !== a; d++) {
        var D;
        (D = r[d]).integrate(t)
      }
      for (d = 0; d !== a; d++) r[d].setZeroForce();
      if (this.emitImpactEvent && this.has("impact")) {
        var k = this.impactEvent;
        for (d = 0; d !== c.contactEquations.length; d++) {
          var V = c.contactEquations[d];
          V.firstImpact && (k.bodyA = V.bodyA, k.bodyB = V.bodyB, k.shapeA = V.shapeA, k.shapeB = V.shapeB, k.contactEquation = V, this.emit(k))
        }
      }
      if (this.sleepMode === Y.BODY_SLEEPING)
        for (d = 0; d !== a; d++) r[d].sleepTick(this.time, !1, t);
      else if (this.sleepMode === Y.ISLAND_SLEEPING && this.islandSplit) {
        for (d = 0; d !== a; d++) r[d].sleepTick(this.time, !0, t);
        for (d = 0; d < this.islandManager.islands.length; d++) {
          var z;
          (z = this.islandManager.islands[d]).wantsToSleep() && z.sleep()
        }
      }
      this.stepping = !1;
      var G = this.bodiesToBeRemoved;
      for (d = 0; d !== G.length; d++) this.removeBody(G[d]);
      G.length = 0, this.emit(this.postStepEvent)
    }, Y.prototype.runNarrowphase = function(t, e, n, r, i, o, a, s, c, u, l) {
      if (0 != (n.collisionGroup & a.collisionMask) && 0 != (a.collisionGroup & n.collisionMask)) {
        X.rotate(x, r, e.angle), X.rotate(T, s, o.angle), X.add(x, x, e.position), X.add(T, T, o.position);
        var h, f = i + e.angle,
          p = c + o.angle;
        t.enableFriction = 0 < u.friction, t.frictionCoefficient = u.friction, h = e.type === W.STATIC || e.type === W.KINEMATIC ? o.mass : o.type === W.STATIC || o.type === W.KINEMATIC ? e.mass : e.mass * o.mass / (e.mass + o.mass), t.slipForce = u.friction * l * h, t.restitution = u.restitution, t.surfaceVelocity = u.surfaceVelocity, t.frictionStiffness = u.frictionStiffness, t.frictionRelaxation = u.frictionRelaxation, t.stiffness = u.stiffness, t.relaxation = u.relaxation, t.contactSkinSize = u.contactSkinSize, t.enabledEquations = e.collisionResponse && o.collisionResponse && n.collisionResponse && a.collisionResponse;
        var d = t[n.type | a.type],
          g = 0;
        if (d) {
          var v = n.sensor || a.sensor,
            m = t.frictionEquations.length;
          g = n.type < a.type ? d.call(t, e, n, x, f, o, a, T, p, v) : d.call(t, o, a, T, p, e, n, x, f, v);
          var y = t.frictionEquations.length - m;
          if (g) {
            if (e.allowSleep && e.type === W.DYNAMIC && e.sleepState === W.SLEEPING && o.sleepState === W.AWAKE && o.type !== W.STATIC) {
              var b = X.squaredLength(o.velocity) + Math.pow(o.angularVelocity, 2);
              2 * Math.pow(o.sleepSpeedLimit, 2) <= b && (e._wakeUpAfterNarrowphase = !0)
            }
            if (o.allowSleep && o.type === W.DYNAMIC && o.sleepState === W.SLEEPING && e.sleepState === W.AWAKE && e.type !== W.STATIC) {
              var _ = X.squaredLength(e.velocity) + Math.pow(e.angularVelocity, 2);
              2 * Math.pow(e.sleepSpeedLimit, 2) <= _ && (o._wakeUpAfterNarrowphase = !0)
            }
            if (this.overlapKeeper.setOverlapping(e, n, o, a), this.has("beginContact") && this.overlapKeeper.isNewOverlap(n, a)) {
              var E = this.beginContactEvent;
              if (E.shapeA = n, E.shapeB = a, E.bodyA = e, E.bodyB = o, E.contactEquations.length = 0, "number" == typeof g)
                for (var A = t.contactEquations.length - g; A < t.contactEquations.length; A++) E.contactEquations.push(t.contactEquations[A]);
              this.emit(E)
            }
            if ("number" == typeof g && 1 < y)
              for (A = t.frictionEquations.length - y; A < t.frictionEquations.length; A++) {
                var w = t.frictionEquations[A];
                w.setSlipForce(w.getSlipForce() / y)
              }
          }
        }
      }
    }, Y.prototype.addSpring = function(t) {
      this.springs.push(t);
      var e = this.addSpringEvent;
      e.spring = t, this.emit(e), e.spring = null
    }, Y.prototype.removeSpring = function(t) {
      var e = this.springs.indexOf(t); - 1 !== e && H.splice(this.springs, e, 1)
    }, Y.prototype.addBody = function(t) {
      if (-1 === this.bodies.indexOf(t)) {
        this.bodies.push(t);
        var e = (t.world = this).addBodyEvent;
        e.body = t, this.emit(e), e.body = null
      }
    }, Y.prototype.removeBody = function(t) {
      if (this.stepping) this.bodiesToBeRemoved.push(t);
      else {
        t.world = null;
        var e = this.bodies.indexOf(t); - 1 !== e && (H.splice(this.bodies, e, 1), (this.removeBodyEvent.body = t).resetConstraintVelocity(), this.emit(this.removeBodyEvent), this.removeBodyEvent.body = null)
      }
    }, Y.prototype.getBodyById = function(t) {
      for (var e = this.bodies, n = 0; n < e.length; n++) {
        var r = e[n];
        if (r.id === t) return r
      }
      return !1
    }, Y.prototype.disableBodyCollision = function(t, e) {
      this.disabledBodyCollisionPairs.push(t, e)
    }, Y.prototype.enableBodyCollision = function(t, e) {
      for (var n = this.disabledBodyCollisionPairs, r = 0; r < n.length; r += 2)
        if (n[r] === t && n[r + 1] === e || n[r + 1] === t && n[r] === e) return void n.splice(r, 2)
    }, Y.prototype.clear = function() {
      this.time = 0, this.solver && this.solver.equations.length && this.solver.removeAllEquations();
      for (var t = this.constraints, e = t.length - 1; 0 <= e; e--) this.removeConstraint(t[e]);
      var n = this.bodies;
      for (e = n.length - 1; 0 <= e; e--) this.removeBody(n[e]);
      var r = this.springs;
      for (e = r.length - 1; 0 <= e; e--) this.removeSpring(r[e]);
      var i = this.contactMaterials;
      for (e = i.length - 1; 0 <= e; e--) this.removeContactMaterial(i[e]);
      Y.apply(this)
    };
    var A = X.create(),
      w = (X.fromValues(0, 0), X.fromValues(0, 0));
    Y.prototype.hitTest = function(t, e, n) {
      n = n || 0;
      var r = new W({
          position: t
        }),
        i = new E,
        o = t,
        a = A,
        s = w;
      r.addShape(i);
      for (var c = this.narrowphase, u = [], l = 0, h = e.length; l !== h; l++)
        for (var f = e[l], p = 0, d = f.shapes.length; p !== d; p++) {
          var g = f.shapes[p];
          X.rotate(a, g.position, f.angle), X.add(a, a, f.position);
          var v = g.angle + f.angle;
          (g instanceof m && c.circleParticle(f, g, a, v, r, i, o, 0, !0) || g instanceof y && c.particleConvex(r, i, o, 0, f, g, a, v, !0) || g instanceof b && c.particlePlane(r, i, o, 0, f, g, a, v, !0) || g instanceof _ && c.particleCapsule(r, i, o, 0, f, g, a, v, !0) || g instanceof E && X.squaredLength(X.sub(s, a, t)) < n * n) && u.push(f)
        }
      return u
    }, Y.prototype.setGlobalStiffness = function(t) {
      for (var e = this.constraints, n = 0; n !== e.length; n++)
        for (var r = e[n], i = 0; i !== r.equations.length; i++) {
          var o = r.equations[i];
          o.stiffness = t, o.needsUpdate = !0
        }
      var a = this.contactMaterials;
      for (n = 0; n !== a.length; n++) {
        (r = a[n]).stiffness = r.frictionStiffness = t
      }(r = this.defaultContactMaterial).stiffness = r.frictionStiffness = t
    }, Y.prototype.setGlobalRelaxation = function(t) {
      for (var e = 0; e !== this.constraints.length; e++)
        for (var n = this.constraints[e], r = 0; r !== n.equations.length; r++) {
          var i = n.equations[r];
          i.relaxation = t, i.needsUpdate = !0
        }
      for (e = 0; e !== this.contactMaterials.length; e++) {
        (n = this.contactMaterials[e]).relaxation = n.frictionRelaxation = t
      }(n = this.defaultContactMaterial).relaxation = n.frictionRelaxation = t
    };
    var f = new s,
      p = [];
    Y.prototype.raycast = function(t, e) {
      return e.getAABB(f), this.broadphase.aabbQuery(this, f, p), e.intersectBodies(t, p), p.length = 0, t.hasHit()
    }
  }, {
    "../../package.json": 208,
    "../collision/AABB": 209,
    "../collision/Broadphase": 210,
    "../collision/Narrowphase": 212,
    "../collision/Ray": 213,
    "../collision/SAPBroadphase": 215,
    "../constraints/Constraint": 216,
    "../constraints/DistanceConstraint": 217,
    "../constraints/GearConstraint": 218,
    "../constraints/LockConstraint": 219,
    "../constraints/PrismaticConstraint": 220,
    "../constraints/RevoluteConstraint": 221,
    "../events/EventEmitter": 228,
    "../material/ContactMaterial": 229,
    "../material/Material": 230,
    "../math/vec2": 232,
    "../objects/Body": 233,
    "../objects/LinearSpring": 234,
    "../objects/RotationalSpring": 235,
    "../shapes/Capsule": 240,
    "../shapes/Circle": 241,
    "../shapes/Convex": 242,
    "../shapes/Line": 244,
    "../shapes/Particle": 245,
    "../shapes/Plane": 246,
    "../shapes/Shape": 247,
    "../solver/GSSolver": 248,
    "../solver/Solver": 249,
    "../utils/OverlapKeeper": 254,
    "../utils/Utils": 259,
    "./IslandManager": 261
  }],
  264: [function(t, e, n) {
    "use strict";
    var r = t("repeat-string");
    e.exports = function(t, e, n) {
      return r(n = void 0 !== n ? n + "" : " ", e) + t
    }
  }, {
    "repeat-string": 271
  }],
  265: [function(t, e, n) {
    var h = t("./Scalar");

    function r() {}(e.exports = r).lineInt = function(t, e, n) {
      n = n || 0;
      var r, i, o, a, s, c, u, l = [0, 0];
      return r = t[1][1] - t[0][1], i = t[0][0] - t[1][0], o = r * t[0][0] + i * t[0][1], a = e[1][1] - e[0][1], s = e[0][0] - e[1][0], c = a * e[0][0] + s * e[0][1], u = r * s - a * i, h.eq(u, 0, n) || (l[0] = (s * o - i * c) / u, l[1] = (r * c - a * o) / u), l
    }, r.segmentsIntersect = function(t, e, n, r) {
      var i = e[0] - t[0],
        o = e[1] - t[1],
        a = r[0] - n[0],
        s = r[1] - n[1];
      if (a * o - s * i == 0) return !1;
      var c = (i * (n[1] - t[1]) + o * (t[0] - n[0])) / (a * o - s * i),
        u = (a * (t[1] - n[1]) + s * (n[0] - t[0])) / (s * i - a * o);
      return 0 <= c && c <= 1 && 0 <= u && u <= 1
    }
  }, {
    "./Scalar": 268
  }],
  266: [function(t, e, n) {
    function u() {}(e.exports = u).area = function(t, e, n) {
      return (e[0] - t[0]) * (n[1] - t[1]) - (n[0] - t[0]) * (e[1] - t[1])
    }, u.left = function(t, e, n) {
      return 0 < u.area(t, e, n)
    }, u.leftOn = function(t, e, n) {
      return 0 <= u.area(t, e, n)
    }, u.right = function(t, e, n) {
      return u.area(t, e, n) < 0
    }, u.rightOn = function(t, e, n) {
      return u.area(t, e, n) <= 0
    };
    var l = [],
      h = [];
    u.collinear = function(t, e, n, r) {
      if (r) {
        var i = l,
          o = h;
        i[0] = e[0] - t[0], i[1] = e[1] - t[1], o[0] = n[0] - e[0], o[1] = n[1] - e[1];
        var a = i[0] * o[0] + i[1] * o[1],
          s = Math.sqrt(i[0] * i[0] + i[1] * i[1]),
          c = Math.sqrt(o[0] * o[0] + o[1] * o[1]);
        return Math.acos(a / (s * c)) < r
      }
      return 0 == u.area(t, e, n)
    }, u.sqdist = function(t, e) {
      var n = e[0] - t[0],
        r = e[1] - t[1];
      return n * n + r * r
    }
  }, {}],
  267: [function(t, e, n) {
    var s = t("./Line"),
      A = t("./Point"),
      f = t("./Scalar");

    function w() {
      this.vertices = []
    }(e.exports = w).prototype.at = function(t) {
      var e = this.vertices,
        n = e.length;
      return e[t < 0 ? t % n + n : t % n]
    }, w.prototype.first = function() {
      return this.vertices[0]
    }, w.prototype.last = function() {
      return this.vertices[this.vertices.length - 1]
    }, w.prototype.clear = function() {
      this.vertices.length = 0
    }, w.prototype.append = function(t, e, n) {
      if (void 0 === e) throw new Error("From is not given!");
      if (void 0 === n) throw new Error("To is not given!");
      if (n - 1 < e) throw new Error("lol1");
      if (n > t.vertices.length) throw new Error("lol2");
      if (e < 0) throw new Error("lol3");
      for (var r = e; r < n; r++) this.vertices.push(t.vertices[r])
    }, w.prototype.makeCCW = function() {
      for (var t = 0, e = this.vertices, n = 1; n < this.vertices.length; ++n)(e[n][1] < e[t][1] || e[n][1] == e[t][1] && e[n][0] > e[t][0]) && (t = n);
      A.left(this.at(t - 1), this.at(t), this.at(t + 1)) || this.reverse()
    }, w.prototype.reverse = function() {
      for (var t = [], e = 0, n = this.vertices.length; e !== n; e++) t.push(this.vertices.pop());
      this.vertices = t
    }, w.prototype.isReflex = function(t) {
      return A.right(this.at(t - 1), this.at(t), this.at(t + 1))
    };
    var c = [],
      u = [];

    function x(t, e, n, r, i) {
      i = i || 0;
      var o = e[1] - t[1],
        a = t[0] - e[0],
        s = o * t[0] + a * t[1],
        c = r[1] - n[1],
        u = n[0] - r[0],
        l = c * n[0] + u * n[1],
        h = o * u - c * a;
      return f.eq(h, 0, i) ? [0, 0] : [(u * s - a * l) / h, (o * l - c * s) / h]
    }
    w.prototype.canSee = function(t, e) {
      var n, r, i = c,
        o = u;
      if (A.leftOn(this.at(t + 1), this.at(t), this.at(e)) && A.rightOn(this.at(t - 1), this.at(t), this.at(e))) return !1;
      r = A.sqdist(this.at(t), this.at(e));
      for (var a = 0; a !== this.vertices.length; ++a)
        if ((a + 1) % this.vertices.length !== t && a !== t && A.leftOn(this.at(t), this.at(e), this.at(a + 1)) && A.rightOn(this.at(t), this.at(e), this.at(a)) && (i[0] = this.at(t), i[1] = this.at(e), o[0] = this.at(a), o[1] = this.at(a + 1), n = s.lineInt(i, o), A.sqdist(this.at(t), n) < r)) return !1;
      return !0
    }, w.prototype.copy = function(t, e, n) {
      var r = n || new w;
      if (r.clear(), t < e)
        for (var i = t; i <= e; i++) r.vertices.push(this.vertices[i]);
      else {
        for (i = 0; i <= e; i++) r.vertices.push(this.vertices[i]);
        for (i = t; i < this.vertices.length; i++) r.vertices.push(this.vertices[i])
      }
      return r
    }, w.prototype.getCutEdges = function() {
      for (var t = [], e = [], n = [], r = new w, i = Number.MAX_VALUE, o = 0; o < this.vertices.length; ++o)
        if (this.isReflex(o))
          for (var a = 0; a < this.vertices.length; ++a)
            if (this.canSee(o, a)) {
              e = this.copy(o, a, r).getCutEdges(), n = this.copy(a, o, r).getCutEdges();
              for (var s = 0; s < n.length; s++) e.push(n[s]);
              e.length < i && (i = (t = e).length, t.push([this.at(o), this.at(a)]))
            } return t
    }, w.prototype.decomp = function() {
      var t = this.getCutEdges();
      return 0 < t.length ? this.slice(t) : [this]
    }, w.prototype.slice = function(t) {
      if (0 == t.length) return [this];
      if (t instanceof Array && t.length && t[0] instanceof Array && 2 == t[0].length && t[0][0] instanceof Array) {
        for (var e = [this], n = 0; n < t.length; n++)
          for (var r = t[n], i = 0; i < e.length; i++) {
            var o = e[i].slice(r);
            if (o) {
              e.splice(i, 1), e.push(o[0], o[1]);
              break
            }
          }
        return e
      }
      r = t, n = this.vertices.indexOf(r[0]), i = this.vertices.indexOf(r[1]);
      return -1 != n && -1 != i && [this.copy(n, i), this.copy(i, n)]
    }, w.prototype.isSimple = function() {
      for (var t = this.vertices, e = 0; e < t.length - 1; e++)
        for (var n = 0; n < e - 1; n++)
          if (s.segmentsIntersect(t[e], t[e + 1], t[n], t[n + 1])) return !1;
      for (e = 1; e < t.length - 2; e++)
        if (s.segmentsIntersect(t[0], t[t.length - 1], t[e], t[e + 1])) return !1;
      return !0
    }, w.prototype.quickDecomp = function(t, e, n, r, i, o) {
      i = i || 100, o = o || 0, r = r || 25, t = void 0 !== t ? t : [], e = e || [], n = n || [];
      var a = [0, 0],
        s = [0, 0],
        c = [0, 0],
        u = 0,
        l = 0,
        h = 0,
        f = 0,
        p = 0,
        d = 0,
        g = 0,
        v = new w,
        m = new w,
        y = this,
        b = this.vertices;
      if (b.length < 3) return t;
      if (i < ++o) return console.warn("quickDecomp: max level (" + i + ") reached."), t;
      for (var _ = 0; _ < this.vertices.length; ++_)
        if (y.isReflex(_)) {
          e.push(y.vertices[_]), u = l = Number.MAX_VALUE;
          for (var E = 0; E < this.vertices.length; ++E) A.left(y.at(_ - 1), y.at(_), y.at(E)) && A.rightOn(y.at(_ - 1), y.at(_), y.at(E - 1)) && (c = x(y.at(_ - 1), y.at(_), y.at(E), y.at(E - 1)), A.right(y.at(_ + 1), y.at(_), c) && (h = A.sqdist(y.vertices[_], c)) < l && (l = h, s = c, d = E)), A.left(y.at(_ + 1), y.at(_), y.at(E + 1)) && A.rightOn(y.at(_ + 1), y.at(_), y.at(E)) && (c = x(y.at(_ + 1), y.at(_), y.at(E), y.at(E + 1)), A.left(y.at(_ - 1), y.at(_), c) && (h = A.sqdist(y.vertices[_], c)) < u && (u = h, a = c, p = E));
          if (d == (p + 1) % this.vertices.length) c[0] = (s[0] + a[0]) / 2, c[1] = (s[1] + a[1]) / 2, n.push(c), _ < p ? (v.append(y, _, p + 1), v.vertices.push(c), m.vertices.push(c), 0 != d && m.append(y, d, y.vertices.length), m.append(y, 0, _ + 1)) : (0 != _ && v.append(y, _, y.vertices.length), v.append(y, 0, p + 1), v.vertices.push(c), m.vertices.push(c), m.append(y, d, _ + 1));
          else {
            if (p < d && (p += this.vertices.length), f = Number.MAX_VALUE, p < d) return t;
            for (E = d; E <= p; ++E) A.leftOn(y.at(_ - 1), y.at(_), y.at(E)) && A.rightOn(y.at(_ + 1), y.at(_), y.at(E)) && (h = A.sqdist(y.at(_), y.at(E))) < f && (f = h, g = E % this.vertices.length);
            _ < g ? (v.append(y, _, g + 1), 0 != g && m.append(y, g, b.length), m.append(y, 0, _ + 1)) : (0 != _ && v.append(y, _, b.length), v.append(y, 0, g + 1), m.append(y, g, _ + 1))
          }
          return v.vertices.length < m.vertices.length ? (v.quickDecomp(t, e, n, r, i, o), m.quickDecomp(t, e, n, r, i, o)) : (m.quickDecomp(t, e, n, r, i, o), v.quickDecomp(t, e, n, r, i, o)), t
        } return t.push(this), t
    }, w.prototype.removeCollinearPoints = function(t) {
      for (var e = 0, n = this.vertices.length - 1; 3 < this.vertices.length && 0 <= n; --n) A.collinear(this.at(n - 1), this.at(n), this.at(n + 1), t) && (this.vertices.splice(n % this.vertices.length, 1), n--, e++);
      return e
    }
  }, {
    "./Line": 265,
    "./Point": 266,
    "./Scalar": 268
  }],
  268: [function(t, e, n) {
    function r() {}(e.exports = r).eq = function(t, e, n) {
      return n = n || 0, Math.abs(t - e) < n
    }
  }, {}],
  269: [function(t, e, n) {
    e.exports = {
      Polygon: t("./Polygon"),
      Point: t("./Point")
    }
  }, {
    "./Point": 266,
    "./Polygon": 267
  }],
  270: [function(t, e, n) {
    var r, i, o = e.exports = {};

    function a() {
      throw new Error("setTimeout has not been defined")
    }

    function s() {
      throw new Error("clearTimeout has not been defined")
    }

    function c(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
      try {
        return r(e, 0)
      } catch (t) {
        try {
          return r.call(null, e, 0)
        } catch (t) {
          return r.call(this, e, 0)
        }
      }
    }! function() {
      try {
        r = "function" == typeof setTimeout ? setTimeout : a
      } catch (t) {
        r = a
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : s
      } catch (t) {
        i = s
      }
    }();
    var u, l = [],
      h = !1,
      f = -1;

    function p() {
      h && u && (h = !1, u.length ? l = u.concat(l) : f = -1, l.length && d())
    }

    function d() {
      if (!h) {
        var t = c(p);
        h = !0;
        for (var e = l.length; e;) {
          for (u = l, l = []; ++f < e;) u && u[f].run();
          f = -1, e = l.length
        }
        u = null, h = !1,
          function(e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
            try {
              i(e)
            } catch (t) {
              try {
                return i.call(null, e)
              } catch (t) {
                return i.call(this, e)
              }
            }
          }(t)
      }
    }

    function g(t, e) {
      this.fun = t, this.array = e
    }

    function v() {}
    o.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (1 < arguments.length)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      l.push(new g(t, e)), 1 !== l.length || h || c(d)
    }, g.prototype.run = function() {
      this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(t) {
      return []
    }, o.binding = function(t) {
      throw new Error("process.binding is not supported")
    }, o.cwd = function() {
      return "/"
    }, o.chdir = function(t) {
      throw new Error("process.chdir is not supported")
    }, o.umask = function() {
      return 0
    }
  }, {}],
  271: [function(t, e, n) {
    "use strict";
    var r, i = "";
    e.exports = function(t, e) {
      if ("string" != typeof t) throw new TypeError("expected a string");
      if (1 === e) return t;
      if (2 === e) return t + t;
      var n = t.length * e;
      if (r !== t || void 0 === r) r = t, i = "";
      else if (i.length >= n) return i.substr(0, n);
      for (; n > i.length && 1 < e;) 1 & e && (i += t), e >>= 1, t += t;
      return i = (i += t).substr(0, n)
    }
  }, {}],
  272: [function(t, n, r) {
    (function(A) {
      var t, e;
      t = this, e = function() {
        "use strict";
        var r = function() {
            if ("undefined" != typeof Map) return Map;

            function r(t, n) {
              var r = -1;
              return t.some(function(t, e) {
                return t[0] === n && (r = e, !0)
              }), r
            }
            return function() {
              function t() {
                this.__entries__ = []
              }
              return Object.defineProperty(t.prototype, "size", {
                get: function() {
                  return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
              }), t.prototype.get = function(t) {
                var e = r(this.__entries__, t),
                  n = this.__entries__[e];
                return n && n[1]
              }, t.prototype.set = function(t, e) {
                var n = r(this.__entries__, t);
                ~n ? this.__entries__[n][1] = e : this.__entries__.push([t, e])
              }, t.prototype.delete = function(t) {
                var e = this.__entries__,
                  n = r(e, t);
                ~n && e.splice(n, 1)
              }, t.prototype.has = function(t) {
                return !!~r(this.__entries__, t)
              }, t.prototype.clear = function() {
                this.__entries__.splice(0)
              }, t.prototype.forEach = function(t, e) {
                void 0 === e && (e = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                  var i = r[n];
                  t.call(e, i[1], i[0])
                }
              }, t
            }()
          }(),
          n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
          e = void 0 !== A && A.Math === Math ? A : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
          c = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(e) : function(t) {
            return setTimeout(function() {
              return t(Date.now())
            }, 1e3 / 60)
          },
          u = 2;
        var i = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
          o = "undefined" != typeof MutationObserver,
          a = function() {
            function t() {
              this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                var n = !1,
                  r = !1,
                  i = 0;

                function o() {
                  n && (n = !1, t()), r && s()
                }

                function a() {
                  c(o)
                }

                function s() {
                  var t = Date.now();
                  if (n) {
                    if (t - i < u) return;
                    r = !0
                  } else r = !(n = !0), setTimeout(a, e);
                  i = t
                }
                return s
              }(this.refresh.bind(this), 20)
            }
            return t.prototype.addObserver = function(t) {
              ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
            }, t.prototype.removeObserver = function(t) {
              var e = this.observers_,
                n = e.indexOf(t);
              ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
            }, t.prototype.refresh = function() {
              this.updateObservers_() && this.refresh()
            }, t.prototype.updateObservers_ = function() {
              var t = this.observers_.filter(function(t) {
                return t.gatherActive(), t.hasActive()
              });
              return t.forEach(function(t) {
                return t.broadcastActive()
              }), 0 < t.length
            }, t.prototype.connect_ = function() {
              n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), o ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
              })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, t.prototype.disconnect_ = function() {
              n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, t.prototype.onTransitionEnd_ = function(t) {
              var e = t.propertyName,
                n = void 0 === e ? "" : e;
              i.some(function(t) {
                return !!~n.indexOf(t)
              }) && this.refresh()
            }, t.getInstance = function() {
              return this.instance_ || (this.instance_ = new t), this.instance_
            }, t.instance_ = null, t
          }(),
          l = function(t, e) {
            for (var n = 0, r = Object.keys(e); n < r.length; n++) {
              var i = r[n];
              Object.defineProperty(t, i, {
                value: e[i],
                enumerable: !1,
                writable: !1,
                configurable: !0
              })
            }
            return t
          },
          f = function(t) {
            return t && t.ownerDocument && t.ownerDocument.defaultView || e
          },
          p = m(0, 0, 0, 0);

        function d(t) {
          return parseFloat(t) || 0
        }

        function g(n) {
          for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
          return t.reduce(function(t, e) {
            return t + d(n["border-" + e + "-width"])
          }, 0)
        }

        function s(t) {
          var e = t.clientWidth,
            n = t.clientHeight;
          if (!e && !n) return p;
          var r, i = f(t).getComputedStyle(t),
            o = function(t) {
              for (var e = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                var i = r[n],
                  o = t["padding-" + i];
                e[i] = d(o)
              }
              return e
            }(i),
            a = o.left + o.right,
            s = o.top + o.bottom,
            c = d(i.width),
            u = d(i.height);
          if ("border-box" === i.boxSizing && (Math.round(c + a) !== e && (c -= g(i, "left", "right") + a), Math.round(u + s) !== n && (u -= g(i, "top", "bottom") + s)), (r = t) !== f(r).document.documentElement) {
            var l = Math.round(c + a) - e,
              h = Math.round(u + s) - n;
            1 !== Math.abs(l) && (c -= l), 1 !== Math.abs(h) && (u -= h)
          }
          return m(o.left, o.top, c, u)
        }
        var h = "undefined" != typeof SVGGraphicsElement ? function(t) {
          return t instanceof f(t).SVGGraphicsElement
        } : function(t) {
          return t instanceof f(t).SVGElement && "function" == typeof t.getBBox
        };

        function v(t) {
          return n ? h(t) ? m(0, 0, (e = t.getBBox()).width, e.height) : s(t) : p;
          var e
        }

        function m(t, e, n, r) {
          return {
            x: t,
            y: e,
            width: n,
            height: r
          }
        }
        var y = function() {
            function t(t) {
              this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = m(0, 0, 0, 0), this.target = t
            }
            return t.prototype.isActive = function() {
              var t = v(this.target);
              return (this.contentRect_ = t).width !== this.broadcastWidth || t.height !== this.broadcastHeight
            }, t.prototype.broadcastRect = function() {
              var t = this.contentRect_;
              return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
            }, t
          }(),
          b = function(t, e) {
            var n, r, i, o, a, s, c, u = (r = (n = e).x, i = n.y, o = n.width, a = n.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(s.prototype), l(c, {
              x: r,
              y: i,
              width: o,
              height: a,
              top: i,
              right: r + o,
              bottom: a + i,
              left: r
            }), c);
            l(this, {
              target: t,
              contentRect: u
            })
          },
          _ = function() {
            function t(t, e, n) {
              if (this.activeObservations_ = [], this.observations_ = new r, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
              this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n
            }
            return t.prototype.observe = function(t) {
              if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof f(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) || (e.set(t, new y(t)), this.controller_.addObserver(this), this.controller_.refresh())
              }
            }, t.prototype.unobserve = function(t) {
              if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof f(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
              }
            }, t.prototype.disconnect = function() {
              this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }, t.prototype.gatherActive = function() {
              var e = this;
              this.clearActive(), this.observations_.forEach(function(t) {
                t.isActive() && e.activeObservations_.push(t)
              })
            }, t.prototype.broadcastActive = function() {
              if (this.hasActive()) {
                var t = this.callbackCtx_,
                  e = this.activeObservations_.map(function(t) {
                    return new b(t.target, t.broadcastRect())
                  });
                this.callback_.call(t, e, t), this.clearActive()
              }
            }, t.prototype.clearActive = function() {
              this.activeObservations_.splice(0)
            }, t.prototype.hasActive = function() {
              return 0 < this.activeObservations_.length
            }, t
          }(),
          E = "undefined" != typeof WeakMap ? new WeakMap : new r,
          t = function t(e) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var n = a.getInstance(),
              r = new _(e, n, this);
            E.set(this, r)
          };
        return ["observe", "unobserve", "disconnect"].forEach(function(e) {
          t.prototype[e] = function() {
            var t;
            return (t = E.get(this))[e].apply(t, arguments)
          }
        }), void 0 !== e.ResizeObserver ? e.ResizeObserver : t
      }, "object" == typeof r && void 0 !== n ? n.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ResizeObserver = e()
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {}],
  273: [function(t, e, n) {
    ! function(t) {
      var v = {
        not_string: /[^s]/,
        number: /[diefg]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[\+\-]/
      };

      function m() {
        var t = arguments[0],
          e = m.cache;
        return e[t] && e.hasOwnProperty(t) || (e[t] = m.parse(t)), m.format.call(null, e[t], arguments)
      }
      m.format = function(t, e) {
        var n, r, i, o, a, s, c, u, l = 1,
          h = t.length,
          f = "",
          p = [],
          d = !0,
          g = "";
        for (r = 0; r < h; r++)
          if ("string" === (f = y(t[r]))) p[p.length] = t[r];
          else if ("array" === f) {
          if ((o = t[r])[2])
            for (n = e[l], i = 0; i < o[2].length; i++) {
              if (!n.hasOwnProperty(o[2][i])) throw new Error(m("[sprintf] property '%s' does not exist", o[2][i]));
              n = n[o[2][i]]
            } else n = o[1] ? e[o[1]] : e[l++];
          if ("function" == y(n) && (n = n()), v.not_string.test(o[8]) && v.not_json.test(o[8]) && "number" != y(n) && isNaN(n)) throw new TypeError(m("[sprintf] expecting number but found %s", y(n)));
          switch (v.number.test(o[8]) && (d = 0 <= n), o[8]) {
            case "b":
              n = n.toString(2);
              break;
            case "c":
              n = String.fromCharCode(n);
              break;
            case "d":
            case "i":
              n = parseInt(n, 10);
              break;
            case "j":
              n = JSON.stringify(n, null, o[6] ? parseInt(o[6]) : 0);
              break;
            case "e":
              n = o[7] ? n.toExponential(o[7]) : n.toExponential();
              break;
            case "f":
              n = o[7] ? parseFloat(n).toFixed(o[7]) : parseFloat(n);
              break;
            case "g":
              n = o[7] ? parseFloat(n).toPrecision(o[7]) : parseFloat(n);
              break;
            case "o":
              n = n.toString(8);
              break;
            case "s":
              n = (n = String(n)) && o[7] ? n.substring(0, o[7]) : n;
              break;
            case "u":
              n >>>= 0;
              break;
            case "x":
              n = n.toString(16);
              break;
            case "X":
              n = n.toString(16).toUpperCase()
          }
          v.json.test(o[8]) ? p[p.length] = n : (!v.number.test(o[8]) || d && !o[3] ? g = "" : (g = d ? "+" : "-", n = n.toString().replace(v.sign, "")), s = o[4] ? "0" === o[4] ? "0" : o[4].charAt(1) : " ", c = o[6] - (g + n).length, a = o[6] && 0 < c ? (u = s, Array(c + 1).join(u)) : "", p[p.length] = o[5] ? g + n + a : "0" === s ? g + a + n : a + g + n)
        }
        return p.join("")
      }, m.cache = {}, m.parse = function(t) {
        for (var e = t, n = [], r = [], i = 0; e;) {
          if (null !== (n = v.text.exec(e))) r[r.length] = n[0];
          else if (null !== (n = v.modulo.exec(e))) r[r.length] = "%";
          else {
            if (null === (n = v.placeholder.exec(e))) throw new SyntaxError("[sprintf] unexpected placeholder");
            if (n[2]) {
              i |= 1;
              var o = [],
                a = n[2],
                s = [];
              if (null === (s = v.key.exec(a))) throw new SyntaxError("[sprintf] failed to parse named argument key");
              for (o[o.length] = s[1];
                "" !== (a = a.substring(s[0].length));)
                if (null !== (s = v.key_access.exec(a))) o[o.length] = s[1];
                else {
                  if (null === (s = v.index_access.exec(a))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                  o[o.length] = s[1]
                } n[2] = o
            } else i |= 2;
            if (3 === i) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            r[r.length] = n
          }
          e = e.substring(n[0].length)
        }
        return r
      };
      var e = function(t, e, n) {
        return (n = (e || []).slice(0)).splice(0, 0, t), m.apply(null, n)
      };

      function y(t) {
        return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
      }
      void 0 !== n ? (n.sprintf = m, n.vsprintf = e) : (t.sprintf = m, t.vsprintf = e, "function" == typeof define && define.amd && define(function() {
        return {
          sprintf: m,
          vsprintf: e
        }
      }))
    }("undefined" == typeof window ? this : window)
  }, {}],
  274: [function(t, k, e) {
    ! function(h) {
      var f = /^\s+/,
        p = /\s+$/,
        r = 0,
        a = h.round,
        d = h.min,
        g = h.max,
        t = h.random;

      function l(t, e) {
        if (e = e || {}, (t = t || "") instanceof l) return t;
        if (!(this instanceof l)) return new l(t, e);
        var n = function(t) {
          var e = {
              r: 0,
              g: 0,
              b: 0
            },
            n = 1,
            r = null,
            i = null,
            o = null,
            a = !1,
            s = !1;
          "string" == typeof t && (t = function(t) {
            t = t.replace(f, "").replace(p, "").toLowerCase();
            var e, n = !1;
            if (S[t]) t = S[t], n = !0;
            else if ("transparent" == t) return {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
              format: "name"
            };
            if (e = U.rgb.exec(t)) return {
              r: e[1],
              g: e[2],
              b: e[3]
            };
            if (e = U.rgba.exec(t)) return {
              r: e[1],
              g: e[2],
              b: e[3],
              a: e[4]
            };
            if (e = U.hsl.exec(t)) return {
              h: e[1],
              s: e[2],
              l: e[3]
            };
            if (e = U.hsla.exec(t)) return {
              h: e[1],
              s: e[2],
              l: e[3],
              a: e[4]
            };
            if (e = U.hsv.exec(t)) return {
              h: e[1],
              s: e[2],
              v: e[3]
            };
            if (e = U.hsva.exec(t)) return {
              h: e[1],
              s: e[2],
              v: e[3],
              a: e[4]
            };
            if (e = U.hex8.exec(t)) return {
              r: B(e[1]),
              g: B(e[2]),
              b: B(e[3]),
              a: F(e[4]),
              format: n ? "name" : "hex8"
            };
            if (e = U.hex6.exec(t)) return {
              r: B(e[1]),
              g: B(e[2]),
              b: B(e[3]),
              format: n ? "name" : "hex"
            };
            if (e = U.hex4.exec(t)) return {
              r: B(e[1] + "" + e[1]),
              g: B(e[2] + "" + e[2]),
              b: B(e[3] + "" + e[3]),
              a: F(e[4] + "" + e[4]),
              format: n ? "name" : "hex8"
            };
            if (e = U.hex3.exec(t)) return {
              r: B(e[1] + "" + e[1]),
              g: B(e[2] + "" + e[2]),
              b: B(e[3] + "" + e[3]),
              format: n ? "name" : "hex"
            };
            return !1
          }(t));
          "object" == typeof t && (D(t.r) && D(t.g) && D(t.b) ? (c = t.r, u = t.g, l = t.b, e = {
            r: 255 * L(c, 255),
            g: 255 * L(u, 255),
            b: 255 * L(l, 255)
          }, a = !0, s = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : D(t.h) && D(t.s) && D(t.v) ? (r = P(t.s), i = P(t.v), e = function(t, e, n) {
            t = 6 * L(t, 360), e = L(e, 100), n = L(n, 100);
            var r = h.floor(t),
              i = t - r,
              o = n * (1 - e),
              a = n * (1 - i * e),
              s = n * (1 - (1 - i) * e),
              c = r % 6;
            return {
              r: 255 * [n, a, o, o, s, n][c],
              g: 255 * [s, n, n, a, o, o][c],
              b: 255 * [o, o, s, n, n, a][c]
            }
          }(t.h, r, i), a = !0, s = "hsv") : D(t.h) && D(t.s) && D(t.l) && (r = P(t.s), o = P(t.l), e = function(t, e, n) {
            var r, i, o;

            function a(t, e, n) {
              return n < 0 && (n += 1), 1 < n && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }
            if (t = L(t, 360), e = L(e, 100), n = L(n, 100), 0 === e) r = i = o = n;
            else {
              var s = n < .5 ? n * (1 + e) : n + e - n * e,
                c = 2 * n - s;
              r = a(c, s, t + 1 / 3), i = a(c, s, t), o = a(c, s, t - 1 / 3)
            }
            return {
              r: 255 * r,
              g: 255 * i,
              b: 255 * o
            }
          }(t.h, r, o), a = !0, s = "hsl"), t.hasOwnProperty("a") && (n = t.a));
          var c, u, l;
          return n = I(n), {
            ok: a,
            format: t.format || s,
            r: d(255, g(e.r, 0)),
            g: d(255, g(e.g, 0)),
            b: d(255, g(e.b, 0)),
            a: n
          }
        }(t);
        this._originalInput = t, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = a(100 * this._a) / 100, this._format = e.format || n.format, this._gradientType = e.gradientType, this._r < 1 && (this._r = a(this._r)), this._g < 1 && (this._g = a(this._g)), this._b < 1 && (this._b = a(this._b)), this._ok = n.ok, this._tc_id = r++
      }

      function i(t, e, n) {
        t = L(t, 255), e = L(e, 255), n = L(n, 255);
        var r, i, o = g(t, e, n),
          a = d(t, e, n),
          s = (o + a) / 2;
        if (o == a) r = i = 0;
        else {
          var c = o - a;
          switch (i = .5 < s ? c / (2 - o - a) : c / (o + a), o) {
            case t:
              r = (e - n) / c + (e < n ? 6 : 0);
              break;
            case e:
              r = (n - t) / c + 2;
              break;
            case n:
              r = (t - e) / c + 4
          }
          r /= 6
        }
        return {
          h: r,
          s: i,
          l: s
        }
      }

      function o(t, e, n) {
        t = L(t, 255), e = L(e, 255), n = L(n, 255);
        var r, i, o = g(t, e, n),
          a = d(t, e, n),
          s = o,
          c = o - a;
        if (i = 0 === o ? 0 : c / o, o == a) r = 0;
        else {
          switch (o) {
            case t:
              r = (e - n) / c + (e < n ? 6 : 0);
              break;
            case e:
              r = (n - t) / c + 2;
              break;
            case n:
              r = (t - e) / c + 4
          }
          r /= 6
        }
        return {
          h: r,
          s: i,
          v: s
        }
      }

      function e(t, e, n, r) {
        var i = [C(a(t).toString(16)), C(a(e).toString(16)), C(a(n).toString(16))];
        return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
      }

      function s(t, e, n, r) {
        return [C(O(r)), C(a(t).toString(16)), C(a(e).toString(16)), C(a(n).toString(16))].join("")
      }

      function n(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = l(t).toHsl();
        return n.s -= e / 100, n.s = M(n.s), l(n)
      }

      function c(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = l(t).toHsl();
        return n.s += e / 100, n.s = M(n.s), l(n)
      }

      function u(t) {
        return l(t).desaturate(100)
      }

      function v(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = l(t).toHsl();
        return n.l += e / 100, n.l = M(n.l), l(n)
      }

      function m(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = l(t).toRgb();
        return n.r = g(0, d(255, n.r - a(-e / 100 * 255))), n.g = g(0, d(255, n.g - a(-e / 100 * 255))), n.b = g(0, d(255, n.b - a(-e / 100 * 255))), l(n)
      }

      function y(t, e) {
        e = 0 === e ? 0 : e || 10;
        var n = l(t).toHsl();
        return n.l -= e / 100, n.l = M(n.l), l(n)
      }

      function b(t, e) {
        var n = l(t).toHsl(),
          r = (n.h + e) % 360;
        return n.h = r < 0 ? 360 + r : r, l(n)
      }

      function _(t) {
        var e = l(t).toHsl();
        return e.h = (e.h + 180) % 360, l(e)
      }

      function E(t) {
        var e = l(t).toHsl(),
          n = e.h;
        return [l(t), l({
          h: (n + 120) % 360,
          s: e.s,
          l: e.l
        }), l({
          h: (n + 240) % 360,
          s: e.s,
          l: e.l
        })]
      }

      function A(t) {
        var e = l(t).toHsl(),
          n = e.h;
        return [l(t), l({
          h: (n + 90) % 360,
          s: e.s,
          l: e.l
        }), l({
          h: (n + 180) % 360,
          s: e.s,
          l: e.l
        }), l({
          h: (n + 270) % 360,
          s: e.s,
          l: e.l
        })]
      }

      function w(t) {
        var e = l(t).toHsl(),
          n = e.h;
        return [l(t), l({
          h: (n + 72) % 360,
          s: e.s,
          l: e.l
        }), l({
          h: (n + 216) % 360,
          s: e.s,
          l: e.l
        })]
      }

      function x(t, e, n) {
        e = e || 6, n = n || 30;
        var r = l(t).toHsl(),
          i = 360 / n,
          o = [l(t)];
        for (r.h = (r.h - (i * e >> 1) + 720) % 360; --e;) r.h = (r.h + i) % 360, o.push(l(r));
        return o
      }

      function T(t, e) {
        e = e || 6;
        for (var n = l(t).toHsv(), r = n.h, i = n.s, o = n.v, a = [], s = 1 / e; e--;) a.push(l({
          h: r,
          s: i,
          v: o
        })), o = (o + s) % 1;
        return a
      }
      l.prototype = {
        isDark: function() {
          return this.getBrightness() < 128
        },
        isLight: function() {
          return !this.isDark()
        },
        isValid: function() {
          return this._ok
        },
        getOriginalInput: function() {
          return this._originalInput
        },
        getFormat: function() {
          return this._format
        },
        getAlpha: function() {
          return this._a
        },
        getBrightness: function() {
          var t = this.toRgb();
          return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
        },
        getLuminance: function() {
          var t, e, n, r = this.toRgb();
          return t = r.r / 255, e = r.g / 255, n = r.b / 255, .2126 * (t <= .03928 ? t / 12.92 : h.pow((t + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : h.pow((e + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : h.pow((n + .055) / 1.055, 2.4))
        },
        setAlpha: function(t) {
          return this._a = I(t), this._roundA = a(100 * this._a) / 100, this
        },
        toHsv: function() {
          var t = o(this._r, this._g, this._b);
          return {
            h: 360 * t.h,
            s: t.s,
            v: t.v,
            a: this._a
          }
        },
        toHsvString: function() {
          var t = o(this._r, this._g, this._b),
            e = a(360 * t.h),
            n = a(100 * t.s),
            r = a(100 * t.v);
          return 1 == this._a ? "hsv(" + e + ", " + n + "%, " + r + "%)" : "hsva(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")"
        },
        toHsl: function() {
          var t = i(this._r, this._g, this._b);
          return {
            h: 360 * t.h,
            s: t.s,
            l: t.l,
            a: this._a
          }
        },
        toHslString: function() {
          var t = i(this._r, this._g, this._b),
            e = a(360 * t.h),
            n = a(100 * t.s),
            r = a(100 * t.l);
          return 1 == this._a ? "hsl(" + e + ", " + n + "%, " + r + "%)" : "hsla(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")"
        },
        toHex: function(t) {
          return e(this._r, this._g, this._b, t)
        },
        toHexString: function(t) {
          return "#" + this.toHex(t)
        },
        toHex8: function(t) {
          return function(t, e, n, r, i) {
            var o = [C(a(t).toString(16)), C(a(e).toString(16)), C(a(n).toString(16)), C(O(r))];
            if (i && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1)) return o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0);
            return o.join("")
          }(this._r, this._g, this._b, this._a, t)
        },
        toHex8String: function(t) {
          return "#" + this.toHex8(t)
        },
        toRgb: function() {
          return {
            r: a(this._r),
            g: a(this._g),
            b: a(this._b),
            a: this._a
          }
        },
        toRgbString: function() {
          return 1 == this._a ? "rgb(" + a(this._r) + ", " + a(this._g) + ", " + a(this._b) + ")" : "rgba(" + a(this._r) + ", " + a(this._g) + ", " + a(this._b) + ", " + this._roundA + ")"
        },
        toPercentageRgb: function() {
          return {
            r: a(100 * L(this._r, 255)) + "%",
            g: a(100 * L(this._g, 255)) + "%",
            b: a(100 * L(this._b, 255)) + "%",
            a: this._a
          }
        },
        toPercentageRgbString: function() {
          return 1 == this._a ? "rgb(" + a(100 * L(this._r, 255)) + "%, " + a(100 * L(this._g, 255)) + "%, " + a(100 * L(this._b, 255)) + "%)" : "rgba(" + a(100 * L(this._r, 255)) + "%, " + a(100 * L(this._g, 255)) + "%, " + a(100 * L(this._b, 255)) + "%, " + this._roundA + ")"
        },
        toName: function() {
          return 0 === this._a ? "transparent" : !(this._a < 1) && (R[e(this._r, this._g, this._b, !0)] || !1)
        },
        toFilter: function(t) {
          var e = "#" + s(this._r, this._g, this._b, this._a),
            n = e,
            r = this._gradientType ? "GradientType = 1, " : "";
          if (t) {
            var i = l(t);
            n = "#" + s(i._r, i._g, i._b, i._a)
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + e + ",endColorstr=" + n + ")"
        },
        toString: function(t) {
          var e = !!t;
          t = t || this._format;
          var n = !1,
            r = this._a < 1 && 0 <= this._a;
          return e || !r || "hex" !== t && "hex6" !== t && "hex3" !== t && "hex4" !== t && "hex8" !== t && "name" !== t ? ("rgb" === t && (n = this.toRgbString()), "prgb" === t && (n = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (n = this.toHexString()), "hex3" === t && (n = this.toHexString(!0)), "hex4" === t && (n = this.toHex8String(!0)), "hex8" === t && (n = this.toHex8String()), "name" === t && (n = this.toName()), "hsl" === t && (n = this.toHslString()), "hsv" === t && (n = this.toHsvString()), n || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
        },
        clone: function() {
          return l(this.toString())
        },
        _applyModification: function(t, e) {
          var n = t.apply(null, [this].concat([].slice.call(e)));
          return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
        },
        lighten: function() {
          return this._applyModification(v, arguments)
        },
        brighten: function() {
          return this._applyModification(m, arguments)
        },
        darken: function() {
          return this._applyModification(y, arguments)
        },
        desaturate: function() {
          return this._applyModification(n, arguments)
        },
        saturate: function() {
          return this._applyModification(c, arguments)
        },
        greyscale: function() {
          return this._applyModification(u, arguments)
        },
        spin: function() {
          return this._applyModification(b, arguments)
        },
        _applyCombination: function(t, e) {
          return t.apply(null, [this].concat([].slice.call(e)))
        },
        analogous: function() {
          return this._applyCombination(x, arguments)
        },
        complement: function() {
          return this._applyCombination(_, arguments)
        },
        monochromatic: function() {
          return this._applyCombination(T, arguments)
        },
        splitcomplement: function() {
          return this._applyCombination(w, arguments)
        },
        triad: function() {
          return this._applyCombination(E, arguments)
        },
        tetrad: function() {
          return this._applyCombination(A, arguments)
        }
      }, l.fromRatio = function(t, e) {
        if ("object" == typeof t) {
          var n = {};
          for (var r in t) t.hasOwnProperty(r) && (n[r] = "a" === r ? t[r] : P(t[r]));
          t = n
        }
        return l(t, e)
      }, l.equals = function(t, e) {
        return !(!t || !e) && l(t).toRgbString() == l(e).toRgbString()
      }, l.random = function() {
        return l.fromRatio({
          r: t(),
          g: t(),
          b: t()
        })
      }, l.mix = function(t, e, n) {
        n = 0 === n ? 0 : n || 50;
        var r = l(t).toRgb(),
          i = l(e).toRgb(),
          o = n / 100;
        return l({
          r: (i.r - r.r) * o + r.r,
          g: (i.g - r.g) * o + r.g,
          b: (i.b - r.b) * o + r.b,
          a: (i.a - r.a) * o + r.a
        })
      }, l.readability = function(t, e) {
        var n = l(t),
          r = l(e);
        return (h.max(n.getLuminance(), r.getLuminance()) + .05) / (h.min(n.getLuminance(), r.getLuminance()) + .05)
      }, l.isReadable = function(t, e, n) {
        var r, i, o = l.readability(t, e);
        switch (i = !1, (r = function(t) {
          var e, n;
          e = ((t = t || {
            level: "AA",
            size: "small"
          }).level || "AA").toUpperCase(), n = (t.size || "small").toLowerCase(), "AA" !== e && "AAA" !== e && (e = "AA");
          "small" !== n && "large" !== n && (n = "small");
          return {
            level: e,
            size: n
          }
        }(n)).level + r.size) {
          case "AAsmall":
          case "AAAlarge":
            i = 4.5 <= o;
            break;
          case "AAlarge":
            i = 3 <= o;
            break;
          case "AAAsmall":
            i = 7 <= o
        }
        return i
      }, l.mostReadable = function(t, e, n) {
        var r, i, o, a, s = null,
          c = 0;
        i = (n = n || {}).includeFallbackColors, o = n.level, a = n.size;
        for (var u = 0; u < e.length; u++) c < (r = l.readability(t, e[u])) && (c = r, s = l(e[u]));
        return l.isReadable(t, s, {
          level: o,
          size: a
        }) || !i ? s : (n.includeFallbackColors = !1, l.mostReadable(t, ["#fff", "#000"], n))
      };
      var S = l.names = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32"
        },
        R = l.hexNames = function(t) {
          var e = {};
          for (var n in t) t.hasOwnProperty(n) && (e[t[n]] = n);
          return e
        }(S);

      function I(t) {
        return t = parseFloat(t), (isNaN(t) || t < 0 || 1 < t) && (t = 1), t
      }

      function L(t, e) {
        var n;
        "string" == typeof(n = t) && -1 != n.indexOf(".") && 1 === parseFloat(n) && (t = "100%");
        var r, i = "string" == typeof(r = t) && -1 != r.indexOf("%");
        return t = d(e, g(0, parseFloat(t))), i && (t = parseInt(t * e, 10) / 100), h.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
      }

      function M(t) {
        return d(1, g(0, t))
      }

      function B(t) {
        return parseInt(t, 16)
      }

      function C(t) {
        return 1 == t.length ? "0" + t : "" + t
      }

      function P(t) {
        return t <= 1 && (t = 100 * t + "%"), t
      }

      function O(t) {
        return h.round(255 * parseFloat(t)).toString(16)
      }

      function F(t) {
        return B(t) / 255
      }
      var N, q, j, U = (q = "[\\s|\\(]+(" + (N = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")\\s*\\)?", j = "[\\s|\\(]+(" + N + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")\\s*\\)?", {
        CSS_UNIT: new RegExp(N),
        rgb: new RegExp("rgb" + q),
        rgba: new RegExp("rgba" + j),
        hsl: new RegExp("hsl" + q),
        hsla: new RegExp("hsla" + j),
        hsv: new RegExp("hsv" + q),
        hsva: new RegExp("hsva" + j),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      });

      function D(t) {
        return !!U.CSS_UNIT.exec(t)
      }
      void 0 !== k && k.exports ? k.exports = l : "function" == typeof define && define.amd ? define(function() {
        return l
      }) : window.tinycolor = l
    }(Math)
  }, {}],
  275: [function(E, t, A) {
    (function(t, r) {
      "use strict";
      var i = E("bit-twiddle"),
        e = E("dup");
      t.__TYPEDARRAY_POOL || (t.__TYPEDARRAY_POOL = {
        UINT8: e([32, 0]),
        UINT16: e([32, 0]),
        UINT32: e([32, 0]),
        INT8: e([32, 0]),
        INT16: e([32, 0]),
        INT32: e([32, 0]),
        FLOAT: e([32, 0]),
        DOUBLE: e([32, 0]),
        DATA: e([32, 0]),
        UINT8C: e([32, 0]),
        BUFFER: e([32, 0])
      });
      var n = "undefined" != typeof Uint8ClampedArray,
        o = t.__TYPEDARRAY_POOL;
      o.UINT8C || (o.UINT8C = e([32, 0])), o.BUFFER || (o.BUFFER = e([32, 0]));
      var a = o.DATA,
        s = o.BUFFER;

      function c(t) {
        if (t) {
          var e = t.length || t.byteLength,
            n = i.log2(e);
          a[n].push(t)
        }
      }

      function u(t) {
        t = i.nextPow2(t);
        var e = i.log2(t),
          n = a[e];
        return 0 < n.length ? n.pop() : new ArrayBuffer(t)
      }

      function l(t) {
        return new Uint8Array(u(t), 0, t)
      }

      function h(t) {
        return new Uint16Array(u(2 * t), 0, t)
      }

      function f(t) {
        return new Uint32Array(u(4 * t), 0, t)
      }

      function p(t) {
        return new Int8Array(u(t), 0, t)
      }

      function d(t) {
        return new Int16Array(u(2 * t), 0, t)
      }

      function g(t) {
        return new Int32Array(u(4 * t), 0, t)
      }

      function v(t) {
        return new Float32Array(u(4 * t), 0, t)
      }

      function m(t) {
        return new Float64Array(u(8 * t), 0, t)
      }

      function y(t) {
        return n ? new Uint8ClampedArray(u(t), 0, t) : l(t)
      }

      function b(t) {
        return new DataView(u(t), 0, t)
      }

      function _(t) {
        t = i.nextPow2(t);
        var e = i.log2(t),
          n = s[e];
        return 0 < n.length ? n.pop() : new r(t)
      }
      A.free = function(t) {
        if (r.isBuffer(t)) s[i.log2(t.length)].push(t);
        else {
          if ("[object ArrayBuffer]" !== Object.prototype.toString.call(t) && (t = t.buffer), !t) return;
          var e = t.length || t.byteLength,
            n = 0 | i.log2(e);
          a[n].push(t)
        }
      }, A.freeUint8 = A.freeUint16 = A.freeUint32 = A.freeInt8 = A.freeInt16 = A.freeInt32 = A.freeFloat32 = A.freeFloat = A.freeFloat64 = A.freeDouble = A.freeUint8Clamped = A.freeDataView = function(t) {
        c(t.buffer)
      }, A.freeArrayBuffer = c, A.freeBuffer = function(t) {
        s[i.log2(t.length)].push(t)
      }, A.malloc = function(t, e) {
        if (void 0 === e || "arraybuffer" === e) return u(t);
        switch (e) {
          case "uint8":
            return l(t);
          case "uint16":
            return h(t);
          case "uint32":
            return f(t);
          case "int8":
            return p(t);
          case "int16":
            return d(t);
          case "int32":
            return g(t);
          case "float":
          case "float32":
            return v(t);
          case "double":
          case "float64":
            return m(t);
          case "uint8_clamped":
            return y(t);
          case "buffer":
            return _(t);
          case "data":
          case "dataview":
            return b(t);
          default:
            return null
        }
        return null
      }, A.mallocArrayBuffer = u, A.mallocUint8 = l, A.mallocUint16 = h, A.mallocUint32 = f, A.mallocInt8 = p, A.mallocInt16 = d, A.mallocInt32 = g, A.mallocFloat32 = A.mallocFloat = v, A.mallocFloat64 = A.mallocDouble = m, A.mallocUint8Clamped = y, A.mallocDataView = b, A.mallocBuffer = _, A.clearCache = function() {
        for (var t = 0; t < 32; ++t) o.UINT8[t].length = 0, o.UINT16[t].length = 0, o.UINT32[t].length = 0, o.INT8[t].length = 0, o.INT16[t].length = 0, o.INT32[t].length = 0, o.FLOAT[t].length = 0, o.DOUBLE[t].length = 0, o.UINT8C[t].length = 0, a[t].length = 0, s[t].length = 0
      }
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, E("buffer").Buffer)
  }, {
    "bit-twiddle": 37,
    buffer: 38,
    dup: 45
  }],
  276: [function(t, e, n) {
    "use strict";
    e.exports = function(t, e, n) {
      return 0 === t.length ? t : e ? (n || t.sort(e), function(t, e) {
        for (var n = 1, r = t.length, i = t[0], o = t[0], a = 1; a < r; ++a)
          if (o = i, e(i = t[a], o)) {
            if (a === n) {
              n++;
              continue
            }
            t[n++] = i
          } return t.length = n, t
      }(t, e)) : (n || t.sort(), function(t) {
        for (var e = 1, n = t.length, r = t[0], i = t[0], o = 1; o < n; ++o, i = r)
          if (i = r, (r = t[o]) !== i) {
            if (o === e) {
              e++;
              continue
            }
            t[e++] = r
          } return t.length = e, t
      }(t))
    }
  }, {}],
  277: [function(t, e, n) {
    var r = t("./hidden-store.js");
    e.exports = function() {
      var n = {};
      return function(t) {
        if (("object" != typeof t || null === t) && "function" != typeof t) throw new Error("Weakmap-shim: Key must be object");
        var e = t.valueOf(n);
        return e && e.identity === n ? e : r(t, n)
      }
    }
  }, {
    "./hidden-store.js": 278
  }],
  278: [function(t, e, n) {
    e.exports = function(t, e) {
      var n = {
          identity: e
        },
        r = t.valueOf;
      return Object.defineProperty(t, "valueOf", {
        value: function(t) {
          return t !== e ? r.apply(this, arguments) : n
        },
        writable: !0
      }), n
    }
  }, {}],
  279: [function(t, e, n) {
    var i = t("./create-store.js");
    e.exports = function() {
      var r = i();
      return {
        get: function(t, e) {
          var n = r(t);
          return n.hasOwnProperty("value") ? n.value : e
        },
        set: function(t, e) {
          return r(t).value = e, this
        },
        has: function(t) {
          return "value" in r(t)
        },
        delete: function(t) {
          return delete r(t).value
        }
      }
    }
  }, {
    "./create-store.js": 277
  }]
}, {}, [22]);
