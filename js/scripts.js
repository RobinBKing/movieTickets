//business logic
function Movie(movieTitle, movieTime){
  this.movieTitle = movieTitle;
  this.movieTime = movieTime;
  this.tickets = [];
};
Movie.prototype.fullMovie = function() {
  return this.movieTitle + ": " + this.movieTime;
};
function Ticket(ticketType){
  this.ticketType = ticketType;
};
Ticket.prototype.ticketPrice = function() {
  if(this.ticketType = "Senior"){
    return "$10.00";
  } else if(this.ticketType = "Adult"){
    return "$15.00";
  } else if(this.ticketType = "Youth"){
    return "$12.00";
  } else {
    return "$0.00";
  };
};
Ticket.prototype.fullTicket = function() {
  return this.ticketType + ": " + this.ticketPrice();
};




// //interface
$(document).ready(function() {
  $("#addTicket").click(function() {
    $("#newTickets").append('<div class="newTicket">' +
                               '<div class="form-group">' +
                                 '<label for="newTicketType">Ticket Type</label>' +                                    '<input id="newTicketType" type="text" + class="form-control">' +
                               '</div>' +
                             '</div>');
  });

  $("form#newContact").submit(function(event) {
    event.preventDefault();
    var inputMovieTitle = $("input#newMovieTitle").val();
    var inputMovieTime = $("input#newMovieTime").val();
    var newMovie = new Movie(inputMovieTitle, inputMovieTime);

    $(".newTicket").each(function () {
      var inputTicketType = $("input#newTicketType").val();
    })

  });
});
