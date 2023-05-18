function fillBlock(graph) {
    let svg = document.getElementById("pattern");
    svg.innerHTML = '';
    for (row = 0; row < graph.height; row++) {
        for (col = 0; col < graph.width; col++) {
            createBlock(svg, row, col, graph);
        }
    }
}

function createBlock(svg, row, col, graph) {
    let svgNS = "http://www.w3.org/2000/svg";
    let rect = document.createElementNS(svgNS,"rect");
    let gridSize = Math.min(75, 600 / graph.height, 600 / graph.width);
    svg.setAttribute('width', gridSize*graph.width);
    svg.setAttribute('height', gridSize*graph.height);

    rect.setAttribute('x', col*gridSize);
    rect.setAttribute('y', row*gridSize);
    rect.setAttribute('width', gridSize);
    rect.setAttribute('height', gridSize);
    rect.setAttribute('stroke', 'black');
    rect.setAttribute('stroke-width', 0.5);
    rect.setAttribute('altitude', graph.matrix[row][col].fill);
    if (rect.getAttribute('altitude') == "1") {
        rect.setAttribute('fill', 'CadetBlue');
    } else if (rect.getAttribute('altitude') == "2") {
        rect.setAttribute('fill', "red");
    } else {
        rect.setAttribute('fill', "white");
    }
    rect.onclick = function() {
        if (rect.getAttribute('altitude') == "0") {
            rect.setAttribute('fill', "yellow");
            rect.setAttribute('altitude', 1);
            graph.matrix[row][col].fill = "1";
        } else if (rect.getAttribute('altitude') == "1") {
            rect.setAttribute('fill', "red");
            rect.setAttribute('altitude', 0);
            graph.matrix[row][col].fill = "0";
        } else if (rect.getAttribute('altitude') == "2") {
            rect.setAttribute('fill', "white");
            rect.setAttribute('altitude', 0);
            graph.matrix[row][col].fill = "0";
        }
        countAjacent(graph);
        graphConvertToString(graph);
        fillBlock(graph);
        fillCreasePattern(graph);
        console.log(graph);
    };
    svg.append(rect);
}

function graphConvertToString(graph) {
    let string = "";
    for (row = 0; row < graph.height; row++) {
        for (col = 0; col < graph.width; col++) {
            string += graph.matrix[row][col].fill;
        }
        if (row != graph.height-1) {
            string += "|";
        }
    }
    // document.getElementById("input").value = string;
}