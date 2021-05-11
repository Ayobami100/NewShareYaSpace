
  
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ReadMore'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.ReadMore = factory();
  }
}(this, function() {
'use strict'
  function ReadMore(el, options) {
    var link, moreText, height
    // link = document.createElement('a')
    moreText = document.querySelectorAll(el)
    console.log(moreText)

    moreText.forEach(function (element) {
      if(element.innerHTML.length > 100){
      element.style.cssText = 'max-height: 20px; min-height: 20px; overflow:hidden;border:1px solid transparent; '

      }
      // else{
      //   element.style.cssText = 'max-height: 30px; min-height: 30px; overflow:hidden;border:1px solid transparent; '
      // }
     
    })

    this.options = {
      openText: 'Read more...',
      closeText: 'Show less...',
      speed: '1'
    }

    for (i in options) {
      this.options[i] = options[i]
    }

    options = this.options
    // alert(moreText.length)
    
    for(var c = 0; c < moreText.length; c++) {
     
      let element = moreText[c]
      if(element.innerHTML.length > 100){
        link = document.createElement('a')
        link.classList.add('show-more')
        link.setAttribute('href', '#')
        link.innerHTML = options.openText
        element.parentNode.insertBefore(link, element.nextSibling);
      }

      
    }

    var showMore = document.querySelectorAll('.show-more')
    for (var i = 0; i < showMore.length; i++) {
      showMore[i].addEventListener('click', function(e) {
        e.preventDefault()
        console.log(this.previousSibling.clientHeight)
        console.log(this.previousSibling.scrollHeight)
        
        if (this.previousSibling.style.maxHeight == this.previousSibling.scrollHeight + 'px') {
          console.log('here!')
          this.innerHTML = options.openText
          this.previousSibling.style.maxHeight = '20px'
          return
        }
        if (this.previousSibling.clientHeight < this.previousSibling.scrollHeight) {
          this.innerHTML = options.closeText
          this.previousSibling.style.transition = options.speed + 's'
          this.previousSibling.style.maxHeight = this.previousSibling.scrollHeight + 'px'
          console.log('not here')
        } 
        // else {
        //   console.log('ahah!')
        //   this.innerHTML = moreText[i]
        //   // this.previousSibling.style.maxHeight = '20px'
        // }
          
        
      })
    }

  }

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return ReadMore
}));
