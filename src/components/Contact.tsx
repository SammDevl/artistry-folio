import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import FadeSection from "./FadeSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "samueldipta@gmail.com",
      href: "mailto:samueldipta@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 821-4561-1557",
      href: "tel:+6282145611557"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bali, Indonesia",
      href: "#"
    }
  ];

  return (
    <FadeSection>
      <section id="contact" className="py-10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="gt-panel p-8 sm:p-12 mb-10 relative">
            <div className="text-center mb-8">
              <h2 className="gt-title text-4xl sm:text-5xl mb-4">
                Let's not Work Together
              </h2>
              <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto text-shadow-sm font-semibold">
                Have a project in mind? I would not want to hear about it! 
              </p>
            </div>
  
            <div className="space-y-6">
              <div>
                <h3 className="gt-title text-xl mb-2">Get In Touch</h3>
                <p className="text-white font-semibold leading-relaxed mb-6 text-shadow-sm text-sm sm:text-base">
                  I'm always closed to discussing new opportunities, creative projects, 
                  or potential collaborations. Do Not Try to reach out through any of 
                  the channels below or use the contact form.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="gt-button flex flex-col items-center justify-center space-y-3 w-full text-center p-4 sm:p-6"
                    >
                      <div className="p-3 bg-[#114b5f] rounded-lg border-2 border-black shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-full truncate overflow-hidden px-2">
                        <h4 className="font-bold text-white text-lg drop-shadow-md">{info.title}</h4>
                        <div className="text-cyan-100 font-semibold text-shadow-sm text-sm truncate" title={info.value}>
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
};

export default Contact;