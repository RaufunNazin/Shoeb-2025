"use client";

import type React from "react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Copy,
  Check,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showAnonymous, setShowAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [anonymousMessage, setAnonymousMessage] = useState("");
  const { toast } = useToast();

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
      toast({
        title: "Copied!",
        description: `${
          type === "email" ? "Email" : "Phone number"
        } copied to clipboard`,
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "বার্তা পাঠানো হয়েছে!",
      description: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমি শীঘ্রই উত্তর দেব।",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleAnonymousOpinion = () => {
    if (anonymousMessage.trim()) {
      toast({
        title: "বেনামী মতামত পাঠানো হয়েছে!",
        description: "আপনার মতামত বেনামীভাবে পাঠানো হয়েছে। ধন্যবাদ!",
      });
      setAnonymousMessage("");
      setShowAnonymous(false);
    }
  };

  return (
    <div className="min-h-screen bg-background duration-200">
      <Navbar />

      <div className="container mx-auto px-4 py-16 transition-all duration-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              যোগাযোগ করুন
            </Badge>
            <h1 className="text-4xl font-bold font-serif mb-6 text-foreground">
              যোগাযোগ
            </h1>
            <p className="text-lg text-muted-foreground">
              ঢাবির জন্য আমার plan নিয়ে প্রশ্ন আছে? আপনার idea share করতে চান?
              যোগাযোগ করুন!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="flex flex-col justify-between group transition-all duration-200 bg-card border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 glow-animation rounded-lg"></div>

              <CardHeader className="relative z-10">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 text-card-foreground">
                  যোগাযোগ করুন
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 justify-between gap-3">
                {/* Email Section */}
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-0 right-0 z-20 group/btn hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    onClick={() =>
                      copyToClipboard("ahadbinislam1111@gmail.com", "email")
                    }
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    )}
                  </Button>
                  <div className="flex items-center gap-3 mb-1">
                    <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300 text-primary" />
                    <p className="text-lg font-medium">
                      ahadbinislam1111@gmail.com
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm mt-1">
                    Professional inquiries এবং collaboration এর জন্য
                  </p>
                </div>

                {/* Phone Section */}
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-0 right-0 z-20 group/btn hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    onClick={() => copyToClipboard("+8801798343401", "phone")}
                  >
                    {copiedPhone ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    )}
                  </Button>
                  <div className="flex items-center gap-3 mb-1">
                    <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300 text-primary" />
                    <p className="text-lg font-medium">+880 1798 343401</p>
                  </div>

                  <p className="text-muted-foreground text-sm mt-1">
                    Urgent matters এবং direct conversation এর জন্য
                  </p>
                </div>

                {/* Location Section */}
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300 text-primary" />
                    <p className="text-lg font-medium">
                      ফজলুল হক মুসলিম হল, ঢাকা বিশ্ববিদ্যালয়
                    </p>
                  </div>
                  <div className="w-full h-full bg-muted rounded-md overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.600722254732!2d90.40101977524508!3d23.725948478687076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8fab226dff1%3A0xb40c1c668d0c23a7!2sFazlul%20Huq%20Muslim%20Hall!5e0!3m2!1sen!2snl!4v1755764539849!5m2!1sen!2snl"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-md"
                    ></iframe>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-200 bg-card border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 glow-animation rounded-lg"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="group-hover:text-primary transition-colors duration-300 text-card-foreground">
                  আমাকে একটি বার্তা পাঠান
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  ঢাবির জন্য আমার vision নিয়ে প্রশ্ন থাকুক, collaboration করতে
                  চান, নাকি শুধু hello বলতে চান - আমি আপনার কথা শুনতে চাই!
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                {!showAnonymous ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-card-foreground"
                      >
                        নাম
                      </label>
                      <Input
                        id="name"
                        placeholder="আপনার নাম"
                        className="mt-1 bg-background border-border text-foreground"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-card-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="mt-1 bg-background border-border text-foreground"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-card-foreground"
                      >
                        বিষয়
                      </label>
                      <Input
                        id="subject"
                        placeholder="আপনার মনে কী আছে?"
                        className="mt-1 bg-background border-border text-foreground"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-card-foreground"
                      >
                        বার্তা
                      </label>
                      <Textarea
                        id="message"
                        placeholder="আপনি কী ভাবছেন তা বলুন..."
                        className="mt-1 min-h-[120px] resize-none bg-background border-border text-foreground"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        className="flex-1 group/btn bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Mail className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        বার্তা পাঠান
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowAnonymous(true)}
                        className="group/btn border-border text-muted-foreground hover:bg-muted bg-transparent"
                      >
                        <MessageSquare className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        বেনামী মতামত
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="anonymousMessage"
                        className="text-sm font-medium text-card-foreground"
                      >
                        বেনামী মতামত
                      </label>
                      <Textarea
                        id="anonymousMessage"
                        placeholder="আপনার মতামত লিখুন... (কোনো personal information প্রয়োজন নেই)"
                        className="mt-1 min-h-[200px] resize-none bg-background border-border text-foreground"
                        value={anonymousMessage}
                        onChange={(e) => setAnonymousMessage(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={handleAnonymousOpinion}
                        className="flex-1 group/btn bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <MessageSquare className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        মতামত পাঠান
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowAnonymous(false)}
                        className="group/btn border-border text-muted-foreground hover:bg-muted bg-transparent"
                      >
                        ফিরে যান
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
