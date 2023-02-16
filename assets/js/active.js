const $ = jQuery.noConflict();

'use strict'
const Active = {

    /**
     * Initialize
     */
    init: function() {
        this.opentab();
        this.scrollDown();
    },

    /**
     * Open tab
     */
    opentab: function() {
        $('.tab-links').on('click', (event)=>{
            const activeTabLink = $('.tab-titles').find('.active-link')[0];
            const activeTabContent = $('.tab-contents-group').find('.active-tab')[0];
            $(activeTabLink).removeClass('active-link');
            $(activeTabContent).removeClass('active-tab');
            $(event.currentTarget).addClass('active-link');
            const activeLink = $($('.tab-titles').find('.active-link')[0]).text();
            if(activeLink === 'Skill') {
                $('#skills').addClass('active-tab');
            } else if(activeLink === 'Experience') {
                $('#experience').addClass('active-tab');
            } else if(activeLink === 'Education') {
                $('#education').addClass('active-tab');
            }
        });
    },

    scrollDown: function() {
        $('a[href="#top"]').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
          });
    }
};

$(function() {
    Active.init();
})