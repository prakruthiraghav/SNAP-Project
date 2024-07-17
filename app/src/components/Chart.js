import React, { useEffect } from "react";

const Chart = ({ scriptUrl, containerId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "ers_chart_widget";
    script.src = scriptUrl;
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [scriptUrl]);

  return (
    <div>
      <div id="ers_widget_container"></div>
    </div>
  );
};

export default Chart;
