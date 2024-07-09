type SliderProps = {
  id: string;
  name: string;
  min: number;
  max: number;
  now: number;
  steps: { value: number; label: string }[];
};

export default function Slider({
  id,
  name,
  min,
  max,
  now,
  steps,
}: SliderProps) {
  return (
    <div
      id={id}
      className="relative flex h-10"
      role="slider"
      aria-labelledby={`${name}-label`}
      aria-orientation="vertical"
      aria-label={name}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={now}
      tabIndex={0}
    >
      {/* Track */}
      <div className="relative flex h-[6px] w-full items-center justify-between rounded-full bg-black-25 px-0.5" />

      {/* Markers */}
      <div className="absolute flex h-[6px] w-full items-center justify-between rounded-full px-0.5">
        {steps.map(({ value, label }) => (
          <div key={value} className="relative flex flex-col items-center">
            <div className="h-3 w-[2px] rounded-full bg-gray-50"></div>
            <span className="absolute top-full translate-y-3 font-mono text-xxs text-white">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Thumb */}
      <div className="absolute size-4 -translate-y-1/3 rounded-full bg-gray" />
    </div>
  );
}
