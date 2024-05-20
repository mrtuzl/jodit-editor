import './App.css';
import { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';


function App() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleContent = (e) => {
    e.preventDefault();
    setContent(e.target.value)
  }


  const config = {
    height: 1122, // A4 height in pixels
    width: 793,  // A4 width in pixels
    showPlaceholder: false,
    defaultLineHeight: 1.5,
    autofocus: true,
    beautyHTML: true,
    toolbarButtonSize: "medium",
    buttons: [
      'source', '|',
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'ul', 'ol', '|',
      'outdent', 'indent', '|',
      'font', 'fontsize', 'brush', 'paragraph', '|',
      'image', 'video', 'table', 'link', '|',
      'align', 'undo', 'redo', '|',
      'hr', 'eraser', 'copyformat', '|',
      'fullsize', 'selectall', 'print', '|',
      'about'
    ]
  };

  return (
    <div className="container-wrap d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="shadow m-3">
        <JoditEditor 
          ref={editor}
          value={content}
          config={config}
          onChange={() => handleContent}
          onBlur={newContent => setContent(newContent)} 
        />
      </div>
    </div>
  );
}

export default App;