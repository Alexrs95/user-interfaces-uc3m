$('table tr').each(function(){
  $(this).find('th').first().addClass('first');
  $(this).find('th').last().addClass('last');
  $(this).find('td').first().addClass('first');
  $(this).find('td').last().addClass('last');
});

$('table tr').first().addClass('row-first');
$('table tr').last().addClass('row-last');

$(function(){

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
              start: moment('2015-12-07').format('YYYY-MM-DD'),
              rendering:'background'
    		},
    		{
    			title: 'Long Event',
              start: moment('2015-12-11').format('YYYY-MM-DD'),
              end: moment('2015-12-13').format('YYYY-MM-DD'),
              rendering:'background'
    		},

    	]
    });
});
