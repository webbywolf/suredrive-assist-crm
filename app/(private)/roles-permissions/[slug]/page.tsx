import AllPermissionsTable from "@/sections/roles-permissions/permissions";
import { Roles } from "@/sections/roles-permissions/roles";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = (await params).slug;
  if (slug === "roles") {
    return <Roles />;
  }
  if (slug === "permissions") {
    return <AllPermissionsTable />;
  }
  return redirect("/dashboard");
}
