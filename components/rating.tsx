// visual elements
interface StarProps {
  filled: boolean;
}
function Star({ filled }: StarProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4261 1.0215C11.6777 0.573722 12.3223 0.573722 12.5739 1.0215L15.9705 7.06759C16.0645 7.23494 16.2269 7.35291 16.4151 7.39061L23.2149 8.75266C23.7185 8.85353 23.9177 9.46661 23.5696 9.84422L18.869 14.943C18.7389 15.0841 18.6769 15.275 18.6992 15.4656L19.5051 22.3535C19.5647 22.8636 19.0432 23.2425 18.5765 23.0281L12.2748 20.1332C12.1004 20.0531 11.8996 20.0531 11.7252 20.1332L5.42348 23.0281C4.95677 23.2425 4.43526 22.8636 4.49494 22.3535L5.30081 15.4656C5.32311 15.275 5.26109 15.0841 5.13099 14.943L0.430434 9.84422C0.0823079 9.46661 0.281507 8.85353 0.785105 8.75266L7.5849 7.39061C7.77311 7.35291 7.93548 7.23494 8.02949 7.06759L11.4261 1.0215Z"
        fill={filled ? "#6100FF" : "#D9D9D9"}
      />
    </svg>
  );
}

interface RatingProps {
  rating: number;
}
export function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star filled={i + 1 < rating} key={i} />
      ))}
      <span className="pl-2 pt-1 text-[24px] font-[600]">{rating}</span>
    </div>
  );
}

