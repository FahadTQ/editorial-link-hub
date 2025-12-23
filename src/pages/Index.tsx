import { Briefcase, FileText, Youtube, ShoppingBag, Mail } from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import LinkButton from "@/components/LinkButton";
import SocialLinks from "@/components/SocialLinks";
import profilePhoto from "@/assets/profile-photo.jpg";

const links = [
  {
    href: "https://example.com/portfolio",
    label: "Portfolio",
    icon: Briefcase,
  },
  {
    href: "https://example.com/blog",
    label: "Latest Writing",
    icon: FileText,
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: Youtube,
  },
  {
    href: "https://example.com/shop",
    label: "Shop",
    icon: ShoppingBag,
  },
  {
    href: "mailto:hello@example.com",
    label: "Contact",
    icon: Mail,
    highlighted: true,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-xl mx-auto px-6 py-12 md:py-20">
        <ProfileHeader
          name="Alexandra Reid"
          bio="Developer, creator, and coffee enthusiast. Building cool things on the internet."
          imageUrl={profilePhoto}
          phone="+1 (555) 123-4567"
          email="hello@alexandrareid.com"
        />

        <nav className="border-t border-border" aria-label="Main links">
          {links.map((link, index) => (
            <div
              key={link.label}
              className={`animate-fade-up`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <LinkButton
                href={link.href}
                label={link.label}
                icon={link.icon}
                highlighted={link.highlighted}
              />
            </div>
          ))}
        </nav>

        <SocialLinks />
      </main>
    </div>
  );
};

export default Index;
