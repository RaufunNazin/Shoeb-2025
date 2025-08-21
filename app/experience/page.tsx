import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building, Code, Cpu, Database, Award } from "lucide-react";

export default function ExperiencePage() {
  const experiences = [
    {
      icon: Briefcase,
      title: "সহ-প্রতিষ্ঠাতা ও প্রধান নির্বাহী কর্মকর্তা",
      company: "Academic Affiliation, IT For All",
      period: "২০২২ - বর্তমান",
      description:
        "প্রযুক্তি শিক্ষার প্রসারে বিশ্ববিদ্যালয় শিক্ষার্থীদের জন্য প্রশিক্ষণ প্রোগ্রাম পরিচালনা। দক্ষতা উন্নয়নে লক্ষ্য রেখে পাঠ্যক্রম নকশা ও বাস্তবায়ন।",
      techTerms:
        "Web Development, AI Tools, Research Platforms, Learning Management Systems",
    },
    {
      icon: Building,
      title: "প্রধান নির্বাহী কর্মকর্তা",
      company: "Luvana Tech",
      period: "২০২৩ - বর্তমান",
      description:
        "উদ্ভাবনী সফটওয়্যার সমাধান ও ডিজিটাল পরিষেবা প্রদানে নেতৃত্ব। তরুণ প্রযুক্তি পেশাজীবীদের জন্য উদ্যোক্তা উদ্যোগ উন্নয়ন।",
      techTerms:
        "React, Next.js, Node.js, Cloud Infrastructure, Microservices Architecture",
    },
    {
      icon: Code,
      title: "ডেভেলপার ও আইটি কনসালট্যান্ট",
      company: "Supreme Court of Bangladesh (ICT)",
      period: "২০২১ - ২০২২",
      description:
        "সুপ্রিম কোর্টের আইসিটি অবকাঠামো উন্নয়নে প্রযুক্তিগত সহায়তা প্রদান। ন্যায়বিচার প্রক্রিয়ায় ডিজিটাল সলিউশন বাস্তবায়নে অবদান।",
      techTerms:
        "IT Consulting, System Integration, Database Management, Cybersecurity",
    },
    {
      icon: Cpu,
      title: "AI Engineer ও Data Scientist",
      company: "Google DeepMind Project, Turing California, USA",
      period: "২০২৩ - বর্তমান",
      description:
        "আন্তর্জাতিক গবেষণা দলে মেশিন লার্নিং ও কৃত্রিম বুদ্ধিমত্তা প্রকল্পে কাজ। উন্নত অ্যালগরিদম ও নিউরাল নেটওয়ার্ক আর্কিটেকচার উন্নয়নে অবদান।",
      techTerms:
        "Deep Learning, Transformer Models, NLP, Reinforcement Learning, TensorFlow, PyTorch",
    },
    {
      icon: Database,
      title: "Machine Learning ও Data Engineer (Remote)",
      company: "DReady, UK",
      period: "২০২২ - ২০২৩",
      description:
        "ডেটা ইঞ্জিনিয়ারিং পাইপলাইন ও মেশিন লার্নিং মডেল তৈরি। ক্লায়েন্ট প্রজেক্টের জন্য তথ্য বিশ্লেষণ ও স্বয়ংক্রিয়করণ সমাধান বাস্তবায়ন।",
      techTerms: "Python, SQL, Big Data, ETL Pipelines, Cloud Services, MLOps",
    },
    {
      icon: Award,
      title: "গবেষক",
      company: "Cyber Security, Tennessee State University, USA",
      period: "২০২১ - বর্তমান",
      description:
        "সাইবার নিরাপত্তা ও এআই অ্যাপ্লিকেশনে গবেষণা। প্রাকৃতিক ভাষা প্রক্রিয়াকরণ, তথ্য সুরক্ষা ও নেটওয়ার্ক নিরাপত্তা সম্পর্কিত গবেষণাপত্র প্রকাশ।",
      techTerms:
        "Cybersecurity, Research Methodology, Cryptography, Network Security, Data Privacy",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              পেশাগত যাত্রা
            </Badge>
            <h1 className="text-4xl font-bold font-serif mb-6">
              আমার পেশাগত অভিজ্ঞতা
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI গবেষণা থেকে যুব নেতৃত্ব পর্যন্ত - ঢাকা বিশ্ববিদ্যালয়ের টেক
              ল্যান্ডস্কেপ রূপান্তরিত করার জন্য আমি কীভাবে দক্ষতা তৈরি করেছি তার
              সম্পূর্ণ গল্প।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group relative flex flex-col h-full overflow-hidden transition-all duration-200"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform rotate-1 group-hover:rotate-0"></div>

                {/* Header */}
                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <exp.icon className="h-6 w-6 text-primary group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium">
                          {exp.company}
                        </CardDescription>
                        <Badge variant="outline" className="w-fit text-xs">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                {/* Content fills remaining space */}
                <CardContent className="relative z-10 flex flex-col justify-between flex-1">
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                  <div className="transition-opacity duration-700 text-xs text-muted-foreground mt-auto">
                    <strong className="text-primary">প্রযুক্তি:</strong>{" "}
                    {exp.techTerms}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
