$(window).ready(function () {
    generateCatalog(".left nav");
});

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
        var cath2 = $("<dt><em></em>" + h2self.attr("id") + "</dt>");
        $dl.append(cath2);
        var $h3 = h2self.nextUntil("h2").filter("h3");
        $h3.each(function () {
            cath2.after("<dd class=\"\"><a href=\"" + $(this).children("a").attr("href") + "\" class=\"\">" + $(this).attr("id") + "<span></span></a></dd>");
        });
    });
    $dl.find("dd").eq(0).addClass("active");
    return true;
}