import $ from 'jquery';

      /****************************/
      /** Random Quote Generator **/
      /****************************/

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getQuote() {
const quotes = [
  "The best preparation for tomorrow is doing your best today. - H. Jackson Brown, Jr. ",
"Quality is not an act, it is a habit. - Aristotle ",
"The secret of getting ahead is getting started. - Mark Twain ",
"Start where you are. Use what you have. Do what you can. - Arthur Ashe ",
"Be kind whenever possible. It is always possible. - Dalai Lama ",
"We may encounter many defeats but we must not be defeated. - Maya Angelou ",
"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. - Samuel Beckett ",
"What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar ",
"By failing to prepare, you are preparing to fail. - Benjamin Franklin ",
"Practice isn't the thing you do once you're good. It's the thing you do that makes you good. - Malcolm Gladwell ",
"You just can't beat the person who never gives up. - Babe Ruth ",
"A Jedi's training is never complete.",
"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint-Exupery",
"Success is not final, failure is not fatal. - Winston Churchill"
];
return `${rando(quotes)}`;
}

export function getNewQuote() {
  $("#quote-area").html(getQuote);
}

    /******************/
    /** Get the year **/
    /******************/

export function showYear() {
    var d = new Date();
    var n = d.getFullYear();
    return `${n}`;
}

    /******************/
    /** Initialize tooltips
    /******************/

export function regenQuote() {
  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });
}

      /******************/
      /** email address display loop
      /******************/

export function brandSwitch() {


$('.brandswitch').html("Updated Text");

  setTimeout(function(){
  $('.brandswitch').html("hostmonster.com");
  },1000);

  setTimeout(function(){
  $('.brandswitch').html("justhost.com");
  },2000);

  setTimeout(function(){
  $('.brandswitch').html("bluehost.com");
  },3000);

  setInterval(function(){
    setTimeout(function(){
    $('.brandswitch').html("hostmonster.com");
    },1000);

    setTimeout(function(){
    $('.brandswitch').html("justhost.com");
    },2000);

    setTimeout(function(){
    $('.brandswitch').html("bluehost.com");
    },3000);
  },3100);
}
