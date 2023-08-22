import  { useState, useEffect } from 'react';
import "./charEquipment.css"

const TextareaWithLocalStorage = ({ title, icon }) => {
  const [content, setContent] = useState('');

  
  const handleTextareaChange = (event) => {
    setContent(event.target.value);
  };

  
  useEffect(() => {
    const savedContent = localStorage.getItem(title);
    if (savedContent) {
      setContent(savedContent);
    }
  }, [title]);


  useEffect(() => {
    localStorage.setItem(title, content);
  }, [title, content]);

  return (
    <div className='text-area'>
     
      <h2>{title}{icon && icon }</h2>
      <textarea
        value={content}
        onChange={handleTextareaChange}
        rows={60}
        cols={80}
      />
    </div>
  );
};

export default TextareaWithLocalStorage;
