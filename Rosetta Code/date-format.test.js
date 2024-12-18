let { getDateFormats } = require("./date-format");

describe("Testing getDateFormats", () => {
    it("should be a function", () => {
        expect(typeof getDateFormats).toBe("function");
    });

    it("should return an object", () => {
        expect(typeof getDateFormats()).toBe("object");
    });

    it("should return an array with 2 elements", () => {
        let result = getDateFormats();

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
    });

    it("should return the correct date in the right format", () => {
        let result = getDateFormats();
        let now = new Date();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        expect(result[0]).toBe(
            now.getFullYear() +
            '-' + 
            (now.getMonth() + 1) + 
            '-' + 
            now.getDate()
        );
        expect(result[1]).toBe(
            days[now.getDay()] + 
            ', ' + 
            months[now.getMonth()] + 
            ' ' + 
            now.getDate() + 
            ', ' + 
            now.getFullYear()
        );
    });
});
