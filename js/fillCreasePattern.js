function fillCreasePattern(graph) {
    let svg = document.getElementById("creasePattern");
    svg.innerHTML = '';

    let matrix = graph.matrix;
    let grid = 1/6;
    let gridSize = Math.min(75, 600 / graph.height, 600 / graph.width);
    svg.setAttribute('width', gridSize*graph.width);
    svg.setAttribute('height', gridSize*graph.height);

    for (row = 0; row < matrix.length; row++) {
        for (col = 0; col < matrix[0].length; col++) {

            if (matrix[row][col].fill === "1") {
                if (matrix[row][col].ajacent === 0) {
                    for (i = 0; i < Object.keys(primitives[1].edges).length; i++) {
                        createCreasePatternPart(svg, gridSize, grid, col, row, primitives[1].edges[i][0], primitives[1].edges[i][1], primitives[1].edges[i][2], primitives[1].edges[i][3], primitives[1].edges_assignment[i]);
                    }
                } else if (matrix[row][col].ajacent === 1) {
                    if (matrix[row][col].direction[0] === 'North') {
                        for (i = 0; i < Object.keys(primitives[2].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, primitives[2].edges[i][0], primitives[2].edges[i][1], primitives[2].edges[i][2], primitives[2].edges[i][3], primitives[2].edges_assignment[i]);
                        }
                    } else if (matrix[row][col].direction[0] === 'South') {
                        for (i = 0; i < Object.keys(primitives[2].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, primitives[2].edges[i][0], 6 - primitives[2].edges[i][1], primitives[2].edges[i][2], 6 - primitives[2].edges[i][3], primitives[2].edges_assignment[i]);
                        }   
                    } else if (matrix[row][col].direction[0] === 'West') {
                        for (i = 0; i < Object.keys(primitives[2].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, primitives[2].edges[i][1], primitives[2].edges[i][0], primitives[2].edges[i][3], primitives[2].edges[i][2], primitives[2].edges_assignment[i]);
                        }
                    } else if (matrix[row][col].direction[0] === 'East') {
                        for (i = 0; i < Object.keys(primitives[2].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, 6 - primitives[2].edges[i][1], primitives[2].edges[i][0], 6 - primitives[2].edges[i][3], primitives[2].edges[i][2], primitives[2].edges_assignment[i]);
                        }
                    }
                } else if (matrix[row][col].ajacent === 2) {
                    if (matrix[row][col].direction[0] === 'North' && matrix[row][col].direction[1] === 'South') {
                        for (i = 0; i < Object.keys(primitives[4].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, primitives[4].edges[i][0], primitives[4].edges[i][1], primitives[4].edges[i][2], primitives[4].edges[i][3], primitives[4].edges_assignment[i]);
                        }
                    } else if (matrix[row][col].direction[0] === 'West' && matrix[row][col].direction[1] === 'East') {
                        for (i = 0; i < Object.keys(primitives[4].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, primitives[4].edges[i][1], primitives[4].edges[i][0], primitives[4].edges[i][3], primitives[4].edges[i][2], primitives[4].edges_assignment[i]);
                        }
                    } else if (matrix[row][col].direction[0] === 'North' && matrix[row][col].direction[1] === 'West') {
                        if (matrix[row-1][col-1].fill === '1') {
                            for (i = 0; i < Object.keys(primitives[7].edges).length; i++) {
                                createCreasePatternPart(svg, gridSize, grid, col, row, primitives[7].edges[i][0], primitives[7].edges[i][1], primitives[7].edges[i][2], primitives[7].edges[i][3], primitives[7].edges_assignment[i]);
                            }
                            continue;
                        }
                        for (i = 0; i < Object.keys(primitives[3].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, primitives[3].edges[i][0], primitives[3].edges[i][1], primitives[3].edges[i][2], primitives[3].edges[i][3], primitives[3].edges_assignment[i]);
                        }
                    } else if (matrix[row][col].direction[0] === 'North' && matrix[row][col].direction[1] === 'East') {
                        if (matrix[row-1][col+1].fill === '1') {
                            for (i = 0; i < Object.keys(primitives[7].edges).length; i++) {
                                createCreasePatternPart(svg, gridSize, grid, col, row, 6-primitives[7].edges[i][0], primitives[7].edges[i][1], 6-primitives[7].edges[i][2], primitives[7].edges[i][3], primitives[7].edges_assignment[i]);
                            }
                            continue;
                        }
                        for (i = 0; i < Object.keys(primitives[3].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, 6-primitives[3].edges[i][0], primitives[3].edges[i][1], 6-primitives[3].edges[i][2], primitives[3].edges[i][3], primitives[3].edges_assignment[i]);
                        }
                    } else if (matrix[row][col].direction[0] === 'South' && matrix[row][col].direction[1] === 'West') {
                        if (matrix[row+1][col-1].fill === '1') {
                            for (i = 0; i < Object.keys(primitives[7].edges).length; i++) {
                                createCreasePatternPart(svg, gridSize, grid, col, row, primitives[7].edges[i][0], 6-primitives[7].edges[i][1], primitives[7].edges[i][2], 6-primitives[7].edges[i][3], primitives[7].edges_assignment[i]);
                            }
                            continue;
                        }
                        for (i = 0; i < Object.keys(primitives[3].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, primitives[3].edges[i][0], 6-primitives[3].edges[i][1], primitives[3].edges[i][2], 6-primitives[3].edges[i][3], primitives[3].edges_assignment[i]);
                        }
                    } else if (matrix[row][col].direction[0] === 'South' && matrix[row][col].direction[1] === 'East') {
                        if (matrix[row+1][col+1].fill === '1') {
                            for (i = 0; i < Object.keys(primitives[7].edges).length; i++) {
                                createCreasePatternPart(svg, gridSize, grid, col, row, 6-primitives[7].edges[i][0], 6-primitives[7].edges[i][1], 6-primitives[7].edges[i][2], 6-primitives[7].edges[i][3], primitives[7].edges_assignment[i]);
                            }
                            continue;
                        }
                        for (i = 0; i < Object.keys(primitives[3].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, 6-primitives[3].edges[i][0], 6-primitives[3].edges[i][1], 6-primitives[3].edges[i][2], 6-primitives[3].edges[i][3], primitives[3].edges_assignment[i]);
                        }
                    }
                } else if (matrix[row][col].ajacent === 3) {
                    if (StringClass.equal(matrix[row][col].direction, ['North', 'West', 'East'])) {
                        if (matrix[row-1][col-1].fill === '1' && matrix[row-1][col+1].fill === '1') {
                            for (i = 0; i < Object.keys(primitives[8].edges).length; i++) {
                                createCreasePatternPart(svg, gridSize, grid, col, row, primitives[8].edges[i][0], primitives[8].edges[i][1], primitives[8].edges[i][2], primitives[8].edges[i][3], primitives[8].edges_assignment[i]);
                            }
                            continue;
                        }
                        for (i = 0; i < Object.keys(primitives[5].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, primitives[5].edges[i][0], primitives[5].edges[i][1], primitives[5].edges[i][2], primitives[5].edges[i][3], primitives[5].edges_assignment[i]);
                        }
                    } else if (StringClass.equal(matrix[row][col].direction, ['North', 'South', 'East'])) {
                        if (matrix[row-1][col+1].fill === '1' && matrix[row+1][col+1].fill === '1') {
                            for (i = 0; i < Object.keys(primitives[8].edges).length; i++) {
                                createCreasePatternPart(svg, gridSize, grid, col, row, 6-primitives[8].edges[i][1], primitives[8].edges[i][0], 6-primitives[8].edges[i][3], primitives[8].edges[i][2], primitives[8].edges_assignment[i]);
                            }
                            continue;
                        }
                        for (i = 0; i < Object.keys(primitives[5].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, 6-primitives[5].edges[i][1], primitives[5].edges[i][0], 6-primitives[5].edges[i][3], primitives[5].edges[i][2], primitives[5].edges_assignment[i]);
                        }
                    } else if (StringClass.equal(matrix[row][col].direction, ["South", "West", "East"])) {
                        if (matrix[row+1][col-1].fill === '1' && matrix[row+1][col+1].fill === '1') {
                            for (i = 0; i < Object.keys(primitives[8].edges).length; i++) {
                                createCreasePatternPart(svg, gridSize, grid, col, row, primitives[8].edges[i][0], 6-primitives[8].edges[i][1], primitives[8].edges[i][2], 6-primitives[8].edges[i][3], primitives[8].edges_assignment[i]);
                            }
                            continue;
                        }
                        for (i = 0; i < Object.keys(primitives[5].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, primitives[5].edges[i][0], 6-primitives[5].edges[i][1], primitives[5].edges[i][2], 6-primitives[5].edges[i][3], primitives[5].edges_assignment[i]);
                        }
                    } else if ((matrix[row][col], ['North', 'South', 'West'])) {
                        if (matrix[row-1][col-1].fill === '1' && matrix[row+1][col-1].fill === '1') {
                            for (i = 0; i < Object.keys(primitives[8].edges).length; i++) {
                                createCreasePatternPart(svg, gridSize, grid, col, row, primitives[8].edges[i][1], primitives[8].edges[i][0], primitives[8].edges[i][3], primitives[8].edges[i][2], primitives[8].edges_assignment[i]);
                            }
                            continue;
                        }
                        for (i = 0; i < Object.keys(primitives[5].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, primitives[5].edges[i][1], primitives[5].edges[i][0], primitives[5].edges[i][3], primitives[5].edges[i][2], primitives[5].edges_assignment[i]);
                        }
                    }
                } else if (matrix[row][col].ajacent === 4) {
                    if (matrix[row-1][col-1].fill === '1' && matrix[row-1][col+1].fill === '1' && matrix[row+1][col-1].fill === '1' && matrix[row+1][col+1].fill === '1') {
                        for (i = 0; i < Object.keys(primitives[0].edges).length; i++) {
                            createCreasePatternPart(svg, gridSize, grid, col, row, primitives[0].edges[i][0], primitives[0].edges[i][1], primitives[0].edges[i][2], primitives[0].edges[i][3], primitives[9].edges_assignment[i]);
                        }
                        continue;
                    }
                    for (i = 0; i < Object.keys(primitives[6].edges).length; i++) {
                        createCreasePatternPart(svg, gridSize, grid, col, row, primitives[6].edges[i][0], primitives[6].edges[i][1], primitives[6].edges[i][2], primitives[6].edges[i][3], primitives[6].edges_assignment[i]);
                        createCreasePatternPart(svg, gridSize, grid, col, row, 6-primitives[6].edges[i][0], primitives[6].edges[i][1], 6-primitives[6].edges[i][2], primitives[6].edges[i][3], primitives[6].edges_assignment[i]);
                        createCreasePatternPart(svg, gridSize, grid, col, row, 6-primitives[6].edges[i][0], 6-primitives[6].edges[i][1], 6-primitives[6].edges[i][2], 6-primitives[6].edges[i][3], primitives[6].edges_assignment[i]);
                        createCreasePatternPart(svg, gridSize, grid, col, row, primitives[6].edges[i][0], 6-primitives[6].edges[i][1], primitives[6].edges[i][2], 6-primitives[6].edges[i][3], primitives[6].edges_assignment[i]);
                    }
                }
            } else {
                for (i = 0; i < Object.keys(primitives[0].edges).length; i++) {
                    createCreasePatternPart(svg, gridSize, grid, col, row, primitives[0].edges[i][0], primitives[0].edges[i][1], primitives[0].edges[i][2], primitives[0].edges[i][3], primitives[0].edges_assignment[i]);
                }
            }
        }
    }
    // boundary
    createCreaseBlock(svg, 0, 0, matrix[0].length*gridSize, matrix.length*gridSize, "none");
}