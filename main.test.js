import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  const inputValue="Night";
  expect(newsList.filter(value => value.match(inputValue))).toEqual([
    "'Nightmare' TV show 'Euphoria — health threat or high art?"]);
});

test("Test Sort Ascending", () => {
  expect(sort("ascending")).toEqual([
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "Best Novel Price",
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Marie Colvin shined a light on war-torn corners of the world",
    "Media glare can enrich tennis pros yet imperil mental health",
    "North Korean",
    "Sport News",
    "The Iven Ann and Ven News",
    "The Lord of the Rings",
    "The Mama and Papa News",
    "What books should an aspiring journalist read?",
    "What films should an aspiring journalist watch?"
  ]);
});

test("Test Sort Descending", () => {
  expect(sort("descending")).toEqual([
    "What films should an aspiring journalist watch?",
    "What books should an aspiring journalist read?",
    "The Mama and Papa News",
    "The Lord of the Rings",
    "The Iven Ann and Ven News",
    "Sport News",
    "North Korean",
    "Media glare can enrich tennis pros yet imperil mental health",
    "Marie Colvin shined a light on war-torn corners of the world",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Buried underpants and tea bags help scientists evaluate soil",
    "Best Novel Price",
    "'Nightmare' TV show 'Euphoria — health threat or high art?"
  ]);
});




