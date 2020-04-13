$(document).ready(function() {
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url
    function getFarenheitTemp(temp){
      return (9*temp/5)+32;
    }

    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop

    var state_obj = Object.keys(state_info)//['CO']
    for  (var key in state_obj){
      var tempState = state_info[state_obj[key]]
      var url =`https://api.weatherstack.com/forecast?access_key=${apiKey}&query=${tempState.lat},${tempState.lng}`;
      $.ajax(
      {
         type: 'GET',
         url: url,
         async: false,
         success: function(data)
         {
         console.log(state_obj[key])

                    // TODO
                    // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9. Remember to convert it into farenheit.
                 var temperature = getFarenheitTemp(data.current.temperature)
                 console.log(temperature)

                 if(temperature < 10)
                         $('#' + state_obj[key]).css('fill', "#6495ED");
    
                 if(temperature > 10 && temperature < 21)
                         $('#' + state_obj[key]).css('fill', "#7FFFD4");

                 if(temperature > 20 && temperature < 31)
                         $('#' + state_obj[key]).css('fill', "#0000FF");

                 if(temperature > 30 && temperature < 41)
                         $('#' + state_obj[key]).css('fill', "#008B8B");

                 if(temperature > 40 && temperature < 51)
                         $('#' + state_obj[key]).css('fill', "#00BFFF");

                 if(temperature > 50 && temperature < 61)
                         $('#' + state_obj[key]).css('fill', "#F08080");

                 if(temperature > 60 && temperature < 71)
                         $('#' + state_obj[key]).css('fill', "#CD5C5C");

                 if(temperature > 70 && temperature < 81)
                         $('#' + state_obj[key]).css('fill', "#8B0000");

                 if(temperature > 80 && temperature < 91)
                         $('#' + state_obj[key]).css('fill', "#B22222");

                 if(temperature > 90)
                         $('#' + state_obj[key]).css('fill', "#FF0000");

    // //             //TODO
    // //             // Default color gray
    // //             // Create a series of if else blocks to set the color for the state based on the temperature
    // //             // Less than equal to 10F	#6495ED
    // //             // Between 11F and 20F	#7FFFD4
    // //             // Between 21F and 30F	#0000FF
    // //             // Between 31F and 40F	#008B8B
    // //             // Between 41F and 50F	#00BFFF
    // //             // Between 51F and 60F	#F08080
    // //             // Between 61F and 70F	#CD5C5C
    // //             // Between 71F and equal to 80F	#8B0000
    // //             // Between 81F and equal to 90F	#B22222
    // //             // Greater than 90F	#FF0000
      }
  });

  }
});
