//append image from url and caption to page
// form handling
// define inputs
$(document).ready(function(){
  let $photoList = $('#photo-list');
  let $form = $('form#photo-form');
  let $imageInput = $('#image-input');

  let $captionInput = $('#caption-input');

  $form.submit(function(e){
    e.preventDefault()
    $postContainer = document.createElement('div');
    $postContainer.setAttribute('class','post-container');
    $postImage = document.createElement('img');
    $postImage.setAttribute('class','post-image');
    $postImage.setAttribute('src',$imageInput.val());
    $postCaption = document.createElement('div');
    $postCaption.setAttribute('class','post-caption');
    $postCaptionEntry = document.createElement('span')
    $postCaptionEntry.setAttribute('class','post-caption-entry');
    $postCaptionEntry.innerHTML = $captionInput.val()


    $postCaption.append($postCaptionEntry);
    $postContainer.append($postImage);
    $postContainer.append($postCaption);
    $photoList.append($postContainer);

  })
})
