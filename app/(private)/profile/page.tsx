import Page from "@/components/layouts/Page";
import { Metadata } from "next";
// import { Profile } from "./tabs/profile";

export const metadata: Metadata = {
  title: "Profile",
};

export default function page() {
  return (
    <Page title="Profile">
      {/* <Profile /> */}
      <h1>Profile Page</h1>
    </Page>
  );
}
