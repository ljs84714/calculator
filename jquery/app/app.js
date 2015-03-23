 $(function(){

	var curtext =' ';
	var temp =0;
	var temp1=0;
	var temp2=0;
	var temp3=0;
	var situation=0;
	$('#btn1').on('click',function(){
		curtext=curtext+'1';
		render();
		temp=temp*10+1;
		//alert(temp);

	})
	$('#btn2').on('click',function(){
		curtext=curtext+'2';
		render();
		temp=temp*10+2;
		//alert(temp);
	})
	$('#btn3').on('click',function(){
		curtext=curtext+'3';
		render();
		temp=temp*10+3;
		//alert(temp);
	})
	$('#btn4').on('click',function(){
		curtext=curtext+'4';
		render();
		temp=temp*10+4;
		//alert(temp);
	})
	$('#btn5').on('click',function(){
		curtext=curtext+'5';
		render();
		temp=temp*10+5;
		//alert(temp);
	})
	$('#btn6').on('click',function(){
		curtext=curtext+'6';
		render();
		temp=temp*10+6;
		//alert(temp);
	})
	$('#btn7').on('click',function(){
		curtext=curtext+'7';
		render();
		temp=temp*10+7;
		//alert(temp);
	})
	$('#btn8').on('click',function(){
		curtext=curtext+'8';
		render();
		temp=temp*10+8;
		//alert(temp);
	})
	$('#btn9').on('click',function(){
		curtext=curtext+'9';
		render();
		temp=temp*10+9;
		//alert(temp);
	})
	$('#btn0').on('click',function(){
		curtext=curtext+'0';
		render();
		temp=temp*10+0;
		//alert(temp);
	})
	$('#btndivision').on('click',function(){
		Controller();
		situation=1;
	})
	$('#btnmultiply').on('click',function(){
		Controller();
		situation=2;
	})
	$('#btnminus').on('click',function(){
		Controller();
		situation=3;
	})
	$('#btnplus').on('click',function(){
		Controller();
		situation=4;
	})
	$('#btnequal').on('click',function(){
		anothertemp();
		Evaluate();
		curtext=temp3;
		render();
	})

	$('#btnc').on('click',function(){
		curtext =' ';
		render();
		temp =0;
		//alert(temp);
		temp1=0;
		//alert(temp1);
		temp2=0;
		//alert(temp2);
		temp3=0;
		//alert(temp3);
		situation=0;
		//alert(situation);
	})

	function Controller(){
		temp1=temp;
		//alert(temp1);
		temp=0;
		//alert(temp);
		curtext=' ';
		render();
	}

	function Evaluate(){
		//alert(situation);
		if(situation==1){
			temp3=parseInt(temp1,10)/parseInt(temp2,10);
			//alert(temp3);
		}
		if(situation==2){
			temp3=parseInt(temp1,10)*parseInt(temp2,10);
			//alert(temp3);
		}
		if(situation==3){
			temp3=parseInt(temp1,10)-parseInt(temp2,10);
			//alert(temp3);
		}
		if(situation==4){
			temp3=parseInt(temp1,10)+parseInt(temp2,10);
			//alert(temp3);
		}
	}

	function anothertemp(){
		temp2=temp;
		temp=0;
		curtext=' ';
		render();
		//alert(temp2);
		//alert(temp);
	}
	function render(){
		$('#screen').text(curtext);
	}

	})