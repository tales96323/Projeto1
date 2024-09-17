import React, { useEffect, useState } from "react";

function Home() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Carrega o conteúdo do arquivo index.html na pasta public
    fetch("/index.html")
      .then((response) => response.text())
      .then((data) => {
        setHtmlContent(data);
      })
      .catch((error) => console.error("Erro ao carregar index.html:", error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default Home;
