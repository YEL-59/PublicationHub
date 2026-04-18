import MentorDashboard from "@/page/mentor-dashboard/MentorDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentor Dashboard | PublicationHub",
  description: "Overview of your research opportunities and submissions.",
};

export default function MentorDashboardPage() {
  return <MentorDashboard />;
}
