class MathClass {
    static random(min, max) {
        let value = (Math.round(Math.random() * (max - min)) + min);
        return value;
    }
}