import { Tag } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { ImClock } from "react-icons/im";

type TimezoneTagProps = {
  timeZone: string;
};

const TimezoneTag: React.FC<TimezoneTagProps> = ({ timeZone }) => {
  const [timeFormat, setTimeFormat] = useState<Intl.DateTimeFormatOptions>({
    timeZone,
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZoneName: "short",
  });
  const [timeText, setTimeText] = useState<string>();

  const updateTime = useCallback(() => {
    let now = new Date();
    let localeText = now.toLocaleTimeString("en-US", timeFormat);
    setTimeText(localeText);
  }, [timeZone]);

  useEffect(() => setTimeFormat((f) => ({ ...f, timeZone })), [timeZone]);
  useEffect(updateTime, [timeFormat]);

  useEffect(() => {
    let now = new Date();
    let msUntilNextMinute =
      1000 * (60 - now.getSeconds()) + (1000 - now.getMilliseconds());
    let updateInterval: number | undefined = undefined;

    updateTime();

    // Queue repeating time change
    let delayTimeout: number | undefined = setTimeout(() => {
      updateTime();
      updateInterval = setInterval(updateTime, 60 * 1000);
      delayTimeout = undefined;
    }, msUntilNextMinute);

    return () => {
      if (delayTimeout) {
        clearTimeout(delayTimeout);
      }

      if (updateInterval) {
        clearInterval(updateInterval);
      }
    };
  }, []);

  return (
    <Tag.Root>
      <Tag.StartElement>
        <ImClock />
      </Tag.StartElement>
      <Tag.Label>{timeText}</Tag.Label>
    </Tag.Root>
  );
};

export default TimezoneTag;
