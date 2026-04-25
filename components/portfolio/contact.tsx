"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { PERSONAL_INFO } from "@/lib/data";
import { Send, Mail, Phone, MessageCircle, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // Simulate form submission
    await emailjs.send(
  "service_5k3be8b",
  "template_fm6ayao",
  {
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    message: formData.message,
  },
  "c4SdqAY9g05E-DdST"
);

setStatus({
  type: "success",
  message: "Message sent! I'll get back to you soon.",
});
    setFormData(initialFormState);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/50 via-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get In Contact
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-500">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <CardDescription>
                    Feel free to reach out through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ContactInfoItem
                    icon={<Mail className="w-5 h-5" />}
                    label="Email"
                    value={PERSONAL_INFO.email}
                    href={`mailto:${PERSONAL_INFO.email}`}
                  />
                  <ContactInfoItem
                    icon={<Phone className="w-5 h-5" />}
                    label="Phone"
                    value={PERSONAL_INFO.phone}
                    href={`tel:${PERSONAL_INFO.phone}`}
                  />
                  <ContactInfoItem
                    icon={<MessageCircle className="w-5 h-5" />}
                    label="WhatsApp"
                    value="Send a message"
                    href={PERSONAL_INFO.whatsapp}
                  />
                  <ContactInfoItem
                    icon={<Linkedin className="w-5 h-5" />}
                    label="LinkedIn"
                    value="Connect with me"
                    href={PERSONAL_INFO.linkedin}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card animate-in fade-in slide-in-from-right-8 duration-500 delay-150">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I{"'"}ll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                        <Input
                          id="firstName"
                          placeholder="Your first name"
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          required
                        />
                      </Field>
                    </FieldGroup>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                        <Input
                          id="lastName"
                          placeholder="Your last name"
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          required
                        />
                      </Field>
                    </FieldGroup>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </Field>
                    </FieldGroup>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="phone">Phone (Optional)</FieldLabel>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 234 567 890"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                        />
                      </Field>
                    </FieldGroup>
                  </div>

                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea
                        id="message"
                        placeholder="Feel free to reach out..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                      />
                    </Field>
                  </FieldGroup>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Spinner className="mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {status.type && (
                    <div
                      className={`flex items-center gap-2 p-3 rounded-lg ${
                        status.type === "success"
                          ? "bg-green-500/10 text-green-600"
                          : "bg-red-500/10 text-red-600"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span className="text-sm">{status.message}</span>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors group"
    >
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-foreground font-medium">{value}</p>
      </div>
    </a>
  );
}
