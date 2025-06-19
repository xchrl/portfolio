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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          console.log("Success!");
        },
        (err) => {
          console.error("Failed to send form: ", err);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <Input type="text" id="text" name="name" placeholder={t("name")} />
      <Input type="email" id="email" name="email" placeholder={t("email")} />
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
