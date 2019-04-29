class gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.multiply = 0;
        this.index = index;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1]


        ];
    }

    chooseCell(c) {
        this.getNewCoordinates();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move() {

        var newCell = random(this.chooseCell(0));
        var em1 = random(this.chooseCell(1));
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0


            this.x = newCell[0];
            this.y = newCell[1];
            this.energy--;
        }
        else if (!newCell && em1) {
            var newX = em1[0]
            var newY = em1[1]

            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = em1[0];
            this.y = em1[1];
            this.energy--;

            for (var e = 0; e < grassArr.length; e++) {
                if (grassArr[e].x == em1[0] && grassArr[e].y == em1[1]) {
                    grassArr.splice(e, 1);
                    break;
                }
            }

        }
    }

    eat() {

        this.multiply++;
        var newCell = random(this.chooseCell(2));
        var secondCell = random(this.chooseCell(4));

        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 3;
            matrix[this.y][this.x] = 0;

            for (var e = 0; e < grassEaterArr.length; e++) {
                if (grassEaterArr[e].x == newCell[0] && grassEaterArr[e].y == newCell[1]) {
                    grassEaterArr.splice(e, 1);
                    break;
                }
            }
            this.x = newCell[0];
            this.y = newCell[1];

            this.multiply = 0;
            this.energy++;

        }
        else if (secondCell) {
            matrix[secondCell[1]][secondCell[0]] = 3;
            matrix[this.y][this.x] = 0;

            for (var e = 0; e < horseArr.length; e++) {
                if (horseArr[e].x == secondCell[0] && horseArr[e].y == secondCell[1]) {
                    horseArr.splice(e, 1);
                    break;
                }
            }
            this.x = secondCell[0];
            this.y = secondCell[1];

            this.multiply = 0;
            this.energy++;


        }
        else {
            this.move();

        }
        if (this.energy >= 6) {
            this.mul()
            this.energy = 0;
        }
        else if (this.energy <= -10) {
            this.die();

        }


    }
    mul() {
        var newCell = random(this.chooseCell(0));


        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 3;
            var newgishatich = new gishatich(newCell[0], newCell[1], this.index);
            gishatichArr.push(newgishatich);

        }


    }
    die() {

        for (var c in gishatichArr) {
            if (gishatichArr[c].x == this.x && gishatichArr[c].y == this.y) {
                matrix[this.y][this.x] = 0;
                gishatichArr.splice(c, 1);

                break;
            }
        }
    }
}