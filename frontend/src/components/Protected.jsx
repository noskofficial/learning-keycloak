import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Protected = ({ token }) => {
  const isRun = useRef(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("/socials", config)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return data ? (
    <>
      <h1>User socials</h1>
      {Object.entries(data).map(([k, v]) => {
        return (
          <div key={k}>
            {k}: {<a href={v}>{k}</a>}
          </div>
        );
      })}
    </>
  ) : (
    <div>Protected</div>
  );
};

export default Protected;
