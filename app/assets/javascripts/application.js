// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

// Agency theme javascript files
//= require ./theme/jquery.easing.min.js
//= require ./theme/cbpAnimatedHeader.js
//= require ./theme/jqBootstrapValidation.js
//= require ./theme/agency.js

// Load all Bootstrap JavaScript
//= require bootstrap-sprockets
//= require moment
//= require bootstrap-datetimepicker

//= require ./home.js.coffee


$(function() {
  $(document).ajaxSuccess(function(event, xhr, status, data) {
    var rect = $("rect").find("[data-id='" + data.id + "']");
    console.log(data);
    console.log(rect);
    

    rect.attr("fill",data.range_color);
    rect.attr("data-score",data.score);
  })

  $("rect").click(function() {

    console.log(this);

    $("select").val(this.attr("data-id"));

  })


});
