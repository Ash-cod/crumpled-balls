class Paper {
	constructor(x, y, r) {
		var options = {
			isStatic: true
		}
		this.x = x;
		this.y = y;
		this.r=r;
        this.body = Bodies.circle(x, y, r, options);
        this.image=loadImage("paper.png");
		World.add(world, this.body);

	}
	display() {

		var pos = this.body.position;

		push();
		translate(pos.x, pos.y);
		rectMode(CENTER)
		fill(255, 0, 255)
		imageMode(CENTER);
		image(this.image, 0, 0, this.r, this.r);
		pop();

	}

}