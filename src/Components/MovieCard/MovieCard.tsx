import React, { useState } from 'react';

interface Props {
  id: number;
  name: string;
  removeMovie: (id: number) => void;
  updateMovieName: (id: number, newName: string) => void;
}

const MovieCard: React.FC<Props> = React.memo(({ id, name, removeMovie, updateMovieName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    updateMovieName(id, newName);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex gap-3 align-items-center">
          <div>
            {isEditing ? (
              <textarea
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            ) : (
              <span>{name}</span>
            )}
          </div>
          <button className="btn btn-primary ms-auto" onClick={handleEdit} disabled={isEditing}>Edit</button>
          {isEditing && <button className="btn btn-success ms-2" onClick={handleSave}>Save</button>}
          <button className="btn btn-danger ms-2" onClick={() => removeMovie(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return nextProps.name === prevProps.name;
});

export default MovieCard;
