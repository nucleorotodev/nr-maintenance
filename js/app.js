$(document).foundation();

$(document).ready(function () {

	var t = 1000

	setTimeout(function (){//quieto

		var i = 0

		setInterval(function() {//cambia palabras

			if (! i == 3) {
				i = 0
				t = t - i
			} else {
				i++
				setTimeout(function() {
					texto_init()
				},250)
				t = t - i
			}
		},t)

	},t)

});

function texto_init() {

	// e++
	// console.log(e)
	var titulo = $('h2').text()

	var a = titulo.split(" ")

	shuffle(a)

	var b = a.join(" ")

	$('h2').html(b)

}

function shuffle (array) {
	var i = 0, j = 0, temp = null

	for (i = array.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1))
		temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
}
