import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import config from "@/config";

dayjs.extend(utc);
dayjs.extend(timezone);

type PostDates = {
  pubDatetime: Date;
  modDatetime?: Date | null;
  timezone?: string;
};

/** Returns display + ISO strings for the most relevant post date. */
export function formatPostDate({
  pubDatetime,
  modDatetime,
  timezone: postTimezone,
}: PostDates) {
  const isUpdated = Boolean(modDatetime && modDatetime > pubDatetime);
  const date = dayjs(isUpdated ? modDatetime : pubDatetime).tz(
    postTimezone ?? config.site.timezone
  );
  return {
    isUpdated,
    label: date.format("D MMM YYYY"),
    iso: date.toISOString(),
  };
}
