import { Metadata } from "next";
import StaffTemplate from "@/components/template/staff";

export const metadata: Metadata = {
  title: "Staff",
  description: "Meet the dedicated staff of GrowTavern, including Super Developers, Developers, Moderators, and VIPs who maintain the server, support players, and ensure a positive community.",
  keywords: "GrowTavern staff, Growtopia server team, Super Developers, Moderators, VIPs, Growtopia community",
  openGraph: {
    title: "GrowTavern Staff - Meet Our Team",
    description: "Learn more about the GrowTavern staff, a dedicated team of Super Developers, Developers, Moderators, and VIPs who ensure smooth gameplay and a great community experience.",
    url: "https://growtavern.com/staff",
    type: "website",
  }
};

function Staff() {
  return (
    <StaffTemplate />
  );
}

export default Staff;