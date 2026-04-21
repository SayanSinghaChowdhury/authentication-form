import Login from "@/components/Login";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login|Auth Form System",
	description: "Login page of Auth Form App",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
     

      <Card className="w-md">
        <CardHeader>

          <CardTitle className="text-2xl font-semibold text-center">Login</CardTitle>
          </CardHeader>
        <CardContent className="grid place-items-center">
          <Login/>
        </CardContent>
      </Card>

    </section>
  );
};

export default page;
