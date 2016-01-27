//business logic
function Movie(movieTitle, movieTime){
  this.movieTitle = movieTitle;
  this.movieTime = movieTime;
  this.tickets = [];
};
Movie.prototype.fullMovie = function() {
  return this.movieTitle + ": " + this.movieTime;
};
function Ticket(ticketType, price){
  this.ticketType = ticketType;
  this.price = price;
};
Ticket.prototype.fullTicket = function() {
  return this.ticketType + ": " + this.price;
};
// //interface
// $(document).ready(function() {
// });
