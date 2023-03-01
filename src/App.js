import './App.css';
import React, { useState, useEffect } from 'react';
import {marked} from 'marked';

function App() {
  const [text, setText] = useState(`
    # H1
    ## H2
    [title](https://www.example.com)
    \`code\`
    \`\`\`
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25
    }
    \`\`\`

    - First item
    - Second item
    - Third item

    > blockquote

    ![alt text](image.jpg)

    **bold text**
  `);

  marked.setOptions({
    breaks: true
  })

  function handleChange(event) {
    setText(event.target.value);
  }

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(text);
  }, [text]);

  return (
    <div className='container'>
      <div className='editor-container'>
        <textarea id="editor" className='editor' value={text} onChange={handleChange}></textarea>
      </div>
      <div className='preview-container'>
        <div id="preview" className='preview'></div>
      </div>
    </div>
  );
}

export default App;
