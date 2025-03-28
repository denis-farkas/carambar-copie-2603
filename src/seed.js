import { Joke } from "./models/joke.js";
import { sequelize } from "./db.js";

const initialJokes = [
  { question: "Quelle est la femelle du hamster ?", answer: "L’Amsterdam" },
  { question: "Que dit un oignon quand il se cogne ?", answer: "Aïe" },
  {
    question: "Quel est l'animal le plus heureux ?",
    answer: "Le hibou, parce que sa femme est chouette.",
  },
  {
    question: "Pourquoi le football c'est rigolo ?",
    answer: "Parce que Thierry en rit",
  },
  {
    question: "Quel est le sport le plus fruité ?",
    answer:
      "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.",
  },
  { question: "Que se fait un Schtroumpf quand il tombe ?", answer: "Un Bleu" },
  {
    question: "Quel est le comble pour un marin ?",
    answer: "Avoir le nez qui coule",
  },
  {
    question: "Qu'est ce que les enfants usent le plus à l'école ?",
    answer: "Le professeur",
  },
  {
    question: "Quel est le sport le plus silencieux ?",
    answer: "Le para-chuuuut",
  },
  {
    question: "Quel est le comble pour un joueur de bowling ?",
    answer: "C’est de perdre la boule",
  },
];

// Function to seed the database
async function seedDatabase() {
  try {
    console.log("Initializing database...");

    // Sync database - create tables if they don't exist
    await sequelize.sync({ force: true });
    console.log("Database tables created!");

    // Insert sample jokes
    console.log("Adding sample jokes...");
    const jokes = await Joke.bulkCreate(initialJokes);

    console.log(`Successfully added ${jokes.length} jokes to the database!`);
    console.log("Database seeding completed successfully!");

    // Close the database connection
    await sequelize.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

// Execute the seeding function
seedDatabase();
