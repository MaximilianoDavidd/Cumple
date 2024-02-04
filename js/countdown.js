simplyCountdown('#cuenta', {
    year: 2024, // required
    month: 2, // required
    day: 4, // required
    hours: 13, // Default is 0 [0-23] integer
    minutes:2, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'Día', plural: 'Días' },
        hours: { singular: 'h', plural: 'hs' },
        minutes: { singular: 'min', plural: 'min' },
        seconds: { singular: 's', plural: 's' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false, //Use UTC or not - default : false
    onEnd: function() { 
        Swal.fire({
            title: "Es hoy!",
            width: 300,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("../recursos/giphy.gif")
              left top
              no-repeat
            `
          });
        return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});