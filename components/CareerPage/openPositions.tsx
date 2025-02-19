import { Briefcase, ChevronRight, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import jobListings from "@/constants/jobListings";
import { useState } from "react";

export default function openPositions() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [locationFilter, setLocationFilter] = useState("all");

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      locationFilter === "all" || job.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  return (
    <section id="positions" className="py-20">
      <div className="containe max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 border border-gray-200 rounded-lg">
            <Input
              placeholder="Search positions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Filter by location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="India">India</SelectItem>
              <SelectItem value="USA">USA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              className="group hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <CardDescription>
                      <div className="flex gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                      </div>
                    </CardDescription>
                  </div>
                  {/* <Button className="group-hover:translate-x-1 bg-[#23dce1] hover:bg-white text-[#0c1d44] outline-solid transition-transform">
                    Apply Now
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button> */}
                  <Button className="px-6 py-2 border-2 border-[#0A2D68] text-[#0c1d44] bg-[#23dce1] font-medium rounded-md hover:bg-[#23dce1] hover:bg-white transition-transform">
                    Download Brochure
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
