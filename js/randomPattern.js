function createRandomPattern() {
    let string = "";
    let width = MathClass.random(3, 8);
    let height = MathClass.random(3, 8);
    for (row = 0; row < height; row++) {
        if (row > 0) {
            string += "|";
        }
        for (col = 0; col < width; col++) {
            string += MathClass.random(0, 1).toString();
        }
    }
    main(string);
}