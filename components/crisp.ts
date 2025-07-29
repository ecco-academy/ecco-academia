"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  const crispWebsiteId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
  useEffect(() => {
    Crisp.configure(crispWebsiteId || "");
  });

  return null;
};

export default CrispChat;
