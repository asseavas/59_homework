import React, { useState, useEffect } from 'react';

interface Props {
  id: number;
  name: string;
  removeMovie: (id: number) => void;
  updateMovieName: (id: number, newName: string) => void;
}

const MovieCard: React.FC<Props> = React.memo(({ id, name, removeMovie, updateMovieName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  useEffect(() => {
    setNewName(name);
  }, [name]);

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
          {isEditing ? (
            <button className="btn btn-success ms-auto" onClick={handleSave}>Save</button>
          ) : (
            <>
              <button className="btn btn-primary ms-auto" onClick={handleEdit}>Edit</button>
              <button className="btn btn-danger ms-2" onClick={() => removeMovie(id)}>Delete</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return nextProps.name === prevProps.name;
});

export default MovieCard;