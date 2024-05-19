"use client";

interface ButtonProps {
  title: string;
  isPrimary: boolean;
  onClick: () => void;
}

export default function Button({ title, isPrimary, onClick }: ButtonProps) {
  return (
    <div className="flex items-center text-lg cursor-pointer" onClick={onClick}>
      <p
        className={`rounded-full py-2 px-4 hover:text-orange hover:bg-white ${
          isPrimary ? "text-white bg-orange " : ""
        }`}
      >
        {title}
      </p>
    </div>
  );
}
