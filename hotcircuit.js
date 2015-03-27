var c = C.getContext("2d"),
	d = 0,
	x = 50, X = 100,
	y = 50, Y = 100;

var id = setInterval(() => {
	var M = Math,
		cx = (x + X) / 2,
		cy = (y + Y) / 2,
		rad = d * M.PI / 180,
		cosang = M.cos(rad),
		sinang = M.sin(rad),
		tx1 = x - cx,
		ty1 = y - cy,
		tx2 = X - cx,
		ty2 = Y - cy;

	with(c) {
		// clear all
		c.clearRect(0, 0, C.width, C.height);

		var x1 = ( tx1 * cosang + ty1 * sinang) + cx;
		var y1 = (-tx1 * sinang + ty1 * cosang) + cy;
		var x2 = ( tx2 * cosang + ty2 * sinang) + cx;
		var y2 = (-tx2 * sinang + ty2 * cosang) + cy;

		// draw line
		c.strokeStyle = '#000000';
		c.beginPath();
		c.moveTo(x1, y1);
		c.lineTo(x2, y2);
		c.stroke();
		c.closePath();

		// draw sample world
		c.strokeStyle = '#ff0000';
		c.beginPath();
		c.moveTo(1, 1);
		c.lineTo(150, 1);
		c.lineTo(150, 150);
		c.stroke();
		c.closePath();

		var imgData1 = c.getImageData(x1, y1, x1, y1).data;
		var imgData2 = c.getImageData(x2, y2, x2, y2).data;
		if(imgData1[0] || imgData2[0]) {
			clearInterval(id);
		}

	}

	d++

}, 16.7);

document.body.onkeydown = (e) => {
	var code = e.which;
	if(code == 38) { Y -= 8; y -= 8 }
	if(code == 39) { X += 8; x += 8 }
	if(code == 40) { Y += 8; y += 8 }
	if(code == 37) { X -= 8; x -= 8 }

	//console.log( [ x, y ], [ X, Y ] );
};