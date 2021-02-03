export const config = {
  serverURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://petpersonalities.herokuapp.com/"
};
