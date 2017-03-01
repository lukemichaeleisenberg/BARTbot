module.exports = function(robot) {
 robot.hear(/Current exchange (.*) to (.*)/i, function(msg) {
       var source = msg.match[1];
       var destination = msg.match[2];
       robot.http(`http://apilayer.net/api/live?access_key=04544e85162580c08fa0c53e96664efc`)
       .get()
       (function (err, res, body) {
         console.log("err: " + err);
         if (err !== 'null')
         {
           currencyObject = JSON.parse(body);

           if (currencyObject['quotes'][source + destination] !== undefined) {
             return msg.reply("The exchange from " + source + " to " + destination + " is " + currencyObject['quotes'][source + destination]);
           }
           else {
             return msg.reply("One of the currency types you entered was invalid! Valid currency types are listed at http://apilayer.net/api/list?access_key=04544e85162580c08fa0c53e96664efc&prettyprint=1");
           }
         }
         else {
           return msg.reply("An error was encountered when accessing the API.");
         }
     });
   });

   robot.hear(/Historical exchange (.*) to (.*) on (.*)/i, function(msg) {
         var source = msg.match[1];
         var destination = msg.match[2];
         var  = msg.match[3];

         robot.http(`http://apilayer.net/api/live?access_key=04544e85162580c08fa0c53e96664efc`)
         .get()
         (function (err, res, body) {
           console.log("err: " + err);
           if (err !== 'null')
           {
             currencyObject = JSON.parse(body);

             if (currencyObject['quotes'][source + destination] !== undefined) {
               return msg.reply("The exchange from " + source + " to " + destination + " is " + currencyObject['quotes'][source + destination]);
             }
             else {
               return msg.reply("One of the currency types you entered was invalid! Valid currency types are listed at http://apilayer.net/api/list?access_key=04544e85162580c08fa0c53e96664efc&prettyprint=1");
             }
           }
           else {
             return msg.reply("An error was encountered when accessing the API.");
           }
       });
     });

   robot.hear(/Send me a currency related gif/i, function(msg) {
     return msg.reply("/giphy currency");
   });
};
