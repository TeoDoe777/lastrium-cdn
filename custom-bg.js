$(document).ready(function() {
  	if (location.href.match(/https?:\/\/(lastrium)(\.com)(\/files\/file\/)([0-9]*-skyrim-se-the-last-dark\/)/)) {
         $('body').addClass('page__skyrim-last-dark')
        $( "<style>body.page__skyrim-last-dark:before {background: url('https://cdn.jsdelivr.net/gh/TeoDoe777/lastrium-cdn@1.0.0.1/lastrium-skyrim-last-dark-bg.png') no-repeat top center;}</style>" ).appendTo( "head" )
        }
});
