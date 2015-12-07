$(function(){

        $("nav").sticky({topSpacing:0});
        $('.flexslider').flexslider({
            animation: "slide",
            keyboard: true
        });
        var states = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.whitespace,
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: [
            'Grades',
            'Virtual Office',
            'Timetable',
            'Exams',
            'International',
            'Erasmus',
            'MNE',
            'Library',
            'Directory',
            'Virtual Office',
            'Contact',
            'Calendar',
            'Public Zone'
          ]
        });

        states.initialize();
        $('.search').typeahead({
          highlight: true
        },
        {
          source: states
        });

    $('#calendar').fullCalendar({
    	header: {
    			right: 'prev,next'
    	},
    	defaultDate: '2015-12-12',
    	eventLimit: true,
        theme: true,
        titleFormat: 'MMM YYYY',
        firstDay: 1,
        dayNamesShort:['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        fixedWeekCount: false, // allow "more" link when too many events
    	events: [
    		{
    			title: 'All Day Event',
              start: moment('2015-12-30').format('YYYY-MM-DD'),
              rendering:'background'
    		},
    		{
    			title: 'Long Event',
              start: moment('2015-12-14').format('YYYY-MM-DD'),
              end: moment('2015-12-19').format('YYYY-MM-DD'),
              rendering:'background'
    		},

    	]
    });
});
