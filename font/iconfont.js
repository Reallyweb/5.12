(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-duicuocuo" viewBox="0 0 1024 1024">'+""+'<path d="M648.032 906.528 376 906.528c-156.64 0-284.096-127.424-284.096-284.096L91.904 350.4c0-156.672 127.456-284.096 284.096-284.096l272.032 0c156.672 0 284.096 127.424 284.096 284.096l0 272.032C932.128 779.072 804.672 906.528 648.032 906.528zM376 86.688c-145.408 0-263.68 118.272-263.68 263.68l0 272.032c0 145.408 118.272 263.712 263.68 263.712l272.032 0c145.408 0 263.712-118.304 263.712-263.712L911.744 350.4c0-145.408-118.304-263.68-263.712-263.68L376 86.72zM681.376 603.488 564.256 486.432 681.344 369.344 629.088 317.056 512 434.144 394.944 317.056 342.688 369.344 459.744 486.432 342.688 603.488 394.944 655.776 512 538.656 629.088 655.776Z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-duicuodui10" viewBox="0 0 1024 1024">'+""+'<path d="M766.176 257.504c-161.408 98.944-278.528 223.808-331.168 286.432l-128.832-100.928L249.28 488.864l222.656 226.432c38.336-98.112 159.712-290.016 307.904-426.272L766.176 257.504zM648 923.232l-272.032 0c-156.672 0-284.128-127.424-284.128-284.128l0-272c0-156.672 127.456-284.096 284.128-284.096l272.032 0c156.64 0 284.096 127.424 284.096 284.096l0 272C932.096 795.808 804.64 923.232 648 923.232zM375.968 103.392c-145.408 0-263.712 118.304-263.712 263.712l0 272c0 145.408 118.304 263.712 263.712 263.712l272.032 0c145.408 0 263.68-118.304 263.68-263.712l0-272c0-145.408-118.272-263.712-263.68-263.712L375.968 103.392z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)