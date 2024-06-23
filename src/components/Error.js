import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h2>
        {err.status}: {err.statusText}
      </h2>
      <h1>⚠️Sorry, The page you are trying to access does not exist</h1>
    </div>
  );
};

export default Error;
