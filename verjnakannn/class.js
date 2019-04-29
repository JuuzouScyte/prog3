class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;

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
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }

}

class GrassEater {
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
            matrix[newCell[1]][newCell[0]] = 2;
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
            matrix[newCell[1]][newCell[0]] = 2;
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
            matrix[newCell[1]][newCell[0]] = 2;
            var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            grassEaterArr.push(newGrassEater);

        }


    }
    die() {

        for (var c in grassEaterArr) {
            if (grassEaterArr[c].x == this.x && grassEaterArr[c].y == this.y) {
                matrix[this.y][this.x] = 0;
                grassEaterArr.splice(c, 1);

                break;
            }
        }
    }
}
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
class Generator {  //stexcuma xoter erb vor verjacelen
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }
    Generacnel() {
        var empty = random(this.chooseCell(0))
        if (empty && grassArr.length == 0) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}


class Generator1 {      // stexcuma xotakerner erb vor verjacelen
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }
    Generacnel1() {
        var empty = random(this.chooseCell(0));
        var em1 = random(this.chooseCell(1));
        if (empty && grassEaterArr.length == 0) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new GrassEater(newX, newY)
            grassEaterArr.push(xt)
        }
        else if (!empty && em1 && horseArr.length == 0) {
            var newX = em1[0]
            var newY = em1[1]
            matrix[newY][newX] = 3
            for (var e = 0; e < grassArr.length; e++) {
                if (grassArr[e].x == em1[0] && grassArr[e].y == em1[1]) {
                    grassArr.splice(e, 1);
                    break;
                }
            }
            var xt = new GrassEater(newX, newY)
            grassEaterArr.push(xt)
        }

    }
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


class Generator2 {  // stexcuma gishatichner erb vor verjacelen
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }
    Generacnel2() {
        var empty = random(this.chooseCell(0));
        var em1 = random(this.chooseCell(1));
        if (empty && gishatichArr.length == 0) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var gish = new gishatich(newX, newY)
            gishatichArr.push(gish)

        }
        else if (!empty && em1 && horseArr.length == 0) {
            var newX = em1[0]
            var newY = em1[1]
            matrix[newY][newX] = 3
            for (var e = 0; e < grassArr.length; e++) {
                if (grassArr[e].x == em1[0] && grassArr[e].y == em1[1]) {
                    grassArr.splice(e, 1);
                    break;
                }
            }
            var gish = new gishatich(newX, newY)
            gishatichArr.push(gish)
        }
    }
}

class Generator3 {  // stexcuma hours er erb vor verjacelen
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }
    Generacnel3() {
        var empty = random(this.chooseCell(0))
        var em1 = random(this.chooseCell(1));
        if (empty && horseArr.length == 0) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var hor = new horse(newX, newY)
            horseArr.push(hor)
        }
        else if (!empty && em1 && horseArr.length == 0) {
            var newX = em1[0]
            var newY = em1[1]
            matrix[newY][newX] = 4
            for (var e = 0; e < grassArr.length; e++) {
                if (grassArr[e].x == em1[0] && grassArr[e].y == em1[1]) {
                    grassArr.splice(e, 1);
                    break;
                }
            }
            var hor = new horse(newX, newY)
            horseArr.push(hor)
        }

    }
}