interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  error?: boolean;
}
export default function Input({ helperText, error, placeholder, ...rest }: InputProps) {
  return (
    <div className="min-w-82">
      <input
        placeholder={placeholder || 'Text input'}
        className="focus:border-primary focus:ring-primary-light border-gray-border h-11 w-full rounded rounded-2xl border p-3 text-sm font-medium focus:ring-2 focus:outline-none"
        {...rest}
      />
      {error && helperText && (
        <p className="text-primary px-3 py-2 text-xs font-semibold">{helperText}</p>
      )}
    </div>
  );
}
