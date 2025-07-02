"use client";
import React, { useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { communityAPI } from "@/lib/api";

export default function TiptapEditor({ onChange, onImageError }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false }),
    ],
    content: "<p></p>",
    onUpdate: ({ editor }) => {
      if (onChange) onChange(editor.getHTML());
    },
  });

  // Image upload handler
  const handleImageUpload = useCallback(async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 100 * 1024) {
      onImageError && onImageError("In-content image must be less than 100kb");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await communityAPI.uploadCommunityImage(formData);
      editor.chain().focus().setImage({ src: response.data.url }).run();
    } catch (err) {
      onImageError && onImageError(err.message || "Upload failed");
    }
  }, [editor, onImageError]);

  return (
    <div className="border rounded p-2 bg-white">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => editor && editor.chain().focus().toggleBold().run()} className="px-2 py-1 border rounded text-sm">B</button>
        <button type="button" onClick={() => editor && editor.chain().focus().toggleItalic().run()} className="px-2 py-1 border rounded text-sm">I</button>
        <button type="button" onClick={() => editor && editor.chain().focus().toggleUnderline().run()} className="px-2 py-1 border rounded text-sm">U</button>
        <button type="button" onClick={() => editor && editor.chain().focus().toggleHeading({ level: 1 }).run()} className="px-2 py-1 border rounded text-sm">H1</button>
        <button type="button" onClick={() => editor && editor.chain().focus().toggleHeading({ level: 2 }).run()} className="px-2 py-1 border rounded text-sm">H2</button>
        <button type="button" onClick={() => editor && editor.chain().focus().toggleBulletList().run()} className="px-2 py-1 border rounded text-sm">UL</button>
        <button type="button" onClick={() => editor && editor.chain().focus().toggleOrderedList().run()} className="px-2 py-1 border rounded text-sm">OL</button>
        <button type="button" onClick={() => editor && editor.chain().focus().toggleBlockquote().run()} className="px-2 py-1 border rounded text-sm">"</button>
        <button type="button" onClick={() => document.getElementById("tiptap-image-upload").click()} className="px-2 py-1 border rounded text-sm">🖼️</button>
        <input id="tiptap-image-upload" type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
      </div>
      <EditorContent editor={editor} className="min-h-[180px] p-2" />
    </div>
  );
}