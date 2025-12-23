import { Instagram, Twitter, Linkedin, Github, Mail, Youtube } from "lucide-react";

interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  { platform: "Instagram", href: "https://instagram.com", icon: <Instagram size={18} /> },
  { platform: "Twitter", href: "https://twitter.com", icon: <Twitter size={18} /> },
  { platform: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={18} /> },
  { platform: "GitHub", href: "https://github.com", icon: <Github size={18} /> },
  { platform: "YouTube", href: "https://youtube.com", icon: <Youtube size={18} /> },
  { platform: "Email", href: "mailto:hello@example.com", icon: <Mail size={18} /> },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-3 animate-fade-up animation-delay-600">
      {socialLinks.map((social) => (
        <a
          key={social.platform}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.platform}
          className="social-icon"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
