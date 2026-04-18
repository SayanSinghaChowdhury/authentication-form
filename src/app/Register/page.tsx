import Register from "@/components/Register";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcnui/card";

const page = () => {
    return (
       <section className="grid h-[90dvh] place-items-center">
     

      <Card className="w-md">
        <CardHeader>

          <CardTitle className="text-2xl font-semibold text-center">Register</CardTitle>
          </CardHeader>
        <CardContent className="grid place-items-center">
         <Register/>
        </CardContent>
      </Card>

    </section>
    );
}

export default page;