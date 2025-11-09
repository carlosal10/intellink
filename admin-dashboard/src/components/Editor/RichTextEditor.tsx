import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Editor, EditorState, ContentState, convertFromHTML } from 'draft-js';
import 'draft-js/dist/Draft.css';

interface RichTextEditorProps {
  onChange: (content: string) => void;
  initialContent?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ onChange, initialContent }) => {
  const editorRef = useRef<Editor | null>(null);

  const [editorState, setEditorState] = useState<EditorState>(() => {
    if (initialContent) {
      const blocks = convertFromHTML(initialContent);
      const contentState = ContentState.createFromBlockArray(blocks.contentBlocks, blocks.entityMap);
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  });

  useEffect(() => {
    if (initialContent) {
      const blocks = convertFromHTML(initialContent);
      const contentState = ContentState.createFromBlockArray(blocks.contentBlocks, blocks.entityMap);
      setEditorState(EditorState.createWithContent(contentState));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [initialContent]);

  const handleEditorChange = (newState: EditorState) => {
    setEditorState(newState);
    const content = newState.getCurrentContent().getPlainText();
    onChange(content);
  };

  return React.createElement(
    "div",
    { className: "rich-text-editor" },
    React.createElement(Editor, {
      editorState,
      onChange: handleEditorChange,
      ref: editorRef
    })
  );
};

export default RichTextEditor;
