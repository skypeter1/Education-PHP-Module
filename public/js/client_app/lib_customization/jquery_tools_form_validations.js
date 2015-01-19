$.tools.validator.fn("[class=cedula]", "",  function(el, value) {

  return Validator.cedula(value);

});

$.tools.validator.fn("[class=integer]", "",  function(el, value) {

  return Validator.integer(value);

});

$.tools.validator.fn("[class=float]", "",  function(el, value) {

  return Validator.floats(value);

});

$.tools.validator.fn("[class=retype_password]", "",  function(el, value) {

  var password_input = el.parents("form").find("input.password");

  return Validator.same_values(value, password_input.val());

});

$.tools.validator.fn("[class*=timespan_end]", "", function(el, value){

  var start_date_input = el.parents("form").find("input.timespan_start");
  var start_date = new XDate("11/07/2011-"+start_date_input.val()).getTimestamp();
  var end_date = new XDate("11/07/2011-"+value).getTimestamp();

  return (end_date > start_date);

})

$.tools.validator.fn("[class*=date_end]", "", function(el, value){

  var start_date_input = el.parents("form").find("input.date_start");
  var start_date = new XDate(start_date_input.val()).getTimestamp();
  var end_date = new XDate(value).getTimestamp();

  return (end_date >= start_date);

})
