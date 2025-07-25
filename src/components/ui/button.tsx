// src/components/ui/button.tsx
export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
    >
      {children}
    </button>
  );
}
