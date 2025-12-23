import { Phone, Mail } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  bio: string;
  imageUrl?: string;
  phone?: string;
  email?: string;
}

const ProfileHeader = ({ name, bio, imageUrl, phone, email }: ProfileHeaderProps) => {
  return (
    <header className="mb-10 animate-fade-up">
      {imageUrl && (
        <div className="mb-6">
          <div className="w-32 h-32 rounded-full border-2 border-border overflow-hidden">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      
      <h1 className="font-display text-4xl md:text-5xl font-normal italic tracking-tight mb-4">
        {name}
      </h1>
      
      <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4 max-w-md">
        {bio}
      </p>

      {(phone || email) && (
        <div className="flex items-center gap-5 text-muted-foreground">
          {phone && (
            <a 
              href={`tel:${phone}`} 
              className="flex items-center gap-2 text-sm hover:text-foreground transition-colors"
            >
              <Phone size={14} />
              <span className="font-body">{phone}</span>
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="flex items-center gap-2 text-sm hover:text-foreground transition-colors"
            >
              <Mail size={14} />
              <span className="font-body">{email}</span>
            </a>
          )}
        </div>
      )}
    </header>
  );
};

export default ProfileHeader;
