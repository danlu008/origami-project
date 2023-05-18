function main(inputString) {
    graph = stringConvertToGraph(inputString);
    fillBlock(graph);
    fillCreasePattern(graph);
}

let inputString = "010|111|010";
createSVG("pattern", "Input", 600, 600);
createSVG("creasePattern", "Output", 600, 600);
createSVG("primitives", "Primitive_Output", 600, 400);
main(inputString);

let primitives_svg = document.getElementById("primitives");
let scale = 10;
let shift = [0, 0];
for (i in Object.keys(primitives)) {
    if (i > 0 && i % 3 == 0) {
        shift[0] = 0;
        shift[1] += 10;
    }
    for (j in Object.keys(primitives[i].edges)) {
        drawPrimitives(primitives_svg, scale, shift, primitives[i].edges[j][0], primitives[i].edges[j][1], primitives[i].edges[j][2], primitives[i].edges[j][3], primitives[i].edges_assignment[j]);
    }
    shift[0] += 10;
}

function stringConvertToGraph(inputString) {
    string = inputString.split('|');
    let graph = {
        matrix: [],
        width: 0,
        height: 0,
        boundary_padding: 1
    };
    graph.height = string.length;
    for (i = 0; i < graph.height; i++) {
        graph.width = Math.max(graph.width, string[i].length);
    }
    graph.height +=  2*graph.boundary_padding;
    graph.width +=  2*graph.boundary_padding;

    for (row = 0; row < graph.height; row++) {
        let _matrix = [];
        for (col = 0; col < graph.width; col++) {
            let e = new Object();
            e.direction = [];
            e.ajacent = 0;
            if (row == 0 || col == 0 || row == graph.height-1 || col == graph.width-1) {
                e.fill = "0";
            } else {
                if (string[row-1][col-1] == undefined) {
                    string[row-1] += "0";
                }
                e.fill = string[row-1][col-1];
            }
            _matrix.push(e);
        }
        graph.matrix.push(_matrix);
    }

    countAjacent(graph);
    return graph;
}

function countAjacent (graph) {
    for (row = 0; row < graph.height; row++) {
        for (col = 0; col < graph.width; col++) {
            // reset
            graph.matrix[row][col].direction = [];
            graph.matrix[row][col].ajacent = 0;

            if (row-1 >= 0 && graph.matrix[row-1][col].fill == "1") {
                graph.matrix[row][col].direction.push("North");
                graph.matrix[row][col].ajacent++;
            }
            if (row+1 < graph.height && graph.matrix[row+1][col].fill == "1") {
                graph.matrix[row][col].direction.push("South");
                graph.matrix[row][col].ajacent++;
            }
            if (col-1 >= 0 && graph.matrix[row][col-1].fill == "1") {
                graph.matrix[row][col].direction.push("West");
                graph.matrix[row][col].ajacent++;
            }
            if (col+1 < graph.width && graph.matrix[row][col+1].fill == "1") {
                graph.matrix[row][col].direction.push("East");
                graph.matrix[row][col].ajacent++;
            }
        }
    }
}