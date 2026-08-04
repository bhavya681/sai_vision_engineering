export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

// Simulated response matching logic
export function getAssistantResponse(query: string): string {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes("quote") || lowerQuery.includes("price") || lowerQuery.includes("cost")) {
    return "Pricing depends on the specific equipment and configuration required. I can help you identify the right product, or you can submit a Request Quote and our team can assist you with a detailed quotation.\n\n[Request a Quote](/request-quote)";
  }

  if (lowerQuery.includes("contact") || lowerQuery.includes("reach") || lowerQuery.includes("location") || lowerQuery.includes("where")) {
    return "You can reach our team via email or phone. Our corporate office is located in India.\n\n[Contact Our Team](/contact)";
  }

  if (lowerQuery.includes("product") || lowerQuery.includes("equipment") || lowerQuery.includes("offer") || lowerQuery.includes("sell")) {
    return "Sai Vision Engineering offers a wide range of process equipment including:\n- Glass-Lined Equipment (Reactors, Storage Tanks)\n- Stainless Steel & Alloy Reactors\n- Heat Exchangers & Condensers\n- Agitators & Columns\n\n[Explore Products](/products)";
  }

  if (lowerQuery.includes("service") || lowerQuery.includes("relining") || lowerQuery.includes("inspection")) {
    return "Our flagship service is the **relining of glass-lined reactors**. We also offer customized inspection and maintenance programs, including spark testing and thickness testing, to minimize operational problems.\n\n[Our Capabilities](/capabilities)";
  }

  if (lowerQuery.includes("industries") || lowerQuery.includes("who do you serve")) {
    return "We serve a wide variety of industries requiring highly reliable process equipment, including:\n- Pharmaceuticals\n- Bulk Drugs\n- Dyes & Intermediates\n- Specialty Chemicals\n- Agrochemicals\n\n[Industries We Serve](/industries)";
  }

  if (lowerQuery.includes("iso") || lowerQuery.includes("certif")) {
    return "Yes, Sai Vision Engineering is **ISO 9001:2015 certified**. This certification supports our commitment to consistent quality processes across our products, services, and customer delivery.";
  }
  
  if (lowerQuery.includes("about") || lowerQuery.includes("who are you") || lowerQuery.includes("history")) {
    return "Sai Vision Engineering is a premier manufacturer of high-quality process equipment, specializing in Glass-Lined, Stainless Steel, and exotic alloy machinery. We focus on ethical policies, optimum quality, and on-time delivery.";
  }

  // Fallback
  return "I'm sorry, I don't have verified information about that in my current knowledge base. Please contact our Sai Vision Engineering team directly, and they will be happy to assist you.\n\n[Contact Our Team](/contact)";
}

// Initial Welcome Message
export const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome-1",
  role: "assistant",
  content: "Hello! I'm Sai Vision AI, the virtual assistant for Sai Vision Engineering.\n\nI can help you learn about our company, products, engineering capabilities, industries served, and help you get in touch with our team."
};
