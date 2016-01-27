describe('template', function() {
  it("creates a new movie with given properties", function() {
    var testMovie = new Movie("Raiders of the Lost Ark", "1:00 PM");
    expect(testMovie.movieTitle).to.equal("Raiders of the Lost Ark");
    expect(testMovie.movieTime).to.equal("1:00 PM");
    expect(testMovie.tickets).to.eql([]);
  });
  it("adds the fullMovie method to all movies", function() {
    var testMovie = new Movie("Raiders of the Lost Ark", "1:00 PM");
    expect(testMovie.fullMovie()).to.equal("Raiders of the Lost Ark: 1:00 PM");
  });
  it("creates a new ticket with given properties", function() {
    var testTicket = new Ticket("Senior", "$10.00");
    expect(testTicket.ticketType).to.equal("Senior");
    expect(testTicket.price).to.equal("$10.00");
  });
  it("adds the fullTicket method to all tickets", function() {
    var testTicket = new Ticket("Senior", "$10.00");
    expect(testTicket.fullTicket()).to.equal("Senior: $10.00");
  });
});
