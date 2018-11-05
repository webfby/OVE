$(function () {
// 拉选择start
    $('.login-user-card').hide(); //初始ul隐藏
    $('.login-hd').hover(function () {
        $(this).find("ul.login-user-card").filter(':not(:animated)').slideDown(0);
        $(this).find(".login-btn-wrap").addClass('hover');
    }, function () {
        $(this).find("ul.login-user-card").slideUp(0);
        $(this).find(".login-btn-wrap").removeClass('hover');
    });
})