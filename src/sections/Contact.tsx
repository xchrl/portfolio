import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function Contact() {
  const contactInfo = [
    { Icon: FaPhoneAlt, data: "+48 731 354 856" },
    { Icon: IoIosMail, data: "michalbronicki85@gmail.com" },
  ];

  return (
    <section className="bg-background text-foreground" id="contact">
      <div className="m-4 p-4 flex flex-col justify-center items-center gap-4 text-center">
        <header>
          <h3 className="text-3xl sm:text-4xl md:text5xl font-bold">
            So, wanna get in touch?
          </h3>
          <p className="text-lg sm:text-xl">
            That's great! Contact me through one of the options listed below or
            by filling out this form.
          </p>
        </header>
        <main className="w-full flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
            {contactInfo.map(({ Icon, data }, index) => (
              <Card
                className="flex flex-row justify-center items-center w-full shadow-lg"
                key={index}
              >
                <CardContent className="flex flex-row justify-center gap-4 w-full px-0">
                  <Icon className="text-2xl" />
                  <p>{data}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Separator />
          <div className="w-full">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="text" id="text" placeholder="Full name" />
              <Input type="email" id="email" placeholder="Email" />
              <Textarea placeholder="Message" className="sm:col-span-2" />
              <Button className="sm:col-span-2">Submit</Button>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Contact;
