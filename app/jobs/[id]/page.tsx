// app/jobs/[id]/page.tsx
import { jobsData } from "@/constants/jobData";
import JobDetails from "@/components/JobDetails";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return jobsData.map((job) => ({
    id: job.id.toString(), // Convert id to string for dynamic params
  }));
}

export default async function JobPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params; // Await the params promise
  const id = Number(params.id);
  const job = jobsData.find((job) => job.id === id);

  if (!job) {
    notFound(); // Use Next.js's not-found utility for invalid IDs
  }

  return <JobDetails job={job} />;
}