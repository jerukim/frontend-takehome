import confetti from "canvas-confetti";
import { tailwind } from "../styles/config";
import { triangle } from "../styles/shapes";

export function ConfettiButton({
  className,
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();

    onClick?.(event);

    const audio = new Audio("/audio/Ping.wav");
    audio.play();

    confetti({
      particleCount: 500,
      spread: 360,
      startVelocity: 50,
      gravity: 2,
      ticks: 100,
      colors: [tailwind.theme.colors.green],
      shapes: [triangle],
      origin: {
        x: (rect.x + rect.width / 2) / window.innerWidth,
        y: (rect.y + rect.height / 2) / window.innerHeight,
      },
      scalar: 3,
    });
  }

  return <button onClick={handleClick} {...props} />;
}
