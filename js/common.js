(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-99339246-1', 'auto');
ga('send', 'pageview');

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function getTotalDownload() {
    $.get("https://api.github.com/repos/thephucit/Tunlookup/releases", function(data, status) {
        var total = 0;
        data.forEach( function(item) {
            item.assets.forEach( function(child) {
                total += child.download_count;
            });
        });
        var result = '';
        var number = formatNumber(total);
        for (var i = 0; i < number.length; i++) {
            if (number.charAt(i) == ',') {
                result += '<li class="command"><span>,</span></li>';
            } else {
                result += '<li>'+number.charAt(i)+'</li>';
            }
        }
        $('#total_download').find('ul').html(result);
    });
}

getTotalDownload();