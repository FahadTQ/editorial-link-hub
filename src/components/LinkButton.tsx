import { LucideIcon, ArrowUpRight } from "lucide-react";

interface LinkButtonProps {
  href: string;
  label: string;
  icon: LucideIcon;
  highlighted?: boolean;
  external?: boolean;
}

const LinkButton = ({ href, label, icon: Icon, highlighted = false, external = true }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group flex items-center justify-between py-5 border-b border-border transition-all duration-300 ${
        highlighted 
          ? "bg-muted -mx-4 px-4 hover:bg-accent" 
          : "hover:bg-muted/50 -mx-4 px-4"
      }`}
    >
      <div className="flex items-center gap-4">
        <Icon size={20} className="text-muted-foreground" />
        <span className={`font-body text-base ${highlighted ? "underline underline-offset-4" : ""}`}>
          {label}
        </span>
      </div>
      {highlighted && (
        <ArrowUpRight size={18} className="text-muted-foreground" />
      )}
    </a>
  );
};

export default LinkButton;
