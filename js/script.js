(function($){

  var obj1 = {

    init:function(){
      this.header();
      this.section1();
      this.section2();
      this.footer();
      this.modal();
    },
    
    header:function(){
      var mainBtn = $('.main-btn')
    
      mainBtn.on({
        mouseenter:function(){
          $('.sub-bg').stop().slideDown(300);
          $('.sub').stop().slideDown(300);
          mainBtn.removeClass('on');
          $(this).addClass('on');
        },
        focusin:function(){
          $('.sub-bg').stop().slideDown(300);
          $('.sub').stop().slideDown(300);
        }
      })

      $('.container').on({
        mouseleave:function(){
          $('.sub-bg').stop().slideUp(300);
          $('.sub').stop().slideUp(300);
          mainBtn.removeClass('on');
        }
      })

      $('.sub').on({
        mouseenter:function(){
          mainBtn.removeClass('on');
          $(this).prev().addClass('on');
        }
      })

      

    },

    section1:function(){

      let cnt = 0;

      function mainSlide(){
        $('.slide-wrap').animate({left:`${-100*cnt}%`},800,function(){
          cnt>2?cnt=0:cnt;
          cnt<0?cnt=2:cnt;
          $('.slide-wrap').animate({left:`${-100*cnt}%`},0);
        });
      }
      function nextCount(){
        cnt++;
        mainSlide();
      }
      function prevCount(){
        cnt--;
        mainSlide();
      }
      function autoCount(){
        setInterval(nextCount,3000)
      }

      autoCount();

    },
  
    section2:function(){

    },

    footer:function(){

    },

    modal:function(){

      $('.popup').on({
        click:function(){
          $('#modal').addClass('on');
        }
      })

      $('.close-btn').on({
        click:function(){
          $('#modal').removeClass('on');
        }
      })
    
    }

  }

  obj1.init();

})(jQuery);