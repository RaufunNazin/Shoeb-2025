import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-primary">
              আহাদ বিন ইসলাম শোয়েব
            </h3>
            <p className="text-sm text-muted-foreground">
              যুব নেতা, নীতিনির্ধারক, গবেষক, প্রকৌশলী
            </p>
            <p className="text-sm text-muted-foreground">
              বিজ্ঞান ও প্রযুক্তি সম্পাদক পদে প্রার্থী, ডাকসু ২০২৫
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">লিংকসমূহ</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/about"
                className="block hover:text-primary transition-colors"
              >
                আমার সম্পর্কে
              </Link>
              <Link
                href="/commitments"
                className="block hover:text-primary transition-colors"
              >
                আমার অঙ্গীকারসমূহ
              </Link>
              <Link
                href="/experience"
                className="block hover:text-primary transition-colors"
              >
                অভিজ্ঞতা
              </Link>
              <Link
                href="/contact"
                className="block hover:text-primary transition-colors"
              >
                যোগাযোগ
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">যোগাযোগের তথ্য</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>ফজলুল হক মুসলিম হল, ঢাকা বিশ্ববিদ্যালয়</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>ahadbinislam1111@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+880 1798 343401</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">আমাকে ফলো করুন</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ahadbin.shoeb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahad-bin-islam-shoeb-b69154373"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; ২০২৫ আহাদ বিন ইসলাম শোয়েব। সকল অধিকার সংরক্ষিত।</p>
          <p className="mt-1">ডাকসু ২০২৫ নির্বাচনী প্রচারণার জন্য নির্মিত</p>
        </div>
      </div>
    </footer>
  );
}
