import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

function Contact() {
  const { t } = useTranslation("contact");
  // 1024px - lg

  const contactInfo = [
    { Icon: Phone, data: "+48 731 354 856" },
    { Icon: Mail, data: "michalbronicki85@gmail.com" },
  ];

  return (
    <section id="contact">
      <div className="container px-4 lg:px-8 xl:px-16 mx-auto my-8 flex flex-col items-center gap-8 text-center">
        <header className="flex flex-col gap-2">
          <h3 className="text-2xl sm:text-3xl font-bold">{t("title")}</h3>
          <p className="text-lg sm:text-2xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </header>
        <main className="w-full flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {contactInfo.map(({ Icon, data }, index) => (
              <Card
                className="flex flex-row justify-center items-center w-full shadow-lg"
                key={index}
              >
                <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-0 font-bold">
                  <Icon className="text-2xl" />
                  <p>{data}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* For some reason without this <div> wrapper the <Separator /> takes the width of 1px? */}
          <div>
            <Separator orientation="horizontal" />
          </div>
          <div className="w-full self-center">
            <ContactForm />
          </div>
        </main>
      </div>
    </section>
  );
}

export default Contact;
