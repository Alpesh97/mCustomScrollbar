
$(function(){

  jQuery("a[href='#']").click(function(e){
    e.preventDefault();
  });

  // mouse hover video
  var nowPlaying = "none";
  $('.hover-video-link').hover(function(){
      nowPlaying = $(this).find('iframe').attr('src');
      $(this).find('iframe').attr('src',nowPlaying+'?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1');
      if ($(this).find('video').length) {
        console.log($(this).find('video')[0]);
        $(this).find('video')[0].play();
      }
      $(this).addClass('active');
  }, function(){
      $(this).find('iframe').attr('src',nowPlaying);
      if ($(this).find('video').length) {
        $(this).find('video')[0].currentTime = 0;
        $(this).find('video')[0].pause();
      }
      $(this).removeClass('active');
  });


  // modal video
  var videoSrc;
  jQuery('.video-link').click(function () {
    videoSrc = jQuery(this).data( "src" );
    jQuery("body").addClass('modal-open');
    var _this = jQuery(this).attr('data-link');

    var _currentModal = jQuery("[data-target='" + _this + "']");
    _currentModal.fadeIn(300);
    _currentModal.addClass("visible");

    _currentModal.find("#video").attr('src',videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1"); 
  });

    jQuery('.modal-backdrop,.modal-close').click(function () {        
      var _this = jQuery(this);
        _this.closest(".custom-modal").removeClass("visible").fadeOut(300, function() {
            jQuery("body").removeClass('modal-open');
            _this.closest(".custom-modal").find("#video").attr('src','');
        });
    });

});