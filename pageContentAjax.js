$.getJSON( "https://dylan.demo.socrata.com/resource/crbu-hf4t.json", function( data ) {
	console.log(data);
	$.each(data, function(index, element) {
        $('#wraper').append($('<div>', {
            text: element.text,
            class: element.container
        }));
    });
});
