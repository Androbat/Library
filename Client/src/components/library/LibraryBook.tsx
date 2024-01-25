import React, { useState } from "react";

type LibraryBookProps = {
  title: string;
  author: string;
  pages: number;
  status: boolean;
  img?: string;
};

const LibraryBook: React.FC<LibraryBookProps> = ({
  title,
  author,
  pages,
  status,
  img,
}) => {
  const [takeaway, setTakeaway] = useState("");

  return (
    <div className="library__book">
      <div className="library__book-cover">
        <img src={img} alt={`${title} cover`} />
      </div>
      <div className="library__book-body">
        <div className="library__book-title">
          <input type="text" name="title" id="title" value={title} />
        </div>
        <div className="library__book-author">
          <input type="text" name="value" id="value" value={author} />
        </div>

        <div className="library__book-pages">
          <p>pages: {pages}</p>
        </div>
        <div className="library__book-status">
          {status === true ? "Read" : "Not read"}
        </div>
      </div>
      <textarea name="takeaway" className="textArea" id="takeaway" value={takeaway}></textarea>

      <div>
        <button>update</button>
      </div>
    </div>
  );
};

export default LibraryBook;
