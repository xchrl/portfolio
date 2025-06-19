import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation("contact");

  const contactInfo = [
    { Icon: FaPhoneAlt, data: "+48 731 354 856" },
    { Icon: IoIosMail, data: "michalbronicki85@gmail.com" },
  ];

  return (
    <section id="contact">
      <div className="container px-4 mx-auto my-8 flex flex-col items-center gap-8 text-center">
        <header className="flex flex-col gap-4">
          <h3 className="text-3xl sm:text-4xl font-bold">
            {t("So, wanna get in touch")}
          </h3>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </header>
        <main className="w-full flex flex-col lg:flex-row gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 w-full lg:w-1/2">
            {contactInfo.map(({ Icon, data }, index) => (
              <Card
                className="flex flex-row justify-center items-center w-full shadow-lg"
                key={index}
              >
                <CardContent className="flex flex-row justify-center gap-4 w-full px-0 font-bold">
                  <Icon className="text-2xl" />
                  <p>{data}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* For some reason without this <div> wrapper the <Separator /> takes the width of 1px? */}
          <div>
            <Separator orientation="vertical" />
          </div>
          <div className="w-full lg:w-1/2">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="text" id="text" placeholder={t("Full name")} />
              <Input type="email" id="email" placeholder={t("Email")} />
              <Textarea placeholder={t("Message")} className="sm:col-span-2" />
              <Button className="sm:col-span-2">{t("Submit")}</Button>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Contact;
