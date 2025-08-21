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
      title: "সহ-প্রতিষ্ঠাতা ও সিইও, IT For All",
      company: "একাডেমিক অ্যাফিলিয়েশন",
      period: "২০২২ - বর্তমান",
      description:
        "আমরা 'IT For All' শুরু করেছিলাম একটা সহজ লক্ষ্য নিয়ে: বিশ্ববিদ্যালয়ের শিক্ষার্থীদের ভবিষ্যতের জন্য প্রয়োজনীয় প্রযুক্তিগত দক্ষতায় পারদর্শী করে তোলা। আমি নিজে তাদের জন্য হাতে-কলমে প্রশিক্ষণ প্রোগ্রাম ডিজাইন ও পরিচালনার কাজটা দেখি।",
      techTerms:
        "Web Development, AI Tools, Research Platforms, Learning Management Systems",
    },
    {
      icon: Code,
      title: "ডেভেলপার ও আইটি পরামর্শক",
      company: "বাংলাদেশ সুপ্রিম কোর্ট (আইসিটি)",
      period: "২০২১ - ২০২২",
      description:
        "আমার দেশের বিচার ব্যবস্থাকে আধুনিক করার এক অসাধারণ সুযোগ হয়েছিল। সুপ্রিম কোর্টের আইসিটি অবকাঠামো উন্নত করার জন্য আমি প্রযুক্তিগত সহায়তা দিয়েছি এবং ডিজিটাল সলিউশন বাস্তবায়নে কাজ করেছি।",
      techTerms:
        "IT Consulting, System Integration, Database Management, Cybersecurity",
    },
    {
      icon: Cpu,
      title: "এআই ইঞ্জিনিয়ার ও ডেটা সায়েন্টিস্ট",
      company: "গুগল ডিপমাইন্ড প্রজেক্ট, টুরিং ক্যালিফোর্নিয়া, USA",
      period: "২০২৩ - বর্তমান",
      description:
        "একটি আন্তর্জাতিক গবেষক দলের সাথে আমি বিশ্বের সর্বাধুনিক মেশিন লার্নিং প্রকল্পে কাজ করি। আমার মূল লক্ষ্য হলো এমন উন্নত অ্যালগরিদম ও নিউরাল নেটওয়ার্ক তৈরি করা, যা কৃত্রিম বুদ্ধিমত্তার জগতে নতুন দিগন্ত উন্মোচন করবে।",
      techTerms:
        "Deep Learning, Transformer Models, NLP, Reinforcement Learning, TensorFlow, PyTorch",
    },
  ];

  const achievements = [
    {
      icon: Users,
      title: "YSSE সেমিনারে মূল বক্তা",
      description:
        "YSSE-এর 'AI in Leadership' সেমিনারে মূল বক্তা হিসেবে আমন্ত্রণ পাওয়া আমার জন্য অত্যন্ত সম্মানের ছিল। আমি বাংলাদেশের তরুণ উদ্যোক্তাদের সাথে আমার অভিজ্ঞতা ভাগ করে নিয়েছি এবং আলোচনা করেছি কীভাবে প্রযুক্তি নেতৃত্বকে বদলে দিতে পারে।",
      location: "বাংলাদেশ",
    },
    {
      icon: Trophy,
      title: "ওয়ার্ল্ড ইয়ুথ লিডারশিপ কনফারেন্সে প্যানেলিস্ট",
      description:
        "দুবাইয়ের বিশ্বমঞ্চে বাংলাদেশের প্রতিনিধিত্ব করা আমার জন্য একটি গর্বের মুহূর্ত ছিল। একজন প্যানেলিস্ট হিসেবে আমি বিশ্বের বিভিন্ন দেশ থেকে আসা তরুণ নেতাদের কাছে প্রযুক্তি ও নেতৃত্বের ভবিষ্যৎ নিয়ে আমাদের দেশের perspective তুলে ধরেছি।",
      location: "দুবাই, UAE",
    },
    {
      icon: Award,
      title: "জাতীয় সাইবার আইন বিষয়ে পরামর্শ",
      description:
        "বাংলাদেশের সাইবার নিরাপত্তা আইন ও নীতিমালা নিয়ে মাননীয় প্রধান প্রসিকিউটরের সাথে পরামর্শ করার মতো গুরুত্বপূর্ণ দায়িত্ব আমার উপর ছিল। দেশের আইনি কাঠামোকে আরও শক্তিশালী করতে আমার প্রযুক্তিগত জ্ঞান কাজে লাগানোর সুযোগ পেয়ে আমি গর্বিত।",
      location: "বাংলাদেশ",
    },
  ];

  const duWorks = [
    {
      icon: BookOpen,
      title: "'IT For All'-এর মাধ্যমে ৬০০০+ শিক্ষার্থীকে প্রশিক্ষণ",
      description:
        "ঢাকা বিশ্ববিদ্যালয়ে আমাদের 'IT For All' উদ্যোগের মাধ্যমে আমরা ৬,০০০ এরও বেশি সহপাঠীকে AI, ওয়েব ডেভেলপমেন্ট, LaTeX এবং উচ্চশিক্ষার প্রস্তুতি বিষয়ে বিনামূল্যে প্রশিক্ষণ দিয়েছি। অনলাইন ও অফলাইন সেশনের মাধ্যমে আমরা এই কাজটি করেছি।",
      link: "https://it-for-all.com/",
      facebook: "https://www.facebook.com/share/g/1E3jefXZMT/",
      image: "/image12.png",
    },
    {
      icon: Users,
      title: "ক্যারিয়ার ও সিভি কর্মশালা",
      description:
        "মুহসিন হলের শিক্ষার্থীদের সাথে আমি তাদের ক্যারিয়ার পরিকল্পনা নিয়ে একটি বাস্তবসম্মত আলোচনায় বসেছিলাম। কীভাবে একটি চমৎকার সিভি তৈরি করা যায় থেকে শুরু করে রিমোট জব খোঁজার উপায় পর্যন্ত সবকিছু নিয়ে কথা বলেছি, যাতে তারা নিজেদের ভবিষ্যৎ পথটা সহজে খুঁজে নিতে পারে।",
      image: "/image14.png",
    },
    {
      icon: GraduationCap,
      title: "ডিজিটাল ঢাকা বিশ্ববিদ্যালয়ের পক্ষে প্রস্তাবনা",
      description:
        "‘DU Digitalization Program’-এ একজন ছাত্র প্রতিনিধি হিসেবে আমি আমাদের ক্যাম্পাসকে আরও আধুনিক করার জন্য প্রস্তাবনাগুলো সরাসরি ডিন এবং প্রো-ভিসি (শিক্ষা) মহোদয়ের কাছে উপস্থাপন করি। শিক্ষার্থী হিসেবে আমাদের চাওয়াগুলো আমি তাদের সামনে তুলে ধরেছি।",
      image: "/image17.jpg",
    },
    {
      icon: UtensilsCrossed,
      title: "নতুন ক্যান্টিনের জন্য উদ্যোগ",
      description:
        "মোকাররম ভবনের আশেপাশে শিক্ষার্থীদের একটি ভালো ক্যান্টিনের প্রয়োজন দেখে, আমি একটি নতুন ক্যান্টিন স্থাপনের জন্য উদ্যোগ নিই। আমরা শুধু মুখেই বলিনি, বরং একটি আনুষ্ঠানিক প্রস্তাব জমা দিয়েছি এবং দাবিটি বাস্তবায়নের জন্য সচেতনতা তৈরি করেছি।",
      image: "/image3.png",
    },
    {
      icon: Building2,
      title: "শিক্ষার্থী উদ্যোক্তাদের জন্য কর্মক্ষেত্রের ব্যবস্থা",
      description:
        "বিশ্ববিদ্যালয়ের তরুণ উদ্ভাবকদের জন্য কথা বলতে আমি ইঞ্জিনিয়ারিং ফ্যাকাল্টির ডিন ম্যাডামের সাথে দেখা করি। ফলাফল? আমরা তরুণ উদ্যোক্তাদের জন্য ২১ তলা ভবনের একটি সম্পূর্ণ ফ্লোর অফিস স্পেস হিসেবে বরাদ্দের প্রতিশ্রুতি আদায় করতে সক্ষম হয়েছি।",
      image: "/image11.png",
    },
    {
      icon: Cpu,
      title: "হাতে-কলমে এআই ও আইটি কর্মশালা",
      description:
        "আমাদের 'AI and IT For All' প্রোগ্রামে ফার্মেসি লেকচার থিয়েটার প্রায় ১০০ জন শিক্ষার্থীর অংশগ্রহণে পূর্ণ ছিল। এটা শুধু কোনো লেকচার ছিল না, এটি ছিল একটি হাতে-কলমে কর্মশালা, যেখানে আমরা সবাই একসাথে কৃত্রিম বুদ্ধিমত্তার জগতে ডুব দিয়েছিলাম।",
      image: "/image15.jpg",
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
              আমার প্রতিটি উদ্যোগের লক্ষ্য হলো{" "}
              <span className="font-semibold text-primary">
                শিক্ষার্থীদের যুগোপযোগী দক্ষতায় পারদর্শী করা
              </span>
              ,{" "}
              <span className="font-semibold text-primary">
                আধুনিক AI-সিস্টেম তৈরি করা
              </span>{" "}
              এবং{" "}
              <span className="font-semibold text-primary">বিশ্ব দরবারে</span>{" "}
              বাংলাদেশের ভাবমূর্তি উজ্জ্বল করা।
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

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="w-full h-full md:w-80 md:h-96 bg-muted rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/image7.png?height=400&width=320"
                alt=""
                width={320}
                height={400}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-row md:flex-col gap-4">
              <div className="w-full h-32 md:w-24 md:h-28 bg-muted rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/image9.png?height=112&width=96"
                  alt=""
                  width={96}
                  height={112}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="w-full h-32 md:w-24 md:h-28 bg-muted rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/image1.png?height=112&width=96"
                  alt=""
                  width={96}
                  height={112}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="w-full h-32 md:w-24 md:h-28 bg-muted rounded-lg overflow-hidden shadow-md">
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
          ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য আমার নেওয়া কিছু বাস্তব
          উদ্যোগ এখানে তুলে ধরলাম
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
                    height={168}
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
            আমাদের বিশ্ববিদ্যালয়কে বিশ্বমঞ্চে সেরা হিসেবে দেখার জন্য আমার
            সুস্পষ্ট লক্ষ্যগুলো এখানে দেওয়া হলো
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
            প্রযুক্তি শিল্পে সরাসরি কাজ করার মাধ্যমে আমি যে অভিজ্ঞতা ও দক্ষতা
            অর্জন করেছি, তা-ই আমার শক্তি
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
            এখানে আমার সেইসব উদ্যোগের কথা বলা হয়েছে, যা সরাসরি শিক্ষার্থীদের
            জীবনে ইতিবাচক পরিবর্তন এনেছে
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
            আসুন, একসাথে গড়ি আমাদের স্বপ্নের বিশ্ববিদ্যালয়
          </h2>
          <p className="text-center text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            আমি শুধু প্রতিশ্রুতি দিতে আসিনি, আমি কাজ করতে এসেছি। চলুন, সবাই মিলে
            ঢাকা বিশ্ববিদ্যালয়ের জন্য একটি ডিজিটাল ভবিষ্যৎ নিশ্চিত করি
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
