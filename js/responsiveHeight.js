function setHomeElementSize() {
  var blockHeight = $('#home-image').height();
  var numOfBlocks = $('.what-list').children().length;
  var blockMargin = parseInt( $('.what-block').css('paddingBottom') );
  blockHeight = (blockHeight/numOfBlocks) - (blockMargin*numOfBlocks) + 1;

  $('.what-block').height(blockHeight);
  $('.what-block').css('line-height', blockHeight+'px');
};

function setContactElementSize() {
  var imageHeight = $('#map-image').height();
  blockHeight = imageHeight - parseInt( $('.contact-block').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.contact-block').css('paddingBottom') );

  $('.contact-block').height(blockHeight);
  $('.contact-block').css('line-height', blockHeight+'px');

  $('#map-dupe').height(imageHeight);
};

function setServiceElementSize() {
  var blockHeight = $('#service-image').height();
  blockHeight = blockHeight - parseInt( $('.service-caption').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.service-caption').css('paddingBottom') );

  var blockWidth = $('#service-image').width();
  blockWidth = blockWidth - parseInt( $('.service-caption').css('paddingLeft') );
  blockWidth = blockWidth - parseInt( $('.service-caption').css('paddingRight') );

  $('.service-caption').height(blockHeight);
  $('.service-caption').css('line-height', blockHeight+'px');
  $('.service-caption').width(blockWidth);
};

function setProjectElementSize() {
  var blockHeight = $('#project-image').height();
  blockHeight = blockHeight - parseInt( $('.project-caption').css('paddingTop') );
  blockHeight = blockHeight - parseInt( $('.project-caption').css('paddingBottom') );

  var blockWidth = $('#project-image').width();
  blockWidth = blockWidth - parseInt( $('.project-caption').css('paddingLeft') );
  blockWidth = blockWidth - parseInt( $('.project-caption').css('paddingRight') );

  $('.project-caption').height(blockHeight);
  $('.project-caption').css('line-height', blockHeight+'px');
  $('.project-caption').width(blockWidth);
};

$(window).load(function() {
  setHomeElementSize();
  setContactElementSize();
  setServiceElementSize();
  setProjectElementSize();
});

$(window).resize(function() {
  setHomeElementSize();
  setContactElementSize();
  setServiceElementSize();
  setProjectElementSize();
});
