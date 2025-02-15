'use client';

import { useState } from 'react';
import {
  Building2,
  Users,
  Target,
  Award,
  Search,
  MapPin,
  Briefcase,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Footer from '@/components/footer';
import Navbar from '@/components/ui/navbar';
import testimonials from '@/constants/testimonials';
import jobListings from '@/constants/jobListings';
<<<<<<< HEAD
import Image from 'next/image';
=======
>>>>>>> 324c0464a26006967fc5c05a5a38fb816f9edc9c

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'all' || job.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shape the Future of Engineering
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join a team that's shaping the future of automotive, aerospace, healthcare, robotics, and more.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: 'Innovation', description: 'Pushing boundaries in engineering excellence' },
              { icon: Users, title: 'Collaboration', description: 'Working together to achieve greatness' },
              { icon: Target, title: 'Precision', description: 'Attention to detail in everything we do' },
              { icon: Award, title: 'Excellence', description: 'Committed to delivering the highest quality' },
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
                icon={Search}
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
              <Card key={job.id} className="group hover:shadow-lg transition-shadow">
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
                    <Button className="group-hover:translate-x-1 transition-transform">
                      Apply Now
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

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Employee Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col">
                <CardHeader className="flex-row gap-4 items-center">
<<<<<<< HEAD
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
=======
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
>>>>>>> 324c0464a26006967fc5c05a5a38fb816f9edc9c
                    className="rounded-full w-16 h-16 object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic text-muted-foreground">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced Projects',
                description: 'Work on cutting-edge engineering solutions that shape industries.',
              },
              {
                title: 'Global Exposure',
                description: 'Collaborate with international teams and clients across continents.',
              },
              {
                title: 'Growth Opportunities',
                description: 'Continuous learning and career advancement opportunities.',
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Shape the Future of Engineering?
          </h2>
          <Button
            size="lg"
            variant="secondary"
            className="text-primary"
            onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Careers
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}