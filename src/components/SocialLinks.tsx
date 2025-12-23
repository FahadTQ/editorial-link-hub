import { Github, Linkedin, Instagram } from "lucide-react";

interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

// Custom X (Twitter) icon since Lucide doesn't have the new X logo
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks: SocialLink[] = [
  { platform: "GitHub", href: "https://github.com", icon: <Github size={22} /> },
  { platform: "X", href: "https://x.com", icon: <XIcon /> },
  { platform: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={22} /> },
  { platform: "Instagram", href: "https://instagram.com", icon: <Instagram size={22} /> },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5 pt-8 animate-fade-up animation-delay-600">
      {socialLinks.map((social) => (
        <a
          key={social.platform}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.platform}
          className="text-foreground hover:text-muted-foreground transition-colors duration-200"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
