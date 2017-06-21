 var text = 'How are you today?';

        //text is split up to letters
        $.each(text.split(''), function(i, letter){

            //we add 100*i ms delay to each letter 
            setTimeout(function(){

                //we add the letter to the container
                $('#container').html($('#container').html() + letter);
            
            }, 100*i);
        });


