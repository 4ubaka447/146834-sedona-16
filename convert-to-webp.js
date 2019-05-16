const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(["*.png", "*.jpg"], "images", {
	use: [
		imageminWebp({quality: 75})
	]
}).then(() => {
	console.log('Images optimized');
});
