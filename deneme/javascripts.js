						  |							|							|
		VARIABLES		  |			DATA TYPES		|		NESTED RULES		|
						  |							|							|
						  |							|							|
$height:200px;			  |	$height: 100+58;		|	examples{				|
						  |							|		log{				|
examples log{             |	$font-type:"Arial";		|			height:$height; |
height:$height;     	  |							|			}				|
}						  |	$isaratli: true;		|		table{				|
examples table{			  |							|			height:$height; |
height:$height;		  	  |			.				|			}				|
}						  |			.				|		tr{					|
examples tr{			  |			.				|			height:$height; |
height:$height;		 	  |			.				|			}				|
}						  |			.				|		img{				|
examples img{			  |			.				|			height:$height; |
height:$height;		 	  |							|			}				|
}						  |							|							|
---------------------------------------------------------------------------------
.topnav a {
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}

textarea{
resize: none;
width:250px;
}

.button_1{
	background-color:#71c3fa;
	-moz-border-radius:10px;
	-webkit-border-radius:10px;
	border-radius:10px;
	border:1px solid #37acfa;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:10px;
	padding:12px 22px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;,
}

