"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Trophy, Award, Users } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [showBanglaVision, setShowBanglaVision] = useState(true);
  const hobbies = ["অ্যানিমে", "ভ্রমণ", "ফুটবল"];

  const achievements = [
    {
      icon: Trophy,
      title: "World Youth Leadership Conference",
      description:
        "দুবাইয়ের মর্যাদাপূর্ণ সম্মেলনে প্যানেলিস্ট হিসেবে অংশগ্রহণ এবং বাংলাদেশের প্রতিনিধিত্ব।",
      location: "দুবাই, সংযুক্ত আরব আমিরাত",
    },
    {
      icon: Users,
      title: "IT For All প্রোগ্রাম",
      description:
        "ঢাকা বিশ্ববিদ্যালয়ে ৬০০০+ শিক্ষার্থীর জন্য ব্যাপক প্রযুক্তি প্রশিক্ষণ প্রোগ্রাম।",
      impact: "৬০০০+ শিক্ষার্থী প্রশিক্ষিত",
    },
    {
      icon: Award,
      title: "গবেষণা প্রকাশনা",
      description:
        "কৃত্রিম বুদ্ধিমত্তা এবং Machine Learning-এ একাধিক পিয়ার-রিভিউড গবেষণাপত্র প্রকাশ।",
      field: "AI ও ML গবেষণা",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-serif mb-6 text-black dark:text-white">
              আহাদ বিন ইসলাম শোয়েব সম্পর্কে
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              যুব নেতা, নীতিনির্ধারক, গবেষক, প্রকৌশলী
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge
                variant="secondary"
                className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
              >
                কম্পিউটার সায়েন্স ও ইঞ্জিনিয়ারিং
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                ঢাকা বিশ্ববিদ্যালয় ২০১৯-২০২০
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
              >
                ফজলুল হক মুসলিম হল
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="group transition-all duration-200 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 text-black dark:text-white">
                <GraduationCap className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                ঢাকা বিশ্ববিদ্যালয়ের জন্য আমার দৃষ্টিভঙ্গি
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
              <p>
                ঢাকা বিশ্ববিদ্যালয়ের ইতিহাস{" "}
                <span className="font-semibold text-primary">
                  শিক্ষার্থী বান্ধব ছিল না
                </span>{" "}
                বিগত{" "}
                <span className="font-semibold text-red-500">
                  ফ্যাসিস্ট এর আমলে
                </span>
                । ডাকসু না হওয়াতে বিশ্ববিদ্যালয়ের{" "}
                <span className="font-semibold text-primary">
                  নীতিনির্ধারণে শিক্ষার্থীদের অংশগ্রহণ
                </span>
                বন্ধ ছিল। বিশ্ববিদ্যালয় প্রশাসন শিক্ষার্থীদের সাথে আলোচনা
                ব্যতিরেকে সকল সিদ্ধান্ত নিয়ে{" "}
                <span className="font-semibold">
                  বিশ্ববিদ্যালয়ের পরিবেশ নষ্ট করেছে
                </span>
                ।
              </p>
              <p>
                সরকার ও প্রশাসনের খামখেয়ালীতে ঢাবি{" "}
                <span className="font-semibold text-primary">
                  তার ঐতিহ্য হারিয়েছে
                </span>
                ।
                <span className="font-semibold text-primary">
                  {" "}
                  কমেছে শিক্ষার গুণগত মান
                </span>
                । সুবিধাবাদী রাজনৈতিক দলগুলোর নিষ্পেষণে ঢাবি হারিয়েছে{" "}
                <span className="underline decoration-primary">
                  অতীতের গৌরব
                </span>
                ।
              </p>
              <p>
                তাইতো{" "}
                <span className="text-red-500 font-semibold">
                  ১৭ জুলাই ফ্যাসিস্ট সরকার
                </span>{" "}
                শিক্ষার্থীদের মতামতের তোয়াক্কা না করেই{" "}
                <span className="font-semibold">ছাত্রদের উপর গুলিবর্ষণ</span>{" "}
                করে হল ত্যাগে বাধ্য করে। বিশ্ববিদ্যালয়ের{" "}
                <span className="font-semibold text-primary">সিনেট</span>,{" "}
                <span className="font-semibold text-primary">সিন্ডিকেটে</span>{" "}
                প্রতিনিধি না থাকলে ঢাবি প্রশাসন বরাবরই{" "}
                <span className="text-red-500 font-semibold">
                  ফ্যাসিস্ট ভূমিকা
                </span>{" "}
                পালন করেছে।
              </p>
              <p>
                তাই শিক্ষার্থীদের প্রতিনিধি হিসেবে{" "}
                <span className="font-semibold underline decoration-primary">
                  ডাকসুতে যোগ্য প্রতিনিধি প্রেরণ
                </span>{" "}
                আপনার দায়িত্ব।
              </p>
              <p>
                বহিঃবিশ্বের সাথে তাল মিলিয়ে চলতে{" "}
                <span className="font-semibold text-primary">
                  শিক্ষার মান বাড়ানো
                </span>
                ,{" "}
                <span className="font-semibold text-primary">
                  আধুনিক প্রযুক্তিভিত্তিক শিক্ষা
                </span>{" "}
                এবং{" "}
                <span className="font-semibold text-primary">
                  ডিজিটালাইজেশন
                </span>{" "}
                অতীব জরুরী।
              </p>
              <p>
                বিশ্ববিদ্যালয়ের প্রযুক্তি ভিত্তিক সমস্যা সমাধানে এবং
                শিক্ষার্থীদের সর্বাত্মক উন্নয়নে{" "}
                <span className="font-semibold text-primary">
                  আমি প্রতিশ্রুতিবদ্ধ
                </span>
                ।
              </p>
              <p className="font-semibold text-primary">
                তাই আমি ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থীদের পক্ষে ডাকসু ২০২৫
                নির্বাচনে{" "}
                <span className="underline decoration-primary">
                  বিজ্ঞান ও প্রযুক্তি বিষয়ক সম্পাদক
                </span>{" "}
                পদে ভোটে দাঁড়ানোর জন্য মনঃস্থির করেছি। আপনাদের মূল্যবান ভোট দিয়ে
                আমাকে জয়যুক্ত করতে সহায়তা করুন এবং{" "}
                <span className="underline decoration-primary">
                  ডিজিটাল ঢাকা বিশ্ববিদ্যালয়
                </span>{" "}
                গড়ে তুলুন।
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-center mb-12 text-black dark:text-white">
              আমার অর্জনসমূহ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden transition-all duration-200 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                >
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/15 to-blue-400/15 opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 rounded-full"></div>
                  <CardHeader className="relative z-10">
                    <div className="mx-auto mb-4 p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full w-fit group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 group-hover:-rotate-12 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-lg text-center group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 text-black dark:text-white">
                      {item.title}
                    </CardTitle>
                    {item.location && (
                      <Badge
                        variant="outline"
                        className="mx-auto w-fit border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300"
                      >
                        {item.location}
                      </Badge>
                    )}
                    {item.impact && (
                      <Badge
                        variant="secondary"
                        className="mx-auto w-fit bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                      >
                        {item.impact}
                      </Badge>
                    )}
                    {item.field && (
                      <Badge
                        variant="outline"
                        className="mx-auto w-fit border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300"
                      >
                        {item.field}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-center text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center mb-12 text-black dark:text-white">
            ব্যক্তিগত আগ্রহ
          </h2>
          <Card className="group transition-all duration-200 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300 text-black dark:text-white">
                <Heart className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                কাজের বাইরে
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="আগ্রহ"
                  width={64}
                  height={64}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap gap-3 mb-4">
                  {hobbies.map((hobby, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 transition-colors duration-300"
                    >
                      {hobby}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  পেশাগত কাজের পাশাপাশি আমি বিভিন্ন সাংস্কৃতিক কার্যক্রমে
                  অংশগ্রহণ করি।
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
