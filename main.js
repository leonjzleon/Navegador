$(document).ready(function() {
    $('.container ul li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('.container ul li a').click(function() {
        $('.container ul li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});