import ProfileHeader from "@/components/ProfileHeader";
import LinkButton from "@/components/LinkButton";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import profilePhoto from "@/assets/profile-photo.jpg";

const links = [
  {
    href: "https://example.com/portfolio",
    label: "Portfolio",
    description: "View my latest work and projects",
  },
  {
    href: "https://example.com/blog",
    label: "Blog",
    description: "Thoughts on design, creativity & life",
  },
  {
    href: "https://example.com/newsletter",
    label: "Newsletter",
    description: "Join 5,000+ readers every week",
  },
  {
    href: "https://example.com/book",
    label: "Book a Call",
    description: "Let's discuss your next project",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-lg mx-auto px-6 py-16 md:py-24">
        <ProfileHeader
          name="Alexandra Reid"
          title="Creative Director & Designer"
          bio="Crafting meaningful digital experiences at the intersection of design, technology, and human connection."
          imageUrl={profilePhoto}
          phone="+1 (555) 123-4567"
          email="hello@alexandrareid.com"
        />

        <nav className="space-y-3 mb-12" aria-label="Main links">
          {links.map((link, index) => (
            <div
              key={link.label}
              className={`animate-fade-up animation-delay-${(index + 2) * 100}`}
            >
              <LinkButton
                href={link.href}
                label={link.label}
                description={link.description}
              />
            </div>
          ))}
        </nav>

        <SocialLinks />

        <Footer />
      </main>
    </div>
  );
};

export default Index;
