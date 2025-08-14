import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

export async function GET(request: Request) {
  // Uncomment this line to use a database
  // const data = await db.select().from(advocates);
  // const data = advocateData;

  // simulate a server-side query using searchTerm as filter
  const [_, searchTerm] = request.url.split('?search=');
  console.log("Fetching advocates using searchTerm:", searchTerm);

  const data = (searchTerm && searchTerm.length > 0)
    ? advocateData.filter((advocate) => {
        return (
          advocate.firstName.includes(searchTerm) ||
          advocate.lastName.includes(searchTerm) ||
          advocate.city.includes(searchTerm) ||
          advocate.degree.includes(searchTerm) ||
          advocate.specialties.some(speciality => speciality.includes(searchTerm)) ||
          String(advocate.yearsOfExperience).includes(searchTerm)
        );
      })
    : advocateData;

  return Response.json({ data });
}
