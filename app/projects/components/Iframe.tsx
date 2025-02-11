import React, { useEffect, useState } from "react";

const Iframe = () => {
  const [loadedIframe, setLoadedIframe] = useState(false);

  useEffect(() => {
    setLoadedIframe(false);
  }, []);

  return (
    <div>
      <h3 className="text-center text-xl -mb-8 pt-10">Demo</h3>
      <iframe
        src="https://parallaxui.com/embed/41"
        width="410"
        height="410"
        className={`transition-opacity duration-500 ${
          !loadedIframe ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoadedIframe(true)}
      ></iframe>
    </div>
  );
};

export default Iframe;
