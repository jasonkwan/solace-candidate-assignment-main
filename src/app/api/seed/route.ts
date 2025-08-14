import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

export async function POST() {
  // Uncomment this line to use a database
  // const records = await db.insert(advocates).values(advocateData).returning();
  const records = advocateData;

  return Response.json({ advocates: records });
}
