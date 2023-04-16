import { format } from "date-fns";

export default function dateFormat(date: string | undefined) {
  if (!date) return;
  return format(new Date(date), "io MMMM yyyy");
}
