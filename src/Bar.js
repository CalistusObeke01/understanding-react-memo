import { memo } from "react";

export const Bar = memo(({ order }) => {
  console.log(`Bartender, can i have a bottle of ${order}`);
  return (
    <div>
      <b>Bartender:</b>&nbsp; Why not, here is your bottle of {order}
    </div>
  );
});
