import React, { useEffect, useState } from "react";

function Home() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        const response = await fetch("/index.html"); // Acessando a pasta public diretamente
        if (response.ok) {
          const data = await response.text();
          setHtmlContent(data);
        } else {
          console.error("Erro ao carregar index.html:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao carregar index.html:", error);
      }
    };

    fetchHtml();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default Home;
