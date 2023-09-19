const mycountry = {
  country: "Tuvalu",
  capital: "Funafuti",
  language: "Tuvaluan",
  population: 11900,
  neighbours: ["Kiribati", "Samoa", "Fiji"],
  describe() {
    console.log(
      this.country +
        " has " +
        this.population +
        " people, their mother tongue is " +
        this.language +
        ", they have " +
        this.neighbours.length +
        " neighbouring countries and a capital called " +
        this.capital +
        "."
    );
  },
};

console.log("Hello");
mycountry.describe();
