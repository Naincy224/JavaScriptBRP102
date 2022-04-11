
//check whether 125 is  palindrome or not: 

function Palindrome()
	{
		var reminder; 
        var tempNum; 
        var originalNum = 0;
        var number = 125;
		
		tempNum = number;
		while(number>0)
		{
			reminder = number%10;
			number = parseInt(number/10);
			originalNum = originalNum*10+reminder;
		}
		if(originalNum==tempNum)
		{
			console.log("The number is Palindrome");
		}
		else
		{
			console.log("The number is not palindrome");
		}
	}
    Palindrome();

