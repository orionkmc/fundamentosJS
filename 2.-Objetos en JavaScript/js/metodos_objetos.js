const p1 = {
    x: 0,
    y: 4,
    moverEnx(x) { this.x += x; },
    moverEny(y) { this.y += y; }
}

const p2 = {
    x: 3,
    y: 0,
    moverEnx(x) { this.x += x; },
    moverEny(y) { this.y += y; }
}

function distancia (p1, p2){
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;

    return Math.sqrt(x * x + y * y)
}

console.log(distancia(p1, p2));