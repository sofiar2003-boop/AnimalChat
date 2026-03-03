import React from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

function MediaViewer({ media, currentIndex, onClose, onPrev, onNext, userAvatar }) {
  // Si no hay medios ni avatar de usuario, no renderizamos nada
  if (!media && !userAvatar) return null;

  // Determinar qué mostrar
  let currentItem;
  if (userAvatar) {
    currentItem = { type: 'image', url: userAvatar };
  } else if (media && media.length > 0) {
    currentItem = media[currentIndex];
  } else {
    return null; // Caso de seguridad
  }

  return (
    <div className="media-viewer-overlay" onClick={onClose}>
      <div className="media-viewer-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Botón Cerrar */}
        <button className="close-btn" onClick={onClose}><FaTimes /></button>

        {/* Navegación (solo si hay múltiples medios y no es el avatar del usuario) */}
        {media && media.length > 1 && onPrev && (
          <button className="nav-btn prev-btn" onClick={onPrev}><FaChevronLeft /></button>
        )}
        {media && media.length > 1 && onNext && (
          <button className="nav-btn next-btn" onClick={onNext}><FaChevronRight /></button>
        )}

        {/* Renderizado del Medio */}
        {currentItem.type === 'image' ? (
          <img src={currentItem.url} alt="Vista ampliada" className="viewer-image" />
        ) : (
          <video src={currentItem.url} autoPlay loop muted playsInline className="viewer-video" />
        )}

        {/* Indicador de posición (opcional) */}
        {media && media.length > 1 && (
          <div className="media-counter">
            {currentIndex + 1} / {media.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default MediaViewer;