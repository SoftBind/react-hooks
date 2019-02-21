import { useEffect, useState } from "react";
import createActivityDetector from "activity-detector";

const IDLE = "idle";
const ACTIVE = "active";

export default function useIdle(opt) {
  const [idle, setIdle] = useState(false);
  const activityDetector = createActivityDetector(opt);

  useEffect(() => {
    activityDetector.on(IDLE, () => setIdle(true));
    activityDetector.on(ACTIVE, () => setIdle(false));
  });

  return idle;
}
