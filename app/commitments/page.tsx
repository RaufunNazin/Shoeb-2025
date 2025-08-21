import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, BookOpen, Users, Smartphone, Globe } from "lucide-react";

export default function CommitmentsPage() {
  const commitments = [
    {
      icon: CreditCard,
      title: "এক শিক্ষার্থী, এক আইডি",
      description:
        "ঢাবি শিক্ষার্থীদের জন্য একটি সিঙ্গেল আইডি থাকবে, এই আইডি দিয়ে রেজিস্টার বিল্ডিং, হল এবং ডিপার্টমেন্ট এর সব অফিসিয়াল কাজ এক সাথে এক্সেস করা যাবে। ঢাবির আইডি কার্ডের (NFC) মাধ্যমে পেমেন্ট,লাইব্রেরি এক্সেস,এটেন্ডেন্স সিস্টেম প্রত্যেক ডিপার্টমেন্ট এ বাস্তবায়ন করা হবে।",
    },
    {
      icon: BookOpen,
      title: "বিশ্বমানের শিক্ষার সুবিধা",
      description:
        'হার্ভার্ড, এমআইটির মত বিশ্বখ্যাত কোর্স গুলো শিক্ষার্থীদের জন্য উন্মুক্ত করা হবে এবং "IT for All" এর কার্যক্রমের মাধ্যমে ঢাবির শিক্ষার্থীদের Information Technology এবং Artificial Intelligence বিষয়ে দক্ষ করে তোলা হবে।প্রত্যেক ডিপার্টমেন্ট এ আইটি কমিউনিটির কার্যক্রম আরো বৃদ্ধি করতে প্রশাসনের সাথে কাজ করা হবে।',
    },
    {
      icon: Users,
      title: "উন্নত ক্যারিয়ারের সুযোগ",
      description:
        "প্রযুক্তি এবং দক্ষতাভিত্তিক সাবজেক্ট এর সিটের সংখ্যা বাড়ানো হবে এবং বিজ্ঞান ও প্রযুক্তির প্রসারে বরাদ্দ আনা হবে। আন্ডারগ্র‍্যাড চতুর্থ বর্ষ থেকে ডিপার্টমেন্ট গুলোতে ইন্টারনশিপ এবং পার্ট টাইম চাকরি, রিমোট জব এবং ফ্রিল্যান্সিং এর ব্যবস্থা রাখতে কার্যকরী ভূমিকা রাখবো।",
    },
    {
      icon: Smartphone,
      title: "স্মার্ট হল ব্যবস্থাপনা",
      description:
        "স্মার্ট অ্যাাপের মাধ্যমে বিশ্ববিদ্যালয়ের হলের সিট মনিটরিং সিস্টেম চালু করা হবে এবং হলের সকল কার্যক্রম ডিজিটাল করা হবে। এতে হলগুলাতে সিট অবৈধভাবে দখলের সুযোগ থাকবেনা।",
    },
    {
      icon: Globe,
      title: "আন্তর্জাতিক বিজ্ঞান ও প্রযুক্তি মেলা",
      description:
        "ক্যাম্পাসে আন্তর্জাতিক বিজ্ঞান ও প্রযুক্তি মেলার আয়োজন করা হবে এবং রেগুলার দেশের বিভিন্ন বিশ্ববিদ্যালয়ের অংশগ্রহণে সেমিনার, কনফারেন্স এর আয়োজন করা হবে।",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              আমার অঙ্গীকারসমূহ
            </Badge>
            <h1 className="text-4xl font-bold font-serif mb-6">
              ঢাকা বিশ্ববিদ্যালয়ের প্রতি আমার অঙ্গীকারসমূহ
            </h1>
            <p className="text-xl text-muted-foreground">
              ঢাবিকে একটি আধুনিক, ডিজিটাল বিশ্ববিদ্যালয়ে রূপান্তরিত করার পাঁচটি
              মূল প্রতিশ্রুতি
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {commitments.map((commitment, index) => (
            <Card key={index} className="group transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <commitment.icon className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge
                        variant="outline"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      >
                        {index + 1}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {commitment.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {commitment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            এই অঙ্গীকারগুলো বাস্তবায়নে আমাকে সাহায্য করুন
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            ডাকসু ২০২৫-এ আপনার ভোট আমাকে এই রূপান্তরমূলক পরিবর্তনগুলো বাস্তবায়ন
            করতে এবং ঢাকা বিশ্ববিদ্যালয়ের জন্য একটি ডিজিটাল ভবিষ্যৎ গড়তে সক্ষম
            করবে।
          </p>
          <p className="text-lg px-6 py-2">
            বিজ্ঞান ও প্রযুক্তি সম্পাদকের জন্য ভোট দিন - ডাকসু ২০২৫
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
