console.log('hello');

const canvasElement = document.getElementById('canvas');
const canvasCtx = canvasElement.getContext('2d');

canvasCtx.fillRect(0, 0, 100, 100);
canvasCtx.clearRect(0, 0, canvasElement.clientWidth, canvasElement.height);

canvasCtx.fillRect(0, 0, 100, 100);