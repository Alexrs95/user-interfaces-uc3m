$(document).ready(function(){

    $("nav").sticky({topSpacing:0});


  $('#calendar').fullCalendar({
    header: {
        right: 'prev, next'
    },

    columnFormat: {
                month: 'ddd'
    },

    prev: 'circle-triangle-w',
    next: 'circle-triangle-e',
    titleFormat: 'MMM YY',
    defaultDate: '2015-12-5',
    eventLimit: true,
    weekends: true,
    firstDay: 1,
    theme: false,
    dayNamesShort:['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    fixedWeekCount: false,

    Object, default:
    {
        prev: 'right-single-arrow',
        next: 'right-single-arrow',
        prevYear: 'left-double-arrow',
        nextYear: 'right-double-arrow'
    },

    events: [
      {
        title: 'Long Event',
        start: '2015-12-07',
        end: '2015-12-09',
        rendering: 'background'
      },
      {
        title: 'Dinner',
        start: '2015-12-11',
        end: '2015-12-11',
        rendering: 'background'
      }
    ]
  });

        var states = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.whitespace,
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
          ]
        });
        states.initialize();
        $('.search').typeahead({
          highlight: true
        },
        {
          source: states
<<<<<<< HEAD
        });


});


$(document).ready(function() {

	$('#calendar').fullCalendar({
        theme: true,
		header: {
    			right: 'prev,next'
		},
		defaultDate: '2015-12-12',
		eventLimit: true,
        titleFormat: 'MMM YYYY',
        firstDay: 1,
        dayNamesShort:['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        fixedWeekCount: false, // allow "more" link when too many events
		events: [
			{
				title: 'All Day Event',
                start: moment('2015-12-07').format('YYYY-MM-DD'),
                rendering:'background'
			},
			{
				title: 'Long Event',
                start: moment('2015-12-11').format('YYYY-MM-DD'),
                end: moment('2015-12-13').format('YYYY-MM-DD'),
                rendering:'background'
			},

		],
	});

});
=======
    });
});
>>>>>>> 27afc83a7176ee41a81dc0baa13ac4ca88d6433d
