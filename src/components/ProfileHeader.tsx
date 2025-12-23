interface ProfileHeaderProps {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
}

const ProfileHeader = ({ name, title, bio, imageUrl }: ProfileHeaderProps) => {
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
      
      <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
        {title}
      </p>
      
      <div className="divider-line max-w-16 mx-auto mb-6" />
      
      <p className="font-body text-base text-muted-foreground max-w-md mx-auto leading-relaxed text-balance">
        {bio}
      </p>
    </header>
  );
};

export default ProfileHeader;
