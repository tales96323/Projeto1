import React, { useEffect, useState } from "react";

function Home() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Ajusta o caminho para ser relativo à raiz do aplicativo
    fetch(`${process.env.PUBLIC_URL}/index.html`)
      .then((response) => response.text())
      .then((data) => {
        setHtmlContent(data);
      })
      .catch((error) => console.error("Erro ao carregar index.html:", error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default Home;
