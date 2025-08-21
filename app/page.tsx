"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Trophy,
  Lightbulb,
  Target,
  Zap,
  BookOpen,
  UtensilsCrossed,
  Building2,
  Cpu,
  Code,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const professionalExperience = [
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
  ];

  const achievements = [
    {
      icon: Users,
      title: "YSSE সেমিনার",
      description:
        "আমি YSSE তে 'Application of AI in Leadership Productivity' সেমিনারে Keynote Speaker হিসেবে অংশগ্রহণ করেছি। এখানে আমি বাংলাদেশি তরুণ উদ্যোক্তাদের জন্য নেতৃত্ব ও প্রযুক্তি বিষয়ে আমার অভিজ্ঞতা শেয়ার করেছি।",
      location: "বাংলাদেশ",
    },
    {
      icon: Trophy,
      title: "ওয়ার্ল্ড ইয়ুথ লিডারশিপ কনফারেন্স",
      description:
        "আমি দুবাইয়ে আয়োজিত World Youth Leadership Conference এ প্যানেলিস্ট হিসেবে অংশ নিয়েছি। বাংলাদেশকে প্রতিনিধিত্ব করে global technology ও leadership নিয়ে আলোচনা করেছি।",
      location: "দুবাই, UAE",
    },
    {
      icon: Award,
      title: "নীতি ও আইন সংক্রান্ত পরামর্শ",
      description:
        "আমি বাংলাদেশের সাইবার সিকিউরিটি আইন ও সিকিউরিটি পলিসি নিয়ে মাননীয় চিফ প্রসিকিউটরের সঙ্গে মিটিং করেছি। দেশের আইন ও বিচার ব্যবস্থার উন্নয়নে আমার মতামত উপস্থাপন করেছি।",
      location: "বাংলাদেশ",
    },
  ];

  const duWorks = [
    {
      icon: BookOpen,
      title: "IT For All - Academic Affiliation",
      description:
        "ঢাকা বিশ্ববিদ্যালয়ে 'IT For All - Academic Affiliation' এর মাধ্যমে প্রায় ৬০০০ শিক্ষার্থীকে AI, IT, Web Development, Latex এবং Higher Studies বিষয়ে প্রশিক্ষণ প্রদান করা হয়েছে। কার্যক্রমে অফলাইন ক্লাস, অনলাইন সেশন ও রিসোর্স শেয়ারিং অন্তর্ভুক্ত ছিল।",
      link: "https://it-for-all.com/",
      facebook: "https://www.facebook.com/share/g/1E3jefXZMT/",
      image: "/image12.png",
    },
    {
      icon: Users,
      title: "সিভি রাইটিং ও ক্যারিয়ার আলোচনা",
      description:
        "মুহসিন হলের শিক্ষার্থীদের সাথে সিভি রাইটিং, রিমোট জবের সুযোগ এবং ক্যারিয়ার পরিকল্পনা নিয়ে আলোচনা করা হয়েছে। এই সেশন শিক্ষার্থীদের বাস্তবধর্মী দিকনির্দেশনা প্রদান করেছে।",
      image: "/image14.png",
    },
    {
      icon: GraduationCap,
      title: "DU Digitalization Program",
      description:
        "বায়োলজি ফ্যাকাল্টিতে অনুষ্ঠিত 'DU Digitalization Program'-এ ছাত্র বক্তা হিসেবে প্রস্তাবনা উপস্থাপন করা হয়। সেগুলো মাননীয় ডীনস মহোদয় ও প্রো-ভিসি (শিক্ষা) এর নিকট তুলে ধরা হয়।",
      image: "/image17.jpg",
    },
    {
      icon: UtensilsCrossed,
      title: "মোকাররম এরিয়াতে ক্যান্টিন উদ্যোগ",
      description:
        "মোকাররম এরিয়াতে ক্যান্টিন স্থাপনের দাবি নিয়ে সচেতনতা প্রচার চালানো হয়। এ বিষয়ে ICT সেল এর মাননীয় ডিরেক্টরকে লিখিত প্রস্তাব ও হ্যান্ডবিল প্রদান করা হয়।",
      image: "/image3.png",
    },
    {
      icon: Building2,
      title: "তরুণ উদ্যোক্তাদের জন্য অফিস স্পেস",
      description:
        "ইঞ্জিনিয়ারিং ফ্যাকাল্টির ডিন ম্যাডামের সাথে প্রযুক্তি খাতের উন্নয়ন নিয়ে নীতি-আলোচনা হয়। আলোচনায় ২১ তলার একটি ফ্লোর তরুণ উদ্যোক্তাদের জন্য বরাদ্দের আশ্বাস প্রদান করা হয়।",
      image: "/image11.png",
    },
    {
      icon: Cpu,
      title: "AI and IT For All Program",
      description:
        "ফার্মেসি লেকচার থিয়েটারে প্রায় ১০০ শিক্ষার্থী অংশগ্রহণে 'AI and IT For All Program' অনুষ্ঠিত হয়। প্রোগ্রামে কৃত্রিম বুদ্ধিমত্তা ও তথ্যপ্রযুক্তি বিষয়ক হাতে-কলমে প্রশিক্ষণ প্রদান করা হয়।",
      image: "/image17.jpg",
    },
  ];

  const commitments = [
    "এক শিক্ষার্থী, এক আইডি - রেজিস্ট্রেশন, হল, ডিপার্টমেন্ট ও পেমেন্ট সবকিছু একসাথে এক্সেসযোগ্য",
    "হার্ভার্ড ও MIT স্তরের কোর্স শিক্ষার্থীদের জন্য উন্মুক্ত করা এবং IT ও AI দক্ষতা বৃদ্ধি",
    "প্রযুক্তি ও দক্ষতাভিত্তিক সাবজেক্টের সিট বাড়ানো এবং ইন্টার্নশিপ/রিমোট জব সুযোগ বৃদ্ধি",
    "স্মার্ট অ্যাপের মাধ্যমে হল সিট মনিটরিং এবং ডিজিটাল হল ব্যবস্থাপনা চালু করা",
    "ক্যাম্পাসে আন্তর্জাতিক বিজ্ঞান ও প্রযুক্তি মেলার আয়োজন এবং দেশের ও বিশ্বের বিশ্ববিদ্যালয়গুলোর অংশগ্রহণ নিশ্চিত করা",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              ডাকসু ২০২৫ প্রার্থী
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight text-foreground">
              ঢাকা বিশ্ববিদ্যালয়ের জন্য{" "}
              <span className="text-primary">ডিজিটাল ভবিষ্যৎ</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              প্রযুক্তি ও উদ্ভাবনের মাধ্যমে আমরা এমন সমাধান তৈরি করছি, যা{" "}
              <span className="font-semibold text-primary">
                AI-ভিত্তিক সিস্টেম
              </span>{" "}
              উন্নয়ন,
              <span className="font-semibold text-primary">
                {" "}
                শিক্ষার্থীদের দক্ষতা বৃদ্ধি
              </span>{" "}
              এবং
              <span className="font-semibold text-primary">
                {" "}
                আন্তর্জাতিক অঙ্গনে
              </span>{" "}
              বাংলাদেশের ইতিবাচক ভূমিকা রাখতে সহায়তা করে।
            </p>

            <div className="flex flex-wrap gap-4 mt-12">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/commitments" className="flex items-center gap-2">
                  <Target className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  আমার অঙ্গীকারসমূহ দেখুন
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/about" className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  আমার সম্পর্কে জানুন
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex gap-6 justify-center">
            <div className="w-80 h-96 bg-muted rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/image7.png?height=400&width=320"
                alt=""
                width={320}
                height={400}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-24 h-28 bg-muted rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/image9.png?height=112&width=96"
                  alt=""
                  width={96}
                  height={112}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="w-24 h-28 bg-muted rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/image1.png?height=112&width=96"
                  alt=""
                  width={96}
                  height={112}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="w-24 h-28 bg-muted rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/image13.png?height=112&width=96"
                  alt=""
                  width={96}
                  height={112}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold font-serif text-center mb-4 text-foreground">
          ঢাকা বিশ্ববিদ্যালয়ের জন্য আমার কাজ
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ঢাবির শিক্ষার্থীদের জন্য আমার বাস্তব অবদান এবং উন্নয়নমূলক কার্যক্রম।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {duWorks.map((item, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden transition-all duration-200 bg-card border-border flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary group-hover:rotate-6 transition-transform duration-300" />
                </div>
                <CardTitle className="text-lg text-center group-hover:text-primary transition-colors duration-300 text-card-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-justify text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.link && (
                    <div className="text-xs text-primary mb-2">
                      <strong>Website:</strong>{" "}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.link}
                      </a>
                    </div>
                  )}
                  {item.facebook && (
                    <div className="text-xs text-primary mb-4">
                      <strong>Facebook Group:</strong>{" "}
                      <a
                        href={item.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        IT FOR ALL Group
                      </a>
                    </div>
                  )}
                </div>
                <div className="mt-4 w-full h-32 bg-muted rounded-md overflow-hidden">
                  <Image
                    src={`${item.image}?height=128&width=200&query=${item.title} DU work`}
                    alt={item.title}
                    width={200}
                    height={128}
                    className="rounded-md object-cover w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center mb-4">
            ঢাকা বিশ্ববিদ্যালয়ের জন্য আমার অঙ্গীকারসমূহ
          </h2>
          <p className="text-center text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            ঢাবিকে world-class প্রতিষ্ঠানে রূপান্তরিত করার আমার বাস্তবায়নযোগ্য
            plan।
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <div className="flex-shrink-0 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-semibold group-hover:bg-primary-foreground transition-colors duration-300 relative z-10">
                    {index + 1}
                  </div>
                  <p className="text-primary-foreground relative z-10">
                    {commitment}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button
                variant="secondary"
                size="lg"
                className="group bg-white text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/commitments" className="flex items-center gap-2">
                  <Target className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  বিস্তারিত পড়ুন
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center mb-4 text-foreground">
            আমার পেশাগত অভিজ্ঞতা
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technology জগতে আমার প্রকৃত অভিজ্ঞতা এবং অবদান।
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {professionalExperience.map((exp, index) => (
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
          <div className="text-center mt-8">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/experience" className="flex items-center gap-2">
                <Zap className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                সম্পূর্ণ অভিজ্ঞতা দেখুন
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center mb-4 text-foreground">
            গুরুত্বপূর্ণ অর্জনসমূহ
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            প্রকৃত achievement, প্রকৃত impact। এখানে আমার সেই সব কাজ যা সরাসরি
            শিক্ষার্থীদের উপকার করেছে।
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden transition-all duration-200 bg-card border-border flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <CardHeader className="relative z-10">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-200" />
                  </div>
                  <CardTitle className="text-lg text-center group-hover:text-primary transition-colors duration-300 text-card-foreground">
                    {item.title}
                  </CardTitle>
                  {item.location && (
                    <Badge
                      variant="outline"
                      className="mx-auto w-fit border-border text-muted-foreground"
                    >
                      {item.location}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="relative z-10 flex-grow">
                  <p className="text-justify text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center mb-4">
            ঢাকা বিশ্ববিদ্যালয়ের জন্য প্রকৃত পরিবর্তনের জন্য প্রস্তুত?
          </h2>
          <p className="text-center text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            আমি কেবল প্রতিশ্রুতি দিচ্ছি না - আমি ফলাফল প্রদানের জন্য এসেছি। চলুন
            একসাথে ঢাকা বিশ্ববিদ্যালয়ের ডিজিটাল ভবিষ্যৎ গড়ি।
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="group bg-white text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Users className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              যোগাযোগ করুন
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
