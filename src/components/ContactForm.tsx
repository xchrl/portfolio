import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { t } = useTranslation("contact");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID as string,
        process.env.EMAILJS_TEMPLATE_ID as string,
        e.target,
        { publicKey: process.env.REACT_APP_PUBLIC_KEY }
      )
      .then(
        () => {
          console.log("success");
        },
        () => {
          console.log("failed");
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <Input type="text" id="text" name="user_name" placeholder={t("name")} />
      <Input
        type="email"
        id="email"
        name="user_email"
        placeholder={t("email")}
      />
      <Textarea
        name="message"
        placeholder={t("message")}
        className="sm:col-span-2"
      />
      <Button type="submit" className="sm:col-span-2">
        {t("submit")}
      </Button>
    </form>
  );
}
