document.addEventListener("DOMContentLoaded", sum);

function sum (){
	var typePrice = 0,
	compl = 0,
	mont = 0,
	otkos = 0,
	imgSelected = document.getElementsByClassName('calc_img_select'),
	width = document.getElementById('calc_bot_text').value,
	height = document.getElementById('calc_left_text').value;
	if(document.getElementById('addCom').checked)
		compl = 188*(width/100);
	if(document.getElementById('addMon').checked)
	 	mont = 420*(width/100)*(height/100);
	if(document.getElementById('addOtkos').checked)
	 	otkos = 2*200*(width/100)*(height/100);
	for(var i=0; i<imgSelected.length; i++) {
	 	switch (imgSelected[i].id){
			case "type1":
			typePrice = 2963;
			break;

			case "type2":
			typePrice = 2643;
			break;

			case "type3":
			typePrice = 2805;
			break;
		}
	}
	var sum = (width/100)*(height/100)*typePrice + compl + mont + otkos;
	document.getElementById('price').innerHTML = sum.toFixed(2) + ' ';
}


function delchar(input) {
    var value = input.value;
    var rep = /[-\.;":'/a-zA-Zа-яА-Я ]/;
    if (rep.test(value)) {
        value = value.replace(rep, '');
        input.value = value;
    }
    sum ();
}

function validationInput(val){
	if( val < 40 || val > 280 ){
		val = 130;
		return val;
	}
	sum ();
}

function heightWin(val) {
   document.getElementById('calc_left_text').value = val;
   sum ();
}

function widthWin(val) {
   document.getElementById('calc_bot_text').value = val;
   sum ();
}

function newType(id){
	var imgWind = document.getElementById('img_wind');
	imgWind.src = 'assets/img/' + id + '.png';
	// если уже было выбрано какое-либо изображение то убираем с него рамку
	var imgSelected = document.getElementsByClassName('calc_img_select');
	for(var i=0; i<imgSelected.length; i++) {
	  imgSelected[i].className = 'calc_img_no_select';
	}
	var vertValue = document.getElementById('calc_vertical_line').value;
	var horValue = document.getElementById('calc_horizontal_line').value;
	// рисуем рамку у выбранного элемента
	document.getElementById(id).className = 'calc_img_select';
	// добавляем дефолтную информацию о размерах на картинку
	switch (id){
		case "type1":
		vertValue = 130;
		document.getElementById('calc_vertical_line').value = 130;
		heightWin(vertValue);
		horValue = 140;
		document.getElementById('calc_horizontal_line').value = 140;
		widthWin(horValue);
		break;

		case "type2":
		vertValue = 140;
		document.getElementById('calc_vertical_line').value = 140;
		heightWin(vertValue);
		horValue = 205;
		document.getElementById('calc_horizontal_line').value = 205;
		widthWin(horValue);
		break;

		case "type3":
		vertValue = 200;
		document.getElementById('calc_vertical_line').value = 200;
		heightWin(vertValue);
		horValue = 185;
		document.getElementById('calc_horizontal_line').value = 185;
		widthWin(horValue);
		break;
	}
	sum ();

}

function changRangBot(val){
	val = validationInput(val);
	document.getElementById('calc_bot_text').value = val;
	document.getElementById('calc_horizontal_line').value = val;
	sum ();
}

function changRangLeft(val){
	val = validationInput(val);
	document.getElementById('calc_left_text').value = val;
	document.getElementById('calc_vertical_line').value = val;
	sum ();
}
