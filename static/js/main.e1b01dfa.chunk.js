(this["webpackJsonpbtc-usd-converter"]=this["webpackJsonpbtc-usd-converter"]||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(1),s=c(5),a=c.n(s),i=(c(11),c(3)),o=c.n(i),l=c(4),u=c(0),j=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(0),i=Object(n.a)(a,2),j=i[0],p=i[1],b=Object(r.useState)(0),h=Object(n.a)(b,2),m=h[0],d=h[1];Object(r.useEffect)((function(){var e=setInterval((function(){f()}),3e4);return function(){return clearInterval(e)}}),[]),Object(r.useEffect)((function(){f()}),[]);var f=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n,r,a,i,l,u,j,p,b,h,m,d,f,O,v,x,g,y;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",c="https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT",n="https://api.coinpaprika.com/v1/tickers/btc-bitcoin",r="https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD","https://api.gemini.com/v2/ticker/btcusd",e.next=8,fetch("https://api.gemini.com/v2/ticker/btcusd");case 8:return a=e.sent,e.next=11,a.json();case 11:return i=e.sent,l=Object.entries(i),u=parseInt(l[6][1]),e.next=16,fetch(r);case 16:return j=e.sent,e.next=19,j.json();case 19:return p=e.sent,b=p.USD,e.next=23,fetch(n);case 23:return h=e.sent,e.next=26,h.json();case 26:return m=e.sent,d=Number(m.quotes.USD.price),e.next=30,fetch(c);case 30:return f=e.sent,e.next=33,f.json();case 33:return O=e.sent,v=parseInt(O.price),e.next=37,fetch(t);case 37:return x=e.sent,e.next=40,x.json();case 40:g=e.sent,y=Number(g.bitcoin.usd),s(((v+y+d+b+u)/5).toFixed(0)),e.next=48;break;case 45:e.prev=45,e.t0=e.catch(0),console.log("average error");case 48:case"end":return e.stop()}}),e,null,[[0,45]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"section",children:[Object(u.jsx)("h1",{children:"converter"}),Object(u.jsxs)("form",{className:"form",children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{className:"form-label",htmlFor:"btcInput",children:"BTC"}),Object(u.jsx)("input",{type:"text",id:"btcInput",name:"btcInput",onChange:function(e){d(e.target.value),p(c*e.target.value)},value:m})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{className:"form-label",htmlFor:"usdInput",children:"USD"}),Object(u.jsx)("input",{type:"text",id:"usdInput",name:"usdInput",onChange:function(e){p(e.target.value),d((e.target.value/c).toFixed(8))},value:j})]})]})]})})},p=[{id:1,text:"home",url:"#home"},{id:2,text:"prices",url:"#prices"},{id:3,text:"converter",url:"#converter"}],b=function(){var e=function(e){e.preventDefault();var t=e.target.getAttribute("href"),c=document.querySelector(t).offsetTop;window.scrollTo({left:0,top:c-64})};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("nav",{className:"navbar",children:Object(u.jsxs)("div",{className:"nav-center",children:[Object(u.jsx)("img",{src:"https://cdn.worldvectorlogo.com/logos/bitcoin-logo.svg",alt:""}),Object(u.jsx)("div",{children:p.map((function(t){return Object(u.jsx)("a",{href:t.url,onClick:e,children:t.text},t.id)}))})]})})})};function h(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Bitcoin an innovative payment network. A new kind of money."}),Object(u.jsx)("img",{src:"https://www.inversionsimple.com/wp-content/uploads/2020/10/portada-bitcoin.jpg",alt:"imagen"})]}),Object(u.jsxs)("div",{className:"section",children:[Object(u.jsx)("h2",{children:"Why do bitcoins have value? "}),Object(u.jsx)("p",{children:"Bitcoins have value because they are useful as a form of money. Bitcoin has the characteristics of money (durability, portability, fungibility, scarcity, divisibility, and recognizability) based on the properties of mathematics rather than relying on physical properties (like gold and silver) or trust in central authorities (like fiat currencies). In short, Bitcoin is backed by mathematics. With these attributes, all that is required for a form of money to hold value is trust and adoption. In the case of Bitcoin, this can be measured by its growing base of users, merchants, and startups. As with all currency, bitcoin's value comes only and directly from people willing to accept them as payment."}),Object(u.jsx)("a",{href:"https://localbitcoins.com/instant-bitcoins/?action=buy&amount=&currency=USD&country_code=US&online_provider=PAYONEER&find-offers=Search",target:"blank",children:Object(u.jsx)("button",{className:"btn",style:{background:"red"},children:"Buy BTC"})}),Object(u.jsx)("a",{href:"https://localbitcoins.com/instant-bitcoins/?action=sell&amount=&currency=USD&country_code=US&online_provider=PAYONEER&find-offers=Buscar",target:"blank",children:Object(u.jsx)("button",{className:"btn",style:{background:"green"},children:"Sell BTC"})})]})]})}var m=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),c=t[0],s=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",e.next=3,fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n=Number(c.bitcoin.usd),s(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("img",{src:"https://blog.btcbox.jp/wp2/wp-content/uploads/2020/03/CoinGecko.png",alt:""}),Object(u.jsx)("p",{children:"Price from CoinGecko"}),Object(u.jsxs)("h3",{children:[c," USD / BTC"]})]})})},d=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),c=t[0],s=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.coinpaprika.com/v1/tickers/btc-bitcoin",e.next=3,fetch("https://api.coinpaprika.com/v1/tickers/btc-bitcoin");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n=Number(c.quotes.USD.price),s(n.toFixed(0));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAikAAABbCAMAAACBOOXPAAABIFBMVEX///8zMzPKMSwuLi4nJyfv7++RuUlZWVkqKipCQkIjIyMgICD39/f7+/uUlJSRkZHo6Og8PDyqqqq8vLyhoaHY2Njg4ODJycm2trZwcHAcHBwYGBjPz89nZ2d7e3tOTk7JKSNcXFxJSUnCwsKJiYmbm5ttbW14eHgAAADIIxyCgoKNt0D66enHGA+Ovkr88vLNOTTa58Shw2WJtTjtvLr34uHwycjGPi7Zd3TTXFnlo6HORUHdh4XfkI73+vO604/E2aDU47qcwF2uy33l7tXX5b3u9OXG2qjln53Xamq1t3qwbjGTrECueDqdoUPGDQDATzGfmEHOHinU1LKrgTyrgDe7XDSmjj+Yp0Wjk0G2ZTfCSTDQTUnvwsD01tbbc3CN7OL2AAAS10lEQVR4nO1daWPbNhIVBcjiKeoWLYnWLUXyWcdOfSXptWmy2/TwdpumdZP//y+WlIiLBCHQiUTX5fuQgwJBDPA4mBkMwFzuM+DFdy9Pd3ZOv3r1OSrL8Hjx9enT/R0P+998l3ZTMjxgvHi5v7+zv7/kytMv0m5NhoeLb32OfP3FVz5Tdk5fpN2cDA8VXz/1ph1/1nl16lFm//u025PhoeKlN/WcLv/16jRTKhni8a+nWJF84SuVjCkZYvDy6Snyjr/xbNrM/ckQgxevcBjlNPN+Mkgh85MzSOHVfsaUDDL43mdKFtHPsA5LL3kn830yrMMyWPtNxpQMa/DVU1+lfJsxJYMQL75dLSe/TLshGR42vjhdEiVb98kQg4Oz1zcXby7+vRNg/+u0W5ThAeL87PLwcD7v/+eH/YwpGeLw4ezmbt7P3+bf/rhDIQu8ZaBwfJb/yVMmt/mf//jl6GjnQTHFLJtpNyEFmIUHKfX5x34+n7/9+e0vP4R4kjpTCvVpcdduptuIrcOsz9zdSTntZkRwfj33iPL29x0e/ptq07oQAqBC4KTaim2jpUDVk9qo8X40HYRtNyt3cOlplNtfw8pkhaNfn229QQQNDSg+gNJKsRXbRhNL3eX8WgaG7sNQrG037MLXKPlffKYcHYVnn6P/naRIlamqrKAW02vE1iGWulxZ/Qi0bTPlOL/Ebz96eP/u3bvfGa4cvc+nR5VCW0HoPEgDbyMwO1jqJxxTJT2mnPVXVPnSw/LvdwxVfv+yf3Kw5SYhNAhTdJ4ifpygpDY4tkhqTLEuAqYQvGeUys/5/pvj7bYJoUv1WSOdJqQAmimj6M+pMeX8JEyU/M/YZDnyTdrb/Pxqu21CMJ+QPkunBamAmn0K0V9TY8rVPMKUW8+69UyWt2/fvv/haOcH70p/u23C2EO2HRyn1II0MNaR1LucX1NjynWEKPn8H+9++/L21v/Xn++Pdv7I5w9TMmoblRVV1Mo/KfZWGMBAaq6XnBJTPhxymELjl6Mfv8z3L7baKILmAEAVqoN/ElE8Mkx9qWGRK3VaTHkenXxCRsvO0W/p2bS5Qqu0mIw40/Wjhjkq7doxUqfElGV8VojbX3/8M5+/O99mqzIIkBJTnq0jSoCTD9tsVQYBUmLKzbrJB+Gzm7SWuQlBTclQrmVKPF6qEHm0fNlPEv2eTEkmTPR2SZWS70sypdAaOc7YrjvOqNWMsy4KLac0nroze1Lrcke2EAWvnBn8Fvy3PKrarmuXRhFDEBUMuqpcq8/c6YJTEKHRqlVte+a6C7tUa3GK8R49Hddr0ei7VWCKWo3aZOzu2vVWpHckpY5hCnVX6IYmJYzDE0YGf63zfBDmMkwpVBdFRdF1CKGhA2VY3KtyaNydFRUdqn4yAYRa0eYsbbjFMHq8JfZqb/XjMnxbtntAhwBACIaLUGfVg4JLp7M568HV48FwzOm3Qm08GCpQh6iNleFuLTxkQY29ZeObi56yfLSu9mZhcZqBMO6yTS1XU+GyqNKrhkoOo1Lzokh8pkx63K6yarbbq6hEGGU4rd5nCS0ayb+/TmmWgKEChcBr2pPISHSLbbYQbI8jgXrNE4uFEe5WH3V9+Rsc+ak/Xv+TOhU2s8M2VrW0vIITlS6oh7ttNG0b3kgqNIDartRYzturR7ebfo0G8+g6W7KhLUuqWtn3+dukamCEvOBOWGgApxypuUyp4pvbNrnanMGoMMBQeC+wGOd3kkRZzxSr1NOVCDohplh7CogUgkp4dUOLFNK5TFkFqMAoZ45hqDuYfJZS8Gs3V9gLtRIu2DqnHCmWFS4YStmrGo1yrjALPdqwmQpRik2lkev2VKYoLDIKqK2EAWRjtN0K6jG4S7XTjla5vBPOkqqVM1l7dq3v0ywaUQpEmFIecMcBGCW2toRMaeW0cL2ACW9ippSLkQa0beYFm6nhAqgFRbp3A6boDbMCwyUNhlSEKY1OWCw4oEtGh1WVZEpDIUShi5YibUPCTJNFqKyPspNP/lrMlO6Q38EsU8q9uGEw6kx1CZlStaM9otKKO+gxWJtxug4yMxVhylKX0+UmVLHgiWqVx6w23VjEFK1ajL5LjFj31inmAC+PDRgthZkSzEzUg5Otox3I2rP5/qUwRaVZYTqBtIlhijmA3EJLMBOQhmdqbpciBExRKiquk1RIP5r0GKcg0OjeXY48UA2gDYuDQU+DhDkVyp5C3BxyaxxSNTYw7YO/AWVRKYBSKp2I1HJMMTH/QY/V4Su5VV3Vhr3BoKgBQms1URbHa+nJRxzNN13SAgA7lWFPq3SWphTDlAnpdNiu9FzNd5CwjLQ6LFa0ABUZpgRV6J2eqxjov/TqcylccDhQyGyp04bFTPUapy2cVqNRLhTKjdouzgHQqTnSjjx6UGnjGlVKRTZYBQnhdDJxSSsphQa0sNRys4+NXxQjZBaWoD8ce9VRIMxohr0JNZFSWRvJJ0wRrhBSOl0tTsqmaZlmoTVxh5D2fbqYKOqwVLY8FOpk0qKHIWciWI4uyxRVqxYsy6zi0XOJ/cEwRR36Ba1Rj4wgpQKmarHUYCwXB40bUMhFO1qj2cKTK9AI71mmgL2yX3kN3a5SBjWWOlcNKpLSKQ6iHaiEPQNb703YiNUIa7Zigj0iz2R54jHlRlBPA1uJQGWczma9SOk4rHjUKeZPc0A6l2uO1wxJpkA3eFQ1aA0YEpbSTNHdoIvKmCoqVbkziniQVXR3h4w/zRS4GzypjC2RDnG9GKYApGxKqJUDnmmJmCKjU4jb04ls+hhF4kA5B49Cguln7TIywfy5oB6i/bTwXgsqgNzA4+JSnUM6V+VxQZopEI1/roAJQBpDMQVO8buEcy/VhTi+gORrE3+KYgrll47QNXWPyE0xhUiBN2oMeTHTBDqlQPzjCadwBAU3KN+WZ8oxL4cpjiln8fUQc7Yj2pSDIx6QUXstpDtVro8vyRSafWgQAdHFhClMuAGxlD9cBNOgHLVTizBFHVA0Q8MAevgSzRRivpi7iAy8ZCV5phSI21OSC6ehvuD2KB/SkXwPhwInuYpz+URGUnkAkETMdWuIh4s3ccoxhbH50WShk3Elvg/j59TwDC9+v8ZqPFPY+R5PfeQ5hCmQtpzRi9MWMWX97DPGRHGFIhDUkzNF3p71mCKoB2l7oInezEbc+1tDHanzhkuOKcytTlQDIKYwjq4/iMH9vBR4Cmj8uTqFqbGMnRpcI2aK6jLrNDJMWatTJsgxU6eyAfrkTDmI5uTH4zq+Hgs3dhFfiFjoYBqaZLBhyW26FFNYj0/AlFAtRM+JXUYBUyAbMjSxf4ufhJnCKq76k84ST3gztqROybUQL9WetCeTnClXCVSKyKBtIbsQCndUox2UocnHD8agd47HNCmmsMMlYEroBTaRAUIZoOincrNbneytMIi3Uwx2oC0kjI6bhJlSYQaz0AzAs87kdEqvBeUMLcsTxqnPVsIURS8mD8fykXxxan4dmynCyR5rjgifUDwc8GbajTIlt4h5dMGZDYChQ3UFND+uZwredgLXMUUIKZ2iaNjE4+bwI5jOoqh1IsJIM+VDAqLkrwVZtNha1IUzJeovPWISYCOCt117S0wZ0lebM6AymREIEkwp4QkR9canMEWoU6h2Ccys5ljhCyPNlATBlHz/o4AEqLcVXfg8xKdwwJmMtzfvRrFZpmCHmmJKoRRdHb4HU/a2yJSQsUTBrCqxy8myTEmiUvqizaZ7ckxB+0bbkf4iLiznts0yZRJlSnmq897AxExZfA6miGefCqZM3EFElgtjhZFlyl8JVEp+LlpITsqUiE5JcfZB0QgwQFfMIvUOrvIJydJvAqYQw31jOgX0HLJEzrURzT3stEeFkWXKTQKd0r8U1URmH2FPoP6Kzj52+naKOsONwX2rgkrRXdg+XGnfh+M9b0ynAM3CUR21yF0+wqwHQOkFwgyS+T7nCSL5a7KtkQZXoPCArWGsRYvi2lFXNbdhpljI7cLxlC5+BeGMrK4J4ilxXjInnvLZdYpGpXswqxSoIGG9W8NMShhPkU+L9FWKcKcpYYpwhQq58RHrC8dTIpEWHxtlCl6exNEPEqSn86YTMAU7rthy2CBTrFwTTyac3sPxC3VCaZyETLlLMvkIVgdz1BIfcEW5mWOsUEN+VBfZZQYvKLBRpuBHg2BKtPDCNlOjPFOaKBLNWffZwOzjCasgRAJVFn45mZBmMqYkUinX4hUFC5+GA0TTDwrlRlaHkFnGLt4hbJQpE7Seh1b5mmhlgh1VeaZg65yzlrwJneKZWkhxAC30puEH60yPJ2LKhyRLPodilUKir57ZJFAqTfT+htSkifT1J2Qd3JMpJtYg6KVD+pEaaB+CtWSWKTg3hhJyszrF0xw4O0hhux9pTDBkrqNsIhmmnCdZRV5jpeToZVU4i1c/JGWJzU9xcDrR/TOZ7smUEl6HQJXjpAHGDaui+XUtU+po1DrkQRvWKXFbfcgiPWC2ijjCzGQG1tlJkqjb+q3rDQVDDW0jsQqkd0o4LY+2Z7p4pVXjKqQNMmWErRScmNlth694MuDhX8sU7Dmp1IL5pplC8mhDS+ItHJijetaRj6ccS59usMRclEC7goVjb15bew5pVrM2poKHTRwtpBIUSdqzzu68Q9gcU3DusUJ2sjZwHj5ud2FMzudbwxTydtN7UjY8+3gg2yLbtFVL7BTcPaZNhmodU54lmXm8uedE4iymLhPW7M3qTrfVrY4HGoBtKgl4lyQU9vwEftNszcgGHKofLTOamw/r5CoumJgpumMFvVuwyaPJBhIT+3EoI7hbJH3LYwqu0TLHmChMzpI0UyipkRoDU+oiKhdhCk6zYReVC2QnWrCpuuHSmedCpny4OUxEFMnjrRfMji8V6u12W1/unKa/EdAgr5y/30fTYJsaBeotbGlaZOeLgncAaUMcuU7MFEUf7tVrtZqzp5LwJX0kP+nzzsxpjRyX2UPLy3kztL2JX+MMkBqZ4wtlmVIecKRW8CWyJz+6h7BBNlLRDiTR9cZgNGo5M0YYEVOsq2QWiuf3iFLyCQrUzjAWzNckqkwpZguhQc+wI2q3P10eXfoEpvg8NgxDp1rCbA0l8W9FNRQQLBaCaI12fI2APWhBlinNnlDqtoApuToxVSgLaUS2rwIDANREKpp/fHV3fffx7APriBycXSdIsV6i/0YoG0G5F7O2zX53ZGzwS4XCca2YUgifwpQI2MhygbN32HMzp5EaOTuhUenQCeYJmCIS2hAxxcKLb4xVO+C8wKAS+PweU44vvCmm35+fXFzhBCTrr5vLeUKFsm4zMtMdAz4JWKaY4SMpgsZ32BMntsgU8CR0lMjoSaSMajQDh1OGKWro6JatMCVXJltFVELUVvQIEhWMArPdYwrendGfHx7eXTx//fzj9U/zflKe5PvXST6sMOGmzLRDIeYqiNIcaqGloK0xBehuNK8q3LvGbhm1aD1TVDAN82ErTMl1yc3USq0TOmVH8Y+4DWKgHlOYbDZPt8wTK5OAKMmOi2xMOqEjmVTYqYTzJlqzjspMw7C9Fx4t2k7hgGJKcNQSe6aGo4Zndh5T/CcXHU4Mp9ahjyLQwcTTd61IjRymeDV2pqNIoLmBDphay5TIQVQ0aDtldUVlT+/SUUk6T79WofKyAIQl/2ColfFjVBOcYCAkSvITaAvO3kBTdANC3dCVSnG3xMsY7y6KGtSXX0/Tdc3lfGKwGznvjMEAMwWd88YeAjdC551x9hB6PoShe80DytC1Y9KUy+MeWH3Tzqj0Vt8C7EZqxEwZVkBQY88t8fKJ0DlvRe4OZOqxU6HU5NnlQXCJ2T9kjUlRKgpjBqffeZ2tBEfqNQeo05LsDRQQ5V4H0JrdUc2p21XHGXVjX6FCt1a1F+7CrtYavPC/xTlEkQa+Bx3gyB6xaEWv4ky0ScM/2rLqH2wpkKI5qo933Vmpis53tMJPpuIpXo1VW1AjkUbwxGW3iGFGC8b2Gt2rZU+Yqbs7dkYhYUzeZ1gSY3656TOtLUu8RP1ZcY+9uGvaF5fz9jARIwzn007JiZLWV8I2g3swZQ3+XkyJQ5LsEz5RbtL6nsKGkDElBm8+iSr963UZKX87ZEyJwfndJ1Bl/gg/u5ExJQ7HF/elSj+f0icHN4qMKbE4vsrfiyuHl2l+cX1jyJgiwPFF/h7x+8eoUHIZU9bg2XWyZJT+4c3js1BWyJgixvHVnfy6YL//5lFOPEtkTFmHgytJvdI/vHx0rjGFjCnrIaVX+vnLsy1/pXm7yJgiA+vs5kSUd9Cfn9w83nlnBRsdvxd7JE1SjEUH+v1tYR2cXXp2CIct/Xm/f/n64FHrEx/4+L3P9t3lsuhAv781js+ef7zrH87nS8Z4f/Tnh/3rN8/PHtkKT4bPgOPzD8/Ont9cvLm8vHzz8eL1s/PzjCb/ZPwfghC2lJ/DdhwAAAAASUVORK5CYII=",alt:""})}),Object(u.jsx)("p",{children:"Price from CoinPaprika"}),Object(u.jsxs)("h3",{children:[c," USD / BTC"]})]})})},f=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),c=t[0],s=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.coincap.io/v2/assets/bitcoin");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n=Number(c.data.priceUsd),s(n.toFixed(0)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("FETCH ERROR");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWUAAACNCAMAAABYO5vSAAABF1BMVEX///8AAABszvVlw6Flw6Jkw59fwZldwZhYv5NSvo9ov+tls+NqyPFpxO5OvYucnJy0tLTl5eXx8fFmueZiqt5hoddfnNRdltBckc2kpKRbi8lXfsBJvIhZhcVWeLtEuoReXl7Hx8dLS0tUcbcmJibH59rE6vuKioqg3/jU1NRkZGR8fHzy+v5TU1Orq6sYGBg/Pz/d3d12dnY1NTW+vr7p9vGT07rX7+Z/zK/g9P2A1PZFYK6SkpI3NzcZGRksLCy34tGw0esxtnvp8PjA0eiV1L/g8uyp3Mpxx6vS7vvk9v2u4vmS2fdzyaRux6C/5NPN4vOKtN6kuNrJ0ueXq9SetttrhcGDmsqUze6MvePE3O+jwuJGXax0f/S1AAAOEklEQVR4nO2ceUMaSRPGQcFbgfEKSgIoSAA5FTBqImg8c2iu3X2T/f6f44Vhurq6a3oYrgHdfv5a6WO6f1PTXV1dWZ9v2nRze3J3V2/WJj2Ol6zGSTBgKnitOY9LzdkA02ygMenRvFA1gwGk2ZtJj+dFqjYXEHQ36QG9SNVFyIFgc9IjeoGqBYgmPaQXqHRQhhzUfsbIdTtLKGs3Y+S6ppTTkx7Ty5Om7IU0ZS90HZyVpCmPXtcyZE15DKK2PKcpj1x1vWJ4IE3ZC+ndzwtRW9br8uhVD8rSlEcvTdkLacpeSFP2QpqyF6rPacrjl7ZlL0RteV5THrk05VGr1kiTOz0XlDvN9I2rO9WuA53DdPBOhFifkyVSrt3etZsFg3dNLwf7XJWeZVdPsyfYMHvYciPAmgUDOrerl26FtAuEuT7vZMtCtoZOIeghKbcF5cJRyguc8o109apXZ0dJ19Szt1DiSPlEancyibE/GzVJmhZYpRNlkt2l1wwn3alzLpwoX8vN0DegJas2R26d6qzMiXKA3KPo5Ga1bihlWGHrC/OSOGV6JTg7mQk8CzUGpEybBSczgWehBjl5cMonTpRJM01ZrT4pP7KyeU25D/VHeVFTHkgNigtRlrUIKwZtNjeZCTwLOVJeJJQdbFlTVqtBfOI5J8pgywtB0m4yE3gW6o/yGtjyAmk2P5kJPAv91ym/u79/UBQdvrt/d6goe7i/f6duRrpsEFzziLKsvijfNBpTHtx/+Dxj6q0NzINTs+j0gBYdvu02+2zzfu67zWY+Cb+OjvKC0G/tNmAeCetTDNqCRaG0+Z9C0alstAdQtPJWKjr8zLu8R783iE88/4WVOVFeJM0Eys0g3FZdDwNinOIgO3YpFN3johnRnD/jolPhK3gQmqE3RykvOFCOqSkvYMp1FH0OTmmwTqAlWrNIa2YGrwyfxCLh7ZyKZdyaGxQXp7w2oC2LN4mzdd8USjRXEaX0AjDKwxWpDC0M0guYmYGSNuWFhXnBkUCUZWFbFtrML8wvQp9yzHoq875OZSQc5Tu5CKGUXwBCeUiKYKlJE2/NyZY55TV6+obHncjHQuhxevQg2+TMCpS9Jbhgl6Mk+TdwQIpOWVHDkbKsuCvKNFV0+hyNgxUiMFhi5hwXNXNusPTlgJ2nCa5FTjmmphxTU6ahkfnmmFgNrk+rRICL0pphrgRZzdG2SRcTaJaOEUfiK2vmSJl6eawoTV3w6fPmPi0RAWWymHBcdFXgqwn9BFaYq92guLgtxwei/EgpT5+X0VonemJlDrbcH+UZRrkWJ7T4vV88JikO3sKavDOugSeXpi749GUR3C/L2oBtbPS27COrQgyQPFLKkBHzhTSDl3PjEDCdGh1uyFqGskEpU7cFKNdlzDEgWYtLmOP85NGUVxNu5r45mfI0hutaW5uCtmDBGIct1+Ii5jhaQ+txUZfIJhfEZrGvvEjeUdemb8Foa3Mb69U3XkKdvBV3tkzEA03NS8FcudvbVkykjE8XadHO4zhN7sua/Yo9Vbp6vYP0CoV9VkdFeRWF864vObB4TMiQbVxiyGu4yHeLm102cVFtERk6WsynS1c7b3Ytvfkbx9ZWKebhKfvSlwzmJfruTTViwPlSvthrohcgbW+1+Tj/OKbv4Mf0ff9sv62zNx+Fn5foiUVNmceYV2gzITRdqy9ethX/auML1OOXpmJNUlQ76ZbFTqi13pqvp93n9LnKSFc/frb1Q7oq6Ysyt+UV0m5JvgC4aTQU/9ip9nhyclK398Vqj7fXt4+27WrperuZfdmUa52eC91QXiWt1lV3g1o2lNfXNeWRa5mevoEy9aWB8hJptawpq0UO38sOlPnut0TbacpqbVBcbiiv02b3iidoDU6ZtNvQlNUigaSNDU6ZCCgv02aaslqbfVGGW1lKeVNTVkuK1nXkhvIGabWlKau1vUUElGmIg1Mmrba1j6HWNpED5VWg/I00ezWhCTwLfXslC4LPBzTEAZRbO3KzzXGMLpJJFKrJcfTsrT4Kkee2XrdY0QGNJAHlK9LszxgGF/abqo6ha4+181rUDgTtKOUlnvn1a1fVbHSq+C2FRt+3x/oI4f1ujJ+Hnw9ouI5TPnytajY65Rll/xg691i/9t9w7f/iBTaU/+GlV29ws+/jGNkeUI6Mo3tv9ce8RDF1hmkd0Ngzouy72oV2Z+Ow5BdG2ff011lXfz3hnw9oUPQfod3Hbrv9X1fjGVf1Ba0YHV19//n3z+9P4o+/e1Hu3HL9+CG1GqGyDHJmbI+YvH7TCL9MecwKdSEXvH2qt6KUlz2m7Evm/P5y0eOHeqvfNPTsNeX/gDRlL9Si9yia8shFKW/0T9moZJPJSg9/1xhwhH0MIVlxqlDpNUKheqTi0Fm/atFrlP/11UGkmCgxZ6x6bFulEi2kOsWlo2rYhnW42FYUCBjhjliMLlKsHn3wp/bOHYJ22dAeG0IpZzeE7Dk7+5RD1nPMh4SzrMax+SdrG851a6cUE+pbLXpb1Q/lZMEvqBSVaxjF90KNXFaqwI4lFn/DAmZ2lM2hlopwUjQlDiEVlioUxQq5zoPK1h/Wu7PiguZDjXPn8Q4iSnnTPeVIzk90JI6qSGsUxE+R/Wz5chHrz732fPNiww829nwsMe4ogT+Y4w+kPOwz+H+aCjGkbbspydVHcFxq0StB15TD8ni6QjZnJGxrYOcYJmx9BYyyPxGiAM/lIdi85rZKfAGu2pWXgbxE2R/K2FS/GHqFlv+dxObmllvK5zYDMgWmZNgYmilkHkrKthIxGxeKajlWo6CowCRTVmjYm5wWvXh1SVkJGcI+Ssh+f56TYj+5oizOV9k/e4t7qgpMLin7h1ycW+R+e9sd5ePeI3KaI+ySfVL2ozXXfrloq2xVUBsCk1vK/uH80Ba93/7Wu5WPb1qmUtVMVdq2pTmWc/mCsA+xpbMn5dSRsB/xr0B8z+V8Pmc94MiqUMHlqXyoWAzJL8Y15cRwlF+RbABXlDHCc+aDdmYJkDEu5j+gzZDF4Jwp75ndRTAF2NnQoly2aEU6XkmK2R162h73jI96Uy4UK4bPyEbxsj/U0kyzAdxRRm8ZfUzRMh8Md8NyvMIxGbYT5RI/FHBizIVBPiJy0iOJHBtPllcQIn7YjbCjjHzRLPf1y74hRCnvuKHMp6jyJoEe+sZ9eOoFqR6lnMInYvAW9qwf+KqvMDP+mqUTHGJqQzkn1OVOyjAbYEvOudhxRRmmuKeqAe9BMgLuZHcZOlAWwg78d0P6WxWahm2AeNnciaaU5QmBH5OXe+lDf14TuaDMDVUZgGGbIbEBsI6o2BWhLMHJiB3CW1RdskBHFw7Dp5TlCcHHd0S6ca8fuzLk3V+9W8Gj1S+Y1SDrGbRNmH+qKavadRdmsEfVtlSUOsaCN0Yo0wmBWzLEHfuTmA/jMrcl3GuKnAmdI/sG35t/KSnLKV1wxunuBGxf+qAaAZCzoQM+HqFMD9PJnnPtLSl9qK19F9mzYAtKZx2cCbppsF2pZDZWUiavh61BXcqsWkI1AmbsJbtCJWVaVT2gPiRkHXXkJnuWgXqvrHGsHrZoZErKJLTLdtyukbNqyvQ69qXbrqfMaZYp0zWcB0uGic0d7guY992YMtiJ2ol0oAzLjfl1KimTD5RRTph/9bSwI6G6JLYFy5TtXCb2DQ3jZPh+72OduUqeZbas3nc9o0zcNCYG0tbXZORkynbLC3tdQ1H2tfZRDp27UBFbl0u912W6nbhcMVxSVuY9sxUjZVfIWvezLg8ZzX96/W83he7f/Vbv2h1F2ZOVlLPSPJDYcpNy3v16UGYeh3LRctyhlZSpIwH2MszuZ6q1tdtenrf/uM0CT/Z+MquRU5Z0+QxKuacbC5Zgc0MKixahnCB14RQ1gn+Ucfjw0EeivcO5ignOt7IpwQy73/qglPklkmIAYAk2h0M4mNKzn/xYHt/yPvMXTvfK/Db4YOXlDJp2bWxQyjzspFi1+DGa9MRjKZRyylD0MlRQbjDx6KHqDXMK4iTlf+EwKGUee1UFMuBTl8DhgJRNTE7wSQwejZ5A5i+K3QqHuyJfqHkIHPPir8dyDgamzHsSMEcgP4ZHZy8EzBV092IXXy7xJ+PrmBGmGrlWmT8+A3Po3EOAZ4XyCEKsBk7gsD6CgSmj+yYe7TdTVix0RsmmgpQhYn9XkjiOGIZRKeIb8MRQuAZUFo8qV0xmk8eZbgAHnAp0uVrKhZPJZAiPmn2AA1MWUi0uqsftIbDMK2uzwLdm5WjW8BmR5LlwIaW+90vJSQiTMGVFOokp9gFXlDX8yDkZnLJBOgVZfUlpQiRrqI/b1eEOfoPrvXJEDLNN9hYITGNwyr6kuvtu46y6giW3lCfgYHQVUee0sCrqfAiOcAjK/OBBFOpVwZJLyhfjTQt2UsTmC8S8fOpZIr9kGMrqr4X5l70wu6NcnuQ/RVTkGmI8SbsKBWwZQ1FWrAnoAXYDyBnKu5KSXWLdpNZkpmSZDKkqfVxRObN1T8LHNnPLvoEy2dSZFyhOmiZppsTzaF4u75DdQ//tQ5QNmi1cHkUC85DKVrHLk8rbfFvhHF/By3ky5kiiowKgKRbMH2jcuFsxUZUeYQhurX+PBAEjIWQLR1HTCpLdhzCvEyib9TPc2ytnpoBxR23vPVPNFRL5fKiiCilEktHzTKiYHdP6Fgmf5xOFQi6fObZ/QiScyecK1UxI4fUKlDv1k8XzTCaafAn/NHx6JFPWGoc0ZS+kKXshTdkLacpeSFP2QpqyF9KUvZCm7IU0ZS+kKXshTdkLsXhzj/+l6/8B9zAWOrOxyjkAAAAASUVORK5CYII=",alt:""}),Object(u.jsx)("p",{children:"Price from CoinCap"}),Object(u.jsxs)("h3",{children:[c," USD / BTC"]})]})})},O=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),c=t[0],s=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.gemini.com/v2/ticker/btcusd");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n=Object.entries(c),r=parseInt(n[6][1]),s(r.toFixed(0)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("FETCH ERROR");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("img",{src:"https://media.igms.io/2018/11/18/1545141998963-f987dd75-d69c-4c20-b48b-9b345ef3f8a7.png",alt:""}),Object(u.jsx)("p",{children:"Price from Gemini"}),Object(u.jsxs)("h3",{children:[c," USD / BTC"]})]})})},v=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),c=t[0],s=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",e.prev=1,e.next=4,fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,n=c.USD,s(n.toFixed(0)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("FETCH ERROR");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("a",{href:"https://www.cryptocompare.com/",children:Object(u.jsx)("img",{src:"https://yt3.ggpht.com/ytc/AKedOLTOhQ-AXagffOJuD26lgZb7b-tVokLjiHRi4MDJ=s900-c-k-c0x00ffffff-no-rj",alt:""})}),Object(u.jsx)("p",{children:"Price from CryptoCompare"}),Object(u.jsxs)("h3",{children:[c," USD / BTC"]})]})})},x=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),c=t[0],s=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT",e.prev=1,e.next=4,fetch("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,n=parseInt(c.price),s(n.toFixed(0)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("FETCH ERROR");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("a",{href:"https://www.binance.com/es",children:Object(u.jsx)("img",{src:"https://public.bnbstatic.com/static/images/common/ogImage.jpg",alt:""})}),Object(u.jsx)("p",{children:"Price from Binance"}),Object(u.jsxs)("h3",{children:[c," USD / BTC"]})]})})},g=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),c=t[0],s=t[1];Object(r.useEffect)((function(){var e=setInterval((function(){a()}),3e4);return function(){return clearInterval(e)}}),[]),Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n,r,a,i,l,u,j,p,b,h,m,d,f,O,v,x,g,y;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",c="https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT",n="https://api.coinpaprika.com/v1/tickers/btc-bitcoin",r="https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD","https://api.gemini.com/v2/ticker/btcusd",e.next=8,fetch("https://api.gemini.com/v2/ticker/btcusd");case 8:return a=e.sent,e.next=11,a.json();case 11:return i=e.sent,l=Object.entries(i),u=parseInt(l[6][1]),e.next=16,fetch(r);case 16:return j=e.sent,e.next=19,j.json();case 19:return p=e.sent,b=p.USD,e.next=23,fetch(n);case 23:return h=e.sent,e.next=26,h.json();case 26:return m=e.sent,d=Number(m.quotes.USD.price),e.next=30,fetch(c);case 30:return f=e.sent,e.next=33,f.json();case 33:return O=e.sent,v=parseInt(O.price),e.next=37,fetch(t);case 37:return x=e.sent,e.next=40,x.json();case 40:g=e.sent,y=Number(g.bitcoin.usd),s(((v+y+d+b+u)/5).toFixed(0)),e.next=48;break;case 45:e.prev=45,e.t0=e.catch(0),console.log("average error");case 48:case"end":return e.stop()}}),e,null,[[0,45]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("a",{href:"https://www.binance.com/es",children:Object(u.jsx)("img",{src:"https://i.blogs.es/1fef69/bitcoin1/450_1000.jpg",alt:""})}),Object(u.jsx)("p",{children:"Average Price"}),Object(u.jsxs)("h3",{children:[c," USD / BTC"]})]})})};function y(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("h1",{children:"Prices"})}),Object(u.jsxs)("div",{className:"products",children:[Object(u.jsx)(d,{}),Object(u.jsx)(m,{}),Object(u.jsx)(f,{}),Object(u.jsx)(O,{}),Object(u.jsx)(v,{}),Object(u.jsx)(x,{}),Object(u.jsx)(g,{})]})]})}function T(e){var t=Object(r.useState)(!0),c=Object(n.a)(t,2),s=c[0],i=c[1],o=function(){i(!1)};return s?a.a.createPortal(Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"modal-wrapper",children:[Object(u.jsx)("div",{className:"modal-backdrop",onClick:o}),Object(u.jsxs)("div",{className:"modal-box",children:[e.children,Object(u.jsx)("button",{className:"btn",type:"button",onClick:o,style:{background:"gray"},children:"Cancel"})]})]})}),document.getElementById("modal-root")):null}var U=function(e){var t=e.messageToUser;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:t})})})},k=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(!1),i=Object(n.a)(a,2),o=i[0],l=i[1],p=Object(r.useState)(""),m=Object(n.a)(p,2),d=m[0],f=m[1],O=Object(r.useState)(!0),v=Object(n.a)(O,2),x=v[0],g=v[1],k=function(){l(!1)};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("main",{id:"home",children:[Object(u.jsx)(b,{}),x&&Object(u.jsxs)(T,{children:[o&&Object(u.jsx)(U,{messageToUser:d}),Object(u.jsx)("article",{children:Object(u.jsxs)("form",{className:"form",children:[Object(u.jsx)("h3",{children:"Subscribe to our Newsletter"}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{className:"form-label",htmlFor:"emailInput",children:"Email"}),Object(u.jsx)("input",{type:"email",id:"emailInput",name:"emailInput",onChange:function(e){s(e.target.value)},value:c})]}),Object(u.jsx)("button",{className:"btn",type:"submit",onClick:function(e){e.preventDefault(),c?(console.log(c),f("Thanks!"),l(!0),s(""),setTimeout((function(){k(),g(!1)}),2e3)):(f("Please Enter Email"),l(!0),setTimeout((function(){k()}),2e3))},children:"Submit"})]})})]}),Object(u.jsx)("section",{className:"home",children:Object(u.jsx)(h,{})}),Object(u.jsx)("section",{className:"prices container",id:"prices",children:Object(u.jsx)(y,{})}),Object(u.jsx)("section",{className:"converter",id:"converter",children:Object(u.jsx)(j,{})})]})})};a.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e1b01dfa.chunk.js.map