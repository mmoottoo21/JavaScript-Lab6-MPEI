function Two_Event() {
    var Two = document.getElementById('Two');
    Two.style.fontSize != '48px' ? (Two.style.fontSize = '48px', Two.style.color = '#464646', Two.style.textShadow = '#00e7ff 1px 1px 10px') : (Two.style.fontSize = '', Two.style.color = '', Two.style.textShadow = '');
}

function Three_Event() {
    var Three = document.getElementById('Three');
    Three.style.textShadow = '#FFFF00 1px 1px 10px';
    Three.onmousedown = function () {
        Three.style.textShadow = 'green 1px 1px 10px';
    }
    Three.onmouseup = function () {
        Three.style.textShadow = '#FFFF00 1px 1px 10px';
    }
    Three.onmouseout = function () {
        Three.style.textShadow = '';
    }
}

function Four_Event() {
    var Four = document.getElementById('Four');
    Four.style.textShadow = 'red 1px 1px 10px';
    Four.onmouseout = function () {
        Four.style.textShadow = 'blue 1px 1px 10px';
    }
}

