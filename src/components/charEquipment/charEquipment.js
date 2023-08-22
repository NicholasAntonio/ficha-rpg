import React, { useState, useEffect } from 'react';

const TextareaWithLocalStorage = ({ title }) => {
  const [content, setContent] = useState('');

  // Função para atualizar o estado do conteúdo quando o textarea muda
  const handleTextareaChange = (event) => {
    setContent(event.target.value);
  };

  // Efeito para carregar o conteúdo do localStorage ao montar o componente
  useEffect(() => {
    const savedContent = localStorage.getItem(title);
    if (savedContent) {
      setContent(savedContent);
    }
  }, [title]);

  // Efeito para salvar o conteúdo no localStorage sempre que o conteúdo mudar
  useEffect(() => {
    localStorage.setItem(title, content);
  }, [title, content]);

  return (
    <div>
      <h2>{title}</h2>
      <textarea
        value={content}
        onChange={handleTextareaChange}
        rows={30}
        cols={80}
      />
    </div>
  );
};

export default TextareaWithLocalStorage;
