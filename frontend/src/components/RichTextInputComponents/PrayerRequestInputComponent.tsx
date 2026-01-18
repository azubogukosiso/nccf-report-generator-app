import Document from "@tiptap/extension-document";
import { BulletList, ListItem } from "@tiptap/extension-list";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";

type PrayerRequestInputComponentProps = {
  setPrayerRequest: React.Dispatch<React.SetStateAction<string>>;
  prayerRequest: string;
};

const PrayerRequestInputComponent = ({
  setPrayerRequest,
  prayerRequest,
}: PrayerRequestInputComponentProps) => {
  const prayerRequestList = prayerRequest
    .split("\n\n\n\n")
    .filter((el) => el !== "");

  const editor = useEditor({
    extensions: [Document, Paragraph, Text, BulletList, ListItem],
    onUpdate: ({ editor }) => {
      setPrayerRequest(editor.getText());
    },
    content: prayerRequest
      ? `<ul>${prayerRequestList.map((t) => `<li>${t}</li>`).join("")}</ul>`
      : `<ul>
            <li></li>
          </ul>`,
  });

  return (
    <div className="bg-white w-1/2 p-2 rounded-lg h-[250px] overflow-auto relative">
      <div className="flex justify-between mb-2 sticky top-0 bg-gray-100 z-1 p-2 w-[30%] rounded-lg">
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="p-1 font-bold text-white transition-all bg-blue-600 rounded-lg cursor-pointer focus:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" />
          </svg>
        </button>

        <button
          onClick={() => editor.chain().focus().splitListItem("listItem").run()}
          className="p-1 font-bold text-white transition-all bg-blue-600 rounded-lg cursor-pointer focus:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path d="M12 10.0858L7.20712 5.29291L5.79291 6.70712L12 12.9142L18.2071 6.70712L16.7929 5.29291L12 10.0858ZM18 17L6.00001 17L6.00001 15L18 15V17Z" />
          </svg>
        </button>

        <button
          onClick={() => {
            editor.chain().focus().sinkListItem("listItem").run();
          }}
          className="p-1 font-bold text-white transition-all bg-blue-600 rounded-lg cursor-pointer focus:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path d="M10.0858 12L5.29291 16.7929L6.70712 18.2071L12.9142 12L6.70712 5.79291L5.29291 7.20712L10.0858 12ZM17 6.00002L17 18H15L15 6.00002L17 6.00002Z" />
          </svg>
        </button>

        <button
          onClick={() => editor.chain().focus().liftListItem("listItem").run()}
          className="p-1 font-bold text-white transition-all bg-blue-600 rounded-lg cursor-pointer focus:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path d="M13.9142 12L18.7071 7.20712L17.2929 5.79291L11.0858 12L17.2929 18.2071L18.7071 16.7929L13.9142 12ZM7 18V6.00001H9V18H7Z" />
          </svg>
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default PrayerRequestInputComponent;
