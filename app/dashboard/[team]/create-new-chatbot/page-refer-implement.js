(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7498], {
    97498: function(e, t, s) {
        "use strict";
        s.d(t, {
            default: function() {
                return eE
            }
        });
        var n = s(57437)
          , i = s(16463)
          , a = s(2265)
          , r = s(93191)
          , l = s(2183)
          , c = s(27776)
          , o = s(97660)
          , d = s(39384)
          , u = s(38721)
          , x = s(13744)
          , m = s(9935)
          , h = s(51963)
          , f = s(78550)
          , p = s(55282)
          , g = s(12591)
          , v = s(37671)
          , j = s(67365)
          , b = s(33888)
          , w = s(12341)
          , N = s(25524);
        async function y(e) {
            let t = await fetch("".concat("https://api.chatbase.co", "/api/upsert-sources"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(e.accessToken)
                },
                body: JSON.stringify(e)
            });
            if (!t.ok)
                return {
                    error: "Failed to update sources",
                    data: null
                };
            try {
                let {data: e, error: s} = await t.json();
                if (s)
                    return {
                        error: s,
                        data: null
                    };
                return {
                    data: e.chatbot_id,
                    error: null
                }
            } catch (e) {
                return {
                    error: e,
                    data: null
                }
            }
        }
        var z = function() {
            var e;
            let t = null === (e = (0,
            h.F)().session) || void 0 === e ? void 0 : e.access_token;
            if (!t)
                throw new w.D("No access token found");
            return (0,
            N.useMutation)({
                mutationKey: ["upsert-sources"],
                mutationFn: async e => await y({
                    ...e,
                    accessToken: t
                })
            })
        }
          , k = s(9315)
          , C = s(86037)
          , I = s(48185)
          , S = s(19006)
          , _ = s(76351);
        let A = e => {
            let t;
            let s = []
              , n = []
              , i = []
              , a = [];
            if (!e)
                return {
                    initialFileSources: s,
                    initialTextInputSource: t,
                    initialQnASources: i,
                    initialFetchedLinksSources: n,
                    initialNotionPagesSource: a
                };
            for (let r of e)
                switch (r.type) {
                case "link":
                    n.find(e => e.url === r.url) || n.push(r);
                    break;
                case "file":
                    r.is_text_input ? t = r : s.push(r);
                    break;
                case "notion_page":
                    a.push(r);
                    break;
                case "qna":
                    i.push(r)
                }
            return {
                initialFileSources: s,
                initialTextInputSource: t,
                initialFetchedLinksSources: n,
                initialQnASources: i,
                initialNotionPagesSource: a
            }
        }
        ;
        var T = function(e) {
            let {start: t, duration: s, done: i} = e
              , [r,l] = a.useState(0)
              , c = Date.now();
            return (a.useEffect( () => {
                if (!t) {
                    l(0);
                    return
                }
                if (i) {
                    l(100);
                    return
                }
                let e = setInterval( () => {
                    l(Math.min((Date.now() - c) / s * 100, 100))
                }
                , 100);
                return () => {
                    clearInterval(e)
                }
            }
            , [i, t]),
            t) ? (0,
            n.jsxs)("div", {
                className: "w-full rounded-full  py-4",
                children: [(0,
                n.jsxs)("p", {
                    className: "text-xs text-zinc-600",
                    children: [" ", r.toFixed(0), "%"]
                }), (0,
                n.jsx)("div", {
                    className: "h-2 rounded-full bg-violet-600 p-0.5 text-center text-xs font-medium leading-none text-violet-100",
                    style: {
                        width: r + "%"
                    }
                })]
            }) : null
        }
          , E = s(89733)
          , D = s(1633)
          , R = s(4082)
          , L = function(e) {
            var t;
            let {filesInputextractedTexts: s, textInputExtractedText: i, filesInputCombinedExtractedText: a, fetchedLinks: r, qnaItems: l, notionPages: c, loading: o, isPopulating: d, startedPopulating: u, endedPopulating: x, handleSubmit: h, chatbotId: f, existingFileSources: p} = e
              , g = null === (t = (0,
            m.qd)().data) || void 0 === t ? void 0 : t.subscription
              , v = [...s, ...p]
              , b = a.length + p.reduce( (e, t) => e + t.num_of_characters, 0)
              , w = r.reduce( (e, t) => {
                var s;
                return e + (null !== (s = t.size) && void 0 !== s ? s : 0)
            }
            , 0)
              , N = l.reduce( (e, t) => e + (t.answer.length + t.question.length), 0)
              , y = c.reduce( (e, t) => {
                var s;
                return e + (null !== (s = t.numChars) && void 0 !== s ? s : 0)
            }
            , 0)
              , z = b + i.text.length + N + w + y;
            return (0,
            n.jsxs)("div", {
                className: "p-4",
                children: [(0,
                n.jsx)("div", {
                    className: "text-center font-semibold lg:mb-2",
                    children: "Sources"
                }), (0,
                n.jsxs)("div", {
                    className: "mb-4 flex flex-col space-y-2",
                    children: [v.length > 0 && (0,
                    n.jsxs)("div", {
                        className: "text-sm text-zinc-700",
                        children: [v.length, " File", 1 === v.length ? "" : "s", " ", "(", (0,
                        j.x6)(b), " chars)"]
                    }), i.text.length > 0 && (0,
                    n.jsxs)("div", {
                        className: "text-sm text-zinc-700",
                        children: [(0,
                        j.x6)(i.text.length), " ", "text input chars"]
                    }), r.length > 0 && (0,
                    n.jsxs)("div", {
                        className: "text-sm text-zinc-700",
                        children: [r.length, " Link", 1 === r.length ? "" : "s", " (", (0,
                        j.x6)(w), " detected chars)"]
                    }), l.length > 0 && (0,
                    n.jsxs)("div", {
                        className: "text-sm text-zinc-700",
                        children: [l.length, " Q&A (", (0,
                        j.x6)(N), " chars)"]
                    }), (null == c ? void 0 : c.length) > 0 && (0,
                    n.jsxs)("div", {
                        className: "text-sm text-zinc-700",
                        children: [c.length, " Notion Pages (", (0,
                        j.x6)(y), " chars)"]
                    })]
                }), (0,
                n.jsxs)("p", {
                    className: "flex flex-col text-sm",
                    children: [(0,
                    n.jsxs)("span", {
                        className: "font-semibold",
                        children: ["Total detected characters", " "]
                    }), (0,
                    n.jsxs)("span", {
                        className: "flex justify-center",
                        children: [(0,
                        n.jsx)("span", {
                            className: "font-bold",
                            children: (0,
                            j.x6)(z)
                        }), " ", (0,
                        n.jsxs)("span", {
                            className: " text-zinc-500",
                            children: ["/ ", (0,
                            j.x6)((0,
                            R.Po)(g)), " ", "limit"]
                        })]
                    })]
                }), (0,
                n.jsx)(E.z, {
                    type: "submit",
                    disabled: o || d,
                    loading: d,
                    className: " mt-4 w-full",
                    onClick: h,
                    children: f ? "Retrain Chatbot" : "Create Chatbot"
                }), (0,
                n.jsx)(T, {
                    start: u,
                    duration: D.tL,
                    done: x
                })]
            })
        }
          , F = s(34826)
          , Z = s(77209)
          , P = s(80023)
          , q = s(16349);
        let G = a.forwardRef( (e, t) => {
            let {className: s, viewportClassName: i, children: a, ...r} = e;
            return (0,
            n.jsxs)(P.fC, {
                ref: t,
                className: (0,
                q.cn)("relative overflow-hidden", s),
                ...r,
                children: [(0,
                n.jsx)(P.l_, {
                    className: (0,
                    q.cn)(" w-full rounded-[inherit]", i),
                    children: a
                }), (0,
                n.jsx)(U, {}), (0,
                n.jsx)(P.Ns, {})]
            })
        }
        );
        G.displayName = P.fC.displayName;
        let U = a.forwardRef( (e, t) => {
            let {className: s, orientation: i="vertical", ...a} = e;
            return (0,
            n.jsx)(P.gb, {
                ref: t,
                orientation: i,
                className: (0,
                q.cn)("flex touch-none select-none transition-colors", "vertical" === i && "h-full w-2.5 border-l border-l-transparent p-[1px] py-2", "horizontal" === i && "h-2.5 flex-col border-t border-t-transparent p-[1px]", s),
                ...a,
                children: (0,
                n.jsx)(P.q4, {
                    className: "relative flex-1 rounded-full bg-zinc-200 dark:bg-zinc-800"
                })
            })
        }
        );
        U.displayName = P.gb.displayName;
        var O = s(92513)
          , Y = s(90399)
          , Q = s(30690)
          , B = s(89736)
          , M = s(54662)
          , W = s(36127);
        let K = {
            link: {
                title: "Delete link sources",
                description: "Are you sure you want to delete all link sources?"
            },
            qna: {
                title: "Delete QnA sources",
                description: "Are you sure you want to delete all QnA sources?"
            }
        };
        function V(e) {
            let {onDelete: t, sourceType: s} = e;
            return (0,
            n.jsxs)(M.Dialog, {
                children: [(0,
                n.jsx)(M.DialogTrigger, {
                    asChild: !0,
                    children: (0,
                    n.jsx)(E.z, {
                        variant: "destructiveGhost",
                        children: "Delete all"
                    })
                }), (0,
                n.jsxs)(M.cZ, {
                    children: [(0,
                    n.jsxs)("div", {
                        className: "sm:flex sm:items-start",
                        children: [(0,
                        n.jsx)("div", {
                            className: "mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",
                            children: (0,
                            n.jsx)(W.Z, {
                                className: "h-6 w-6 text-red-600",
                                "aria-hidden": "true"
                            })
                        }), (0,
                        n.jsxs)("div", {
                            className: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",
                            children: [(0,
                            n.jsx)(M.$N, {
                                className: "text-lg font-medium leading-6 text-zinc-900",
                                children: K[s].title
                            }), (0,
                            n.jsxs)("div", {
                                className: "mt-2",
                                children: [(0,
                                n.jsx)("p", {
                                    className: "text-sm text-zinc-500",
                                    children: K[s].description
                                }), (0,
                                n.jsx)("p", {
                                    className: "mt-2 text-sm font-semibold",
                                    children: "Make sure to retrain your chatbot after deleting sources!"
                                })]
                            })]
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "mt-5 flex justify-end gap-2",
                        children: [(0,
                        n.jsx)(M.GG, {
                            asChild: !0,
                            children: (0,
                            n.jsx)(E.z, {
                                variant: "outline",
                                autoFocus: !0,
                                children: "Cancel"
                            })
                        }), (0,
                        n.jsx)(M.GG, {
                            asChild: !0,
                            children: (0,
                            n.jsx)(E.z, {
                                variant: "destructive",
                                onClick: t,
                                children: "Delete"
                            })
                        })]
                    })]
                })]
            })
        }
        function H(e) {
            let {fetchedLink: t, setFetchedLinks: s, index: i} = e
              , [r,l] = (0,
            a.useState)(!1);
            return (0,
            n.jsxs)("div", {
                className: "mt-2",
                children: [(0,
                n.jsxs)("div", {
                    className: "flex items-center",
                    children: [t.status ? (0,
                    n.jsx)("div", {
                        className: "mr-2 flex w-[150px] items-center md:w-[110px]",
                        children: t.status === g.W.TRAINING ? (0,
                        n.jsx)(X, {}) : t.status === g.W.TRAINED ? (0,
                        n.jsx)($, {}) : t.status === g.W.FAILED ? (0,
                        n.jsx)(ee, {}) : (0,
                        n.jsx)(et, {})
                    }) : null, (0,
                    n.jsxs)("div", {
                        className: "flex w-full items-center",
                        children: [(0,
                        n.jsx)(Z.I, {
                            type: "text",
                            name: "website",
                            placeholder: "https://www.example.com/",
                            value: t.url,
                            onChange: e => {
                                let t = e.target.value.trim();
                                (0,
                                j.K2)(t) ? l(!1) : l(!0),
                                "" === t && l(!1),
                                s(e => e.map( (e, s) => s === i ? {
                                    url: t,
                                    size: void 0
                                } : e))
                            }
                        }), t.size && (0,
                        n.jsx)("p", {
                            className: "ml-2 w-12 text-xs",
                            children: t.size
                        }), (0,
                        n.jsx)(E.z, {
                            variant: "destructiveGhost",
                            size: "icon",
                            type: "button",
                            className: "ml-2 px-2",
                            onClick: () => {
                                s(e => e.filter( (e, t) => t !== i))
                            }
                            ,
                            children: (0,
                            n.jsx)(Y.Z, {
                                className: "h-4 w-4"
                            })
                        })]
                    })]
                }), r && (0,
                n.jsx)("p", {
                    className: "mt-2 text-sm text-red-600",
                    children: "Invalid URL"
                })]
            })
        }
        var J = function(e) {
            let {fetchedLinks: t, setFetchedLinks: s} = e
              , i = t.reduce( (e, t) => {
                var s;
                return e + (null !== (s = t.size) && void 0 !== s ? s : 0)
            }
            , 0);
            return (0,
            n.jsxs)("div", {
                className: "mt-12",
                children: [(0,
                n.jsx)(F.Z, {
                    text: "Included Links"
                }), (0,
                n.jsxs)("div", {
                    className: "mr-4 flex items-center justify-end gap-3",
                    children: [t.length > 0 && (0,
                    n.jsx)(V, {
                        onDelete: () => {
                            s([])
                        }
                        ,
                        sourceType: "link"
                    }), (0,
                    n.jsx)(E.z, {
                        variant: "secondary",
                        size: "icon",
                        type: "button",
                        onClick: () => s(e => [{
                            url: "",
                            size: void 0
                        }, ...e]),
                        children: (0,
                        n.jsx)(O.Z, {
                            className: "h-4 w-4 text-zinc-700"
                        })
                    })]
                }), (0,
                n.jsx)(G, {
                    className: "mt-6 pr-3 ",
                    viewportClassName: "max-h-[70vh]",
                    children: t.map( (e, t) => (0,
                    n.jsx)(H, {
                        fetchedLink: e,
                        setFetchedLinks: s,
                        index: t
                    }, "".concat(t)))
                }), i > 0 && (0,
                n.jsx)("div", {
                    className: "flex justify-end",
                    children: (0,
                    n.jsxs)("p", {
                        className: "mt-2 text-xs text-zinc-600",
                        children: [(0,
                        j.x6)(i), " detected characters"]
                    })
                })]
            })
        };
        function $() {
            return (0,
            n.jsx)(B.pn, {
                delayDuration: 200,
                children: (0,
                n.jsxs)(B.u, {
                    children: [(0,
                    n.jsx)(B.aJ, {
                        className: "w-full",
                        children: (0,
                        n.jsxs)("span", {
                            className: "inline-flex w-full items-center justify-between rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20",
                            children: ["Trained", (0,
                            n.jsx)(Q.Z, {
                                className: "h-4 w-4"
                            })]
                        })
                    }), (0,
                    n.jsx)(B._v, {
                        children: "Your chatbot has been trained on this source."
                    })]
                })
            })
        }
        function X() {
            return (0,
            n.jsx)(B.pn, {
                delayDuration: 200,
                children: (0,
                n.jsxs)(B.u, {
                    children: [(0,
                    n.jsx)(B.aJ, {
                        className: "w-full",
                        children: (0,
                        n.jsxs)("span", {
                            className: "inline-flex w-full items-center justify-between rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-red-600/20",
                            children: ["Training", (0,
                            n.jsx)(Q.Z, {
                                className: "h-4 w-4"
                            })]
                        })
                    }), (0,
                    n.jsx)(B._v, {
                        children: "Your chatbot is being trained on this source."
                    })]
                })
            })
        }
        function ee() {
            return (0,
            n.jsx)(B.pn, {
                delayDuration: 200,
                children: (0,
                n.jsxs)(B.u, {
                    children: [(0,
                    n.jsx)(B.aJ, {
                        className: "w-full",
                        children: (0,
                        n.jsxs)("span", {
                            className: "inline-flex w-full items-center justify-between rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20",
                            children: ["Failed ", (0,
                            n.jsx)(Q.Z, {
                                className: "h-4 w-4"
                            })]
                        })
                    }), (0,
                    n.jsx)(B._v, {
                        children: "Your chatbot failed to train on this source. This link couldn't be scraped."
                    })]
                })
            })
        }
        function et() {
            return (0,
            n.jsx)(B.pn, {
                delayDuration: 200,
                children: (0,
                n.jsxs)(B.u, {
                    children: [(0,
                    n.jsx)(B.aJ, {
                        className: "w-full",
                        children: (0,
                        n.jsxs)("span", {
                            className: "inline-flex w-full items-center justify-between rounded-md bg-red-50 px-2 py-1 text-left text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20",
                            children: [(0,
                            n.jsxs)("span", {
                                className: "",
                                children: [" ", (0,
                                n.jsx)("span", {
                                    className: "mr-[2px] font-extrabold",
                                    children: ">"
                                }), "Limit"]
                            }), (0,
                            n.jsx)(Q.Z, {
                                className: "h-4 w-4"
                            })]
                        })
                    }), (0,
                    n.jsx)(B._v, {
                        className: "bg-zinc-900",
                        children: "Your chatbot failed to train on this source because your character plan's limit for this chatbot has been exceeded."
                    })]
                })
            })
        }
        function es(e) {
            let {fetchedLinks: t, setFetchedLinks: s, loading: i, setLoading: r} = e
              , [l,o] = a.useState("")
              , [d,u] = a.useState(!1)
              , x = async () => {
                if (!l)
                    return c.A.error("Please enter a URL");
                if (!(0,
                j.K2)(l)) {
                    c.A.error("Invalid URL");
                    return
                }
                r(!0),
                u(!0);
                try {
                    let e = await fetch("/api/sitemap?sitemapUrl=".concat(encodeURIComponent(l)))
                      , t = await e.json();
                    if ("message"in t)
                        throw Error(t.message);
                    s(e => e.concat(t.map(e => ({
                        url: e,
                        type: "website"
                    })))),
                    o(""),
                    r(!1),
                    u(!1)
                } catch (e) {
                    r(!1),
                    u(!1),
                    c.A.error(e instanceof Error ? e.message : "Something went wrong")
                }
            }
            ;
            return (0,
            n.jsxs)("div", {
                children: [(0,
                n.jsx)("label", {
                    htmlFor: "sitemap",
                    className: "my-2 block text-sm font-medium leading-6 text-zinc-900",
                    children: "Submit Sitemap"
                }), (0,
                n.jsx)("div", {
                    className: "relative mt-2 rounded-md ",
                    children: (0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-2 lg:flex-row",
                        children: [(0,
                        n.jsx)(Z.I, {
                            type: "text",
                            name: "sitemap",
                            placeholder: "https://www.example.com/sitemap.xml",
                            value: l,
                            onChange: e => {
                                o(e.target.value.trim())
                            }
                        }), (0,
                        n.jsx)(E.z, {
                            disabled: i,
                            loading: d,
                            onClick: () => x(),
                            children: t.length > 0 ? "Load additional sitemap" : "Load sitemap"
                        })]
                    })
                })]
            })
        }
        var en = function(e) {
            var t;
            let {fetchedLinks: s, setFetchedLinks: i, loading: r, setLoading: l} = e
              , [o,d] = a.useState("")
              , [u,x] = a.useState(!1)
              , [m,f] = a.useState(!1)
              , [p,g] = a.useState(!1)
              , [v,b] = a.useState(!1)
              , w = null === (t = (0,
            h.F)().session) || void 0 === t ? void 0 : t.access_token
              , N = async () => {
                if (o) {
                    if (!(0,
                    j.K2)(o)) {
                        x(!0);
                        return
                    }
                    l(!0),
                    f(!0),
                    g(!0),
                    b(!1);
                    try {
                        let e = await fetch("".concat("https://api.chatbase.co", "/api/fetch-links?sourceURL=").concat(o), {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(w)
                            }
                        });
                        if (!e.ok)
                            throw Error("Something went wrong");
                        let t = await e.json();
                        if (!t || !t.fetchedLinks)
                            throw Error("Could not fetch links");
                        t.stoppingReason && (c.A.error("Crawling stopped", {
                            description: t.stoppingReason
                        }),
                        f(!1)),
                        i(e => {
                            let s = t.fetchedLinks.filter(t => !e.some(e => e.url === t.url));
                            return [...e, ...s]
                        }
                        ),
                        d(""),
                        x(!1),
                        f(!1),
                        l(!1),
                        b(!0)
                    } catch (e) {
                        console.log(e),
                        e instanceof Error ? c.A.error("Error", {
                            description: e.message
                        }) : c.A.error("Error", {
                            description: "Something went wrong"
                        }),
                        l(!1),
                        f(!1),
                        b(!0),
                        g(!1)
                    }
                }
            }
            ;
            return (0,
            n.jsxs)("div", {
                children: [(0,
                n.jsx)("label", {
                    className: "my-2 block text-sm font-medium leading-6 text-zinc-900",
                    children: "Crawl"
                }), (0,
                n.jsxs)("div", {
                    className: "relative mt-2 rounded-md",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-2 lg:flex-row ",
                        children: [(0,
                        n.jsx)(Z.I, {
                            type: "text",
                            name: "website",
                            placeholder: "https://www.example.com",
                            value: o,
                            onChange: e => {
                                let t = e.target.value.trim();
                                (0,
                                j.K2)(t) ? x(!1) : x(!0),
                                "" === t && x(!1),
                                d(t)
                            }
                        }), (0,
                        n.jsx)(E.z, {
                            disabled: r,
                            loading: m,
                            onClick: () => N(),
                            children: s.length > 0 ? "Fetch more links" : "Fetch links"
                        })]
                    }), (0,
                    n.jsx)(T, {
                        start: p,
                        duration: D.xK,
                        done: v
                    }), u && (0,
                    n.jsx)("p", {
                        className: "text-sm text-red-600",
                        children: "Invalid URL"
                    }), (0,
                    n.jsxs)("div", {
                        className: "py-4 text-sm text-zinc-600",
                        children: ["This will crawl all the links starting with", " ", o ? "'".concat(o, "'") : "the URL", " (not including files on the website)."]
                    })]
                }), (0,
                n.jsx)(F.Z, {
                    text: "OR"
                }), (0,
                n.jsx)(es, {
                    fetchedLinks: s,
                    setFetchedLinks: i,
                    loading: r,
                    setLoading: l
                }), s && (0,
                n.jsx)(J, {
                    fetchedLinks: s,
                    setFetchedLinks: i
                })]
            })
        }
          , ei = s(98930)
          , ea = s(29406)
          , er = s(38746)
          , el = s(51083);
        let {convert: ec} = s(68036)
          , eo = () => {
            let e = window["pdfjs-dist/build/pdf"];
            return e ? (e.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.js",
            e) : null
        }
          , ed = async e => {
            let t = e.numPages
              , s = "";
            for (let n = 1; n <= t; n++) {
                let t = await e.getPage(n);
                s += (await t.getTextContent()).items.map(e => e.str).join(" ")
            }
            return s
        }
          , eu = {
            selectors: [{
                selector: "img",
                format: "skip"
            }]
        }
          , ex = async e => {
            let t = await e.arrayBuffer();
            return ec(await el.convertToHtml({
                arrayBuffer: t
            }).then(e => e.value).catch(e => (console.error("Error processing .doc/.docx file:", e),
            "")), eu)
        }
        ;
        var em = s(30545);
        function eh(e) {
            let {source: t, setExistingFileSources: s} = e
              , [i,r] = (0,
            a.useState)(!1)
              , [l,o] = (0,
            a.useState)(!1)
              , d = (0,
            x.f1)()
              , u = (0,
            em.oD)()
              , m = (0,
            f.p)()
              , h = async () => {
                if (!l && d.data && u.data) {
                    o(!0);
                    try {
                        await (0,
                        b.rG)(m, d.data.id, u.data.id, t.file_id || ""),
                        o(!1),
                        r(!1),
                        s(e => e.filter(e => e.file_id !== t.file_id))
                    } catch (e) {
                        c.A.error("Failed to delete source"),
                        o(!1)
                    }
                }
            }
            ;
            return (0,
            n.jsxs)(M.Dialog, {
                open: i,
                onOpenChange: r,
                children: [(0,
                n.jsx)(M.DialogTrigger, {
                    asChild: !0,
                    children: (0,
                    n.jsx)(E.z, {
                        size: "icon",
                        variant: "destructiveGhost",
                        type: "button",
                        children: (0,
                        n.jsx)(Y.Z, {
                            className: "h-4 w-4"
                        })
                    })
                }), (0,
                n.jsxs)(M.cZ, {
                    children: [(0,
                    n.jsxs)("div", {
                        className: "sm:flex sm:items-start",
                        children: [(0,
                        n.jsx)("div", {
                            className: "mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",
                            children: (0,
                            n.jsx)(W.Z, {
                                className: "h-6 w-6 text-red-600",
                                "aria-hidden": "true"
                            })
                        }), (0,
                        n.jsxs)("div", {
                            className: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",
                            children: [(0,
                            n.jsx)(M.$N, {
                                className: "text-lg font-medium leading-6 text-zinc-900",
                                children: "Delete source"
                            }), (0,
                            n.jsxs)("div", {
                                className: "mt-2",
                                children: [(0,
                                n.jsxs)("p", {
                                    className: "text-sm text-zinc-500",
                                    children: ['Are you sure you want to delete "', t.name, '"? This action cannot be undone.']
                                }), (0,
                                n.jsx)("p", {
                                    className: "mt-2 text-sm font-semibold",
                                    children: "Make sure to retrain your chatbot after deleting a source!"
                                })]
                            })]
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "mt-5 flex justify-end gap-2",
                        children: [(0,
                        n.jsx)(M.GG, {
                            asChild: !0,
                            children: (0,
                            n.jsx)(E.z, {
                                variant: "outline",
                                type: "button",
                                autoFocus: !0,
                                children: "Cancel"
                            })
                        }), (0,
                        n.jsx)(E.z, {
                            variant: "destructive",
                            type: "button",
                            loading: l,
                            onClick: () => h(),
                            children: "Delete"
                        })]
                    })]
                })]
            })
        }
        let ef = e => {
            let {source: t, setExistingFileSources: s} = e;
            return (0,
            n.jsxs)("div", {
                className: "grid grid-cols-10 pb-4",
                children: [(0,
                n.jsxs)("div", {
                    className: "col-span-9",
                    children: [(0,
                    n.jsx)("span", {
                        className: "break-words",
                        children: t.name
                    }), " ", (0,
                    n.jsxs)("span", {
                        className: "text-sm text-zinc-500",
                        children: ["(", (0,
                        j.x6)(t.num_of_characters), " chars)"]
                    })]
                }), (0,
                n.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0,
                    n.jsx)(eh, {
                        setExistingFileSources: s,
                        source: t
                    })
                })]
            })
        }
          , ep = e => {
            let {attachedFile: t, removeAttachedFile: s, index: i} = e;
            return (0,
            n.jsxs)("div", {
                className: "grid grid-cols-10 pb-4",
                children: [(0,
                n.jsxs)("div", {
                    className: "col-span-9",
                    children: [(0,
                    n.jsx)("span", {
                        className: "break-words",
                        children: null == t ? void 0 : t.fileName
                    }), " ", (0,
                    n.jsxs)("span", {
                        className: "text-sm text-zinc-500",
                        children: ["(", (0,
                        j.x6)(null == t ? void 0 : t.characters), " chars)"]
                    })]
                }), (0,
                n.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0,
                    n.jsx)(E.z, {
                        variant: "destructiveGhost",
                        type: "button",
                        size: "icon",
                        className: "ml-1 ",
                        onClick: () => s(i, t.fileName),
                        children: (0,
                        n.jsx)(Y.Z, {
                            className: "h-4 w-4"
                        })
                    })
                })]
            })
        }
        ;
        var eg = function(e) {
            let {setExtractedTexts: t, dropZoneAttachedFiles: s, setDropZoneAttachedFiles: i, attachedFiles: r, setAttachedFiles: l, setLoading: c, existingFileSources: o, setExistingFileSources: d} = e
              , [u,x] = (0,
            a.useState)(!1);
            o.reduce( (e, t) => e + t.num_of_characters, 0);
            let m = (0,
            a.useCallback)(async e => {
                if (null == e ? void 0 : e.length) {
                    let r = eo();
                    for (let c of ([...s, ...e],
                    i([...s, ...e]),
                    e)) {
                        var t, n, a;
                        let e = null !== (a = null === (n = c.name) || void 0 === n ? void 0 : null === (t = n.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : "";
                        if (["pdf"].includes(e)) {
                            let e = new Uint8Array(await c.arrayBuffer())
                              , t = await r.getDocument({
                                data: e
                            }).promise
                              , s = await ed(t);
                            l(e => [...e, {
                                fileName: c.name,
                                fileImageURL: "",
                                characters: s.replace(/\s\s+/g, " ").length
                            }])
                        } else if (["txt"].includes(e)) {
                            let e = await c.text();
                            l(t => [...t, {
                                fileName: c.name,
                                fileImageURL: "",
                                characters: e.replace(/\s\s+/g, " ").length
                            }])
                        } else if (["doc", "docx"].includes(e)) {
                            let e = await ex(c);
                            l(t => [...t, {
                                fileName: c.name,
                                fileImageURL: "",
                                characters: e.replace(/\s\s+/g, " ").length
                            }])
                        }
                    }
                }
            }
            , [s])
              , h = async (e, n) => {
                c(!0),
                t(e => e.filter(e => e.name !== n)),
                s[e].name === n && i([...s.slice(0, e), ...s.slice(e + 1)]),
                r[e].fileName === n && l([...r.slice(0, e), ...r.slice(e + 1)]),
                c(!1)
            }
              , {getRootProps: f, getInputProps: p, isDragActive: g} = (0,
            er.uI)({
                accept: {
                    "text/html": [".pdf", ".doc", ".docx", ".txt"]
                },
                onDrop: m,
                validator: e => s.some(t => t.name === e.name && t.size === e.size && t.lastModified === e.lastModified) ? {
                    code: "duplicate-file",
                    message: "This file has already been added"
                } : null
            });
            return (0,
            a.useEffect)( () => {
                (async () => {
                    if (!s)
                        return;
                    t([]),
                    x(!1),
                    c(!0);
                    let e = eo();
                    for (let r of s) {
                        var n, i, a;
                        let s = null !== (a = null === (i = r.name) || void 0 === i ? void 0 : null === (n = i.split(".").pop()) || void 0 === n ? void 0 : n.toLowerCase()) && void 0 !== a ? a : "";
                        if (["pdf"].includes(s)) {
                            let s = new Uint8Array(await r.arrayBuffer())
                              , n = await e.getDocument({
                                data: s
                            }).promise
                              , i = await ed(n);
                            t(e => [...e, {
                                text: i,
                                name: r.name || "Untitled file"
                            }])
                        } else if (["txt"].includes(s)) {
                            let e = await r.text();
                            t(t => [...t, {
                                text: e,
                                name: r.name || "Untitled file"
                            }])
                        } else if (["doc", "docx"].includes(s)) {
                            let e = await ex(r);
                            t(t => [...t, {
                                text: e,
                                name: r.name || "Untitled file"
                            }])
                        } else
                            console.error("Unsupported file type:", s)
                    }
                    x(!0),
                    c(!1)
                }
                )()
            }
            , [s]),
            (0,
            n.jsxs)("div", {
                children: [(0,
                n.jsxs)("div", {
                    ...f({
                        className: "dropzone"
                    }),
                    className: "border rounded border-neutral-200 p-16",
                    children: [(0,
                    n.jsx)("input", {
                        ...p({
                            name: "file"
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-4",
                        children: [(0,
                        n.jsx)(ei, {
                            className: "h-5 w-5 fill-current"
                        }), g ? (0,
                        n.jsx)("p", {
                            className: "text-center text-sm text-zinc-600",
                            children: "Drop the files here ..."
                        }) : (0,
                        n.jsx)(n.Fragment, {
                            children: (0,
                            n.jsxs)("div", {
                                className: "items-center justify-center text-center",
                                children: [(0,
                                n.jsx)("p", {
                                    className: "text-sm text-zinc-600 ",
                                    children: "Drag & drop files here, or click to select files"
                                }), (0,
                                n.jsx)("span", {
                                    className: "text-xs text-zinc-500 dark:text-zinc-300",
                                    id: "file_type_help",
                                    children: "Supported File Types: .pdf, .doc, .docx, .txt"
                                })]
                            })
                        })]
                    })]
                }), (0,
                n.jsx)("p", {
                    className: "mt-2 text-center text-sm text-zinc-500 dark:text-zinc-300",
                    id: "file_input_help",
                    children: "If you are uploading a PDF, make sure you can select/highlight the text."
                }), (0,
                n.jsx)("div", {
                    className: "pt-8",
                    children: !u || s.length ? (0,
                    n.jsxs)("div", {
                        children: [(0,
                        n.jsx)(F.Z, {
                            text: "Attached Files"
                        }), (0,
                        n.jsxs)("div", {
                            className: "mt-5 max-h-[36rem] overflow-auto pr-2",
                            children: [r.map( (e, t) => (0,
                            n.jsx)(ep, {
                                attachedFile: e,
                                index: t,
                                removeAttachedFile: h
                            }, "".concat(t + 1))), " ", !u && s.length && (0,
                            n.jsx)("div", {
                                className: "flex justify-center",
                                children: (0,
                                n.jsx)(ea.Z, {})
                            })]
                        })]
                    }) : null
                }), (null == o ? void 0 : o.length) > 0 && (0,
                n.jsxs)("div", {
                    className: " py-2",
                    children: [(0,
                    n.jsx)(F.Z, {
                        text: "Already Included Files"
                    }), (0,
                    n.jsxs)("div", {
                        className: " mt-5 max-h-screen overflow-auto pr-2",
                        children: [o.map(e => (0,
                        n.jsx)(ef, {
                            source: e,
                            setExistingFileSources: d
                        }, e.id)), " "]
                    })]
                })]
            })
        }
          , ev = s(27330)
          , ej = s(81013)
          , eb = s(38039)
          , ew = s(96520)
          , eN = s(76780)
          , ey = e => {
            let {open: t, setOpen: s, handleRedirect: i} = e;
            return (0,
            n.jsx)(M.Dialog, {
                open: t,
                onOpenChange: s,
                children: (0,
                n.jsxs)(M.cZ, {
                    children: [(0,
                    n.jsxs)("div", {
                        className: "sm:flex sm:items-start",
                        children: [(0,
                        n.jsx)("div", {
                            className: "mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-100/65 sm:mx-0 sm:h-10 sm:w-10",
                            children: (0,
                            n.jsx)(eN.Z, {
                                className: "h-6 w-6 text-yellow-500",
                                "aria-hidden": "true"
                            })
                        }), (0,
                        n.jsxs)("div", {
                            className: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",
                            children: [(0,
                            n.jsx)(M.$N, {
                                className: "text-lg font-medium leading-6 text-zinc-900",
                                children: "Connect Notion"
                            }), (0,
                            n.jsxs)("div", {
                                className: "mt-2 flex flex-col gap-4",
                                children: [(0,
                                n.jsx)("p", {
                                    className: "mb-0 mt-2 font-semibold",
                                    children: "A Notion popup will now appear."
                                }), (0,
                                n.jsx)("p", {
                                    className: "mb-2 font-semibold",
                                    children: "Please don't unselect already selected pages."
                                }), (0,
                                n.jsx)("p", {
                                    className: "text-sm text-zinc-500",
                                    children: "Please note that the pages you select will affect the Notion pages Chatbase has access to across all your chatbots, as well as any other Chatbase accounts connected to the same Notion account."
                                }), (0,
                                n.jsx)("p", {
                                    className: "mb-2 text-sm text-zinc-500",
                                    children: "If you have any previously selected pages for other active chatbots. Please leave them selected."
                                })]
                            })]
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse",
                        children: [(0,
                        n.jsx)(E.z, {
                            type: "button",
                            className: "inline-flex w-full justify-center rounded-md border border-transparent bg-violet-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-violet-400 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",
                            onClick: i,
                            children: "I understand"
                        }), (0,
                        n.jsx)(E.z, {
                            type: "button",
                            className: "mt-3 inline-flex w-full justify-center rounded-md border border-zinc-300 bg-white px-4 py-2 text-base font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2  focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm",
                            onClick: () => s(!1),
                            autoFocus: !0,
                            children: "Cancel"
                        })]
                    })]
                })
            })
        }
        ;
        let ez = async (e, t) => await t.from("user_access_tokens").select().eq("account_id", e).eq("provider_name", "notion").eq("token_role", "access").eq("token_type", "bearer").order("id", {
            ascending: !1
        }).single()
          , ek = e => {
            let {page: t, handleDeletePageClick: s} = e;
            return (0,
            n.jsxs)("div", {
                className: "grid grid-cols-10 pb-4",
                children: [(0,
                n.jsxs)("div", {
                    className: "col-span-9",
                    children: [(0,
                    n.jsx)("span", {
                        className: "break-words",
                        children: t.name
                    }), " ", (0,
                    n.jsxs)("span", {
                        className: "text-sm text-zinc-500",
                        children: ["(", (0,
                        j.x6)(t.numChars || 0), " chars)"]
                    })]
                }), (0,
                n.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0,
                    n.jsx)(E.z, {
                        size: "icon",
                        variant: "destructiveGhost",
                        onClick: () => s(t.id),
                        children: (0,
                        n.jsx)(Y.Z, {
                            className: " size-4"
                        })
                    })
                })]
            })
        }
        ;
        var eC = e => {
            let {notionPages: t, setNotionPages: s, setLoading: i} = e
              , r = (0,
            f.p)()
              , {accountId: l} = (0,
            k.D)()
              , [o,d] = (0,
            a.useState)("")
              , [u,x] = (0,
            a.useState)(!1)
              , [m,h] = (0,
            a.useState)(null)
              , [p,g] = (0,
            a.useState)(!1)
              , v = (0,
            a.useCallback)(async e => {
                if (e)
                    try {
                        i(!0),
                        d("Importing Notion pages"),
                        s([]);
                        let t = await eb.ZP.get("api/notion/pages", {
                            prefixUrl: ej.Z.serverUrl,
                            headers: {
                                "content-type": "application/json",
                                authorization: "Bearer ".concat(e.token)
                            },
                            timeout: 3e4
                        })
                          , n = await t.json();
                        s(n),
                        d(""),
                        i(!1),
                        g(!0)
                    } catch (e) {
                        console.error(e),
                        d(""),
                        c.A.error("Notion Credentials Error", {
                            description: "Please reconnect your Notion account to import pages"
                        })
                    }
            }
            , [s, i])
              , j = (0,
            a.useCallback)(async () => {
                let e = await ez(l, r);
                e && !e.error && v(e.data)
            }
            , [v, l, r])
              , b = (0,
            a.useCallback)(async () => {
                x(!1);
                let e = new URL(ej.Z.notionApiRootUrl + ej.Z.notionIntegrationUrl);
                e.searchParams.append("redirect_uri", "".concat((0,
                ew.G)(), "callbacks/notion")),
                e.searchParams.append("client_id", ej.Z.notionIntegrationClientId),
                e.searchParams.append("response_type", "code"),
                e.searchParams.append("state", l),
                h(window.open(e, "_blank", "scrollbars=yes,resizable=yes,width=500,height=700,\n      top=".concat(window.screen.availHeight / 6, ",\n      left=").concat(window.screen.availWidth / 2 - 250)))
            }
            , [])
              , w = (0,
            a.useCallback)(e => {
                (null == e ? void 0 : e.status) === "error" ? c.A.error("Notion Credentials Error", {
                    description: "Please reconnect your Notion account to import pages. \n".concat(e.message)
                }) : (null == e ? void 0 : e.status) === "success" && l && j(),
                null == m || m.close()
            }
            , [m, l, j]);
            (0,
            a.useEffect)( () => {
                window.handleNotionConnected = w
            }
            , [w]);
            let N = (0,
            a.useCallback)(e => {
                s(t => t.filter(t => t.id !== e))
            }
            , [s]);
            return (0,
            n.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [(0,
                n.jsx)("div", {
                    className: "py-12",
                    children: (0,
                    n.jsxs)(E.z, {
                        onClick: () => x(!0),
                        disabled: (null == o ? void 0 : o.length) > 0,
                        variant: "outline",
                        className: "h-12 gap-3",
                        children: [(0,
                        n.jsx)(ev.Z, {
                            className: "size-6",
                            fill: "black"
                        }), "Connect Notion"]
                    })
                }), (0,
                n.jsx)("div", {
                    className: "font-semibold",
                    children: o && (0,
                    n.jsxs)("div", {
                        className: "flex h-16 flex-row items-center justify-center gap-2",
                        children: [(0,
                        n.jsx)("p", {
                            className: "font-bold",
                            children: o
                        }), (0,
                        n.jsx)(ea.Z, {})]
                    })
                }), t.length > 0 && (0,
                n.jsxs)("div", {
                    className: "flex w-full flex-col items-center",
                    children: [(0,
                    n.jsx)("div", {
                        className: "w-full",
                        children: (0,
                        n.jsx)(F.Z, {
                            text: "".concat(p ? "Imported" : "Already Included", " Pages")
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "max-h-[36rem] w-full overflow-auto p-4 pr-6",
                        children: t.map(e => (0,
                        n.jsx)(ek, {
                            page: e,
                            handleDeletePageClick: N
                        }, e.id))
                    })]
                }), (0,
                n.jsx)(ey, {
                    open: u,
                    setOpen: x,
                    handleRedirect: b
                })]
            })
        }
          , eI = s(72290);
        function eS(e) {
            let {qnaItem: t, setQnaItems: s, index: i} = e;
            return (0,
            n.jsxs)("div", {
                className: "mb-6 rounded border p-3 shadow",
                children: [(0,
                n.jsxs)("div", {
                    className: "flex items-end justify-between",
                    children: [(0,
                    n.jsx)("label", {
                        className: "mb-2 text-sm text-zinc-700",
                        children: "Question"
                    }), (0,
                    n.jsx)(E.z, {
                        size: "icon",
                        variant: "destructiveGhost",
                        onClick: () => {
                            s(e => e.filter( (e, t) => t !== i))
                        }
                        ,
                        type: "button",
                        className: "mb-1 px-2",
                        children: (0,
                        n.jsx)(Y.Z, {
                            className: "h-4 w-4 text-red-600"
                        })
                    })]
                }), (0,
                n.jsx)("textarea", {
                    className: "w-full min-w-0 appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3  text-zinc-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm",
                    value: t.question,
                    rows: 3,
                    onChange: e => {
                        let t = e.target.value;
                        s(e => e.map( (e, s) => s === i ? {
                            question: t,
                            answer: e.answer,
                            id: e.id
                        } : e))
                    }
                }), (0,
                n.jsxs)("div", {
                    className: "",
                    children: [(0,
                    n.jsx)("label", {
                        className: "mt-8 text-sm text-zinc-700",
                        children: "Answer"
                    }), (0,
                    n.jsx)("textarea", {
                        className: "mt-1 w-full min-w-0 appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3  text-zinc-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm",
                        value: t.answer,
                        rows: 8,
                        onChange: e => {
                            let t = e.target.value;
                            s(e => e.map( (e, s) => s === i ? {
                                answer: t,
                                question: e.question,
                                id: e.id
                            } : e))
                        }
                    })]
                })]
            })
        }
        var e_ = function(e) {
            let {qnaItems: t, setQnAItems: s} = e;
            return (0,
            n.jsxs)("div", {
                children: [(0,
                n.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0,
                    n.jsxs)("div", {
                        className: "flex items-center gap-3 ",
                        children: [t.length > 0 && (0,
                        n.jsx)(V, {
                            onDelete: () => {
                                s([])
                            }
                            ,
                            sourceType: "qna"
                        }), (0,
                        n.jsx)(E.z, {
                            size: "icon",
                            type: "button",
                            variant: "secondary",
                            onClick: () => s(e => [{
                                question: "",
                                answer: "",
                                id: (0,
                                eI.x0)()
                            }, ...e]),
                            children: (0,
                            n.jsx)(O.Z, {
                                className: "h-4 w-4 text-zinc-700"
                            })
                        })]
                    })
                }), (0,
                n.jsx)(G, {
                    className: "mt-6",
                    viewportClassName: "max-h-[90vh]",
                    children: t.map( (e, t) => (0,
                    n.jsx)(eS, {
                        qnaItem: e,
                        setQnaItems: s,
                        index: t
                    }, e.id))
                })]
            })
        }
          , eA = s(96665)
          , eT = function(e) {
            let {textInputExtractedText: t, setTextInputExtractedText: s} = e;
            return (0,
            n.jsxs)("div", {
                className: "w-full",
                children: [(0,
                n.jsx)("textarea", {
                    placeholder: "Enter text ...",
                    name: "data",
                    rows: 20,
                    className: "my-2 w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3  text-zinc-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm",
                    value: t.text,
                    onChange: e => s({
                        name: e.target.value.slice(0, 25) + "...",
                        text: e.target.value,
                        is_text_input: !0
                    })
                }), (0,
                n.jsx)("p", {
                    className: "h-8 text-center text-sm text-zinc-600",
                    children: t.text.length > 0 && "".concat((0,
                    j.x6)(t.text.replace(/\s\s+/g, " ").length), " characters")
                })]
            })
        }
          , eE = function() {
            var e, t, s;
            let {accountId: N} = (0,
            k.D)()
              , y = (0,
            i.useSearchParams)()
              , T = (0,
            i.useParams)()
              , E = null == T ? void 0 : T.chatId
              , D = (0,
            x.ke)({
                id: E
            })
              , R = D.data
              , F = function(e) {
                var t;
                let s = (0,
                f.p)();
                return (0,
                _.useQuery)((t = {
                    ...e,
                    supabase: s
                },
                (0,
                S.C)({
                    queryKey: ["initialSources", {
                        id: t.id
                    }],
                    queryFn: async () => {
                        let e = t.supabase
                          , s = t.id;
                        if (!s)
                            throw new w.D("running initial sources query with chatbot id undefined");
                        let {data: n, error: i} = await (0,
                        b.eo)(e, s);
                        if (i)
                            throw i;
                        return A(n)
                    }
                    ,
                    enabled: !!t.id,
                    initialData: A(),
                    initialDataUpdatedAt: 0
                })))
            }({
                id: null == R ? void 0 : R.id
            })
              , Z = F.data
              , {mutateAsync: P} = z()
              , q = (0,
            i.useRouter)()
              , G = (0,
            r.useQueryClient)()
              , U = (null == y ? void 0 : y.get("tab")) || "files"
              , O = null == T ? void 0 : T.accountSlug
              , Y = (0,
            f.p)()
              , [Q,B] = (0,
            a.useState)([])
              , [M,W] = (0,
            a.useState)([])
              , [K,V] = (0,
            a.useState)([])
              , [H,J] = (0,
            a.useState)(Z.initialFileSources)
              , [$,X] = (0,
            a.useState)({
                name: "",
                text: "",
                is_text_input: !0
            })
              , [ee,et] = (0,
            a.useState)("")
              , [es,ei] = (0,
            a.useState)(Z.initialFetchedLinksSources.map(e => {
                var t, s;
                return {
                    url: e.url || "",
                    size: null !== (t = e.num_of_characters) && void 0 !== t ? t : 0,
                    status: null !== (s = e.status) && void 0 !== s ? s : g.W.TRAINING
                }
            }
            ))
              , [ea,er] = (0,
            a.useState)(Z.initialQnASources.map(e => ({
                question: e.question || "",
                answer: e.answer || "",
                id: e.id
            })))
              , [el,ec] = (0,
            a.useState)(0)
              , [eo,ed] = a.useState(Z.initialNotionPagesSource.map(e => {
                var t, s, n, i;
                return {
                    object: "page",
                    id: null !== (t = e.external_id) && void 0 !== t ? t : "",
                    name: null !== (s = e.name) && void 0 !== s ? s : "",
                    numChars: null !== (n = e.num_of_characters) && void 0 !== n ? n : 0,
                    url: null !== (i = e.url) && void 0 !== i ? i : ""
                }
            }
            ))
              , [eu,ex] = (0,
            a.useState)(!1)
              , [em,eh] = (0,
            a.useState)(!1)
              , [ef,ep] = (0,
            a.useState)(!1)
              , [ev,ej] = (0,
            a.useState)(!1)
              , eb = (0,
            m.qd)()
              , ew = null === (e = eb.data) || void 0 === e ? void 0 : e.subscription
              , eN = null === (t = eb.data) || void 0 === t ? void 0 : t.addonSubscriptions
              , ey = null === (s = (0,
            h.F)().session) || void 0 === s ? void 0 : s.access_token
              , {user: ez} = (0,
            h.M)();
            (0,
            a.useEffect)( () => {
                J(Z.initialFileSources),
                ei(Z.initialFetchedLinksSources.map(e => {
                    var t, s;
                    return {
                        url: e.url || "",
                        size: null !== (t = e.num_of_characters) && void 0 !== t ? t : 0,
                        status: null !== (s = e.status) && void 0 !== s ? s : g.W.TRAINING
                    }
                }
                )),
                er(Z.initialQnASources.map(e => ({
                    question: e.question || "",
                    answer: e.answer || "",
                    id: e.id
                }))),
                ed(Z.initialNotionPagesSource.map(e => {
                    var t, s, n, i;
                    return {
                        object: "page",
                        id: null !== (t = e.external_id) && void 0 !== t ? t : "",
                        name: null !== (s = e.name) && void 0 !== s ? s : "",
                        numChars: null !== (n = e.num_of_characters) && void 0 !== n ? n : 0,
                        url: null !== (i = e.url) && void 0 !== i ? i : ""
                    }
                }
                )),
                ek()
            }
            , [Z]),
            (0,
            a.useEffect)( () => {
                et(K.map(e => e.text.replace(/\s\s+/g, " ")).join(" "))
            }
            , [K]),
            (0,
            a.useEffect)( () => {
                ec(es.reduce( (e, t) => {
                    var s;
                    return e + (null !== (s = t.size) && void 0 !== s ? s : 0)
                }
                , 0))
            }
            , [es]);
            let ek = async () => {
                var e;
                let t = Z.initialTextInputSource;
                if (!(null == t ? void 0 : t.id))
                    return;
                let {data: s, error: n} = await Y.storage.from("source-files").download("".concat(N, "/").concat(t.file_id, ".txt"));
                if (n || !s)
                    return console.error(n);
                let i = await s.arrayBuffer()
                  , a = new TextDecoder().decode(i);
                X({
                    name: null !== (e = t.name) && void 0 !== e ? e : "",
                    text: a,
                    is_text_input: !0
                })
            }
              , eI = async e => {
                if (!ez || !N)
                    return;
                e.preventDefault();
                let t = !1;
                E || (t = !0);
                let s = !1;
                try {
                    ex(!0),
                    eh(!0),
                    ep(!1),
                    await (0,
                    b.tf)(Y, ee, H, $, es, ea, eo, N, ew, eN, el, $.name, t);
                    let e = [...K];
                    $.text && e.push($);
                    let {data: n, error: i} = await P({
                        accountId: N,
                        extractedTexts: e,
                        existingFileSources: H,
                        fetchedLinks: es,
                        qnaItems: ea,
                        notionPages: eo,
                        chatbotId: E,
                        initialTextInputSource: Z.initialTextInputSource
                    });
                    if (i || !n) {
                        c.A.error("Error", {
                            description: "Failed to update sources"
                        });
                        return
                    }
                    s = !0,
                    E = n;
                    let a = "";
                    a = R ? R.name : (0,
                    b.Jx)(Q, H, es, $.name),
                    await (0,
                    j.qC)({
                        url: "".concat("https://api.chatbase.co", "/api/populate-chatbot"),
                        data: {
                            chatbotId: E,
                            chatbotName: a,
                            isNewChatbot: t
                        },
                        headers: {
                            Authorization: "Bearer ".concat(ey)
                        }
                    }),
                    B([]),
                    ex(!1),
                    ep(!0),
                    t ? ((0,
                    v.c)().track(o.A.CHATBOT_CREATED),
                    G.refetchQueries((0,
                    u.N_)({
                        supabase: Y,
                        accountId: N
                    }))) : (0,
                    v.c)().track(o.A.CHATBOT_RETRAINED),
                    F.refetch();
                    let r = (await G.fetchQuery({
                        ...(0,
                        x.Qu)({
                            id: E
                        }),
                        staleTime: 0
                    })).status;
                    c.A[d.G[r].variant](d.G[r].title, {
                        description: d.G[r].description,
                        duration: 6e3
                    }),
                    q.push("/dashboard/".concat(O, "/chatbot/").concat(E))
                } catch (e) {
                    try {
                        e instanceof Error ? c.A.error("Error", {
                            description: e.message
                        }) : c.A.error("Error", {
                            description: "Something went wrong"
                        }),
                        t && s && E && (await (0,
                        C.l2)({
                            supabase: Y,
                            chatbotId: E,
                            partial: {
                                status: p.RE.FAILED
                            }
                        }),
                        q.push("/dashboard/".concat(O, "/chatbot/").concat(E)))
                    } catch (e) {
                        console.error(e)
                    }
                } finally {
                    eh(!1),
                    ex(!1),
                    ep(!0)
                }
            }
            ;
            return (0,
            n.jsx)("div", {
                className: "pb-10",
                children: (0,
                n.jsxs)("div", {
                    className: "flex flex-col align-top lg:flex-row lg:space-x-8 lg:align-middle",
                    children: [(0,
                    n.jsx)("div", {
                        className: "lg:w-4/6",
                        children: (0,
                        n.jsxs)(I.Zb, {
                            children: [(0,
                            n.jsx)(I.Ol, {
                                children: (0,
                                n.jsx)(I.ll, {
                                    children: ( () => {
                                        let e = U || "files"
                                          , t = eA.M.find(t => t.page === e);
                                        return t ? t.name : ""
                                    }
                                    )()
                                })
                            }), (0,
                            n.jsx)(I.aY, {
                                children: F.isLoading || D.isLoading ? (0,
                                n.jsx)(l.O, {
                                    className: "h-[60vh]"
                                }) : U && "files" !== U ? "text" === U ? (0,
                                n.jsx)(eT, {
                                    textInputExtractedText: $,
                                    setTextInputExtractedText: X
                                }) : "website" === U ? (0,
                                n.jsx)(en, {
                                    loading: ev,
                                    setLoading: ej,
                                    fetchedLinks: es,
                                    setFetchedLinks: ei
                                }) : "qna" === U ? (0,
                                n.jsx)(e_, {
                                    qnaItems: ea,
                                    setQnAItems: er
                                }) : "notion" === U ? (0,
                                n.jsx)(eC, {
                                    notionPages: eo,
                                    setNotionPages: ed,
                                    setLoading: ej
                                }) : null : (0,
                                n.jsx)(eg, {
                                    existingFileSources: H,
                                    setExistingFileSources: J,
                                    setExtractedTexts: V,
                                    dropZoneAttachedFiles: Q,
                                    setDropZoneAttachedFiles: B,
                                    attachedFiles: M,
                                    setAttachedFiles: W,
                                    setLoading: ej
                                })
                            })]
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "m-auto my-4 w-full lg:my-0 lg:w-2/6",
                        children: F.isLoading || D.isLoading ? (0,
                        n.jsx)(l.O, {
                            className: "h-[25vh]"
                        }) : (0,
                        n.jsx)(I.Zb, {
                            className: "sm: mt-2 lg:mt-0",
                            children: (0,
                            n.jsx)(L, {
                                existingFileSources: H,
                                filesInputextractedTexts: K,
                                filesInputCombinedExtractedText: ee,
                                textInputExtractedText: $,
                                fetchedLinks: es,
                                qnaItems: ea,
                                notionPages: eo,
                                loading: ev,
                                isPopulating: eu,
                                startedPopulating: em,
                                endedPopulating: ef,
                                chatbotId: E,
                                handleSubmit: eI
                            })
                        })
                    })]
                })
            })
        }
    },
    96665: function(e, t, s) {
        "use strict";
        s.d(t, {
            M: function() {
                return d
            }
        });
        var n = s(57437)
          , i = s(81973)
          , a = s(51024)
          , r = s(38103)
          , l = s(29561)
          , c = s(27330)
          , o = s(74139);
        let d = [{
            name: "Files",
            href: "?tab=files",
            icon: i,
            page: "files",
            disabled: !1
        }, {
            name: "Text",
            href: "?tab=text",
            icon: a,
            page: "text",
            disabled: !1
        }, {
            name: "Website",
            href: "?tab=website",
            icon: r,
            page: "website",
            disabled: !1
        }, {
            name: "Q&A",
            href: "?tab=qna",
            icon: l,
            page: "qna",
            disabled: !1
        }, {
            name: "Notion",
            href: "?tab=notion",
            icon: c.Z,
            page: "notion",
            disabled: !1,
            isSvgIcon: !0
        }];
        t.default = function(e) {
            let {children: t} = e;
            return (0,
            n.jsx)(o.Z, {
                navigation: d,
                type: "tab",
                children: t
            })
        }
    },
    27330: function(e, t, s) {
        "use strict";
        var n = s(57437);
        t.Z = e => {
            var t;
            return (0,
            n.jsxs)("svg", {
                viewBox: "13.38 3.2 485.44 505.7",
                xmlns: "http://www.w3.org/2000/svg",
                className: e.className,
                fill: null !== (t = e.fill) && void 0 !== t ? t : "white",
                children: [(0,
                n.jsx)("path", {
                    d: "m186.84 13.95c-79.06 5.85-146.27 11.23-149.43 11.86-8.86 1.58-16.92 7.59-20.71 15.5l-3.32 6.96.32 165.88.47 165.88 5.06 10.28c2.85 5.69 22.14 32.26 43.17 59.61 41.59 53.92 44.59 56.93 60.4 58.51 4.59.47 39.06-1.11 76.38-3.32 37.48-2.37 97.56-6.01 133.62-8.06 154.01-9.35 146.1-8.56 154.95-16.15 11.07-9.17 10.28 5.85 10.75-195.76.32-170.94.16-182.16-2.37-187.38-3-5.85-8.38-9.96-78.59-59.3-46.96-32.89-50.28-34.63-71.32-34.95-8.69-.31-80.48 4.43-159.38 10.44zm177.73 21.66c6.64 3 55.19 36.84 62.3 43.33 1.9 1.9 2.53 3.48 1.58 4.43-2.21 1.9-302.66 19.77-311.35 18.5-3.95-.63-9.8-3-13.12-5.22-13.76-9.33-47.91-37.32-47.91-39.37 0-5.38-1.11-5.38 132.83-15.02 25.62-1.74 67.68-4.9 93.3-6.96 55.49-4.43 72.1-4.27 82.37.31zm95.51 86.5c2.21 2.21 4.11 6.48 4.74 10.59.47 3.8.79 74.64.47 157.18-.47 141.68-.63 150.54-3.32 154.65-1.58 2.53-4.74 5.22-7.12 6.01-6.63 2.69-321.46 20.56-327.94 18.66-3-.79-7.12-3.32-9.33-5.53l-3.8-4.11-.47-152.75c-.32-107.21 0-154.65 1.27-158.92.95-3.16 3.32-6.96 5.38-8.22 2.85-1.9 21.51-3.48 85.71-7.27 45.07-2.53 114.8-6.8 154.81-9.17 95.17-5.86 94.86-5.86 99.6-1.12z"
                }), (0,
                n.jsx)("path", {
                    d: "m375.48 174.45c-17.08 1.11-32.26 2.69-34 3.64-5.22 2.69-8.38 7.12-9.01 12.18-.47 5.22 1.11 5.85 18.18 7.91l7.43.95v67.52c0 40.16-.63 66.73-1.42 65.94-.79-.95-23.24-35.1-49.97-75.9-26.72-40.95-48.86-74.64-49.18-74.95-.32-.32-17.71.63-38.58 2.06-25.62 1.74-39.69 3.32-42.54 4.9-4.59 2.37-9.65 10.75-9.65 16.29 0 3.32 6.01 5.06 18.66 5.06h6.64v194.18l-10.75 3.32c-8.38 2.53-11.23 4.11-12.65 7.27-2.53 5.38-2.37 10.28.16 10.28.95 0 18.82-1.11 39.37-2.37 40.64-2.37 45.22-3.48 49.49-11.86 1.27-2.53 2.37-5.22 2.37-6.01 0-.63-5.53-2.53-12.18-4.11-6.8-1.58-13.6-3.16-15.02-3.48-2.69-.79-2.85-5.69-2.85-73.69v-72.9l48.07 75.43c50.44 79.06 56.77 88.08 64.52 92.03 9.65 5.06 34.16 1.58 46.49-6.48l3.8-2.37.32-107.84.47-108 8.38-1.58c9.96-1.9 14.55-6.48 14.55-14.39 0-5.06-.32-5.38-5.06-5.22-2.83.13-19.12 1.08-36.04 2.19z"
                })]
            })
        }
    },
    74139: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return p
            }
        });
        var n = s(57437)
          , i = s(9935)
          , a = s(86864)
          , r = s(2265)
          , l = s(31590)
          , c = s(74697)
          , o = s(42873)
          , d = function(e) {
            let {children: t} = e
              , [s,i] = (0,
            r.useState)(!1);
            return (0,
            n.jsxs)("div", {
                children: [(0,
                n.jsx)("div", {
                    className: "md:hidden",
                    children: (0,
                    n.jsxs)(l.h_, {
                        open: s,
                        onOpenChange: i,
                        children: [(0,
                        n.jsx)("div", {
                            className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",
                            children: (0,
                            n.jsx)("div", {
                                className: "relative flex h-6 items-center justify-end sm:hidden",
                                children: (0,
                                n.jsx)("div", {
                                    className: "left-100 absolute inset-y-0 flex items-center sm:hidden",
                                    children: (0,
                                    n.jsxs)(l.$F, {
                                        onClick: () => i(!s),
                                        className: "inline-flex items-center justify-center rounded-md p-2 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                        children: [(0,
                                        n.jsx)("span", {
                                            className: "sr-only",
                                            children: "Open main menu"
                                        }), s ? (0,
                                        n.jsx)(c.Z, {
                                            className: "block h-6 w-6",
                                            "aria-hidden": "true"
                                        }) : (0,
                                        n.jsx)(o.Z, {
                                            className: "block h-6 w-6",
                                            "aria-hidden": "true"
                                        })]
                                    })
                                })
                            })
                        }), (0,
                        n.jsx)(l.AW, {
                            side: "bottom",
                            align: "end",
                            className: "z-10 w-56 rounded-md bg-white p-0 opacity-100 shadow-lg ring-1 ring-black/5 focus:outline-none sm:hidden",
                            children: (0,
                            n.jsx)("div", {
                                className: "space-y-1 px-2 pb-3 pt-2",
                                children: t
                            })
                        })]
                    })
                }), (0,
                n.jsx)("div", {
                    className: "hidden grow flex-col gap-y-5 overflow-y-auto border-zinc-200  bg-white sm:flex ",
                    children: (0,
                    n.jsx)("nav", {
                        className: "flex flex-1 flex-col",
                        children: (0,
                        n.jsx)("ul", {
                            role: "list",
                            className: "flex flex-1 flex-col",
                            children: (0,
                            n.jsx)("li", {
                                children: t
                            })
                        })
                    })
                })]
            })
        }
          , u = s(87138)
          , x = s(16349);
        let m = e => {
            let {name: t, icon: s, href: i, isActive: a, isSvgIcon: r, disabled: l, badge: c} = e;
            return (0,
            n.jsxs)(u.default, {
                href: i,
                onClick: e => {
                    l && e.preventDefault()
                }
                ,
                scroll: !1,
                className: (0,
                x.cn)(l ? "cursor-not-allowed text-zinc-500" : a ? "bg-zinc-50 text-violet-600" : "text-zinc-700 hover:bg-zinc-50 hover:text-violet-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"),
                children: [(0,
                n.jsx)(s.icon, {
                    className: (0,
                    x.cn)(l ? "cursor-not-allowed text-zinc-500" : a ? r ? "fill-violet-600 text-violet-600" : "text-violet-600" : r ? "fill-zinc-400 text-zinc-400 group-hover:fill-violet-600 group-hover:text-violet-600" : "text-zinc-400 group-hover:text-violet-600", "h-5 w-5 shrink-0"),
                    "aria-hidden": "true"
                }), t, c]
            })
        }
        ;
        var h = s(16463);
        let f = e => {
            let {name: t, icon: s, href: i, isActive: r, disabled: l, isSvgIcon: c, badge: o} = e;
            return (0,
            n.jsx)(a.TabsTrigger, {
                className: (0,
                x.cn)("flex w-full font-semibold  rounded-full px-2 py-3", r ? "bg-white text-zinc-900 " : "text-zinc-600 "),
                value: t,
                children: (0,
                n.jsxs)(u.default, {
                    href: i,
                    onClick: e => {
                        l && e.preventDefault()
                    }
                    ,
                    scroll: !1,
                    className: (0,
                    x.cn)("flex flex-row gap-2 w-full justify-center", l ? "cursor-not-allowed text-zinc-500" : ""),
                    children: [(0,
                    n.jsx)(s.icon, {
                        className: (0,
                        x.cn)("h-5 w-5 shrink-0", l ? "cursor-not-allowed text-zinc-500" : r ? c ? "fill-zinc-900 text-zinc-900" : "text-zinc-900" : c ? "fill-zinc-600 text-zinc-600" : "text-zinc-600 "),
                        "aria-hidden": "true"
                    }), t, o]
                })
            })
        }
        ;
        function p(e) {
            var t;
            let {children: s, type: r, navigation: l} = e
              , c = l[0].page
              , o = function(e) {
                if ("link" === e.type) {
                    let e = (0,
                    h.usePathname)()
                      , t = (null == e ? void 0 : e.split("/")) || [];
                    return 8 === t.length ? t[(null == t ? void 0 : t.length) - 2] : t[(null == t ? void 0 : t.length) - 1]
                }
                if ("tab" === e.type) {
                    let e = (0,
                    h.useSearchParams)();
                    return null == e ? void 0 : e.get("tab")
                }
            }({
                type: r
            }) || c
              , u = null === (t = (0,
            i.e4)().data) || void 0 === t ? void 0 : t.planName;
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("div", {
                    className: "w-full max-w-7xl px-4 lg:mx-auto",
                    children: [(0,
                    n.jsx)(a.Tabs, {
                        value: o,
                        defaultValue: c,
                        className: "flex rounded-full font-semibold leading-6 lg:hidden",
                        children: (0,
                        n.jsx)(a.TabsList, {
                            className: "mb-8 flex h-auto w-full items-start justify-start gap-2 overflow-x-auto rounded-full px-3 py-2 data-[state=active]:shadow-sm",
                            children: null == l ? void 0 : l.map(e => {
                                let t = !e.permissions || e.permissions.includes(u);
                                return e.permissions && t || !e.permissions ? (0,
                                n.jsx)(f, {
                                    name: e.name,
                                    href: e.href,
                                    isActive: o === e.page,
                                    icon: {
                                        icon: e.icon
                                    },
                                    isSvgIcon: e.isSvgIcon,
                                    badge: e.badge
                                }, e.name) : null
                            }
                            )
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "grid grid-cols-12 gap-6",
                        children: [(0,
                        n.jsx)("div", {
                            className: "col-span-12 hidden lg:col-span-2 sm:col-span-4 lg:block",
                            children: (0,
                            n.jsx)(d, {
                                children: (0,
                                n.jsx)("ul", {
                                    className: "space-y-1",
                                    children: null == l ? void 0 : l.map(e => {
                                        let t = !e.permissions || e.permissions.includes(u);
                                        return e.permissions && t ? (0,
                                        n.jsx)("li", {
                                            className: "fade-in-30 animate-in transition-opacity",
                                            children: (0,
                                            n.jsx)(m, {
                                                name: e.name,
                                                icon: {
                                                    icon: e.icon
                                                },
                                                href: e.href,
                                                isActive: o === e.page,
                                                isSvgIcon: e.isSvgIcon,
                                                badge: e.badge
                                            })
                                        }, e.name) : e.permissions ? null : (0,
                                        n.jsx)("li", {
                                            children: (0,
                                            n.jsx)(m, {
                                                name: e.name,
                                                icon: {
                                                    icon: e.icon
                                                },
                                                href: e.href,
                                                isActive: o === e.page,
                                                isSvgIcon: e.isSvgIcon,
                                                badge: e.badge
                                            })
                                        }, e.name)
                                    }
                                    )
                                })
                            })
                        }), (0,
                        n.jsx)("div", {
                            className: "col-span-12 lg:col-span-10",
                            children: s
                        })]
                    })]
                })
            })
        }
    },
    34826: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return i
            }
        });
        var n = s(57437);
        function i(e) {
            let {text: t} = e;
            return (0,
            n.jsxs)("div", {
                className: "my-4 flex items-center",
                children: [(0,
                n.jsx)("hr", {
                    className: "w-full border-t border-zinc-300"
                }), t && (0,
                n.jsx)("span", {
                    className: "whitespace-nowrap px-2 text-zinc-600",
                    children: t
                }), (0,
                n.jsx)("hr", {
                    className: "w-full border-t border-zinc-300"
                })]
            })
        }
    },
    29406: function(e, t, s) {
        "use strict";
        var n = s(57437)
          , i = s(9772)
          , a = s.n(i)
          , r = s(76912)
          , l = s(67901)
          , c = s.n(l);
        t.Z = e => {
            let {theme: t} = e;
            return t || (t = r.h_.LIGHT),
            (0,
            n.jsxs)("span", {
                className: a()(c().root, {
                    "[&>span]:bg-zinc-500": t === r.h_.DARK,
                    "[&>span]:bg-zinc-400": t === r.h_.LIGHT
                }),
                children: [(0,
                n.jsx)("span", {}), (0,
                n.jsx)("span", {}), (0,
                n.jsx)("span", {})]
            })
        }
    },
    68972: function(e, t, s) {
        "use strict";
        var n = s(57437);
        t.Z = e => (0,
        n.jsxs)("svg", {
            viewBox: "0 0 25 25",
            className: e.className,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [(0,
            n.jsx)("title", {
                children: "loading"
            }), (0,
            n.jsxs)("g", {
                fill: "currentColor",
                children: [(0,
                n.jsx)("rect", {
                    x: "11",
                    y: "1",
                    width: "2",
                    height: "5",
                    opacity: ".14"
                }), (0,
                n.jsx)("rect", {
                    x: "11",
                    y: "1",
                    width: "2",
                    height: "5",
                    transform: "rotate(30 12 12)",
                    opacity: ".29"
                }), (0,
                n.jsx)("rect", {
                    x: "11",
                    y: "1",
                    width: "2",
                    height: "5",
                    transform: "rotate(60 12 12)",
                    opacity: ".43"
                }), (0,
                n.jsx)("rect", {
                    x: "11",
                    y: "1",
                    width: "2",
                    height: "5",
                    transform: "rotate(90 12 12)",
                    opacity: ".57"
                }), (0,
                n.jsx)("rect", {
                    x: "11",
                    y: "1",
                    width: "2",
                    height: "5",
                    transform: "rotate(120 12 12)",
                    opacity: ".71"
                }), (0,
                n.jsx)("rect", {
                    x: "11",
                    y: "1",
                    width: "2",
                    height: "5",
                    transform: "rotate(150 12 12)",
                    opacity: ".86"
                }), (0,
                n.jsx)("rect", {
                    x: "11",
                    y: "1",
                    width: "2",
                    height: "5",
                    transform: "rotate(180 12 12)"
                }), (0,
                n.jsx)("animateTransform", {
                    attributeName: "transform",
                    type: "rotate",
                    calcMode: "discrete",
                    dur: "0.75s",
                    values: "0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12",
                    repeatCount: "indefinite"
                })]
            })]
        })
    },
    89733: function(e, t, s) {
        "use strict";
        s.d(t, {
            d: function() {
                return o
            },
            z: function() {
                return d
            }
        });
        var n = s(57437)
          , i = s(2265)
          , a = s(63355)
          , r = s(12218)
          , l = s(68972)
          , c = s(16349);
        let o = (0,
        r.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80", {
            variants: {
                variant: {
                    default: "bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
                    destructive: "bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
                    outline: "border border-zinc-200 bg-transparent shadow-sm hover:bg-zinc-100/70 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-xl disabled:bg-zinc-100/60",
                    secondary: "bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
                    ghost: "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 disabled:text-zinc-600",
                    link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
                    destructiveGhost: "text-red-500 hover:bg-red-50 hover:text-red-600 bg-transparent"
                },
                size: {
                    default: "h-9 px-4 py-1",
                    sm: "h-7 rounded-md px-3",
                    lg: "h-10 rounded-md px-8",
                    icon: "h-9 w-9"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , d = i.forwardRef( (e, t) => {
            let {className: s, variant: i="default", size: r, loading: d=!1, asChild: u=!1, hideContentOnLoading: x=!1, ...m} = e
              , h = u ? a.g7 : "button";
            return d ? (0,
            n.jsxs)(h, {
                className: (0,
                c.cn)(o({
                    variant: i,
                    size: r,
                    className: s
                }), "flex flex-row items-center gap-2"),
                ref: t,
                disabled: !0,
                ...m,
                children: [(0,
                n.jsx)(l.Z, {
                    className: (0,
                    c.cn)({
                        "h-[0.9rem] w-[0.9rem]": "sm" === r,
                        "h-[1.2rem] w-[1.2rem]": "sm" !== r,
                        "fill-zinc-50": "default" === i || "destructive" === i,
                        "fill-zinc-900": "default" !== i && "destructive" !== i,
                        "fill-red-500": "destructiveGhost" === i
                    })
                }), !x && m.children]
            }) : (0,
            n.jsx)(h, {
                className: (0,
                c.cn)(o({
                    variant: i,
                    size: r,
                    className: s
                })),
                ref: t,
                ...m
            })
        }
        );
        d.displayName = "Button"
    },
    48185: function(e, t, s) {
        "use strict";
        s.d(t, {
            Ol: function() {
                return l
            },
            SZ: function() {
                return o
            },
            Zb: function() {
                return r
            },
            aY: function() {
                return d
            },
            eW: function() {
                return u
            },
            ll: function() {
                return c
            }
        });
        var n = s(57437)
          , i = s(2265)
          , a = s(16349);
        let r = i.forwardRef( (e, t) => {
            let {className: s, ...i} = e;
            return (0,
            n.jsx)("div", {
                ref: t,
                className: (0,
                a.cn)("rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50", s),
                ...i
            })
        }
        );
        r.displayName = "Card";
        let l = i.forwardRef( (e, t) => {
            let {className: s, ...i} = e;
            return (0,
            n.jsx)("div", {
                ref: t,
                className: (0,
                a.cn)("flex flex-col space-y-1.5 p-6", s),
                ...i
            })
        }
        );
        l.displayName = "CardHeader";
        let c = i.forwardRef( (e, t) => {
            let {className: s, ...i} = e;
            return (0,
            n.jsx)("h3", {
                ref: t,
                className: (0,
                a.cn)("text-2xl font-semibold leading-none tracking-tight", s),
                ...i
            })
        }
        );
        c.displayName = "CardTitle";
        let o = i.forwardRef( (e, t) => {
            let {className: s, ...i} = e;
            return (0,
            n.jsx)("p", {
                ref: t,
                className: (0,
                a.cn)("text-sm text-zinc-500 dark:text-zinc-400", s),
                ...i
            })
        }
        );
        o.displayName = "CardDescription";
        let d = i.forwardRef( (e, t) => {
            let {className: s, ...i} = e;
            return (0,
            n.jsx)("div", {
                ref: t,
                className: (0,
                a.cn)("p-6 pt-0", s),
                ...i
            })
        }
        );
        d.displayName = "CardContent";
        let u = i.forwardRef( (e, t) => {
            let {className: s, ...i} = e;
            return (0,
            n.jsx)("div", {
                ref: t,
                className: (0,
                a.cn)("flex items-center p-6 pt-0", s),
                ...i
            })
        }
        );
        u.displayName = "CardFooter"
    },
    77209: function(e, t, s) {
        "use strict";
        s.d(t, {
            I: function() {
                return r
            }
        });
        var n = s(57437)
          , i = s(2265)
          , a = s(16349);
        let r = i.forwardRef( (e, t) => {
            let {className: s, type: i, ...r} = e;
            return (0,
            n.jsx)("input", {
                type: i,
                className: (0,
                a.cn)("flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed file:border-0 focus:border-violet-500 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground disabled:opacity-50 focus:outline-none focus-visible:ring-ring focus:ring-4 focus:ring-violet-500/10", s),
                ref: t,
                ...r
            })
        }
        );
        r.displayName = "Input"
    },
    86864: function(e, t, s) {
        "use strict";
        s.d(t, {
            Tabs: function() {
                return l
            },
            TabsList: function() {
                return c
            },
            TabsTrigger: function() {
                return o
            },
            n: function() {
                return d
            }
        });
        var n = s(57437)
          , i = s(2265)
          , a = s(62447)
          , r = s(16349);
        let l = a.fC
          , c = i.forwardRef( (e, t) => {
            let {className: s, ...i} = e;
            return (0,
            n.jsx)(a.aV, {
                ref: t,
                className: (0,
                r.cn)("inline-flex h-10 items-center justify-center rounded-md bg-zinc-100 p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400", s),
                ...i
            })
        }
        );
        c.displayName = a.aV.displayName;
        let o = i.forwardRef( (e, t) => {
            let {className: s, ...i} = e;
            return (0,
            n.jsx)(a.xz, {
                ref: t,
                className: (0,
                r.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50", s),
                ...i
            })
        }
        );
        o.displayName = a.xz.displayName;
        let d = i.forwardRef( (e, t) => {
            let {className: s, ...i} = e;
            return (0,
            n.jsx)(a.VY, {
                ref: t,
                className: (0,
                r.cn)("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300", s),
                ...i
            })
        }
        );
        d.displayName = a.VY.displayName
    },
    89736: function(e, t, s) {
        "use strict";
        s.d(t, {
            _v: function() {
                return d
            },
            aJ: function() {
                return o
            },
            pn: function() {
                return l
            },
            u: function() {
                return c
            }
        });
        var n = s(57437)
          , i = s(2265)
          , a = s(60364)
          , r = s(16349);
        let l = a.zt
          , c = a.fC
          , o = a.xz
          , d = i.forwardRef( (e, t) => {
            let {className: s, sideOffset: i=4, ...l} = e;
            return (0,
            n.jsx)(a.VY, {
                ref: t,
                sideOffset: i,
                className: (0,
                r.cn)("z-50 overflow-hidden rounded-md border border-zinc-700 bg-zinc-950 px-3 py-1.5 text-sm text-zinc-50 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50", s),
                ...l
            })
        }
        );
        d.displayName = a.VY.displayName
    },
    39384: function(e, t, s) {
        "use strict";
        s.d(t, {
            G: function() {
                return i
            }
        });
        var n = s(55282);
        let i = {
            [n.RE.TRAINED]: {
                title: "Your chatbot is trained and ready",
                description: "You can now use your chatbot",
                variant: "success"
            },
            [n.RE.ALL_TRAINED]: {
                title: "Your chatbot is trained and ready",
                description: "You can now use your chatbot",
                variant: "success"
            },
            [n.RE.TRAINING]: {
                title: "Still training your chatbot on the provided links",
                description: "This will take a few minutes",
                variant: "warning"
            },
            [n.RE.ONE_TRAINING]: {
                title: "Still training your chatbot on the provided links",
                description: "This will take a few minutes",
                variant: "warning"
            },
            [n.RE.FAILED]: {
                title: "Training failed",
                description: "Please try again.",
                variant: "error"
            },
            [n.RE.ONE_SOURCE_FAILED]: {
                title: "Your chatbot is trained and ready",
                description: "You can now use your chatbot",
                variant: "success"
            },
            [n.RE.LIMIT_EXCEEDED]: {
                title: "You have exceeded your training limit",
                description: "Please upgrade your plan",
                variant: "error"
            },
            [n.RE.OUTDATED]: {
                title: "Training failed",
                description: "Your chatbot is still trained on your old data",
                variant: "error"
            }
        }
    },
    38721: function(e, t, s) {
        "use strict";
        s.d(t, {
            Lb: function() {
                return d
            },
            N_: function() {
                return c
            },
            US: function() {
                return o
            }
        });
        var n = s(19006)
          , i = s(76351)
          , a = s(86037)
          , r = s(78550)
          , l = s(9315);
        function c(e) {
            return (0,
            n.C)({
                queryKey: ["account-chatbots", {
                    accountId: e.accountId
                }],
                queryFn: async () => {
                    let {data: t, error: s} = await (0,
                    a.D7)({
                        accountId: e.accountId,
                        supabase: e.supabase
                    });
                    if (s)
                        throw s;
                    return t
                }
            })
        }
        function o(e) {
            let t = (0,
            r.p)();
            return (0,
            i.useQuery)(c({
                ...e,
                supabase: t
            }))
        }
        function d() {
            let {accountId: e} = (0,
            l.D)();
            return o({
                accountId: e
            })
        }
    },
    67901: function(e) {
        e.exports = {
            root: "LoadingDots_root__IA4pe",
            blink: "LoadingDots_blink__vuyyb"
        }
    }
}]);
