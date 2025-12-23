interface LinkButtonProps {
  href: string;
  label: string;
  description?: string;
  external?: boolean;
}

const LinkButton = ({ href, label, description, external = true }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className="editorial-link group"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="font-body text-sm font-medium uppercase tracking-widest">
            {label}
          </span>
          {description && (
            <p className="text-xs text-muted-foreground mt-1 group-hover:text-primary-foreground/70 transition-colors">
              {description}
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

export default LinkButton;
