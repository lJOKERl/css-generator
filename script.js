window.onload = function () {
	"use strict";

	var r1 = document.querySelector("#r1"),
		r2 = document.querySelector("#r2"),
		r3 = document.querySelector("#r3"),
		box = document.querySelector(".box"),
		top = document.querySelector("#top"),
		hor = document.querySelector("#hor"),
		left = document.querySelector("#left"),
		vert = document.querySelector("#vert"),
		chk1 = document.querySelector("#chk1"),
		chk2 = document.querySelector("#chk2"),
		bold = document.querySelector("#bold"),
		right = document.querySelector("#right"),
		color = document.querySelector("#color"),
		reset = document.querySelector(".reset"),
		menu = document.querySelectorAll(".menu"),
		bottom = document.querySelector("#bottom"),
		result = document.querySelector(".result"),
		add_opt = document.querySelector(".add_opt"),
		some_text = document.querySelector("#some_text"),
		font_size = document.querySelector("#font_size"),
		text_align = document.querySelector("#text_align"),
		text_color = document.querySelector("#text_color"),
		padding_opt = document.querySelector("#padding_opt"),
		first_color = document.querySelector("#first_color"),
		menu_title = document.querySelectorAll(".menu_title"),
		second_color = document.querySelector("#second_color"),
		border_color = document.querySelector("#border_color");

	//Поле ввода текста
	some_text.oninput = function () {
		box.textContent = this.value;
	}

	bold.onchange = function () {
		if (this.checked) {
			box.style.fontWeight = "bold";
		} else {
			box.style.fontWeight = "normal";
		}
	}

	italic.onchange = function () {
		if (this.checked) {
			box.style.fontStyle = "italic";
		} else {
			box.style.fontStyle = "normal";
		}
	}

	underline.onchange = function () {
		if (this.checked) {
			box.style.textDecoration = "underline";
		} else {
			box.style.textDecoration = "none";
		}
	}

	//Изменить border-radius
	r1.oninput = function getBorderRadius () {
		box.style.borderRadius = this.value + "%";
	}

	//Добавить background
	color.onchange = function () {
		box.style.background = this.value;
	}

	//Добавить градиент
	chk2.onclick = function () {
		var label = document.querySelector("#lab_text"),
			options = document.querySelector('#grad_options'),
			bg = "linear-gradient(to right, " + first_color.value + " 0%, " + second_color.value + " 100%)";
			
			this.nextSibling.nodeValue = (this.checked)? " Убрать градиент": " Добавить градиент";
			(this.checked) ? options.style.display = "block" : options.style.display = "none";
			if (this.checked) {
				box.style.background = bg;
			} else {
				box.style.background = "#000";
			}
	}

	first_color.onchange = function () {
		var bg = "linear-gradient(to right, " + this.value + " 0%, " + second_color.value + " 100%)";
		box.style.background = bg;
	}

	second_color.onchange = function () {
		var bg = "linear-gradient(to right, " + first_color.value + " 0%, " + this.value + " 100%)";
		box.style.background = bg;
	}

	vert.onclick = function () {
		var bg = "linear-gradient(to bottom, " + first_color.value + " 0%, " + second_color.value + " 100%)";
		box.style.background = bg;
	}

	hor.onclick = function () {
		var bg = "linear-gradient(to right, " + first_color.value + " 0%, " + second_color.value + " 100%)";
		box.style.background = bg;
	}

	//Цвет текста
	text_color.onchange = function () {
		box.style.color = this.value;
	}

	// Добавить border
	chk1.onclick = function () {
		var r = document.querySelector("#r2"),
			label = document.querySelector("#lab_text"),
			options = document.querySelector('#border_options');

		this.nextSibling.nodeValue = (this.checked) ? " Убрать рамку" : " Добавить рамку";

		if (chk1.checked) {
			box.style.border = "1px solid #ccc";
			options.style.display = "block";
			border_color.value = "#ffffff";
			r.value = 1;

		} else {
			box.style.border = "none";
			options.style.display = "none";
		}
	}

	r2.oninput = function () {
		if (chk1.checked) {box.style.border = this.value + "px" + " solid" + border_color.value;}
	}

	//Padding
	r3.oninput = function () {
		box.style.padding = this.value + "px";
	}

	top.oninput = function () {
		box.style.paddingTop = this.value + "px";
	}

	left.oninput = function () {
		box.style.paddingLeft = this.value + "px";
	}

	right.oninput = function () {
		box.style.paddingRight = this.value + "px";
	}

	bottom.oninput = function () {
		box.style.paddingBottom = this.value + "px";
	}

	add_opt.onclick = function () {
		if (padding_opt.style.display == 'none') {
			r3.value = 0;
			box.style.padding = 0;
			r3.style.display = 'none';
			this.style.background = "#111";
			padding_opt.style.display = 'block';
		} else {
			box.style.padding = 0;
			r3.style.display = 'block';
			this.style.background = "none";
			padding_opt.style.display = 'none';
			top.value = 0;
			left.value = 0;
			right.value = 0;
			bottom.value = 0;

		}
	}

	//Цвет рамки
	border_color.onchange = function () {
		box.style.borderColor = border_color.value;
	}

	//Выравнивание текста
	text_align.onchange = function () {
		var i = text_align.selectedIndex,
			item = document.querySelector("#text_align").options,
			res = item[i].text;

		box.style.textAlign = res;
	}

	//Выравнивание текста
	font_size.onchange = function () {
		var i = font_size.selectedIndex,
			item = document.querySelector("#font_size").options,
			res = item[i].text;

		box.style.fontSize = res;
	}

	//Меню 
	for (var i = 0; i < menu_title.length; i++) {
		menu_title[i].onclick = function () {
			var marker = this.querySelector(".marker");

			if (this.nextSibling.nextSibling.style.display == "none") {
				this.nextSibling.nextSibling.style.display = "block";
				this.classList.add("black");
				marker.textContent = "-";
			} else {
				this.nextSibling.nextSibling.style.display = "none";
				this.classList.remove("black");
				marker.textContent = "+";
			}
		}
	}

	//Сброс настроек по умолчанию
	reset.onclick = function () {
		box.style.borderRadius = 0;
		r1.value = 0;
		r3.value = 0;
		top.value = 0;
		left.value = 0;
		right.value = 0;
		bottom.value = 0;
		color.value = "#000000";
		first_color.value = "#ffffff";
		second_color.value = "#000000";
		text_color.value = "#dddddd";
		border_color.value = "#ffffff";
		box.style.background = "#000000";
		box.style.border = "none";
		box.style.padding = 0;
		box.style.textAlign = "left";
		box.style.color = 'inherit';
		box.style.fontSize = "inherit";
		box.style.fontStyle = "inherit";
		box.style.fontWeight = "inherit";
		box.style.textDecoration = "none";
		bold.checked = false;
		italic.checked = false;
		underline.checked = false;
		box.textContent = "Some text";
		some_text.value = "";
		

		var marker = document.querySelectorAll(".marker");

		for (var i = 0; i < marker.length; i++) {
			marker[i].textContent = "+";
		}

		for (var i = 0; i < menu.length; i++) {
			menu[i].style.display = 'none';
		}

		if (chk1.checked) {
			chk1.checked = false;
			border_options.style.display = "none";
			chk1.nextSibling.nodeValue = " Добавить рамку";
		}

		if (chk2.checked) {
			chk2.checked = false;
			grad_options.style.display = "none";
			chk2.nextSibling.nodeValue = " Добавить градиент";
		}
	}
}
