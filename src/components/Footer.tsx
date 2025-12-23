const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 pt-8 border-t border-border animate-fade-up animation-delay-700">
      <p className="text-center text-xs text-muted-foreground uppercase tracking-widest">
        © {currentYear} — All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
