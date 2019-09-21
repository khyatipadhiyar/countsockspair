function count_Char()
{
		var fullString=document.getElementById('charstring').value;
		var uniquevar =uniqueCharacter(fullString);

		var full_msg = "";

		for(var i=0;i<uniquevar.length;i++)
		{
			var result=count_occur(fullString,uniquevar[i]);
			var msg2=Math.floor(result/2);
			var msg ="Your socks colour  "+uniquevar[i]+" occurs "+result+" times and "+msg2+" pairs<br>";
			full_msg = full_msg + msg;
			
		}
		document.getElementById('demo').innerHTML=full_msg;
}

function count_occur(strOne,s_char)
{
	var str=strOne;
	var count=0;
	for(var i=0;i<str.length;i++)
	{
		if(str[i]==s_char)
		{
			count=count+1;
		}
	}
	return count;
}

function uniqueCharacter(str1)
{
	var str=str1;
	var unique=[];

	for (var i = 0; i<str.length; i++)
	{
		if(unique.indexOf(str[i])==-1)
		{
			unique.push(str[i]);

		}
	} 
	return unique;
}