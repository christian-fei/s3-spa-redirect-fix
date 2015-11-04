module.exports = function S3SPARedirectFix(title){
  if( !shouldChangeRoute() ){
    return
  }
  if( typeof(window.history.pushState) == 'function' ){
    window.history.pushState(null, title || '', window.location.hash.substring(2))
  } else {
    window.location.hash = window.location.hash.substring(2)
  }

  function shouldChangeRoute(){
    return window.location.hash !== ''
  }

  /*
  REFERENCE:
    http://stackoverflow.com/questions/16267339/s3-static-website-hosting-route-all-paths-to-index-html
  */
}
