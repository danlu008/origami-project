function createSVG(id, appendId, width, height) {
    let div = document.getElementById(appendId);
    let svgNS = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute('id', id);
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
    div.append(svg);
}

function drawPrimitives(svg, scale, shift, posX1, posY1, posX2, posY2, color) {
    let svgNS = "http://www.w3.org/2000/svg";
    let newLine = document.createElementNS(svgNS,"line");
    newLine.setAttribute('x1', (shift[0] + posX1)*scale);
    newLine.setAttribute('y1', (shift[1] + posY1)*scale);
    newLine.setAttribute('x2', (shift[0] + posX2)*scale);
    newLine.setAttribute('y2', (shift[1] + posY2)*scale);
    newLine.setAttribute('stroke', color);
    newLine.setAttribute('stroke-width', 1);
    svg.append(newLine);
}

function createCreasePatternPart(svg, scale, grid, posX, posY, posX1, posY1, posX2, posY2, color) {
    let svgNS = "http://www.w3.org/2000/svg";
    let newLine = document.createElementNS(svgNS,"line");
    // posX += 1;
    // posY += 1;
    newLine.setAttribute('x1', (posX + grid*posX1)*scale);
    newLine.setAttribute('y1', (posY + grid*posY1)*scale);
    newLine.setAttribute('x2', (posX + grid*posX2)*scale);
    newLine.setAttribute('y2', (posY + grid*posY2)*scale);
    newLine.setAttribute('stroke', color);
    newLine.setAttribute('stroke-width', 1);
    svg.append(newLine);
}

function createCreaseBlock(svg, posX, posY, width, height, color) {
    let svgNS = "http://www.w3.org/2000/svg";
    let newBox = document.createElementNS(svgNS,"rect");
    newBox.setAttribute('x', posX);
    newBox.setAttribute('y', posY);
    newBox.setAttribute('width', width);
    newBox.setAttribute('height', height);
    newBox.setAttribute('stroke', 'black');
    newBox.setAttribute('stroke-width', 1);
    newBox.setAttribute('fill', color);
    newBox.setAttribute('altitude', 1);
    svg.append(newBox);
}

function link() {
    var svg = document.getElementById("creasePattern");
    var serializer = new XMLSerializer();
    var source = serializer.serializeToString(svg);
    var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);
    document.getElementById("link").href = url;
}