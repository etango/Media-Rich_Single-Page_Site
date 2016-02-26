/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-audio-bgsizecover-flexbox-srcdoc-setclasses !*/
 ! function(e, n, t) {
   function o(e, n) {
       return typeof e === n
         }

	   function r() {
	       var e, n, t, r, s, a, i;
	           for (var l in w)
		         if (w.hasOwnProperty(l)) {
			         if (e = [], n = w[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
				           for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
					           for (r = o(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) a = e[s], i = a.split("."), 1 === i.length ? Modernizr[i[0]] = r : (!Modernizr[i[0]] || Modernizr[i[0]] instanceof Boolean || (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])), Modernizr[i[0]][i[1]] = r), h.push((r ? "" : "no-") + i.join("-"))
						         }
							   }

							     function s(e) {
							         var n = x.className,
								       t = Modernizr._config.classPrefix || "";
								           if (T && (n = n.baseVal), Modernizr._config.enableJSClass) {
									         var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
										       n = n.replace(o, "$1" + t + "js$2")
										           }
											       Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), T ? x.className.baseVal = n : x.className = n)
											         }

												   function a() {
												       return "function" != typeof n.createElement ? n.createElement(arguments[0]) : T ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
												         }

													   function i(e, n) {
													       return !!~("" + e).indexOf(n)
													         }

														   function l(e) {
														       return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
														             return n + t.toUpperCase()
															         }).replace(/^-/, "")
																   }

																     function u(e, n) {
																         return function() {
																	       return e.apply(n, arguments)
																	           }
																		     }

																		       function c(e, n, t) {
																		           var r;
																			       for (var s in e)
																			             if (e[s] in n) return t === !1 ? e[s] : (r = n[e[s]], o(r, "function") ? u(r, t || n) : r);
																				         return !1
																					   }

																					     function f(e) {
																					         return e.replace(/([A-Z])/g, function(e, n) {
																						       return "-" + n.toLowerCase()
																						           }).replace(/^ms-/, "-ms-")
																							     }

																							       function d() {
																							           var e = n.body;
																								       return e || (e = a(T ? "svg" : "body"), e.fake = !0), e
																								         }

																									   function p(e, t, o, r) {
																									       var s, i, l, u, c = "modernizr",
																									             f = a("div"),
																										           p = d();
																											       if (parseInt(o, 10))
																											             for (; o--;) l = a("div"), l.id = r ? r[o] : c + (o + 1), f.appendChild(l);
																												         return s = a("style"), s.type = "text/css", s.id = "s" + c, (p.fake ? p : f).appendChild(s), p.appendChild(f), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), f.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), i = t(f, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = u, x.offsetHeight) : f.parentNode.removeChild(f), !!i
																													   }

																													     function m(n, o) {
																													         var r = n.length;
																														     if ("CSS" in e && "supports" in e.CSS) {
																														           for (; r--;)
																															           if (e.CSS.supports(f(n[r]), o)) return !0;
																																         return !1
																																	     }
																																	         if ("CSSSupportsRule" in e) {
																																		       for (var s = []; r--;) s.push("(" + f(n[r]) + ":" + o + ")");
																																		             return s = s.join(" or "), p("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
																																			             return "absolute" == getComputedStyle(e, null).position
																																				           })
																																					       }
																																					           return t
																																						     }

																																						       function y(e, n, r, s) {
																																						           function u() {
																																							         f && (delete z.style, delete z.modElem)
																																								     }
																																								         if (s = o(s, "undefined") ? !1 : s, !o(r, "undefined")) {
																																									       var c = m(e, r);
																																									             if (!o(c, "undefined")) return c
																																										         }
																																											     for (var f, d, p, y, v, g = ["modernizr", "tspan"]; !z.style;) f = !0, z.modElem = a(g.shift()), z.style = z.modElem.style;
																																											         for (p = e.length, d = 0; p > d; d++)
																																												       if (y = e[d], v = z.style[y], i(y, "-") && (y = l(y)), z.style[y] !== t) {
																																												               if (s || o(r, "undefined")) return u(), "pfx" == n ? y : !0;
																																													               try {
																																														                 z.style[y] = r
																																																         } catch (h) {}
																																																	         if (z.style[y] != v) return u(), "pfx" == n ? y : !0
																																																		       }
																																																		           return u(), !1
																																																			     }

																																																			       function v(e, n, t, r, s) {
																																																			           var a = e.charAt(0).toUpperCase() + e.slice(1),
																																																				         i = (e + " " + _.join(a + " ") + a).split(" ");
																																																					     return o(n, "string") || o(n, "undefined") ? y(i, n, r, s) : (i = (e + " " + b.join(a + " ") + a).split(" "), c(i, n, t))
																																																					       }

																																																					         function g(e, n, o) {
																																																						     return v(e, t, t, n, o)
																																																						       }
																																																						         var h = [],
																																																							     w = [],
																																																							         C = {
																																																								       _version: "3.3.1",
																																																								             _config: {
																																																									             classPrefix: "",
																																																										             enableClasses: !0,
																																																											             enableJSClass: !0,
																																																												             usePrefixes: !0
																																																													           },
																																																														         _q: [],
																																																															       on: function(e, n) {
																																																															               var t = this;
																																																																               setTimeout(function() {
																																																																	                 n(t[e])
																																																																			         }, 0)
																																																																				       },
																																																																				             addTest: function(e, n, t) {
																																																																					             w.push({
																																																																						               name: e,
																																																																							                 fn: n,
																																																																									           options: t
																																																																										           })
																																																																											         },
																																																																												       addAsyncTest: function(e) {
																																																																												               w.push({
																																																																													                 name: null,
																																																																															           fn: e
																																																																																           })
																																																																																	         }
																																																																																		     },
																																																																																		         Modernizr = function() {};
																																																																																			   Modernizr.prototype = C, Modernizr = new Modernizr;
																																																																																			     var x = n.documentElement,
																																																																																			         T = "svg" === x.nodeName.toLowerCase();
																																																																																				   Modernizr.addTest("audio", function() {
																																																																																				       var e = a("audio"),
																																																																																				             n = !1;
																																																																																					         try {
																																																																																						       (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), n.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
																																																																																						           } catch (t) {}
																																																																																							       return n
																																																																																							         }), Modernizr.addTest("srcdoc", "srcdoc" in a("iframe"));
																																																																																								   var P = "Moz O ms Webkit",
																																																																																								       _ = C._config.usePrefixes ? P.split(" ") : [];
																																																																																								         C._cssomPrefixes = _;
																																																																																									   var b = C._config.usePrefixes ? P.toLowerCase().split(" ") : [];
																																																																																									     C._domPrefixes = b;
																																																																																									       var S = {
																																																																																									           elem: a("modernizr")
																																																																																										     };
																																																																																										       Modernizr._q.push(function() {
																																																																																										           delete S.elem
																																																																																											     });
																																																																																											       var z = {
																																																																																											           style: S.elem.style
																																																																																												     };
																																																																																												       Modernizr._q.unshift(function() {
																																																																																												           delete z.style
																																																																																													     }), C.testAllProps = v, C.testAllProps = g, Modernizr.addTest("bgsizecover", g("backgroundSize", "cover")), Modernizr.addTest("flexbox", g("flexBasis", "1px", !0)), r(), s(h), delete C.addTest, delete C.addAsyncTest;
																																																																																													       for (var E = 0; E < Modernizr._q.length; E++) Modernizr._q[E]();
																																																																																													         e.Modernizr = Modernizr
																																																																																														 }(window, document);
