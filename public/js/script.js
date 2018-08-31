/* jshint esversion: 6 */
(() => {
    'use strict';
})();

$(document).ready(() => {
    $('#otherQuestion').click((event) => {
        event.preventDefault();
        $.ajax({
            url: '/api/question',
            method: 'post',
            success: (res) => {
                console.log(res);
                $('#question').html(res.question);                
                $('.yes').attr('href', `question/${res._id}/yes`);
                $('.no').attr('href', `question/${res._id}/no`);
                $('#seeResult').attr('href', `question/${res._id}`);
            }
        });    
    });
});