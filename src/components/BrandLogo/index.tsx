export function BrandLogo() {
    return (
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center bg-aged-mustard">
          <span className="text-lg font-bold text-accent-foreground">
            T
          </span>
        </div>
  
        <div className="flex flex-col">
          <p className="text-lg font-bold leading-5 text-concrete">
            TIMEKEEPER
          </p>
          <p className="text-xs text-aged-mustard">
            VTR TECHNOLOGIES
          </p>
        </div>
      </div>
    );
  }