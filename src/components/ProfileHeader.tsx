import { Phone, Mail } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  phone?: string;
  email?: string;
}

const ProfileHeader = ({ name, title, bio, imageUrl, phone, email }: ProfileHeaderProps) => {
  return (
    <header className="text-center mb-12 animate-fade-up">
      {imageUrl && (
        <div className="mb-8">
          <div className="w-28 h-28 mx-auto border-2 border-foreground overflow-hidden">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      )}
      
      <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-3">
        {name}
      </h1>
      
      <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
        {title}
      </p>
      
      {(phone || email) && (
        <div className="flex items-center justify-center gap-6 mb-6">
          {phone && (
            <a 
              href={`tel:${phone}`} 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone size={14} />
              <span className="font-body">{phone}</span>
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={14} />
              <span className="font-body">{email}</span>
            </a>
          )}
        </div>
      )}
      
      <div className="divider-line max-w-16 mx-auto mb-6" />
      
      <p className="font-body text-base text-muted-foreground max-w-md mx-auto leading-relaxed text-balance">
        {bio}
      </p>
    </header>
  );
};

export default ProfileHeader;
