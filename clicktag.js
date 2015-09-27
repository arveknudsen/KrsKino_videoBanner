var t;
t = function() {
    var t, e, n, r, i, o, u, s, a, c, f;
    if (f = "clicktag", r = "_CLICKTAG_", a = {
        query: /[\?|\&]([^\?\&\=]+)(?:\=([^\&\?]+))?/g
    }, u = window.location.search.match(a.query), u && (n = function() {
        var t, e, n, r, i, o, s;
        for (e = 0, i = u.length; i > e; e++)
            if (t = u[e], o = t.match(new RegExp(a.query.source)), n = o.length - 2, r = o[n++], s = o[n++], r === f)
                return s
                }(), n && n !== r)) {
        for (s = document.getElementsByTagName("a"), c = [], i = 0, o = s.length; o > i; i++)
            t = s[i], "_blank" === t.getAttribute("target") && (e = encodeURI(decodeURI(t.getAttribute("href"))), c.push(t.setAttribute("href", decodeURI(n) + e)));
        return c
    }
}();