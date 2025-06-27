import { db } from "@/db"
import { categories } from "@/db/schema"

// Create a script to seed categories
const categoryName = [
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News and politics",
  "People and blogs",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travels and events"
]

async function main() {
  try {
    const values = categoryName.map((name)=>{
      return {
        name,
        description: `Videos related to ${name.toLowerCase()}`
      }
    })
    await db.insert(categories).values(values)
    console.log("Categories seeded successfully!")
  } catch(e) {
    console.error("Error seeding categories", e)
    process.exit(1)
  }
}

main()