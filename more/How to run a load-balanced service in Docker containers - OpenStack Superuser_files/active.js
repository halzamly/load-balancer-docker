jQuery(document).ready(function(){
    jQuery('body').show();
    jQuery('.version').text(NProgress.version);
    NProgress.start();
    setTimeout(function() { NProgress.done(); jQuery('.fade').removeClass('out'); }, 1000);

    jQuery("#b-0").click(function() { NProgress.start(); });
    jQuery("#b-40").click(function() { NProgress.set(0.4); });
    jQuery("#b-inc").click(function() { NProgress.inc(); });
    jQuery("#b-100").click(function() { NProgress.done(); });

});