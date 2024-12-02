"use client "
import { Descope } from "@descope/nextjs-sdk";
export const Page = () => {
 return (
    <Descope
      flowId="sign-up-or-in"
      onSuccess={(e) => {
        console.log("Logged in!");
        console.log(e.detail)
        console.log(e.detail.user.name);
        console.log(e.detail.user.email);
      }}
      onError={(e) => console.log("Could not logged in!")}
      redirectAfterSuccess="/"
    />
  );
};
