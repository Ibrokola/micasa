function dropdownEffectData(e) {
    var t = null,
        n = null,
        i = $(e),
        o = $(".dropdown-menu", e),
        r = i.parents("ul.nav");
    return r.height > 0 && (t = r.data("dropdown-in") || null, n = r.data("dropdown-out") || null), {
        target: e,
        dropdown: i,
        dropdownMenu: o,
        effectIn: o.data("dropdown-in") || t,
        effectOut: o.data("dropdown-out") || n
    }
}

function dropdownEffectStart(e, t) {
    t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass("animated"), e.dropdownMenu.addClass(t))
}

function dropdownEffectEnd(e, t) {
    e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass("animated"), e.dropdownMenu.removeClass(e.effectIn), e.dropdownMenu.removeClass(e.effectOut), "function" == typeof t && t()
    })
}
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, i, o) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, o)
        },
        easeInQuad: function(e, t, n, i, o) {
            return i * (t /= o) * t + n
        },
        easeOutQuad: function(e, t, n, i, o) {
            return -i * (t /= o) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, i, o) {
            return i * (t /= o) * t * t + n
        },
        easeOutCubic: function(e, t, n, i, o) {
            return i * ((t = t / o - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, i, o) {
            return i * (t /= o) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, i, o) {
            return -i * ((t = t / o - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, i, o) {
            return i * (t /= o) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, i, o) {
            return i * ((t = t / o - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, i, o) {
            return -i * Math.cos(t / o * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(e, t, n, i, o) {
            return i * Math.sin(t / o * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, i, o) {
            return -i / 2 * (Math.cos(Math.PI * t / o) - 1) + n
        },
        easeInExpo: function(e, t, n, i, o) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / o - 1)) + n
        },
        easeOutExpo: function(e, t, n, i, o) {
            return t == o ? n + i : i * (1 - Math.pow(2, -10 * t / o)) + n
        },
        easeInOutExpo: function(e, t, n, i, o) {
            return 0 == t ? n : t == o ? n + i : (t /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
        },
        easeInCirc: function(e, t, n, i, o) {
            return -i * (Math.sqrt(1 - (t /= o) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, i, o) {
            return i * Math.sqrt(1 - (t = t / o - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, i, o) {
            var r = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= o)) return n + i;
            if (a || (a = .3 * o), s < Math.abs(i)) {
                s = i;
                var r = a / 4
            } else var r = a / (2 * Math.PI) * Math.asin(i / s);
            return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a)) + n
        },
        easeOutElastic: function(e, t, n, i, o) {
            var r = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= o)) return n + i;
            if (a || (a = .3 * o), s < Math.abs(i)) {
                s = i;
                var r = a / 4
            } else var r = a / (2 * Math.PI) * Math.asin(i / s);
            return s * Math.pow(2, -10 * t) * Math.sin((t * o - r) * (2 * Math.PI) / a) + i + n
        },
        easeInOutElastic: function(e, t, n, i, o) {
            var r = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (2 == (t /= o / 2)) return n + i;
            if (a || (a = o * (.3 * 1.5)), s < Math.abs(i)) {
                s = i;
                var r = a / 4
            } else var r = a / (2 * Math.PI) * Math.asin(i / s);
            return t < 1 ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a)) + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) * .5 + i + n
        },
        easeInBack: function(e, t, n, i, o, r) {
            return void 0 == r && (r = 1.70158), i * (t /= o) * t * ((r + 1) * t - r) + n
        },
        easeOutBack: function(e, t, n, i, o, r) {
            return void 0 == r && (r = 1.70158), i * ((t = t / o - 1) * t * ((r + 1) * t + r) + 1) + n
        },
        easeInOutBack: function(e, t, n, i, o, r) {
            return void 0 == r && (r = 1.70158), (t /= o / 2) < 1 ? i / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + n : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + n
        },
        easeInBounce: function(e, t, n, i, o) {
            return i - jQuery.easing.easeOutBounce(e, o - t, 0, i, o) + n
        },
        easeOutBounce: function(e, t, n, i, o) {
            return (t /= o) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, i, o) {
            return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, i, o) + .5 * i + n
        }
    }),
    function(e) {
        e.Package ? Materialize = {} : e.Materialize = {}
    }(window), Materialize.guid = function() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
    }(), Materialize.elementOrParentIsFixed = function(e) {
        var t = $(e),
            n = t.add(t.parents()),
            i = !1;
        return n.each(function() {
            if ("fixed" === $(this).css("position")) return i = !0, !1
        }), i
    };
var Vel;
Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity, jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(e) {
        function t(e) {
            var t = e.length,
                i = n.type(e);
            return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        if (!e.jQuery) {
            var n = function(e, t) {
                return new n.fn.init(e, t)
            };
            n.isWindow = function(e) {
                return null != e && e == e.window
            }, n.type = function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[a.call(e)] || "object" : typeof e
            }, n.isArray = Array.isArray || function(e) {
                return "array" === n.type(e)
            }, n.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
                try {
                    if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e);
                return void 0 === t || r.call(e, t)
            }, n.each = function(e, n, i) {
                var o = 0,
                    r = e.length,
                    a = t(e);
                if (i) {
                    if (a)
                        for (; r > o && n.apply(e[o], i) !== !1; o++);
                    else
                        for (o in e)
                            if (n.apply(e[o], i) === !1) break
                } else if (a)
                    for (; r > o && n.call(e[o], o, e[o]) !== !1; o++);
                else
                    for (o in e)
                        if (n.call(e[o], o, e[o]) === !1) break;
                return e
            }, n.data = function(e, t, o) {
                if (void 0 === o) {
                    var r = e[n.expando],
                        a = r && i[r];
                    if (void 0 === t) return a;
                    if (a && t in a) return a[t]
                } else if (void 0 !== t) {
                    var r = e[n.expando] || (e[n.expando] = ++n.uuid);
                    return i[r] = i[r] || {}, i[r][t] = o, o
                }
            }, n.removeData = function(e, t) {
                var o = e[n.expando],
                    r = o && i[o];
                r && n.each(t, function(e, t) {
                    delete r[t]
                })
            }, n.extend = function() {
                var e, t, i, o, r, a, s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                    if (null != (r = arguments[l]))
                        for (o in r) e = s[o], i = r[o], s !== i && (c && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[o] = n.extend(c, a, i)) : void 0 !== i && (s[o] = i));
                return s
            }, n.queue = function(e, i, o) {
                if (e) {
                    i = (i || "fx") + "queue";
                    var r = n.data(e, i);
                    return o ? (!r || n.isArray(o) ? r = n.data(e, i, function(e, n) {
                        var i = n || [];
                        return null != e && (t(Object(e)) ? function(e, t) {
                            for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
                            if (n !== n)
                                for (; void 0 !== t[i];) e[o++] = t[i++];
                            e.length = o, e
                        }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                    }(o)) : r.push(o), r) : r || []
                }
            }, n.dequeue = function(e, t) {
                n.each(e.nodeType ? [e] : e, function(e, i) {
                    t = t || "fx";
                    var o = n.queue(i, t),
                        r = o.shift();
                    "inprogress" === r && (r = o.shift()), r && ("fx" === t && o.unshift("inprogress"), r.call(i, function() {
                        n.dequeue(i, t)
                    }))
                })
            }, n.fn = n.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        i = this.offset(),
                        o = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : n(e).offset();
                    return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: i.top - o.top,
                        left: i.left - o.left
                    }
                }
            };
            var i = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var o = {}, r = o.hasOwnProperty, a = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) o["[object " + s[l] + "]"] = s[l].toLowerCase();
            n.fn.init.prototype = n.fn, e.Velocity = {
                Utilities: n
            }
        }
    }(window), function(e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
        return function(e, t, n, i) {
            function o(e) {
                for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                    var o = e[t];
                    o && i.push(o)
                }
                return i
            }

            function r(e) {
                return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e
            }

            function a(e) {
                var t = p.data(e, "velocity");
                return null === t ? i : t
            }

            function s(e) {
                return function(t) {
                    return Math.round(t * e) * (1 / e)
                }
            }

            function l(e, n, i, o) {
                function r(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function a(e, t) {
                    return 3 * t - 6 * e
                }

                function s(e) {
                    return 3 * e
                }

                function l(e, t, n) {
                    return ((r(t, n) * e + a(t, n)) * e + s(t)) * e
                }

                function u(e, t, n) {
                    return 3 * r(t, n) * e * e + 2 * a(t, n) * e + s(t)
                }

                function c(t, n) {
                    for (var o = 0; m > o; ++o) {
                        var r = u(n, e, i);
                        if (0 === r) return n;
                        n -= (l(n, e, i) - t) / r
                    }
                    return n
                }

                function d() {
                    for (var t = 0; b > t; ++t) T[t] = l(t * w, e, i)
                }

                function p(t, n, o) {
                    var r, a, s = 0;
                    do {
                        a = n + (o - n) / 2, r = l(a, e, i) - t, r > 0 ? o = a : n = a
                    } while (Math.abs(r) > g && ++s < y);
                    return a
                }

                function f(t) {
                    for (var n = 0, o = 1, r = b - 1; o != r && T[o] <= t; ++o) n += w;
                    --o;
                    var a = (t - T[o]) / (T[o + 1] - T[o]),
                        s = n + a * w,
                        l = u(s, e, i);
                    return l >= v ? c(t, s) : 0 == l ? s : p(t, n, n + w)
                }

                function h() {
                    S = !0, (e != n || i != o) && d()
                }
                var m = 4,
                    v = .001,
                    g = 1e-7,
                    y = 10,
                    b = 11,
                    w = 1 / (b - 1),
                    x = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var C = 0; 4 > C; ++C)
                    if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
                e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
                var T = x ? new Float32Array(b) : new Array(b),
                    S = !1,
                    E = function(t) {
                        return S || h(), e === n && i === o ? t : 0 === t ? 0 : 1 === t ? 1 : l(f(t), n, o)
                    };
                E.getControlPoints = function() {
                    return [{
                        x: e,
                        y: n
                    }, {
                        x: i,
                        y: o
                    }]
                };
                var I = "generateBezier(" + [e, n, i, o] + ")";
                return E.toString = function() {
                    return I
                }, E
            }

            function u(e, t) {
                var n = e;
                return m.isString(e) ? b.Easings[e] || (n = !1) : n = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : !(!m.isArray(e) || 4 !== e.length) && l.apply(null, e), n === !1 && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
            }

            function c(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        n = b.State.calls.length;
                    n > 1e4 && (b.State.calls = o(b.State.calls));
                    for (var r = 0; n > r; r++)
                        if (b.State.calls[r]) {
                            var s = b.State.calls[r],
                                l = s[0],
                                u = s[2],
                                f = s[3],
                                h = !!f,
                                v = null;
                            f || (f = b.State.calls[r][3] = t - 16);
                            for (var g = Math.min((t - f) / u.duration, 1), y = 0, w = l.length; w > y; y++) {
                                var C = l[y],
                                    S = C.element;
                                if (a(S)) {
                                    var E = !1;
                                    if (u.display !== i && null !== u.display && "none" !== u.display) {
                                        if ("flex" === u.display) {
                                            var I = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            p.each(I, function(e, t) {
                                                x.setPropertyValue(S, "display", t)
                                            })
                                        }
                                        x.setPropertyValue(S, "display", u.display)
                                    }
                                    u.visibility !== i && "hidden" !== u.visibility && x.setPropertyValue(S, "visibility", u.visibility);
                                    for (var P in C)
                                        if ("element" !== P) {
                                            var k, A = C[P],
                                                O = m.isString(A.easing) ? b.Easings[A.easing] : A.easing;
                                            if (1 === g) k = A.endValue;
                                            else {
                                                var M = A.endValue - A.startValue;
                                                if (k = A.startValue + M * O(g, u, M), !h && k === A.currentValue) continue
                                            }
                                            if (A.currentValue = k, "tween" === P) v = k;
                                            else {
                                                if (x.Hooks.registered[P]) {
                                                    var D = x.Hooks.getRoot(P),
                                                        F = a(S).rootPropertyValueCache[D];
                                                    F && (A.rootPropertyValue = F)
                                                }
                                                var L = x.setPropertyValue(S, P, A.currentValue + (0 === parseFloat(k) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                                                x.Hooks.registered[P] && (a(S).rootPropertyValueCache[D] = x.Normalizations.registered[D] ? x.Normalizations.registered[D]("extract", null, L[1]) : L[1]), "transform" === L[0] && (E = !0)
                                            }
                                        }
                                    u.mobileHA && a(S).transformCache.translate3d === i && (a(S).transformCache.translate3d = "(0px, 0px, 0px)", E = !0), E && x.flushTransformCache(S)
                                }
                            }
                            u.display !== i && "none" !== u.display && (b.State.calls[r][2].display = !1), u.visibility !== i && "hidden" !== u.visibility && (b.State.calls[r][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], g, Math.max(0, f + u.duration - t), f, v), 1 === g && d(r)
                        }
                }
                b.State.isTicking && T(c)
            }

            function d(e, t) {
                if (!b.State.calls[e]) return !1;
                for (var n = b.State.calls[e][0], o = b.State.calls[e][1], r = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = n.length; c > u; u++) {
                    var d = n[u].element;
                    if (t || r.loop || ("none" === r.display && x.setPropertyValue(d, "display", r.display), "hidden" === r.visibility && x.setPropertyValue(d, "visibility", r.visibility)), r.loop !== !0 && (p.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(p.queue(d)[1])) && a(d)) {
                        a(d).isAnimating = !1, a(d).rootPropertyValueCache = {};
                        var f = !1;
                        p.each(x.Lists.transforms3D, function(e, t) {
                            var n = /^scale/.test(t) ? 1 : 0,
                                o = a(d).transformCache[t];
                            a(d).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(o) && (f = !0, delete a(d).transformCache[t])
                        }), r.mobileHA && (f = !0, delete a(d).transformCache.translate3d), f && x.flushTransformCache(d), x.Values.removeClass(d, "velocity-animating")
                    }
                    if (!t && r.complete && !r.loop && u === c - 1) try {
                        r.complete.call(o, o)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    s && r.loop !== !0 && s(o), a(d) && r.loop === !0 && !t && (p.each(a(d).tweensContainer, function(e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), b(d, "reverse", {
                        loop: !0,
                        delay: r.delay
                    })), r.queue !== !1 && p.dequeue(d, r.queue)
                }
                b.State.calls[e] = !1;
                for (var h = 0, m = b.State.calls.length; m > h; h++)
                    if (b.State.calls[h] !== !1) {
                        l = !0;
                        break
                    }
                l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var p, f = function() {
                    if (n.documentMode) return n.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = n.createElement("div");
                        if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return i
                }(),
                h = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                        var n, i = (new Date).getTime();
                        return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function() {
                            t(i + n)
                        }, n)
                    }
                }(),
                m = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isNodeList: function(e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function(e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                v = !1;
            if (e.fn && e.fn.jquery ? (p = e, v = !0) : p = t.Velocity.Utilities, 8 >= f && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var g = 400,
                y = "swing",
                b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: n.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: p,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                        queue: "",
                        duration: g,
                        easing: y,
                        begin: i,
                        complete: i,
                        progress: i,
                        display: i,
                        visibility: i,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(e) {
                        p.data(e, "velocity", {
                            isSVG: m.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            t.pageYOffset !== i ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var w = function() {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, n, i) {
                    var o = {
                        x: t.x + i.dx * n,
                        v: t.v + i.dv * n,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: o.v,
                        dv: e(o)
                    }
                }

                function n(n, i) {
                    var o = {
                            dx: n.v,
                            dv: e(n)
                        },
                        r = t(n, .5 * i, o),
                        a = t(n, .5 * i, r),
                        s = t(n, i, a),
                        l = 1 / 6 * (o.dx + 2 * (r.dx + a.dx) + s.dx),
                        u = 1 / 6 * (o.dv + 2 * (r.dv + a.dv) + s.dv);
                    return n.x = n.x + l * i, n.v = n.v + u * i, n
                }
                return function e(t, i, o) {
                    var r, a, s, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        u = [0],
                        c = 0;
                    for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, o = o || null, l.tension = t, l.friction = i, r = null !== o, r ? (c = e(t, i), a = c / o * .016) : a = .016; s = n(s || l, a), u.push(1 + s.x), c += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                    return r ? function(e) {
                        return u[e * (u.length - 1) | 0]
                    } : c
                }
            }();
            b.Easings = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function(e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, p.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(e, t) {
                b.Easings[t[0]] = l.apply(null, t[1])
            });
            var x = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var e = 0; e < x.Lists.colors.length; e++) {
                            var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var n, i, o;
                        if (f)
                            for (n in x.Hooks.templates) {
                                i = x.Hooks.templates[n], o = i[0].split(" ");
                                var r = i[1].match(x.RegEx.valueSplit);
                                "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), x.Hooks.templates[n] = [o.join(" "), r.join(" ")])
                            }
                        for (n in x.Hooks.templates) {
                            i = x.Hooks.templates[n], o = i[0].split(" ");
                            for (var e in o) {
                                var a = n + o[e],
                                    s = e;
                                x.Hooks.registered[a] = [n, s]
                            }
                        }
                    },
                    getRoot: function(e) {
                        var t = x.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                    },
                    extractValue: function(e, t) {
                        var n = x.Hooks.registered[e];
                        if (n) {
                            var i = n[0],
                                o = n[1];
                            return t = x.Hooks.cleanRootPropertyValue(i, t), t.toString().match(x.RegEx.valueSplit)[o]
                        }
                        return t
                    },
                    injectValue: function(e, t, n) {
                        var i = x.Hooks.registered[e];
                        if (i) {
                            var o, r = i[0],
                                a = i[1];
                            return n = x.Hooks.cleanRootPropertyValue(r, n), o = n.toString().match(x.RegEx.valueSplit), o[a] = t, o.join(" ")
                        }
                        return n
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, n) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var i;
                                    return x.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(x.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                                case "inject":
                                    return "rect(" + n + ")"
                            }
                        },
                        blur: function(e, t, n) {
                            switch (e) {
                                case "name":
                                    return b.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var i = parseFloat(n);
                                    if (!i && 0 !== i) {
                                        var o = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        i = o ? o[1] : 0
                                    }
                                    return i;
                                case "inject":
                                    return parseFloat(n) ? "blur(" + n + ")" : "none"
                            }
                        },
                        opacity: function(e, t, n) {
                            if (8 >= f) switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return n = i ? i[1] / 100 : 1;
                                case "inject":
                                    return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                            } else switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return n;
                                case "inject":
                                    return n
                            }
                        }
                    },
                    register: function() {
                        9 >= f || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                        for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
                            var t = x.Lists.transformsBase[e];
                            x.Normalizations.registered[t] = function(e, n, o) {
                                switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return a(n) === i || a(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : a(n).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var r = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                            case "translate":
                                                r = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                break;
                                            case "scal":
                                            case "scale":
                                                b.State.isAndroid && a(n).transformCache[t] === i && 1 > o && (o = 1), r = !/(\d)$/i.test(o);
                                                break;
                                            case "skew":
                                                r = !/(deg|\d)$/i.test(o);
                                                break;
                                            case "rotate":
                                                r = !/(deg|\d)$/i.test(o)
                                        }
                                        return r || (a(n).transformCache[t] = "(" + o + ")"), a(n).transformCache[t]
                                }
                            }
                        }();
                        for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
                            var t = x.Lists.colors[e];
                            x.Normalizations.registered[t] = function(e, n, o) {
                                switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var r;
                                        if (x.RegEx.wrappedValueAlreadyExtracted.test(o)) r = o;
                                        else {
                                            var a, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(o) ? a = s[o] !== i ? s[o] : s.black : x.RegEx.isHex.test(o) ? a = "rgb(" + x.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (a = s.black), r = (a || o).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= f || 3 !== r.split(" ").length || (r += " 1"), r;
                                    case "inject":
                                        return 8 >= f ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g, function(e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (f || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function(e) {
                        if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                            var o;
                            if (o = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                    return e.toUpperCase()
                                }), m.isString(b.State.prefixElement.style[o])) return b.State.prefixMatches[e] = o, [o, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t, n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                            return t + t + n + n + i + i
                        }), t = n.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function(e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function(e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    },
                    removeClass: function(e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(e, n, o, r) {
                    function s(e, n) {
                        function o() {
                            u && x.setPropertyValue(e, "display", "none")
                        }
                        var l = 0;
                        if (8 >= f) l = p.css(e, n);
                        else {
                            var u = !1;
                            if (/^(width|height)$/.test(n) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !r) {
                                if ("height" === n && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                    return o(), c
                                }
                                if ("width" === n && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var d = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                    return o(), d
                                }
                            }
                            var h;
                            h = a(e) === i ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), l = 9 === f && "filter" === n ? h.getPropertyValue(n) : h[n], ("" === l || null === l) && (l = e.style[n]), o()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                            var m = s(e, "position");
                            ("fixed" === m || "absolute" === m && /top|left/i.test(n)) && (l = p(e).position()[n] + "px")
                        }
                        return l
                    }
                    var l;
                    if (x.Hooks.registered[n]) {
                        var u = n,
                            c = x.Hooks.getRoot(u);
                        o === i && (o = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (o = x.Normalizations.registered[c]("extract", e, o)), l = x.Hooks.extractValue(u, o)
                    } else if (x.Normalizations.registered[n]) {
                        var d, h;
                        d = x.Normalizations.registered[n]("name", e), "transform" !== d && (h = s(e, x.Names.prefixCheck(d)[0]), x.Values.isCSSNullValue(h) && x.Hooks.templates[n] && (h = x.Hooks.templates[n][1])), l = x.Normalizations.registered[n]("extract", e, h)
                    }
                    if (!/^[\d-]/.test(l))
                        if (a(e) && a(e).isSVG && x.Names.SVGAttribute(n))
                            if (/^(height|width)$/i.test(n)) try {
                                l = e.getBBox()[n]
                            } catch (e) {
                                l = 0
                            } else l = e.getAttribute(n);
                            else l = s(e, x.Names.prefixCheck(n)[0]);
                    return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
                },
                setPropertyValue: function(e, n, i, o, r) {
                    var s = n;
                    if ("scroll" === n) r.container ? r.container["scroll" + r.direction] = i : "Left" === r.direction ? t.scrollTo(i, r.alternateValue) : t.scrollTo(r.alternateValue, i);
                    else if (x.Normalizations.registered[n] && "transform" === x.Normalizations.registered[n]("name", e)) x.Normalizations.registered[n]("inject", e, i), s = "transform", i = a(e).transformCache[n];
                    else {
                        if (x.Hooks.registered[n]) {
                            var l = n,
                                u = x.Hooks.getRoot(n);
                            o = o || x.getPropertyValue(e, u), i = x.Hooks.injectValue(l, i, o), n = u
                        }
                        if (x.Normalizations.registered[n] && (i = x.Normalizations.registered[n]("inject", e, i), n = x.Normalizations.registered[n]("name", e)), s = x.Names.prefixCheck(n)[0], 8 >= f) try {
                            e.style[s] = i
                        } catch (e) {
                            b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                        } else a(e) && a(e).isSVG && x.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
                        b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                    }
                    return [s, i]
                },
                flushTransformCache: function(e) {
                    function t(t) {
                        return parseFloat(x.getPropertyValue(e, t))
                    }
                    var n = "";
                    if ((f || b.State.isAndroid && !b.State.isChrome) && a(e).isSVG) {
                        var i = {
                            translate: [t("translateX"), t("translateY")],
                            skewX: [t("skewX")],
                            skewY: [t("skewY")],
                            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                            rotate: [t("rotateZ"), 0, 0]
                        };
                        p.each(a(e).transformCache, function(e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
                        })
                    } else {
                        var o, r;
                        p.each(a(e).transformCache, function(t) {
                            return o = a(e).transformCache[t], "transformPerspective" === t ? (r = o, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(n += t + o + " "))
                        }), r && (n = "perspective" + r + " " + n)
                    }
                    x.setPropertyValue(e, "transform", n)
                }
            };
            x.Hooks.register(), x.Normalizations.register(), b.hook = function(e, t, n) {
                var o = i;
                return e = r(e), p.each(e, function(e, r) {
                    if (a(r) === i && b.init(r), n === i) o === i && (o = b.CSS.getPropertyValue(r, t));
                    else {
                        var s = b.CSS.setPropertyValue(r, t, n);
                        "transform" === s[0] && b.CSS.flushTransformCache(r), o = s
                    }
                }), o
            };
            var C = function() {
                function e() {
                    return s ? P.promise || null : l
                }

                function o() {
                    function e(e) {
                        function d(e, t) {
                            var n = i,
                                o = i,
                                a = i;
                            return m.isArray(e) ? (n = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? a = e[1] : (m.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (o = t ? e[1] : u(e[1], s.duration), e[2] !== i && (a = e[2]))) : n = e, t || (o = o || s.easing), m.isFunction(n) && (n = n.call(r, S, T)), m.isFunction(a) && (a = a.call(r, S, T)), [n || 0, o, a]
                        }

                        function f(e, t) {
                            var n, i;
                            return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                return n = e, ""
                            }), n || (n = x.Values.getUnitType(e)), [i, n]
                        }
                        if (s.begin && 0 === S) try {
                            s.begin.call(h, h)
                        } catch (e) {
                            setTimeout(function() {
                                throw e
                            }, 1)
                        }
                        if ("scroll" === k) {
                            var g, w, C, E = /^x$/i.test(s.axis) ? "Left" : "Top",
                                I = parseFloat(s.offset) || 0;
                            s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, g = s.container["scroll" + E], C = g + p(r).position()[E.toLowerCase()] + I) : s.container = null : (g = b.State.scrollAnchor[b.State["scrollProperty" + E]], w = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === E ? "Top" : "Left")]], C = p(r).offset()[E.toLowerCase()] + I), l = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: g,
                                    currentValue: g,
                                    endValue: C,
                                    unitType: "",
                                    easing: s.easing,
                                    scrollData: {
                                        container: s.container,
                                        direction: E,
                                        alternateValue: w
                                    }
                                },
                                element: r
                            }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, r)
                        } else if ("reverse" === k) {
                            if (!a(r).tweensContainer) return void p.dequeue(r, s.queue);
                            "none" === a(r).opts.display && (a(r).opts.display = "auto"), "hidden" === a(r).opts.visibility && (a(r).opts.visibility = "visible"), a(r).opts.loop = !1, a(r).opts.begin = null, a(r).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = p.extend({}, a(r).opts, s);
                            var A = p.extend(!0, {}, a(r).tweensContainer);
                            for (var O in A)
                                if ("element" !== O) {
                                    var M = A[O].startValue;
                                    A[O].startValue = A[O].currentValue = A[O].endValue, A[O].endValue = M, m.isEmptyObject(y) || (A[O].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + O + "): " + JSON.stringify(A[O]), r)
                                }
                            l = A
                        } else if ("start" === k) {
                            var A;
                            a(r).tweensContainer && a(r).isAnimating === !0 && (A = a(r).tweensContainer), p.each(v, function(e, t) {
                                if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                    var n = d(t, !0),
                                        o = n[0],
                                        r = n[1],
                                        a = n[2];
                                    if (x.RegEx.isHex.test(o)) {
                                        for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(o), u = a ? x.Values.hexToRgb(a) : i, c = 0; c < s.length; c++) {
                                            var p = [l[c]];
                                            r && p.push(r), u !== i && p.push(u[c]), v[e + s[c]] = p
                                        }
                                        delete v[e]
                                    }
                                }
                            });
                            for (var D in v) {
                                var F = d(v[D]),
                                    N = F[0],
                                    R = F[1],
                                    _ = F[2];
                                D = x.Names.camelCase(D);
                                var z = x.Hooks.getRoot(D),
                                    H = !1;
                                if (a(r).isSVG || "tween" === z || x.Names.prefixCheck(z)[1] !== !1 || x.Normalizations.registered[z] !== i) {
                                    (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(D) && !_ && 0 !== N && (_ = 0), s._cacheValues && A && A[D] ? (_ === i && (_ = A[D].endValue + A[D].unitType), H = a(r).rootPropertyValueCache[z]) : x.Hooks.registered[D] ? _ === i ? (H = x.getPropertyValue(r, z), _ = x.getPropertyValue(r, D, H)) : H = x.Hooks.templates[z][1] : _ === i && (_ = x.getPropertyValue(r, D));
                                    var j, $, W, q = !1;
                                    if (j = f(D, _), _ = j[0], W = j[1], j = f(D, N), N = j[0].replace(/^([+-\/*])=/, function(e, t) {
                                            return q = t, ""
                                        }), $ = j[1], _ = parseFloat(_) || 0, N = parseFloat(N) || 0, "%" === $ && (/^(fontSize|lineHeight)$/.test(D) ? (N /= 100, $ = "em") : /^scale/.test(D) ? (N /= 100, $ = "") : /(Red|Green|Blue)$/i.test(D) && (N = N / 100 * 255, $ = "")), /[\/*]/.test(q)) $ = W;
                                    else if (W !== $ && 0 !== _)
                                        if (0 === N) $ = W;
                                        else {
                                            o = o || function() {
                                                var e = {
                                                        myParent: r.parentNode || n.body,
                                                        position: x.getPropertyValue(r, "position"),
                                                        fontSize: x.getPropertyValue(r, "fontSize")
                                                    },
                                                    i = e.position === L.lastPosition && e.myParent === L.lastParent,
                                                    o = e.fontSize === L.lastFontSize;
                                                L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                                                var s = 100,
                                                    l = {};
                                                if (o && i) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                                                else {
                                                    var u = a(r).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                                    b.init(u), e.myParent.appendChild(u), p.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                        b.CSS.setPropertyValue(u, t, "hidden")
                                                    }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                        b.CSS.setPropertyValue(u, t, s + "%")
                                                    }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                                                }
                                                return null === L.remToPx && (L.remToPx = parseFloat(x.getPropertyValue(n.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), r), l
                                            }();
                                            var Y = /margin|padding|left|right|width|text|word|letter/i.test(D) || /X$/.test(D) || "x" === D ? "x" : "y";
                                            switch (W) {
                                                case "%":
                                                    _ *= "x" === Y ? o.percentToPxWidth : o.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    _ *= o[W + "ToPx"]
                                            }
                                            switch ($) {
                                                case "%":
                                                    _ *= 1 / ("x" === Y ? o.percentToPxWidth : o.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    _ *= 1 / o[$ + "ToPx"]
                                            }
                                        }
                                    switch (q) {
                                        case "+":
                                            N = _ + N;
                                            break;
                                        case "-":
                                            N = _ - N;
                                            break;
                                        case "*":
                                            N *= _;
                                            break;
                                        case "/":
                                            N = _ / N
                                    }
                                    l[D] = {
                                        rootPropertyValue: H,
                                        startValue: _,
                                        currentValue: _,
                                        endValue: N,
                                        unitType: $,
                                        easing: R
                                    }, b.debug && console.log("tweensContainer (" + D + "): " + JSON.stringify(l[D]), r)
                                } else b.debug && console.log("Skipping [" + z + "] due to a lack of browser support.")
                            }
                            l.element = r
                        }
                        l.element && (x.Values.addClass(r, "velocity-animating"), V.push(l), "" === s.queue && (a(r).tweensContainer = l, a(r).opts = s), a(r).isAnimating = !0, S === T - 1 ? (b.State.calls.push([V, h, s, null, P.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : S++)
                    }
                    var o, r = this,
                        s = p.extend({}, b.defaults, y),
                        l = {};
                    switch (a(r) === i && b.init(r), parseFloat(s.delay) && s.queue !== !1 && p.queue(r, s.queue, function(e) {
                        b.velocityQueueEntryFlag = !0, a(r).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(s.delay)),
                            next: e
                        }
                    }), s.duration.toString().toLowerCase()) {
                        case "fast":
                            s.duration = 200;
                            break;
                        case "normal":
                            s.duration = g;
                            break;
                        case "slow":
                            s.duration = 600;
                            break;
                        default:
                            s.duration = parseFloat(s.duration) || 1
                    }
                    b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(r))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : p.queue(r, s.queue, function(t, n) {
                        return n === !0 ? (P.promise && P.resolver(h), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
                    }), "" !== s.queue && "fx" !== s.queue || "inprogress" === p.queue(r)[0] || p.dequeue(r)
                }
                var s, l, f, h, v, y, w = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
                if (m.isWrapped(this) ? (s = !1, f = 0, h = this, l = this) : (s = !0, f = 1, h = w ? arguments[0].elements || arguments[0].e : arguments[0]), h = r(h)) {
                    w ? (v = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (v = arguments[f], y = arguments[f + 1]);
                    var T = h.length,
                        S = 0;
                    if (!/^(stop|finish)$/i.test(v) && !p.isPlainObject(y)) {
                        var E = f + 1;
                        y = {};
                        for (var I = E; I < arguments.length; I++) m.isArray(arguments[I]) || !/^(fast|normal|slow)$/i.test(arguments[I]) && !/^\d/.test(arguments[I]) ? m.isString(arguments[I]) || m.isArray(arguments[I]) ? y.easing = arguments[I] : m.isFunction(arguments[I]) && (y.complete = arguments[I]) : y.duration = arguments[I]
                    }
                    var P = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    s && b.Promise && (P.promise = new b.Promise(function(e, t) {
                        P.resolver = e, P.rejecter = t
                    }));
                    var k;
                    switch (v) {
                        case "scroll":
                            k = "scroll";
                            break;
                        case "reverse":
                            k = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            p.each(h, function(e, t) {
                                a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer)
                            });
                            var A = [];
                            return p.each(b.State.calls, function(e, t) {
                                t && p.each(t[1], function(n, o) {
                                    var r = y === i ? "" : y;
                                    return r !== !0 && t[2].queue !== r && (y !== i || t[2].queue !== !1) || void p.each(h, function(n, i) {
                                        i === o && ((y === !0 || m.isString(y)) && (p.each(p.queue(i, m.isString(y) ? y : ""), function(e, t) {
                                            m.isFunction(t) && t(null, !0)
                                        }), p.queue(i, m.isString(y) ? y : "", [])), "stop" === v ? (a(i) && a(i).tweensContainer && r !== !1 && p.each(a(i).tweensContainer, function(e, t) {
                                            t.endValue = t.currentValue
                                        }), A.push(e)) : "finish" === v && (t[2].duration = 1))
                                    })
                                })
                            }), "stop" === v && (p.each(A, function(e, t) {
                                d(t, !0)
                            }), P.promise && P.resolver(h)), e();
                        default:
                            if (!p.isPlainObject(v) || m.isEmptyObject(v)) {
                                if (m.isString(v) && b.Redirects[v]) {
                                    var O = p.extend({}, y),
                                        M = O.duration,
                                        D = O.delay || 0;
                                    return O.backwards === !0 && (h = p.extend(!0, [], h).reverse()), p.each(h, function(e, t) {
                                        parseFloat(O.stagger) ? O.delay = D + parseFloat(O.stagger) * e : m.isFunction(O.stagger) && (O.delay = D + O.stagger.call(t, e, T)), O.drag && (O.duration = parseFloat(M) || (/^(callout|transition)/.test(v) ? 1e3 : g), O.duration = Math.max(O.duration * (O.backwards ? 1 - e / T : (e + 1) / T), .75 * O.duration, 200)), b.Redirects[v].call(t, t, O || {}, e, T, h, P.promise ? P : i)
                                    }), e()
                                }
                                var F = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return P.promise ? P.rejecter(new Error(F)) : console.log(F), e()
                            }
                            k = "start"
                    }
                    var L = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        V = [];
                    p.each(h, function(e, t) {
                        m.isNode(t) && o.call(t)
                    });
                    var N, O = p.extend({}, b.defaults, y);
                    if (O.loop = parseInt(O.loop), N = 2 * O.loop - 1, O.loop)
                        for (var R = 0; N > R; R++) {
                            var _ = {
                                delay: O.delay,
                                progress: O.progress
                            };
                            R === N - 1 && (_.display = O.display, _.visibility = O.visibility, _.complete = O.complete), C(h, "reverse", _)
                        }
                    return e()
                }
            };
            b = p.extend(C, b), b.animate = C;
            var T = t.requestAnimationFrame || h;
            return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function() {
                n.hidden ? (T = function(e) {
                    return setTimeout(function() {
                        e(!0)
                    }, 16)
                }, c()) : T = t.requestAnimationFrame || h
            }), e.Velocity = b, e !== t && (e.fn.velocity = C, e.fn.velocity.defaults = b.defaults), p.each(["Down", "Up"], function(e, t) {
                b.Redirects["slide" + t] = function(e, n, o, r, a, s) {
                    var l = p.extend({}, n),
                        u = l.begin,
                        c = l.complete,
                        d = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        f = {};
                    l.display === i && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                        u && u.call(a, a);
                        for (var n in d) {
                            f[n] = e.style[n];
                            var i = b.CSS.getPropertyValue(e, n);
                            d[n] = "Down" === t ? [i, 0] : [0, i]
                        }
                        f.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function() {
                        for (var t in f) e.style[t] = f[t];
                        c && c.call(a, a), s && s.resolver(a)
                    }, b(e, d, l)
                }
            }), p.each(["In", "Out"], function(e, t) {
                b.Redirects["fade" + t] = function(e, n, o, r, a, s) {
                    var l = p.extend({}, n),
                        u = {
                            opacity: "In" === t ? 1 : 0
                        },
                        c = l.complete;
                    l.complete = o !== r - 1 ? l.begin = null : function() {
                        c && c.call(a, a), s && s.resolver(a)
                    }, l.display === i && (l.display = "In" === t ? "auto" : "none"), b(this, u, l)
                }
            }), b
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function() {
        var e, t, n, i, o, r = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            a = [].indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        t = function() {
            function e() {}
            return e.prototype.extend = function(e, t) {
                var n, i;
                for (n in t) i = t[n], null == e[n] && (e[n] = i);
                return e
            }, e.prototype.isMobile = function(e) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
            }, e.prototype.createEvent = function(e, t, n, i) {
                var o;
                return null == t && (t = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(e, t, n, i)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = e) : o.eventName = e, o
            }, e.prototype.emitEvent = function(e, t) {
                return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
            }, e.prototype.addEvent = function(e, t, n) {
                return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
            }, e.prototype.removeEvent = function(e, t, n) {
                return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
            }, e.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, e
        }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
            function e() {
                this.keys = [], this.values = []
            }
            return e.prototype.get = function(e) {
                var t, n, i, o;
                for (o = this.keys, t = n = 0, i = o.length; n < i; t = ++n)
                    if (o[t] === e) return this.values[t]
            }, e.prototype.set = function(e, t) {
                var n, i, o, r;
                for (r = this.keys, n = i = 0, o = r.length; i < o; n = ++i)
                    if (r[n] === e) return void(this.values[n] = t);
                return this.keys.push(e), this.values.push(t)
            }, e
        }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
            function e() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return e.notSupported = !0, e.prototype.observe = function() {}, e
        }()), i = this.getComputedStyle || function(e, t) {
            return this.getPropertyValue = function(t) {
                var n;
                return "float" === t && (t = "styleFloat"), o.test(t) && t.replace(o, function(e, t) {
                    return t.toUpperCase()
                }), (null != (n = e.currentStyle) ? n[t] : void 0) || null
            }, this
        }, o = /(\-([a-z]){1})/g, this.WOW = function() {
            function o(e) {
                null == e && (e = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return o.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, o.prototype.init = function() {
                var e;
                return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, o.prototype.start = function() {
                var t, n, i, o;
                if (this.stopped = !1, this.boxes = function() {
                        var e, n, i, o;
                        for (i = this.element.querySelectorAll("." + this.config.boxClass), o = [], e = 0, n = i.length; e < n; e++) t = i[e], o.push(t);
                        return o
                    }.call(this), this.all = function() {
                        var e, n, i, o;
                        for (i = this.boxes, o = [], e = 0, n = i.length; e < n; e++) t = i[e], o.push(t);
                        return o
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (o = this.boxes, n = 0, i = o.length; n < i; n++) t = o[n], this.applyStyle(t, !0);
                if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new e(function(e) {
                    return function(t) {
                        var n, i, o, r, a;
                        for (a = [], n = 0, i = t.length; n < i; n++) r = t[n], a.push(function() {
                            var e, t, n, i;
                            for (n = r.addedNodes || [], i = [], e = 0, t = n.length; e < t; e++) o = n[e], i.push(this.doSync(o));
                            return i
                        }.call(e));
                        return a
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            }, o.prototype.stop = function() {
                if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
            }, o.prototype.sync = function(t) {
                if (e.notSupported) return this.doSync(this.element)
            }, o.prototype.doSync = function(e) {
                var t, n, i, o, r;
                if (null == e && (e = this.element), 1 === e.nodeType) {
                    for (e = e.parentNode || e, o = e.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; n < i; n++) t = o[n], a.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                    return r
                }
            }, o.prototype.show = function(e) {
                return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
            }, o.prototype.applyStyle = function(e, t) {
                var n, i, o;
                return i = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), o = e.getAttribute("data-wow-iteration"), this.animate(function(r) {
                    return function() {
                        return r.customStyle(e, t, i, n, o)
                    }
                }(this))
            }, o.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(e) {
                    return window.requestAnimationFrame(e)
                } : function(e) {
                    return e()
                }
            }(), o.prototype.resetStyle = function() {
                var e, t, n, i, o;
                for (i = this.boxes, o = [], t = 0, n = i.length; t < n; t++) e = i[t], o.push(e.style.visibility = "visible");
                return o
            }, o.prototype.resetAnimation = function(e) {
                var t;
                if (e.type.toLowerCase().indexOf("animationend") >= 0) return t = e.target || e.srcElement, t.className = t.className.replace(this.config.animateClass, "").trim()
            }, o.prototype.customStyle = function(e, t, n, i, o) {
                return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
                    animationDuration: n
                }), i && this.vendorSet(e.style, {
                    animationDelay: i
                }), o && this.vendorSet(e.style, {
                    animationIterationCount: o
                }), this.vendorSet(e.style, {
                    animationName: t ? "none" : this.cachedAnimationName(e)
                }), e
            }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(e, t) {
                var n, i, o, r;
                i = [];
                for (n in t) o = t[n], e["" + n] = o, i.push(function() {
                    var t, i, a, s;
                    for (a = this.vendors, s = [], t = 0, i = a.length; t < i; t++) r = a[t], s.push(e["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                    return s
                }.call(this));
                return i
            }, o.prototype.vendorCSS = function(e, t) {
                var n, o, r, a, s, l;
                for (s = i(e), a = s.getPropertyCSSValue(t), r = this.vendors, n = 0, o = r.length; n < o; n++) l = r[n], a = a || s.getPropertyCSSValue("-" + l + "-" + t);
                return a
            }, o.prototype.animationName = function(e) {
                var t;
                try {
                    t = this.vendorCSS(e, "animation-name").cssText
                } catch (n) {
                    t = i(e).getPropertyValue("animation-name")
                }
                return "none" === t ? "" : t
            }, o.prototype.cacheAnimationName = function(e) {
                return this.animationNameCache.set(e, this.animationName(e))
            }, o.prototype.cachedAnimationName = function(e) {
                return this.animationNameCache.get(e)
            }, o.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, o.prototype.scrollCallback = function() {
                var e;
                if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                        var t, n, i, o;
                        for (i = this.boxes, o = [], t = 0, n = i.length; t < n; t++)(e = i[t]) && (this.isVisible(e) ? this.show(e) : o.push(e));
                        return o
                    }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
            }, o.prototype.offsetTop = function(e) {
                for (var t; void 0 === e.offsetTop;) e = e.parentNode;
                for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
                return t
            }, o.prototype.isVisible = function(e) {
                var t, n, i, o, r;
                return n = e.getAttribute("data-wow-offset") || this.config.offset, r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(e), t = i + e.clientHeight, i <= o && t >= r
            }, o.prototype.util = function() {
                return null != this._util ? this._util : this._util = new t
            }, o.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, o
        }()
    }.call(this), $(window).scroll(function() {
        $(".navbar").offset() && ($(".navbar").offset().top > 50 ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"))
    }), $(function() {
        $("a.page-scroll").bind("click", function(e) {
            var t = $(this);
            $("html, body").stop().animate({
                scrollTop: $(t.attr("href")).offset().top
            }, 1500, "easeInOutExpo"), e.preventDefault()
        })
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return t.apply(e)
        }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
    }("object" == typeof global ? global : this, function() {
        "use strict";

        function e(e) {
            return null !== e && e === e.window
        }

        function t(t) {
            return e(t) ? t : 9 === t.nodeType && t.defaultView
        }

        function n(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }

        function i(e) {
            return n(e) && e.nodeType > 0
        }

        function o(e) {
            var t = p.call(e);
            return "[object String]" === t ? d(e) : n(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(t) && e.hasOwnProperty("length") ? e : i(e) ? [e] : []
        }

        function r(e) {
            var n, i, o = {
                    top: 0,
                    left: 0
                },
                r = e && e.ownerDocument;
            return n = r.documentElement, void 0 !== e.getBoundingClientRect && (o = e.getBoundingClientRect()), i = t(r), {
                top: o.top + i.pageYOffset - n.clientTop,
                left: o.left + i.pageXOffset - n.clientLeft
            }
        }

        function a(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
            return t
        }

        function s(e, t, n) {
            if (n) {
                n.classList.remove("waves-rippling");
                var i = n.getAttribute("data-x"),
                    o = n.getAttribute("data-y"),
                    r = n.getAttribute("data-scale"),
                    s = n.getAttribute("data-translate"),
                    l = Date.now() - Number(n.getAttribute("data-hold")),
                    u = 350 - l;
                u < 0 && (u = 0), "mousemove" === e.type && (u = 150);
                var c = "mousemove" === e.type ? 2500 : h.duration;
                setTimeout(function() {
                    var e = {
                        top: o + "px",
                        left: i + "px",
                        opacity: "0",
                        "-webkit-transition-duration": c + "ms",
                        "-moz-transition-duration": c + "ms",
                        "-o-transition-duration": c + "ms",
                        "transition-duration": c + "ms",
                        "-webkit-transform": r + " " + s,
                        "-moz-transform": r + " " + s,
                        "-ms-transform": r + " " + s,
                        "-o-transform": r + " " + s,
                        transform: r + " " + s
                    };
                    n.setAttribute("style", a(e)), setTimeout(function() {
                        try {
                            t.removeChild(n)
                        } catch (e) {
                            return !1
                        }
                    }, c)
                }, u)
            }
        }

        function l(e) {
            if (v.allowEvent(e) === !1) return null;
            for (var t = null, n = e.target || e.srcElement; null !== n.parentElement;) {
                if (n.classList.contains("waves-effect") && !(n instanceof SVGElement)) {
                    t = n;
                    break
                }
                n = n.parentElement
            }
            return t
        }

        function u(e) {
            var t = l(e);
            if (null !== t) {
                if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
                if (v.registerEvent(e), "touchstart" === e.type && h.delay) {
                    var n = !1,
                        i = setTimeout(function() {
                            i = null, h.show(e, t)
                        }, h.delay),
                        o = function(o) {
                            i && (clearTimeout(i), i = null, h.show(e, t)), n || (n = !0, h.hide(o, t))
                        },
                        r = function(e) {
                            i && (clearTimeout(i), i = null), o(e)
                        };
                    t.addEventListener("touchmove", r, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchcancel", o, !1)
                } else h.show(e, t), f && (t.addEventListener("touchend", h.hide, !1), t.addEventListener("touchcancel", h.hide, !1)), t.addEventListener("mouseup", h.hide, !1), t.addEventListener("mouseleave", h.hide, !1)
            }
        }
        var c = c || {},
            d = document.querySelectorAll.bind(document),
            p = Object.prototype.toString,
            f = "ontouchstart" in window,
            h = {
                duration: 750,
                delay: 200,
                show: function(e, t, n) {
                    if (2 === e.button) return !1;
                    t = t || this;
                    var i = document.createElement("div");
                    i.className = "waves-ripple waves-rippling", t.appendChild(i);
                    var o = r(t),
                        s = 0,
                        l = 0;
                    "touches" in e && e.touches.length ? (s = e.touches[0].pageY - o.top, l = e.touches[0].pageX - o.left) : (s = e.pageY - o.top, l = e.pageX - o.left), l = l >= 0 ? l : 0, s = s >= 0 ? s : 0;
                    var u = "scale(" + t.clientWidth / 100 * 3 + ")",
                        c = "translate(0,0)";
                    n && (c = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", l), i.setAttribute("data-y", s), i.setAttribute("data-scale", u), i.setAttribute("data-translate", c);
                    var d = {
                        top: s + "px",
                        left: l + "px"
                    };
                    i.classList.add("waves-notransition"), i.setAttribute("style", a(d)), i.classList.remove("waves-notransition"), d["-webkit-transform"] = u + " " + c, d["-moz-transform"] = u + " " + c, d["-ms-transform"] = u + " " + c, d["-o-transform"] = u + " " + c, d.transform = u + " " + c, d.opacity = "1";
                    var p = "mousemove" === e.type ? 2500 : h.duration;
                    d["-webkit-transition-duration"] = p + "ms", d["-moz-transition-duration"] = p + "ms", d["-o-transition-duration"] = p + "ms", d["transition-duration"] = p + "ms", i.setAttribute("style", a(d))
                },
                hide: function(e, t) {
                    t = t || this;
                    for (var n = t.getElementsByClassName("waves-rippling"), i = 0, o = n.length; i < o; i++) s(e, t, n[i])
                }
            },
            m = {
                input: function(e) {
                    var t = e.parentNode;
                    if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var n = document.createElement("i");
                        n.className = e.className + " waves-input-wrapper", e.className = "waves-button-input", t.replaceChild(n, e), n.appendChild(e);
                        var i = window.getComputedStyle(e, null),
                            o = i.color,
                            r = i.backgroundColor;
                        n.setAttribute("style", "color:" + o + ";background:" + r), e.setAttribute("style", "background-color:rgba(0,0,0,0);")
                    }
                },
                img: function(e) {
                    var t = e.parentNode;
                    if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var n = document.createElement("i");
                        t.replaceChild(n, e), n.appendChild(e)
                    }
                }
            },
            v = {
                touches: 0,
                allowEvent: function(e) {
                    var t = !0;
                    return /^(mousedown|mousemove)$/.test(e.type) && v.touches && (t = !1), t
                },
                registerEvent: function(e) {
                    var t = e.type;
                    "touchstart" === t ? v.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function() {
                        v.touches && (v.touches -= 1)
                    }, 500)
                }
            };
        return c.init = function(e) {
            var t = document.body;
            e = e || {}, "duration" in e && (h.duration = e.duration), "delay" in e && (h.delay = e.delay), f && (t.addEventListener("touchstart", u, !1), t.addEventListener("touchcancel", v.registerEvent, !1), t.addEventListener("touchend", v.registerEvent, !1)), t.addEventListener("mousedown", u, !1)
        }, c.attach = function(e, t) {
            e = o(e), "[object Array]" === p.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
            for (var n, i, r = 0, a = e.length; r < a; r++) n = e[r], i = n.tagName.toLowerCase(), ["input", "img"].indexOf(i) !== -1 && (m[i](n), n = n.parentElement), n.className.indexOf("waves-effect") === -1 && (n.className += " waves-effect" + t)
        }, c.ripple = function(e, t) {
            e = o(e);
            var n = e.length;
            if (t = t || {}, t.wait = t.wait || 0, t.position = t.position || null, n)
                for (var i, a, s, l = {}, u = 0, c = {
                        type: "mousedown",
                        button: 1
                    }; u < n; u++)
                    if (i = e[u], a = t.position || {
                            x: i.clientWidth / 2,
                            y: i.clientHeight / 2
                        }, s = r(i), l.x = s.left + a.x, l.y = s.top + a.y, c.pageX = l.x, c.pageY = l.y, h.show(c, i), t.wait >= 0 && null !== t.wait) {
                        var d = {
                            type: "mouseup",
                            button: 1
                        };
                        setTimeout(function(e, t) {
                            return function() {
                                h.hide(e, t)
                            }
                        }(d, i), t.wait)
                    }
        }, c.calm = function(e) {
            e = o(e);
            for (var t = {
                    type: "mouseup",
                    button: 1
                }, n = 0, i = e.length; n < i; n++) h.hide(t, e[n])
        }, c.displayEffect = function(e) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), c.init(e)
        }, c
    }), Waves.attach(".btn, .btn-floating", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(), $(document).ready(function() {
        $("#preloader-markup").load("mdb-addons/preloader.html", function() {
            $("#preloader-markup").fadeOut("slow")
        })
    }), $(".smooth-scroll").on("click", "a", function(e) {
        e.preventDefault();
        var t = $(this).attr("href"),
            n = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0;
        $("body,html").animate({
            scrollTop: $(t).offset().top - n
        }, 700)
    }),
    function(e) {
        e.fn.scrollTo = function(t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function(t) {
            var n = {
                inDuration: 300,
                outDuration: 225,
                constrain_width: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1,
                alignment: "left"
            };
            this.each(function() {
                function i() {
                    void 0 !== a.data("induration") && (s.inDuration = a.data("inDuration")), void 0 !== a.data("outduration") && (s.outDuration = a.data("outDuration")), void 0 !== a.data("constrainwidth") && (s.constrain_width = a.data("constrainwidth")), void 0 !== a.data("hover") && (s.hover = a.data("hover")), void 0 !== a.data("gutter") && (s.gutter = a.data("gutter")), void 0 !== a.data("beloworigin") && (s.belowOrigin = a.data("beloworigin")), void 0 !== a.data("alignment") && (s.alignment = a.data("alignment"))
                }

                function o(t) {
                    "focus" === t && (l = !0), i(), u.addClass("active"), a.addClass("active"), s.constrain_width === !0 ? u.css("width", a.outerWidth()) : u.css("white-space", "nowrap");
                    var n = window.innerHeight,
                        o = a.innerHeight(),
                        r = a.offset().left,
                        c = a.offset().top - e(window).scrollTop(),
                        d = s.alignment,
                        p = 0,
                        f = 0,
                        h = 0;
                    s.belowOrigin === !0 && (h = o);
                    var m = 0,
                        v = a.parent();
                    if (!v.is("body") && v[0].scrollHeight > v[0].clientHeight && (m = v[0].scrollTop), r + u.innerWidth() > e(window).width() ? d = "right" : r - u.innerWidth() + a.innerWidth() < 0 && (d = "left"), c + u.innerHeight() > n)
                        if (c + o - u.innerHeight() < 0) {
                            var g = n - c - h;
                            u.css("max-height", g)
                        } else h || (h += o), h -= u.innerHeight();
                    if ("left" === d) p = s.gutter, f = a.position().left + p;
                    else if ("right" === d) {
                        var y = a.position().left + a.outerWidth() - u.outerWidth();
                        p = -s.gutter, f = y + p
                    }
                    u.css({
                        position: "absolute",
                        top: a.position().top + h + m,
                        left: f
                    }), u.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function r() {
                    l = !1, u.fadeOut(s.outDuration), u.removeClass("active"), a.removeClass("active"), setTimeout(function() {
                        u.css("max-height", "")
                    }, s.outDuration)
                }
                var a = e(this),
                    s = e.extend({}, n, t),
                    l = !1,
                    u = e("#" + a.attr("data-activates"));
                if (i(), a.after(u), s.hover) {
                    var c = !1;
                    a.unbind("click." + a.attr("id")), a.on("mouseenter", function(e) {
                        c === !1 && (o(), c = !0)
                    }), a.on("mouseleave", function(t) {
                        e(t.toElement || t.relatedTarget).closest(".dropdown-content").is(u) || (u.stop(!0, !0), r(), c = !1)
                    }), u.on("mouseleave", function(t) {
                        e(t.toElement || t.relatedTarget).closest(".dropdown-button").is(a) || (u.stop(!0, !0), r(), c = !1)
                    })
                } else a.unbind("click." + a.attr("id")), a.bind("click." + a.attr("id"), function(t) {
                    l || (a[0] != t.currentTarget || a.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? a.hasClass("active") && (r(), e(document).unbind("click." + u.attr("id") + " touchstart." + u.attr("id"))) : (t.preventDefault(), o("click")), u.hasClass("active") && e(document).bind("click." + u.attr("id") + " touchstart." + u.attr("id"), function(t) {
                        u.is(t.target) || a.is(t.target) || a.find(t.target).length || (r(), e(document).unbind("click." + u.attr("id") + " touchstart." + u.attr("id")))
                    }))
                });
                a.on("open", function(e, t) {
                    o(t)
                }), a.on("close", r)
            })
        }, e(document).ready(function() {
            e(".dropdown-button").dropdown()
        })
    }(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");
dropdownSelectors.on({
        "show.bs.dropdown": function() {
            var e = dropdownEffectData(this);
            dropdownEffectStart(e, e.effectIn)
        },
        "shown.bs.dropdown": function() {
            var e = dropdownEffectData(this);
            e.effectIn && e.effectOut && dropdownEffectEnd(e, function() {})
        },
        "hide.bs.dropdown": function(e) {
            var t = dropdownEffectData(this);
            t.effectOut && (e.preventDefault(), dropdownEffectStart(t, t.effectOut), dropdownEffectEnd(t, function() {
                t.dropdown.removeClass("open"), t.dropdown.removeClass("show")
            }))
        }
    }),
    function(e) {
        function t(t) {
            if ($this = t, $this.hasClass("active") === !1) {
                $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                    scaleY: ".4",
                    scaleX: ".4",
                    translateY: "40px"
                }, {
                    duration: 0
                });
                var n = 0;
                $this.find("ul .btn-floating").reverse().each(function() {
                    e(this).velocity({
                        opacity: "1",
                        scaleX: "1",
                        scaleY: "1",
                        translateY: "0"
                    }, {
                        duration: 80,
                        delay: n
                    }), n += 40
                })
            } else {
                $this.removeClass("active");
                var n = 0;
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: "40px"
                }, {
                    duration: 80
                })
            }
        }
        e(document).ready(function() {
            e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(t) {
                n(e(this))
            }), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(t) {
                i(e(this))
            }), e(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function(t) {
                var o = e(this),
                    r = o.parent();
                r.hasClass("active") ? i(r) : n(r)
            })
        }), e.fn.extend({
            openFAB: function() {
                n(e(this))
            },
            closeFAB: function() {
                i(e(this))
            }
        });
        var n = function(t) {
                if ($this = t, $this.hasClass("active") === !1) {
                    var n, i, o = $this.hasClass("horizontal");
                    o === !0 ? i = 40 : n = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                        scaleY: ".4",
                        scaleX: ".4",
                        translateY: n + "px",
                        translateX: i + "px"
                    }, {
                        duration: 0
                    });
                    var r = 0;
                    $this.find("ul .btn-floating").reverse().each(function() {
                        e(this).velocity({
                            opacity: "1",
                            scaleX: "1",
                            scaleY: "1",
                            translateY: "0",
                            translateX: "0"
                        }, {
                            duration: 80,
                            delay: r
                        }), r += 40
                    })
                }
            },
            i = function(e) {
                $this = e;
                var t, n, i = $this.hasClass("horizontal");
                i === !0 ? n = 40 : t = 40, $this.removeClass("active");
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: t + "px",
                    translateX: n + "px"
                }, {
                    duration: 80
                })
            };
        e(".fixed-action-btn").on({
            click: function(n) {
                return n.preventDefault(), t(e(".fixed-action-btn")), !1
            }
        })
    }(jQuery),
    function(e, t, n, i) {
        "use strict";

        function o(e, t, n) {
            return setTimeout(u(e, n), t)
        }

        function r(e, t, n) {
            return !!Array.isArray(e) && (a(e, n[t], n), !0)
        }

        function a(e, t, n) {
            var o;
            if (e)
                if (e.forEach) e.forEach(t, n);
                else if (e.length !== i)
                for (o = 0; o < e.length;) t.call(n, e[o], o, e), o++;
            else
                for (o in e) e.hasOwnProperty(o) && t.call(n, e[o], o, e)
        }

        function s(t, n, i) {
            var o = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
            return function() {
                var n = new Error("get-stack-trace"),
                    i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    r = e.console && (e.console.warn || e.console.log);
                return r && r.call(e.console, o, i), t.apply(this, arguments)
            }
        }

        function l(e, t, n) {
            var i, o = t.prototype;
            i = e.prototype = Object.create(o), i.constructor = e, i._super = o, n && ce(i, n)
        }

        function u(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function c(e, t) {
            return typeof e == fe ? e.apply(t ? t[0] || i : i, t) : e
        }

        function d(e, t) {
            return e === i ? t : e
        }

        function p(e, t, n) {
            a(v(t), function(t) {
                e.addEventListener(t, n, !1)
            })
        }

        function f(e, t, n) {
            a(v(t), function(t) {
                e.removeEventListener(t, n, !1)
            })
        }

        function h(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function m(e, t) {
            return e.indexOf(t) > -1
        }

        function v(e) {
            return e.trim().split(/\s+/g)
        }

        function g(e, t, n) {
            if (e.indexOf && !n) return e.indexOf(t);
            for (var i = 0; i < e.length;) {
                if (n && e[i][n] == t || !n && e[i] === t) return i;
                i++
            }
            return -1
        }

        function y(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function b(e, t, n) {
            for (var i = [], o = [], r = 0; r < e.length;) {
                var a = t ? e[r][t] : e[r];
                g(o, a) < 0 && i.push(e[r]), o[r] = a, r++
            }
            return n && (i = t ? i.sort(function(e, n) {
                return e[t] > n[t]
            }) : i.sort()), i
        }

        function w(e, t) {
            for (var n, o, r = t[0].toUpperCase() + t.slice(1), a = 0; a < de.length;) {
                if (n = de[a], (o = n ? n + r : t) in e) return o;
                a++
            }
            return i
        }

        function x() {
            return be++
        }

        function C(t) {
            var n = t.ownerDocument || t;
            return n.defaultView || n.parentWindow || e
        }

        function T(e, t) {
            var n = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                c(e.options.enable, [e]) && n.handler(t)
            }, this.init()
        }

        function S(e) {
            var t = e.options.inputClass;
            return new(t ? t : Ce ? _ : Te ? j : xe ? W : R)(e, E)
        }

        function E(e, t, n) {
            var i = n.pointers.length,
                o = n.changedPointers.length,
                r = t & Ee && i - o == 0,
                a = t & (Pe | ke) && i - o == 0;
            n.isFirst = !!r, n.isFinal = !!a, r && (e.session = {}), n.eventType = t, I(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
        }

        function I(e, t) {
            var n = e.session,
                i = t.pointers,
                o = i.length;
            n.firstInput || (n.firstInput = A(t)), o > 1 && !n.firstMultiple ? n.firstMultiple = A(t) : 1 === o && (n.firstMultiple = !1);
            var r = n.firstInput,
                a = n.firstMultiple,
                s = a ? a.center : r.center,
                l = t.center = O(i);
            t.timeStamp = ve(), t.deltaTime = t.timeStamp - r.timeStamp, t.angle = L(s, l), t.distance = F(s, l), P(n, t), t.offsetDirection = D(t.deltaX, t.deltaY);
            var u = M(t.deltaTime, t.deltaX, t.deltaY);
            t.overallVelocityX = u.x, t.overallVelocityY = u.y, t.overallVelocity = me(u.x) > me(u.y) ? u.x : u.y, t.scale = a ? N(a.pointers, i) : 1, t.rotation = a ? V(a.pointers, i) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, k(n, t);
            var c = e.element;
            h(t.srcEvent.target, c) && (c = t.srcEvent.target), t.target = c
        }

        function P(e, t) {
            var n = t.center,
                i = e.offsetDelta || {},
                o = e.prevDelta || {},
                r = e.prevInput || {};
            t.eventType !== Ee && r.eventType !== Pe || (o = e.prevDelta = {
                x: r.deltaX || 0,
                y: r.deltaY || 0
            }, i = e.offsetDelta = {
                x: n.x,
                y: n.y
            }), t.deltaX = o.x + (n.x - i.x), t.deltaY = o.y + (n.y - i.y)
        }

        function k(e, t) {
            var n, o, r, a, s = e.lastInterval || t,
                l = t.timeStamp - s.timeStamp;
            if (t.eventType != ke && (l > Se || s.velocity === i)) {
                var u = t.deltaX - s.deltaX,
                    c = t.deltaY - s.deltaY,
                    d = M(l, u, c);
                o = d.x, r = d.y, n = me(d.x) > me(d.y) ? d.x : d.y, a = D(u, c), e.lastInterval = t
            } else n = s.velocity, o = s.velocityX, r = s.velocityY, a = s.direction;
            t.velocity = n, t.velocityX = o, t.velocityY = r, t.direction = a
        }

        function A(e) {
            for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
                clientX: he(e.pointers[n].clientX),
                clientY: he(e.pointers[n].clientY)
            }, n++;
            return {
                timeStamp: ve(),
                pointers: t,
                center: O(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }

        function O(e) {
            var t = e.length;
            if (1 === t) return {
                x: he(e[0].clientX),
                y: he(e[0].clientY)
            };
            for (var n = 0, i = 0, o = 0; o < t;) n += e[o].clientX, i += e[o].clientY, o++;
            return {
                x: he(n / t),
                y: he(i / t)
            }
        }

        function M(e, t, n) {
            return {
                x: t / e || 0,
                y: n / e || 0
            }
        }

        function D(e, t) {
            return e === t ? Ae : me(e) >= me(t) ? e < 0 ? Oe : Me : t < 0 ? De : Fe
        }

        function F(e, t, n) {
            n || (n = Re);
            var i = t[n[0]] - e[n[0]],
                o = t[n[1]] - e[n[1]];
            return Math.sqrt(i * i + o * o)
        }

        function L(e, t, n) {
            n || (n = Re);
            var i = t[n[0]] - e[n[0]],
                o = t[n[1]] - e[n[1]];
            return 180 * Math.atan2(o, i) / Math.PI
        }

        function V(e, t) {
            return L(t[1], t[0], _e) + L(e[1], e[0], _e)
        }

        function N(e, t) {
            return F(t[0], t[1], _e) / F(e[0], e[1], _e)
        }

        function R() {
            this.evEl = He, this.evWin = je, this.pressed = !1, T.apply(this, arguments)
        }

        function _() {
            this.evEl = qe, this.evWin = Ye, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function z() {
            this.evTarget = Xe, this.evWin = Ze, this.started = !1, T.apply(this, arguments)
        }

        function H(e, t) {
            var n = y(e.touches),
                i = y(e.changedTouches);
            return t & (Pe | ke) && (n = b(n.concat(i), "identifier", !0)), [n, i]
        }

        function j() {
            this.evTarget = Ge, this.targetIds = {}, T.apply(this, arguments)
        }

        function $(e, t) {
            var n = y(e.touches),
                i = this.targetIds;
            if (t & (Ee | Ie) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
            var o, r, a = y(e.changedTouches),
                s = [],
                l = this.target;
            if (r = n.filter(function(e) {
                    return h(e.target, l)
                }), t === Ee)
                for (o = 0; o < r.length;) i[r[o].identifier] = !0, o++;
            for (o = 0; o < a.length;) i[a[o].identifier] && s.push(a[o]), t & (Pe | ke) && delete i[a[o].identifier], o++;
            return s.length ? [b(r.concat(s), "identifier", !0), s] : void 0
        }

        function W() {
            T.apply(this, arguments);
            var e = u(this.handler, this);
            this.touch = new j(this.manager, e), this.mouse = new R(this.manager, e), this.primaryTouch = null, this.lastTouches = []
        }

        function q(e, t) {
            e & Ee ? (this.primaryTouch = t.changedPointers[0].identifier, Y.call(this, t)) : e & (Pe | ke) && Y.call(this, t)
        }

        function Y(e) {
            var t = e.changedPointers[0];
            if (t.identifier === this.primaryTouch) {
                var n = {
                    x: t.clientX,
                    y: t.clientY
                };
                this.lastTouches.push(n);
                var i = this.lastTouches,
                    o = function() {
                        var e = i.indexOf(n);
                        e > -1 && i.splice(e, 1)
                    };
                setTimeout(o, Qe)
            }
        }

        function B(e) {
            for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                var o = this.lastTouches[i],
                    r = Math.abs(t - o.x),
                    a = Math.abs(n - o.y);
                if (r <= Ke && a <= Ke) return !0
            }
            return !1
        }

        function X(e, t) {
            this.manager = e, this.set(t)
        }

        function Z(e) {
            if (m(e, it)) return it;
            var t = m(e, ot),
                n = m(e, rt);
            return t && n ? it : t || n ? t ? ot : rt : m(e, nt) ? nt : tt
        }

        function U(e) {
            this.options = ce({}, this.defaults, e || {}), this.id = x(), this.manager = null, this.options.enable = d(this.options.enable, !0), this.state = st, this.simultaneous = {}, this.requireFail = []
        }

        function G(e) {
            return e & pt ? "cancel" : e & ct ? "end" : e & ut ? "move" : e & lt ? "start" : ""
        }

        function Q(e) {
            return e == Fe ? "down" : e == De ? "up" : e == Oe ? "left" : e == Me ? "right" : ""
        }

        function K(e, t) {
            var n = t.manager;
            return n ? n.get(e) : e
        }

        function J() {
            U.apply(this, arguments)
        }

        function ee() {
            J.apply(this, arguments), this.pX = null, this.pY = null
        }

        function te() {
            J.apply(this, arguments)
        }

        function ne() {
            U.apply(this, arguments), this._timer = null, this._input = null
        }

        function ie() {
            J.apply(this, arguments)
        }

        function oe() {
            J.apply(this, arguments)
        }

        function re() {
            U.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function ae(e, t) {
            return t = t || {}, t.recognizers = d(t.recognizers, ae.defaults.preset), new se(e, t)
        }

        function se(e, t) {
            this.options = ce({}, ae.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = S(this), this.touchAction = new X(this, this.options.touchAction), le(this, !0), a(this.options.recognizers, function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }, this)
        }

        function le(e, t) {
            var n = e.element;
            if (n.style) {
                var i;
                a(e.options.cssProps, function(o, r) {
                    i = w(n.style, r), t ? (e.oldCssProps[i] = n.style[i], n.style[i] = o) : n.style[i] = e.oldCssProps[i] || ""
                }), t || (e.oldCssProps = {})
            }
        }

        function ue(e, n) {
            var i = t.createEvent("Event");
            i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
        }
        var ce, de = ["", "webkit", "Moz", "MS", "ms", "o"],
            pe = t.createElement("div"),
            fe = "function",
            he = Math.round,
            me = Math.abs,
            ve = Date.now;
        ce = "function" != typeof Object.assign ? function(e) {
            if (e === i || null === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                if (o !== i && null !== o)
                    for (var r in o) o.hasOwnProperty(r) && (t[r] = o[r])
            }
            return t
        } : Object.assign;
        var ge = s(function(e, t, n) {
                for (var o = Object.keys(t), r = 0; r < o.length;)(!n || n && e[o[r]] === i) && (e[o[r]] = t[o[r]]), r++;
                return e
            }, "extend", "Use `assign`."),
            ye = s(function(e, t) {
                return ge(e, t, !0)
            }, "merge", "Use `assign`."),
            be = 1,
            we = /mobile|tablet|ip(ad|hone|od)|android/i,
            xe = "ontouchstart" in e,
            Ce = w(e, "PointerEvent") !== i,
            Te = xe && we.test(navigator.userAgent),
            Se = 25,
            Ee = 1,
            Ie = 2,
            Pe = 4,
            ke = 8,
            Ae = 1,
            Oe = 2,
            Me = 4,
            De = 8,
            Fe = 16,
            Le = Oe | Me,
            Ve = De | Fe,
            Ne = Le | Ve,
            Re = ["x", "y"],
            _e = ["clientX", "clientY"];
        T.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(C(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(C(this.element), this.evWin, this.domHandler)
            }
        };
        var ze = {
                mousedown: Ee,
                mousemove: Ie,
                mouseup: Pe
            },
            He = "mousedown",
            je = "mousemove mouseup";
        l(R, T, {
            handler: function(e) {
                var t = ze[e.type];
                t & Ee && 0 === e.button && (this.pressed = !0), t & Ie && 1 !== e.which && (t = Pe), this.pressed && (t & Pe && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: "mouse",
                    srcEvent: e
                }))
            }
        });
        var $e = {
                pointerdown: Ee,
                pointermove: Ie,
                pointerup: Pe,
                pointercancel: ke,
                pointerout: ke
            },
            We = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            },
            qe = "pointerdown",
            Ye = "pointermove pointerup pointercancel";
        e.MSPointerEvent && !e.PointerEvent && (qe = "MSPointerDown", Ye = "MSPointerMove MSPointerUp MSPointerCancel"), l(_, T, {
            handler: function(e) {
                var t = this.store,
                    n = !1,
                    i = e.type.toLowerCase().replace("ms", ""),
                    o = $e[i],
                    r = We[e.pointerType] || e.pointerType,
                    a = "touch" == r,
                    s = g(t, e.pointerId, "pointerId");
                o & Ee && (0 === e.button || a) ? s < 0 && (t.push(e), s = t.length - 1) : o & (Pe | ke) && (n = !0), s < 0 || (t[s] = e, this.callback(this.manager, o, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: r,
                    srcEvent: e
                }), n && t.splice(s, 1))
            }
        });
        var Be = {
                touchstart: Ee,
                touchmove: Ie,
                touchend: Pe,
                touchcancel: ke
            },
            Xe = "touchstart",
            Ze = "touchstart touchmove touchend touchcancel";
        l(z, T, {
            handler: function(e) {
                var t = Be[e.type];
                if (t === Ee && (this.started = !0), this.started) {
                    var n = H.call(this, e, t);
                    t & (Pe | ke) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: "touch",
                        srcEvent: e
                    })
                }
            }
        });
        var Ue = {
                touchstart: Ee,
                touchmove: Ie,
                touchend: Pe,
                touchcancel: ke
            },
            Ge = "touchstart touchmove touchend touchcancel";
        l(j, T, {
            handler: function(e) {
                var t = Ue[e.type],
                    n = $.call(this, e, t);
                n && this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: "touch",
                    srcEvent: e
                })
            }
        });
        var Qe = 2500,
            Ke = 25;
        l(W, T, {
            handler: function(e, t, n) {
                var i = "touch" == n.pointerType,
                    o = "mouse" == n.pointerType;
                if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                    if (i) q.call(this, t, n);
                    else if (o && B.call(this, n)) return;
                    this.callback(e, t, n)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Je = w(pe.style, "touchAction"),
            et = Je !== i,
            tt = "auto",
            nt = "manipulation",
            it = "none",
            ot = "pan-x",
            rt = "pan-y",
            at = function() {
                if (!et) return !1;
                var t = {},
                    n = e.CSS && e.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(i) {
                    t[i] = !n || e.CSS.supports("touch-action", i)
                }), t
            }();
        X.prototype = {
            set: function(e) {
                "compute" == e && (e = this.compute()), et && this.manager.element.style && at[e] && (this.manager.element.style[Je] = e), this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return a(this.manager.recognizers, function(t) {
                    c(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                }), Z(e.join(" "))
            },
            preventDefaults: function(e) {
                var t = e.srcEvent,
                    n = e.offsetDirection;
                if (this.manager.session.prevented) return void t.preventDefault();
                var i = this.actions,
                    o = m(i, it) && !at[it],
                    r = m(i, rt) && !at[rt],
                    a = m(i, ot) && !at[ot];
                if (o) {
                    var s = 1 === e.pointers.length,
                        l = e.distance < 2,
                        u = e.deltaTime < 250;
                    if (s && l && u) return
                }
                return a && r ? void 0 : o || r && n & Le || a && n & Ve ? this.preventSrc(t) : void 0
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };
        var st = 1,
            lt = 2,
            ut = 4,
            ct = 8,
            dt = ct,
            pt = 16;
        U.prototype = {
            defaults: {},
            set: function(e) {
                return ce(this.options, e), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(e) {
                if (r(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return e = K(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
            },
            dropRecognizeWith: function(e) {
                return r(e, "dropRecognizeWith", this) ? this : (e = K(e, this), delete this.simultaneous[e.id], this)
            },
            requireFailure: function(e) {
                if (r(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return e = K(e, this), g(t, e) === -1 && (t.push(e), e.requireFailure(this)), this
            },
            dropRequireFailure: function(e) {
                if (r(e, "dropRequireFailure", this)) return this;
                e = K(e, this);
                var t = g(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(e) {
                return !!this.simultaneous[e.id]
            },
            emit: function(e) {
                function t(t) {
                    n.manager.emit(t, e)
                }
                var n = this,
                    i = this.state;
                i < ct && t(n.options.event + G(i)), t(n.options.event), e.additionalEvent && t(e.additionalEvent), i >= ct && t(n.options.event + G(i))
            },
            tryEmit: function(e) {
                if (this.canEmit()) return this.emit(e);
                this.state = 32
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(this.requireFail[e].state & (32 | st))) return !1;
                    e++
                }
                return !0
            },
            recognize: function(e) {
                var t = ce({}, e);
                if (!c(this.options.enable, [this, t])) return this.reset(), void(this.state = 32);
                this.state & (dt | pt | 32) && (this.state = st), this.state = this.process(t), this.state & (lt | ut | ct | pt) && this.tryEmit(t)
            },
            process: function(e) {},
            getTouchAction: function() {},
            reset: function() {}
        }, l(J, U, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state,
                    n = e.eventType,
                    i = t & (lt | ut),
                    o = this.attrTest(e);
                return i && (n & ke || !o) ? t | pt : i || o ? n & Pe ? t | ct : t & lt ? t | ut : lt : 32
            }
        }), l(ee, J, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Ne
            },
            getTouchAction: function() {
                var e = this.options.direction,
                    t = [];
                return e & Le && t.push(rt), e & Ve && t.push(ot), t
            },
            directionTest: function(e) {
                var t = this.options,
                    n = !0,
                    i = e.distance,
                    o = e.direction,
                    r = e.deltaX,
                    a = e.deltaY;
                return o & t.direction || (t.direction & Le ? (o = 0 === r ? Ae : r < 0 ? Oe : Me, n = r != this.pX, i = Math.abs(e.deltaX)) : (o = 0 === a ? Ae : a < 0 ? De : Fe, n = a != this.pY, i = Math.abs(e.deltaY))), e.direction = o, n && i > t.threshold && o & t.direction
            },
            attrTest: function(e) {
                return J.prototype.attrTest.call(this, e) && (this.state & lt || !(this.state & lt) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = Q(e.direction);
                t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
            }
        }), l(te, J, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [it]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & lt)
            },
            emit: function(e) {
                if (1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    e.additionalEvent = this.options.event + t
                }
                this._super.emit.call(this, e)
            }
        }), l(ne, U, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [tt]
            },
            process: function(e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    i = e.distance < t.threshold,
                    r = e.deltaTime > t.time;
                if (this._input = e, !i || !n || e.eventType & (Pe | ke) && !r) this.reset();
                else if (e.eventType & Ee) this.reset(), this._timer = o(function() {
                    this.state = dt, this.tryEmit()
                }, t.time, this);
                else if (e.eventType & Pe) return dt;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                this.state === dt && (e && e.eventType & Pe ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ve(), this.manager.emit(this.options.event, this._input)))
            }
        }), l(ie, J, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [it]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & lt)
            }
        }), l(oe, J, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: Le | Ve,
                pointers: 1
            },
            getTouchAction: function() {
                return ee.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t, n = this.options.direction;
                return n & (Le | Ve) ? t = e.overallVelocity : n & Le ? t = e.overallVelocityX : n & Ve && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && me(t) > this.options.velocity && e.eventType & Pe
            },
            emit: function(e) {
                var t = Q(e.offsetDirection);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), l(re, U, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [nt]
            },
            process: function(e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    i = e.distance < t.threshold,
                    r = e.deltaTime < t.time;
                if (this.reset(), e.eventType & Ee && 0 === this.count) return this.failTimeout();
                if (i && r && n) {
                    if (e.eventType != Pe) return this.failTimeout();
                    var a = !this.pTime || e.timeStamp - this.pTime < t.interval,
                        s = !this.pCenter || F(this.pCenter, e.center) < t.posThreshold;
                    this.pTime = e.timeStamp, this.pCenter = e.center, s && a ? this.count += 1 : this.count = 1, this._input = e;
                    if (0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = o(function() {
                        this.state = dt, this.tryEmit()
                    }, t.interval, this), lt) : dt
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = o(function() {
                    this.state = 32
                }, this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == dt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), ae.VERSION = "2.0.7", ae.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [ie, {
                    enable: !1
                }],
                [te, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [oe, {
                    direction: Le
                }],
                [ee, {
                        direction: Le
                    },
                    ["swipe"]
                ],
                [re],
                [re, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [ne]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        se.prototype = {
            set: function(e) {
                return ce(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            },
            stop: function(e) {
                this.session.stopped = e ? 2 : 1
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    this.touchAction.preventDefaults(e);
                    var n, i = this.recognizers,
                        o = t.curRecognizer;
                    (!o || o && o.state & dt) && (o = t.curRecognizer = null);
                    for (var r = 0; r < i.length;) n = i[r], 2 === t.stopped || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(e), !o && n.state & (lt | ut | ct) && (o = t.curRecognizer = n), r++
                }
            },
            get: function(e) {
                if (e instanceof U) return e;
                for (var t = this.recognizers, n = 0; n < t.length; n++)
                    if (t[n].options.event == e) return t[n];
                return null
            },
            add: function(e) {
                if (r(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
            },
            remove: function(e) {
                if (r(e, "remove", this)) return this;
                if (e = this.get(e)) {
                    var t = this.recognizers,
                        n = g(t, e);
                    n !== -1 && (t.splice(n, 1), this.touchAction.update())
                }
                return this
            },
            on: function(e, t) {
                if (e !== i && t !== i) {
                    var n = this.handlers;
                    return a(v(e), function(e) {
                        n[e] = n[e] || [], n[e].push(t)
                    }), this
                }
            },
            off: function(e, t) {
                if (e !== i) {
                    var n = this.handlers;
                    return a(v(e), function(e) {
                        t ? n[e] && n[e].splice(g(n[e], t), 1) : delete n[e]
                    }), this
                }
            },
            emit: function(e, t) {
                this.options.domEvents && ue(e, t);
                var n = this.handlers[e] && this.handlers[e].slice();
                if (n && n.length) {
                    t.type = e, t.preventDefault = function() {
                        t.srcEvent.preventDefault()
                    };
                    for (var i = 0; i < n.length;) n[i](t), i++
                }
            },
            destroy: function() {
                this.element && le(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, ce(ae, {
            INPUT_START: Ee,
            INPUT_MOVE: Ie,
            INPUT_END: Pe,
            INPUT_CANCEL: ke,
            STATE_POSSIBLE: st,
            STATE_BEGAN: lt,
            STATE_CHANGED: ut,
            STATE_ENDED: ct,
            STATE_RECOGNIZED: dt,
            STATE_CANCELLED: pt,
            STATE_FAILED: 32,
            DIRECTION_NONE: Ae,
            DIRECTION_LEFT: Oe,
            DIRECTION_RIGHT: Me,
            DIRECTION_UP: De,
            DIRECTION_DOWN: Fe,
            DIRECTION_HORIZONTAL: Le,
            DIRECTION_VERTICAL: Ve,
            DIRECTION_ALL: Ne,
            Manager: se,
            Input: T,
            TouchAction: X,
            TouchInput: j,
            MouseInput: R,
            PointerEventInput: _,
            TouchMouseInput: W,
            SingleTouchInput: z,
            Recognizer: U,
            AttrRecognizer: J,
            Tap: re,
            Pan: ee,
            Swipe: oe,
            Pinch: te,
            Rotate: ie,
            Press: ne,
            on: p,
            off: f,
            each: a,
            merge: ye,
            extend: ge,
            assign: ce,
            inherit: l,
            bindFn: u,
            prefixed: w
        }), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = ae, "function" == typeof define && define.amd ? define(function() {
            return ae
        }) : "undefined" != typeof module && module.exports ? module.exports = ae : e.Hammer = ae
    }(window, document),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
    }(function(e, t) {
        function n(n, i) {
            var o = e(n);
            o.data("hammer") || o.data("hammer", new t(o[0], i))
        }
        e.fn.hammer = function(e) {
            return this.each(function() {
                n(this, e)
            })
        }, t.Manager.prototype.emit = function(t) {
            return function(n, i) {
                t.call(this, n, i), e(this.element).trigger({
                    type: n,
                    gesture: i
                })
            }
        }(t.Manager.prototype.emit)
    }),
    function(e) {
        e(document).ready(function() {
            function t(t) {
                var n = t.css("font-family"),
                    o = t.css("font-size");
                o && i.css("font-size", o), n && i.css("font-family", n), "off" === t.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(t.val() + "\n");
                var r = i.html().replace(/\n/g, "<br>");
                i.html(r), t.is(":visible") ? i.css("width", t.width()) : i.css("width", e(window).width() / 2), t.css("height", i.height())
            }
            Materialize.updateTextFields = function() {
                e("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(t, n) {
                    e(n).val().length > 0 || n.autofocus || void 0 !== e(this).attr("placeholder") || e(n)[0].validity.badInput === !0 ? e(this).siblings("label, i").addClass("active") : e(this).siblings("label, i").removeClass("active")
                })
            };
            var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            e(document).on("change", n, function() {
                0 === e(this).val().length && void 0 === e(this).attr("placeholder") || e(this).siblings("label").addClass("active"), validate_field(e(this))
            }), e(document).ready(function() {
                Materialize.updateTextFields()
            }), e(document).on("reset", function(t) {
                var i = e(t.target);
                i.is("form") && (i.find(n).removeClass("valid").removeClass("invalid"), i.find(n).each(function() {
                    "" === e(this).attr("value") && e(this).siblings("label, i").removeClass("active")
                }), i.find("select.initialized").each(function() {
                    var e = i.find("option[selected]").text();
                    i.siblings("input.select-dropdown").val(e)
                }))
            }), e(document).on("focus", n, function() {
                e(this).siblings("label, i").addClass("active")
            }), e(document).on("blur", n, function() {
                var t = e(this);
                0 === t.val().length && t[0].validity.badInput !== !0 && void 0 === t.attr("placeholder") && t.siblings("label, i").removeClass("active"), 0 === t.val().length && t[0].validity.badInput !== !0 && void 0 !== t.attr("placeholder") && t.siblings("i").removeClass("active"), validate_field(t)
            }), window.validate_field = function(e) {
                var t = void 0 !== e.attr("length"),
                    n = parseInt(e.attr("length")),
                    i = e.val().length;
                0 === e.val().length && e[0].validity.badInput === !1 ? e.hasClass("validate") && (e.removeClass("valid"), e.removeClass("invalid")) : e.hasClass("validate") && (e.is(":valid") && t && i <= n || e.is(":valid") && !t ? (e.removeClass("invalid"), e.addClass("valid")) : (e.removeClass("valid"), e.addClass("invalid")))
            };
            var i = e(".hiddendiv").first();
            i.length || (i = e('<div class="hiddendiv common"></div>'), e("body").append(i));
            e(".materialize-textarea").each(function() {
                var n = e(this);
                n.val().length && t(n)
            }), e("body").on("keyup keydown autoresize", ".materialize-textarea", function() {
                t(e(this))
            }), e(document).on("change", '.file-field input[type="file"]', function() {
                for (var t = e(this).closest(".file-field"), n = t.find("input.file-path"), i = e(this)[0].files, o = [], r = 0; r < i.length; r++) o.push(i[r].name);
                n.val(o.join(", ")), n.trigger("change")
            });
            var o, r = "input[type=range]",
                a = !1;
            e(r).each(function() {
                var t = e('<span class="thumb"><span class="value"></span></span>');
                e(this).after(t)
            });
            e(document).on("change", r, function(t) {
                e(this).siblings(".thumb").find(".value").html(e(this).val())
            }), e(document).on("input mousedown touchstart", r, function(t) {
                var n = e(this).siblings(".thumb"),
                    i = e(this).outerWidth();
                n.length <= 0 && (n = e('<span class="thumb"><span class="value"></span></span>'), e(this).after(n)), n.find(".value").html(e(this).val()), a = !0, e(this).addClass("active"), n.hasClass("active") || n.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), "input" !== t.type && (o = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left, o < 0 ? o = 0 : o > i && (o = i), n.addClass("active").css("left", o)), n.find(".value").html(e(this).val())
            }), e(document).on("mouseup touchend", ".range-field", function() {
                a = !1, e(this).removeClass("active")
            }), e(document).on("mousemove touchmove", ".range-field", function(t) {
                var n, i = e(this).children(".thumb");
                if (a) {
                    i.hasClass("active") || i.velocity({
                        height: "30px",
                        width: "30px",
                        top: "-20px",
                        marginLeft: "-15px"
                    }, {
                        duration: 300,
                        easing: "easeOutExpo"
                    }), n = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;
                    var o = e(this).outerWidth();
                    n < 0 ? n = 0 : n > o && (n = o), i.addClass("active").css("left", n), i.find(".value").html(i.siblings(r).val())
                }
            }), e(document).on("mouseout touchleave", ".range-field", function() {
                if (!a) {
                    var t = e(this).children(".thumb");
                    t.hasClass("active") && t.velocity({
                        height: "0",
                        width: "0",
                        top: "10px",
                        marginLeft: "-6px"
                    }, {
                        duration: 100
                    }), t.removeClass("active")
                }
            })
        }), e.fn.material_select = function(t) {
            function n(e, t, n) {
                var o = e.indexOf(t),
                    r = o === -1;
                return r ? e.push(t) : e.splice(o, 1), n.siblings("ul.dropdown-content").find("li").eq(t).toggleClass("active"), n.find("option").eq(t).prop("selected", r), i(e, n), r
            }

            function i(e, t) {
                for (var n = "", i = 0, o = e.length; i < o; i++) {
                    var r = t.find("option").eq(e[i]).text();
                    n += 0 === i ? r : ", " + r
                }
                "" === n && (n = t.find("option:disabled").eq(0).text()), t.siblings("input.select-dropdown").val(n)
            }
            e(this).each(function() {
                var i = e(this);
                if (!i.hasClass("browser-default")) {
                    var o = !!i.attr("multiple"),
                        r = i.data("select-id");
                    if (r && (i.parent().find("span.caret").remove(), i.parent().find("input").remove(), i.unwrap(), e("ul#select-options-" + r).remove()), "destroy" === t) return void i.data("select-id", null).removeClass("initialized");
                    var a = Materialize.guid();
                    i.data("select-id", a);
                    var s = e('<div class="select-wrapper"></div>');
                    s.addClass(i.attr("class"));
                    var l = e('<ul id="select-options-' + a + '" class="dropdown-content select-dropdown ' + (o ? "multiple-select-dropdown" : "") + '"></ul>'),
                        u = i.children("option, optgroup"),
                        c = [],
                        d = !1,
                        p = i.find("option:selected").html() || i.find("option:first").html() || "",
                        f = function() {
                            var t = e(this).closest("ul"),
                                n = e(this).val();
                            t.find("li").find("span.filtrable").each(function() {
                                "string" == typeof this.outerText && (this.outerText.toLowerCase().indexOf(n.toLowerCase()) === -1 ? (e(this).hide(), e(this).parent().hide()) : (e(this).show(), e(this).parent().show()))
                            })
                        },
                        h = !!i.attr("searchable");
                    h && function() {
                        var t = i.attr("searchable"),
                            n = e('<span><input type="text" class="search" style="margin: 5px 0px 16px 15px; width: 96%;" placeholder="' + t + '"></span>');
                        l.append(n), n.find(".search").keyup(f)
                    }();
                    var m = function(t, n, i) {
                        var o = n.is(":disabled") ? "disabled " : "",
                            r = "optgroup-option" === i ? "optgroup-option " : "",
                            a = n.data("icon"),
                            s = n.attr("class");
                        if (a) {
                            var u = "";
                            return s && (u = ' class="' + s + '"'), "multiple" === i ? l.append(e('<li class="' + o + '"><img alt="" src="' + a + '"' + u + '><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + n.html() + "</span></li>")) : l.append(e('<li class="' + o + r + '"><img alt="" src="' + a + '"' + u + '><span class="filtrable">' + n.html() + "</span></li>")), !0
                        }
                        "multiple" === i ? l.append(e('<li class="' + o + '"><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + n.html() + "</span></li>")) : l.append(e('<li class="' + o + r + '"><span class="filtrable">' + n.html() + "</span></li>"))
                    };
                    u.length && u.each(function() {
                        if (e(this).is("option")) o ? m(0, e(this), "multiple") : m(0, e(this));
                        else if (e(this).is("optgroup")) {
                            var t = e(this).children("option");
                            l.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")), t.each(function() {
                                m(0, e(this), "optgroup-option")
                            })
                        }
                    }), l.find("li:not(.optgroup)").each(function(r) {
                        e(this).click(function(a) {
                            if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
                                var s = !0;
                                o ? (e('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                    return !t
                                }), s = n(c, e(this).index() - 1, i), y.trigger("focus")) : (l.find("li").removeClass("active"), e(this).toggleClass("active"), y.val(e(this).text())), b(l, e(this)), i.find("option").eq(r).prop("selected", s), i.trigger("change"), void 0 !== t && t()
                            }
                            a.stopPropagation()
                        })
                    }), i.wrap(s);
                    var v = e('<span class="caret">&#9660;</span>');
                    i.is(":disabled") && v.addClass("disabled");
                    var g = p.replace(/"/g, "&quot;"),
                        y = e('<input type="text" class="select-dropdown" readonly="true" ' + (i.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + a + '" value="' + g + '"/>');
                    i.before(y), y.before(v), y.after(l), i.is(":disabled") || y.dropdown({
                        hover: !1,
                        closeOnClick: !1
                    }), i.attr("tabindex") && e(y[0]).attr("tabindex", i.attr("tabindex")), i.addClass("initialized"), y.on({
                        focus: function() {
                            if (e("ul.select-dropdown").not(l[0]).is(":visible") && e("input.select-dropdown").trigger("close"), !l.is(":visible")) {
                                e(this).trigger("open", ["focus"]);
                                var t = e(this).val();
                                b(l, l.find("li").filter(function() {
                                    return e(this).text().toLowerCase() === t.toLowerCase()
                                })[0])
                            }
                        },
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }), y.on("blur", function() {
                        o || h || e(this).trigger("close"), l.find("li.selected").removeClass("selected")
                    }), !o && h && l.find("li").on("click", function() {
                        y.trigger("close")
                    }), l.hover(function() {
                        d = !0
                    }, function() {
                        d = !1
                    }), e(window).on({
                        click: function() {
                            (o || h) && (d || y.trigger("close"))
                        }
                    }), o && i.find("option:selected:not(:disabled)").each(function() {
                        var t = e(this).index();
                        n(c, t, i), l.find("li").eq(t).find(":checkbox").prop("checked", !0)
                    });
                    var b = function(t, n) {
                            if (n) {
                                t.find("li.selected").removeClass("selected");
                                var i = e(n);
                                i.addClass("selected"), l.scrollTo(i)
                            }
                        },
                        w = [],
                        x = function(t) {
                            if (9 == t.which) return void y.trigger("close");
                            if (40 == t.which && !l.is(":visible")) return void y.trigger("open");
                            if (13 != t.which || l.is(":visible")) {
                                t.preventDefault();
                                var n = String.fromCharCode(t.which).toLowerCase(),
                                    i = [9, 13, 27, 38, 40];
                                if (n && i.indexOf(t.which) === -1) {
                                    w.push(n);
                                    var r = w.join(""),
                                        a = l.find("li").filter(function() {
                                            return 0 === e(this).text().toLowerCase().indexOf(r)
                                        })[0];
                                    a && b(l, a)
                                }
                                if (13 == t.which) {
                                    var s = l.find("li.selected:not(.disabled)")[0];
                                    s && (e(s).trigger("click"), o || y.trigger("close"))
                                }
                                40 == t.which && (a = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], b(l, a)), 27 == t.which && y.trigger("close"), 38 == t.which && (a = l.find("li.selected").prev("li:not(.disabled)")[0]) && b(l, a), setTimeout(function() {
                                    w = []
                                }, 1e3)
                            }
                        };
                    y.on("keydown", x)
                }
            })
        }
    }(jQuery), jQuery("select").siblings("input.select-dropdown").on("mousedown", function(e) {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
    }(this, function() {
        "use strict";
        return function(e, t, n, i) {
            var o = {
                features: null,
                bind: function(e, t, n, i) {
                    var o = (i ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1)
                },
                isArray: function(e) {
                    return e instanceof Array
                },
                createEl: function(e, t) {
                    var n = document.createElement(t || "div");
                    return e && (n.className = e), n
                },
                getScrollY: function() {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop
                },
                unbind: function(e, t, n) {
                    o.bind(e, t, n, !0)
                },
                removeClass: function(e, t) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function(e, t) {
                    o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                },
                hasClass: function(e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                },
                getChildByClass: function(e, t) {
                    for (var n = e.firstChild; n;) {
                        if (o.hasClass(n, t)) return n;
                        n = n.nextSibling
                    }
                },
                arraySearch: function(e, t, n) {
                    for (var i = e.length; i--;)
                        if (e[i][n] === t) return i;
                    return -1
                },
                extend: function(e, t, n) {
                    for (var i in t)
                        if (t.hasOwnProperty(i)) {
                            if (n && e.hasOwnProperty(i)) continue;
                            e[i] = t[i]
                        }
                },
                easing: {
                    sine: {
                        out: function(e) {
                            return Math.sin(e * (Math.PI / 2))
                        },
                        inOut: function(e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function(e) {
                            return --e * e * e + 1
                        }
                    }
                },
                detectFeatures: function() {
                    if (o.features) return o.features;
                    var e = o.createEl(),
                        t = e.style,
                        n = "",
                        i = {};
                    if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                        var r = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && 8 > a && (i.isOldIOSPhone = !0)
                        }
                        var s = r.match(/Android\s([0-9\.]*)/),
                            l = s ? s[1] : 0;
                        l = parseFloat(l), l >= 1 && (4.4 > l && (i.isOldAndroid = !0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(r)
                    }
                    for (var u, c, d = ["transform", "perspective", "animationName"], p = ["", "webkit", "Moz", "ms", "O"], f = 0; 4 > f; f++) {
                        n = p[f];
                        for (var h = 0; 3 > h; h++) u = d[h], c = n + (n ? u.charAt(0).toUpperCase() + u.slice(1) : u), !i[u] && c in t && (i[u] = c);
                        n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                    }
                    if (!i.raf) {
                        var m = 0;
                        i.raf = function(e) {
                            var t = (new Date).getTime(),
                                n = Math.max(0, 16 - (t - m)),
                                i = window.setTimeout(function() {
                                    e(t + n)
                                }, n);
                            return m = t + n, i
                        }, i.caf = function(e) {
                            clearTimeout(e)
                        }
                    }
                    return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
                }
            };
            o.detectFeatures(), o.features.oldIE && (o.bind = function(e, t, n, i) {
                t = t.split(" ");
                for (var o, r = (i ? "detach" : "attach") + "Event", a = function() {
                        n.handleEvent.call(n)
                    }, s = 0; s < t.length; s++)
                    if (o = t[s])
                        if ("object" == typeof n && n.handleEvent) {
                            if (i) {
                                if (!n["oldIE" + o]) return !1
                            } else n["oldIE" + o] = a;
                            e[r]("on" + o, n["oldIE" + o])
                        } else e[r]("on" + o, n)
            });
            var r = this,
                a = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(e) {
                        return "A" === e.tagName
                    },
                    getDoubleTapZoom: function(e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
            o.extend(a, i);
            var s, l, u, c, d, p, f, h, m, v, g, y, b, w, x, C, T, S, E, I, P, k, A, O, M, D, F, L, V, N, R, _, z, H, j, $, W, q, Y, B, X, Z, U, G, Q, K, J, ee, te, ne, ie, oe, re, ae, se, le, ue = function() {
                    return {
                        x: 0,
                        y: 0
                    }
                },
                ce = ue(),
                de = ue(),
                pe = ue(),
                fe = {},
                he = 0,
                me = {},
                ve = ue(),
                ge = 0,
                ye = !0,
                be = [],
                we = {},
                xe = !1,
                Ce = function(e, t) {
                    o.extend(r, t.publicMethods), be.push(e)
                },
                Te = function(e) {
                    var t = Ut();
                    return e > t - 1 ? e - t : 0 > e ? t + e : e
                },
                Se = {},
                Ee = function(e, t) {
                    return Se[e] || (Se[e] = []), Se[e].push(t)
                },
                Ie = function(e) {
                    var t = Se[e];
                    if (t) {
                        var n = Array.prototype.slice.call(arguments);
                        n.shift();
                        for (var i = 0; i < t.length; i++) t[i].apply(r, n)
                    }
                },
                Pe = function() {
                    return (new Date).getTime()
                },
                ke = function(e) {
                    ae = e, r.bg.style.opacity = e * a.bgOpacity
                },
                Ae = function(e, t, n, i, o) {
                    (!xe || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio), e[k] = y + t + "px, " + n + "px" + b + " scale(" + i + ")"
                },
                Oe = function(e) {
                    te && (e && (v > r.currItem.fitRatio ? xe || (ln(r.currItem, !1, !0), xe = !0) : xe && (ln(r.currItem), xe = !1)), Ae(te, pe.x, pe.y, v))
                },
                Me = function(e) {
                    e.container && Ae(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
                },
                De = function(e, t) {
                    t[k] = y + e + "px, 0px" + b
                },
                Fe = function(e, t) {
                    if (!a.loop && t) {
                        var n = c + (ve.x * he - e) / ve.x,
                            i = Math.round(e - ht.x);
                        (0 > n && i > 0 || n >= Ut() - 1 && 0 > i) && (e = ht.x + i * a.mainScrollEndFriction)
                    }
                    ht.x = e, De(e, d)
                },
                Le = function(e, t) {
                    var n = mt[e] - me[e];
                    return de[e] + ce[e] + n - n * (t / g)
                },
                Ve = function(e, t) {
                    e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
                },
                Ne = function(e) {
                    e.x = Math.round(e.x), e.y = Math.round(e.y)
                },
                Re = null,
                _e = function() {
                    Re && (o.unbind(document, "mousemove", _e), o.addClass(e, "pswp--has_mouse"), a.mouseUsed = !0, Ie("mouseUsed")), Re = setTimeout(function() {
                        Re = null
                    }, 100)
                },
                ze = function() {
                    o.bind(document, "keydown", r), R.transform && o.bind(r.scrollWrap, "click", r), a.mouseUsed || o.bind(document, "mousemove", _e), o.bind(window, "resize scroll", r), Ie("bindEvents")
                },
                He = function() {
                    o.unbind(window, "resize", r), o.unbind(window, "scroll", m.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", _e), R.transform && o.unbind(r.scrollWrap, "click", r), q && o.unbind(window, f, r), Ie("unbindEvents")
                },
                je = function(e, t) {
                    var n = on(r.currItem, fe, e);
                    return t && (ee = n), n
                },
                $e = function(e) {
                    return e || (e = r.currItem), e.initialZoomLevel
                },
                We = function(e) {
                    return e || (e = r.currItem), e.w > 0 ? a.maxSpreadZoom : 1
                },
                qe = function(e, t, n, i) {
                    return i === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Le(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
                },
                Ye = function() {
                    if (k) {
                        return y = "translate" + (R.perspective && !O ? "3d(" : "("), void(b = R.perspective ? ", 0px)" : ")")
                    }
                    k = "left", o.addClass(e, "pswp--ie"), De = function(e, t) {
                        t.left = e + "px"
                    }, Me = function(e) {
                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                            n = e.container.style,
                            i = t * e.w,
                            o = t * e.h;
                        n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                    }, Oe = function() {
                        if (te) {
                            var e = te,
                                t = r.currItem,
                                n = t.fitRatio > 1 ? 1 : t.fitRatio,
                                i = n * t.w,
                                o = n * t.h;
                            e.width = i + "px", e.height = o + "px", e.left = pe.x + "px", e.top = pe.y + "px"
                        }
                    }
                },
                Be = function(e) {
                    var t = "";
                    a.escKey && 27 === e.keyCode ? t = "close" : a.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
                },
                Xe = function(e) {
                    e && (X || B || ne || $) && (e.preventDefault(), e.stopPropagation())
                },
                Ze = function() {
                    r.setScrollOffset(0, o.getScrollY())
                },
                Ue = {},
                Ge = 0,
                Qe = function(e) {
                    Ue[e] && (Ue[e].raf && D(Ue[e].raf), Ge--, delete Ue[e])
                },
                Ke = function(e) {
                    Ue[e] && Qe(e), Ue[e] || (Ge++, Ue[e] = {})
                },
                Je = function() {
                    for (var e in Ue) Ue.hasOwnProperty(e) && Qe(e)
                },
                et = function(e, t, n, i, o, r, a) {
                    var s, l = Pe();
                    Ke(e);
                    var u = function() {
                        if (Ue[e]) {
                            if ((s = Pe() - l) >= i) return Qe(e), r(n), void(a && a());
                            r((n - t) * o(s / i) + t), Ue[e].raf = M(u)
                        }
                    };
                    u()
                },
                tt = {
                    shout: Ie,
                    listen: Ee,
                    viewportSize: fe,
                    options: a,
                    isMainScrollAnimating: function() {
                        return ne
                    },
                    getZoomLevel: function() {
                        return v
                    },
                    getCurrentIndex: function() {
                        return c
                    },
                    isDragging: function() {
                        return q
                    },
                    isZooming: function() {
                        return Q
                    },
                    setScrollOffset: function(e, t) {
                        me.x = e, N = me.y = t, Ie("updateScrollOffset", me)
                    },
                    applyZoomPan: function(e, t, n, i) {
                        pe.x = t, pe.y = n, v = e, Oe(i)
                    },
                    init: function() {
                        if (!s && !l) {
                            var n;
                            r.framework = o, r.template = e, r.bg = o.getChildByClass(e, "pswp__bg"), F = e.className, s = !0, R = o.detectFeatures(), M = R.raf, D = R.caf, k = R.transform, V = R.oldIE, r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), d = r.container.style, r.itemHolders = C = [{
                                el: r.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {
                                el: r.container.children[1],
                                wrap: 0,
                                index: -1
                            }, {
                                el: r.container.children[2],
                                wrap: 0,
                                index: -1
                            }], C[0].el.style.display = C[2].el.style.display = "none", Ye(), m = {
                                resize: r.updateSize,
                                scroll: Ze,
                                keydown: Be,
                                click: Xe
                            };
                            var i = R.isOldIOSPhone || R.isOldAndroid || R.isMobileOpera;
                            for (R.animationName && R.transform && !i || (a.showAnimationDuration = a.hideAnimationDuration = 0), n = 0; n < be.length; n++) r["init" + be[n]]();
                            if (t) {
                                (r.ui = new t(r, o)).init()
                            }
                            Ie("firstUpdate"), c = c || a.index || 0, (isNaN(c) || 0 > c || c >= Ut()) && (c = 0), r.currItem = Zt(c), (R.isOldIOSPhone || R.isOldAndroid) && (ye = !1), e.setAttribute("aria-hidden", "false"), a.modal && (ye ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === N && (Ie("initialLayout"), N = L = o.getScrollY());
                            var u = "pswp--open ";
                            for (a.mainClass && (u += a.mainClass + " "), a.showHideOpacity && (u += "pswp--animate_opacity "), u += O ? "pswp--touch" : "pswp--notouch", u += R.animationName ? " pswp--css_animation" : "", u += R.svg ? " pswp--svg" : "", o.addClass(e, u), r.updateSize(), p = -1, ge = null, n = 0; 3 > n; n++) De((n + p) * ve.x, C[n].el.style);
                            V || o.bind(r.scrollWrap, h, r), Ee("initialZoomInEnd", function() {
                                r.setContent(C[0], c - 1), r.setContent(C[2], c + 1), C[0].el.style.display = C[2].el.style.display = "block", a.focus && e.focus(), ze()
                            }), r.setContent(C[1], c), r.updateCurrItem(), Ie("afterInit"), ye || (w = setInterval(function() {
                                Ge || q || Q || v !== r.currItem.initialZoomLevel || r.updateSize()
                            }, 1e3)), o.addClass(e, "pswp--visible")
                        }
                    },
                    close: function() {
                        s && (s = !1, l = !0, Ie("close"), He(), Qt(r.currItem, null, !0, r.destroy))
                    },
                    destroy: function() {
                        Ie("destroy"), qt && clearTimeout(qt), e.setAttribute("aria-hidden", "true"), e.className = F, w && clearInterval(w), o.unbind(r.scrollWrap, h, r), o.unbind(window, "scroll", r), wt(), Je(), Se = null
                    },
                    panTo: function(e, t, n) {
                        n || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)), pe.x = e, pe.y = t, Oe()
                    },
                    handleEvent: function(e) {
                        e = e || window.event, m[e.type] && m[e.type](e)
                    },
                    goTo: function(e) {
                        e = Te(e);
                        var t = e - c;
                        ge = t, c = e, r.currItem = Zt(c), he -= t, Fe(ve.x * he), Je(), ne = !1, r.updateCurrItem()
                    },
                    next: function() {
                        r.goTo(c + 1)
                    },
                    prev: function() {
                        r.goTo(c - 1)
                    },
                    updateCurrZoomItem: function(e) {
                        if (e && Ie("beforeChange", 0), C[1].el.children.length) {
                            var t = C[1].el.children[0];
                            te = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else te = null;
                        ee = r.currItem.bounds, g = v = r.currItem.initialZoomLevel, pe.x = ee.center.x, pe.y = ee.center.y, e && Ie("afterChange")
                    },
                    invalidateCurrItems: function() {
                        x = !0;
                        for (var e = 0; 3 > e; e++) C[e].item && (C[e].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(e) {
                        if (0 !== ge) {
                            var t, n = Math.abs(ge);
                            if (!(e && 2 > n)) {
                                r.currItem = Zt(c), xe = !1, Ie("beforeChange", ge), n >= 3 && (p += ge + (ge > 0 ? -3 : 3), n = 3);
                                for (var i = 0; n > i; i++) ge > 0 ? (t = C.shift(), C[2] = t, p++, De((p + 2) * ve.x, t.el.style), r.setContent(t, c - n + i + 1 + 1)) : (t = C.pop(), C.unshift(t), p--, De(p * ve.x, t.el.style), r.setContent(t, c + n - i - 1 - 1));
                                if (te && 1 === Math.abs(ge)) {
                                    var o = Zt(T);
                                    o.initialZoomLevel !== v && (on(o, fe), ln(o), Me(o))
                                }
                                ge = 0, r.updateCurrZoomItem(), T = c, Ie("afterChange")
                            }
                        }
                    },
                    updateSize: function(t) {
                        if (!ye && a.modal) {
                            var n = o.getScrollY();
                            if (N !== n && (e.style.top = n + "px", N = n), !t && we.x === window.innerWidth && we.y === window.innerHeight) return;
                            we.x = window.innerWidth, we.y = window.innerHeight, e.style.height = we.y + "px"
                        }
                        if (fe.x = r.scrollWrap.clientWidth, fe.y = r.scrollWrap.clientHeight, Ze(), ve.x = fe.x + Math.round(fe.x * a.spacing), ve.y = fe.y, Fe(ve.x * he), Ie("beforeResize"), void 0 !== p) {
                            for (var i, s, l, u = 0; 3 > u; u++) i = C[u], De((u + p) * ve.x, i.el.style), l = c + u - 1, a.loop && Ut() > 2 && (l = Te(l)), s = Zt(l), s && (x || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s), r.setContent(i, l), 1 === u && (r.currItem = s, r.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && l >= 0 && r.setContent(i, l), s && s.container && (on(s, fe), ln(s), Me(s));
                            x = !1
                        }
                        g = v = r.currItem.initialZoomLevel, ee = r.currItem.bounds, ee && (pe.x = ee.center.x, pe.y = ee.center.y, Oe(!0)), Ie("resize")
                    },
                    zoomTo: function(e, t, n, i, r) {
                        t && (g = v, mt.x = Math.abs(t.x) - pe.x, mt.y = Math.abs(t.y) - pe.y, Ve(de, pe));
                        var a = je(e, !1),
                            s = {};
                        qe("x", a, s, e), qe("y", a, s, e);
                        var l = v,
                            u = {
                                x: pe.x,
                                y: pe.y
                            };
                        Ne(s);
                        var c = function(t) {
                            1 === t ? (v = e, pe.x = s.x, pe.y = s.y) : (v = (e - l) * t + l, pe.x = (s.x - u.x) * t + u.x, pe.y = (s.y - u.y) * t + u.y), r && r(t), Oe(1 === t)
                        };
                        n ? et("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, c) : c(1)
                    }
                },
                nt = {},
                it = {},
                ot = {},
                rt = {},
                at = {},
                st = [],
                lt = {},
                ut = [],
                ct = {},
                dt = 0,
                pt = ue(),
                ft = 0,
                ht = ue(),
                mt = ue(),
                vt = ue(),
                gt = function(e, t) {
                    return e.x === t.x && e.y === t.y
                },
                yt = function(e, t) {
                    return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                },
                bt = function(e, t) {
                    return ct.x = Math.abs(e.x - t.x), ct.y = Math.abs(e.y - t.y), Math.sqrt(ct.x * ct.x + ct.y * ct.y)
                },
                wt = function() {
                    Z && (D(Z), Z = null)
                },
                xt = function() {
                    q && (Z = M(xt), Rt())
                },
                Ct = function() {
                    return !("fit" === a.scaleMode && v === r.currItem.initialZoomLevel)
                },
                Tt = function(e, t) {
                    return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : Tt(e.parentNode, t)))
                },
                St = {},
                Et = function(e, t) {
                    return St.prevent = !Tt(e.target, a.isClickableElement), Ie("preventDragEvent", e, t, St), St.prevent
                },
                It = function(e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                },
                Pt = function(e, t, n) {
                    n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
                },
                kt = function(e, t, n) {
                    if (e - z > 50) {
                        var i = ut.length > 2 ? ut.shift() : {};
                        i.x = t, i.y = n, ut.push(i), z = e
                    }
                },
                At = function() {
                    var e = pe.y - r.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (fe.y / 2))
                },
                Ot = {},
                Mt = {},
                Dt = [],
                Ft = function(e) {
                    for (; Dt.length > 0;) Dt.pop();
                    return A ? (le = 0, st.forEach(function(e) {
                        0 === le ? Dt[0] = e : 1 === le && (Dt[1] = e), le++
                    })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Dt[0] = It(e.touches[0], Ot), e.touches.length > 1 && (Dt[1] = It(e.touches[1], Mt))) : (Ot.x = e.pageX, Ot.y = e.pageY, Ot.id = "", Dt[0] = Ot), Dt
                },
                Lt = function(e, t) {
                    var n, i, o, s, l = pe[e] + t[e],
                        u = t[e] > 0,
                        c = ht.x + t.x,
                        d = ht.x - lt.x;
                    return n = l > ee.min[e] || l < ee.max[e] ? a.panEndFriction : 1, l = pe[e] + t[e] * n, !a.allowPanToNext && v !== r.currItem.initialZoomLevel || (te ? "h" !== ie || "x" !== e || B || (u ? (l > ee.min[e] && (n = a.panEndFriction, ee.min[e] - l, i = ee.min[e] - de[e]), (0 >= i || 0 > d) && Ut() > 1 ? (s = c, 0 > d && c > lt.x && (s = lt.x)) : ee.min.x !== ee.max.x && (o = l)) : (l < ee.max[e] && (n = a.panEndFriction, l - ee.max[e], i = de[e] - ee.max[e]), (0 >= i || d > 0) && Ut() > 1 ? (s = c, d > 0 && c < lt.x && (s = lt.x)) : ee.min.x !== ee.max.x && (o = l))) : s = c, "x" !== e) ? void(ne || U || v > r.currItem.fitRatio && (pe[e] += t[e] * n)) : (void 0 !== s && (Fe(s, !0), U = s !== lt.x), ee.min.x !== ee.max.x && (void 0 !== o ? pe.x = o : U || (pe.x += t.x * n)), void 0 !== s)
                },
                Vt = function(e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Xt) return void e.preventDefault();
                        if (!W || "mousedown" !== e.type) {
                            if (Et(e, !0) && e.preventDefault(), Ie("pointerDown"), A) {
                                var t = o.arraySearch(st, e.pointerId, "id");
                                0 > t && (t = st.length), st[t] = {
                                    x: e.pageX,
                                    y: e.pageY,
                                    id: e.pointerId
                                }
                            }
                            var n = Ft(e),
                                i = n.length;
                            G = null, Je(), q && 1 !== i || (q = oe = !0, o.bind(window, f, r), j = se = re = $ = U = X = Y = B = !1, ie = null, Ie("firstTouchStart", n), Ve(de, pe), ce.x = ce.y = 0, Ve(rt, n[0]), Ve(at, rt), lt.x = ve.x * he, ut = [{
                                x: rt.x,
                                y: rt.y
                            }], z = _ = Pe(), je(v, !0), wt(), xt()), !Q && i > 1 && !ne && !U && (g = v, B = !1, Q = Y = !0, ce.y = ce.x = 0, Ve(de, pe), Ve(nt, n[0]), Ve(it, n[1]), Pt(nt, it, vt), mt.x = Math.abs(vt.x) - pe.x, mt.y = Math.abs(vt.y) - pe.y, K = J = bt(nt, it))
                        }
                    }
                },
                Nt = function(e) {
                    if (e.preventDefault(), A) {
                        var t = o.arraySearch(st, e.pointerId, "id");
                        if (t > -1) {
                            var n = st[t];
                            n.x = e.pageX, n.y = e.pageY
                        }
                    }
                    if (q) {
                        var i = Ft(e);
                        if (ie || X || Q) G = i;
                        else if (ht.x !== ve.x * he) ie = "h";
                        else {
                            var r = Math.abs(i[0].x - rt.x) - Math.abs(i[0].y - rt.y);
                            Math.abs(r) >= 10 && (ie = r > 0 ? "h" : "v", G = i)
                        }
                    }
                },
                Rt = function() {
                    if (G) {
                        var e = G.length;
                        if (0 !== e)
                            if (Ve(nt, G[0]), ot.x = nt.x - rt.x, ot.y = nt.y - rt.y, Q && e > 1) {
                                if (rt.x = nt.x, rt.y = nt.y, !ot.x && !ot.y && gt(G[1], it)) return;
                                Ve(it, G[1]), B || (B = !0, Ie("zoomGestureStarted"));
                                var t = bt(nt, it),
                                    n = $t(t);
                                n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (se = !0);
                                var i = 1,
                                    o = $e(),
                                    s = We();
                                if (o > n)
                                    if (a.pinchToClose && !se && g <= r.currItem.initialZoomLevel) {
                                        var l = o - n,
                                            u = 1 - l / (o / 1.2);
                                        ke(u), Ie("onPinchClose", u), re = !0
                                    } else i = (o - n) / o, i > 1 && (i = 1), n = o - i * (o / 3);
                                else n > s && (i = (n - s) / (6 * o), i > 1 && (i = 1), n = s + i * o);
                                0 > i && (i = 0), K = t, Pt(nt, it, pt), ce.x += pt.x - vt.x, ce.y += pt.y - vt.y, Ve(vt, pt), pe.x = Le("x", n), pe.y = Le("y", n), j = n > v, v = n, Oe()
                            } else {
                                if (!ie) return;
                                if (oe && (oe = !1, Math.abs(ot.x) >= 10 && (ot.x -= G[0].x - at.x), Math.abs(ot.y) >= 10 && (ot.y -= G[0].y - at.y)), rt.x = nt.x, rt.y = nt.y, 0 === ot.x && 0 === ot.y) return;
                                if ("v" === ie && a.closeOnVerticalDrag && !Ct()) {
                                    ce.y += ot.y, pe.y += ot.y;
                                    var c = At();
                                    return $ = !0, Ie("onVerticalDrag", c), ke(c), void Oe()
                                }
                                kt(Pe(), nt.x, nt.y), X = !0, ee = r.currItem.bounds;
                                var d = Lt("x", ot);
                                d || (Lt("y", ot), Ne(pe), Oe())
                            }
                    }
                },
                _t = function(e) {
                    if (R.isOldAndroid) {
                        if (W && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(W), W = setTimeout(function() {
                            W = 0
                        }, 600))
                    }
                    Ie("pointerUp"), Et(e, !1) && e.preventDefault();
                    var t;
                    if (A) {
                        var n = o.arraySearch(st, e.pointerId, "id");
                        if (n > -1)
                            if (t = st.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                            else {
                                var i = {
                                    4: "mouse",
                                    2: "touch",
                                    3: "pen"
                                };
                                t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                            }
                    }
                    var s, l = Ft(e),
                        u = l.length;
                    if ("mouseup" === e.type && (u = 0), 2 === u) return G = null, !0;
                    1 === u && Ve(at, l[0]), 0 !== u || ie || ne || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })), Ie("touchRelease", e, t));
                    var c = -1;
                    if (0 === u && (q = !1, o.unbind(window, f, r), wt(), Q ? c = 0 : -1 !== ft && (c = Pe() - ft)), ft = 1 === u ? Pe() : -1, s = -1 !== c && 150 > c ? "zoom" : "swipe", Q && 2 > u && (Q = !1, 1 === u && (s = "zoomPointerUp"), Ie("zoomGestureEnded")), G = null, X || B || ne || $)
                        if (Je(), H || (H = zt()), H.calculateSwipeSpeed("x"), $) {
                            var d = At();
                            if (d < a.verticalDragRange) r.close();
                            else {
                                var p = pe.y,
                                    h = ae;
                                et("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(e) {
                                    pe.y = (r.currItem.initialPosition.y - p) * e + p, ke((1 - h) * e + h), Oe()
                                }), Ie("onVerticalDrag", 1)
                            }
                        } else {
                            if ((U || ne) && 0 === u) {
                                var m = jt(s, H);
                                if (m) return;
                                s = "zoomPointerUp"
                            }
                            if (!ne) return "swipe" !== s ? void Wt() : void(!U && v > r.currItem.fitRatio && Ht(H))
                        }
                },
                zt = function() {
                    var e, t, n = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(i) {
                            ut.length > 1 ? (e = Pe() - z + 50, t = ut[ut.length - 2][i]) : (e = Pe() - _, t = at[i]), n.lastFlickOffset[i] = rt[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                        },
                        calculateOverBoundsAnimOffset: function(e, t) {
                            n.backAnimStarted[e] || (pe[e] > ee.min[e] ? n.backAnimDestination[e] = ee.min[e] : pe[e] < ee.max[e] && (n.backAnimDestination[e] = ee.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, et("bounceZoomPan" + e, pe[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function(t) {
                                pe[e] = t, Oe()
                            }))))
                        },
                        calculateAnimOffset: function(e) {
                            n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, pe[e] += n.distanceOffset[e])
                        },
                        panAnimLoop: function() {
                            return Ue.zoomPan && (Ue.zoomPan.raf = M(n.panAnimLoop), n.now = Pe(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Oe(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (pe.x = Math.round(pe.x), pe.y = Math.round(pe.y), Oe(), void Qe("zoomPan")) : void 0
                        }
                    };
                    return n
                },
                Ht = function(e) {
                    return e.calculateSwipeSpeed("y"), ee = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (Ke("zoomPan"), e.lastNow = Pe(), void e.panAnimLoop())
                },
                jt = function(e, t) {
                    var n;
                    ne || (dt = c);
                    var i;
                    if ("swipe" === e) {
                        var s = rt.x - at.x,
                            l = t.lastFlickDist.x < 10;
                        s > 30 && (l || t.lastFlickOffset.x > 20) ? i = -1 : -30 > s && (l || t.lastFlickOffset.x < -20) && (i = 1)
                    }
                    var u;
                    i && (c += i, 0 > c ? (c = a.loop ? Ut() - 1 : 0, u = !0) : c >= Ut() && (c = a.loop ? 0 : Ut() - 1, u = !0), (!u || a.loop) && (ge += i, he -= i, n = !0));
                    var d, p = ve.x * he,
                        f = Math.abs(p - ht.x);
                    return n || p > ht.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, dt === c && (n = !1), ne = !0, Ie("mainScrollAnimStart"), et("mainScroll", ht.x, p, d, o.easing.cubic.out, Fe, function() {
                        Je(), ne = !1, dt = -1, (n || dt !== c) && r.updateCurrItem(), Ie("mainScrollAnimComplete")
                    }), n && r.updateCurrItem(!0), n
                },
                $t = function(e) {
                    return 1 / J * e * g
                },
                Wt = function() {
                    var e = v,
                        t = $e(),
                        n = We();
                    t > v ? e = t : v > n && (e = n);
                    var i, a = ae;
                    return re && !j && !se && t > v ? (r.close(), !0) : (re && (i = function(e) {
                        ke((1 - a) * e + a)
                    }), r.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
                };
            Ce("Gestures", {
                publicMethods: {
                    initGestures: function() {
                        var e = function(e, t, n, i, o) {
                            S = e + t, E = e + n, I = e + i, P = o ? e + o : ""
                        };
                        A = R.pointerEvent, A && R.touch && (R.touch = !1), A ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : R.touch ? (e("touch", "start", "move", "end", "cancel"), O = !0) : e("mouse", "down", "move", "up"), f = E + " " + I + " " + P, h = S, A && !O && (O = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = O, m[S] = Vt, m[E] = Nt, m[I] = _t, P && (m[P] = m[I]), R.touch && (h += " mousedown", f += " mousemove mouseup", m.mousedown = m[S], m.mousemove = m[E], m.mouseup = m[I]), O || (a.allowPanToNext = !1)
                    }
                }
            });
            var qt, Yt, Bt, Xt, Zt, Ut, Gt, Qt = function(t, n, i, s) {
                    qt && clearTimeout(qt), Xt = !0, Bt = !0;
                    var l;
                    t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(c);
                    var d = i ? a.hideAnimationDuration : a.showAnimationDuration,
                        p = function() {
                            Qe("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (ke(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), Ie("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), Xt = !1
                        };
                    if (!d || !l || void 0 === l.x) return Ie("initialZoom" + (i ? "Out" : "In")), v = t.initialZoomLevel, Ve(pe, t.initialPosition), Oe(), e.style.opacity = i ? 0 : 1, ke(1), void(d ? setTimeout(function() {
                        p()
                    }, d) : p());
                    ! function() {
                        var n = u,
                            s = !r.currItem.src || r.currItem.loadError || a.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (v = l.w / t.w, pe.x = l.x, pe.y = l.y - L, r[s ? "template" : "bg"].style.opacity = .001, Oe()), Ke("initialZoom"), i && !n && o.removeClass(e, "pswp--animated-in"), s && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                            o.addClass(e, "pswp--animate_opacity")
                        }, 30)), qt = setTimeout(function() {
                            if (Ie("initialZoom" + (i ? "Out" : "In")), i) {
                                var r = l.w / t.w,
                                    a = {
                                        x: pe.x,
                                        y: pe.y
                                    },
                                    u = v,
                                    c = ae,
                                    f = function(t) {
                                        1 === t ? (v = r, pe.x = l.x, pe.y = l.y - N) : (v = (r - u) * t + u, pe.x = (l.x - a.x) * t + a.x, pe.y = (l.y - N - a.y) * t + a.y), Oe(), s ? e.style.opacity = 1 - t : ke(c - t * c)
                                    };
                                n ? et("initialZoom", 0, 1, d, o.easing.cubic.out, f, p) : (f(1), qt = setTimeout(p, d + 20))
                            } else v = t.initialZoomLevel, Ve(pe, t.initialPosition), Oe(), ke(1), s ? e.style.opacity = 1 : ke(1), qt = setTimeout(p, d + 20)
                        }, i ? 25 : 90)
                    }()
                },
                Kt = {},
                Jt = [],
                en = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return Yt.length
                    }
                },
                tn = function() {
                    return {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }
                },
                nn = function(e, t, n) {
                    var i = e.bounds;
                    i.center.x = Math.round((Kt.x - t) / 2), i.center.y = Math.round((Kt.y - n) / 2) + e.vGap.top, i.max.x = t > Kt.x ? Math.round(Kt.x - t) : i.center.x, i.max.y = n > Kt.y ? Math.round(Kt.y - n) + e.vGap.top : i.center.y, i.min.x = t > Kt.x ? 0 : i.center.x, i.min.y = n > Kt.y ? e.vGap.top : i.center.y
                },
                on = function(e, t, n) {
                    if (e.src && !e.loadError) {
                        var i = !n;
                        if (i && (e.vGap || (e.vGap = {
                                top: 0,
                                bottom: 0
                            }), Ie("parseVerticalMargin", e)), Kt.x = t.x, Kt.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                            var o = Kt.x / e.w,
                                r = Kt.y / e.h;
                            e.fitRatio = r > o ? o : r;
                            var s = a.scaleMode;
                            "orig" === s ? n = 1 : "fit" === s && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = tn())
                        }
                        if (!n) return;
                        return nn(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                    }
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = tn(), e.initialPosition = e.bounds.center, e.bounds
                },
                rn = function(e, t, n, i, o, a) {
                    t.loadError || i && (t.imageAppended = !0, ln(t, i, t === r.currItem && xe), n.appendChild(i), a && setTimeout(function() {
                        t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                    }, 500))
                },
                an = function(e) {
                    e.loading = !0, e.loaded = !1;
                    var t = e.img = o.createEl("pswp__img", "img"),
                        n = function() {
                            e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                        };
                    return t.onload = n, t.onerror = function() {
                        e.loadError = !0, n()
                    }, t.src = e.src, t
                },
                sn = function(e, t) {
                    return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = a.errorMsg.replace("%url%", e.src), !0) : void 0
                },
                ln = function(e, t, n) {
                    if (e.src) {
                        t || (t = e.container.lastChild);
                        var i = n ? e.w : Math.round(e.w * e.fitRatio),
                            o = n ? e.h : Math.round(e.h * e.fitRatio);
                        e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
                    }
                },
                un = function() {
                    if (Jt.length) {
                        for (var e, t = 0; t < Jt.length; t++) e = Jt[t], e.holder.index === e.index && rn(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                        Jt = []
                    }
                };
            Ce("Controller", {
                publicMethods: {
                    lazyLoadItem: function(e) {
                        e = Te(e);
                        var t = Zt(e);
                        t && (!t.loaded && !t.loading || x) && (Ie("gettingData", e, t), t.src && an(t))
                    },
                    initController: function() {
                        o.extend(a, en, !0), r.items = Yt = n, Zt = r.getItemAt, Ut = a.getNumItemsFn, Gt = a.loop, Ut() < 3 && (a.loop = !1), Ee("beforeChange", function(e) {
                            var t, n = a.preload,
                                i = null === e || e >= 0,
                                o = Math.min(n[0], Ut()),
                                s = Math.min(n[1], Ut());
                            for (t = 1;
                                (i ? s : o) >= t; t++) r.lazyLoadItem(c + t);
                            for (t = 1;
                                (i ? o : s) >= t; t++) r.lazyLoadItem(c - t)
                        }), Ee("initialLayout", function() {
                            r.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(c)
                        }), Ee("mainScrollAnimComplete", un), Ee("initialZoomInEnd", un), Ee("destroy", function() {
                            for (var e, t = 0; t < Yt.length; t++) e = Yt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            Jt = null
                        })
                    },
                    getItemAt: function(e) {
                        return e >= 0 && void 0 !== Yt[e] && Yt[e]
                    },
                    allowProgressiveImg: function() {
                        return a.forceProgressiveLoading || !O || a.mouseUsed || screen.width > 1200
                    },
                    setContent: function(e, t) {
                        a.loop && (t = Te(t));
                        var n = r.getItemAt(e.index);
                        n && (n.container = null);
                        var i, l = r.getItemAt(t);
                        if (!l) return void(e.el.innerHTML = "");
                        Ie("gettingData", t, l), e.index = t, e.item = l;
                        var u = l.container = o.createEl("pswp__zoom-wrap");
                        if (!l.src && l.html && (l.html.tagName ? u.appendChild(l.html) : u.innerHTML = l.html), sn(l), on(l, fe), !l.src || l.loadError || l.loaded) l.src && !l.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = l.src, ln(l, i), rn(0, l, u, i));
                        else {
                            if (l.loadComplete = function(n) {
                                    if (s) {
                                        if (e && e.index === t) {
                                            if (sn(n, !0)) return n.loadComplete = n.img = null, on(n, fe), Me(n), void(e.index === c && r.updateCurrZoomItem());
                                            n.imageAppended ? !Xt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : R.transform && (ne || Xt) ? Jt.push({
                                                item: n,
                                                baseDiv: u,
                                                img: n.img,
                                                index: t,
                                                holder: e,
                                                clearPlaceholder: !0
                                            }) : rn(0, n, u, n.img, 0, !0)
                                        }
                                        n.loadComplete = null, n.img = null, Ie("imageLoadComplete", t, n)
                                    }
                                }, o.features.transform) {
                                var d = "pswp__img pswp__img--placeholder";
                                d += l.msrc ? "" : " pswp__img--placeholder--blank";
                                var p = o.createEl(d, l.msrc ? "img" : "");
                                l.msrc && (p.src = l.msrc), ln(l, p), u.appendChild(p), l.placeholder = p
                            }
                            l.loading || an(l), r.allowProgressiveImg() && (!Bt && R.transform ? Jt.push({
                                item: l,
                                baseDiv: u,
                                img: l.img,
                                index: t,
                                holder: e
                            }) : rn(0, l, u, l.img, 0, !0))
                        }
                        Bt || t !== c ? Me(l) : (te = u.style, Qt(l, i || l.img)), e.el.innerHTML = "", e.el.appendChild(u)
                    },
                    cleanSlide: function(e) {
                        e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                    }
                }
            });
            var cn, dn = {},
                pn = function(e, t, n) {
                    var i = document.createEvent("CustomEvent"),
                        o = {
                            origEvent: e,
                            target: e.target,
                            releasePoint: t,
                            pointerType: n || "touch"
                        };
                    i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
                };
            Ce("Tap", {
                publicMethods: {
                    initTap: function() {
                        Ee("firstTouchStart", r.onTapStart), Ee("touchRelease", r.onTapRelease), Ee("destroy", function() {
                            dn = {}, cn = null
                        })
                    },
                    onTapStart: function(e) {
                        e.length > 1 && (clearTimeout(cn), cn = null)
                    },
                    onTapRelease: function(e, t) {
                        if (t && !X && !Y && !Ge) {
                            var n = t;
                            if (cn && (clearTimeout(cn), cn = null, yt(n, dn))) return void Ie("doubleTap", n);
                            if ("mouse" === t.type) return void pn(e, t, "mouse");
                            if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap")) return void pn(e, t);
                            Ve(dn, n), cn = setTimeout(function() {
                                pn(e, t), cn = null
                            }, 300)
                        }
                    }
                }
            });
            var fn;
            Ce("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function() {
                        V || (O ? Ee("mouseUsed", function() {
                            r.setupDesktopZoom()
                        }) : r.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function(t) {
                        fn = {};
                        var n = "wheel mousewheel DOMMouseScroll";
                        Ee("bindEvents", function() {
                            o.bind(e, n, r.handleMouseWheel)
                        }), Ee("unbindEvents", function() {
                            fn && o.unbind(e, n, r.handleMouseWheel)
                        }), r.mouseZoomedIn = !1;
                        var i, a = function() {
                                r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > v ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), s()
                            },
                            s = function() {
                                i && (o.removeClass(e, "pswp--dragging"), i = !1)
                            };
                        Ee("resize", a), Ee("afterChange", a), Ee("pointerDown", function() {
                            r.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
                        }), Ee("pointerUp", s), t || a()
                    },
                    handleMouseWheel: function(e) {
                        if (v <= r.currItem.fitRatio) return a.modal && (!a.closeOnScroll || Ge || q ? e.preventDefault() : k && Math.abs(e.deltaY) > 2 && (u = !0, r.close())), !0;
                        if (e.stopPropagation(), fn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (fn.x = 18 * e.deltaX, fn.y = 18 * e.deltaY) : (fn.x = e.deltaX, fn.y = e.deltaY);
                        else if ("wheelDelta" in e) e.wheelDeltaX && (fn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? fn.y = -.16 * e.wheelDeltaY : fn.y = -.16 * e.wheelDelta;
                        else {
                            if (!("detail" in e)) return;
                            fn.y = e.detail
                        }
                        je(v, !0);
                        var t = pe.x - fn.x,
                            n = pe.y - fn.y;
                        (a.modal || t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y) && e.preventDefault(), r.panTo(t, n)
                    },
                    toggleDesktopZoom: function(t) {
                        t = t || {
                            x: fe.x / 2 + me.x,
                            y: fe.y / 2 + me.y
                        };
                        var n = a.getDoubleTapZoom(!0, r.currItem),
                            i = v === n;
                        r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                    }
                }
            });
            var hn, mn, vn, gn, yn, bn, wn, xn, Cn, Tn, Sn, En, In = {
                    history: !0,
                    galleryUID: 1
                },
                Pn = function() {
                    return Sn.hash.substring(1)
                },
                kn = function() {
                    hn && clearTimeout(hn), vn && clearTimeout(vn)
                },
                An = function() {
                    var e = Pn(),
                        t = {};
                    if (e.length < 5) return t;
                    var n, i = e.split("&");
                    for (n = 0; n < i.length; n++)
                        if (i[n]) {
                            var o = i[n].split("=");
                            o.length < 2 || (t[o[0]] = o[1])
                        }
                    if (a.galleryPIDs) {
                        var r = t.pid;
                        for (t.pid = 0, n = 0; n < Yt.length; n++)
                            if (Yt[n].pid === r) {
                                t.pid = n;
                                break
                            }
                    } else t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0), t
                },
                On = function() {
                    if (vn && clearTimeout(vn), Ge || q) return void(vn = setTimeout(On, 500));
                    gn ? clearTimeout(mn) : gn = !0;
                    var e = c + 1,
                        t = Zt(c);
                    t.hasOwnProperty("pid") && (e = t.pid);
                    var n = wn + "&gid=" + a.galleryUID + "&pid=" + e;
                    xn || -1 === Sn.hash.indexOf(n) && (Tn = !0);
                    var i = Sn.href.split("#")[0] + "#" + n;
                    En ? "#" + n !== window.location.hash && history[xn ? "replaceState" : "pushState"]("", document.title, i) : xn ? Sn.replace(i) : Sn.hash = n, xn = !0, mn = setTimeout(function() {
                        gn = !1
                    }, 60)
                };
            Ce("History", {
                publicMethods: {
                    initHistory: function() {
                        if (o.extend(a, In, !0), a.history) {
                            Sn = window.location, Tn = !1, Cn = !1, xn = !1, wn = Pn(), En = "pushState" in history, wn.indexOf("gid=") > -1 && (wn = wn.split("&gid=")[0], wn = wn.split("?gid=")[0]), Ee("afterChange", r.updateURL), Ee("unbindEvents", function() {
                                o.unbind(window, "hashchange", r.onHashChange)
                            });
                            var e = function() {
                                bn = !0, Cn || (Tn ? history.back() : wn ? Sn.hash = wn : En ? history.pushState("", document.title, Sn.pathname + Sn.search) : Sn.hash = ""), kn()
                            };
                            Ee("unbindEvents", function() {
                                u && e()
                            }), Ee("destroy", function() {
                                bn || e()
                            }), Ee("firstUpdate", function() {
                                c = An().pid
                            });
                            var t = wn.indexOf("pid=");
                            t > -1 && (wn = wn.substring(0, t), "&" === wn.slice(-1) && (wn = wn.slice(0, -1))), setTimeout(function() {
                                s && o.bind(window, "hashchange", r.onHashChange)
                            }, 40)
                        }
                    },
                    onHashChange: function() {
                        return Pn() === wn ? (Cn = !0, void r.close()) : void(gn || (yn = !0, r.goTo(An().pid), yn = !1))
                    },
                    updateURL: function() {
                        kn(), yn || (xn ? hn = setTimeout(On, 800) : On())
                    }
                }
            }), o.extend(r, tt)
        }
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
    }(this, function() {
        "use strict";
        return function(e, t) {
            var n, i, o, r, a, s, l, u, c, d, p, f, h, m, v, g, y, b, w, x = this,
                C = !1,
                T = !0,
                S = !0,
                E = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function(e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    }],
                    getImageURLForShare: function() {
                        return e.currItem.src || ""
                    },
                    getPageURLForShare: function() {
                        return window.location.href
                    },
                    getTextForShare: function() {
                        return e.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                },
                I = function(e) {
                    if (g) return !0;
                    e = e || window.event, v.timeToIdle && v.mouseUsed && !c && N();
                    for (var n, i, o = e.target || e.srcElement, r = o.getAttribute("class") || "", a = 0; a < q.length; a++) n = q[a], n.onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
                    if (i) {
                        e.stopPropagation && e.stopPropagation(), g = !0;
                        var s = t.features.isOldAndroid ? 600 : 30;
                        y = setTimeout(function() {
                            g = !1
                        }, s)
                    }
                },
                P = function() {
                    return !e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth
                },
                k = function(e, n, i) {
                    t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
                },
                A = function() {
                    var e = 1 === v.getNumItemsFn();
                    e !== m && (k(i, "ui--one-slide", e), m = e)
                },
                O = function() {
                    k(l, "share-modal--hidden", S)
                },
                M = function() {
                    return S = !S, S ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() {
                        S && O()
                    }, 300)) : (O(), setTimeout(function() {
                        S || t.addClass(l, "pswp__share-modal--fade-in")
                    }, 30)), S || F(), !1
                },
                D = function(t) {
                    t = t || window.event;
                    var n = t.target || t.srcElement;
                    return e.shout("shareLinkClick", t, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), S || M(), !1))
                },
                F = function() {
                    for (var e, t, n, i, o, r = "", a = 0; a < v.shareButtons.length; a++) e = v.shareButtons[a], n = v.getImageURLForShare(e), i = v.getPageURLForShare(e), o = v.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (r = v.parseShareButtonOut(e, r));
                    l.children[0].innerHTML = r, l.children[0].onclick = D
                },
                L = function(e) {
                    for (var n = 0; n < v.closeElClasses.length; n++)
                        if (t.hasClass(e, "pswp__" + v.closeElClasses[n])) return !0
                },
                V = 0,
                N = function() {
                    clearTimeout(w), V = 0, c && x.setIdle(!1)
                },
                R = function(e) {
                    e = e ? e : window.event;
                    var t = e.relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(w), w = setTimeout(function() {
                        x.setIdle(!0)
                    }, v.timeToIdleOutside))
                },
                _ = function() {
                    v.fullscreenEl && !t.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
                },
                z = function() {
                    v.preloaderEl && (H(!0), d("beforeChange", function() {
                        clearTimeout(h), h = setTimeout(function() {
                            e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && H(!1) : H(!0)
                        }, v.loadingIndicatorDelay)
                    }), d("imageLoadComplete", function(t, n) {
                        e.currItem === n && H(!0)
                    }))
                },
                H = function(e) {
                    f !== e && (k(p, "preloader--active", !e), f = e)
                },
                j = function(e) {
                    var n = e.vGap;
                    if (P()) {
                        var a = v.barsSize;
                        if (v.captionEl && "auto" === a.bottom)
                            if (r || (r = t.createEl("pswp__caption pswp__caption--fake"), r.appendChild(t.createEl("pswp__caption__center")), i.insertBefore(r, o), t.addClass(i, "pswp__ui--fit")), v.addCaptionHTMLFn(e, r, !0)) {
                                var s = r.clientHeight;
                                n.bottom = parseInt(s, 10) || 44
                            } else n.bottom = a.top;
                        else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                        n.top = a.top
                    } else n.top = n.bottom = 0
                },
                $ = function() {
                    v.timeToIdle && d("mouseUsed", function() {
                        t.bind(document, "mousemove", N), t.bind(document, "mouseout", R), b = setInterval(function() {
                            2 === ++V && x.setIdle(!0)
                        }, v.timeToIdle / 2)
                    })
                },
                W = function() {
                    d("onVerticalDrag", function(e) {
                        T && .95 > e ? x.hideControls() : !T && e >= .95 && x.showControls()
                    });
                    var e;
                    d("onPinchClose", function(t) {
                        T && .9 > t ? (x.hideControls(), e = !0) : e && !T && t > .9 && x.showControls()
                    }), d("zoomGestureEnded", function() {
                        (e = !1) && !T && x.showControls()
                    })
                },
                q = [{
                    name: "caption",
                    option: "captionEl",
                    onInit: function(e) {
                        o = e
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function(e) {
                        l = e
                    },
                    onTap: function() {
                        M()
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function(e) {
                        s = e
                    },
                    onTap: function() {
                        M()
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: e.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function(e) {
                        a = e
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: e.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: e.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: e.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function() {
                        n.isFullscreen() ? n.exit() : n.enter()
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function(e) {
                        p = e
                    }
                }],
                Y = function() {
                    var e, n, o, r = function(i) {
                        if (i)
                            for (var r = i.length, a = 0; r > a; a++) {
                                e = i[a], n = e.className;
                                for (var s = 0; s < q.length; s++) o = q[s], n.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                            }
                    };
                    r(i.children);
                    var a = t.getChildByClass(i, "pswp__top-bar");
                    a && r(a.children)
                };
            x.init = function() {
                t.extend(e.options, E, !0), v = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, W(), d("beforeChange", x.update), d("doubleTap", function(t) {
                    var n = e.currItem.initialZoomLevel;
                    e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
                }), d("preventDragEvent", function(e, t, n) {
                    var i = e.target || e.srcElement;
                    i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
                }), d("bindEvents", function() {
                    t.bind(i, "pswpTap click", I), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
                }), d("unbindEvents", function() {
                    S || M(), b && clearInterval(b), t.unbind(document, "mouseout", R), t.unbind(document, "mousemove", N), t.unbind(i, "pswpTap click", I), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (v.hideAnimationDuration = 0, n.exit()), n = null)
                }), d("destroy", function() {
                    v.captionEl && (r && i.removeChild(r), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), x.setIdle(!1)
                }), v.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function() {
                    v.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
                }), d("initialZoomOut", function() {
                    t.addClass(i, "pswp__ui--hidden")
                }), d("parseVerticalMargin", j), Y(), v.shareEl && s && l && (S = !0), A(), $(), _(), z()
            }, x.setIdle = function(e) {
                c = e, k(i, "ui--idle", e)
            }, x.update = function() {
                T && e.currItem ? (x.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, o), k(o, "caption--empty", !e.currItem.title)), C = !0) : C = !1, S || M(), A()
            }, x.updateFullscreen = function(i) {
                i && setTimeout(function() {
                    e.setScrollOffset(0, t.getScrollY())
                }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
            }, x.updateIndexIndicator = function() {
                v.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
            }, x.onGlobalTap = function(n) {
                n = n || window.event;
                var i = n.target || n.srcElement;
                if (!g)
                    if (n.detail && "mouse" === n.detail.pointerType) {
                        if (L(i)) return void e.close();
                        t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
                    } else if (v.tapToToggleControls && (T ? x.hideControls() : x.showControls()), v.tapToClose && (t.hasClass(i, "pswp__img") || L(i))) return void e.close()
            }, x.onMouseOver = function(e) {
                e = e || window.event, k(i, "ui--over-close", L(e.target || e.srcElement))
            }, x.hideControls = function() {
                t.addClass(i, "pswp__ui--hidden"), T = !1
            }, x.showControls = function() {
                T = !0, C || x.update(), t.removeClass(i, "pswp__ui--hidden")
            }, x.supportsFullscreen = function() {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
            }, x.getFullscreenAPI = function() {
                var t, n = document.documentElement,
                    i = "fullscreenchange";
                return n.requestFullscreen ? t = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: i
                } : n.mozRequestFullScreen ? t = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + i
                } : n.webkitRequestFullscreen ? t = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + i
                } : n.msRequestFullscreen && (t = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), t && (t.enter = function() {
                    return u = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, t.exit = function() {
                    return v.closeOnScroll = u, document[this.exitK]()
                }, t.isFullscreen = function() {
                    return document[this.elementK]
                }), t
            }
        }
    });
var initPhotoSwipeFromDOM = function(e) {
    for (var t = function(e) {
            for (var t, n, i, o, r = e.childNodes, a = r.length, s = [], l = 0; l < a; l++) t = r[l], 1 === t.nodeType && (n = t.children[0], i = n.getAttribute("data-size").split("x"), o = {
                src: n.getAttribute("href"),
                w: parseInt(i[0], 10),
                h: parseInt(i[1], 10)
            }, t.children.length > 1 && (o.title = t.children[1].innerHTML), n.children.length > 0 && (o.msrc = n.children[0].getAttribute("src")), o.el = t, s.push(o));
            return s
        }, n = function e(t, n) {
            return t && (n(t) ? t : e(t.parentNode, n))
        }, i = function(e) {
            e = e || window.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            var t = e.target || e.srcElement,
                i = n(t, function(e) {
                    return e.tagName && "FIGURE" === e.tagName.toUpperCase()
                });
            if (i) {
                for (var r, a = i.parentNode, s = i.parentNode.childNodes, l = s.length, u = 0, c = 0; c < l; c++)
                    if (1 === s[c].nodeType) {
                        if (s[c] === i) {
                            r = u;
                            break
                        }
                        u++
                    }
                return r >= 0 && o(r, a), !1
            }
        }, o = function(e, n, i, o) {
            var r, a, s, l = document.querySelectorAll(".pswp")[0];
            if (s = t(n), a = {
                    galleryUID: n.getAttribute("data-pswp-uid"),
                    getThumbBoundsFn: function(e) {
                        var t = s[e].el.getElementsByTagName("img")[0],
                            n = window.pageYOffset || document.documentElement.scrollTop,
                            i = t.getBoundingClientRect();
                        return {
                            x: i.left,
                            y: i.top + n,
                            w: i.width
                        }
                    }
                }, o)
                if (a.galleryPIDs) {
                    for (var u = 0; u < s.length; u++)
                        if (s[u].pid == e) {
                            a.index = u;
                            break
                        }
                } else a.index = parseInt(e, 10) - 1;
            else a.index = parseInt(e, 10);
            isNaN(a.index) || (i && (a.showAnimationDuration = 0), r = new PhotoSwipe(l, PhotoSwipeUI_Default, s, a), r.init())
        }, r = document.querySelectorAll(e), a = 0, s = r.length; a < s; a++) r[a].setAttribute("data-pswp-uid", a + 1), r[a].onclick = i;
    var l = function() {
        var e = window.location.hash.substring(1),
            t = {};
        if (e.length < 5) return t;
        for (var n = e.split("&"), i = 0; i < n.length; i++)
            if (n[i]) {
                var o = n[i].split("=");
                o.length < 2 || (t[o[0]] = o[1])
            }
        return t.gid && (t.gid = parseInt(t.gid, 10)), t
    }();
    l.pid && l.gid && o(l.pid, r[l.gid - 1], !0, !0)
};
initPhotoSwipeFromDOM(".mdb-lightbox"), $(function() {
    $(".arrow-r").on("click", function() {
        $(".arrow-r").not(this).find(".fa-angle-down").removeClass("rotate-element"), $(this).find(".fa-angle-down").toggleClass("rotate-element")
    })
}), $("body").on("shown.bs.modal", ".modal", function() {
    $(".modal-backdrop").length || ($modal_dialog = $(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && ($(this).addClass("modal-scrolling"), $("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && ($(this).addClass("modal-content-clickable"), $("body").addClass("scrollable")))
}), $("body").on("hidden.bs.modal", ".modal", function() {
    $("body").removeClass("scrollable")
});