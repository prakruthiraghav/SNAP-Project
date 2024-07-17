import React from "react";

const url =
  "https://public.tableau.com/views/SNAP_17211359810550/Map?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=yes";

const Viz = () => (
  <div>
    <iframe
      src={url}
      width="100%"
      height="600px"
      title="New Tableau Visualization"
    ></iframe>
  </div>
);

export default Viz;
