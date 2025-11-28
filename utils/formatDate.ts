export default function formatDate(date?: Date | null): string | undefined {
  return date ? date.toLocaleDateString('en-GB') : undefined;
}
