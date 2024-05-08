import React from "react";
import { TagsInput } from "react-tag-input-component";

export default function TagNames({value}) {
    return (
        <div style={{ maxWidth: "300px" }}>
          <TagsInput
            value={value}
            // onChange={v => handleTagChange(v.slice(0, 5))}
            name="participants"
          />
          <em className="text-xs text-slate-400	">Press enter para adicionar nova tag</em>
        </div>
      );
}