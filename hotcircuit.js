var ctx = c.getContext("2d");
var theta = 0, 
	x1 = 50, x2 = 100, 
	y1 = 50, y2 = 100;
setInterval(function() {
	// clear all
	ctx.clearRect(0, 0, c.width, c.height);

	// rotate line
	var cx = (x1 + x2) / 2
	var cy = (y1 + y2) / 2

	var rad = theta * Math.PI / 180;
	
	var cosang = Math.cos(rad),
		sinang = Math.sin(rad);

	var tx1 = x1-cx, 
		ty1 = y1-cy;

	var p1x = ( tx1*cosang + ty1*sinang) + cx;
	var p1y = (-tx1*sinang + ty1*cosang) + cy;

	var tx2 = x2-cx, 
		ty2 = y2-cy;

	var p2x = ( tx2*cosang + ty2*sinang) + cx;
	var p2y = (-tx2*sinang + ty2*cosang) + cy;

	// draw line
	ctx.beginPath();
	ctx.moveTo(p1x, p1y);
	ctx.lineTo(p2x, p2y);
	ctx.stroke();

	theta += 5;

}, 20);

document.body.onkeydown = function(e) {
	var code = e.which;
	if(code == 38) { y2 -= 8; y1 -= 8 };
	if(code == 39) { x2 += 8; x1 += 8 };
	if(code == 40) { y2 += 8; y1 += 8 };
	if(code == 37) { x2 -= 8; x1 -= 8 };

	console.log( [ x1, y1 ], [ x2, y2 ] );
};