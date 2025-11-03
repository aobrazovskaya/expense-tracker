export default function InputLabel({
  htmlFor,
  caption,
  children,
}: {
  htmlFor?: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-3">
      <label htmlFor={htmlFor} className="text-gray-default mb-2 block text-xs font-semibold">
        {children}
      </label>
      <input
        type="text"
        id={htmlFor}
        placeholder="Text input"
        className="focus:border-primary focus:ring-primary-light border-gray-border h-11 w-full rounded rounded-2xl border p-3 text-sm font-medium focus:ring-2 focus:outline-none"
      />
      {caption && (
        <caption className="text-primary px-3 py-2 text-xs font-semibold">{caption}</caption>
      )}
    </div>
  );
}
