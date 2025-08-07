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
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Let's not Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I would not want to hear about it! 
            </p>
          </div>

  
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always closed to discussing new opportunities, creative projects, 
                  or potential collaborations. Do Not Try to reach out through any of 
                  the channels below or use the contact form.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <a 
                          href={info.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          
        </div>
      </section>
    </FadeSection>
  );
};

export default Contact;