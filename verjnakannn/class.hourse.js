class horse {
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
            [this.x + 1, this.y + 1]
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

        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 4;
            matrix[this.y][this.x] = 0;


            this.x = newCell[0];
            this.y = newCell[1];
            this.energy--;
        }
    }

    eat() {

        this.multiply++;
        var newCell = random(this.chooseCell(1));

        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 4;
            matrix[this.y][this.x] = 0;

            for (var e = 0; e < grassArr.length; e++) {
                if (grassArr[e].x == newCell[0] && grassArr[e].y == newCell[1]) {
                    grassArr.splice(e, 1);
                    break;
                }
            }
            this.x = newCell[0];
            this.y = newCell[1];

            this.multiply = 0;
            this.energy++;

        }
        else {
            this.move();

        }
        if (this.energy >= 5) {
            this.mul()
            this.energy = 0;
        }
        else if (this.energy <= -5) {
            this.die();

        }


    }
    mul() {
        var newCell = random(this.chooseCell(0));

        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 4;
            var newhorse = new horse(newCell[0], newCell[1], this.index);
            horseArr.push(newhorse);

        }


    }
    die() {

        for (var c in horseArr) {
            if (horseArr[c].x == this.x && horseArr[c].y == this.y) {
                matrix[this.y][this.x] = 0;
                horseArr.splice(c, 1);

                break;
            }
        }
    }
}