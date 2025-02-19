import {
    Building2,
    Users,
    Target,
    Award,
  } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";


export default function Values(){
    return(
        <section className="py-20 bg-secondary/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Innovation",
                description: "Pushing boundaries in engineering excellence",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Working together to achieve greatness",
              },
              {
                icon: Target,
                title: "Precision",
                description: "Attention to detail in everything we do",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to delivering the highest quality",
              },
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
    )
}