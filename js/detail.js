var $links = null;
$(window).ready(function () {
    $(window).ready(function () {
        $("#include").load("/Myblog/html/include_bar.html");
    });

    generateCatalog(".left nav");
    $links = $(".right a.anchorjs-link");
    $(document).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > $(".top").height()) {
            if (!$(".left").hasClass("isfixed")) {
                $(".left").addClass("isfixed");
            }
        } else {
            if ($(".left").hasClass("isfixed")) {
                $(".left").removeClass("isfixed");
            }
        }
        selectCat(scrollTop);
    });
});

function selectCat(scrollTop) {
    if ($links) {
        var count = 0;
        var hasCatch = false;
        $links.each(function () {
            if ($(this).offset().top >= scrollTop + 30) {
                var $cats = $(".left nav dl").children();
                if (count - 1 < 0) {
                    $cats.removeClass("cur");
                    $cats.eq(0).addClass("cur");
                } else {
                    $cats.removeClass("cur");
                    $cats.eq(count - 1).addClass("cur");
                }
                hasCatch = true;
                return false;
            }
            count++;
        });
        if (!hasCatch) {
            var $cats = $(".left nav dl").children();
            $cats.removeClass("cur");
            $cats.eq(0).addClass("cur");
        }

    }
}

function generateCatalog(selector) {
    var _containerSelector = 'div.post-container';
    var P = $(_containerSelector);
    var $h2 = P.find('h2');
    // clean
    $(selector).empty();
    var $dl = $("<dl></dl>");
    $(selector).append($dl);
    $h2.each(function () {
        var h2self = $(this);
        // var cath2 = $("<dt><em></em>" + h2self.attr("id") + "</dt>");
        var cath2 = $("<dt><em></em><a href=\"" + h2self.children("a").attr("href") + "\" class=\"\">" + h2self.attr("id") + "<span></span></a></dt>");
        $dl.append(cath2);
        var $h3 = h2self.nextUntil("h2").filter("h3");
        $h3.each(function () {
            $dl.append("<dd class=\"\"><a href=\"" + $(this).children("a").attr("href") + "\" class=\"\">" + $(this).attr("id") + "<span></span></a></dd>");
        });
    });
    $dl.children().eq(0).addClass("cur");
    return true;
}

