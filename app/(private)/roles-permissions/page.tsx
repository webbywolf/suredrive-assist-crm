import { redirect } from "next/navigation";

export default async function page() {
  return redirect("/roles-permissions/roles");
}
