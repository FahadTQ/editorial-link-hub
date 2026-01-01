import { Briefcase, Mail } from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import LinkButton from "@/components/LinkButton";

import profilePhoto from "@/assets/profile-photo.jpg";

const links = [
  {
    href: "https://example.com/portfolio",
    label: "Portfolio",
    icon: Briefcase,
  },
  {
    href: "mailto:AlqadeerF@gmail.com",
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
          name="Fahad Alqadeer"
          bio="CyberSecurity Consultant"
          imageUrl={profilePhoto}
          phone="+966 53 304 5761"
          email="AlqadeerF@gmail.com"
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
      </main>
    </div>
  );
};

export default Index;
