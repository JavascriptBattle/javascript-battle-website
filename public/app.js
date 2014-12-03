var app = {};

app.game = new Game();
app.gameView = new GameView({ model: app.game });
$('.gamegrid-content').append(app.gameView.$el);

app.user = new User();
app.userView = new UserView({ model: app.user });
$('#join').append(app.userView.$el);

app.navbarView = new NavbarView({ model: app.user });
$('.navbar').append(app.navbarView.$el);

app.rulesView = new RulesView({ model: app.user });
$('#rules').append(app.rulesView.$el);

app.leaderboard = new Leaderboard();
app.leaderboardView = new LeaderboardView({ model: app.leaderboard });
$('#leaderboard div.container').append(app.leaderboardView.$el);

$(function () {
  isLoaded();
  var loadingInterval;
  function isLoaded () {
    if (!$('.battle-tile').length && !$('.leaderboard-table').children().length) {
      $('.gamegrid-content, .game-tips').hide();
      if (!$('.spinner').length) {
        $('#replay').css('min-height', '500px').append('<img class="spinner" src="https://s3.amazonaws.com/jharclerode/350+(2).GIF">');
      }
      console.log('loading');
      loadingInterval = setTimeout(isLoaded,1000);
    }
    else {
      $('.gamegrid-content, .game-tips').show();
      $('#replay').css('min-height', '1094px');
      $('.spinner').remove();
    }
  }
});